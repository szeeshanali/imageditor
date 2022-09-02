const dpi = 72;
const letterPageSize = {
    width: (8.5 * dpi),
    height: (11 * dpi)
}
const enabledSaveInBrowser = true;
var state = {
    isPreviewCanvas: false
}

const layerHtml = `<div class="media d-block d-flex layer-item object-options" data-index='{index}' id='{id}'  >
    <div class="d-block mg-sm-r-10 img"> <img src="{src}" class="wd-30" alt="Image" ></div>
    <small class="d-sm-flex layer-label">Layer {index}</small>
    <div class="d-sm-flex layers-controls" style="display:none !important">
    <i class='ion-ios-copy-outline duplicate main-tool-button'   title='duplicate' ></i>
    <i class='ion-ios-upload-outline bring-fwd' title="move up" id="bring-fwd" ></i>
    <i class='ion-ios-download-outline bring-back' title="move down" id="bring-back" ></i>
    <i class='ion-ios-trash-outline delete main-tool-button' title='delete' ></i>
    </div>
   </div>`;


// vars
$btnDownloadPDF = $("#btn-download-pdf");
$btnSaveDesign = $("#btn-save-design");

$btnUploadImage = $("#btn-upload-img");
$btnUploadImageHidden = $("#btn-upload-img-hidden");
$layers = $("#layers");
$btnRepeatDesign = $("#repeatdesign");
$clientMainCanvas = $("#client-main-canvas");
$canvasPrev = $("#client-main-canvas-logo");
$repeatImageCtrl = $("#repeat-image-ctrl");
$btnCancelRepeatDesign = $("#repeat-image-ctrl .cancel");
$btnApplyToOne = $("#repeat-image-ctrl .done");
$btnApplyRepeatDesign = $("#applytoall");
$templatepanel = $("#templatepanel");
$clipartPanel = $("#clipartmenu");
$btnTextMenu = $("#btnTextMenu");
$textarea = $("#textarea");
$btnAddText = $("#btnAddText");
$btnTextSize = $("#btnTextSize");
$saveBrowserTxt = $("#save-browser-txt");
$rotateObj = $("#rotateObj");
$previewSaveDesign = $("#prevesavdesign");
$pageTitle = $("#page-title");
$loader = $("#loader");
$btnTemplate = $("#btnTemplate");
$btnMyProject = $("#btnMyProject");
$btnDeleteMyProject = $("#myprojects .delete");

$btnUploadpanel = $("#uploadpanel");


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
$txtCtrl = $("#workspace-right-panel .txt-ctrl");
$txtDecorationCtrl = $("#workspace-right-panel .txt-ctrl .text-decoration");

$mainCtrl = $("#workspace-right-panel .main-ctrl");
/** */


fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.cornerStyle = 'circle';
fabric.Object.prototype.borderColor = '#000';
fabric.Object.prototype.cornerColor = '#494699';
fabric.Object.prototype.cornerStrokeColor = '#000';
fabric.Object.prototype.cornerSize = 5;
fabric.Object.prototype.padding = 0;



var canvas = new fabric.Canvas("client-main-canvas", {preserveObjectStacking: true})
var canvasPrev = new fabric.Canvas("client-main-canvas-logo", {preserveObjectStacking: true});
fabric.util.addListener(canvas.upperCanvasEl, 'dblclick', function (e) {
    var target = canvas.findTarget(e);
    ungroup(e); 
  });
  
  
var enabledTextMode = false;

var filters = [
    'grayscale',
    'invert',
    'remove-color',
    'sepia',
    'brownie',
    'brightness',
    'contrast',
    'saturation',
    'vibrance',
    'noise',
    'vintage',
    'pixelate',
    'blur',
    'sharpen',
    'emboss',
    'technicolor',
    'polaroid',
    'blend-color',
    'gamma',
    'kodachrome',
    'blackwhite',
    'blend-image',
    'hue',
    'resize'
];


// Events:

function deleteMyProject(id) {
    $.ajax({
        type: "DELETE",
        url: `/api/client/project/${id}`,
        success: function (res) {
            toast("Deleted successfully!");
        },
        error: function (res) {
            toast("Error while deleting.");
        }
    })
}

function loadProject(id) {
    var group = [];
    $.get(`/api/project/${id}`, function (data) {
        const json = data.json;
        if (! json) {
            return;
        }
        var object = JSON.parse(json);
        canvas.clear();
        canvas.loadFromJSON(json, function () {
            canvas.setWidth(8.5 * dpi);
            canvas.setHeight(11 * dpi);
            canvas.renderAll.bind(canvas);
            $("#template-info-panel .template-name").text(data.name);
            $("#template-info-panel .template-desc").text(data.desc || "NA");
            $("#template-info-panel .template-desc").text(data.modified_dt || "NA");
            $("#use-project").attr("href",`/app/workspace/project-${data.code}`);

            // $imgCtrl.each(function () {
            //     $(this).removeClass("hidden");
            // })
        }, function (o, object) {
            // console.log(o,object)
        })
    })
}

function loadSVGTemplate(id) {
    var group = [];
    state.isPreviewCanvas = false;
    $.get(`/api/svg-templates/${id}`, function (data) {
        const svgBase64 = data.base64;
        if (! svgBase64) {
            toast("Error loading Template");
            return;
        }

        var meta = {};
        if (data.meta) {
            meta = JSON.parse(data.meta);
        }

        canvas.clear();
        hideWorkspaceControls();

        // loading Big Design
        fabric.loadSVGFromURL(svgBase64, function (objects, options) {
            
            var logo= objects[0];
            //logo.scaleToWidth(500);
            var w =logo.getScaledWidth(); 
            var h = logo.getScaledHeight();            
            canvas.setDimensions({width: w , height: h});
            // //canvas.setWidth(logo.width+logo.left/2)
            // //canvas.setHeight(logo.height+logo.top/2);
            // //canvas.add(logo);
            canvas.setBackgroundImage(logo, canvas.renderAll.bind(canvas));            
            canvas.renderAll();
            //loadedObjects.center().setCoords();

            $("#template-info-panel .template-name").text(data.name);
            $("#template-info-panel .page-size").text(meta.pageSize);
            $("#template-info-panel .logo-size").text((meta.objectWidth / 72).toFixed(2) + "''");
            $("#template-info-panel .total-logos").text(meta.objects);
            $("#template-info-panel .page-title").text(data.title);
            $("#template-info-panel #imgSelectedTemplate").attr("src",svgBase64)
            $(".kk-part-no").text(data.ref_code || "N/A");
            $(".kk-part-link").text(data.link || "N/A");
            $("#use-template").unbind().click(function () {
                window.location.href = `/app/workspace/${
                    data.code
                }`;
            })
           // debugger;
            var len = $('.canvas-container').find('.ruler').length;
            if(len === 0){
                $('.canvas-container').ruler({
                    vRuleSize: 22,
                    hRuleSize: 22,
                    showCrosshair : false,
                    showMousePos: false
                }); 
            }
        }, function (item, object) {
            object.set({left:0,top:0}); 
            object.scaleToWidth(500);
            //object.set('id', item.getAttribute('id'));
           // group.push(object);
        });

        fabric.loadSVGFromURL(svgBase64, function (objects, options) {
            //$canvasPrev.fadeOut();
            var loadedObjects = new fabric.Group(group);            
            var templateWidth = options.viewBoxWidth;
            var templateHeight = options.viewBoxHeight;
            canvasPrev.setDimensions({width:templateWidth,height:templateHeight});
            canvasPrev.setBackgroundImage(loadedObjects, canvasPrev.renderAll.bind(canvasPrev));
            canvasPrev.renderAll();
            loadedObjects.center().setCoords();

        }, function (item, object) {
            object.set('id', item.getAttribute('id'));
            group.push(object);
        });
    })






}

function applyFilter(index, filter) {

    var obj = canvas.getActiveObject();
    obj.filters[index] =  filter;
    // if (!obj.filterIndex && obj.filterIndex != 0) {
    //     obj.filters[index] = true && filter;
    //     obj.filterIndex = index;
    // } else {
    //     obj.filters[index] = false && filter;
    //     obj.filterIndex = null;
    // } 
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



function menuHighlighter(itemToHighlight)
{
    $("#toolbar .nav-item").each(function(e){
        $(this).removeClass('bg-warning');
    })

    $(itemToHighlight).addClass("bg-warning");
}

function menuPanelDisplay(itemToDisplay){
    $(".tab-content .tab-pane").each(function(e){
        $(this).removeClass('active');
        $(this).removeAttr("style");
    })

    $(itemToDisplay).addClass("active");
}

function initUIEvents() {

    rotateObject();
    cropObject();
    flipXYObject();
    grayscaleObject();
    brightnessObject();
    contrastObject();

    $("#accordion a").on("click",function(){

        $("#accordion").find('.arrow').each(function(){
            $(this).removeClass("down");
        })
        $(this).find('.arrow').first().addClass("down");
    })

    // $("#menu-clipart").on("click",function(){
    //     menuHighlighter(this);
    // })

    $("#btnDisplayGrid").on("click",function(){
        var style = $("#workarea").attr("style");
        if(style)
        {   
            $(this).removeClass('tx-gray-500');
            $("#workarea").removeAttr("style");           }
        else{
            $(this).addClass('tx-gray-500');
            $("#workarea").attr("style","background-image:url('')");
           
        }
      
    })

    $("#shared-library .custom-design").on("click",function(){
        var id = $(this).attr("id"); 
        $loader.removeClass("hidden");
        $.ajax({
            type: "GET",
            url: `/api/pre-designed/${id}`,
            success: function (res) {
                const {json} = res.data;
                if(!json) return; 
                var obj = JSON.parse(json);
                var objs = obj.objects;
             
                fabric.util.enlivenObjects(objs, function(objects) {
                    var origRenderOnAddRemove = canvas.renderOnAddRemove;
                    canvas.renderOnAddRemove = false;
                    var grp = new fabric.Group(objects,{
                        top:100,
                        left:100
                    });
                    grp.globalCompositeOperation = "source-atop"

                    if (state.isPreviewCanvas) {
                        canvasPrev.add(grp);
                    } else {
                        canvas.add(grp);
                    }

                  
                    canvas.renderOnAddRemove = origRenderOnAddRemove;
                    canvas.renderAll();
                    mainControls(true);
                    $loader.addClass("hidden");
                  });
    
    
    
            },
            error: function (res) {
                toast("Error while downloading.");
            }
        })
    
      })

    $txtDecorationCtrl.on("click",function(e){
        var value = $(this).attr("data-value");
        var o = canvas.getActiveObject(); 
        if(o && o.type === 'i-text')
        {
           
            if(value === 'bold')
            { 
                var isTrue = o['fontWeight'] === 'bold';
                o.set({"fontWeight":isTrue?'':'bold'})
            

            }else if(value === 'italic')
            { 
                var isTrue = o['fontStyle'] === 'italic';
                o.set({"fontStyle":isTrue?'':'italic'})
              
            }
            else if(value === 'underline')
            { 
                var isTrue = o['textDecoration'] === 'underline';
                o.set({"textDecoration":isTrue?'':'underline'})
               
            }else if(value === "left" || value === "right" || value === "center" ){
                o.set({"textAlign":value})
            }
           
            canvas.renderAll();
        }
       
    })

    $("#font-list-container .fontfamily").on("click",function(e){
        var value = $(this).attr("data-value");
        $("#selected-font").html($(this).html())

        canvas.getActiveObject().set("fontFamily", value);
        canvas.requestRenderAll();

       
      })

      
    $("#text-color").on("change",function() {
        setSelectedTextStyle("fill",this.value);
        
       });
     $("#text-letter-spacing").on("change",function() {
      setSelectedTextStyle("charSpacing",this.value);
      
     });
     $("#text-bg-color").on("change",function() {
      setSelectedTextStyle("backgroundColor",this.value);
       
     });
  
     $("#text-stroke-color").on("change",function() {
      setSelectedTextStyle("stroke",this.value);
      
     });
     $("#text-stroke-width").on("change",function() {
      setSelectedTextStyle("strokeWidth",this.value);
        
     });
  
  
   $('#text-line-height').on("change",function() {   
      setSelectedTextStyle("lineHeight",this.value);
  });
          
  
  function setSelectedTextStyle(prop,value){
    canvas.getActiveObject().set(prop,value);
    canvas.renderAll();
  
  }
    
    $btnUndo.on("click", () => {

        // try {
        //     let undoList = this.history.getValues().undo;
        //     if (undoList.length) {
        //       let current = undoList[undoList.length - 1];
        //       this.history.undo();
        //       current && this.canvas.loadFromJSON(JSON.parse(current), this.canvas.renderAll.bind(this.canvas))
        //     }
        // } catch (_) {
        //     console.error("undo failed")
        // }

    })

    $btnRedo.on("click", () => {

        // alert("undo");
        // canvas.redo();

    })


    $btnFlipX.on("click", () => {
        var selectedObj = canvas.getActiveObject();
        selectedObj.set('flipX', ! selectedObj.flipX);
        canvas.renderAll();
    });

    // $btnFlipY.click(() => {
    //     canvas.activeSelection.set('flipY', !canvas.activeSelection.flipY);
    //     this.canvas.renderAll();
    // });

    $btnRotate.on("click", function () {
        var selectedObj = canvas.getActiveObject();
        if (! selectedObj) {
            toast("Please select an object.");
            return;
        }
        var curAngle = selectedObj.angle;
        selectedObj.rotate(curAngle + 90);
        canvas.renderAll();
    })

    $btnTemplate.on("click", function (e) {
        $("#templatepanel").hide();
        canvas.discardActiveObject().renderAll();
    })

    $btnMyProject.on("click", function (e) {


        // $.get("",)
        $loader.removeClass("hidden")
        window.location.href = '/app/projects';
    })

    $btnTextMenu.on("click", function (e) {
        canvas.discardActiveObject().renderAll();
        // textControls(false);
    })

    // $btnUploadpanel.on("click", function (e) {
    //     canvas.discardActiveObject().renderAll();
    //     $("#workspace-right-panel .img-ctrl").each(function () {
    //         $(this).removeClass("hidden");
    //     })
    // })
    


    //$repeatImageCtrl.hide();
    $canvasPrev.parent().hide();

    // $btnRepeatDesign.on("click", function (e) {
    //     openRepeatDesignPreview(e);
    // })

    $btnCancelRepeatDesign.on("click", function (e) {
        // $("#repeatdesign .toggle-on").removeClass("active");
        // $("#repeatdesign .toggle-off").addClass("active");
        closeRepeatDesignPreview();
        // closeRepeatDesignPreview();
    })

    $("#templatepanel .template").on("click", (e) => {
        enabledTextMode = false;
        var id = e.currentTarget.id;
        canvas.clear();
        loadSVGTemplate(id);
        $("#templatepanel").hide();
        $("#menu-upload > a").click();
        //triggerNextStep("step-1");

    });


    $("#workspace-menu .nav-link").on("click",function(e){
        const navItem = $(this).parent();
        const id = navItem.attr("id"); 
        menuHighlighter(navItem);
        menuPanelDisplay(navItem);
        if(canvas._objects.length == 0)
        { 
            $("#template-info-panel").show();
            //$("#layers").parent().hide();
        }else{
            $("#template-info-panel").hide();
           // $("#layers").parent().show();
            
        }
    })

    // $(`#templatepanel #del{}`).on("click",(e)=>{
    //     e.stopPropagation();
    //     enabledTextMode = false;
    //     var id = e.currentTarget.id;
    //     if(id) {
    //         id = id.replace("del","");
    //     }
    //      canvas.clear();


    // });


    // / MyProject Click
    $("#myprojects .template").on("click", (e) => {

        e.stopPropagation();
        enabledTextMode = false;
        var id = e.currentTarget.id;
        canvas.clear();
        loadProject(id);

    });

    // MyProject Delete
    $("#myprojects .delete").on("click", (e) => {

        e.stopPropagation();
        $(this).fadeOut();
        enabledTextMode = false;
        var id = e.currentTarget.id;
        id = id.replace("del","");

        canvas.clear();
        deleteMyProject(id);

    });

    $("#clipartmenu .clipart img").on("click", (e) => {
        enabledTextMode = false;
        var id = e.currentTarget.src;
        fabric.Image.fromURL(id, function (img) {
            var img1 = img.set({left: 0, top: 0});
            img1.globalCompositeOperation = 'source-atop';
            canvas.add(img1);
            mainControls(true);
           // $("#menu-text > a").click();
        });

    });

    $btnApplyToOne.on("click",function(e){
        state.isPreviewCanvas = true;
        $("#repeat-image-ctrl #previewdesign").hide();
        $("#repeat-image-ctrl #backtodesign").show();
        $clientMainCanvas.parent().fadeOut();
        $canvasPrev.parent().fadeIn();
        canvas.clone(function (clonedCanvas) {
            var bg = clonedCanvas.backgroundImage;
            clonedCanvas.backgroundImage = false;
            for (var i = 0; i < clonedCanvas._objects.length; i++) {
                clonedCanvas._objects[i].globalCompositeOperation = null;
                canvas.renderAll.bind(clonedCanvas)
            }
            clonedCanvas.renderAll()
            var dataURL = clonedCanvas.toDataURL({
                format: "png",
                left: 0,
                top: 0,
                width: canvas.width,
                height: canvas.height
            });

            var logos = canvasPrev.backgroundImage._objects;
            fabric.Image.fromURL(dataURL, (img) => {
                canvasPrev.remove(... canvasPrev.getObjects());
                //for (var i = 0; i < logos.length; i++) {
                    var logo = logos[0];
                    var object = fabric.util.object.clone(img);
                    var left = logo.left + logo.group.left  + logo.group.width / 2;
                    var top = logo.top + logo.group.top  + logo.group.height / 2;
                    object.scaleToWidth(logo.width)
                    object.set("top", top);
                    object.set("left", left);
                    object.globalCompositeOperation = "source-atop";
                    canvasPrev.add(object).renderAll();
                    $btnDownloadPDF.removeClass("hidden");
                    $btnSaveDesign.removeClass("hidden");
                   $(".vRule, .hRule").hide();

                //}
       //         closeRepeatDesignPreview();
            });
        });
    })

    $btnApplyRepeatDesign.on("click", function (e) {
        state.isPreviewCanvas = true;
        //$repeatImageCtrl.hide();
        $("#repeat-image-ctrl #previewdesign").hide();
        $("#repeat-image-ctrl #backtodesign").show();

        $clientMainCanvas.parent().fadeOut();
        $canvasPrev.parent().fadeIn();
        // var logos = canvasPrev.backgroundImage._objects;
        // var logox = logos[0];

        
        // var dataURL = canvas.toDataURL({
        //         format: "png",
        //         left: 0,
        //         top: 0,
        //         width: canvas.width,
        //         height: canvas.height
        // });

        //      fabric.Image.fromURL(dataURL, (img) => {
        //         for (var i = 0; i < logos.length; i++) {
        //             var logo = logos[i];
        //             var object = fabric.util.object.clone(img);
        //             var left = logo.left + logo.group.left + logo.group.width / 2;
        //             var top = logo.top + logo.group.top  + logo.group.height / 2;
        //             object.scaleToWidth(logo.width)
        //             object.set("top", top);
        //             object.set("left", left);
        //             object.globalCompositeOperation = "source-atop";
        //             canvasPrev.add(object).renderAll();
        //             $btnDownloadPDF.removeClass("hidden");
        //             $btnSaveDesign.removeClass("hidden");
        //             $(".vRule, .hRule").hide();
        //         }
        //     })
         canvas.clone(function (clonedCanvas) {
             var bg = clonedCanvas.backgroundImage;
             clonedCanvas.backgroundImage = false;
             for (var i = 0; i < clonedCanvas._objects.length; i++) {
                 clonedCanvas._objects[i].globalCompositeOperation = null;
                 canvas.renderAll.bind(clonedCanvas)
             }
             clonedCanvas.renderAll()
             var dataURL = clonedCanvas.toDataURL({
                 format: "png",
                 left: 0,
                 top: 0,
                 width: canvas.width,
                 height: canvas.height
             });

             var logos = canvasPrev.backgroundImage._objects;
             fabric.Image.fromURL(dataURL, (img) => {
                 canvasPrev.remove(... canvasPrev.getObjects());
                 for (var i = 0; i < logos.length; i++) {
                     var logo = logos[i];
                     var object = fabric.util.object.clone(img);
                     var left = logo.left + logo.group.left  + logo.group.width / 2;
                     var top = logo.top + logo.group.top  + logo.group.height / 2;
                     object.scaleToWidth(logo.width)
                     object.set("top", top);
                     object.set("left", left);
                     object.globalCompositeOperation = "source-atop";
                     canvasPrev.add(object).renderAll();
                     
                     $btnDownloadPDF.removeClass("hidden");
                     $btnSaveDesign.removeClass("hidden");
                     $(".vRule, .hRule").hide();

                 }
        //         closeRepeatDesignPreview();
             });
         });
    });


    this.configUndoRedoStack();

}

function closeRepeatDesignPreview() {
    $repeatImageCtrl.show();
    $clientMainCanvas.parent().fadeIn();
    $canvasPrev.parent().fadeOut();

    $("#repeat-image-ctrl #previewdesign").show();
    $("#repeat-image-ctrl #backtodesign").hide();

    $btnDownloadPDF.addClass("hidden");
    $btnSaveDesign.addClass("hidden");

}

// function openRepeatDesignPreview(e) {
//     var txt = $(e.currentTarget).find(".active").text();
//     var factor = 2;
//     if (txt == "ON") {
//         state.isPreviewCanvas = true;
//         var canvasSVGLogo = canvas.backgroundImage._objects[0];
//         // canvasSVGLogo.scaleToWidth(canvasPrev.width);
//         if (! canvasSVGLogo || canvas._objects.length == 0) {
//             alert("No logo found in SVG template");
//             return;
//         }

//         $repeatImageCtrl.show();
//         $clientMainCanvas.parent().fadeOut();
//         $canvasPrev.parent().fadeIn();
//         canvasPrev.loadFromJSON(JSON.stringify(canvas), function (o) {
//             var object = fabric.util.object.clone(canvasSVGLogo);
//             object.scaleToWidth(object.width * factor)
//             canvasPrev.setDimensions({
//                 width: object.width - object.left,
//                 height: object.height - object.top
//             })
//             canvasPrev.setBackgroundImage(object, canvasPrev.renderAll.bind(canvasPrev));
//             canvasPrev.renderAll();

//         });
//     } else {
//         closeRepeatDesignPreview();
//     }
// }

function onObjectSelectionCleared(o)
{
    hideObjectControls();
}

function onObjectSelection(o)
{
    var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
    if (_canvas.getActiveObject().get('type') == "i-text") {
     
        textControls(true);
        imageControls(false);
      
    } else {
        textControls(false);
        imageControls(true);
    }
    


    const id = o.selected[0].id;
    var elem = $(`#${id}`)[0];
    clearLayerSelection();
    $(`#${id} .layers-controls`).show();
    $(`#${id}`).addClass("selected-layer");
    initLayerEvents(elem)
}


function initCanvasEvents() {
   
    canvas.on({
        "selection:updated":onObjectSelection,
        "selection:created":onObjectSelection,
        "selection:cleared":onObjectSelectionCleared
    });
    canvasPrev.on({
        "selection:updated":onObjectSelection,
        "selection:created":onObjectSelection,
        "selection:cleared":onObjectSelectionCleared
    });


    canvas.selectedLayerId = null;
    canvas.on("object:added", (o) => {
        o.target.id = `obj${
            canvas._objects.length
        }`;
        o.target.index = canvas._objects.length - 1;
        onObjectAdded(o);
    })
    
    canvasPrev.on("object:added", (o) => {
        o.target.id = `obj${
            canvasPrev._objects.length
        }`;
        o.target.index = canvasPrev._objects.length - 1;
        onObjectAdded(o);
    })
    
    canvas.on("object:modified", (o) => {
        onCanvasModified(o);
    })

    initCanvasTextEvents();
}

function onCanvasModified(o) {
    if (! enabledSaveInBrowser) {
        return;
    }

    setTimeout(function () {

        saveInBrowser.save('kp-editor', canvas.toJSON());
        $saveBrowserTxt.fadeIn();
        setTimeout(function () {
            $saveBrowserTxt.fadeOut("slow");
        }, 2000)
    }, 2000)

}

function onObjectAdded(o) {
    // $pageTitle.addClass("hidden");
    // $("#maintools > .image-tools").removeClass("hidden");
    addLayer(o);
    enabledRepeatDesignButton(o);
}


function enabledRepeatDesignButton(o) {
    $btnRepeatDesign.find(".disabled").removeClass("disabled");
}

// Layers:
function addLayer(o) {
    var temp = layerHtml;
    $layers.html();
    var layers = "";
    var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
    for (var i = _canvas._objects.length - 1; i >= 0; i--) {
        var obj = _canvas._objects[i];
        var src = obj._element ?. currentSrc;
        if (obj.text) {
            src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABHNJREFUeJzt3LurHGUcx+FvcqKiJohGBBGjRPHyB4imE0u72Akix1bsBAsriyiKokQ7CQoKaiGKCpGAjSI2golXhIR4v3USbzExicViiCHndy55d95zdp4H3iYLM7+d3c+emd0hCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJsq73AFOyMckVmd3ntxp9n+T33kNQ25hkV5IjSU5Yg64jSZ5NcuGirxJdrEuyJ/3fKGNfu+Mv96p0W/q/OazJurV+qdaO9b0HaOiW3gNw0rbeA7QyS4Fc0HsATjqv9wCtzFIg0JxAoCAQKGzoPcAqcSDJd0mON9zmukx+rLy+4TbP5MskP2by7VEr65NcmeTahtuksx1Z/teRLyW5YcpzbUtycAWzLbb2J7lpyrPfmOSVFcz20JTnYgWWE8ixJHcPONvWTG7DaBXHoSRbBpz/nkyO2egCGes1yANJXhhwfweTvNhwe88n+bbh9payvwcH3N+qMcZAvkqys8N+9zbc1r6G21qqJzNslKvCGAPZmeSfDvs90nBbRxtuazn7fKbDfrsaWyCHkjzXe4g1bFeSP3oPMaSxBbIryW+9h1jDfs3IPmDGFMjxjPAUYQqeTtvfXFa1MQXyepKvew8xAw4keav3EEMZUyBP9R5ghozmWI4lkA+TfNB7iBnybvp81Ty4WQrkcPHY4xnRefMATiR5onj8z6EGmbZZCuSjBf79nSSvDjnISLyc5L0FHlvotaCjczK5s/XUe4L2Jtncc6hTzKfdvVh3DTv6gi5L8mn+P9tnSeZ6DsXCrkvyfia3kzya1fVf0Mxn9gJJkk2ZnMJ+k8lfFLfIsyLzmc1AZtosXYNAcwKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIZDhzDbfldRuIAz2crQ23dXXDbUF3c0n2JznRaH0eH27MkPvTLo7/1n2DPgOYkvkkx9I+kKNJ7hzuaUA7m5LckWR32odx+nozyfYkGwd5ZrBCV2Vy2rMnyd+Zfhinr8NJ3k5yb5ItU36usKi5JNuSPJLkkwwfxGLr4yQ7ktwcF/QM6KIkjyX5Jf0jWOr6OcnDmZz6wdRck+Rg+r/hV7r2Z3IqCM2dm+SL9H+Tn+3al2RD42MD2Z7+b+5W6/bGx2ZmuXhbukt6D9DQ5t4DMHsuzeRit/en/9muH5Jc3PjYQJLJRfobmfyK3fuNvtx1NMlrcaPjsqzrPcAadX6Sy7N2TlGPJ/kpyV+9BwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM7kX8fwvIWqet/rAAAAAElFTkSuQmCC';
        }
        layers += temp.replace(/{id}/ig, obj.id).replace("{src}", src).replace("{_id}", obj.id).replace(/{index}/ig, i + 1);
    }
    if (layers != "") {
        $layers.html(layers);
        $("#layers .layer-item").on("click", function () {
            layerSelectEventHandler(this, false);
        })
    } else {
        $layers.html("Empty! please upload an image.");
    }

}

function layerSelectEventHandler($elem, selected) {
    showLayerControls($elem, selected);
}
function clearLayerSelection() {
    var _canvas =  state.isPreviewCanvas?canvasPrev:canvas;
    for (var i = 0; i < _canvas._objects.length; i++) {
        var id = _canvas._objects[i].id;
        $(`#${id} .layers-controls`).attr("style", "display:none !important");
        $(`#${id}`).removeClass("selected-layer");
    }

}
function showLayerControls($elem, selected) {
    var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
    var target = $elem;
    var index = parseInt($elem.getAttribute("data-index")) - 1;
    var preObj = _canvas.selectedObj ?. target;
    if (preObj ?. id != target.id) {
        $(`#${
            target.id
        } .layers-controls`).show();
        $(`#${
            target.id
        }`).addClass("selected-layer");

        _canvas.discardActiveObject();
        _canvas.requestRenderAll();
        _canvas.setActiveObject(_canvas.item(index));
        if (preObj) {
            $(`#${
                preObj.id
            } .layers-controls`).attr("style", "display:none !important");
            $(`#${
                preObj.id
            }`).removeClass("selected-layer");
        }
        _canvas.selectedObj = _canvas.item(index);

    }

    //initLayerEvents($elem)

}


// UI events:

$("#btnSaveDesignPopup").on("click",function(){

    var projectName = $("#projectname").val();
    var projectDesc = $("#projectdesc").val();
    var base64 = canvasPrev.toDataURL({format: 'jpg', quality: 0.8});

    $.ajax({
        type: "POST",
        url: "/app/client/save-design",

        data: {
            title : projectName || "N/A",
            desc :  projectDesc || "N/A",
            thumbBase64:base64 ,
            json: JSON.stringify(canvasPrev.toJSON())
        },
        success: function (res) {

            toast("Design has been Saved.");
        },
        error: function (res) {
            if (res.status === 401) {
                toast(`${res.statusText}:${res.responseJSON.message}`);
            } else {}

        }
    })


})

$btnSaveDesign.on("click", () => {
    var base64 = canvas.toDataURL({format: 'jpg', quality: 0.8});
    $("#prevesavdesign").attr("src",base64);
})

    

function addWaterMark(doc) {
    var totalPages = doc.internal.getNumberOfPages();

    for (i = 1; i <= totalPages; i ++) {
        doc.setPage(i);
        // doc.addImage(imgData, 'PNG', 40, 40, 75, 75);
        doc.setTextColor(150);
        doc.text(50, doc.internal.pageSize.height - 30, 'Watermark');
    }

    return doc;
}

$btnDownloadPDF.on("click", () => {
    $.ajax({
        type: "GET",
        url: `/api/client/download/`,
        success: function (res) {
            const {watermark, download} = res.data;
            if (!download) {
                throw "You are not eligible to download. please contact admin";
            }
            var pdf = null;
            var pdf = new jsPDF("p", "mm", "letter");
            var width = canvasPrev.width;
            var height = canvasPrev.height;
            width = pdf.internal.pageSize.getWidth();
            height = pdf.internal.pageSize.getHeight();

            
            canvasPrev.clone(function (clonedCanvas) {
                var bg = clonedCanvas.backgroundImage;
                clonedCanvas.backgroundImage = false;
                //let canvasJSON = clonedCanvas.toJSON();
                for (var i = 0; i < clonedCanvas._objects.length; i++) {
                    clonedCanvas._objects[i].globalCompositeOperation = null;
                    canvasPrev.renderAll.bind(clonedCanvas)
                }
                bg.globalCompositeOperation = "destination-in";
                clonedCanvas.add(bg);
                clonedCanvas.renderAll()
                var imgData = clonedCanvas.toDataURL('image/png');                
                pdf.addImage(imgData, 'PNG', 0, 0, width, height);
                if (res.data.watermark) {
                    var watermark = "data:image/png;base64,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";
                    pdf.addImage(watermark, 'PNG', 0, 0, 150, 150)
                }
                // pdf = addWaterMark(pdf);
                pdf.save("download.pdf");

            });

        },
        error: function (res) {
            toast("Error while downloading.");
        }
    })


    // for(var i =0;i<canvas._objects.length;i++)
    // { canvas._objects[i].globalCompositeOperation = null;
    // canvas.renderAll.bind(canvas)
    // }
    // bg.globalCompositeOperation = "destination-in";
    // canvas.add(bg);
    // canvas.renderAll()

    // var imgData = canvas.toDataURL('image/png');
    // pdf.addImage(imgData, 'PNG', 0, 0, width, height);
    // //var dataURL = canvas.toDataURL();
    // //pdf.addImage(dataURL, 'SVG', 0, 0);
    // pdf.save("download.pdf");

    // for(var i =0;i<canvas._objects.length;i++)
    // { canvas._objects[i].globalCompositeOperation = 'source-atop';
    // }


});

$btnUploadImage.on("click", () => {
    $btnUploadImageHidden.click();
})

$btnUploadImageHidden.on("change", (e) => {
    if (e.target.files.length === 0) 
        return;    
    processFiles(e.target.files);
    $btnUploadImageHidden.val('');
    //$("#menu-clipart > a").click();
})


function triggerNextStep(stepId){
   // var curStep = $(".setup-content"),
   // curStepBtn = curStep.attr("id"),
    nextStepWizard = $('div.setup-panel div a[href="#' + stepId + '"]').parent().next().children("a"),
    //curInputs = curStep.find("input[type='text'],input[type='url']"),
    isValid = true;
    //$(".form-group").removeClass("has-error");
    // for (var i = 0; i < curInputs.length; i++) {
    //     if (!curInputs[i].validity.valid) {
    //         isValid = false;
    //         $(curInputs[i]).closest(".form-group").addClass("has-error");
    //     }
    // }
    if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
}


const processFiles = (files) => {
    if (files.length === 0) 
        return;
    
    const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml']

    for (let file of files) {
        // check type
        if (! allowedTypes.includes(file.type)) 
            continue
        
        let reader = new FileReader()
        // handle svg
        // if (file.type === 'image/svg+xml') {
        reader.onload = (e) => {
            fabric.Image.fromURL(e.target.result, (img) => {
                img.scaleToHeight(300);
                img.set({left: 150, top: 150})
                img.globalCompositeOperation = 'source-atop';
                if (state.isPreviewCanvas) {
                    canvasPrev.add(img);
                } else {
                    canvas.add(img);
                    canvas.setActiveObject(img);
                }
                mainControls(true);
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
    setTimeout(function () {
        $toast.removeClass("show")
    }, 5000);
}

function hideWorkspaceControls(){
    $layers.html("Empty! please upload an image.");
    mainControls(false);
    hideObjectControls();
}

function hideObjectControls(){
    imageControls(false); 
    textControls(false);
}

function imageControls(show)
{

    if(show)
    {
        $imgCtrl.each(function () {
            $(this).removeClass("hidden");
        }) 
    }else
    {
        $imgCtrl.each(function () {
            $(this).addClass("hidden");
        })
     
    }
   
}

function textControls(show)
{
    if(show)
    {
        $txtCtrl.each(function () {
            $(this).removeClass("hidden");
        })
    }else{
        $txtCtrl.each(function () {
            $(this).addClass("hidden");
        })
    }
}

function mainControls(show)
{
    if(show)
    {
        $mainCtrl.each(function () {
            $(this).removeClass("hidden");
        })
    }else{
        $mainCtrl.each(function () {
            $(this).addClass("hidden");
        })
    }
  
}
function initCanvasTextEvents() {
    let isDrawingText = false;
    var textLeft = 50;
    var textTop = 100;

    $btnAddText.on("click", function () {
        var text = $textarea.val();
        var item = new fabric.IText(text, {
            left: (textLeft += 20),
            top: (textTop += 20),
            fontFamily: 'arial black',
            fill: '#333',
            fontSize: 18
        });
        
        if (state.isPreviewCanvas) {
            canvasPrev.add(item);
        } else {
            canvas.add(item);
        }

        canvas.setActiveObject(item);
        mainControls(true);
        textControls(true);
    })

    $btnTextSize.on("change", function () {
        canvas.getActiveObject().set("fontSize", this.value);
        canvas.renderAll();
    })

}

function initLayerEvents($elem) {
    var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
    var id = $elem.id;
    $(`#${id} .delete`).on("click", function (e) {
        _canvas.remove(_canvas.getActiveObject()).renderAll();
        addLayer();
    })

    $(`#${id} .duplicate`).on("click", function (e) {
        var object = fabric.util.object.clone(_canvas.getActiveObject());
        object.set("top", object.top + 5);
        object.set("left", object.left + 5);
        _canvas.add(object);
    })

    $(`#${id} .bring-fwd`).on("click", function (e) {
        e.stopPropagation();
        var obj = _canvas.getActiveObject();

        _canvas.bringForward(obj)
        _canvas.renderAll();
        var elem = $(`#${id}`);
        elem.prev().insertAfter(elem);
    })


}
this.configUndoRedoStack = () => {
    this.history = window.UndoRedoStack();
    const ctrZY = (e) => {
        const key = e.which || e.keyCode;

        if (e.ctrlKey && document.querySelectorAll('textarea:focus, input:focus').length === 0) {
            if (key === 90) 
                this.undo()
            
            if (key === 89) 
                this.redo()
            
        }
    }
    document.addEventListener('keydown', ctrZY)
}


function flipXYObject() {

    $("#flipW").on("click", () => {
        var selectedObj = canvas.getActiveObject();
        if (! selectedObj) {
            toast("Please select an object.");
            return;
        }
        selectedObj.set('flipX', ! selectedObj.flipX);
        canvas.renderAll();
    });


    $("#flipH").click(() => {
        var selectedObj = canvas.getActiveObject();
        if (! selectedObj) {
            toast("Please select an object.");
            return;
        }
        selectedObj.set('flipY', ! selectedObj.flipY);
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
    // $moveTopItem.on("click",function(){});
    // $moveBottomItem.on("click",function(){});
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
        curAngle+=90;
        canvas.renderAll();
        
    })
}
function cropObject() {
    // $(`#crop`).on("click",function(e){
    // var selectedObj = canvas.getActiveObject();
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


function grayscaleObject() {
    $("#btnGrayscale").on("click", () => {
        applyFilter(0, new fabric.Image.filters.Grayscale());
        applyFilterValue(0, 'mode', 'average');

    })
}

function brightnessObject() {
    $("#brightnessVal").text(`(0%)`);
    $('#brightness-value').on("click", function () {
        applyFilter(5, new fabric.Image.filters.Brightness({
            brightness: parseFloat($('#brightness-value').val())
        }));
    })

    $('#brightness-value').on("input", function () {
        var val = this.value;
        $("#brightnessVal").text(`(${
            parseInt(val * 100)
        }%)`);

        applyFilterValue(5, 'brightness', parseFloat(val));
    });
}

window.addEventListener("paste", pasteImage);

function pasteImage(event) {
    // get the raw clipboardData
    var cbData = event.clipboardData;

    for (var i = 0; i < cbData.items.length; i++) {

        // get the clipboard item
        var cbDataItem = cbData.items[i];
        var type = cbDataItem.type;

        // warning: most browsers don't support image data type
        if (type.indexOf("image") != -1) {
            // grab the imageData (as a blob)
            var imageData = cbDataItem.getAsFile();
            // format the imageData into a URL
            var imageURL = window.webkitURL.createObjectURL(imageData);
            fabric.Image.fromURL(imageURL, (img) => {
                // img.scaleToWidth(300);
                img.globalCompositeOperation = "source-atop";
                canvas.add(img).renderAll();
            })
            // We've got an imageURL, add code to use it as needed
            // the imageURL can be used as src for an Image object
        }
    }
}
function contrastObject() {
    $("#contrastVal").text(`(0%)`);

    $('#contrast-value').on("click", function () {
        applyFilter(6, new fabric.Image.filters.Contrast({
            contrast: parseFloat($('#contrast-value').val())
        }))
    })

    $('#contrast-value').on("input", function () {

        var val = this.value;
        $("#contrastVal").text(`(${
            parseInt(val * 100)
        }%)`);
        applyFilterValue(6, 'contrast', parseFloat(val));
    });
}

function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return { width: srcWidth*ratio, height: srcHeight*ratio };
}


function ungroup(event)
{
    var activeObject = canvas.getActiveObject();
    if(activeObject.type=="group"){
        var items = activeObject._objects;
        activeObject._restoreObjectsState();
        canvas.remove(activeObject);
        for(var i = 0; i < items.length; i++) {
            items[i].globalCompositeOperation = "source-atop"
          canvas.add(items[i]);
          canvas.item(canvas.size()-1).hasControls = true;
        }
        canvas.renderAll();
    }
}
initUIEvents();
initCanvasEvents();


// const savedCanvas = saveInBrowser.load('kp-editor');
// if (savedCanvas) {
//     canvas.loadFromJSON(savedCanvas, canvas.renderAll.bind(canvas));
// }
