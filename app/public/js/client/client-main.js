


var canvas      = new fabric.Canvas("client-main-canvas",       {
    preserveObjectStacking: true,
    selectionDashArray: [13, 16],
         selectionLineWidth: 5,
         selectionBorderColor: "green",
})
var canvasPrev  = new fabric.Canvas("client-main-canvas-logo",  {preserveObjectStacking: true});

//fabric.Object.prototype.transparentCorners = false;
//fabric.Object.prototype.cornerStyle = 'circle';
//fabric.Object.prototype.borderColor = '#494699';
//fabric.Object.prototype.cornerColor = '#494699';
//fabric.Object.prototype.cornerStrokeColor = '#000';
//fabric.Object.prototype.cornerSize = 10;
//fabric.Object.prototype.padding = 3;

const dpi = 72;
// const defaults = {
//     fontSize:36,
//     fontFill: '#000',
//     fontFamily:'Arial',
//     strokeWidth: 10,
//     logoDisplaySize:500
// }

const letterPageSize = {
    width: (8.5 * dpi),
    height: (11 * dpi)
}
const enabledSaveInBrowser = true;
var state = {
    isPreviewCanvas: false

}
var rulerSettings = {
    vRuleSize: 28, hRuleSize: 25, showCrosshair: false, showMousePos: false
}

var layerHtml = `<div class="media d-block d-flex layer-item object-options" data-index='{index}' id='{id}'  >
    <div class="d-block mg-sm-r-10 img"> <img src="{src}" class="layer-img" alt="Image" ></div>
    <div class="d-sm-flex layer-label tx-bold">Layer {index}</div>
    <div class="d-sm-flex layers-controls" style="display:none !important">
    <i class='ion-ios-copy-outline duplicate main-tool-button'   title='duplicate' ></i>
    <i class='ion-ios-upload-outline bring-fwd' title="move up" id="bring-fwd" ></i>
    <i class='ion-ios-download-outline bring-back' title="move down" id="bring-back" ></i>
    <i class='ion-ios-trash-outline delete main-tool-button' title='delete' ></i>
    </div>
   </div>`;


const projectHtml = `
<div class="col-lg-3 pd-10 ">
             
                <div>
                  <div class="card-text pd-5 mg-b-15 bd bd-white" style='height:150px;overflow:hidden;background-color:#eee; '>
                    <img src="{{src}}" class="img-fluid" alt="Image" style="width:100%;height:100%;object-fit:contain">
                  </div>
                  <h5 class="mg-0 tx-16 text-primary">{{title}}</h5>
                  <p class="tx-12 text-primary  mg-b-5">{{desc}}</p>

                  <div class="tx-12">{{template_title}}</div>  
                  <div class="tx-12">{{total_logos}} logo(s) {{sheet_size}} {{page_format}} Sheet. </div>  
                  <div class="tx-12">{{created_dt}}</div>  

                  <div class="btn-group pd-t-10" role="group" >
                <button type="button" id="{{code}}"  class="hand soft btn btn-success tx-12 tx-bold tx-uppercase btn-edit-project">Edit</button>
                <button type="button" onclick="deleteProject('{{code}}',this)" class="hand soft btn btn-warning tx-12  tx-bold tx-uppercase ">Delete</button>
              </div>


              
              </div>
            </div>`



const designHtml = `<div class="row row-sm mg-t-15 mg-sm-t-20">
<div class="col-md-12">
  <div class="list-group widget-list-group bd-b">
    <div class="list-group-item d-flex">
      <div class="media d-block d-sm-flex">
        <div class="wd-100">
          <img src="{{base64}}" class="wd-40 pd-r-10" alt="Image" style="width:100%;height:100%;object-fit:contain">
        </div><!-- d-flex -->
        <div class="media-body mg-t-10 mg-sm-t-0">
          <h6 class="mg-b-5 tx-16"><a href="#" id='{{code}}' class="text-primary hover-primary underline">{{title}}</a></h6>
          <div>{{totalLogos}} Logo(s) {{sheetSize}}, {{pageFormat}} Sheet.</div>
          <p class="mg-b-0 tx-12 text-inverse ">{{desc}}</p>
    <p class="mg-b-0 tx-12">{{created_dt}}</p>
    </div><!-- media-body -->
      </div><!-- media -->
      <a href="#" class="btn btn-success pd-lg-x-20 mg-l-auto" onclick="loadProject('{{code}}')" >View</a>
    </div>
  
</div>`;
// const designHtml = `<div class='pre-designed col-md-3 p-lg-1 align-self-normal'>
// <div class="list-group-item pd-0">
// <div class="media d-block ">
//   <div class="d-block text-center">
//     <img src="{{base64}}" class="card-img-fluid" alt="Image">
//   </div>
//   <div class="media-body pd-15">
//     <h6 class="mg-b-5 tx-14 "><a href="#" class="tx-inverse hover-primary tx-bold"  id='{{code}}' >{{title}}</a></h6>
//     <p class="mg-b-0 tx-12 tx-bold">{{created_dt}}</p>
//     <p class="mg-b-0 tx-12 tx-bold">Sheet Size: {{sheetSize}}</p>
//     <p class="mg-b-0 tx-12 tx-bold">Logo Size: {{logoSize}}</p>
//     <p class="mg-b-0 tx-12 tx-bold">Total Logos: {{totalLogos}}</p>
//     <p class="mg-b-0 tx-12 tx-bold tx-uppercase">Format: {{pageFormat}}</p>
//     <a href="#" class="btn btn-sm btn-primary"  onclick="loadProject('{{code}}')" class="card-link">Edit</a>
//   </div>
// </div>
// </div>
// </div>`;


// vars
$btnDownloadPDF = $("#btn-download-pdf");
$btnUploadImage = $("#btn-upload-img");
$btnUploadImageHidden = $("#btn-upload-img-hidden");
$layers = $("#layers");
$btnRepeatDesign = $("#repeatdesign");

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

$btnTextSize = $("#btnTextSize,#btnTextSize-range ");
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
$btnRotate = $("#rotate, #rotateText");
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




var Direction = {
    LEFT: 0,
    UP: 1,
    RIGHT: 2,
    DOWN: 3
};










fabric.util.addListener(canvas.upperCanvasEl, 'dblclick', function (e) {
    var target = canvas.findTarget(e);
    //ungroup(e);
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


function getUserProjects() {
    $loader.removeClass("hidden");
    backFromPreview();
    $.get(`/api/my-designs/`, function (res) {
        
        if(res.error)
        {
            $loader.addClass("hidden");
            toast("Error Loading Projects");
            console.error(res.exception); 
            return; 
        }

        var projects = res.data || [];
        var temp = "";
        $("#my-proj-container").html("<strong>You haven't saved any project yet!</strong>");
        for (var i = 0; i < projects.length; i++) {
            let p = projects[i];
            let meta = JSON.parse(p.meta); 
            let desc = p.title.lenght>50?p.title.substring(0, p.title.length):p.title;
            temp += projectHtml.replace(/{{code}}/ig, p._id)
            .replace(/{{src}}/ig, p.path)
            .replace(/{{title}}/ig, p.title)
            .replace(/{{created_dt}}/ig, new Date(p.created_dt).toLocaleDateString("en-US"))
            .replace(/{{desc}}/ig, p.desc)
            .replace(/{{template_title}}/ig, meta.templateTitle || "")
            .replace(/{{total_logos}}/ig, meta.totalLogos || "")
            .replace(/{{sheet_size}}/ig, getInches(meta.sheetWidth,meta.sheetHeight) + "'',"  || "")
            .replace(/{{page_format}}/ig, getPageFormatByDimensions(meta.width,meta.height)   || "")
            
            ;
            $("#my-proj-container").html(temp);
        }
        $loader.addClass("hidden");
        $(".btn-edit-project").unbind().on("click",function(e){
            canvasUndo.dispose();
            const  _id = $(this).attr("id");
            if (canvas.getObjects().length == 0) {
                loadProject(`${_id}`,false);                
                return;
            }else{
                $("#my-proj-modal").modal("hide");
                $("#confirmbox").modal("toggle");
                $("#confirmBoxTitle").text("ARE YOU SURE? ALL EDITS WILL BE LOST");
                $("#confirmBoxBody").text("Are you sure you wish to open this design?  Your current design will be lost!");
                $("#btnModelContinue").text("Yes, Open Saved Project");
                $("#btnConfirmBoxModalClose").text("No, Return To Design");
                $("#btnModelContinue").unbind().on("click",function(e){
                    loadProject(`${_id}`,false);                
                })
                
            }
        })
    })

}


function getSharedProjects() {
    $loader.removeClass("hidden");
    $.get(`/api/custom-designs`, function (res) {
         
        if (isSessionExpired(res)) {  return; } 

        $loader.addClass("hidden");
        var projects = res.data || [];

        var temp = "";
        $("#kp-designs-container").html("<strong>You haven't saved any project yet!</strong>");

        projects?.forEach(item=>{
            let meta = JSON.parse(item.meta);
            temp += designHtml
            .replace(/{{code}}/ig, item._id)
            .replace(/{{desc}}/ig, item.desc || "")
            .replace(/{{base64}}/ig, item.path)
            .replace(/{{title}}/ig, item.title)
            .replace(/{{created_dt}}/ig, new Date(item.created_dt).toLocaleDateString("en-US"))
            .replace(/{{sheetSize}}/ig, `${getInches(meta.sheetWidth,meta.sheetHeight)}"`)
            .replace(/{{logoSize}}/ig, `${getInches(meta.logoWidth,meta.logoHeight)}"`)
            .replace(/{{pageFormat}}/ig, `${getPageFormatByDimensions(meta.width,meta.height)}`)
            .replace(/{{totalLogos}}/ig, meta.totalLogos);
        })
        $("#kp-designs-container").html(temp);
        $(".btn-edit-customdesign").unbind().on("click",function(e){
            const  _id = $(this).attr("id");
            if (canvas.getObjects().length == 0) {
                loadProject(`${_id}`);                                
                return;
            }else{
                canvasUndo.dispose();
                $("#shared-lib-modal").modal("hide");
                $("#confirmbox").modal("toggle");
                $("#confirmBoxTitle").text("ARE YOU SURE? ALL EDITS WILL BE LOST. ");                
                $("#confirmBoxBody").text("Are you sure you wish to open this design?  Your current design will be lost!");
                $("#btnModelContinue").text("Yes, Open this Design")
                $("#btnConfirmBoxModalClose").text("No, Return to Design")
                $("#btnModelContinue").unbind().on("click",function(e){
                    loadProject(`${_id}`);                
                })
                
            }
        })

    }).fail(function (ex) {
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


function deleteProject(id, self) {

    if (!confirm("Do you want to delete this project?")) {
        return;
    }
    $loader.removeClass("hidden");

    $.ajax({
        type: "DELETE",
        url: `/api/my-designs/${id}`,
        success: function (res) {
            $loader.addClass("hidden");
            if(res.error)
            {
                toast("Error deleting project.");
                console.error(res.message);
            }else{

                toast("Project has been successfully deleted.");
                $(self).parent().parent().fadeOut();

            }
        },
        error: function (res) {
            $loader.addClass("hidden");
            toast("Error while deleting project.");
        }
    })
}
// function loadProject(id) {
//     $loader.removeClass("hidden");
//     state.isPreviewCanvas = false;
//     var group = [];
//     $("#btnBack").trigger("click");
//     $.get(`/api/project/${id}`, function (res) {
//         $loader.addClass("hidden");
//         const json = JSON.parse(res.data.json);
//         if (! json) {
//             return;
//         }
//         canvas.clear();
//         /// loading design 
//         canvas.loadFromJSON(json, function () {
//             $("#menu-upload > a").click();
            
//         }, function (o, object) {
//         })

//         /// loading template 
//         fabric.loadSVGFromURL(res.template.base64, function (objects, options) { // $canvasPrev.fadeOut();
//             var loadedObjects = new fabric.Group(group);
      
//             var templateWidth = options.viewBoxWidth;
//             var templateHeight = options.viewBoxHeight;

//             let isLandspace = (templateWidth > templateHeight);
//             canvasPrev.setDimensions({width: templateWidth, height: templateHeight});

//             let __f = 0.9;
//             if (isLandspace) {
              
//                 templateWidth = options.viewBoxHeight;
//                 templateHeight = options.viewBoxWidth;
//             }
//             let __w = parseInt(templateWidth*__f); 
//             let __h = parseInt(templateHeight*__f);
//             $("#client-main-canvas-logo").css({"width":`${__w}px`,"height":`${__h}px`,"padding":"1px","left":"21px"});
            
//             canvasPrev.setBackgroundImage(loadedObjects, canvasPrev.renderAll.bind(canvasPrev));
//             canvasPrev.renderAll();
//             loadedObjects.center().setCoords();

           


//         }, function (item, object) {
//             object.set({fill:"#fff"});
//             object.set('id', item.getAttribute('id'));
//             group.push(object);
//         });

//     }).fail(function (err) {
//         $loader.addClass("hidden");
//         toast("Something went wrong! Please contact admin.");
//         console.log(err);
//     })
// }

function loadDesign(id) {
    state.isPreviewCanvas = false;
    var group = [];
    $("#btnBack").click();
    $loader.removeClass("hidden");
    $.get(`/api/custom-design/${id}`, function (res) {
        $loader.addClass("hidden");
        const json = JSON.parse(res.data.json);
        if (! json) {
            return;
        }
        canvas.clear();

        // / this is to set the canvas to load design.
        canvas.loadFromJSON(json, function () {
            $("#menu-upload > a").click();
        }, function (o, object) { // console.log(o,object)
        })

        // / this is to set the previous canvas to load template.
        // / we pre load the template and use this while preview.
        fabric.loadSVGFromURL(res.template.base64, function (objects, options) {
            var loadedObjects = new fabric.Group(group);
            var templateWidth = options.viewBoxWidth;
            var templateHeight = options.viewBoxHeight;
            canvasPrev.setDimensions({width: templateWidth, height: templateHeight});
            let isLandspace = (templateWidth > templateHeight);
            let __f = 0.9;
            if (isLandspace) {
              
                templateWidth = options.viewBoxHeight;
                templateHeight = options.viewBoxWidth;
            }


            
            canvasPrev.setBackgroundImage(loadedObjects, canvasPrev.renderAll.bind(canvasPrev));
           
            let __w = parseInt(templateWidth*__f); 
            let __h = parseInt(templateHeight*__f);

            // $("#client-main-canvas-logo").css({"width":`${__w}px`,"height":`${__h}px`,"padding":"1px","left":"-21px"})

            canvasPrev.setBackgroundImage(loadedObjects, canvasPrev.renderAll.bind(canvasPrev));
            canvasPrev.renderAll();
            loadedObjects.center().setCoords();

        }, function (item, object) {
            object.set({"fill":"#fff"});
            object.set('id', item.getAttribute('id'));
            group.push(object);
        });

    }).fail(function (err) {
        $loader.addClass("hidden");
        toast("Something went wrong! Please contact admin.");
        console.log(err);
    })
}



/***
 * Workspace canvas.
 */



function applyFilter(index, filter) {
let __canvas =  state.isPreviewCanvas?canvasPrev:canvas;
    var obj = __canvas.getActiveObject();
    obj.filters[index] = filter;    
    obj.applyFilters();
    __canvas.renderAll();
}

function applyFilterValue(index, prop, value) {
    var obj = canvas.getActiveObject();
    if (obj.filters[index]) {
        obj.filters[index][prop] = value;
        obj.applyFilters();
        canvas.renderAll();
    }
}



function menuHighlighter(itemToHighlight) {
    $("#toolbar .nav-item").each(function (e) {
        $(this).removeClass('bg-menu-highlight');
    })

    $(itemToHighlight).addClass("bg-menu-highlight");
}

function menuPanelDisplay(itemToDisplay) {
    $("#menu-panel > .tab-content > .tab-pane").each(function (e) {
        $(this).removeClass('active');
        $(this).removeAttr("style");
    })

    $(itemToDisplay).addClass("active");
}




function drawTextAlongArc(context, str, centerX, centerY, radius, angle) {
    var len = str.length, s;
    context.save();
    context.translate(centerX, centerY);
    context.rotate(-1 * angle / 2);
    context.rotate(-1 * (angle / len) / 2);
    for(var n = 0; n < len; n++) {
      context.rotate(angle / len);
      context.save();
      context.translate(0, -1 * radius);
      s = str[n];
      context.fillText(s, 0, 0);
      context.restore();
    }
    context.restore();
  }
function initUIUndoRedo(){
    $("#undo").on("click",function(){
        canvasUndo.undo();
    });
    $("#redo").on("click",function(){
        canvasUndo.redo();
    });
}

var selectionRect;
function initUIEvents() {




    $("#terms-window, #image-terms-window").on("click",function(e){
        var win = window.open("/app/terms", "Terms and Conditions.", "toolbar=no, location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width="+(screen.width-200)+",height=500,top="+(screen.height-400)+",left="+(screen.width-200));
    })

    $("#faq-window").on("click",function(e){
        var win = window.open("/app/faq", "FAQ", "toolbar=no, location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width="+(screen.width-200)+",height=500,top="+(screen.height-400)+",left="+(screen.width-200));
    })

    initUIUndoRedo();

    initImageSelectionUIControls();
    /// disable previous date in rfq calandar.
    $(function(){
        var dtToday = new Date();    
        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
         day = '0' + day.toString();
        var maxDate = year + '-' + month + '-' + day;
        $('#rfqRequiredByDt').attr('min', maxDate);
    });

    initContextMenu();
   
    $("#btnGenerateAndDownloadPDF").on("click",function(){
        generatePDFfromPreview();
    })
    $("#btnRFQ").on("click",function(){
        if(isFieldValid("downloadFileName")){
            
            $("#downloadPDFModel").modal("toggle");
            $("#rfq").modal("toggle");
        }
    })

    $("#btnFaqPopup").on("click",(e)=>{
        $.get('/app/faq',(res)=>{
            $("#faq-contanier").html(res);
          })
    })



    $("#cbRfqShip").on("click", function (e) {
      
        if(e.target.checked)
        {
            $("#rfqShippingInfo").addClass('hidden');
        }else{
            $("#rfqShippingInfo").removeClass('hidden');
           
        }
         
 
     })

    $("#formRFQ").submit(function(e) {

        e.preventDefault();         
        let form = $(this);
        let actionUrl = form.attr('action');
        let formData = new FormData(form[0]);
        let width = canvasPrev.backgroundImage.viewBoxWidth;
        let height = canvasPrev.backgroundImage.viewBoxHeight;
        let pageFormat = getPageFormatByDimensions(width,height)           
        let fn = $("#downloadFileName").val() || `Kake-prints${new Date().getTime()}`;
        let pdfMeta = 
        {
            pdfSettings: {
                orientation: (width > height) ? 'l' : 'p',
                unit: 'pt',
                format: pageFormat,
                putOnlyUsedFonts: true
            },
//            dataUrl:
        }
        //formData.append('dataUrl', canvasPrev.toDataURL({format:"png",quality:1.0}));
        var pdf=    new jsPDF(pdfMeta.pdfSettings);
        width = pdf.internal.pageSize.getWidth();
        height = pdf.internal.pageSize.getHeight();
        let dataUrl = canvasPrev.toDataURL({format:"png",quality:1.0, multiplier:3});
        pdf.addImage(dataUrl, 'jpeg', 0, 0,width,height,undefined,'FAST');
        formData.append('dataUrl', pdf.output(`datauri`));
        formData.append('pdfMeta', JSON.stringify(pdfMeta)); 
        formData.append('filename', fn);
        $loader.removeClass('hidden'); 
        $.ajax({
            type: "POST",
            url: actionUrl,
            data: formData, // serializes the form's elements.
            async: false,
            success: function (data) {
                form.trigger('reset');
                $('#rfq').modal('toggle');
                $loader.addClass("hidden");
                $("#rfq_confirm").modal();
                backFromPreview();
            },error: function (request, status, error) {
                toast('Server Error: Form could not be submitted.');
                form.trigger('reset');
                $('#rfq').modal('toggle');
                $loader.addClass("hidden");
            },
            cache: false,
            contentType: false,
            processData: false,
           
        });
        // generatePDFfromPreview(true,(pdfBase64)=>{

        //     formData.append('file', pdfBase64);
        //     $loader.removeClass("hidden");
        //     $.ajax({
        //         type: "POST",
        //         url: actionUrl,
        //         data: formData, // serializes the form's elements.
        //         async: false,
        //         success: function (data) {
        //             //toast('Thank you, Your request has been submitted, we will contact you soon.');
        //             form.trigger('reset');
        //             $('#rfq').modal('toggle');
        //             $loader.addClass("hidden");
        //             $("#rfq_confirm").modal();
        //         },error: function (request, status, error) {
        //             toast('Server Error: Form could not be submitted.');
        //             form.trigger('reset');
        //             $('#rfq').modal('toggle');
        //             $loader.addClass("hidden");
        //         },
        //         cache: false,
        //         contentType: false,
        //         processData: false,
               
        //     });
        
        // });
  
    });
    $("#menu-save-design").on("click",function(e){
        e.preventDefault();
        e.stopPropagation(); 
        return false;
    })
/**
 * Confirm Boxes
 */



$("#btnLibraryModal").on("click",function(e){
    getSharedProjects();
})

//Menu: My Save Design Button. 

 $("#btnMyProjectsModal").on("click",function(e){
    getUserProjects();
 })

 $("#btnSaveModel").on("click",function(e){
        e.preventDefault();
        if (canvas.getObjects().length == 0) {
            toast("Your project is empty, Please create your design and save.");
            return;
        }

        validateProject((err,res)=>{
            if(!err){
                saveDesign();
            }
        });


    
        // $("#confirmbox").modal("toggle");
        // $("#confirmBoxTitle").text("ARE YOU SURE?")
        // $("#confirmBoxBody").text("Are you sure you wish to save this project?");
        // $("#btnModelContinue").text("Save Project");
        // $("#btnConfirmBoxModalClose").text("No, Return to Design");
        // $("#btnModelContinue").unbind().on("click",function(e){
        //     e.preventDefault();
        //     saveDesign();
        // })
        
       
})

function validateProject(onResult){
    $.ajax({
        type: "POST",
        url: "/api/project/validate",
        data: {
            title: title,
            name: $("#input-project-title").val(),
            type: "project"
        },
        success: function (res) {
            if (isSessionExpired(res)) {  return; } 
            onResult(false,res);
        },

        error: function (res) {
            onResult(true,res);
            $loader.addClass("hidden");
            if(res.status === 403)
            {

                $('.modal').modal('hide');
                 $("#noticebox").modal();
                 $("#noticeboxBody").text("You have reached your allowable limit of Saved Projects.  Please select My Saved Projects and delete any unwanted Projects, then you can return to save this project.");

            }else if (res.status === 409) {
                
                confirmBox(
                    "ARE YOU SURE?",
                    "Filename already exists, Do you wish to replace?",
                    "Replace",
                    "Cancel",(e)=>{
                        saveDesign();
                    })
                //$("#confirmbox").modal("toggle");
                //toast(`${ res.responseJSON.message}`);
            } 
            else if (res.status != 200) {
                toast(`${ res.responseJSON.message}`);
            } else {}
        }
    })
}

$("#btn-edit-project").on("click",function(e){
    e.preventDefault();
    if (canvas.getObjects().length == 0) {
        toast("Your project is empty, Please create your design and save.");
        return;
    }
    $("#confirmbox").modal("toggle");
    $("#confirmBoxTitle").text("ARE YOU SURE?")
    $("#confirmBoxBody").text("Are you sure you wish to save this project?");
    $("#btnModelContinue").text("Save Project");
    $("#btnConfirmBoxModalClose").text("No, Return to Design");
    $("#btnModelContinue").unbind().on("click",function(e){
        e.preventDefault();
    })    
   
})
    
$("#btnStartOverModel").on("click",function(e){
        e.preventDefault();
        $("#confirmBoxTitle").text("RESTART DESIGN FROM THE BEGINNING.  ALL EDITS WILL BE LOST");
        $("#btnModelContinue").text("Yes, I Want to Start Over"); 
        $("#confirmBoxBody").text("Are you sure you want to start over?"); 
        $("#btnConfirmBoxModalClose").text("No, Return to Design");
        $("#btnModelContinue").unbind().on("click",function(e){
            $loader.removeClass("hidden");
            window.location.reload(); 
        }); 

       
})

 /********* */   
    $btnTemplate.on("click", function () {
        if (state.isPreviewCanvas) { backFromPreview(); }
        $(".step-item:nth-child(3)").removeClass("active");
        $(".step-item:nth-child(2)").addClass("active");
    });
    var layers = $("#layers");

   



    $("#btn-step-design").on("click", function (e) {
        e.preventDefault();
        $("#menu-upload > a").click();
        $(".step-item:nth-child(2)").removeClass("active");
        $(".step-item:nth-child(3)").addClass("active");
    })
    $("#btnCancelSaveDesign").on("click", function () {
        $("#input-project-title").val("");
        $("#input-project-desc").val("");
        $("#menu-upload > a").click();       
    })
    $("#btn-step-preview, #btn-menu-peview").on("click", function (e) {
        e.preventDefault();
        previewDesign();
    });
    $("#btn-step-download").on("click", function (e) {
        e.preventDefault();
        $btnDownloadPDF.click();
    });
    $("#btnBack").on("click", function (e) {
        e.preventDefault();
        backFromPreview();
        $(".step-item:nth-child(4)").removeClass("active");
        $(".step-item:nth-child(3)").addClass("active");
    });
  

    


    rotateObject();
    flipXYObject();
    grayscaleObject();
    brightnessObject();
    contrastObject();

    $("#accordion a").on("click", function () {
        $("#accordion").find('.arrow').each(function () {
            $(this).removeClass("down");
        })
        $(this).find('.arrow').first().addClass("down");
    })
    
   

    $("#font-list-container a").on("click", function (e) {
        let __canvas = state.isPreviewCanvas?canvasPrev:canvas;
        let value = $(this).text() || "Arial";
        let dataValue = $(this).attr("data-value");
        $("#fontlist").text(value);
        $("#fontlist").attr('data-value',dataValue);
        $("#fontlist").attr('style',$(this).attr('style'));
        //$("#selected-font").html($(this).html())
        __canvas.getActiveObject().set("fontFamily",dataValue);
        __canvas.getActiveObject().set("fontName",value);
        __canvas.requestRenderAll();
    })
    $("#text-letter-spacing, #text-letter-spacing-range").on("change", function () {
        setSelectedTextStyle("charSpacing", this.value);
    });
    $("#text-bg-color").on("change", function () {
        setSelectedTextStyle("backgroundColor", this.value);

    });
    $("#text-stroke-color").on("change", function () {
        
        var checked = $("#inputStrokeText").prop("checked");
        if(checked)
        {
            ///setSelectedTextStyle("stroke", this.value);

        }

    });
    $("#text-stroke-width").on("change", function () {

        if($("#inputStrokeText").is(":checked"))
        {
            let __canvas = state.isPreviewCanvas?canvasPrev:canvas;
            let obj = __canvas.getActiveObject(); 
            obj.strokeWidth = parseInt(this.value) || 10;
            __canvas.renderAll();
            //setSelectedTextStyle("strokeWidth", this.value);

        }



    });
    $('#text-line-height').on("change", function () {
        setSelectedTextStyle("lineHeight", this.value);
    });
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
        let __canvas = state.isPreviewCanvas?canvasPrev:canvas;
        var selectedObj = __canvas.getActiveObject();
        selectedObj.set('flipX', ! selectedObj.flipX);
        __canvas.renderAll();
    });

  
    $btnRotate.on("click", function () {
        let __canvas = state.isPreviewCanvas?canvasPrev:canvas;
        var selectedObj = __canvas.getActiveObject();
        if (! selectedObj) {
            toast("Please select an object.");
            return;
        }
        var curAngle = selectedObj.angle;
        selectedObj.rotate(curAngle + 90);
        __canvas.renderAll();
    })

   

    $btnTextMenu.on("click", function (e) {
        canvas.discardActiveObject().renderAll();
        // textControls(false);
    })

    $canvasPrev.parent().hide();

    $("#templatepanel .template").on("click", (e) => {
       
        enabledTextMode = false;
        var id = e.currentTarget.id;
        canvas.clear();
        loadSVGTemplate(id);
    });


    $("#workspace-menu .nav-link").on("click", function (e) {
        const navItem = $(this).parent();
        const id = navItem.attr("id");
        menuHighlighter(navItem);
        menuPanelDisplay(navItem);
        if (canvas._objects.length == 0) {
            $("#template-info-panel").show();
            // $("#layers").parent().hide();
        } else {
            $("#template-info-panel").hide();
            // $("#layers").parent().show();

        }
    })


    




    
}



function setSelectedTextStyle(prop, value) {
    var txt = canvas.getActiveObject();
//  if(txt.type == 'curved-text')
//  {return;}
    txt.set(prop, value);
    canvas.renderAll();

}

function  saveDesign() {
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

    var title = $("#input-project-title").val();
    var desc = $("#input-project-desc").val();
    var comments =$("#input-project-comments").val();
    
  
    if (!title) {
        toast("Please Enter Project Name");
        return;
    }
    if (title?.length < 3 || title?.length > 50) {
        toast("Title should be greater than 3 and less than 50 characters.");
        return;
    }

    if ( title?.length > 100) {
        toast("Description should be less than 100 characters.");
        return;
    }
$loader.removeClass("hidden");
    $.ajax({
        type: "POST",
        url: "/app/client/save-design",
        data: {
            desc: desc,
            meta: JSON.stringify(canvas.context),
            title: title,
            name: title,
            active: true,
            base64: JSON.stringify(canvas.toDataURL()),
            json: JSON.stringify(canvas.toDatalessJSON()),
            type: "project",
            by_admin: false,
            comments: comments           
        },
        success: function (res) {
            if (typeof(res) === "string") {
                window.location.reload();
                return;
            }
            toast("Your Project has been Saved.");
            $loader.addClass("hidden")
            // $("#input-project-title").val("");
            // $("#input-project-desc").val("");
            // $loader.addClass("hidden");
            //window.location.reload();
        },
        error: function (res) {
            $loader.addClass("hidden");
            if(res.status === 403)
            {

                $('.modal').modal('hide');
                 $("#noticebox").modal();
                 $("#noticeboxBody").text("You have reached your allowable limit of Saved Projects.  Please select My Saved Projects and delete any unwanted Projects, then you can return to save this project.");

            }else if (res.status === 409) {
                $("#confirmbox").modal("toggle");
                //toast(`${ res.responseJSON.message}`);
            } 
            else if (res.status != 200) {
                toast(`${ res.responseJSON.message}`);
            } else {}
        }
    })
}




function onObjectSelectionCleared(o) {
    hideObjectControls();

}




function updateTextControls(e){
    
   let item         = e.selected[0];
   let isBold       = item.fontWeight?.toLowerCase() === "bold"; 
   let isItalic     = item.fontStyle?.toLowerCase() === "italic"; 
   let isUnderline  = item.underline;  
   let isLeft       = item.textAlign === "left";
   let isRight      = item.textAlign === "right";
   let isCenter     = item.textAlign === "center";
   let isCurvedText = item.type === 'curved-text';
   $("#btnTextSize").val(item.fontSize);

   if(item.charSpacing)
   { $("#text-letter-spacing").val(item.charSpacing);}

   $("#inputStrokeText").prop("checked",!!item.stroke); 

   $("#text-letter-spacing").val(item.charSpacing||10)
   
   if(isBold)
   { $("#bold").parent().addClass("active"); }
   else{ $("#bold").parent().removeClass("active"); }

   if(isItalic)
   { $("#italic").parent().addClass("active"); }
   else{ $("#italic").parent().removeClass("active"); }

   if(isUnderline)
   { $("#underline").parent().addClass("active"); }
   else{ $("#underline").parent().removeClass("active"); }




   



   if(item.strokeWidth)
   { 
    if($("#inputStrokeText").is(":checked"))
    {
        $("#text-stroke-width").val(item.strokeWidth); 
    }
}

   if(item.lineHeight)
   { $("#text-line-height").val(item.lineHeight); }
   if(item.stroke)
   { document.querySelector('#strokecolor')?.jscolor.fromString(item.stroke); }
   document.querySelector('#fontColorBox').jscolor.fromString(item.fill);


   if(isCurvedText)
   { 
    $("#inputCurvedText").prop("checked",true);
    $("#inputFlipText").prop("checked",item.flipped);
    $("#curveTextCtrl").val(item.diameter);
    
    
}
   else 
   { 
    $("#inputCurvedText").prop("checked",false);
    $("#inputFlipText").prop("checked",false);
    $("#curveTextCtrl").val("1250");
}

$("#fontlist")
.css({"font-family": item.fontFamily})
.text(item.fontName)
.attr("data-value",item.fontFamily);   

   
}

function initCanvasEvents() {

   


    canvas.on({
        "selection:updated": onObjectSelection, 
        "selection:created": onObjectSelection, 
        "selection:cleared": onObjectSelectionCleared});

    canvasPrev.on({
        "selection:updated": onObjectSelection, 
    "selection:created": onObjectSelection, 
    "selection:cleared": onObjectSelectionCleared});


    canvas.selectedLayerId = null;
    canvas.on("object:added", (o) => {

        // do not create new index of layer if object is cropped or curved-text; 
        // creating curved text or cropped image we remove previous object and insert new object 
        // at same position so no need to create new index and id. 
        if(!(o.target.type === "curved-text" || o.target.subType === "cropped"))
           {
            o.target.id = `obj${canvas._objects.length}`;
            o.target.index = canvas._objects.length - 1;
        }

        if((o.target.type === "curved-text"))
           {
            o.target.id = o.target.id;
            o.target.index = o.index;
        }

        onObjectAdded(o);

    })

    canvasPrev.on("object:added", (o) => {
        if(!(o.target.type === "curved-text" || o.target.subType === "cropped"))
           {
            o.target.id = `obj${canvasPrev._objects.length}`;
            o.target.index = canvasPrev._objects.length - 1;
           }
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

    

}

function onObjectAdded(o) {
    // $pageTitle.addClass("hidden");
    // $("#maintools > .image-tools").removeClass("hidden");

    addLayer(o);
}




// Layers:

function layerSelectEventHandler($elem, selected) {
    selectedObjectBySelectLayer($elem, selected);
}
function clearLayerSelection() {
    var _canvas = state.isPreviewCanvas ? canvasPrev : canvas;
    for (var i = 0; i < _canvas._objects.length; i++) {
        var id = _canvas._objects[i].id;
        $(`#${id} .layers-controls`).attr("style", "display:none !important");
        $(`#${id}`).removeClass("selected-layer");
    }

}
function selectedObjectBySelectLayer($elem, selected) {
    var _canvas = state.isPreviewCanvas ? canvasPrev : canvas;
    var target = $elem;
    _canvas.discardActiveObject().renderAll();
    var index = parseInt(target.id.replace("obj", "")) - 1;
    _canvas.setActiveObject(_canvas.item(index)).renderAll();


}
function showLayerControls($elem, selected) {
    var target = $elem;

    $(`.layers-controls`).each(function () {
        $(this).hide();
        $(this).addClass('hidden');
        $(this).parent().removeClass('selected-layer')
    }).hide();


    $(`#${
        target.id
    } .layers-controls`).show();
    $(`#${
        target.id
    } .layers-controls`).removeClass('hidden');
    $(`#${
        target.id
    }`).addClass("selected-layer");
   

}


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
    generatePDFfromPreview();
});

$btnUploadImage.on("click", () => {
    if(isAckConfirmUpload()){
        $btnUploadImageHidden.click();
    }    
})

$btnUploadImageHidden.on("change", (e) => {
    if (e.target.files.length === 0) 
        return;
    
    processFiles(e.target.files);
    $btnUploadImageHidden.val('');
    // $("#menu-clipart > a").click();
})


function triggerNextStep(stepId) {
  
    nextStepWizard = $('div.setup-panel div a[href="#' + stepId + '"]').parent().next().children("a"),
    isValid = true;
    if (isValid) 
        nextStepWizard.removeAttr('disabled').trigger('click');
    
}





// Text:

function toast(message) {

    var $toast = $("#snackbar").addClass("show");
    $toast.text(message);
    setTimeout(function () {
        $toast.removeClass("show");
    }, 5000);
}

function hideWorkspaceControls() {
    $layers.html("No Layer.");
    mainControls(false);
    hideObjectControls();
}

function hideObjectControls() {
    imageControls(false);
    textControls(false);
}

function imageControls(show) {

    if (show) {
        $imgCtrl.each(function () {
            $(this).removeClass("hidden");
        })
    } else {
        $imgCtrl.each(function () {
            $(this).addClass("hidden");
        })

    }

}

function textControls(show) {
    if (show) {
        $txtCtrl.each(function () {
            $(this).removeClass("hidden");
        })
    } else {
        $txtCtrl.each(function () {
            $(this).addClass("hidden");
        })
    }
}

function mainControls(show) {
    if (show) {
        $mainCtrl.each(function () {
            $(this).removeClass("hidden");
        })
    } else {
        $mainCtrl.each(function () {
            $(this).addClass("hidden");
        })
    }

}
function initCanvasTextEvents() {
    
    $("#inputFlipText").on("click",function(){
        var obj = canvas.getActiveObject(); 
        const flipped = $("#inputFlipText").is(':checked'); 
        obj.set("flipped",flipped);
        canvas.renderAll();
    })
    $("#inputStrokeText").on("click", function (e) {
        var checked = $(this).prop('checked');
        var obj = canvas.getActiveObject();
        // if(obj.type == "curved-text")
        // { return; }
        var strokeWidth = parseInt($("#text-stroke-width").val());
        var strokeColor = $("#strokecolor").attr('data-current-color');
        if (obj && checked) {
           // obj.stroke      = strokeColor;
            obj.set('stroke',strokeColor);
            obj.strokeWidth = strokeWidth;
            obj.paintFirst  = "stroke";
           
          //  setSelectedTextStyle("stroke", strokeColor);
          //  setSelectedTextStyle("paintFirst", "stroke");
          //  setSelectedTextStyle("strokeWidth", strokeWidth);
        }else
        {
            obj.set('strokeWidth',0)
            obj.set('stroke',null);
        }
        canvas.renderAll();
    });
    
    

    $btnTextSize.on("change", function () {
        canvas.getActiveObject().set("fontSize", this.value);
        canvas.renderAll();
    })

    $("#curveTextCtrl").on("input", function (e) {   
        let val =  e.currentTarget.value/2;
        val = (val<=180)?180:val;
       console.log(val);
        updateCurveText({"diameter":val});
    })
    $("#curveTextKerning").on("input", function (e) {
        let val = e.currentTarget.value;
        updateCurveText({kerning:val});
    })
   

}

function updateCurveText(valueObj)
{
    var obj = canvas.getActiveObject();
    if (obj) {
        obj.set(valueObj);
    }
    canvas.renderAll();
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


function grayscaleObject() {
    $("#btnGrayscale").on("click", (e) => {

        applyFilter(0, e.currentTarget.checked && new fabric.Image.filters.Grayscale());
        applyFilterValue(0, 'mode', 'average');
    })
}

function brightnessObject() {
    $("#brightnessVal").text(`(0%)`);
    $('#brightness-value').on("input", function () {
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


function contrastObject() {
    $("#contrastVal").text(`(0%)`);

    $('#contrast-value').on("input", function () {
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
    return {
        width: srcWidth * ratio,
        height: srcHeight * ratio
    };
}


function ungroup(event) {
    var activeObject = canvas.getActiveObject();
    if (activeObject.type == "group") {
        var items = activeObject._objects;
        activeObject._restoreObjectsState();
        canvas.remove(activeObject);
        for (var i = 0; i < items.length; i++) {
            items[i].globalCompositeOperation = "source-atop"
            canvas.add(items[i]);
            canvas.item(canvas.size() - 1).hasControls = true;
        }
        canvas.renderAll();
    }
}




initUIEvents();
initCanvasEvents();

function initImageSelectionUIControls()
{
    $("#btnImagePlus").on("click",function(e){
        selectedCanvasImageResizeOnButtonClick(10);
    })
    $("#btnImageMinus").on("click",function(e){
        selectedCanvasImageResizeOnButtonClick(-10);
    })

    $("#sliderImageSize").on("input",function(e){
        //this.value = canvas.getActiveObject().getScaledWidth() + this.value;
        selectedCanvasImageResizeOnButtonClick(this.value);
    })


    function selectedCanvasImageResizeOnButtonClick(value){
        const selectedImage = canvas.getActiveObject(); 
        const imageScaledWidth = selectedImage.getScaledWidth();
        if(!selectedImage) return; 
        selectedImage.scaleToWidth((imageScaledWidth+value)*canvas.context.zoomLevel);
        //let getCenter = getCanvasCenter(imageScaledWidth,selectedImage.getScaledHeight());
        //selectedImage.set({left:getCenter.left,top:getCenter.top})
        canvas.setActiveObject(selectedImage);
        canvas.renderAll();
        selectedImage.setCoords();
    }
}
// const savedCanvas = saveInBrowser.load('kp-editor');
// if (savedCanvas) {
//     canvas.loadFromJSON(savedCanvas, canvas.renderAll.bind(canvas));
// }
function confirmBox(title, message, continueButtonText,closeButtonText, delegate ){
    continueButtonText = continueButtonText || "Continue";
    closeButtonText = closeButtonText || "closeButtonText";    
    delegate = delegate || function() { alert("No Event Attached."); }
    title = title || "ARE YOU SURE?"; 
    $("#confirmbox").modal("toggle");
    $("#confirmBoxTitle").text(title)
    $("#confirmBoxBody").text(message);
    $("#btnModelContinue").text(continueButtonText);
    $("#btnConfirmBoxModalClose").text(closeButtonText);
    $("#btnModelContinue").unbind().on("click",function(e){
        e.preventDefault();
        delegate(e);
    })
}


var grid = 20;
var width = 700;

window.canvasgrid = new fabric.Canvas('cg', { selection: false });

// Draw measuring area
// First = first point
// 
// Third = second point
var measurementThickness = 60;
window.canvasgrid.add( new fabric.Rect({
    left: 0,
    top: 0,
    fill: '#FFF',
    selectable: false,
    width: measurementThickness,
    height: 1000
}));

window.canvasgrid.add( new fabric.Rect({
    left: 0,
    top: 0,
    fill: '#FFF',
    width: 4000,
    selectable: false,
    height: measurementThickness
}));

    
    
// var r = $("#ruler3");
// for(var i=0;i<=500;i++)
// {
//     var val = Math.ceil(500/1.5)
//     if(i == val)
//     {
//         r.append(`<li style='border-right:solid 2px #000'></li>`);

//     }else
//     {
//         r.append(`<li style='border-right:solid 1px #ccc'></li>`);

//     }

// }
