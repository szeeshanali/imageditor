
    const dpi = 72;
    const letterPageSize = {
        width:(8.5 * dpi),
        height:(11 * dpi)
    }
    const enabledSaveInBrowser = true; 
    var state = {
        isPreviewCanvas:false
    }

    const layerHtml = `<div class="media d-block d-flex layer-item object-options" data-index='{index}' id='{id}'  >
    <div class="d-block mg-sm-r-10 img"> <img src="{src}" class="wd-40" alt="Image" ></div>
    <small class="d-sm-flex layer-label">Layer {index}</small>
    <div class="d-sm-flex layers-controls" style="display:none !important">
    <i class='ion-ios-copy-outline duplicate main-tool-button'   title='duplicate' ></i>
    <i class='ion-ios-upload-outline bring-fwd' title="move up" id="bring-fwd" ></i>
    <i class='ion-ios-download-outline bring-back' title="move down" id="bring-back" ></i>
    <i class='ion-ios-arrow-thin-up' title="top" ></i>
    <i class='ion-ios-arrow-thin-down' title="down" ></i>
    <i class='ion-ios-trash-outline delete main-tool-button' title='delete' ></i>
    </div>
   </div>`; 


    //vars 
    $btnDownloadPDF = $("#btn-download-pdf"); 
    $btnSaveDesign = $("#btn-save-design"); 

    $btnUploadImage = $("#btn-upload-img"); 
    $btnUploadImageHidden = $("#btn-upload-img-hidden"); 
    $layers = $("#layers");
    $btnRepeatDesign = $("#repeatdesign");
    $clientMainCanvas =  $("#client-main-canvas");
    $canvasPrev =  $("#client-main-canvas-logo");
    $repeatImageCtrl = $("#repeat-image-ctrl");
    $btnCancelRepeatDesign =  $("#repeat-image-ctrl .cancel");
    $btnApplyRepeatDesign =  $("#repeat-image-ctrl .apply");
    $templatepanel              =   $("#templatepanel");
    $clipartPanel       =   $("#clipartmenu");
    $btnTextMenu        =   $("#btnTextMenu");
    $textarea           =   $("#textarea");
    $btnAddText         =   $("#btnAddText");
    $btnTextSize        =   $("#btnTextSize");
    $saveBrowserTxt     =   $("#save-browser-txt");
    $rotateObj          =   $("#rotateObj");
    $previewSaveDesign  =   $("#prevesavdesign");
    $pageTitle          =   $("#page-title");
    $loader             =   $("#loader");
    $btnTemplate            = $("#btnTemplate");
    $btnMyProject =          $("#btnMyProject");
    $btnDeleteMyProject     = $("#myprojects .delete");


    /**maintool */
    $btnRotate = $("#rotate");
    $btnFlipX = $("#btnFlipX");
    $btnFlipY = $("#btnFlipY");
    $btnGrayScale = $("#btnGrayScale");
    $btnUndo = $("#btnUndo");
    $btnRedo = $("#btnRedo");
    /** */
    
    /** workspace */
    $imgCtrl = $("#workspace-right-panel .img-ctrl");
    /** */


    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerStyle = 'circle';
    fabric.Object.prototype.borderColor = '#000';
    fabric.Object.prototype.cornerColor = '#494699';
    fabric.Object.prototype.cornerStrokeColor = '#000';
    fabric.Object.prototype.cornerSize = 5;
    fabric.Object.prototype.padding = 0;

    var canvas = new fabric.Canvas("client-main-canvas",{
        preserveObjectStacking:true
    })
    var canvasPrev = new fabric.Canvas("client-main-canvas-logo",{
        preserveObjectStacking:true
    });

    var enabledTextMode = false; 

    var filters = ['grayscale', 'invert', 'remove-color', 'sepia', 'brownie',
    'brightness', 'contrast', 'saturation', 'vibrance', 'noise', 'vintage',
    'pixelate', 'blur', 'sharpen', 'emboss', 'technicolor',
    'polaroid', 'blend-color', 'gamma', 'kodachrome',
    'blackwhite', 'blend-image', 'hue', 'resize'];

   
    // Events: 

    function deleteMyProject(id)
    {
        alert("delete")
        $.ajax({
            type: "DELETE",
            url: `/api/client/project/${id}`,           
            success:function(res){
              toast("Deleted successfully!");
            },
            error:function(res){
              toast("Error whiel deleting.");
            }
        })
    }

    function loadProject(id){
        var group = [];
        $.get(`/api/project/${id}`, function (data) {
            const json = data.json;
            if(!json)
            { return;}
                var object = JSON.parse(json); 
                canvas.clear();
                canvas.loadFromJSON(json, function() {
                    canvas.setWidth(8.5*dpi);
                    canvas.setHeight(11*dpi);
                    canvas.renderAll.bind(canvas);
                    $imgCtrl.each(function(){
                        $(this).removeClass("hidden");
                      })
                },function(o,object){
                  //  console.log(o,object)
                 })
        })
    }

    function loadSVGTemplate(id)
    {
        var group = [];
        state.isPreviewCanvas = false; 
        $.get(`/api/svg-templates/${id}`, function (data) {
            const svgBase64 = data.base64;
            if(!svgBase64)
            {
                alert("Error loading Template");
                return;}
  
            canvas.clear();
            fabric.loadSVGFromURL(svgBase64,function(objects,options) {      
                var loadedObjects = new fabric.Group(group);
                var templateWidth = options.viewBoxWidth;
                var templateHeight = options.viewBoxHeight;      
                canvas.setDimensions({width: templateWidth, height: templateHeight});
                canvas.setBackgroundImage(loadedObjects,canvas.renderAll.bind(canvas));
                canvas.renderAll();
                loadedObjects.center().setCoords();
               
            },function(item, object) {
                    object.set('id',item.getAttribute('id'));
                    group.push(object);
            });
        })

    }

    function applyFilter(index, filter) {
       
        var obj = canvas.getActiveObject();
         if(!obj.filterIndex && obj.filterIndex != 0)
         {
            obj.filters[index] = true && filter;
            obj.filterIndex = index;
         }else{
            obj.filters[index] = false && filter;
            obj.filterIndex = null;
         }
           
      
        obj.applyFilters();     
        canvas.renderAll();
      }

      function applyFilterValue(index, prop, value) {
        var obj = canvas.getActiveObject();
        if (obj.filters[index]) {
          obj.filters[index][prop] = value;
          obj.applyFilters();
          canvas.renderAll();
        }
      }

    function initUIEvents()
    {

        rotateObject(); 
        cropObject();
        flipXYObject();
        grayscaleObject();
        brightnessObject();
        contrastObject();
      

        $btnUndo.on("click", ()=>{

            // try {
            //     let undoList = this.history.getValues().undo;
            //     if (undoList.length) {
            //       let current = undoList[undoList.length - 1];
            //       this.history.undo();
            //       current && this.canvas.loadFromJSON(JSON.parse(current), this.canvas.renderAll.bind(this.canvas))
            //     }
            //   } catch (_) {
            //     console.error("undo failed")
            //   }
            
        })

        $btnRedo.on("click", ()=>{

            // alert("undo"); 
            // canvas.redo();
            
        })


        $btnFlipX.on("click", () => {
            var selectedObj = canvas.getActiveObject(); 
            selectedObj.set('flipX', !selectedObj.flipX);
            canvas.renderAll();
          });

        //   $btnFlipY.click(() => {
        //     canvas.activeSelection.set('flipY', !canvas.activeSelection.flipY);
        //     this.canvas.renderAll();
        //   });

        $btnRotate.on("click",function(){
            var selectedObj = canvas.getActiveObject();
            if(!selectedObj)
            {
                toast("Please select an object.");
                return; 
            }
            var curAngle = selectedObj.angle;
            selectedObj.rotate(curAngle+90);
            canvas.renderAll();
        })

        $btnTemplate.on("click",function(e)
        { 
            $loader.removeClass("hidden")
            window.location.href = '/app/workspace';        
        })

        $btnMyProject.on("click",function(e)
        { 
           
       

            // $.get("",)
            $loader.removeClass("hidden")
            window.location.href = '/app/projects';        
        })

        $btnTextMenu.on("click",function(e)
        { enabledTextMode = true; })

        $repeatImageCtrl.hide();
        $canvasPrev.parent().hide();

        $btnRepeatDesign.on("click",function(e){
            openRepeatDesignPreview(e);
        })

        $btnCancelRepeatDesign.on("click",function(e){
            //$("#repeatdesign .toggle-on").removeClass("active");
            //$("#repeatdesign .toggle-off").addClass("active");
            closeRepeatDesignPreview();
            //closeRepeatDesignPreview();
        })

        $("#templatepanel .template").on("click",(e)=>{
            enabledTextMode = false; 
            var id = e.currentTarget.id;
             canvas.clear();
             loadSVGTemplate(id);
        
        });

        // $(`#templatepanel #del{}`).on("click",(e)=>{
        //     e.stopPropagation();
        //     enabledTextMode = false; 
        //     var id = e.currentTarget.id;
        //     if(id) {
        //         id = id.replace("del","");
        //     }
        //      canvas.clear();
            
        
        // });


        /// MyProject Click 
        $("#myprojects .template").on("click",(e)=>{
          
            e.stopPropagation();
            enabledTextMode = false; 
            var id = e.currentTarget.id;
             canvas.clear();
             loadProject(id);
        
        });

         // MyProject Delete 
        $("#myprojects .delete").on("click",(e)=>{
          
            e.stopPropagation();
            enabledTextMode = false; 
            var id = e.currentTarget.id;
             canvas.clear();
             deleteMyProject(id);
        
        });

        $("#clipartmenu .clipart img").on("click",(e)=>{
        enabledTextMode = false; 
        var id = e.currentTarget.src;
        fabric.Image.fromURL(id, function(img) {
            var img1 = img.set({ left: 0, top: 0});
            img1.globalCompositeOperation = 'source-atop';

            canvas.add(img1); 
            });

        });

        

        $btnApplyRepeatDesign.on("click",function(e){
          
            var dataURL = canvasPrev.toDataURL({
                format: "png",
                left: 0,
                top: 0,
                width: canvas.width ,
                height: canvas.height ,
            });
           
            
                var logos = canvas.backgroundImage._objects; 

                
                fabric.Image.fromURL(dataURL, (img) => {
                    canvas.remove(...canvas.getObjects());

                  //  canvas.clear();
                   // var img = canvasPrev._objects[0];
                    for(var i=0;i<logos.length;i++)
                    {
                      var logo = logos[i]; 
                      
                      var object = fabric.util.object.clone(img);

                     var left = logo.left + logo.group.left/2 + logo.group.width /2 ;
                     var top = logo.top + logo.group.top/2 + logo.group.height /2 ;


                      object.scaleToWidth(object.width/2)
                      object.set("top", top);
                      object.set("left",  left);
                    
                    
                       canvas.add(object).renderAll();
                      
                    }
                    closeRepeatDesignPreview();
                });
                 

        })

       
       
        this.configUndoRedoStack();
        
    }

    function closeRepeatDesignPreview(){
        $repeatImageCtrl.hide();         
        $clientMainCanvas.parent().fadeIn();
        $canvasPrev.parent().fadeOut();  
    }

    function openRepeatDesignPreview(e){
        var txt = $(e.currentTarget).find(".active").text();
        var factor = 2; 
        if(txt == "ON"){
            state.isPreviewCanvas = true; 
            var canvasSVGLogo = canvas.backgroundImage._objects[0];
         //   canvasSVGLogo.scaleToWidth(canvasPrev.width);
            if(!canvasSVGLogo || canvas._objects.length == 0)
            {
                alert("No logo found in SVG template");
            return; }
           
            $repeatImageCtrl.show();
            $clientMainCanvas.parent().fadeOut();
            $canvasPrev.parent().fadeIn();
            canvasPrev.loadFromJSON(JSON.stringify(canvas), function(o){
                var object = fabric.util.object.clone(canvasSVGLogo);
                object.scaleToWidth(object.width * factor)
                canvasPrev.setDimensions({
                    width:object.width - object.left,
                    height:object.height - object.top})
                canvasPrev.setBackgroundImage(object,canvasPrev.renderAll.bind(canvasPrev));
                canvasPrev.renderAll();
              
            });
        }
        else {
            closeRepeatDesignPreview();
        }
    }
  

    function initCanvasEvents(){
        canvas.on("selection:updated",(o)=>{
            const id = o.selected[0].id; 
            var elem = $(`#${id}`)[0];
            clearLayerSelection();

            $(`#${id} .layers-controls`).show();
            $(`#${id}`).addClass("selected-layer");
        
            //layerSelectEventHandler(elem,true);
          })
          
          canvas.on("selection:created",(o)=>{
            const id = o.selected[0].id; 
            var elem = $(`#${id}`)[0];
            clearLayerSelection();
            $(`#${id} .layers-controls`).show();
            $(`#${id}`).addClass("selected-layer");
        
            //layerSelectEventHandler(elem,true);
          })    

       
        canvas.selectedLayerId = null; 
        canvas.on("object:added",(o)=>{
            o.target.id = `obj${canvas._objects.length}`;
            o.target.index = canvas._objects.length-1;
            onObjectAdded(o);
        })
        canvas.on("object:modified",(o)=>{
            onCanvasModified(o);
        })

        initCanvasTextEvents();    
    }

    function onCanvasModified(o)
    {
        if(!enabledSaveInBrowser)
        {return;}

        setTimeout(function(){
           
            saveInBrowser.save('kp-editor', canvas.toJSON());
            $saveBrowserTxt.fadeIn();
            setTimeout(function(){
                $saveBrowserTxt.fadeOut("slow");
            },2000)
        },2000)

    }

    function onObjectAdded(o)
    {
      //  $pageTitle.addClass("hidden");
      //  $("#maintools > .image-tools").removeClass("hidden");
        addLayer(o);
        enabledRepeatDesignButton(o);
    }

    function enabledRepeatDesignButton(o){
        $btnRepeatDesign.find(".disabled").removeClass("disabled");
    }

    // Layers: 
    function addLayer(o){
        var temp = layerHtml;    
        $layers.html();
        var layers = "";
        for(var i=canvas._objects.length-1;i>=0; i--)
        {
            var obj = canvas._objects[i];
            var src = obj._element?.currentSrc;
            if(obj.text) {
                src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABHNJREFUeJzt3LurHGUcx+FvcqKiJohGBBGjRPHyB4imE0u72Akix1bsBAsriyiKokQ7CQoKaiGKCpGAjSI2golXhIR4v3USbzExicViiCHndy55d95zdp4H3iYLM7+d3c+emd0hCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJsq73AFOyMckVmd3ntxp9n+T33kNQ25hkV5IjSU5Yg64jSZ5NcuGirxJdrEuyJ/3fKGNfu+Mv96p0W/q/OazJurV+qdaO9b0HaOiW3gNw0rbeA7QyS4Fc0HsATjqv9wCtzFIg0JxAoCAQKGzoPcAqcSDJd0mON9zmukx+rLy+4TbP5MskP2by7VEr65NcmeTahtuksx1Z/teRLyW5YcpzbUtycAWzLbb2J7lpyrPfmOSVFcz20JTnYgWWE8ixJHcPONvWTG7DaBXHoSRbBpz/nkyO2egCGes1yANJXhhwfweTvNhwe88n+bbh9payvwcH3N+qMcZAvkqys8N+9zbc1r6G21qqJzNslKvCGAPZmeSfDvs90nBbRxtuazn7fKbDfrsaWyCHkjzXe4g1bFeSP3oPMaSxBbIryW+9h1jDfs3IPmDGFMjxjPAUYQqeTtvfXFa1MQXyepKvew8xAw4keav3EEMZUyBP9R5ghozmWI4lkA+TfNB7iBnybvp81Ty4WQrkcPHY4xnRefMATiR5onj8z6EGmbZZCuSjBf79nSSvDjnISLyc5L0FHlvotaCjczK5s/XUe4L2Jtncc6hTzKfdvVh3DTv6gi5L8mn+P9tnSeZ6DsXCrkvyfia3kzya1fVf0Mxn9gJJkk2ZnMJ+k8lfFLfIsyLzmc1AZtosXYNAcwKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIZDhzDbfldRuIAz2crQ23dXXDbUF3c0n2JznRaH0eH27MkPvTLo7/1n2DPgOYkvkkx9I+kKNJ7hzuaUA7m5LckWR32odx+nozyfYkGwd5ZrBCV2Vy2rMnyd+Zfhinr8NJ3k5yb5ItU36usKi5JNuSPJLkkwwfxGLr4yQ7ktwcF/QM6KIkjyX5Jf0jWOr6OcnDmZz6wdRck+Rg+r/hV7r2Z3IqCM2dm+SL9H+Tn+3al2RD42MD2Z7+b+5W6/bGx2ZmuXhbukt6D9DQ5t4DMHsuzeRit/en/9muH5Jc3PjYQJLJRfobmfyK3fuNvtx1NMlrcaPjsqzrPcAadX6Sy7N2TlGPJ/kpyV+9BwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM7kX8fwvIWqet/rAAAAAElFTkSuQmCC';
            }
            layers += temp.replace(/{id}/ig,obj.id)
            .replace("{src}",src)
            .replace("{_id}",obj.id)
            .replace(/{index}/ig, i+1);
        }
        if(layers != "")
        {
            $layers.html(layers);  
            $("#layers .layer-item").on("click",function() {
            layerSelectEventHandler(this, false);
            })
        }
        else{ $layers.html("Empty! please upload an image.");}

            }

            function layerSelectEventHandler($elem, selected)
            {
            showLayerControls($elem,selected);
            }
            function clearLayerSelection()
            {
              for(var i =0;i<canvas._objects.length;i++)
              {
                var id = canvas._objects[i].id;
                $(`#${id} .layers-controls`).attr("style","display:none !important");
                $(`#${id}`).removeClass("selected-layer");
              }
             
            }
            function showLayerControls($elem, selected)
                {
                    var target = $elem;
                    var index = parseInt($elem.getAttribute("data-index"))-1;        
                    var preObj = canvas.selectedObj?.target;
                    if(preObj?.id != target.id)
                    { 
                        $(`#${target.id} .layers-controls`).show();
                        $(`#${target.id}`).addClass("selected-layer");
                       
                        canvas.discardActiveObject();
                        canvas.requestRenderAll();
                        canvas.setActiveObject(canvas.item(index));
                        if(preObj)
                        {
                            $(`#${preObj.id} .layers-controls`)
                            .attr("style","display:none !important");
                            $(`#${preObj.id}`).removeClass("selected-layer");                
                        }
                        canvas.selectedObj = canvas.item(index);
                        
                    }
            
                    initLayerEvents($elem)
                   
            }
            function initLayerEvents($elem) {
            var id = $elem.id;
            
              $(`#${id} .delete`).on("click",function(e){
                e.stopPropagation();
                 canvas.remove(canvas.selectedObj).renderAll();
                 addLayer();
              })
            
              $(`#${id} .duplicate`).on("click",function(e){
                e.stopPropagation();
                var object = fabric.util.object.clone(canvas.getActiveObject());
                object.set("top", object.top+5);
                object.set("left", object.left+5);
                canvas.add(object);
              })
            
              $(`#${id} .bring-fwd`).on("click",function(e){
                e.stopPropagation();
                var obj = canvas.getActiveObject();
               
                canvas.bringForward(obj)
                canvas.renderAll();
                var elem = $(`#${id}`);
                elem.prev().insertAfter(elem);
              })
            
              
            
            }
            


  

  

    // UI events:



    $btnSaveDesign.on("click",()=>{
       
        $.ajax({
            type: "POST",
            url: "/app/client/save-design",

            data: {   
                thumbBase64  : canvas.toDataURL(
                    {
                        format: 'jpg',
                        quality: 0.8
                    }
                ),  
                json    : JSON.stringify(canvas.toJSON()) },
            success:function(res){
              toast("Design has been Saved.");
            },
            error:function(res){
              toast("Error while saving design.");
            }
        })
    })
    $btnDownloadPDF.on("click",()=>{
        var pdf = null;   
        var pdf = new jsPDF("p", "mm", "letter");              
              var width = canvas.width; 
              var height = canvas.height;
             // pdf = new jsPDF('p', 'pt',[width, height]);
              width = pdf.internal.pageSize.getWidth();
              height = pdf.internal.pageSize.getHeight();
              canvas.renderAll.bind(canvas)();
              var imgData = canvas.toDataURL('image/png');
              pdf.addImage(imgData, 'PNG', 0, 0, width, height);
              //var dataURL = canvas.toDataURL();
              //pdf.addImage(dataURL, 'SVG', 0, 0);
              pdf.save("download.pdf");
    }); 

    $btnUploadImage.on("click",()=>{
            $btnUploadImageHidden.click();
    })

    $btnUploadImageHidden.on("change",(e)=>{
        if (e.target.files.length === 0) return;
        processFiles(e.target.files);
        $btnUploadImageHidden.val('');
    })

    
    const processFiles = (files) => {
        if (files.length === 0) return;
        const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml']
    
        for (let file of files) {
          // check type
          if (!allowedTypes.includes(file.type)) continue
          let reader = new FileReader()
          // handle svg
          //if (file.type === 'image/svg+xml') {
            reader.onload = (e) => {
                fabric.Image.fromURL(e.target.result, (img) => {
                  img.scaleToHeight(300);
                  img.set({left:150,top:150})
                  img.globalCompositeOperation = 'source-atop';
                    if(state.isPreviewCanvas)
                    {
                        canvasPrev.add(img); 
                    }else{
                        canvas.add(img); 
                    }
                        
                  $imgCtrl.each(function(){
                    $(this).removeClass("hidden");
                  })
                 })
            }
            reader.readAsDataURL(file)
            continue
         // }
    
        }
      }




      // Text: 
    
      function toast(message) {

        var $toast = $("#snackbar").addClass("show");
        $toast.text(message);
        setTimeout(function(){ 
            $toast.removeClass("show")    
        }, 3000);
    }

    function initCanvasTextEvents(){
            let isDrawingText = false;
             var textLeft = 50; 
             var textTop = 100;
             $btnAddText.on("click",function(){
                var text = $textarea.val(); 
                canvas.add(new fabric.IText(text, { 
                    left: (textLeft += 20),
                    top: (textTop += 20),
                    fontFamily: 'arial black',
                    fill: '#333',
                    fontSize: 18
                }));
            })

            $btnTextSize.on("change",function(){
                canvas.getActiveObject().set("fontSize", this.value);
                canvas.renderAll();
            })

    }
       
    function initLayerEvents($elem) {
            var id = $elem.id;
            
              $(`#${id} .delete`).on("click",function(e){
                e.stopPropagation();
                 canvas.remove(canvas.selectedObj).renderAll();
                 addLayer();
              })
            
              $(`#${id} .duplicate`).on("click",function(e){
                e.stopPropagation();
                var object = fabric.util.object.clone(canvas.getActiveObject());
                object.set("top", object.top+5);
                object.set("left", object.left+5);
                canvas.add(object);
              })
            
              $(`#${id} .bring-fwd`).on("click",function(e){
                e.stopPropagation();
                var obj = canvas.getActiveObject();
               
                canvas.bringForward(obj)
                canvas.renderAll();
                var elem = $(`#${id}`);
                elem.prev().insertAfter(elem);
              })
            
              
            
    }
    this.configUndoRedoStack = () => {
        this.history = window.UndoRedoStack();
        const ctrZY = (e) => {
          const key = e.which || e.keyCode;
  
          if (e.ctrlKey && document.querySelectorAll('textarea:focus, input:focus').length === 0) {
            if (key === 90) this.undo()
            if (key === 89) this.redo()
          }
        }
        document.addEventListener('keydown', ctrZY)
    }
      
        
      
 function flipXYObject()
 {

  $("#flipW").on("click", () => {
    var selectedObj = canvas.getActiveObject(); 
    if(!selectedObj)
    {
        toast("Please select an object.");
        return; 
    }
    selectedObj.set('flipX', !selectedObj.flipX);
    canvas.renderAll();
  });



  $("#flipH").click(() => {
    var selectedObj = canvas.getActiveObject(); 
    if(!selectedObj)
    {
        toast("Please select an object.");
        return; 
    }
    selectedObj.set('flipY', !selectedObj.flipY);
    canvas.renderAll();

  });



      // $deleteItem = $(`#${obj.id} .delete`); 
      // $duplicateItem = $(`#${obj.id} .duplicate`); 
      // $moveUpItem = $("#layers .bring-fwd"); 
      // $moveDownItem = $("#layers .bring-back"); 

      // $deleteItem.on("click",function(){
      //     //$(this).parent().parent().remove();
      //     var selectedObj = canvas.selectedObj.target;
      //     canvas.remove(selectedObj).renderAll();
      //     $(`#${selectedObj.id}`).remove();           
      // });


      // $duplicateItem.on("click",function(){
      //     var object = fabric.util.object.clone(canvas.getActiveObject());
      //     object.set("top", object.top+5);
      //     object.set("left", object.left+5);
      
      //     canvas.add(object);

      // });
      // $moveUpItem.on("click",function(){});
      // $moveDownItem.on("click",function(){});
      //$moveTopItem.on("click",function(){});
      //$moveBottomItem.on("click",function(){});
 }
function rotateObject()
{
  $(`#rotate`).on("click",function(e){
    var selectedObj = canvas.getActiveObject();
    if(!selectedObj)
    {
        toast("Please select an object.");
        return; 
    }
    var curAngle = selectedObj.angle + 90;
    selectedObj.rotate(curAngle);
    if(curAngle > 270)
    { selectedObj.angle = 0; }
    canvas.renderAll();
  })
}
function cropObject(){
  // $(`#crop`).on("click",function(e){
  //   var selectedObj = canvas.getActiveObject();
  //     if(!selectedObj)
  //     {
  //         toast("Please select an object.");
  //         return; 
  //     }


  //     var pos = [0, 0];
  //     var c = document.getElementById('admin-main-canvas');
  //     var r = c.getBoundingClientRect();
  //     pos[0] = r.left;
  //     pos[1] = r.top;
      
  //     var mousex = 0;
  //     var mousey = 0;
  //     var crop = false;
  //     var disabled = false;
      
  //     //console.log(pos);
      
  //     var el = new fabric.Rect({
  //         //left: 100,
  //         //top: 100,
  //         fill: 'transparent',
  //         originX: 'left',
  //         originY: 'top',
  //         stroke: '#ccc',
  //         strokeDashArray: [2, 2],
  //         opacity: 1,
  //         width: 1,
  //         height: 1
  //     });
      
  //     el.visible = false;
  //     canvas.add(el);
  //     var object;
    
      
  //     canvas.on("mouse:down", function (event) {
  //         if (disabled) return;
  //         el.left = event.e.pageX - pos[0];
  //         el.top = event.e.pageY - pos[1];
  //         //el.selectable = false;
  //         el.visible = true;
  //         mousex = event.e.pageX;
  //         mousey = event.e.pageY;
  //         crop = true;
  //         canvas.bringToFront(el);
  //     });
      
  //     canvas.on("mouse:move", function (event) {
  //         //console.log(event);
  //         if (crop && !disabled) {
  //             if (event.e.pageX - mousex > 0) {
  //                 el.width = event.e.pageX - mousex;
  //             }
      
  //             if (event.e.pageY - mousey > 0) {
  //                 el.height = event.e.pageY - mousey;
  //             }
  //         }
  //     });
      
  //     canvas.on("mouse:up", function (event) {
  //         crop = false;
  //    });





  // })

}


function grayscaleObject()
{
  $("#btnGrayscale").on("click", ()=>{
    applyFilter(0, new fabric.Image.filters.Grayscale());         
    applyFilterValue(0, 'mode', 'average');
    
})
}

function brightnessObject()
{
  $("#brightnessVal").text(`(0%)`);  
  $('#brightness-value').on("click",function(){
    applyFilter(5,    new fabric.Image.filters.Brightness({
      brightness: parseFloat($('#brightness-value').val())
    }));
  })

  $('#brightness-value').on("input", function() {   
    var val = this.value; 
    $("#brightnessVal").text(`(${parseInt(val*100)}%)`);
    applyFilterValue(5, 'brightness', parseFloat(val));
  });
}


window.addEventListener("paste",pasteImage);

function pasteImage(event) {
debugger;
    // get the raw clipboardData
    var cbData=event.clipboardData;

    for(var i=0;i<cbData.items.length;i++){

        // get the clipboard item
        var cbDataItem = cbData.items[i];
        var type = cbDataItem.type;

        // warning: most browsers don't support image data type
        if (type.indexOf("image")!=-1) {
            // grab the imageData (as a blob)
            var imageData = cbDataItem.getAsFile();
            // format the imageData into a URL
            var imageURL=window.webkitURL.createObjectURL(imageData);
            fabric.Image.fromURL(imageURL, (img) => {
              //img.scaleToWidth(300);
                canvas.add(img).renderAll();
              })
            // We've got an imageURL, add code to use it as needed
            // the imageURL can be used as src for an Image object
        }
    }
}
function contrastObject()
{
  $("#contrastVal").text(`(0%)`);

  $('#contrast-value').on("click", function() {
  applyFilter(6,    new fabric.Image.filters.Contrast({
    contrast: parseFloat($('#contrast-value').val())
  }))
})

  $('#contrast-value').on("input", function() {
    
    var val = this.value; 
    $("#contrastVal").text(`(${parseInt(val*100)}%)`);
    applyFilterValue(6, 'contrast', parseFloat(val));
  });
}

      initUIEvents();
      initCanvasEvents();
      

    //   const savedCanvas = saveInBrowser.load('kp-editor');
    //   if (savedCanvas) {
    //     canvas.loadFromJSON(savedCanvas, canvas.renderAll.bind(canvas));
    //   }
      



