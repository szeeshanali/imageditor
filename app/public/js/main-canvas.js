// main canvas. 
// zeeshan01@gmail.com
var selectedTemplateId = 'default';

//#toolbar
const    $btnToolbarLarger   =   $("#btnToolbarLarger"); 
const    $btnToolbarSmaller  =   $("#btnToolbarSmaller");
const    $btnToolbarRotate   =   $("#btnToolbarRotate");
const    $btnToolbarFlip     =   $("#btnToolbarFlip");
const    $btnToolbarDelete    =   $("#btnToolbarDelete");   
const    $btnTextFormatAndAlignments = $("#workspace-right-panel .txt-ctrl .text-decoration");
//# 1. Issue Fixed:  scaleToWidth not working with rotation.

$btnToolbarLarger.on("click",function(e){
    e.preventDefault();
    let obj = canvas.getActiveObject();
    if(!obj)
    {  toast("Please select an object");
        return; }
    let inc = 20;
    let w = obj.getScaledWidth()+inc;
    let h = obj.getScaledHeight()+inc; 
    let originalAngle = obj.angle;
    obj.angle = 0;     
    
    if(obj.type === 'i-text' || obj.type === 'curved-text')
    { obj.fontSize =  parseInt(obj.fontSize)+2; }
    else{ 
        obj.scaleToWidth(w);
        obj.scaleToHeight(h);
     }  

    obj.angle = originalAngle;
    obj.setCoords();
    canvas.renderAll();
    onToolbarClick(canvas,this); 
})

//# 1. Issue Fixed:  scaleToWidth not working with rotation.

$btnToolbarSmaller.on("click",function(e){
    e.preventDefault();
    let obj = canvas.getActiveObject();
    if(!obj)
    {  toast("Please select an object");
        return; }
    let inc = 20;
    let w = obj.getScaledWidth()-inc;
    let h = obj.getScaledHeight()-inc; 
    let originalAngle = obj.angle;
    obj.angle = 0;
    if(obj.type === 'i-text' || obj.type === 'curved-text')
    {obj.fontSize = parseInt(obj.fontSize)-2;
    }else{
        obj.scaleToWidth(w); 
        obj.scaleToHeight(h); 
    } 
    obj.angle = originalAngle;
    obj.setCoords();
    canvas.renderAll();
    onToolbarClick(canvas,this);

})
$btnToolbarDelete.on("click",function(e){
    let __canvas =  state.isPreviewCanvas?canvasPrev:canvas;
    deleteItemFromCanvas(__canvas);
})

$btnToolbarRotate.on("click",function(e){
    $(`#rotate`).trigger("click");
    onToolbarClick(canvas,this);
})

$btnToolbarFlip.on("click",function(e){
    e.preventDefault();
    $("#flipW").trigger("click");
    onToolbarClick(canvas,this);
})



//#end toolbar


// layers
$("#collapse-layers").on("click", ".layer-item", function (e) {
    var _canvas = state.isPreviewCanvas ? canvasPrev : canvas;
    // layerSelectEventHandler(this);
    var selected = $(this).index();
    var len = $(layers).children().length;
    _canvas.discardActiveObject().renderAll();
    var obj = _canvas.getObjects().find(i => i.id == this.id);
    _canvas.setActiveObject(obj).renderAll();
    showLayerControls(this);
    $(this).unbind().on("click", ".bring-fwd", function (evt) {
        evt.stopPropagation();
        if (selected > 0) {
            _canvas.bringForward(obj);
            jQuery($(layers).children().eq(selected - 1)).before(jQuery($(layers).children().eq(selected)));
            selected = selected - 1;
        }
    });
    $(this).on("click", ".bring-back", function (evt) {

        evt.stopPropagation();
        if (selected < len-1) {
            _canvas.sendBackwards(obj);
            jQuery($(layers).children().eq(selected + 1)).after(jQuery($(layers).children().eq(selected)));
            selected = selected + 1;
        }
    });
    $(this).on("click", ".duplicate", function (evt) {
     
        evt.stopPropagation();
        let activeObj = _canvas.getActiveObject();
        var t = activeObj.get('type');

         activeObj.clone(function(object){
            if (t == "i-text" || t == "curved-text") {
                object.left = object.left + 10; 
                object.top = object.top + 10; 
                if(t == "curved-text"){
                  object =   curveText(object);
                }else{
                    object = addText(object);
                }


                // object.set("top", object.top + 5);
                // object.set("left", object.left + 5);
                // object.set("id", _canvas._objects.length)
                // object.set("index", _canvas._objects.length-1)
               
            }else
            {
                
                // object.set("top", object.top + 5);
                // object.set("left", object.left + 5);
                // object.set("id", _canvas._objects.length);
                // object.set("index", _canvas._objects.length-1);
                object.set({
                    top     : object.top+5,
                    left    : object.left+5,
                    id      : _canvas._objects.length,
                    index   : _canvas._objects.length-1
                    
                })
                object.set({
                    scaleX:activeObj.scaleX,
                    scaleY:activeObj.scaleY
                })

            }
            _canvas.centerObject(object);
            object.setCoords();

            _canvas.add(object);
            _canvas.renderAll();
        })
        
    });
    $(this).on("click", ".delete", function (evt) {
        evt.stopPropagation();
        _canvas.remove(_canvas.getActiveObject()).renderAll();
        addLayer();

    })

})

//

$("#btnDisplayBorder").on("click",function(e){
    // let mainLogo = canvas.backgroundImage;
    // let preview = canvasPrev.backgroundImage._objects;
    // if(preview){
    //     for(let i=0;i<preview.length;i++){
    //         let o = preview[i]; 
    //         let strokeWidth = e.target.checked?o.originalStrokeWidth:0;
    //         o.strokeWidth = strokeWidth;
    //     }    
    // }
    // let o = mainLogo; 
    // let strokeWidth = e.target.checked?o.originalStrokeWidth:0;
    // o.strokeWidth = strokeWidth;

    // canvas.renderAll();
    // canvasPrev.renderAll();

})

$("#btnDisplayRuler").on("click", function () {
    var style = !($(".ruler").is(':visible'));
    if (style) {
        $('.canvas-container').first().ruler(rulerSettings);
        $(".vRule").height($(".vRule").height()+24);
        $(this).html($(this).html().replace("On", "Off"));
    } else {
        $(".vRule, .hRule").remove();
        $(this).html($(this).html().replace("Off", "On"));
        $(this).addClass('tx-gray-500');
    }
})

$("#btnDisplayGrid").on("click", function (e) {
    if(e.target.checked)
    { $(".grid-lines").show(); }else{
     $(".grid-lines").hide(); }
 })





 function loadSVGTemplate(id,onComplete) {
    
        $loader.removeClass("hidden");
        selectedTemplateId = id;
        var group = [];
        $(".template > .card").each(function(v,i,a){
            $(this).removeClass('selected-template');                
        })

        state.isPreviewCanvas = false;
        $.get(`/api/svg-templates/${id}`, function (data) {
            if (isSessionExpired(data)) {
                return;
            }

            $(`#${data.code} > .card`).addClass('selected-template');

            fabric.loadSVGFromURL(data.base64, function(objects, options) {      

                const svgBase64 = data.base64;
                if (! svgBase64) {
                toast("Error loading Template.");       
                return;
                }
            
            var meta = {};
            if (data.meta) {
                meta = JSON.parse(data.meta);
            }
    
            canvas.clear();
            canvas.templateId = data.code;
            hideWorkspaceControls();
            // loading Big display
            //let logoDisplaySize = $("#workarea").width()-150;// defaults.logoDisplaySize;
            
    
    
                let firstLogo = objects[0];
                let aspectRatio = firstLogo.width/firstLogo.height;
                                
                const workspaceSize = $("#workarea").width() || 500;
                let displayWidth = 500;//(workspaceSize-50)>800?800:workspaceSize-50;                 
                
                let logoDisplayWidth = displayWidth; 
                let logoDisplayHeight = displayWidth/aspectRatio;                 
                
                
                canvas.setBackgroundImage(firstLogo, canvas.renderAll.bind(canvas));
                canvas.backgroundImage.set({
                    left:0,
                    top:0,
                })

                firstLogo.scaleToWidth(logoDisplayWidth);
                firstLogo.setCoords();

              
                canvas.setDimensions({width:logoDisplayWidth,height:logoDisplayHeight});
                canvas.renderAll(); 

                canvas.context = {
                    originalWidth   :   firstLogo.width,
                    originalHeight  :   firstLogo.height,
                    displayWidth    :   canvas.width,
                    displayHeight   :   canvas.height,
                    zoomLevel       :   1,
                    logoWidth       :   firstLogo.width,
                    logoHeight      :   firstLogo.height,
                    sheetWidth      :   options.viewBoxWidth,
                    sheetHeight     :   options.viewBoxHeight,
                    totalLogos      :   objects.length,
                    templateId      :   selectedTemplateId 
                }

                const widthIn = getInch(firstLogo.width); 
                const heightIn = getInch(firstLogo.height);




                $("#canvas-holder").css({"background-color":"#9293cb","padding":"27px"});
                let logoHeight = canvas.getHeight();
                let logoDisplaySize = canvas.getWidth();
    
                loadTemplateDetails(data, objects);

                $(".vRule, .hRule").remove();
                $('.canvas-container').first().ruler(rulerSettings);
                $(".vRule").height(logoHeight+26);
    
            /// show grid lines 
                let labels   = $(".hRule .tickLabel");
                let vlabels   = $(".vRule .tickLabel");
                let labels2   = $(".hRule .tickMajor");
                let vlabels2   = $(".vRule .tickMajor");                
                let isGridLinesEnabled =  $("#btnDisplayGrid").is(":checked");
                let isRulerEnabled =  $("#btnDisplayRuler").is(":checked");
                $("#btnDisplayRuler").prop("checked",true);
                $("#btnDisplayGrid").prop("checked",true);
               
                $(".grid-lines").remove();
                    for(var i=1;i<labels.length;i++)
                    {
                      
                      let pos = $(labels[i]).position();
                      if((pos.left-29) <= canvas.width){
                      $(".canvas-container").first().append(`<div class='grid-lines' style='height:${logoHeight}px;left:${pos.left-29}px; top:0px; '></div>`)
                        if(widthIn<4 && heightIn<4)
                        {
                            for(var j=1;j<labels2.length;j++)
                            {
                                let _pos = $(labels2[j]).position();
                                if((_pos.left)<=canvas.width)
                                {
                                    $(".canvas-container").first().append(`<div class='grid-lines' style='height:${logoHeight}px;left:${_pos.left-29}px; top:0px; '></div>`)
                                }
        
                            }
                        }
                    }
                     

                    }
              
                    for(let i=0;i<(vlabels.length);i++)
                    {
                      
                      let pos = $(vlabels[i]).position();
                      if((pos.top-26) <= canvas.height){
                      $(".canvas-container").first().append(`<div class='grid-lines h-gridlines' style='width:${logoDisplaySize}px;top:${pos.top-26}px; left:0px; border-bottom: solid 1px #666;'></div>`);
                      $(".canvas-container").first().css({width:logoDisplaySize,height:`${logoHeight}px`})

                      if(widthIn<4 && heightIn<4)
                        {
                            
                            for(var j=1;j<vlabels2.length;j++)
                            {
                                let _pos = $(vlabels2[j]).position();
                                if(_pos.top<=canvas.height)
                                {
                                    $(".canvas-container").first().append(`<div class='grid-lines h-gridlines' style='width:${logoDisplaySize}px;top:${_pos.top-26}px; left:0px; border-bottom: solid 1px #666;'></div>`);

                                }
                             
        
                            }
                        }
                      
                      }
                    }
                    if(!isRulerEnabled){
                        $("#btnDisplayRuler").click();
                    }
                    if(!isGridLinesEnabled){
                        $("#btnDisplayGrid").click();
                    }

                    $.get(`/api/svg-templates/${id}`, function (data) {
                        $loader.addClass("hidden");
                        fabric.loadSVGFromURL(data.base64, function(objects, options) {         
                            var obj = fabric.util.groupSVGElements(objects, options);
                           let firstLogo = objects[0];
                            let viewBoxHeight= options.viewBoxHeight;
                            let viewBoxWidth = options.viewBoxWidth;
                            canvasPrev.setBackgroundImage(obj, canvasPrev.renderAll.bind(canvasPrev));           
                            canvasPrev.setDimensions({width:viewBoxWidth,height:viewBoxHeight})
                            canvasPrev.renderAll.bind(canvas); 
                            canvasPrev.meta = {
                                title,
                                _id,
                                code,
                                ref_code,
                                link,
                                created_dt} = data;    
                          },function (item, object) {
                                object.set({ 
                                    fill:"#fff",
                                    originalStrokeWidth  :   object.strokeWidth,
                                    originalStrokeMiterLimit   :   object.strokeMiterLimit,
                                    strokeWidth:0,
                                    strokeMiterLimit:0
                                });
                            })
                        });

              },function (item, object) {
    
                        object.set({
                            fill:"#fff",
                            originalStrokeWidth : object.strokeWidth,
                            originalStrokeMiterLimit  : object.strokeMiterLimit,
                        });
                        object.set({ 
                            strokeWidth:0,
                            strokeMiterLimit:0
                        });

                                      
            })

            if(onComplete){
                onComplete(data)
            };

            });
           
            
    }

    function loadTemplateDetails(data,templateLogos)
    {
        let dpi = 72;
        let meta = {};
        let objects = templateLogos; 
        if (data.meta) {
            meta = JSON.parse(data.meta);
        }
        let svgBase64 = data.base64;
        let logoSize = `${(meta.objectWidth / dpi).toFixed(1)}" x ${((meta.objectHeight || meta.objectWidth) / dpi).toFixed(1)}`;
        let pageSize = `${meta.width/dpi}" x ${meta.height/dpi}"`;
        let pageFormat = getPageFormatByDimensions(meta.width,meta.height); 
        $("#template-info-panel .template-name").text(data.title);
        $("#template-info-panel .page-size").text(pageSize);
        $("#template-info-panel .page-format").text(pageFormat);
        $("#template-info-panel .logo-size").text(logoSize + "''");
        $("#template-info-panel .total-logos").text(objects.length);
        $("#template-info-panel .page-title").text(data.title);
        $("#template-info-panel .ref_code").text(data.ref_code);
        $("#template-info-panel #imgSelectedTemplate").attr("src", svgBase64)
        $(".kk-part-no").text(data.ref_code || "N/A");
        $(".kk-part-link").text(data.link || "N/A");
        $("#rulerLogoSize").text(`${logoSize} x ${logoSize} inches `)
        let reg = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        $("#kp-link").attr("href", reg.test(data.link) ? data.link : "#");
        $("#template-info-panel .webstore-link").attr("href", (data.link || "#"));

        if(!reg.test(data.link))
        {
        $("#kpweblink-panel").addClass("hidden");
        }else{
            $("#kpweblink-panel").removeClass("hidden");
        }

        $("#use-template").unbind().click(function () {
            window.location.href = `/app/workspace/${
                data.code
            }`;
        })

    }

    function previewDesign() { /*
    . Check Design can be previewed. 
    . Hide create design heading and show preview design heading. 
    . Disable Save button. 
    . Hide main canvas. 
    . Show preview canvas.
    . Render preview. 
    . Set Preview State. 
    . Set Wizard
    . Hide Ruler 
    . Hide Grid 
     */
     // 1.
     if (canvas.getObjects().length == 0) {
         toast("Please create your design before preview.");
         return;
     }
 
 
     // 2.
     $("#btnBack").removeClass("hidden");
     $("#btnFinalized").removeClass("hidden");
     $("#btn-step-preview").addClass("hidden");
     $("#btn-step-preview").addClass("btnStartOver");
     
 
     // 3.
     //    $("#btnSave").unbind().click(function(){
     //     toast("Please go back and save your design.");
     //    });
 
     // 4.
     $("#admin-main-canvas").parent().fadeOut();
     $("#client-main-canvas").parent().fadeOut();
     // 5.
     $("#admin-main-canvas-logo").parent().fadeIn();
     $("#client-main-canvas-logo").parent().fadeIn();
     // 6.
     renderPreview();
     // 7.
 
     // 8.
     $(".step-item:nth-child(3)").removeClass("active");
     $(".step-item:nth-child(4)").addClass("active");
 
     menuHighlighter("#menu-preview");
 }
 function backFromPreview() { 
     /**
      * . Hide Back and Finalized Button and show Preview button. 
      * . Enable Save button
      * . Hide Preview Canvas 
      * . Show Main Canvas. 
      * . Clear Preview Canvas. 
      * . Render Main Canvas back to its original state.  
      * . Set Main Canvas State. 
      * . Set Wizard 
      */
 
     menuHighlighter("#menu-upload");
     state.isPreviewCanvas = false;
    
     // 1.
     //$("#workarea").removeAttr("style");
     $("#ruler-ctrl").removeAttr("style");
     $("#btnBack").addClass("hidden");
     $("#btnFinalized").addClass("hidden");
     $("#btn-step-preview").removeClass("hidden");
     $("#create-design-heading").removeClass("hidden");
     $("#preview-design-heading").addClass("hidden");
     $("#ws-btn-save").removeClass("hidden");
     $("#ws-btn-preview").removeClass("hidden");
     $("#ws-btn-back").addClass("hidden");
     $("#previewMsg").addClass("hidden");
     $("#ws-btn-download").addClass("hidden");
     $("#btnStartOverModel").removeClass("hidden");    
     $(".step-item:nth-child(3)").removeClass("active");
     $(".step-item:nth-child(2)").addClass("active");
     $("#canvas-holder").css({"background-color":"#9293cb","padding":"27px"});
     $("#quick-tool").removeClass("hidden");
     // 2.
     // $("#btnSave").unbind().click(function(){
     //     toast("Please go back and save your design.");
     // });
 
     // 3.
     $("#client-main-canvas").parent().fadeIn();
     $("#client-main-canvas-logo").parent().fadeOut();
     $("#admin-main-canvas").parent().fadeIn();
     $("#admin-main-canvas-logo").parent().fadeOut();
    
     //.setZoom(canvas.context.zoomLevel);
     //canvas.setDimensions({width:canvas.context.displayWidth, height:canvas.context.displayHeight})
     //canvas.renderAll();
     // 5.
      //canvasPrev.clear();
     // 6.
     renderMainCanvasOnBackButton()
     // 7.
 
     $(".step-item:nth-child(4)").removeClass("active");
     $(".step-item:nth-child(3)").addClass("active");
 
 }
 function renderPreview() {
     $loader.removeClass("hidden");
     $("#ws-btn-preview").addClass("hidden");
     $("#ws-btn-back").removeClass("hidden");
     $("#ws-btn-download").removeClass("hidden");
     $("#btnStartOverModel").addClass("hidden");
     $("#previewMsg").removeClass("hidden");
     $("#quick-tool").addClass("hidden");
    // $("#client-main-canvas-logo").attr("style","width:80%")
    // $("#admin-main-canvas-logo").attr("style","width:80%")
     /***
    * creating copy of main canvas.
    * extracting objects from main canvas. 
    * removing globalCompositeOperation from all objects of main canvas. 
    * converting main canvas to image/png dataUrl   
    * getting all logos in preview canvas template. 
    * cleanup preview canvas objects. 
    */ 
     canvas.clone(function (clonedCanvas) {
        
         var bg = clonedCanvas.backgroundImage;
         clonedCanvas.backgroundImage.set({
                left:0,
                top:0,
            })
         let logos = canvasPrev.backgroundImage._objects;
         clonedCanvas.backgroundImage = false;

         for (var i = 0; i < clonedCanvas._objects.length; i++) {
             clonedCanvas._objects[i].globalCompositeOperation = null;
             clonedCanvas.renderAll.bind(clonedCanvas)
         }

         
         var dataURL = clonedCanvas.toDataURL({format:"jpg", quality:1, multiplier: 3 });
         
         $("#canvas-holder").removeAttr("style");
         $("#canvas-holder").css({"background-color":"#d8dce3", "padding":"20px","overflow-x":"auto"});
         fabric.Image.fromURL(dataURL, (img) => {
             state.isPreviewCanvas = true;
             canvasPrev.remove(... canvasPrev.getObjects());
             //img.scaleToWidth(canvas.context.originalWidth);
            //let missingPoints = canvas.context.originalWidth - img.getScaledWidth();
             if(logos && logos.length>0)
             {
                let logoWidth = logos[0].width; 
               // img.scaleToWidth(logoWidth+10);
                img.scaleToWidth(logos[0].getScaledWidth());
                img.setCoords();

                 for (let i = 0; i < logos.length; i++) {
                     let logo    = logos[i];
                     let object  = fabric.util.object.clone(img);                 
                     let left    = logo.left + logo.group.left + (logo.group.width / 2);
                     let top     = logo.top + logo.group.top + (logo.group.height / 2);                    
                     object.set("top", top);
                     object.set("left", left);                    
                     object.globalCompositeOperation = "source-atop";
                     object.setCoords();
                     canvasPrev.add(object)
                 }
             }else{
 
                 let logo    = canvasPrev.backgroundImage;
                 let object  = fabric.util.object.clone(img);                   
               
                 object.set("top", logo.top);
                 object.set("left", logo.left);  
                 object.scaleToWidth(logo.getScaledWidth()+6);
                 object.globalCompositeOperation = "source-atop";
                 object.setCoords();
                 canvasPrev.add(object);
                 
             }
 
             canvasPrev.requestRenderAll();
             $("#create-design-heading").addClass("hidden");
             $("#preview-design-heading").removeClass("hidden");
             $("#ruler-ctrl").attr("style", "display:none !important");;
             $loader.addClass("hidden");
             //$("#ws-btn-save").addClass("hidden");
             $("#ws-btn-preview").addClass("hidden");
             $("#ws-btn-back").removeClass("hidden");
             $("#ws-btn-download").removeClass("hidden");
             $("#btnStartOverModel").addClass("hidden");
             $("#previewMsg").removeClass("hidden");
           
            
 
           
         });
     })
 
     
 }
 function renderMainCanvasOnBackButton() {
     var json = canvas.toJSON();
     canvas.clear();
     canvas.loadFromJSON(json, function () {
         canvas.renderAll();       
     }, function (o, object) {
         addLayer(o);
     })
 
 }

 function generatePDFfromPreview(onServer, callback) {
    var fn = $("#downloadFileName").val();
    if(!isFieldValid("downloadFileName")){
        return; 
    }
    $("#downloadPDFModel").modal("toggle");
    if (!state.isPreviewCanvas) {
        toast("Please preview your design before download.");
        return;
    }

    if (canvasPrev.getObjects().length == 0) {
        toast("Please create your design before download.");
        return;
    }
    var c = canvasPrev.meta; 

    $loader.removeClass("hidden");
    menuHighlighter("#menu-download");
    $.ajax({
        type: "GET",
        url: `/api/client/download/`,
        success: function (res) {
            if (! res.data) {
                window.location.reload();
                return;
            }
            const {watermark, download} = res.data;
            if (!download) {
                throw "You are not eligible to download. please contact admin";
            }
            var width = canvasPrev.backgroundImage.viewBoxWidth;
            var height = canvasPrev.backgroundImage.viewBoxHeight;
            let pageFormat = getPageFormatByDimensions(width,height)

            var pdf = new jsPDF({
                orientation: (width > height) ? 'l' : 'p',
                unit: 'pt',
                format: pageFormat,
                putOnlyUsedFonts: true
            });

            width = pdf.internal.pageSize.getWidth();
            height = pdf.internal.pageSize.getHeight();
            const factor = 1.5; 
            canvasPrev.clone(function (clonedCanvas) {
                var bg = clonedCanvas.backgroundImage;
                clonedCanvas.backgroundImage = false;

                //clonedCanvas.setZoom(1.334);
                for (var i = 0; i < clonedCanvas._objects.length; i++) {
                    clonedCanvas._objects[i].globalCompositeOperation = null;
                    canvasPrev.renderAll.bind(clonedCanvas)
                }
                bg.globalCompositeOperation = "destination-in";
                clonedCanvas.add(bg);
                clonedCanvas.renderAll();
                var imgData = canvasPrev.toDataURL({format:"png",quality:1.0,multiplier:3});
                pdf.addImage(imgData, 'jpeg', 0, 0,width,height,undefined,'FAST');
                
                if(onServer)
                {
                    callback(btoa(pdf.output(),"base64"));
                }else{
                    if (res.data.watermark) {
                        var watermark = "/uploads/admin/watermark/watermark.png";
                        let t = 0;
                        let l = 0
                        for(var i=0;i<25;i++)
                        {
                            if(i%5 === 0)
                            {
                                l = 0;
                                t += 120;
                            }else{
                                l += 120;
                            }
                           
                            pdf.addImage(watermark, 'PNG', l, t, 100, 100);
                            
                            
                        }
                       
                    }
                   
                     
                    fn = fn || "KakePrints.pdf";
                    fn = (fn.indexOf('.pdf') === -1)?(fn+".pdf"):fn;
                    pdf.save(fn);
                    var t = canvasPrev.meta; 
                    $.post('/api/logs',{
                        level:1,type:'download_pdf',content:fn, data:t},(data)=>{}); 
                    $("#downloadFileName").val(""); 
                }

                $loader.addClass("hidden");
                $(".step-item:nth-child(3)").removeClass("active");
                $(".step-item:nth-child(4)").addClass("active");
                backFromPreview();
            });

        },
        error: function (xhr, ajaxOptions, thrownError) {
            let msg = "Error while downloading.".
            toast("Error while downloading.");
        }
    })
}
function addLayer(o) {
    $("#collapse-layers").addClass("show");

    var temp = layerHtml;
    $layers.html();
    var layers = "";
    // var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
    var _canvas = state.isPreviewCanvas ? canvasPrev : canvas;
   
   
    for (var i = _canvas._objects.length - 1; i >= 0; i--) {
        var obj = _canvas._objects[i];      
        //debugger;  
        //var src = obj._element ?. currentSrc;
        let src;
        if (obj.text) {
            src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABHNJREFUeJzt3LurHGUcx+FvcqKiJohGBBGjRPHyB4imE0u72Akix1bsBAsriyiKokQ7CQoKaiGKCpGAjSI2golXhIR4v3USbzExicViiCHndy55d95zdp4H3iYLM7+d3c+emd0hCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJsq73AFOyMckVmd3ntxp9n+T33kNQ25hkV5IjSU5Yg64jSZ5NcuGirxJdrEuyJ/3fKGNfu+Mv96p0W/q/OazJurV+qdaO9b0HaOiW3gNw0rbeA7QyS4Fc0HsATjqv9wCtzFIg0JxAoCAQKGzoPcAqcSDJd0mON9zmukx+rLy+4TbP5MskP2by7VEr65NcmeTahtuksx1Z/teRLyW5YcpzbUtycAWzLbb2J7lpyrPfmOSVFcz20JTnYgWWE8ixJHcPONvWTG7DaBXHoSRbBpz/nkyO2egCGes1yANJXhhwfweTvNhwe88n+bbh9payvwcH3N+qMcZAvkqys8N+9zbc1r6G21qqJzNslKvCGAPZmeSfDvs90nBbRxtuazn7fKbDfrsaWyCHkjzXe4g1bFeSP3oPMaSxBbIryW+9h1jDfs3IPmDGFMjxjPAUYQqeTtvfXFa1MQXyepKvew8xAw4keav3EEMZUyBP9R5ghozmWI4lkA+TfNB7iBnybvp81Ty4WQrkcPHY4xnRefMATiR5onj8z6EGmbZZCuSjBf79nSSvDjnISLyc5L0FHlvotaCjczK5s/XUe4L2Jtncc6hTzKfdvVh3DTv6gi5L8mn+P9tnSeZ6DsXCrkvyfia3kzya1fVf0Mxn9gJJkk2ZnMJ+k8lfFLfIsyLzmc1AZtosXYNAcwKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIZDhzDbfldRuIAz2crQ23dXXDbUF3c0n2JznRaH0eH27MkPvTLo7/1n2DPgOYkvkkx9I+kKNJ7hzuaUA7m5LckWR32odx+nozyfYkGwd5ZrBCV2Vy2rMnyd+Zfhinr8NJ3k5yb5ItU36usKi5JNuSPJLkkwwfxGLr4yQ7ktwcF/QM6KIkjyX5Jf0jWOr6OcnDmZz6wdRck+Rg+r/hV7r2Z3IqCM2dm+SL9H+Tn+3al2RD42MD2Z7+b+5W6/bGx2ZmuXhbukt6D9DQ5t4DMHsuzeRit/en/9muH5Jc3PjYQJLJRfobmfyK3fuNvtx1NMlrcaPjsqzrPcAadX6Sy7N2TlGPJ/kpyV+9BwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM7kX8fwvIWqet/rAAAAAElFTkSuQmCC';
        }else{
            src = obj.getSrc();
        }
        src = state.isPreviewCanvas?"/images/layerimg.png":src;
        layers += temp.replace(/{id}/ig, obj.id).replace("{src}", src).replace("{_id}", obj.id).replace(/{index}/ig, i + 1);
    }
    if (layers != "") {
        $layers.html(layers);
        $("#ws-btn-save").removeClass('hidden');
        if(!state.isPreviewCanvas)
        { $("#ws-btn-preview").removeClass('hidden');  }

    } else {
        $layers.html("No Layer.");
        $("#ws-btn-save").addClass('hidden');

        if(!state.isPreviewCanvas)
        { 
            $("#ws-btn-preview").addClass('hidden'); 
        }

    }

}


function loadProject(projectId, type)
{
   $loader.removeClass("hidden");
   if(type==="pre-designed")
   {
    $("#btn-edit-project").addClass("hidden");
    $("#btnSaveModel").removeClass("hidden");
   }else{
    $("#btn-edit-project").removeClass("hidden");
    $("#btnSaveModel").addClass("hidden");
   }


   $.ajax({
       type: "GET",
       url: `/api/project/${projectId}`,
       success: function (res) {
           if (!res.data) {
               window.location.reload();
               return;
           }

           if(!res.data.meta)
           {
               let msg ="Error Loading Design"; 
               toast(msg);
               $loader.addClass('hidden');
               console.error("Missing Meta Information");                
               throw msg;
           } 

           const meta = JSON.parse(res.data.meta);
           if(!meta.templateId)
           {
           let msg ="Error Loading Design"; 
           toast(msg);
           $loader.addClass('hidden');
           console.error("Missing TemplateId Meta Information");                
           throw msg;
           }

           loadSVGTemplate(meta.templateId,(data)=>{
            $loader.addClass("hidden");               
            canvas.designId = projectId;
            canvas.loadFromJSON(res.data.json,canvas.renderAll.bind(canvas));                               

            setTimeout(function(){
                canvas.loadFromJSON(res.data.json,canvas.renderAll.bind(canvas));   
                canvas._objects.forEach(o=>{
                    if(o.type === "i-text"){
                        o._forceClearCache = true;
                        canvas.renderAll();
                    }
                })  
            },1000)

            canvas.renderAll();

            $('#my-proj-modal').modal('hide');
               $('#shared-lib-modal').modal('hide');
               $("#input-project-title").val(res.data.title);
               $("#input-project-desc").val(res.data.desc);
               $("#btn-edit-project").unbind().on("click",function(){
                editAndCommitUserProject(projectId)
               })
               if(res.data.comments){
                let html = "";
                res.data.comments.forEach(item=>{
                    html += `<div class='pd-y-5'><i class='ion-chatbubble-working pd-r-5'></i><strong>${item.name}</strong>: ${item.comments} </br><span class='tx-12'>${new Date(item.created_dt)?.toLocaleString("en-US")}</span></div>`;
                })

                if(!html)
                { html = "No Comments"; }
                
                $("#user-comments-container").html(html);
               }
               $("#menu-upload >a").click();
           });
       },
       error: function (xhr, ajaxOptions, thrownError) {
           toast(thrownError);
       }
   })
   

}


function editAndCommitUserProject(projectId) {

    /**
* . Check is Canvas is not Preview Canvas. 
* . Check if canvas has atleast one item. 
* . Validate project info. atleast title should be provided. 
* . Submit canvas json and project info to api. 
* . Notify success or failed. 
*/
    // if(state.isPreviewCanvas)
    // {toast("Please go back and save your design."); return;}

    if (canvas.getObjects().length == 0) {
        toast("Please create your design before save.");
        return;
    }


    if (!canvas.templateId) {
        console.error("templateId is not present in canvas.");
        toast("Can't save project. please contact admin.");
        return;
    }

    let thumbBase64 = canvas.toDataURL({format: 'png', quality: 0.8});
    let comments = $("#input-project-comments").val(); 
    $.ajax({
        type: "PUT",
        url: `/api/client/edit-user-design/${projectId}`,
        data: {
            base64      :thumbBase64,
            json        : JSON.stringify(canvas.toJSON()),
            comments    : comments
        },
        success: function (res) {
            toast("Project Changes has been Saved.");
        },
        error: function (res) {
            if (res.status === 401) {
                toast(`${
                    res.statusText
                }:${
                    res.responseJSON.message
                }`);
            } else {}
        }
    })
}
function saveCustomDesign(byAdmin) {
    canvas.state = "init";
    if(canvas.state === "inprogress")
    {  toast("Please Wait while Saving Design.");
    return; }
    var meta = canvas.context; 
    meta.title =  $("#input-project-title").val() || "Untitled";
    meta.desc =  $("#input-project-desc").val() || "";
    
    if(meta.title.length > 50)
    {
        toast("Please should not greater than 50 characters.");
        return;
    }

    let dataUrl         = canvas.toDataURL();       
    const isAdmin = byAdmin?"admin":"";
    canvas.state = "inprogress";
    $loader.removeClass("hidden");
    $.ajax({
        type: "POST",
        url: "/app/"+isAdmin+"/uploads",
        data: {
            desc: meta.desc,
            meta: JSON.stringify(meta),
            title: meta.title,
            name: meta.title,
            active: true,
            base64: dataUrl,
            json: JSON.stringify(canvas.toJSON()),
            type: "pre-designed",
            by_admin: byAdmin,
            itemId:canvas.designId
        },
        success: function (res) {
            canvas.state = "completed";
            toast("Uploaded Successfully!");
            setTimeout(function () {
                onDesignReload();
            }, 2000)
        },  
        error: function (res) {
            canvas.state = "error";
            toast("Server Error.");
            $loader.addClass("hidden");
        }
    })
  }

  function onToolbarClick(canvas,o){
    canvas.fire('object:modified');
  }

  $btnTextFormatAndAlignments.on("click", function (e) {
    let elemId = this.id;
    let alignmentButtons =['btn-left-align','btn-center-align','btn-right-align']; 
    if(alignmentButtons.indexOf(elemId) != -1 ){
        alignmentButtons.forEach((v,i,a)=>{
            if(v != elemId)
            { $(`#${v}`).removeClass('active'); }
        })            
    }

    let __canvas = state.isPreviewCanvas?canvasPrev:canvas;
    var value = $(this).attr("data-value");
    
    $(this).addClass('active');

    var o = __canvas.getActiveObject();
    if (o && o.type === 'i-text' || o.type === 'curved-text') {
     
        let isTextSelection; 
        if(o.getSelectionStyles)
        { isTextSelection  = o.getSelectionStyles().length > 0; }
         
        if (value === 'bold') {
            var isTrue = o['fontWeight'] === 'bold';
            if(isTrue){
                $(this).removeClass('active');
            }

            
           
            if(isTextSelection)
            { o.setSelectionStyles({"fontWeight":isTrue ? '' : 'bold'}) }
            else{
                o.set({
                    "fontWeight": isTrue ? '' : 'bold'
                })
            }            
            


        } else if (value === 'italic') {
            var isTrue = o['fontStyle'] === 'italic';
            if(isTrue){
                $(this).removeClass('active');
            }

            if(isTextSelection)
            { o.setSelectionStyles({"fontStyle":isTrue ? '' : 'italic'}) }
            else{
            o.set({
                "fontStyle": isTrue ? '' : 'italic'
            })}

        } else if (value === 'underline') {
            if( o.type === 'curved-text')
            {
                //o.set({"textDecoration": "underline"})
                $(this).removeClass('active');
                toast('Underline is not supported for Curved Text.');
                return}
            var isTrue = !o['underline'];
            if(!isTrue){
                $(this).removeClass('active');
            }

            if(isTextSelection)
            { o.setSelectionStyles({"underline":isTrue}) }
            else{
            o.set({
               "underline":isTrue
            })
            }
        } else if (value === "left" || value === "right" || value === "center") {
            $(this).parent().addClass('active');
            o.set({"textAlign": value})
        }
        __canvas.renderAll();
    }

})

fabric.util.addListener(document.body, 'keydown', function (options) {
    

    // if (options.repeat) {
    //     return;
    // }
    let __canvas =  state.isPreviewCanvas?canvasPrev:canvas;
    var key = options.which || options.keyCode; // key detection

    if(!(key === 37 || key === 38 || key === 39 || key === 40 || key === 46  || key === 187 || key === 189) )
    return; 

    if(!__canvas.getActiveObject()) return;

    options.stopPropagation();
    options.preventDefault();

    if (key === 37) { // handle Left key
        moveSelected(Direction.LEFT);
    } else if (key === 38) { // handle Up key
        moveSelected(Direction.UP);
    } else if (key === 39) { // handle Right key
        moveSelected(Direction.RIGHT);
    } else if (key === 40) { // handle Down key
        moveSelected(Direction.DOWN);
    } else if(key === 46){
        deleteItemFromCanvas(__canvas);
    } else if(key === 187){
            $("#btnToolbarLarger").click();
    } else if(key === 189){
        $("#btnToolbarSmaller").click();
    }
});

function deleteItemFromCanvas(canvas){
    canvas.remove(canvas.getActiveObject())
    canvas.renderAll();
    addLayer();
}

function initContextMenu()
    {
    //let timeout = false;
        fabric.util.addListener(document.getElementsByClassName('upper-canvas')[0], 'contextmenu', function(e) {
            e.preventDefault();
            toast("Please use CTRL + V to Paste from Windows Clipboard.");                  
        //     var cnvsPos = $('#client-main-canvas').offset();
        //     curX = e.clientX - cnvsPos.left+50;
        //     curY = e.clientY - cnvsPos.top+80;
        //     $('#pasteClipboard').css({'position':'absolute', 'top': curY, 'left': curX, 'display':'block'});
          
        //   /// hide contextmenu in 3 seconds.
        //   if(!timeout)
        //   {
        //     timeout = true; 
        //     setTimeout(function(){
        //         timeout = false; 
        //         $('#pasteClipboard').css({'display':'none'});
        //     },5000); 
        //   }
        });


        

        // $("#workarea").on("click",function(){
        //     $('#pasteClipboard').css({'display':'none'});
        // })
    }
    async function parseClipboardData() {
        if(!window.isSecureContext)
        {
            console.error();
            toast("Please use CTRL + V to Paste from Windows Clipboard.");
            return;
        }
        
        const items = await navigator.clipboard.read().then((items)=>{
            for (let item of items) {
                for (let type of item.types) {
                  if (type.startsWith("image/")) {
                    $("#menu-upload > a").click();
                    if(!isAckConfirmUpload()){ return; }
                  
                  item.getType(type).then((imageBlob) => {
                    let url = window.URL.createObjectURL(imageBlob);
                    fabric.Image.fromURL(url, function (img) {                    
                        if(img.height>canvas.height && img.height>img.width){
                            let ratio = canvas.height/1.5; 
                            img.scaleToHeight(ratio);    
                           }else{
                                let ratio = canvas.width/1.5; 
                                img.scaleToWidth(ratio);    
                           }
                        img.set({ originX:"center", originY:"center" });
                        img.setCoords();
                        img.globalCompositeOperation = 'source-atop';
                        canvas.add(img);
                        canvas.centerObject(img);
                        canvas.setActiveObject(img);
                        canvas.renderAll();
                    })
                      // const image = `<img src="${}" />`;
                      // $container.innerHTML = image;
                    });
                    $('#pasteClipboard').css({'display':'none'});
                    return true;
                  }
                }
              }
              $('#pasteClipboard').css({'display':'none'});
    
        }).catch((err) => {
          console.error(err);
          $('#pasteClipboard').css({'display':'none'});
        });
       
        
      }


      function rotateObject() {
        var curAngle = 0;
        $(`#rotate`).on("click", function (e) {
            var selectedObj = canvas.getActiveObject();
            if (! selectedObj) {
                toast("Please select an object.");
                return;
            }
            selectedObj.rotate(curAngle);
            if (curAngle > 270) {
                curAngle = 0;
            }
            curAngle += 90;
            canvas.renderAll();
    
        })
    }

    $("#predefinedText").on("change",function(){
        var selectedValue = $(this).val();
        $("#textarea").val(selectedValue);
        $(this).val("");
    })

    $("#inputCurvedText").on("click", function (e) {
        
        var obj = canvas.getActiveObject();
        if(!obj){
            toast("Please select Text");
            return;
        }

        if (e.target.checked) {
  
            var item = curveText(obj);
            item.globalCompositeOperation = "source-atop";
            //canvas.centerObject(item);
            if(obj.underline){
                toast('Underline is not supported for Curved Text.');
                $("#underline").removeClass("active");
            }
            item.set({
                originX:obj.originX,
                originY:obj.originY,
                left:obj.left,
                top:obj.top
            });
            item.setCoords();
            canvas.add(item);
            canvas.setActiveObject(item);
            canvas.renderAll();
            canvas.remove(obj);
       
        } else {
            //$("#inputFlipText").prop('checked',false);
            if(obj.underline){
                $("#underline").addClass("active");
            }
            $("#curveTextCtrl").val(1250);
            var obj = canvas.getActiveObject();
            canvas.remove(obj);
           // var c = getCanvasCenter(obj.width,obj.height);
            var textInfo = {

                left        :   obj.left,
                top         :   obj.top,
                fontFamily  :   obj.fontFamily,
                fill        :   obj.fill,
                fontSize    :   obj.fontSize,
                flipped     :   $("#inputFlipText").prop("checked") || false,
                stroke      :   obj.stroke,
                strokeWidth :   obj.strokeWidth,
                paintFirst  :   "stroke",
                fontWeight  : obj.fontWeight,
                fontStyle   : obj.fontStyle,
                underline   : obj.underline

            };
            
            let item = new fabric.IText(obj.text, textInfo);
            item.globalCompositeOperation = 'source-atop';
            item.id = obj.id;
            item.index = obj.index;
            item.set({
                originX:obj.originX,
                originY:obj.originY,
                left:obj.left,
                top:obj.top
            })
            item.setCoords();
            canvas.add(item);            
            canvas.setActiveObject(item);
            canvas.renderAll();
 
        }
        addLayer();
    })
  
    function initUIUndoRedo(){
        $("#undo").on("click",function(){
            canvasUndo.undo();
        });
        $("#redo").on("click",function(){
            canvasUndo.redo();
        });
    }
    

    function onChangeFontColor(picker, type) {
        let selectedText = canvas.getActiveObject();
        let checked = $("#inputStrokeText").prop("checked");
        let strokeSize = parseInt($("#text-stroke-width").val());
        let strokeColor = $("#strokecolor").val();
      
    
        if (type === 'font-color') {
            let isTextSelection; 
            if(selectedText.getSelectionStyles)
            { isTextSelection  = selectedText.getSelectionStyles().length > 0; }
            if(isTextSelection) {
                selectedText.setSelectionStyles({"fill":picker.toRGBAString()}) 
            }else{
                selectedText.set('fill', picker.toRGBAString());
            }
            
        } else if (type === 'stroke-color' && checked) {
          
        
            selectedText.set('stroke',picker.toRGBAString()); ;
            selectedText.strokeWidth= strokeSize;
            selectedText.paintFirst= "stroke";
            
        }
        
        canvas.renderAll();
    }


    