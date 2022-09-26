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
    <div class="d-sm-flex layer-label tx-bold">Layer {index}</div>
    <div class="d-sm-flex layers-controls" style="display:none !important">
    <i class='ion-ios-copy-outline duplicate main-tool-button'   title='duplicate' ></i>
    <i class='ion-ios-upload-outline bring-fwd' title="move up" id="bring-fwd" ></i>
    <i class='ion-ios-download-outline bring-back' title="move down" id="bring-back" ></i>
    <i class='ion-ios-trash-outline delete main-tool-button' title='delete' ></i>
    </div>
   </div>`;

const projectHtml = `<div class='col-lg-12 my-projects'><div class="list-group-item d-flex">
<div class="media d-block d-sm-flex">
  <div class="d-block d-sm-flex mg-sm-r-20">
    <img src="{base64}" class="rounded-circle wd-40" alt="Image">
  </div><!-- d-flex -->
  <div class="media-body mg-t-10 mg-sm-t-0">
    <h6 class="mg-b-5 tx-14"><a href="#" class="tx-inverse hover-primary tx-bold" onclick="loadProject('{code}')" id='{code}' >{title}</a></h6>
    <p class="mg-b-0 tx-12">{created_dt}</p>
  </div><!-- media-body -->
</div><!-- media -->
<a href="#" class="pd-lg-x-20 mg-l-auto ion-trash-a tx-30 text-secondary delete"  onclick="deleteProject('{code}',this)" ></a>
</div></div>`;

const designHtml = `<div class='col-lg-12 pre-designed'><div class="list-group-item d-flex">
<div class="media d-block d-sm-flex">
  <div class="d-block d-sm-flex mg-sm-r-20">
    <img src="{base64}" class="rounded-circle wd-40" alt="Image">
  </div><!-- d-flex -->
  <div class="media-body mg-t-10 mg-sm-t-0">
    <h6 class="mg-b-5 tx-14"><a href="#" class="tx-inverse hover-primary tx-bold" onclick="loadDesign('{code}')" id='{code}' >{title}</a></h6>
    <p class="mg-b-0 tx-12">{created_dt}</p>
  </div><!-- media-body -->
</div><!-- media -->
</div></div>`;



// vars
$btnDownloadPDF = $("#btn-download-pdf");
// $btnSaveDesign = $("#btn-save-design");

$btnUploadImage = $("#btn-upload-img");
$btnUploadImageHidden = $("#btn-upload-img-hidden");
$layers = $("#layers");
$btnRepeatDesign = $("#repeatdesign");
$clientMainCanvas = $("#client-main-canvas");
$canvasPrev = $("#client-main-canvas-logo");
$btnSave = $("#btnSave");
// $repeatImageCtrl = $("#repeat-image-ctrl");
// $btnCancelRepeatDesign = $("#repeat-image-ctrl .cancel");
// $btnApplyToOne = $("#repeat-image-ctrl .done");
// $btnApplyRepeatDesign = $("#applytoall");
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
// $btnMyProject = $("#btnMyProject");
// $btnDeleteMyProject = $("#myprojects .delete");

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



function getUserProjects()
{
    $loader.removeClass("hidden");
    $.get(`/api/project/`, function (res) {
        $loader.addClass("hidden");
        var projects = res.data || [];
        
        var temp="";
        $("#myProjectContainer").html("<p>No projects found.</p>");
        for(var i=0;i<projects.length;i++)
        {
            var p = projects[i];
            temp+= projectHtml
            .replace(/{code}/ig, p.code)
            .replace(/{base64}/ig,p.thumbBase64) 
            .replace(/{title}/ig,p.title) 
            .replace(/{created_dt}/ig,  new Date(p.created_dt).toDateString() ); 
            $("#myProjectContainer").html(temp);
        }

    })
    
}


function getSharedProjects()
{
    $loader.removeClass("hidden");
    $.get(`/api/pre-designed/`, function (res) {
        $loader.addClass("hidden");
        debugger;
        var projects = res.data || [];
        
        var temp="";
        $("#preDesignedContainer").html("<p>No projects found.</p>");
        for(var i=0;i<projects.length;i++)
        {
            var p = projects[i];
            temp+= designHtml
            .replace(/{code}/ig, p.code)
            .replace(/{base64}/ig,p.thumbBase64) 
            .replace(/{title}/ig,p.title) 
            .replace(/{created_dt}/ig,  new Date(p.created_dt).toDateString() ); 
            $("#preDesignedContainer").html(temp);
        }

    }).fail(function(ex){
        console.log(ex);
        toast('Something went wrong! please contact to admin.');
    })
    
}

// function loadUserProject(id) {
//     var group = [];
//     $.get(`/api/project/${id}`, function (data) {
//         const json = data.json;
        
//         if (!json) { return; }

//         var object = JSON.parse(json);
//         canvas.clear();
//         canvasPrev.clear();
//         canvasPrev.loadFromJSON(json, function () {
//             state.isPreviewCanvas = true;
//             $("#repeat-image-ctrl #previewdesign").hide();
//             $("#repeat-image-ctrl #backtodesign").show();
//             $clientMainCanvas.parent().fadeOut();
//             $canvasPrev.parent().fadeIn();
//             canvas.setWidth(8.5 * dpi);
//             canvas.setHeight(11 * dpi);
//             canvasPrev.renderAll.bind(canvasPrev);
//             // $("#template-info-panel .template-name").text(data.name);
//             // $("#template-info-panel .template-desc").text(data.desc || "NA");
//             // $("#template-info-panel .template-desc").text(data.modified_dt || "NA");
//             // $("#use-project").attr("href",`/app/workspace/project/${data.code}`);

//             // $imgCtrl.each(function () {
//             //     $(this).removeClass("hidden");
//             // })
//         }, function (o, object) {
//             // console.log(o,object)
//         })
//     })
// }


function deleteProject(id,self){
    
    if(!confirm("Do you want to delete this project?"))
    {return; }

    $.ajax({
        type: "DELETE",
        url: `/api/client/project/${id}`,
        success: function (res) {
            toast("Project deleted successfully!");
            $(self).parent().parent().fadeOut();
        },
        error: function (res) {
            toast("Error while deleting project.");
        }
    })
}
function loadProject(id) {
    $loader.removeClass("hidden");
    state.isPreviewCanvas = false;
    var group = [];
    $("#btnBack").click();
    $.get(`/api/project/${id}`, function (res) {
        $loader.addClass("hidden");
        const json = JSON.parse(res.data.json);
        if (!json) { return; }
        canvas.clear();
        canvas.loadFromJSON(json, function () {        
            $("#menu-upload > a").click();
        }, function (o, object) {
            // console.log(o,object)
        })

        fabric.loadSVGFromURL(res.template.base64, function (objects, options) {
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
        
    }).fail(function(err){
        $loader.addClass("hidden");
        toast("Something went wrong! Please contact admin.");
        console.log(err);
    })
}

function loadDesign(id) {
    state.isPreviewCanvas = false;
    var group = [];
    $("#btnBack").click();
    $loader.removeClass("hidden");
    $.get(`/api/pre-designed/${id}`, function (res) {
        $loader.addClass("hidden");
        const json = JSON.parse(res.data.json);
        if (!json) { return; }
        canvas.clear();

         /// this is to set the canvas to load design. 
        canvas.loadFromJSON(json, function () {
           $("#menu-upload > a").click();
        }, function (o, object) {
            // console.log(o,object)
        })

        /// this is to set the previous canvas to load template. 
        /// we pre load the template and use this while preview. 
        fabric.loadSVGFromURL(res.template.base64, function (objects, options) {
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
        
    }).fail(function(err){
        $loader.addClass("hidden");
        toast("Something went wrong! Please contact admin.");
        console.log(err);
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
        canvas.templateId = data.code;
        hideWorkspaceControls();
        // loading Big Design
        fabric.loadSVGFromURL(svgBase64, function (objects, options) {
            
            var logo= objects[0];
            var w =logo.getScaledWidth(); 
            var h = logo.getScaledHeight();            
            canvas.setDimensions({width: w , height: h});
            canvas.setBackgroundImage(logo, canvas.renderAll.bind(canvas));            
            canvas.renderAll();
            

            $("#template-info-panel .template-name").text(data.name);
            $("#template-info-panel .page-size").text(meta.pageSize);
            $("#template-info-panel .logo-size").text((meta.objectWidth / 72).toFixed(2) + "''");
            $("#template-info-panel .total-logos").text(meta.objects);
            $("#template-info-panel .page-title").text(data.title);
            $("#template-info-panel .ref_code").text(data.ref_code | "NA");

            
            $("#template-info-panel #imgSelectedTemplate").attr("src",svgBase64)
            $(".kk-part-no").text(data.ref_code || "N/A");
            $(".kk-part-link").text(data.link || "N/A");
            var reg = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            $("#kp-link").attr("href", reg.test(data.link)?data.link:"#");
            $("#use-template").unbind().click(function () {
                window.location.href = `/app/workspace/${
                    data.code
                }`;
            })
           // debugger;
            // var len = $('.canvas-container').find('.ruler').length;
            // if(len === 0){
            //     $('.canvas-container').ruler({
            //         vRuleSize: 22,
            //         hRuleSize: 22,
            //         showCrosshair : false,
            //         showMousePos: false
            //     }); 
            // }
        }, function (item, object) {
            object.set({left:0,top:0}); 
            object.scaleToWidth(400);
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
            //loadedObjects.scaleToWidth(templateWidth);
            //loadedObjects.scaleToHeight((templateHeight/72)*96);

            canvasPrev.renderAll();
            loadedObjects.center().setCoords();

        }, function (item, object) {
            object.set('id', item.getAttribute('id'));
            //object.set('width', (object.width/72)*96);
            //object.set('height', (object.height/72)*96);
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
        $(this).removeClass('bg-menu-highlight');
    })

    $(itemToHighlight).addClass("bg-menu-highlight");
}

function menuPanelDisplay(itemToDisplay){
    $("#menu-panel > .tab-content > .tab-pane").each(function(e){
        $(this).removeClass('active');
        $(this).removeAttr("style");
    })

    $(itemToDisplay).addClass("active");
}

function initUIEvents() {

    var layers = $("#layers");
    $("#collapse-layers").on("click",".layer-item", function (e) {
        var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
        //layerSelectEventHandler(this);
         var selected = $(this).index();
         var len=$(layers).children().length; 
         _canvas.discardActiveObject().renderAll();
         
         var obj = _canvas.getObjects().find(i=>i.id == this.id); 
         _canvas.setActiveObject(obj).renderAll();

         showLayerControls(this);
        $(this).on("click",".bring-fwd",function(evt){
            evt.stopPropagation();
             if(selected>0)
            {
                _canvas.bringForward(obj);
                jQuery($(layers).children().eq(selected-1)).before(jQuery($(layers).children().eq(selected)));
                selected=selected-1;                
            }
        });
       
        $(this).on("click",".bring-back",function(evt){
            evt.stopPropagation();
             if(selected < len)
            {
                _canvas.sendBackwards(obj);
            jQuery($(layers).children().eq(selected+1)).after(jQuery($(layers).children().eq(selected)));
            selected=selected+1;
            }
        });

        $(this).on("click",".duplicate",function(evt){
            evt.stopPropagation();
            var object = fabric.util.object.clone(_canvas.getActiveObject());
            object.set("top", object.top + 5);
            object.set("left", object.left + 5);
            _canvas.add(object);
        });
        $(this).on("click",".delete",function(evt){
            evt.stopPropagation();
            _canvas.remove(_canvas.getActiveObject()).renderAll();
            addLayer();
        })
      
    })

    

    $("#btn-step-design").on("click",function(e){
        e.preventDefault();
        $("#menu-upload > a").click();
        $(".step-item:nth-child(2)").removeClass("active");
        $(".step-item:nth-child(3)").addClass("active");
    })

    $("#btnCancelSaveDesign").on("click",function(){
        $("#btnTemplate").click();
    })


    $btnSave.unbind().on("click",function(e){
        e.preventDefault();
       saveDesign();
    })
    $("#btn-step-preview, #btn-menu-peview").on("click",function(e){
        e.preventDefault();
        previewDesign();      
    });
    $("#btn-step-download").on("click",function(e){
        e.preventDefault();
       $btnDownloadPDF.click(); 
    });
    $("#btnBack").on("click",function(e){
        e.preventDefault();
        backFromPreview();
    });
    $("#btnMyProjects").on("click",function(e){
        e.preventDefault();
        canvas.clear();
        canvasPrev.clear();
        $layers.html();        
        getUserProjects();
    })

    $("#btnLibrary").on("click",function(e){
        e.preventDefault();
        canvas.clear();
        canvasPrev.clear();
        $layers.html();        
        getSharedProjects();
    })

   



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
            $("#workarea").removeAttr("style");
            $(this).html($(this).html().replace("On","Off"));

        }
        else{
            $(this).html($(this).html().replace("Off","On"));
            
            $(this).addClass('tx-gray-500');
            $("#workarea").attr("style","background-image:url('')");
           
        }
      
    })
    $("#btnDisplayRuler").on("click",function(){
        var style = !($(".vRule").is(':visible'));
        if(style)
        {   
              var len = $('.canvas-container').find('.ruler').length;
            if(len === 0){
                $('.canvas-container').ruler({
                    vRuleSize: 22,
                    hRuleSize: 22,
                    showCrosshair : false,
                    showMousePos: false
                }); 
            }
            $(this).removeClass('tx-gray-500');
            $(".vRule, .hRule").show();
            $(this).html($(this).html().replace("On","Off"));
        }
        else{
            $(".vRule, .hRule").hide();
            $(this).html($(this).html().replace("Off","On"));
            $(this).addClass('tx-gray-500');
           
        }
      
    })
    // $("#shared-library .custom-design").on("click",function(){
    //     var id = $(this).attr("id"); 
    //     $loader.removeClass("hidden");
    //     $.ajax({
    //         type: "GET",
    //         url: `/api/pre-designed/${id}`,
    //         success: function (res) {
    //             const {json} = res.data;
    //             if(!json) return; 
    //             var obj = JSON.parse(json);
    //             var objs = obj.objects;
             
    //             fabric.util.enlivenObjects(objs, function(objects) {
    //                 var origRenderOnAddRemove = canvas.renderOnAddRemove;
    //                 canvas.renderOnAddRemove = false;
    //                 var grp = new fabric.Group(objects,{
    //                     top:100,
    //                     left:100
    //                 });
    //                 grp.globalCompositeOperation = "source-atop"

    //                 if (state.isPreviewCanvas) {
    //                     canvasPrev.add(grp);
    //                 } else {
    //                     canvas.add(grp);
    //                 }

                  
    //                 canvas.renderOnAddRemove = origRenderOnAddRemove;
    //                 canvas.renderAll();
    //                 mainControls(true);
    //                 $loader.addClass("hidden");
    //               });
    
    
    
    //         },
    //         error: function (res) {
    //             toast("Error while downloading.");
    //         }
    //     })
    
    // })
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

    // $btnTemplate.on("click", function (e) {
    //     //$("#templatepanel").hide();
    //     //canvas.discardActiveObject().renderAll();
    // })

    // $btnMyProject.on("click", function (e) {


    //     // $.get("",)
    //     $loader.removeClass("hidden")
    //     window.location.href = '/app/projects';
    // })

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

    // $btnCancelRepeatDesign.on("click", function (e) {
    //     // $("#repeatdesign .toggle-on").removeClass("active");
    //     // $("#repeatdesign .toggle-off").addClass("active");
    //     closeRepeatDesignPreview();
    //     // closeRepeatDesignPreview();
    // })

    $("#templatepanel .template").on("click", (e) => {
        enabledTextMode = false;
        var id = e.currentTarget.id;
        canvas.clear();
        loadSVGTemplate(id);
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


    $("#clipartmenu .clipart img").on("click", (e) => {
        var id = e.currentTarget.src;
        var _canvas = state.isPreviewCanvas?canvasPrev:canvas;

        fabric.Image.fromURL(id, function (img) {
            var img1 = img.set({left: 0, top: 0});
            img1.scaleToHeight(250);

            img1.globalCompositeOperation = 'source-atop';
            _canvas.add(img1);
            mainControls(true);
           // $("#menu-text > a").click();
        });

    });

    // $btnApplyToOne.on("click",function(e){
    //     state.isPreviewCanvas = true;
    //     $("#repeat-image-ctrl #previewdesign").hide();
    //     $("#repeat-image-ctrl #backtodesign").show();
    //     $clientMainCanvas.parent().fadeOut();
    //     $canvasPrev.parent().fadeIn();
    //     canvas.clone(function (clonedCanvas) {
    //         var bg = clonedCanvas.backgroundImage;
    //         clonedCanvas.backgroundImage = false;
    //         for (var i = 0; i < clonedCanvas._objects.length; i++) {
    //             clonedCanvas._objects[i].globalCompositeOperation = null;
    //             canvas.renderAll.bind(clonedCanvas)
    //         }
    //         clonedCanvas.renderAll()
    //         var dataURL = clonedCanvas.toDataURL({
    //             format: "png",
    //             left: 0,
    //             top: 0,
    //             width: canvas.width,
    //             height: canvas.height
    //         });

    //         var logos = canvasPrev.backgroundImage._objects;
    //         fabric.Image.fromURL(dataURL, (img) => {
    //             canvasPrev.remove(... canvasPrev.getObjects());
    //             //for (var i = 0; i < logos.length; i++) {

    //                 var logo = logos[0];
    //                 var object = fabric.util.object.clone(img);
    //                 var left = logo.left + logo.group.left  + logo.group.width / 2;
    //                 var top = logo.top + logo.group.top  + logo.group.height / 2;
    //                 object.scaleToWidth(logo.width)
    //                 object.set("top", top);
    //                 object.set("left", left);
    //                 object.globalCompositeOperation = "source-atop";
    //                 canvasPrev.add(object).renderAll();
    //                 $btnDownloadPDF.removeClass("hidden");
    //                 $btnSaveDesign.removeClass("hidden");
    //                $(".vRule, .hRule").hide();

    //             //}
    //    //         closeRepeatDesignPreview();
    //         });
    //     });
    // })

    // $btnApplyRepeatDesign.on("click", function (e) {
    //     if(canvas._objects.length == 0)
    //     {
    //         toast("Please create your design before preview.");
    //         return;
    //     }
    //     $loader.removeClass("hidden");

    //     state.isPreviewCanvas = true;
    //     //$repeatImageCtrl.hide();
    //     $("#repeat-image-ctrl #previewdesign").hide();
    //     $("#repeat-image-ctrl #backtodesign").show();

    //     $clientMainCanvas.parent().fadeOut();
    //     $canvasPrev.parent().fadeIn();
    //     // var logos = canvasPrev.backgroundImage._objects;
    //     // var logox = logos[0];

        
    //     // var dataURL = canvas.toDataURL({
    //     //         format: "png",
    //     //         left: 0,
    //     //         top: 0,
    //     //         width: canvas.width,
    //     //         height: canvas.height
    //     // });

    //     //      fabric.Image.fromURL(dataURL, (img) => {
    //     //         for (var i = 0; i < logos.length; i++) {
    //     //             var logo = logos[i];
    //     //             var object = fabric.util.object.clone(img);
    //     //             var left = logo.left + logo.group.left + logo.group.width / 2;
    //     //             var top = logo.top + logo.group.top  + logo.group.height / 2;
    //     //             object.scaleToWidth(logo.width)
    //     //             object.set("top", top);
    //     //             object.set("left", left);
    //     //             object.globalCompositeOperation = "source-atop";
    //     //             canvasPrev.add(object).renderAll();
    //     //             $btnDownloadPDF.removeClass("hidden");
    //     //             $btnSaveDesign.removeClass("hidden");
    //     //             $(".vRule, .hRule").hide();
    //     //         }
    //     //     })
    //      canvas.clone(function (clonedCanvas) {
    //          var bg = clonedCanvas.backgroundImage;
    //          clonedCanvas.backgroundImage = false;
    //          for (var i = 0; i < clonedCanvas._objects.length; i++) {
    //              clonedCanvas._objects[i].globalCompositeOperation = null;
    //              canvas.renderAll.bind(clonedCanvas)
    //          }
    //          clonedCanvas.renderAll()
    //          var dataURL = clonedCanvas.toDataURL({
    //              format: "png",
    //              left: 0,
    //              top: 0,
    //              width: canvas.width,
    //              height: canvas.height
    //          });

    //          var logos = canvasPrev.backgroundImage._objects;
    //          fabric.Image.fromURL(dataURL, (img) => {
    //              canvasPrev.remove(... canvasPrev.getObjects());
    //              for (var i = 0; i < logos.length; i++) {
    //                  var logo = logos[i];
    //                  var object = fabric.util.object.clone(img);
    //                  var left = logo.left + logo.group.left  + logo.group.width / 2;
    //                  var top = logo.top + logo.group.top  + logo.group.height / 2;
    //                  object.scaleToWidth(logo.width+10)
    //                  object.set("top", top);
    //                  object.set("left", left);
    //                  object.globalCompositeOperation = "source-atop";
    //                  canvasPrev.add(object).renderAll();
    //                  $btnDownloadPDF.removeClass("hidden");
    //                  $btnSaveDesign.removeClass("hidden");
    //                  $(".vRule, .hRule").hide();

    //              }
    //              $loader.addClass("hidden");
    //     //         closeRepeatDesignPreview();
    //          });
    //      });
    // });


    this.configUndoRedoStack();

}

// function closeRepeatDesignPreview() {
//     $repeatImageCtrl.show();
//     $clientMainCanvas.parent().fadeIn();
//     $canvasPrev.parent().fadeOut();
//     state.isPreviewCanvas = false;

//     $("#repeat-image-ctrl #previewdesign").show();
//     $("#repeat-image-ctrl #backtodesign").hide();
//     $btnDownloadPDF.addClass("hidden");
//     $btnSaveDesign.addClass("hidden");
//     var json = canvas.toJSON();
//     canvasPrev.clear();
//     canvas.clear();
//     canvas.loadFromJSON(json, function() {
//         canvas.renderAll(); 
//      },function(o,object){
//         addLayer(o);
//         console.log(o,object)
//      })
    
// }



function saveDesign(){
    /**
     * . Check is Canvas is not Preview Canvas. 
     * . Check if canvas has atleast one item. 
     * . Validate project info. atleast title should be provided. 
     * . Submit canvas json and project info to api. 
     * . Notify success or failed. 
     */
    // if(state.isPreviewCanvas)
    // {toast("Please go back and save your design."); return;}

    if(canvas.getObjects().length == 0)
    {toast("Please create your design before save."); return;}
    
    
    var title = $("#input-project-title").val();
    var desc = $("#input-project-desc").val();

    if(!title)
    { toast("Please enter project title."); return;}

    if(!canvas.templateId)
    {  console.error("templateId is not present in canvas.");
        toast("Can't save project. please contact admin."); return;
    }

    var thumbBase64 = canvas.toDataURL({format: 'jpg', quality: 0.8});
    $.ajax({
        type: "POST",
        url: "/app/client/save-design",
        data: {
            title : title || "N/A",
            desc :  desc || "N/A",
            thumbBase64:thumbBase64 ,
            json: JSON.stringify(canvas.toDatalessJSON()),
            templateId: canvas.templateId
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
}

function previewDesign()
{
   /*
   . Check Design can be previewed. 
   . Hide create design heading and show preview design heading. 
   . Disable Save button. 
   . Hide main canvas. 
   . Show preview canvas.
   . Render preview. 
   . Set Preview State. 
   . Set Wizard
    */

   //1. 
   if(canvas.getObjects().length == 0)
   { toast("Please create your design before preview."); return; }

 

   //2. 
   $("#btnBack").removeClass("hidden"); 
   $("#btnFinalized").removeClass("hidden"); 
   $("#btn-step-preview").addClass("hidden"); 
  

   //3. 
//    $("#btnSave").unbind().click(function(){
//     toast("Please go back and save your design.");
//    });

   //4. 
   $clientMainCanvas.parent().fadeOut();
   //5. 
   $canvasPrev.parent().fadeIn();
   //6. 
   renderPreview();
   //7.
   state.isPreviewCanvas = true;

   //8. 
   $(".step-item:nth-child(3)").removeClass("active");
   $(".step-item:nth-child(4)").addClass("active");


}
function backFromPreview(){
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

     //1. 
    $("#btnBack").addClass("hidden"); 
    $("#btnFinalized").addClass("hidden"); 
    $("#btn-step-preview").removeClass("hidden");
    $("#create-design-heading").removeClass("hidden");
    $("#preview-design-heading").addClass("hidden");
    //2. 
    //  $("#btnSave").unbind().click(function(){
    //     toast("Please go back and save your design.");
    //  });

     //3. 
     $clientMainCanvas.parent().fadeIn();
     //4. 
     $canvasPrev.parent().fadeOut();
     //5. 
    // canvasPrev.clear(); 
     //6. 
     renderMainCanvasOnBackButton()
     //7. 
     state.isPreviewCanvas = false;

     $(".step-item:nth-child(4)").removeClass("active");
     $(".step-item:nth-child(3)").addClass("active");
     
}

function renderPreview()
{
    $loader.removeClass("hidden");
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
                object.scaleToWidth(logo.width+10)
                object.set("top", top);
                object.set("left", left);
                object.globalCompositeOperation = "source-atop";
                canvasPrev.add(object).renderAll();
               // $btnDownloadPDF.removeClass("hidden");
                //$btnSaveDesign.removeClass("hidden");
                $(".vRule, .hRule").hide();
                $("#create-design-heading").addClass("hidden");
                $("#preview-design-heading").removeClass("hidden");
               // canvasPrev.setZoom(.8);

            }
            $loader.addClass("hidden");
   //         closeRepeatDesignPreview();
        });
    })
}
function renderMainCanvasOnBackButton()
{
    var json = canvas.toJSON();
    canvas.clear();
    canvas.loadFromJSON(json, function() {
        canvas.renderAll(); 
     },function(o,object){
        addLayer(o);
        console.log(o,object)
     })
    
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
    //showLayerControls(elem);
    $(`#${id}`).addClass("selected-layer");

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
    $("#collapse-layers").addClass("show");
    var temp = layerHtml;
    $layers.html();
    var layers = "";
    //var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
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
        // $("#layers .layer-item").on("click", function (e) {
           
        //     selectedObjectBySelectLayer(this);
        //     initLayerEvents(this);
        //     showLayerControls(this);
            

        // })
    } else {
        $layers.html("Empty! please upload an image.");
    }

}

function layerSelectEventHandler($elem, selected) {
    
   
    selectedObjectBySelectLayer($elem, selected);
}
function clearLayerSelection() {
    var _canvas =  state.isPreviewCanvas?canvasPrev:canvas;
    for (var i = 0; i < _canvas._objects.length; i++) {
        var id = _canvas._objects[i].id;
        $(`#${id} .layers-controls`).attr("style", "display:none !important");
        $(`#${id}`).removeClass("selected-layer");
    }

}
function selectedObjectBySelectLayer($elem, selected)
{
    var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
    var target = $elem;
    _canvas.discardActiveObject().renderAll();
    var index = parseInt(target.id.replace("obj",""))-1;
    _canvas.setActiveObject(_canvas.item(index)).renderAll();


    
}
function showLayerControls($elem, selected) {
    var target = $elem;    

    $(`.layers-controls`).each(function(){
        $(this).hide();
        $(this).addClass('hidden');
        $(this).parent().removeClass('selected-layer')
    }).hide();
   


    $(`#${target.id} .layers-controls`).show();
    $(`#${target.id} .layers-controls`).removeClass('hidden');
    $(`#${target.id}`).addClass("selected-layer");
   //$elem.click();
    /*
    var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
    var target = $elem;
  
    var index = parseInt($elem.getAttribute("data-index")) - 1;
    var preObj = _canvas.selectedObj ?. target;
    if (preObj?. id != target.id) {
        $(`#${target.id} .layers-controls`).show();
        $(`#${target.id}`).addClass("selected-layer");

        _canvas.discardActiveObject();
        _canvas.requestRenderAll();
        _canvas.setActiveObject(_canvas.item(index));
        if (preObj) {
            $(`#${preObj.id} .layers-controls`).attr("style", "display:none !important");
            $(`#${preObj.id}`).removeClass("selected-layer");
        }
       _canvas.selectedObj = _canvas.item(index);

    }
*/
    //initLayerEvents($elem)

}


// UI events:

// $("#btnSaveDesignPopup").on("click",function(){

//     var projectName = $("#projectname").val();
//     var projectDesc = $("#projectdesc").val();
//     var base64 = canvasPrev.toDataURL({format: 'jpg', quality: 0.8});

//     $.ajax({
//         type: "POST",
//         url: "/app/client/save-design",

//         data: {
//             title : projectName || "N/A",
//             desc :  projectDesc || "N/A",
//             thumbBase64:base64 ,
//             json: JSON.stringify(canvasPrev.toJSON())
//         },
//         success: function (res) {

//             toast("Design has been Saved.");
//         },
//         error: function (res) {
//             if (res.status === 401) {
//                 toast(`${res.statusText}:${res.responseJSON.message}`);
//             } else {}

//         }
//     })


// })

// $btnSaveDesign.on("click", () => {
//     var base64 = canvas.toDataURL({format: 'jpg', quality: 0.8});
//     $("#prevesavdesign").attr("src",base64);
// })

    

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
function downloadDesign(){

    if(!state.isPreviewCanvas)
    {toast("Please preview your design before download.");return;}

    if(canvasPrev.getObjects().length == 0)
    {toast("Please create your design before download.");return;}


    $loader.removeClass("hidden");

    $.ajax({
        type: "GET",
        url: `/api/client/download/`,
        success: function (res) {
            const {watermark, download} = res.data;
            if (!download) {
                throw "You are not eligible to download. please contact admin";
            }
            var pdf = null;
            var pdf = new jsPDF({
                unit: 'px', // set the unit of measurement to px
                format: 'letter', // set your paper size format
              });

            var width = canvasPrev.backgroundImage.width;
            var height = canvasPrev.backgroundImage.height;
            width = pdf.internal.pageSize.getWidth();
            height = pdf.internal.pageSize.getHeight();

            canvasPrev.clone(function (clonedCanvas) {
                var bg = clonedCanvas.backgroundImage;
                clonedCanvas.backgroundImage = false;
                //let canvasJSON = clonedCanvas.toJSON();
                ///clonedCanvas.setDimensions({width:1000,height:1200});
              

                for (var i = 0; i < clonedCanvas._objects.length; i++) {
                    clonedCanvas._objects[i].globalCompositeOperation = null;
                    canvasPrev.renderAll.bind(clonedCanvas)
                }
                bg.globalCompositeOperation = "destination-in";
                clonedCanvas.add(bg);             
                clonedCanvas.renderAll();
                let widthRatio = width / clonedCanvas.width
                let heightRatio = height / clonedCanvas.height

                //let ratio = widthRatio > heightRatio ? heightRatio : widthRatio

                var imgData = clonedCanvas.toDataURL('image/jpeg',1.0);                
                pdf.addImage(imgData, 'JPEG', 0, 0);
                if (res.data.watermark) {
                    var watermark = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAAEeCAMAAABrF4rkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAAK2trbCrq6+srLCrq66qqrCsrLCrq66rq6+rq7Crq66qqq+rq7Crq66rq6+rq6+rqyoYg4gAAAAQdFJOUwAfOlBkdYSRnqm0wczX5PKIYusyAAAACXBIWXMAABcRAAAXEQHKJvM/AAAF20lEQVR4Xu3dy3ajOhBAUWNjh3aw8f9/7RVQUpUegHv16FJnTzoh6QFniacwuQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBf3KbxKl+icps+n+km36Aw16HPlrXO5/OS72HFOp9PL0ugtM6rk0VIqLOHOnuos4c6e6izhzp7tM6bOhWt8/k8ZBkiW4c+pbwOfXJlHfpYdR36qFYd+kRa53V9yVcz+sxMne7S0Sd3tXUu9ClcJUW8kqBP7s9aIl1n0Sf3nDuYq1D6iNv0nm+3hz6mDn3EcsyaV/8+2Dr0WcgRvbX69EnnO1NrNt19Hz0b/JElGed9snPlFtd9Duu47vNFHcd9vqrjts+XdZz2+bqOyz5/Ucdhn7+qU/SRZSe2Xef208xl+jxl0XkV9waN0K39sGXq89Vo+39b7u0sihbLqNrt4+FJVc2Tr65sc83L07XP20Eds+vJ+qTF7d1L6DOef8uaNfvowj+ypNB5GDqLRh9ddP5j06GqD3UyRR/qFLI+D+qUbJ+EOkmjD3WMqg91MkUf6hSyPr+yEIntY64vIOhzub3fxeMFhvs+j2XNNwM577PUmVd9K5DrPrFOMA3ttxo47mPqzJ7NQG77FHWCZiCnfXROwmgF8tlnkDUu/NavNnDZp5cVroxVIJd90uyd/KuqQLaPl8uvuGser2ZyS4x3+SVh+gyy6PTessL9pRHonT9ukfo4mCkWafiErw8DSZ/2NOk56fAJjgItfVzMFEd2+AStQOZiLPTxs2UtsuETNAKZq9Vbsb8+vWL4BPuBvCmHT0AgFa8sdPiYY7gxuTnbyXQxhQ6fVp3A0yFLVcNno47TdxSWwyfVmR6jfDWbvO6d8+GjdcLG1KdAjm6DFbLhk9UJJJDfOtnwKesEcyAP58rd4zmO4++jWtVOknz6Rp2gbz8Mfyp6rlefwcQfvZp1PPiJaz57FWufXpIhvNXp7CE6KNc/v4rwVudW3Uwu7mllw8ddHbthieIc2Awf6szyT+7r8KHO4i0/Fmn4OLvhZeqMT7uHzjuk4ePrCUuts0yeX3/lu2q2KpVzNBGhdaY45ZAm1u39ryDNKDsaPlpHd7hx/BR5HA6fVp20lynzuBs+zTppmFRXXmn4mLvyJ6ZPN+XrKxmqI3gaPuW4Oic9E85v16x5JvnOSMPHxZmhuVCwfeTm4HDt+z6/j5OGj4c3YZhTnqzPz7pk/eH7jx0pMiXoZE6i2ad63vKt9wLXGWU3cxKNPuZ1IOoZ993z8HF0TVr1adYJZAjdw6/5qVP12aoTTM+5y/D0smWtsj7Zi8xro6eBI2yfI41zodNr9Jm3o+7+rH7g43S5UPWJZ33dI9/YzMmRJ0Ufe07cO74Hn2R9irfnXgf5oZM6t34Yhnu+rrZPvQkt29jLw10w3d9Ov/aOxX6fsI15eLTyER8zXdlH2g/6ONDXJ33LXwlYee+TpiAy+iI0133KZzASfV2e4z71MxiJlnDbx654xX2f3Tru+5iVHh/L2V1xuem6j66yOY532YFMPzvsro+ucH6nL9tb65So7ePgE9e6uuVfaunM1biZ2TN9zv8ZJF3ZxtydnQiURUH6L+ffuHbrZH3q66/zf+L6oI7tY58lXP7b+e/vpM/SbD6TY2ZubMDQx8FhS6bLZxujx8wZZ4ep29bvn8ld1ny2tb56/uPjLNCyh+6tPukWmY+HvjJf9Elb4PnPcmrHfdKH2Tzm+aJPPHi5nAM97hMfZHb6SuGjPvHY5XLjCg76xB83/7ioB/t94k16hwd2sdcnHrk8PrwT7fSJLzBy/Sr87T6N9xc5tNUnnjT7POtR7T7pjpDvwRO0+nRx03K951nVfdLdsLe/uxm1so/eK3S/aS3yPlrH7Qlzwfb5SXXY8US2T0QdVfdx+ka9DWUfJw9ifC3vQ52S7UOdmvahTkvsQ522tQ91tsx9qLNtGL3OTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALh3ufwHR5Phvs3Zk3IAAAAASUVORK5CYII=";
                    pdf.addImage(watermark, 'PNG', 0, 0, 150, 150)
                }

                let filename =
                // pdf = addWaterMark(pdf);
                pdf.save("download.pdf");
                $loader.addClass("hidden");

            });

        },
        error: function (res) {
            toast("Error while downloading.");
        }
    })
}

$btnDownloadPDF.on("click", () => {
    downloadDesign();
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
    
    const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml', 'application/pdf']

    for (let file of files) {
        // check type
        if (! allowedTypes.includes(file.type)) 
            continue
        
        let reader = new FileReader()
        // handle svg
        if (file.type === 'application/pdf') {
debugger;

            reader.onload = function() {
                debugger;
                var typedarray = new Uint8Array(this.result);
            
                PDFJS.getDocument(typedarray).then(function(pdf) {
                  // you can now use *pdf* here
                  console.log("the pdf has ", pdf.numPages, "page(s).")
                  pdf.getPage(pdf.numPages).then(function(page) {
                    // you can now use *page* here
                    var viewport = page.getViewport(2.0);
                    var canvasEl = document.querySelector("canvas")
                    canvasEl.height = viewport.height;
                    canvasEl.width = viewport.width;
            
                    page.render({
                      canvasContext: canvasEl.getContext('2d'),
                      viewport: viewport
                    }).then(function() {
            
                      var bg = canvasEl.toDataURL("image/png");
            
                      fabric.Image.fromURL(bg, function(img) {
                      //  img.scaleToHeight(1123);
                      //  canvas.setHeight(1123);
                      //  canvas.setWidth(1588);
                        img.globalCompositeOperation = 'source-atop';
                        canvas.add(img);
                      });
                      canvas.renderAll();
                    });
                  });
            
                });
              };
              reader.readAsArrayBuffer(file);

        }else
        {             
            reader.onload = (e) => {
            fabric.Image.fromURL(e.target.result, (img) => {
                img.scaleToHeight(250);
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
            reader.readAsDataURL(file);
        }
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
    // var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
    // var id = $elem.id;
    // $(`#${id} .delete`).on("click", function (e) {
    //     _canvas.remove(_canvas.getActiveObject()).renderAll();
    //     addLayer();
    // })

    // $(`#${id} .duplicate`).on("click", function (e) {
    //     var object = fabric.util.object.clone(_canvas.getActiveObject());
    //     object.set("top", object.top + 5);
    //     object.set("left", object.left + 5);
    //     _canvas.add(object);
    // })

    // $(`#${id} .bring-fwd`)().on("click", function (e) {
    //     e.stopPropagation();
    //     alert(1);
    //     // var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
    //     // var obj = _canvas.getActiveObject();
    //     // _canvas.bringForward(obj)
    //     // _canvas.renderAll();
    //     // debugger;
    //     // var $selectedLayer = $(this).parent().parent();
    //     // var $nextItem = $selectedLayer.next($(".layer-item"))
    //     // $selectedLayer.insertAfter($nextItem);
    //     //
    //     //var x = selectedLayer.closest('layer-item');
    //     //insertBefore( x.prev() )
    //     //alert(index);
    //     // e.stopPropagation();
    //     // var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
    //     // var obj = _canvas.getActiveObject();
    //     // _canvas.bringForward(obj)
    //     // _canvas.renderAll();
    //     // var elem = $(`#${id}`);
    //     // elem.prev().insertAfter(elem);
    // })


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
