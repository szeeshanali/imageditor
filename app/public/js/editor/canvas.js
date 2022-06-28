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
      const fabricCanvas = new fabric.Canvas('c');
      fabricCanvas.originalW = fabricCanvas.width;
      fabricCanvas.originalH = fabricCanvas.height;

      // set up selection style
      fabric.Object.prototype.transparentCorners = false;
      fabric.Object.prototype.cornerStyle = 'square';
      fabric.Object.prototype.borderColor = '#999';
      fabric.Object.prototype.cornerColor = '#999';
      fabric.Object.prototype.cornerStrokeColor = '#999';
      fabric.Object.prototype.cornerSize = 10;
      fabric.Object.prototype.padding = 15;
      
     
      // retrieve active selection to react state
      fabricCanvas.on('selection:created', (e) => {})
      fabricCanvas.on('selection:updated', (e) => this.setActiveSelection(e.target))
      fabricCanvas.on('selection:cleared', (e) => this.setActiveSelection(null))

      // var ctx = fabricCanvas.getContext('2d'); 
      // var img = new Image(500, 500);
      // img.src = 'https://i.stack.imgur.com/aTQuf.png';
    
     

      // img.onload = function(){ 
      //   ctx.drawImage(img, 0, 0);
      //   ctx.globalCompositeOperation = 'source-in';
      //   ctx.save();
      //   ctx.restore();
      // };

      // var img2 = new Image(500, 500);
      // img2.src = 'https://i.stack.imgur.com/uVQ0X.jpg';

      // img2.onload = function(){ 
      //   ctx.drawImage(img2, 0, 0);
      //   ctx.save();
      //   ctx.restore();

      // };
      
/// draw the shape we want to use for clipping
//ctx1.drawImage(imgClip, 0, 0);

/// change composite mode to use that shape
//ctx1.globalCompositeOperation = 'source-in';


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
        
        $("#maintools").show();
        var temp = layerTemplate; 
        var obj = o.target; 
        var index = obj.cacheKey.replace("texture","");
        
        temp = temp.replace("{id}",obj.cacheKey)
        .replace("{src}",obj._element.currentSrc)
        .replace("{_id}",obj.cacheKey)
        .replace("{index}", parseInt(index) + 1);
          $("#layers").prepend(temp);
        // layer click handler. 
          
          var layerId = `#${obj.cacheKey}`;   
          $(layerId).on("click", function() {

            fabricCanvas.setActiveObject(obj);
            fabricCanvas.renderAll()

            $(`${layerId} .layers-controls`).show();

            if(prevSelectedLayer != null)
            { $(`${prevSelectedLayer} .layers-controls`).attr("style","display:none !important"); }
            
            prevSelectedLayer = layerId;

            $(`#select-panel #delete`).click(() => {
              fabricCanvas.getActiveObjects().forEach(obj1 => fabricCanvas.remove(obj1)); 
              fabricCanvas.discardActiveObject().requestRenderAll(); 
              fabricCanvas.trigger('object:modified');
              fabricCanvas.renderAll()
            });

            $(`#select-panel #duplicate`).click(() => {
              let clonedObjects = []
              let activeObjects = fabricCanvas.getActiveObjects()
              activeObjects.forEach(obj => {
                obj.clone(clone => {
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
            //fabricCanvas.remove(obj);
            //$(this).remove();
          })
          
      })

      fabricCanvas.on('object:removed', (o) => {
        var obj = o.target; 
        alert(obj.cacheKey);
        alert("removed");
        $(`#${obj.cacheKey}`).remove();
      })

      const savedCanvas = saveInBrowser.load('canvasEditor');
      if (savedCanvas) {
        fabricCanvas.loadFromJSON(savedCanvas, fabricCanvas.renderAll.bind(fabricCanvas));
      }

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