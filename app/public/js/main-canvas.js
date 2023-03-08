// main canvas. 
// zeeshan01@gmail.com
var selectedTemplateId = 'default';
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



 function loadSVGTemplate(id) {
        selectedTemplateId = id;
        var group = [];
        state.isPreviewCanvas = false;
        $.get(`/api/svg-templates/${id}`, function (data) {
            fabric.loadSVGFromURL(data.base64, function(objects, options) {         
                if (typeof(data) === 'string') {
                    window.location.reload();
                    return;
                }
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
                            
                 
                //let zoomLevel =  500/firstLogo.width;
                //canvas.setZoom(zoomLevel);         
                //canvas.zoomLevel = zoomLevel;
                //let canvasZoomedWidth = firstLogo.width*canvas.getZoom(); 
                //let canvasZoomedHeight = firstLogo.height*canvas.getZoom();
                //canvas.setDimensions({width:canvasZoomedWidth,height:canvasZoomedHeight})


                let aspectRatio = firstLogo.width/firstLogo.height;
                let displayWidth = 500; 
                let logoDisplayWidth = displayWidth; 
                let logoDisplayHeight = displayWidth/aspectRatio; 
              
                canvas.setBackgroundImage(firstLogo, canvas.renderAll.bind(canvas));
                firstLogo.scaleToWidth(logoDisplayWidth);
                // let missingPoints = logoDisplayWidth-firstLogo.getScaledWidth();
                // firstLogo.scaleToWidth(logoDisplayWidth+missingPoints);

                //firstLogo.scaleToHeight(logoDisplayHeight);
                firstLogo.setCoords();

                canvas.backgroundImage.set({
                    left:0,
                    top:0,
                })
                canvas.setDimensions({width:logoDisplayWidth,height:logoDisplayHeight})
                canvas.renderAll(); 
              
                // canvas.context = {
                //     originalWidth: firstLogo.width,
                //     originalHeight: firstLogo.height,
                //     displayWidth: canvasZoomedWidth,
                //     displayHeight:canvasZoomedHeight,
                //     zoomLevel: 1
                // }
                canvas.context = {
                    originalWidth   :   firstLogo.width,
                    originalHeight  :   firstLogo.height,
                    displayWidth    :   canvas.width,
                    displayHeight   :   canvas.height,
                    zoomLevel: 1
                }

                $("#canvas-holder").css({"background-color":"#9293cb","padding":"10px"});
                let logoHeight = canvas.getHeight();
                let logoDisplaySize = canvas.getWidth();
    
                loadTemplateDetails(data, objects);

                $(".vRule, .hRule").remove();
                $('.canvas-container').first().ruler(rulerSettings);
                $(".vRule").height(logoHeight+26);
    
            /// show grid lines 
                let labels   = $(".hRule .tickLabel");
                let vlabels   = $(".vRule .tickLabel");
                let isGridLinesEnabled =  $("#btnDisplayGrid").is(":checked");
                let isRulerEnabled =  $("#btnDisplayRuler").is(":checked");
                $("#btnDisplayRuler").prop("checked",true);
                $("#btnDisplayGrid").prop("checked",true);
               
                $(".grid-lines").remove();
                    for(var i=0;i<(labels.length-1);i++)
                    {
                      
                      let pos = $(labels[i]).position();
                      $(".canvas-container").first().append(`<div class='grid-lines' style='height:${logoHeight}px;left:${pos.left-29}px; top:0px; '></div>`)
                    }
              
                    for(let i=0;i<(vlabels.length);i++)
                    {
                      
                        let pos = $(vlabels[i]).position();
                    
                      $(".canvas-container").first().append(`<div class='grid-lines h-gridlines' style='width:${logoDisplaySize}px;top:${pos.top-26}px; left:0px; border-bottom: solid 1px #666;'></div>`);
                      $(".canvas-container").first().css({width:logoDisplaySize,height:`${logoHeight}px`})
                    }
                    if(!isRulerEnabled){
                        $("#btnDisplayRuler").click();
                    }
                    if(!isGridLinesEnabled){
                        $("#btnDisplayGrid").click();
                    }
    
    
    
              },function (item, object) {
    
                        object.set({
                            fill:"#fff"
                        });
                                      
            })
            });
           
            $.get(`/api/svg-templates/${id}`, function (data) {
                fabric.loadSVGFromURL(data.base64, function(objects, options) {         
                    var obj = fabric.util.groupSVGElements(objects, options);
                   let firstLogo = objects[0];
                    let viewBoxHeight= options.viewBoxHeight;
                    let viewBoxWidth = options.viewBoxWidth;
                    canvasPrev.setBackgroundImage(obj, canvasPrev.renderAll.bind(canvasPrev));           
                    canvasPrev.setDimensions({width:viewBoxWidth,height:viewBoxHeight})
                    canvasPrev.renderAll.bind(canvas);    
                  },function (item, object) {
                                object.set({ backgroundImage:"transparent"});
                        })
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
     $("#canvas-holder").css({"background-color":"#9293cb","padding":"10px"});
 
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
     //$("#ws-btn-save").addClass("hidden");
     $("#ws-btn-preview").addClass("hidden");
     $("#ws-btn-back").removeClass("hidden");
     $("#ws-btn-download").removeClass("hidden");
     $("#btnStartOverModel").addClass("hidden");
     $("#previewMsg").removeClass("hidden");
     $("#client-main-canvas-logo").attr("style","width:90%")
     $("#admin-main-canvas-logo").attr("style","width:90%")
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
         let logos = canvasPrev.backgroundImage._objects;
         clonedCanvas.backgroundImage = false;

         for (var i = 0; i < clonedCanvas._objects.length; i++) {
             clonedCanvas._objects[i].globalCompositeOperation = null;
             clonedCanvas.renderAll.bind(clonedCanvas)
         }

         
         var dataURL = clonedCanvas.toDataURL();
         
         $("#canvas-holder").removeAttr("style");
         $("#canvas-holder").css({"background-color":"#d8dce3", "padding":"20px",});
         fabric.Image.fromURL(dataURL, (img) => {
             state.isPreviewCanvas = true;
             canvasPrev.remove(... canvasPrev.getObjects());

            
             //img.scaleToWidth(canvas.context.originalWidth);
            //let missingPoints = canvas.context.originalWidth - img.getScaledWidth();
           

             if(logos && logos.length>0)
             {
                debugger;
                let logoWidth = logos[0].width; 
                img.scaleToWidth(logoWidth);
                img.setCoords();
                let designWidthAfterScale = img.getScaledWidth(); 
                let missingPoints = logoWidth - designWidthAfterScale; 
                img.scaleToWidth(logoWidth+10);
                img.setCoords();
                let f = img.getScaledWidth();
              
                 for (let i = 0; i < logos.length; i++) {
                     let logo    = logos[i];
                     let object  = fabric.util.object.clone(img);                 
                     let left    = logo.left + logo.group.left + (logo.group.width / 2);
                     let top     = logo.top + logo.group.top + (logo.group.height / 2);                    
                     object.set("top", top);
                     object.set("left", left);
                     
                     object.globalCompositeOperation = "source-atop";
                     canvasPrev.add(object)
                 }
             }else{
 
                 let logo    = canvasPrev.backgroundImage;
                 let object  = fabric.util.object.clone(img);                   
               
                 object.set("top", logo.top);
                 object.set("left", logo.left);  
                 object.scaleToWidth(logo.width);
                 let missingPoints = logo.width - object.getScaledWidth();
                 object.scaleToWidth(logo.width+missingPoints);
                 object.setCoords();
                 object.globalCompositeOperation = "source-atop";
                 canvasPrev.add(object);
                 
             }
 
             canvasPrev.renderAll();
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
                var imgData = clonedCanvas.toDataURL({format:"jpg",quality:1,multiplier:2});
                pdf.addImage(imgData, 'jpg', 0, 0,width,height);
               

                
                
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
                   
                    var fn = $("#downloadFileName").val(); 
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

            });

        },
        error: function (xhr, ajaxOptions, thrownError) {
            let msg = "Error while downloading.".
            toast("Error while downloading.");
        }
    })
}
 