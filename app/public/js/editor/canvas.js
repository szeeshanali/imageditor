/**
 * Canvas section management of image editor
 */

 function selectLayer(id)
 {
   var index = id.replace("texture",""); 
   var canvas  = document.getElementById('c').fabric;
   canvas.setActiveObject(canvas.item(index));

   setTimeout(function(){
    $(`#${id}`).remove();
   },1000)
   
 }

 
(function () {
  'use strict';

  var layerTemplate = $("#layerItems").html();
  var canvas = function () {
    try {
      // $(`${this.containerSelector} .main-panel`).append(`
      //   <div class="canvas-holder" id="canvas-holder">
      //     <div class="content"><canvas id="c"></canvas>
      //   </div></div>`);
      const fabricCanvas  =  new fabric.Canvas('c',{ preserveObjectStacking: true });
      const fabricCanvasPreview =  new fabric.Canvas('p',{ preserveObjectStacking: true });
      fabricCanvas.originalW = fabricCanvas.width;
      fabricCanvas.originalH = fabricCanvas.height;

      fabricCanvasPreview.originalW = fabricCanvasPreview.width;
      fabricCanvasPreview.originalH = fabricCanvasPreview.height;
      // set up selection style
      fabric.Object.prototype.transparentCorners = false;
      fabric.Object.prototype.cornerStyle = 'circle';
      fabric.Object.prototype.borderColor = '#000';
      fabric.Object.prototype.cornerColor = '#494699';
      fabric.Object.prototype.cornerStrokeColor = '#000';
      fabric.Object.prototype.cornerSize = 5;
      fabric.Object.prototype.padding = 0;

      // retrieve active selection to react state
      fabricCanvas.on('selection:created', (e) => {})
      fabricCanvas.on('selection:updated', (e) => this.setActiveSelection(e.target))
      fabricCanvas.on('selection:cleared', (e) => this.setActiveSelection(null))


      // snap to an angle on rotate if shift key is down
      fabricCanvas.on('object:rotating', (e) => {
        if (e.e.shiftKey) {
          e.target.snapAngle = 15;
        } else {
          e.target.snapAngle = false;
        }
      })

      fabricCanvas.on('object:modified', () => {
        console.log('trigger: modified')
        let currentState = this.canvas.toJSON();
        this.history.push(JSON.stringify(currentState));
      })
      var prevSelectedLayer = null;

      
      fabricCanvas.on('object:added', (o) => {
        if(o.target.id === "sheet")
        { return; }
        var obj = o.target;
     
        fabricCanvasPreview.add(obj).renderAll();
        
        $("#maintools > .image-tools").removeClass("hidden");
         var temp = layerTemplate; 
         var obj = o.target; 
        
          temp = temp.replace("{id}",obj.id)
          .replace("{src}",obj._element?.currentSrc)
          .replace("{_id}",obj.id)
          .replace("{index}", parseInt(obj.index) + 1);
          $("#layers").prepend(temp);
        
          var layerId = `#${obj.id}`;   
           $(layerId).on("click", function() {
              fabricCanvas.setActiveObject(obj);
              fabricCanvas.renderAll()
              $(`${layerId} .layers-controls`).show();
              if(prevSelectedLayer != null)
              { $(`${prevSelectedLayer} .layers-controls`).attr("style","display:none !important"); }            
              prevSelectedLayer = layerId;

            $(`${layerId} .delete`).click(() => {
              fabricCanvas.getActiveObjects().forEach(obj => {
                fabricCanvas.remove(obj);
              });

              fabricCanvas.discardActiveObject().requestRenderAll();
              fabricCanvas.trigger('object:modified')
            });

            $(`${layerId} .delete`).click(() => {
              let clonedObjects = []
              let activeObjects = fabricCanvas.getActiveObjects()
              activeObjects.forEach(obj => {
                obj.clone(clone => {
                  obj.id = `item${fabricCanvas._objects.length}`;
                  obj.index = fabricCanvas._objects.length;
                  fabricCanvas.add(clone.set({
                    strokeUniform: true,
                    left: obj.aCoords.tl.x + 20,
                    top: obj.aCoords.tl.y + 20
                  }));
      
                  if (activeObjects.length === 1) {
                    fabricCanvas.setActiveObject(clone)
                  }
                  clonedObjects.push(clone)
                })
              })
      
              if (clonedObjects.length > 1) {
                let sel = new fabric.ActiveSelection(clonedObjects, {
                  canvas: fabricCanvas,
                });
                fabricCanvas.setActiveObject(sel)
              }
      
              fabricCanvas.requestRenderAll(), fabricCanvas.trigger('object:modified')
            })

            $(`${layerId} .bring-fwd`).click(() => {
              var obj = fabricCanvas.getActiveObject();
              fabricCanvas.bringForward(obj)
              fabricCanvas.renderAll(), fabricCanvas.trigger('object:modified');
            })
            
            $(`${layerId} .bring-back`).click(() => {
              var obj = fabricCanvas.getActiveObject();
              fabricCanvas.sendBackwards(obj)
              fabricCanvas.renderAll(), fabricCanvas.trigger('object:modified');
            })
      
           
            //fabricCanvas.remove(obj);
            //$(this).remove();
          })
          
      })

      fabricCanvas.on('object:removed', (o) => {
        //var obj = o.target;       
        //$(`#${obj.cacheKey}`).remove();
      })

      const savedCanvas = saveInBrowser.load('canvasEditor');
      if (savedCanvas) {
        fabricCanvas.loadFromJSON(savedCanvas, fabricCanvas.renderAll.bind(fabricCanvas));
      }

// repeat design


      // move objects with arrow keys
      (() => document.addEventListener('keydown', (e) => {
        const key = e.which || e.keyCode;
        let activeObject;

        if (document.querySelectorAll('textarea:focus, input:focus').length > 0) return;

        if (key === 37 || key === 38 || key === 39 || key === 40) {
          e.preventDefault();
          activeObject = fabricCanvas.getActiveObject();
          if (!activeObject) {
            return;
          }
        }

        if (key === 37) {
          activeObject.left -= 1;
        } else if (key === 39) {
          activeObject.left += 1;
        } else if (key === 38) {
          activeObject.top -= 1;
        } else if (key === 40) {
          activeObject.top += 1;
        }

        if (key === 37 || key === 38 || key === 39 || key === 40) {
          activeObject.setCoords();
          fabricCanvas.renderAll();
          fabricCanvas.trigger('object:modified');
        }




      }))();

      // delete object on del key
      (() => {
        document.addEventListener('keydown', (e) => {
          const key = e.which || e.keyCode;
          if (
            key === 46 &&
            document.querySelectorAll('textarea:focus, input:focus').length === 0
          ) {

            fabricCanvas.getActiveObjects().forEach(obj => {
              fabricCanvas.remove(obj);
            });

            fabricCanvas.discardActiveObject().requestRenderAll();
            fabricCanvas.trigger('object:modified')
          }
        })
      })();

// load default template 
      (()=>{
        
        fabricCanvas.clear();
       //canvaspreview.globalCompositeOperation   = 'source-atop';
       fabricCanvas.globalCompositeOperation          = 'source-atop';
       fabricCanvasPreview.globalCompositeOperation          = 'source-atop';
       fabricCanvas.setDimensions({width:531.2, height:704});
       fabric.loadSVGFromURL(`http://localhost:3000/api/svg-templates/FSHEART6`,function(objects,options){
        var grp = fabric.util.groupSVGElements(objects,options);
        grp.scaleToHeight(fabricCanvas.height);
        fabricCanvas.setBackgroundImage(grp, fabricCanvas.renderAll.bind(fabricCanvas));
        grp.center();
        fabricCanvas.renderAll();

        fabricCanvasPreview.setDimensions({width:objects[0].width, height:objects[0].height});
        fabricCanvasPreview.setBackgroundImage(objects[0], fabricCanvasPreview.renderAll.bind(fabricCanvasPreview));
        fabricCanvasPreview.renderAll();
      })})();

      setTimeout(() => {
        let currentState = fabricCanvas.toJSON();
        this.history.push(JSON.stringify(currentState));
      }, 1000);

      document.getElementById("c").fabric = fabricCanvas;
      return fabricCanvas;
    } catch (_) {
      console.error("can't create canvas instance");
      return null;
    }
  }
  
  window.ImageEditor.prototype.initializeCanvas = canvas;
})();