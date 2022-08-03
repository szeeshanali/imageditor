
    const dpi = 72;
    const letterPageSize = {
        width:(8.5 * dpi),
        height:(11 * dpi)
    }
    const enabledSaveInBrowser = true; 

    const layerHtml = `<div class="media d-block d-flex layer-item object-options" id='{id}'  >
    <div class="d-block mg-sm-r-10 img"> <img src="{src}" class="wd-40" alt="Image" ></div>
    <small class="d-sm-flex layer-label">Layer {index}</small>
    <div class="d-sm-flex layers-controls" style="display:none !important">
    <i class='ion-ios-copy-outline duplicate main-tool-button'  id='duplicate' title='duplicate' ></i>
    <i class='ion-ios-upload-outline bring-fwd' title="move up" id="bring-fwd" ></i>
    <i class='ion-ios-download-outline bring-back' title="move down" id="bring-back" ></i>
    <i class='ion-ios-arrow-thin-up' title="top" ></i>
    <i class='ion-ios-arrow-thin-down' title="down" ></i>
    <i class='ion-ios-trash-outline delete main-tool-button' id='delete' title='delete' ></i>
    </div>
</div>` 


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
    $loader = $("#loader");
    $btnTemplate            = $("#btnTemplate");
    $btnMyProject =          $("#btnMyProject");



    /**maintool */
    $btnRotate = $("#rotate");
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


   
    // Events: 

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

                   
                 },function(o,object){
                  //  console.log(o,object)
                 })
        })
    }

    function loadSVGTemplate(id)
    {
        var group = [];
        $.get(`/api/svg-templates/${id}`, function (data) {
            const svgBase64 = data.base64;
            if(!svgBase64)
            {
                alert("Error loading Template");
                return;}
  
            //canvas.setDimensions({width: letterPageSize.width, height: letterPageSize.height});
            //canvasPrev.setDimensions({width: letterPageSize.width, height: letterPageSize.height});
            canvas.clear();
            fabric.loadSVGFromURL(svgBase64,function(objects,options) {      
                var loadedObjects = new fabric.Group(group);
                var templateWidth = options.viewBoxWidth;
                var templateHeight = options.viewBoxHeight;      
                canvas.setDimensions({width: templateWidth, height: templateHeight});
                //canvas.orignalBackgroundImage = loadedObjects;                      
                canvas.setBackgroundImage(loadedObjects,canvas.renderAll.bind(canvas));
                canvas.renderAll();
                loadedObjects.center().setCoords();
               
            },function(item, object) {
                    object.set('id',item.getAttribute('id'));
                    group.push(object);
            });
        })

    }

    function initUIEvents()
    {
        $btnRotate.on("click",function(){
            var selectedObj = canvas.getActiveObject();
            if(!selectedObj)
            {
                toast("Please select an object.");
                return; 
            }
            var curAngle = selectedObj.angle;
            selectedObj.rotate(curAngle+15);
            canvas.renderAll();

        })

        $btnTemplate.on("click",function(e)
        { 
            $loader.removeClass("hidden")
            window.location.href = '/app/workspace';        
        })
        $btnMyProject.on("click",function(e)
        { 
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
                    canvas.clear();
                   // var img = canvasPrev._objects[0];
                    for(var i=0;i<logos.length;i++)
                    {
                      var logo = logos[i]; 
                      
                      var object = fabric.util.object.clone(img);

                     var left = logo.left + logo.group.left + logo.group.width /2 ;
                     var top = logo.top + logo.group.top + logo.group.height /2 ;


                      object.scaleToWidth(object.width/2)
                      object.set("top", top);
                      object.set("left",  left);
                    
                    
                       canvas.add(object).renderAll();
                      
                    }
                    closeRepeatDesignPreview();
                });
                 

        })

        $rotateObj.on("click",function(){

            var a = 10; 

            alert(a);
        })
       
        
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
            var canvasSVGLogo = canvas.backgroundImage._objects[0];
         //   canvasSVGLogo.scaleToWidth(canvasPrev.width);
            if(!canvasSVGLogo || canvas._objects.length == 0)
            {
                alert("No logo found in SVG template");
            return; }
           
            $repeatImageCtrl.show();
            $clientMainCanvas.parent().fadeOut();
            $canvasPrev.parent().fadeIn();

            // var object = fabric.util.object.clone(canvasSVGLogo);
           
           
            //     canvasPrev.setBackgroundImage(object,canvasPrev.renderAll.bind(canvasPrev));
            // canvasPrev.renderAll();

           //canvasSVGLogo.scaleToWidth(canvas.width/1.5);
            canvasPrev.loadFromJSON(JSON.stringify(canvas), function(o){
                var object = fabric.util.object.clone(canvasSVGLogo);
                object.scaleToWidth(object.width * factor)
                canvasPrev.setDimensions({
                    width:object.width - object.left,
                    height:object.height - object.top})

                // let scale = object.width;

              

                canvasPrev.setBackgroundImage(object,canvasPrev.renderAll.bind(canvasPrev));
                canvasPrev.renderAll();
              
            });
        }
        else {
            closeRepeatDesignPreview();
        }
    }
  

    function initCanvasEvents(){
    
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
        $pageTitle.addClass("hidden");
        $("#maintools > .image-tools").removeClass("hidden");
        addLayer(o);
        enabledRepeatDesignButton(o);
    }

    function enabledRepeatDesignButton(o){
        $btnRepeatDesign.find(".disabled").removeClass("disabled");
    }

    // Layers: 
    function addLayer(o){
        var temp = layerHtml; 
        var obj = o.target;
        var src = obj._element?.currentSrc;
        if(obj.text) {
            src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABHNJREFUeJzt3LurHGUcx+FvcqKiJohGBBGjRPHyB4imE0u72Akix1bsBAsriyiKokQ7CQoKaiGKCpGAjSI2golXhIR4v3USbzExicViiCHndy55d95zdp4H3iYLM7+d3c+emd0hCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJsq73AFOyMckVmd3ntxp9n+T33kNQ25hkV5IjSU5Yg64jSZ5NcuGirxJdrEuyJ/3fKGNfu+Mv96p0W/q/OazJurV+qdaO9b0HaOiW3gNw0rbeA7QyS4Fc0HsATjqv9wCtzFIg0JxAoCAQKGzoPcAqcSDJd0mON9zmukx+rLy+4TbP5MskP2by7VEr65NcmeTahtuksx1Z/teRLyW5YcpzbUtycAWzLbb2J7lpyrPfmOSVFcz20JTnYgWWE8ixJHcPONvWTG7DaBXHoSRbBpz/nkyO2egCGes1yANJXhhwfweTvNhwe88n+bbh9payvwcH3N+qMcZAvkqys8N+9zbc1r6G21qqJzNslKvCGAPZmeSfDvs90nBbRxtuazn7fKbDfrsaWyCHkjzXe4g1bFeSP3oPMaSxBbIryW+9h1jDfs3IPmDGFMjxjPAUYQqeTtvfXFa1MQXyepKvew8xAw4keav3EEMZUyBP9R5ghozmWI4lkA+TfNB7iBnybvp81Ty4WQrkcPHY4xnRefMATiR5onj8z6EGmbZZCuSjBf79nSSvDjnISLyc5L0FHlvotaCjczK5s/XUe4L2Jtncc6hTzKfdvVh3DTv6gi5L8mn+P9tnSeZ6DsXCrkvyfia3kzya1fVf0Mxn9gJJkk2ZnMJ+k8lfFLfIsyLzmc1AZtosXYNAcwKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIZDhzDbfldRuIAz2crQ23dXXDbUF3c0n2JznRaH0eH27MkPvTLo7/1n2DPgOYkvkkx9I+kKNJ7hzuaUA7m5LckWR32odx+nozyfYkGwd5ZrBCV2Vy2rMnyd+Zfhinr8NJ3k5yb5ItU36usKi5JNuSPJLkkwwfxGLr4yQ7ktwcF/QM6KIkjyX5Jf0jWOr6OcnDmZz6wdRck+Rg+r/hV7r2Z3IqCM2dm+SL9H+Tn+3al2RD42MD2Z7+b+5W6/bGx2ZmuXhbukt6D9DQ5t4DMHsuzeRit/en/9muH5Jc3PjYQJLJRfobmfyK3fuNvtx1NMlrcaPjsqzrPcAadX6Sy7N2TlGPJ/kpyV+9BwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM7kX8fwvIWqet/rAAAAAElFTkSuQmCC';
        }
        
         temp = temp.replace("{id}",obj.id)
         .replace("{src}",src)
         .replace("{_id}",obj.id)
         .replace("{index}", obj.index+1);
         $layers.prepend(temp);
         onLayerAdded($(`#${obj.id}`),o);
        
    }



    function onLayerAdded($elem, obj){
        $elem.on("click",function($event){
            onLayerSelected($elem, obj);
        })
    }

    function onLayerSelected($elem, obj){
        showLayerControls($elem, obj);        
    }
    function showLayerControls($elem, obj)
    {
        var target = obj.target;
        var preObj = canvas.selectedObj?.target;
        if(preObj?.id != target.id)
        { 
            $(`#${target.id} .layers-controls`).show();
            $(`#${target.id}`).addClass("selected-layer");
            canvas.discardActiveObject();
            canvas.requestRenderAll();
            canvas.setActiveObject(canvas.item(target.index));
            if(preObj)
            {
                $(`#${preObj.id} .layers-controls`)
                .attr("style","display:none !important");
                $(`#${preObj.id}`).removeClass("selected-layer");                
            }
            canvas.selectedObj = obj;
        }

        initLayerEvents($elem, obj)
       
    }

  

  

    // UI events:



    $btnSaveDesign.on("click",()=>{
       
        $.ajax({
            type: "POST",
            url: "/app/client/save-design",

            data: {   
                thumbBase64  : canvas.toDataURL(
                    {
                    format: "png",
                    left: 0,
                    top: 0,
                    width: canvas.width/4,
                    height: canvas.height/4,
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
              debugger;
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
                  canvas.add(img);       
                
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
       

     function initLayerEvents($elem, obj) {
        $deleteItem = $("#layers .delete"); 
        $duplicateItem = $("#layers .duplicate"); 
        $moveUpItem = $("#layers .bring-fwd"); 
        $moveDownItem = $("#layers .bring-back"); 

        $deleteItem.on("click",function(){
            //$(this).parent().parent().remove();
            var selectedObj = canvas.selectedObj.target;
            canvas.remove(selectedObj).renderAll();
            $(`#${selectedObj.id}`).remove();

           
        });
        $duplicateItem.on("click",function(){});
        $moveUpItem.on("click",function(){});
        $moveDownItem.on("click",function(){});
        //$moveTopItem.on("click",function(){});
        //$moveBottomItem.on("click",function(){});

      }
        
      function showloader(show){
        if(show)
        { }
      }
      initUIEvents();
      initCanvasEvents();
      

    //   const savedCanvas = saveInBrowser.load('kp-editor');
    //   if (savedCanvas) {
    //     canvas.loadFromJSON(savedCanvas, canvas.renderAll.bind(canvas));
    //   }
      



