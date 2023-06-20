
    // const defaults = {
    //     fontSize:36,
    //     fontFill: '#000',
    //     fontFamily:'Arial',
    //     strokeWidth: 10,
    //     logoDisplaySize:500
    // }
    var canvas = new fabric.Canvas("admin-main-canvas", {preserveObjectStacking: true})
    var canvasPrev = new fabric.Canvas("admin-main-canvas-logo", {preserveObjectStacking: true});
    
    var state = {
        isPreviewCanvas: false
    }
    var rulerSettings = {
        vRuleSize: 28, hRuleSize: 25, showCrosshair: false, showMousePos: false
    }
     var $adminMainCanvas           = $("#admin-main-canvas");
     var $canvasPrev                 = $("#admin-main-canvas-logo");
    var $canvas = $("#admin-main-canvas");
    var $canvasPrev = $("#admin-main-canvas-logo");
    var $btnDownloadPDF = $("#btn-download-pdf");
    var $btnUploadImage = $("#btn-upload-img");
    var $btnUploadImageHidden = $("#btn-upload-img-hidden");
    var $layers = $("#layers");
    var $adminImageUpload = $("#admin-image-upload");
    var $btnImageUploadHidden = $(`#admin-image-upload-hidden`);
    var $templateContainer = $("#template-container");
    var $btnSaveDesign = $("#save-design");
    const $cancelDesign = $("#cancel-design");
    const $dropdownTemplateSize = $("#dropdownTemplateSize");
    const $dropdownCanvasShape = $("#dropdownCanvasShape");
    const $inputTemplateShapeWidth = $("#inputTemplateShapeWidth");
    const $inputTemplateShapeHeight = $("#inputTemplateShapeHeight");
    const $inputTemplateShapeLeft = $("#inputTemplateShapeLeft");
    const $inputTemplateShapeTop = $("#inputTemplateShapeTop");
    const $inputRows = $("#inputRows");
    const $inputColumns = $("#inputColumns");
    const $templateTitle = $("#admin-design-title");
    const $btnUploadTemplate = $("#btn-upload-template");
    const $adminDesignCtrl = $(".admin-design-ctrl");
    const $pageTitle = $(".am-pagetitle");
    const $btnSavePreDesign = $("#btnSavePreDesign");
    const $btnTextSize = $("#btnTextSize");
    const $loader = $("#loader");
    var layerHtml = `<div class="media d-block d-flex layer-item object-options" data-index='{index}' id='{id}'  >
    <div class="d-block mg-sm-r-10 img"> <img src="{src}" class="wd-30" alt="Image" ></div>
    <div class="d-sm-flex layer-label tx-bold">Layer {index}</div>
    <div class="d-sm-flex layers-controls" style="display:none !important">
    <i class='ion-ios-copy-outline duplicate main-tool-button'   title='duplicate' ></i>
    <i class='ion-ios-upload-outline bring-fwd' title="move up" id="bring-fwd" ></i>
    <i class='ion-ios-download-outline bring-back' title="move down" id="bring-back" ></i>
    <i class='ion-ios-trash-outline delete main-tool-button' title='delete' ></i>
    </div>
   </div>`;
    // Template Upload:


var $inputDesignName = $("#admin-design-name");
var $inputThumbnailName = $("#admin-design-title");
var $btnActiveDesign = $("#design-active");
var $btnDefaultDesign = $("#design-default");
var $inputFileName = $("#admin-file-name");
var $inputDesignLink = $("#admin-design-link");
var $inputOrderNo = $("#admin-display-order");
var $selectPageSize = $("#admin-page-size");
var $inputLogoPerPage = $("#admin-logo-count");
var $templateThumb = $("#templatepanel_update .template");
var $customTemplateThumb = $("#customTemplateThumb .template");
var $clipartThumb = $("#clipartmenu .clipart img");
var $btnUpdateDesign = $("#btnUpdateDesign");
var $editTemplateDesignName = $("#editTemplateDesignName");
var $editTemplateThumbName = $("#editTemplateThumbName");
var $textarea = $("#textarea");
/**maintool */
var $btnRotate = $("#rotate, #rotateText");
var $btnFlipX = $("#btnFlipX");
var $btnFlipY = $("#btnFlipY");
var $btnGrayScale = $("#btnGrayScale");
var $btnUndo = $("#btnUndo");
var $btnRedo = $("#btnRedo");
/** */
    $imgCtrl = $("#workspace-right-panel .img-ctrl");
    $txtCtrl = $("#workspace-right-panel .txt-ctrl");
    $txtDecorationCtrl = $("#workspace-right-panel .txt-ctrl .text-decoration");

    $mainCtrl = $("#workspace-right-panel .main-ctrl");

    


    var selectedDesign = {};
    var designFlags = {
        active: true,
        default: false,
        submitted: false
    };

    const dpi = 72;

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
    

    function initImageEvents() {}

    function deleteTemplate(id) {
        if (!confirm("do you want to delete this template?")) {
            return;
        }
        var templateId = $("#edit-template-id").val();
        $.ajax({
            type: "DELETE",
            url: `/api/admin/template/${templateId}`,
            success: function (res) {

                toast("Deleted successfully!");
                setTimeout(function () {
                    window.location.reload();
                }, 1000)
            },
            error: function (res) {
                toast("Error while deleting.");
            }
        })
    }
    function deleteBanner(id,onSuccess,onError) {
        if (!confirm("do you want to delete this Banner?")) {
            return;
        }
       
        $.ajax({
            type: "DELETE",
            url: `/api/admin/manage/banner/${id}`,
            success: function (res) {

                toast("Deleted successfully!");
                setTimeout(function () {
                    window.location.reload();
                }, 1000)
            },
            error: function (res) {
                toast("Error while deleting.");
            }
        })
    }
    function deleteClipart(id,onSuccess,onError) {
        if (!confirm("do you want to delete this Clipart?")) {
            return;
        }
       
        $.ajax({
            type: "DELETE",
            url: `/api/admin/clipart/${id}`,
            success: function (res) {

                toast("Deleted successfully!");
                setTimeout(function () {
                    window.location.reload();
                }, 1000)
            },
            error: function (res) {
                toast("Error while deleting.");
            }
        })
    }
   
 function menuHighlighter(itemToHighlight) {
    $("#toolbar .nav-item").each(function (e) {
        $(this).removeClass('bg-menu-highlight');
    })

    $(itemToHighlight).addClass("bg-menu-highlight");
}

function saveDesign(type) {

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

        if(!(type === "project" || type=== "pre-designed"))
        { toast("Invalid Design Type.");
        return;}

        var title = $("#input-project-title").val();
        var desc = $("#input-project-desc").val();
        var active = $("#designActive").prop("checked");


        if (! title) {
            toast("Please Enter Project Name");
            return;
        }

        if (!canvas.templateId) {
            console.error("templateId is not present in canvas.");
            toast("Can't save project. please contact admin.");
            return;
        }

        var thumbBase64 = canvas.toDataURL({format: 'png', quality: 0.8});

        $.ajax({
            type: "POST",
            url: "/api/admin/save-design",
            data: {
                meta        : JSON.stringify(canvas.context),
                title       : title     || "Untitled",
                desc        : desc      || "Untitled",
                base64      : thumbBase64,
                active      : true,
                json        : JSON.stringify(canvas.toJSON()),
                templateId  : canvas.templateId, 
                type        : type
            },
            success: function (res) {
                toast("Your Project has been Saved.");
                window.location.reload();
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

function editProject(type) {

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

        if(!(type === "project" || type=== "pre-designed"))
        { toast("Invalid Design Type.");
        return;}

        var title = $("#input-project-title").val();
        var desc = $("#input-project-desc").val();
        var active = $("#designActive").prop("checked");


        if (! title) {
            toast("Please Enter Project Name");
            return;
        }

        if (!canvas.templateId) {
            console.error("templateId is not present in canvas.");
            toast("Can't save project. please contact admin.");
            return;
        }

        var thumbBase64 = canvas.toDataURL({format: 'png', quality: 0.8});

        $.ajax({
            type: "POST",
            url: "/api/admin/save-design",
            data: {
                meta        : JSON.stringify(canvas.context),
                title       : title     || "Untitled",
                desc        : desc      || "Untitled",
                base64      : thumbBase64,
                active      : true,
                json        : JSON.stringify(canvas.toJSON()),
                templateId  : canvas.templateId, 
                type        : type
            },
            success: function (res) {
                toast("Your Project has been Saved.");
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
            url: `/api/admin/edit-user-design/${projectId}`,
            data: {
                base64      :thumbBase64,
                json        : JSON.stringify(canvas.toJSON()),
                comments    : comments
            },
            success: function (res) {
                toast("Project has been Saved.");
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

    


    function downloadDesign() {
        if (! state.isPreviewCanvas) {
            toast("Please preview your design before download.");
            return;
        }

        if (canvasPrev.getObjects().length == 0) {
            toast("Please create your design before download.");
            return;
        }
        $loader.removeClass("hidden");

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
            // let canvasJSON = clonedCanvas.toJSON();
            // /clonedCanvas.setDimensions({width:1000,height:1200});


            for (var i = 0; i < clonedCanvas._objects.length; i++) {
                clonedCanvas._objects[i].globalCompositeOperation = null;
                canvasPrev.renderAll.bind(clonedCanvas)
            }
            bg.globalCompositeOperation = "destination-in";
            clonedCanvas.add(bg);
            clonedCanvas.renderAll();
            let widthRatio = width / clonedCanvas.width
            let heightRatio = height / clonedCanvas.height

            // let ratio = widthRatio > heightRatio ? heightRatio : widthRatio
            var imgData = clonedCanvas.toDataURL('image/jpeg', 1.0);
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("KakePrints.pdf");
            $loader.addClass("hidden");

        });

    }


    function deleteCustomProject(id){
        
        if(!confirm('This design will be permanently deleted! Are you sure?')){
            return; 
        }
$loader.removeClass("hidden");
        $.ajax({
            type: "DELETE",
            url: `/app/admin/shared-library/${id}`,
            success: function (res) {                
                toast("Deleted Successfully!");
               
                setTimeout(function () {
                    $loader.addClass("hidden");
                    window.location.reload();
                }, 2000)
            },  
            error: function (res) {
                $loader.addClass("hidden");
                toast("Server Error.");
               
            }
        })
    }
    function initUICustomProjects(){

       
        $(".custom-project").on("click",function(){
            const $elem = $(this);
            const meta = $elem.attr("data-meta");
            const metaJSON = JSON.parse(meta);
            let html = $("#customDesignDetailsTemplate").html();
            html = 
            html.replace("{design-name}",metaJSON.title)
            .replace("{sheet-size}", getInches(metaJSON.sheetWidth,metaJSON.sheetHeight) + " inches")
            .replace("{total-logos}",metaJSON.totalLogos)
            .replace("{logo-size}",getInches(metaJSON.logoWidth,metaJSON.logoHeight)+ " inches")
            .replace(/{design-id}/ig,$elem.attr('id'));
            
            $("#customDesignDetails").html(html);
        })



    }


    function initUIUploadTemplate(){

        let templateState = "init";
        let templateMeta = {};  
        let canvasTemplate = new fabric.StaticCanvas("canvasTemplate",{
            backgroundColor:"#fff"
        });
        let templateBase64 = null; 
        
        $("#btnUploadTemplate").on("click",function(){
           
         
            if(templateState === "init"){
                toast("Please Browse your Frosting Sheet.");
                return; 
            }

            if(templateState === "inProgress")
            {
                toast("Uploading Frosting Sheet is already In Progress.");
                return; 
            }
            
            if(templateState === "sent")
            {
                toast("Frosting Sheet is already Uploaded.");
                return; 
            }
            const sn = $("#inputSheetName").val();
            const sl = $("#inputSheetLink").val();
            const pn = $("#inputPartNo").val();
            const act = $("#cbSheetActive").prop("checked"); 
            const dft = $("#cbSheetDefault").prop("checked"); 

            if(!sn)
            { toast("Please enter Sheet Name")
            return; }
            if(!sl)
            { toast("Please enter Webstore Link")
            return; }
            if(!pn)
            { toast("Please enter Part No.")
            return; }
            if(sn.length > 50)
            {
                toast("Sheet Name should not be greater than 50 characters.");
                return;
            }


            var meta = templateMeta;
            templateState = "inProgress"; 
            
            $loader.removeClass("hidden");
            $.ajax({
                type: "POST",
                url: "/app/admin/template",
                data: {
                    desc: "",
                    meta: JSON.stringify(meta),
                    title: sn,
                    name: sn,
                    file_name: meta.fileName,
                    file_ext: `.${meta.fileName.split('.').pop()}`,
                    mime_type : "image/svg+xml",                    
                    active: act,
                    base64: templateBase64,
                    type: 'template',
                    by_admin: true,
                    default: dft,
                    link: sl,
                    logos: meta.objects,
                    ref_code: pn,                   

                },
                success: function (res) {
                    templateState = "sent";
                    toast("Uploaded Successfully!");
                    $loader.addClass("hidden");
                    setTimeout(function () {
                        onDesignReload();
                    }, 2000)
                },  
                error: function (res) {
                    templateState = "error";
                    toast("Server Error.");
                    $loader.addClass("hidden");
                }
            })


        })
        $("#btnBrowseTemplate").on("click",function(){
            $("#hiddenBrowseTemplate").trigger("click");
        })

        $("#hiddenBrowseTemplate").on('change', function (e) {
            templateState = "init";
            let files =e.target.files; 
            if (files.length === 0) 
                return;
            $("#template-designer-text").addClass('hidden');
            $("#canvasTemplate").removeClass('hidden');
            canvasTemplate.clear();
            canvasTemplate.set({backgroundColor:"#fff"})
            const allowedTypes = [ 'image/svg+xml']; 
          
            for (let file of files) {
                if (! allowedTypes.includes(file.type)) 
                { 
                    toast(`'${file.type}' unsupported sheet type. Only SVG Frosting Sheet are acceptable. `)
                    return; 
                }

                let reader = new FileReader()
                reader.onload = (e) => {
                    templateBase64 = e.target.result;
                    fabric.loadSVGFromURL(e.target.result, function (objects, options) {
                        var svg = new fabric.Group(objects);
                       
                       
                       
                        let sheetSize = `${options.viewBoxWidth/dpi}x${options.viewBoxHeight/dpi} Inches`;
                        let pageFormat = getPageFormatByDimensions(options.viewBoxWidth,options.viewBoxHeight); 
                       
                        $("#fileName").text(file.name);
                        $("#sheetSize").text(sheetSize);
                        $("#pageFormat").text(pageFormat);
                        $("#logosInSheet").text(objects.length);
                        canvasTemplate.setDimensions({width:options.viewBoxWidth,height:options.viewBoxHeight}); 

                        canvasTemplate.add(svg);
                        canvasTemplate.renderAll();

                        templateMeta = {
                            width: options.viewBoxWidth,
                            height: options.viewBoxHeight,
                            objects: objects.length,
                            objectWidth: objects[0].width,
                            objectHeight: objects[0].height,
                            pageSize: sheetSize,
                            fileName: file.name,
                            pageFormat: pageFormat,
                        }

                        templateState = "ready";
                    })
                  
                } 
                reader.readAsDataURL(file);
                }
        })

    }

    function initUIBanner(){
        let selectedBanner = null;
        let selectedBannerId =null; 

        $("#btnBrowseBanner").on("click", (e)=>{
            e.preventDefault();
            $("#btnUploadBanner").removeClass("hidden");
            $("#btnDeleteBanner").addClass("hidden");
            $("#hiddenUploadBannerFile").click();
        })

        $("#btnCancelBanner").on("click",function(){
            $("#btnUploadBanner").removeClass("hidden");
            $("#btnDeleteBanner").addClass("hidden");
            disposeBanner();
        })

        $("#hiddenUploadBannerFile").on("change",(e)=>{
          
            const files = e.target.files; 
            const file = files[0];
            const fileType = file.type; 
            const allowedTypes = [ 'image/jpeg','image/png','image/gif']
            if (! allowedTypes.includes(file.type)) 
            { 
                toast(`'${file.type}' unsupported image type. `)
                return; 
            }
             
            let reader = new FileReader()
             reader.onload = (e) => {

                 fabric.Image.fromURL(e.target.result, (img) => {
                             
                     img.scaleToHeight(250);   
                                     
                     //let canvasCenter = getCanvasCenter(img.width,img.height)
                     //img.set({left: canvasCenter.left, top: canvasCenter.top})
                     canvas.add(img);
                     canvas.centerObject(img);
                     canvas.renderAll();
                     selectedBanner={
                        file:file,
                        base64:e.target.result,
                        image:img
                    }
                 })
             } 
             reader.readAsDataURL(file);
         })

         $("#btnUploadBanner").on("click",(e)=>{
            let bannerName       = $("#inputBannerName").val();
            let bannerUrl        = $("#inputBannerUrl").val();
            let bannerType       = $("#banner-type").val();
            if(!isValidBanner(bannerName,bannerType))
            {return;}

            $loader.removeClass("hidden");

            const meta = {
                name        :   bannerName,
                originalName :   selectedBanner.file.name,
                size        :   selectedBanner.file.size,
                width       :   selectedBanner.image.width,
                height      :   selectedBanner.image.height,
                fileType    :   selectedBanner.file.type,
                file_ext    : `.${selectedBanner.file.name.split('.').pop()}`,
                url         :  bannerUrl,
                type        :  bannerType
            };
          
            const dataUrl         = selectedBanner.base64;       
            const designType      =  "banner";
            const active          = $("#cbBannerActive").prop("checked");
            

            $loader.removeClass("hidden");
            $.ajax({
                type: "POST",
                url: "/app/admin/uploads",
                data: {
                    meta: JSON.stringify(meta),
                    title: meta.name,
                    name: meta.name,
                    file_name: meta.fileName,
                    mime_type : meta.fileType,
                    active: active,
                    base64: dataUrl,
                    type: designType,
                    ref_code: bannerType,
                    link:bannerUrl,
                    by_admin: true
                },
                success: function (res) {
                    disposeBanner();
                    window.location.reload();
                    toast("Uploaded Successfully!");
                },  
                error: function (res) {
                    toast("Server Error.");
                    disposeBanner();
                }
            })


         });

        

         $("#bannerThumbs .delete").on("click",function(e){
            let target = e.currentTarget; 
            let id = target.id; 
            deleteBanner(id);
        })

      

        function isValidBanner(name, type)
        {
            if (!selectedBanner || !selectedBanner.base64 ) {
                toast("Please Browse and select an image.");
                return false;
            }            
        
            if (!type || type.length == 0) {
                toast("Please Select Banner Type");
                return false;
            }
        
            if (!name || name.length == 0) {
                toast("Please Enter Banner Name");
                return false;
            }
            if(name.length > 50)
            {
                toast("Name should not greater than 50 characters.");
                return false;
            }

           
            return true; 
        }

         function disposeBanner()
         {
            $loader.addClass("hidden");
            canvas.clear();
            $("#inputBannerName").val("");
            $("#cbBannerActive").prop("checked",false);
            $("#hiddenUploadClipArtFile").val("");
            selectedBanner = null;
         }
    }

    function initUIClipArts()
    {
        let selectedClipArt = null;
        let selectedClipArtId =null; 

        $("#btnBrowseClipart").on("click", (e)=>{
            e.preventDefault();
            $("#btnUploadClipart").removeClass("hidden");
            $("#btnUpdateClipart").addClass("hidden");
            $("#btnDeleteClipart").addClass("hidden");
            $("#hiddenUploadClipArtFile").click();
        })

        $("#btnCancelClipart").on("click",function(){
            $("#btnUploadClipart").removeClass("hidden");
            $("#btnUpdateClipart").addClass("hidden");
            $("#btnDeleteClipart").addClass("hidden");
            disposeClipArt();
        })

        $("#hiddenUploadClipArtFile").on("change",(e)=>{
          
            const files = e.target.files; 
            const file = files[0];
            const fileType = file.type; 
            const allowedTypes = [ 'image/jpeg','image/png','image/gif']
            if (! allowedTypes.includes(file.type)) 
            { 
                toast(`'${file.type}' unsupported image type. `)
                return; 
            }
             
            let reader = new FileReader()
             reader.onload = (e) => {

                 fabric.Image.fromURL(e.target.result, (img) => {
                             
                     img.scaleToHeight(250);   
                                     
                     //let canvasCenter = getCanvasCenter(img.width,img.height)
                     //img.set({left: canvasCenter.left, top: canvasCenter.top})
                     
 
                     canvas.add(img);
                     canvas.centerObject(img);
                     canvas.renderAll();
                     selectedClipArt={
                        file:file,
                        base64:e.target.result,
                        image:img
                    }
                 })
             } 
             reader.readAsDataURL(file);
         })

         $("#btnUploadClipart").on("click",(e)=>{
            const clipArtName       = $("#inputClipArtName").val();
            let selectedDesignId    = $("#selectedClipartId").val();
            const category          = $("#admin-categories").val();

            if(!isValidClipArt(clipArtName,category))
            {return;}
            $loader.removeClass("hidden");

            
           

            const meta = {
                name        :   clipArtName,
                originalName :   selectedClipArt.file.name,
                size        :   selectedClipArt.file.size,
                width       :   selectedClipArt.image.width,
                height      :   selectedClipArt.image.height,
                fileType    :   selectedClipArt.file.type,
                file_ext    : `.${selectedClipArt.file.name.split('.').pop()}`,
            };
          
            const dataUrl         = selectedClipArt.base64;       
            const designType      =  "clipart";
            const active          = $("#cbClipArtActive").prop("checked");
            

            $loader.removeClass("hidden");
            $.ajax({
                type: "POST",
                url: "/app/admin/uploads",
                data: {
                    meta: JSON.stringify(meta),
                    title: meta.name,
                    name: meta.name,
                    file_name: meta.fileName,
                    mime_type : meta.fileType,
                    active: active,
                    base64: dataUrl,
                    type: designType,
                    by_admin: true,
                    category: category,
                    id:$("#selectedClipartId").val()
                },
                success: function (res) {
                    disposeClipArt();
                    window.location.reload();
                    toast("Uploaded Successfully!");
                },  
                error: function (res) {
                    toast("Server Error.");
                    disposeClipArt();
                }
            })


         });

         $("#clipartAdminContainer .clipart").on("click",function(e){
            
            disposeClipArt();
            $("#btnUploadClipart").addClass("hidden");
            $("#btnUpdateClipart").removeClass("hidden");          
            $("#btnDeleteClipart").removeClass("hidden");

            let $item = $(e.currentTarget); 
            let url = $item.attr("data-url");
            let title = $item.attr("data-title");
            let category = $item.attr("data-category");
            let active =  ($item.attr("data-active") === "true");
            let meta = $item.attr("data-meta");
            selectedClipArtId = $item.attr("id");
            let fn =  url.substring(url.lastIndexOf('/')+1);                        

            fabric.Image.fromURL(url, function (img) {
                img.scaleToWidth(250);
                canvas.add(img).renderAll();                
                $("#selectedClipartId").val(selectedClipArtId);
                $("#admin-categories").val(category);
                $("#inputClipArtName").val(title);
                $("#btnDeleteClipart").removeClass("hidden");
                $("#cbClipArtActive").prop("checked", active);
            });
        });

        $("#btnDeleteClipart").on("click",function(e){
            let target = e.currentTarget; 
            let id = $("#selectedClipartId").val(); 
            deleteClipart(id);
        })

        $("#btnUpdateClipart").on("click",function(e){

            const clipArtName       = $("#inputClipArtName").val();
            const selectedClipartId = $("#selectedClipartId").val();
            const category          = $("#admin-categories").val();
            const active            = $("#cbClipArtActive").prop("checked");
            
            if(!isValidClipArt(clipArtName,category))
            {return;}
            
            $loader.removeClass("hidden");
            $.ajax({
                type: "PUT",
                url: `/api/clipart/${selectedClipartId}`,
                data: {
                    title: clipArtName,
                    name: clipArtName,
                    active: active,
                    category: category,
                    id:selectedClipartId
                },
                success: function (res) {
                    disposeClipArt()
                    window.location.reload();
                    toast("Uploaded Successfully!");
                },  
                error: function (res) {
                    toast("Server Error.");
                    disposeClipArt();
                }
            })

        })

        function isValidClipArt(name,category)
        {
            if(!$("#selectedClipartId").val())
            {
                if (!selectedClipArt || !selectedClipArt.base64 ) {
                    toast("Please Browse and select an image.");
                    return false;
                }
            }
            
            
            if (!name || name.length == 0) {
                toast("Please Enter ClipArt Name");
                return false;
            }
            if(name.length > 50)
            {
                toast("Name should not greater than 50 characters.");
                return false;
            }

            if(!category ){
                toast(`Please select a category.`);
                return;
            }
            return true; 
        }

         function disposeClipArt()
         {
            $loader.addClass("hidden");
            canvas.clear();
            $("#admin-categories").val("");
            $("#inputClipArtName").val("");
            $("#cbClipArtActive").prop("checked",false);
            $("#hiddenUploadClipArtFile").val("");
            selectedClipArt = null;
            selectedClipArtId = null; 
            
         }


    }
  
    function InitUIEvents() {
        
        initContextMenu();
        initUIUploadTemplate();
        initUICustomProjects();
        initUIClipArts();
        initUIBanner();
        initUIUndoRedo();
        
        $("#btn-edit-user-project").on("click", function(e){
            let _id = $(this).attr("data-project-id");
            editAndCommitUserProject(_id);
        })


        $("#btnCancelSaveDesign").on("click",function(){
            $("#menu-panel .tab-content  .tab-pane").each(function(){
                $(this).removeClass("active");
            })
            $("#uploadpanel").addClass("active");
        })

    $("#btn-back-template").on("click",function(){
        $("#menu-panel .tab-content  .tab-pane").each(function(){
            $(this).removeClass("active");
        })
        $("#templatepanel").addClass("active");
    })
        
    $("#terms-window, #image-terms-window").on("click",function(e){
        var win = window.open("/app/terms", "Terms and Conditions.", "toolbar=no, location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width="+(screen.width-200)+",height=500,top="+(screen.height-400)+",left="+(screen.width-200));
    })

        $("#edituser .is_admin").on("click",function(e){
            $("#confirmbox").modal("toggle");
            let text = "";
            if(e.currentTarget.checked){
                text = `Do you want to grant Administrator rights to this user? <strong>${$("#edit-user-container .email").val()}</strong>`;
            }else{
                text = `Do you want to remove the Administrator rights from this user? <strong>${$("#edit-user-container .email").val()}</strong>`;
            }
            $("#confirmBoxBody").html(text); 
            $("#btnModelContinue").text("Yes, I Agree");
            $("#btnModelContinue").unbind().on("click",function(e){
                 $("#btnEditUser").click();
            })




        })
        $("#categoryContainer .category").on("click",function(e){
          
            const id = e.currentTarget.id; 
            let categoryNm =  $(`#${id}`).find('.category-nm').text();
            $("#inputCategoryName").val(categoryNm);
            $("#btnAddCategory").text("Update Category");
            $("#hiddenCategoryId").val(id.replace("category-",""));
        })



        $("#categoryContainer .btnDelCategory").on("click",function(e){
            e.stopPropagation();
            let categoryId = e.currentTarget.id; 
            $loader.removeClass("hidden");
            $.ajax({
                type: "DELETE",
                url: `/api/admin/category/${categoryId}`,
                
                success: function (res) {
                    toast(`Category deleted Successfully ${categoryId}`);
                    window.location.reload();
                    $loader.addClass("hidden");
                },
                error: function (res) {
                   
                    if(res.status === 403)
                    { toast(`Category is associated with some of your cliparts, please remove associated cliparts and try again`,5000); }
                    else{
                        toast(`Error Deleting Category ${categoryId}`);
                    }
                    
                    $loader.addClass("hidden");
                },
                complete: function (){
                    $loader.addClass("hidden");
                }
            })

        })

        $("#btnAddCategory").on("click",function(){
           let categoryText =   $("#inputCategoryName").val();
           if(!categoryText || categoryText.length <3)
           {
            alert("Category name must be greater than 2 characters");
            return;
           }
           let categoryId   =   $("#hiddenCategoryId").val();
           $loader.removeClass("hidden");
           $.ajax({
            type: "POST",
            url: "/api/admin/category",
            data: {
                name: categoryText,
                id: categoryId
            },
            success: function (res) {
                
              window.location.reload();
                toast("Category has been saved successfully.");
            },
            error: function (res) {
                toast("Error while saving Category.");
            }, 
            complete: function (){
                $loader.addClass("hidden");
            }
        })
        })

        $("#btnClearCategory").on("click",function(){
            $("#inputCategoryName").val("");
            $("#btnAddCategory").text("Add Category");
            $("#hiddenCategoryId").val("");
        })
        
        
        $("#btnLibraryModal").on("click",function(e){
            $("#btnModelContinue").text("Continue");
            $("#confirmBoxTitle").text("ARE YOU SURE?");
            $("#confirmBoxBody").text("Do you want to discard your changes?");
            $("#confirmBoxTitle").text("Are you Sure?");
            $("#btnConfirmBoxModalClose").text("Close");

            $("#btnModelContinue").unbind().on("click", function (e) {
                e.preventDefault();       
                canvas.clear();
                canvasPrev.clear();
                $layers.html();
                getSharedProjects();
                $("#libraryLink").click();
                menuHighlighter("#btnLibrary");
            })
        })

        $("#btnMyProjectsModal").on("click",function(e){   
            $("#btnModelContinue").text("Continue");
            $("#confirmBoxTitle").text("ARE YOU SURE?");
            $("#confirmBoxBody").text("Do you want to discard your changes?");
            $("#confirmBoxTitle").text("Are you Sure?");
            $("#btnConfirmBoxModalClose").text("Close");
            
            $("#btnModelContinue").unbind().on("click", function (e) {
                e.preventDefault();
                canvas.clear();
                canvasPrev.clear();
                $layers.html();
                getUserProjects();
                $("#myProjectLink").click();
                menuHighlighter("#btnMyProjects");        
            });
   


        })

        $("#btnSaveModel").on("click",function(e){
                e.preventDefault();
                let type = $(this).attr("data-type");
                saveDesign(type);
        })
    
        $("#btnStartOverModel").on("click",function(e){
                e.preventDefault();
                window.location.href="/app/admin/custom-design"
                // $("#confirmBoxTitle").text("RESTART DESIGN FROM THE BEGINNING.  ALL EDITS WILL BE LOST");
                // $("#btnModelContinue").text("Yes, I Want to Start Over"); 
                // $("#confirmBoxBody").text("Are you sure you want to start over?"); 
                // $("#btnModelContinue").unbind().on("click",function(e){
                //     const templateId  = selectedTemplateId || 'default';
                //     loadSVGTemplate(templateId);
                //     $("#ws-btn-preview").addClass("hidden");
                //     //$("#ws-btn-save").addClass("hidden");
                // })
                // $("#btnSave").unbind().on("click",function(e){
                    
                //     const templateId  = selectedTemplateId || 'default';
                //     loadSVGTemplate(templateId);
                
                // })

            
                
        })

        $btnRedo.on("click", () => {
        })
    
    
        $btnFlipX.on("click", () => {
            var selectedObj = canvas.getActiveObject();
            selectedObj.set('flipX', ! selectedObj.flipX);
            canvas.renderAll();
        });
          
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

        $canvasPrev.parent().hide();
        var customTextInProgress = false;

        $btnDownloadPDF.on("click", () => {
           $("#ws-btn-download").click();
            //generatePDFfromPreview();
        });
        
        $btnUploadImage.on("click", () => {
            const ack = $("#ackUploadImage").prop("checked");
            if(!ack)
            {
                toast("Please confirm you have the rights to use these images.")
                return; 
            }
            $btnUploadImageHidden.click();
        })
        
        $btnUploadImageHidden.on("change", (e) => {
            if (e.target.files.length === 0) 
                return;
            
            processFiles(e.target.files);
            $btnUploadImageHidden.val('');
            // $("#menu-clipart > a").click();
        })

        $("#templatepanel .template").on("click", (e) => {
            enabledTextMode = false;
            var id = e.currentTarget.id;
            canvas.clear();
            loadSVGTemplate(id);
        });
        $("#btn-step-design").on("click", function (e) {
            e.preventDefault();
            $("#menu-upload > a").click();
            $(".step-item:nth-child(2)").removeClass("active");
            $(".step-item:nth-child(3)").addClass("active");
        })
        $("#btnCancelSaveDesign").on("click", function () {
            $("#input-project-title").val("");
            $("#input-project-desc").val("");
            $("#btnTemplate").click();
           
        })
        $("#ws-btn-preview").on("click", function (e) {
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

        $("#fontFile").on("change",function(e){

            if(e.target.files.length>0)
            {
                let fn = e.target.files[0].name; 
                fn = fn.split('.')[0].replace(/-/ig,"  ");
                $("#inputFontName").val(fn);
               
            }
        });


        ///

        $("#accordion a").on("click", function () {
            $("#accordion").find('.arrow').each(function () {
                $(this).removeClass("down");
            })
            $(this).find('.arrow').first().addClass("down");
        })
    
       
    
        $("#btnDisplayGrid").on("click", function (e) {
          
           if(e.target.checked)
           {
            $(".grid-lines").show();
           }else{
            $(".grid-lines").hide();
           }
            
    
        })
      
        // $txtDecorationCtrl.on("click", function (e) {
        
        //     $("#font-panel .text-decoration").each(function(e){
        //         let $self =$(this);
        //         if(['bold','italic','underline'].indexOf(this.id) === -1 ){
        //             $self.removeClass('active');
        //         } 
                
        //     })
        //     let __canvas = state.isPreviewCanvas?canvasPrev:canvas;
        //     var value = $(this).attr("data-value");
            
        //     $(this).addClass('active');
    
        //     var o = __canvas.getActiveObject();
        //     if (o && o.type === 'i-text' || o.type === 'curved-text') {
             
        //         let isTextSelection; 
        //         if(o.getSelectionStyles)
        //         { isTextSelection  = o.getSelectionStyles().length > 0; }
                 
        //         if (value === 'bold') {
        //             var isTrue = o['fontWeight'] === 'bold';
        //             if(isTrue){
        //                 $(this).removeClass('active');
        //             }
    
                    
                   
        //             if(isTextSelection)
        //             { o.setSelectionStyles({"fontWeight":isTrue ? '' : 'bold'}) }
        //             else{
        //                 o.set({
        //                     "fontWeight": isTrue ? '' : 'bold'
        //                 })
        //             }            
                    
    
    
        //         } else if (value === 'italic') {
        //             var isTrue = o['fontStyle'] === 'italic';
        //             if(isTrue){
        //                 $(this).removeClass('active');
        //             }
    
        //             if(isTextSelection)
        //             { o.setSelectionStyles({"fontStyle":isTrue ? '' : 'italic'}) }
        //             else{
        //             o.set({
        //                 "fontStyle": isTrue ? '' : 'italic'
        //             })}
    
        //         } else if (value === 'underline') {
        //             if( o.type === 'curved-text')
        //             {
    
        //                 o.set({"textDecoration": "underline"})
        //                 toast('Underline is not supported for Circular Text.');
        //                 return}
        //             var isTrue = !o['underline'];
        //             if(!isTrue){
        //                 $(this).removeClass('active');
        //             }
    
        //             if(isTextSelection)
        //             { o.setSelectionStyles({"underline":isTrue}) }
        //             else{
        //             o.set({
        //                "underline":isTrue
        //             })
        //             }
        //         } else if (value === "left" || value === "right" || value === "center") {
        //             $(this).parent().addClass('active');
        //             o.set({"textAlign": value})
        //         }
    
        //         __canvas.renderAll();
        //     }
    
        // })
    
        $("#font-list-container a").on("click", function (e) {
            var value = $(this).text() || "Arial, sans-serif";
            $("#fontlist").text(value);
            //$("#selected-font").html($(this).html())
            canvas.getActiveObject().set("fontFamily", $(this).attr("data-value"));
            canvas.requestRenderAll();
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
                let obj = canvas.getActiveObject(); 
                obj.strokeWidth = parseInt(this.value) || 10;
                canvas.renderAll();
                //setSelectedTextStyle("strokeWidth", this.value);
    
            }});
        $('#text-line-height').on("change", function () {
            setSelectedTextStyle("lineHeight", this.value);
        });
        ///

        $("#customTextContainer .customTxt").on("click",function(e){
            const id = e.currentTarget.id; 
            let $elm =  $(`#${id}`).find('.custom-text');
            let txt =$elm.text(); 

        
        
           
            let order  = $elm.attr('data-order');
            $("#inputCustomText").val(txt);
            $("#btnCustomText").text("Update Text");
            $("#hiddenCustomTextId").val(id.replace("custom-text-",""));
            $("#customTxtDisplayOrder").removeClass("hidden");
            $("#customTxtDisplayOrder").val(order);
        })

        $(".btn-custom-text").on("click",function(e){
            e.stopPropagation();
            var id = e.currentTarget.id;
            let $elm =  $(`#${id}`).find('.custom-text');
            let txt =$elm.text(); 
            if(!confirm(`Do you want to delete?`))
            {return;}

            $.ajax({
                type: "DELETE",
                url: `/api/admin/custom-text/${id}`,
                success: function (res) {
                    toast("Deleted successfully!");
                    window.location.reload();
                },
                error: function (res) {
                    toast("Error while deleting.");
                }
            })

        });
        $("#btnCustomTextClear").on("click", function (e) {
        //   $('#inputCustomText').val("");
        //   $("#hiddenCustomTextId").val("");
        //   $("#btnCustomText").val("Add Text");
        //   $("#customTxtDisplayOrder").val("");
                window.location.reload();
        })
        $("#btnCustomText").on("click", function (e) {
          if(customTextInProgress){
            toast("Please wait... ");
            return;
          }
          var customTextInProgress = true;
          var type = 'custom-text';
          var text = $('#inputCustomText').val();

          if(!text || text === "" || text.length === 0)
          {
            toast("Please enter text.");
            return; 
          }

          if(text.length > 100)
          {
            toast("Custom text should not be greater than 100 characters.");
            return; 
          }
          let customTextId = $("#hiddenCustomTextId").val();
          let order = $("#customTxtDisplayOrder").val();
if(!order || order < 1){
    toast("Invalid Order No.");
    return; 
}
          $.ajax({
              type: "POST",
              url: "/api/admin/content",
              data: {
                  content   : text,
                  type      : type,
                  id        : customTextId,
                  order     : order || 1
              },
              success: function (res) {
                window.location.reload();
                  designFlags.submitted = true;
                  toast("Content has been saved successfully.");
              },
              error: function (res) {
                  designFlags.submitted = false;
                  toast("Error while saving Content.");
              }
          })
        })

        //@Add Fonts 
        $("#cbFontEnabled > input").on("click",function(e){
            let id = e.currentTarget.id;
            let isActive = $(e.currentTarget).prop("checked");
            $.ajax({
              type: "PUT",
            url: `/api/admin/fonts/${id}`,
              data: {active:(isActive)},
              success: function (res) {
                  toast("Updated successfully!");
              },
              error: function (res) {
                  toast("Error while deleting.");
              }
          })
          
          
           
          });

          $(".btnDelFont").on("click",function(e){
            let id = e.currentTarget.id;
            let isActive = $(e.currentTarget).prop("checked");
            $.ajax({
              type: "DELETE",
            url: `/api/admin/fonts/${id}`,
              success: function (res) {
                  toast("Deleted successfully!");
                  $(`#fonts-${id}`).remove();
              },
              error: function (res) {
                  toast("Error while deleting.");
              }
          })
        })
          $("#btnFontClear").on("click", function (e) {
            $('#inputFontName').val("");
          })
          $("#btnAddFont").on("click", function (e) {
            if(customTextInProgress){
              toast("Please wait... ");
              return;
            }

           
            
            var customTextInProgress = true;
            var type = 'fonts';
            var text = $('#inputFontName').val();
  
            if(!text || text === "" || text.length === 0)
            {
              toast("Please enter text.");
              return; 
            }
  
            if(text.length > 100)
            {
              toast("Custom text should not be greater than 100 characters.");
              return; 
            }
            let formData = new FormData();
            let files = $("#fontFile")[0].files;
            if(files.length==0)
            {
                toast("Please browse a font file");
                return;
            }
            let filename = files[0].name; 
            if(filename.indexOf(".ttf") === -1)
            {
                toast("Please browse a (.ttf) font file");
                return;
            }

            formData.append('contentFile',files[0]);
            formData.append('content',filename);
            formData.append('label',text)
            formData.append('type',type);
            $loader.removeClass("hidden");
            $.ajax({
                type: "POST",
                url: "/api/admin/content",
                enctype: 'multipart/form-data',
                data: formData,
                cache : false,
                processData : false,
                contentType: false,
                dataType    : 'json',
                success: function (res) {
                  window.location.reload();
                    designFlags.submitted = true;
                    toast("Content has been saved successfully.");
                    $loader.addClass("hidden");
                },
                error: function (res) {
                    designFlags.submitted = false;
                    toast("Error while saving Content.");
                    $loader.addClass("hidden");
                }
            })
          })
  
          $("#btnUploadWatermark").on("click", function (e) {
            if(customTextInProgress){
              toast("Please wait... ");
              return;
            }

            
            var customTextInProgress = true;
            var type = 'watermark';
  
          
  
           
            let formData = new FormData();
            let files = $("#watermarkFile")[0].files;
            if(files.length==0)
            {
                toast("Please browse an image.");
                return;
            }
            let filename = files[0].name; 
            if(filename.indexOf(".png") === -1)
            {
                toast("Please browse a (.png) file");
                return;
            }

            formData.append('contentFile',files[0]);
            formData.append('content',filename);
            formData.append('label',"watermark")
            formData.append('type',type)
            $.ajax({
                type: "POST",
                url: "/api/admin/content",
                enctype: 'multipart/form-data',
                data: formData,
                cache : false,
                processData : false,
                contentType: false,
                dataType    : 'json',
                success: function (res) {
                  window.location.reload();
                    designFlags.submitted = true;
                    toast("Content has been saved successfully.");
                },
                error: function (res) {
                    designFlags.submitted = false;
                    toast("Error while saving Content.");
                }
            })
          })
  


        $("#ws-btn-save").on("click", function () {
            
            $("#menu-panel .tab-content  .tab-pane").each(function(){
                $(this).removeClass("active");
            })
            $("#savedesign").addClass("active");

        })

    //     $("#btnSaveModel").on("click",function(){
    
            
    //         /**
    //    * 1. validate - please create design before save.
    //    * 2. show save design form. 
    //    * 3. save design. 
    //    */

    //         if (canvas.backgroundImage == null || canvas._objects.length == 0) {
    //             toast("Please create your design before save.");
    //             return;
    //         }
    //          saveCustomDesign(true);

    //     });

        $("#saveUserDesign").on("click",function(e){
            let designId = $("#hiddenDesignId").val();
            if(!designId)
            {alert("Error loading Design. Design Id is missing");
            return;} 
            let json = canvas.toJSON();
            $loader.removeClass("hidden");
            $.ajax({
                type: "POST",
                url: "/app/admin/uploads",
                data: {
                    userDesignId: designId,
                    json: JSON.stringify(json)
                },
                success: function (res) {
                    designFlags.submitted = true;
                    toast("Uploaded Successfully!");
                    setTimeout(function () {
                        window.location.href = "/admin/shared-library";
                    }, 2000)
                },  
                error: function (res) {
                    designFlags.submitted = false;
                    toast("Server Error.");
                    $loader.addClass("hidden");
                }
            })
        })

        
        rotateObject();        
        flipXYObject();
        grayscaleObject();
        brightnessObject();
        contrastObject();

        $("#btn-step-download").on("click", function (e) {
            e.preventDefault();
            downloadDesign();
        });


        $("#btnSave").unbind().on("click", function (e) {
            e.preventDefault();
            saveDesign();
        })

        $("#btnBack").on("click", function (e) {
            e.preventDefault();
            backFromPreview();
        });

        $("#btn-step-preview, #btn-menu-peview").on("click", function (e) {
            e.preventDefault();
            previewDesign();
        });

        


        $("#font-list-container .fontfamily").on("click", function (e) {
            var value = $(this).attr("data-value");
            $("#selected-font").html($(this).html())

            canvas.getActiveObject().set("fontFamily", value);
            canvas.requestRenderAll();


        })

    $btnTextSize.on("change", function () {
            setSelectedTextStyle("fontSize", this.value);

        })

     

      
        


        function setSelectedTextStyle(prop, value) {
            canvas.getActiveObject().set(prop, value);
            canvas.renderAll();

        }


       
        


        $("#btnEditUser").on("click", function (e) {
            if (confirm("Do you want to save this user changes?")) {
                var userId = selectedUser ?. _id;
                if (! userId) {
                    toast("Something went wrong!");
                    return;
                }


                selectedUser.is_admin = $("#edit-user-container .is_admin").prop("checked");
                selectedUser.active = $("#edit-user-container .is_active").prop("checked");
                selectedUser.watermark = $("#edit-user-container .watermark").prop("checked");
                selectedUser.project_limit = parseInt($("#edit-user-container .project_lmt").val());

                $.ajax({
                    type: "PUT",
                    url: `/api/admin/user/${userId}`,
                    data: selectedUser,
                    success: function (res) {
                        toast("Updated successfully!");
                        $("#btnFilterUsers").trigger('click');
                    },
                    error: function (res) {
                        toast("Error while Updating.");
                    }
                })
            }
        });

       


      

        $("#admin-delete-template").on("click", function (e) {
            deleteTemplate();
        })


        $templateThumb.unbind().on("click", (e) => {

            var templateId = e.currentTarget.id;
            if (templateId) {

                loadTemplateInfoByTemplateId(templateId);
                // loadSVGTemplate(templateId);
            } else {
                toast(`Can't load Template.`)
            }
        })

        // $customTemplateThumb.on("click", (e) => {
        //     var id = e.currentTarget.id;
        //     canvas.clear();
        //     loadSVGTemplate(id);
        // })

        // $clipartThumb.on("click", (e) => {
        //     var id = e.currentTarget.src;
        //     fabric.Image.fromURL(id, function (img) {
        //         var img1 = img.set({left: 0, top: 0});
        //         img1.scaleToWidth(250);
        //         img1.globalCompositeOperation = 'source-atop';
        //         canvas.add(img1);
        //     });

        // });

        $btnActiveDesign.on("click", (e) => {
            if (! selectedDesign.base64) {
                toast("Please upload template.");
                e.currentTarget.checked = false;
                return;
            }
            designFlags.active = e.currentTarget.checked;


            // setTimeout(function(){
            // var txt = $(e.currentTarget).find(".active").text();
            // designFlags.active = (txt == "ON");
            // },500);

        })
        $cancelDesign.on("click", (e) => {
            onDesignReload();
        })

        $btnDefaultDesign.on("click", (e) => {

            if (! selectedDesign.base64) {
                toast("Please upload template.");
                e.currentTarget.checked = false;
                return;
            }


            designFlags.default = e.currentTarget.checked;
            var meta = JSON.parse(selectedDesign.meta);

            // setTimeout(function(){
            // var txt = $(e.currentTarget).find(".active").text();
            // designFlags.default = (txt == "ON");
            // },500)

        })


        $btnUpdateDesign.on("click", function () {

            var meta = selectedDesign.data.meta;

            if (meta) {
                meta = JSON.parse(meta);
                meta.objects = $inputLogoPerPage.val() || 0;
            }
            var data = {

                title: $inputThumbnailName.val(),
                name: $inputThumbnailName.val(),
                file_name: $inputFileName.val(),
                order_no: $inputOrderNo.val(),
                active: designFlags.active,
                default: designFlags.default,
                link: $inputDesignLink.val(),
                logos: $inputLogoPerPage.val(),
                ref_code: $("#kopykakePartNo").val(),
                meta: JSON.stringify(meta)
            }
            if (! data.title || ! data.name) {
                toast("Template mandatory information is missing. ")
                return;
            }

            if (data.order_no > 1000) {
                toast("Display Order should be less than 1000.")
                return;
            }

            $.ajax({
                type: "PUT",
                url: `/api/admin/template/${
                    selectedDesign.data.code
                }`,
                data: data,
                success: function (res) {
                    designFlags.submitted = true;
                    toast("Template information saved successfully!");
                    window.location.reload();
                },
                error: function (res) {
                    designFlags.submitted = false;
                    toast("Error while updating template.");
                }
            })
        })

       
        $btnSaveDesign.on("click", function () {
            let selectedDesignId = $("#selectedClipartId").val();
            if (!selectedDesign.base64 && !selectedDesignId) {
                toast("Please Browse and select a file.");
                return;
            }
            onSaveDesign();
        });

        $adminImageUpload.on("click", function (e) {
            e.preventDefault();
            $btnImageUploadHidden.click();
        })

        $btnImageUploadHidden.on('change', function (e) {
            let files = e.target.files;
            if (files.length === 0) 
                return;
            

    const allowedTypes = [ 'image/jpeg','image/png','image/gif']
   const file = files[0];

        if (! allowedTypes.includes(file.type)) 
        { 
            toast(`'${file.type}' unsupported image type. `)
            return; }

        let reader = new FileReader()
        
            reader.onload = (e) => {
                fabric.Image.fromURL(e.target.result, (img) => {
                    selectedDesign = img;
                    img.scaleToHeight(250);                    
                    //let canvasCenter = getCanvasCenter(img.width,img.height)
                    //img.set({left: canvasCenter.left, top: canvasCenter.top})
                    canvas.add(img);
                    canvas.centerObjct(img);
                    canvas.renderAll();
                })
            } 
            reader.readAsDataURL(file);

        })

        $("#btnEditContent").on("click",function(){
            $('#summernote').summernote('enable');

            $("#btnSaveContent").removeClass("hidden");
            $(this).addClass("hidden");
        })

        $("#btnSaveContent").on("click", function (e) {
            $('#summernote').summernote('disable');
            if(!confirm("Do you want to save Content?"))
            {return;}
           $loader.removeClass("hidden");
            $("#btnEditContent").removeClass("hidden");
            $(this).addClass("hidden");

            var type = $(this).attr("data-value");
            var html = $('#summernote').summernote('code');

            $.ajax({
                type: "POST",
                url: "/api/admin/content",
                data: {
                    content: html,
                    type: type
                },
                success: function (res) {
                    $loader.addClass("hidden");
                    designFlags.submitted = true;
                    toast("Content has been successfully saved.");
                },
                error: function (res) {
                    $loader.addClass("hidden");

                    designFlags.submitted = false;
                    toast("Error while saving Content");
                }
            })
        })

       
    }
    function enabledDesignCtrl(o) {
        $adminDesignCtrl.find(".disabled").removeClass("disabled");
    }

    function loadTemplateInfo(data) {

        var meta = data.meta;
        if (meta) {
            meta = JSON.parse(meta);
        }
        selectedDesign.data = data;
        $("#edit-template-id").val(data.code);
        $inputThumbnailName.val(data.title);
        $inputDesignName.val(data.name);
        $inputFileName.val(data.file_name);
        $inputOrderNo.val(data.order_no);
        designFlags.active = data.active;
        designFlags.default = data.default;
        $inputDesignLink.val(data.link);
        $inputLogoPerPage.val(meta.objects || 0);
        $("#kopykakePartNo").val(data.ref_code);

        $("#editTemplateActive").prop("checked", data.active);
        $("#editTemplateDefault").prop("checked", data.default);

        $("#editTemplateActive").on("click", function (e) {
            designFlags.active = e.target.checked;
        })

        $("#editTemplateDefault").on("click", function (e) {
            designFlags.default = e.target.checked;
        })

        // $btnActiveDesign    =       $("#design-active");
        // $btnDefaultDesign   =       $("#design-default");
        // $inputFileName      =       $("#admin-file-name");
        // $inputDesignLink    =       $("#admin-design-link");
        // $inputOrderNo       =       $("#admin-display-order");
        // $selectPageSize     =       $("#admin-page-size");
        // $inputLogoPerPage   =       $("#admin-logo-count");
        // $templateThumb      = $("#templatepanel .template")
    }


    function loadTemplateInfoByTemplateId(id) {

        var group = [];
        state.isPreviewCanvas = false;
        $.get(`/api/admin/svg-templates/${id}`, function (data) {
            const svgBase64 = data.base64;
            if (! svgBase64) {
                toast("Error loading Template");
                return;
            }
            var meta = {};
            if (data.meta) {
                meta = JSON.parse(data.meta);
                // meta.objects = parseInt($inputLogoPerPage.val() || (meta.objects || 0));
            }canvas.clear();
            if(canvas.templateId)
            {
                $(`#${canvas.templateId}`).removeClass("bg-light-blue");
            }
           
            canvas.templateId = data.code;
            loadTemplateInfo(data);
            
            $(`#${id}`).addClass("bg-light-blue");
        })

    }


    function onDesignReload(o) {
        $loader.addClass("hidden");
        location.reload();

    }
    function onDesignLoaded(o) {
        enabledDesignCtrl({});
        // var msg = `Sheet size: Width: ${(o.width/dpi).toFixed(2)}", Height: ${(o.height/dpi).toFixed(2)}", Logo size: Width: ${(o.logoWidth/dpi).toFixed(2)}", Height: ${(o.logoHeight/dpi).toFixed(2)}", Total Logos: ${o.logoCount}`;
        // $pageTitle.html(msg);
        var pageHeightInInches  = (o.height / 72).toFixed(1);
        var pageWidthInInches   = (o.width  / 72).toFixed(1);
        var pageSize            = `${pageWidthInInches}x${pageHeightInInches}''`;
        var logoHeightInInches  = (o.height / 72).toFixed(1);
        var logoWidthInInches   = (o.logoWidth / 72).toFixed(1);
        var logoSize            = `${logoWidthInInches}''`;

        $("#template-info-panel .page-size").text(pageSize);
        $("#template-info-panel .logo-size").text(logoSize);
        $("#template-info-panel .total-logos").text(o.logoCount);
        $("#admin-file-name").val(o.filename);
        $("#btnDeleteClipart").addClass("hidden");

    }




    $("#btn-step-design").on("click", function () {


        if (canvas.backgroundImage == null) {
            toast("Please Select template");
            return;
        }


        $("#templatepanel").removeClass("active");
        $("#uploadpanel").addClass("active");

    })



    $btnSavePreDesign.on("click", () => {
       saveDesign();
    })

    function onSaveDesign() {
        if (designFlags.submitted) {
            toast("Already submitted, please choose new design.");
            return;
        }
        var m = selectedDesign.meta;
        var meta = {
            width: m.width,
            height: m.height,
            objects: m.logoCount,
            objectWidth: m.logoWidth,
            objectHeight: m.logoHeight,
            title: $templateTitle.val(),
            pageSize: $selectPageSize.val()
        }
        if (!meta.title || meta.title.length == 0) {
            toast("Please Enter Title!");
            return;
        }
        if(meta.title.length > 50)
        {
            toast("Please should not greater than 50 characters.");
            return;
        }
        const validateCategoryFor = ['clipart'];
        let MIME_TYPE       = "image/png";
        let dataUrl         = selectedDesign.base64;       
        let designType      =  $("#design-type").val();
        let category        = $("#admin-categories").val();
        let active          = $("#design-active").prop("checked");
        
        if(!category && validateCategoryFor.find(i=>i === designType) ){
            toast(`Please select a category.`);
            return;
        }
        $loader.removeClass("hidden");
        $.ajax({
            type: "POST",
            url: "/app/admin/uploads",
            // contentType: false,
            // enctype: 'multipart/form-data',
            // processData: false,
            data: {

                desc: "",
                meta: JSON.stringify(meta),
                title: $inputThumbnailName.val(),
                name: $inputDesignName.val(),
                file_name: selectedDesign.file.name,
                file_ext: `.${selectedDesign.file.name.split('.').pop()}`,
                mime_type : selectedDesign.file.type,
                order_no: $inputOrderNo.val(),
                active: active,
                base64: dataUrl,
                type: designType,
                by_admin: true,
                default: designFlags.default,
                link: $inputDesignLink.val(),
                logos: $inputLogoPerPage.val(),
                ref_code: $("#kopykakePartNo").val(),
                category: category,
                id:$("#selectedClipartId").val()
            },
            success: function (res) {
                designFlags.submitted = true;
                toast("Uploaded Successfully!");
                setTimeout(function () {
                    onDesignReload();
                }, 2000)
            },  
            error: function (res) {
                designFlags.submitted = false;
                toast("Server Error.");
                $loader.addClass("hidden");
            }
        })
      }

     



    function onObjectAdded(o) {
        addLayer();
    }

    function onObjectSelectionCleared(o) {
        hideObjectControls();
    }

    function hideObjectControls() {
        imageControls(false);
        textControls(false);
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
                // o.target.id = `obj${
                //     canvas._objects.length
                // }`;
                // o.target.index = canvas._objects.length - 1;
              
              
                                // do not create new index of layer if object is cropped or curved-text; 
                        // creating curved text or cropped image we remove previous object and insert new object 
                        // at same position so no need to create new index and id. 
                        if(!(o.target.type === "curved-text" || o.target.subType === "cropped"))
                        {
                        o.target.id = `obj${canvas._objects.length}`;
                        o.target.index = canvas._objects.length - 1;
                        }
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
    
    function addFiltersOnSelection() {}

    /** Layer functions */
    // function addLayer(o) {
    //     $("#collapse-layers").addClass("show");
    
    //     var temp = layerHtml;
    //     $layers.html();
    //     var layers = "";
    //     // var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
    //     var _canvas = state.isPreviewCanvas ? canvasPrev : canvas;
    //     for (var i = _canvas._objects.length - 1; i >= 0; i--) {
    //         var obj = _canvas._objects[i];
            
    //         var src = obj._element ?. currentSrc;
    //         if (obj.text) {
    //             src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABHNJREFUeJzt3LurHGUcx+FvcqKiJohGBBGjRPHyB4imE0u72Akix1bsBAsriyiKokQ7CQoKaiGKCpGAjSI2golXhIR4v3USbzExicViiCHndy55d95zdp4H3iYLM7+d3c+emd0hCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJsq73AFOyMckVmd3ntxp9n+T33kNQ25hkV5IjSU5Yg64jSZ5NcuGirxJdrEuyJ/3fKGNfu+Mv96p0W/q/OazJurV+qdaO9b0HaOiW3gNw0rbeA7QyS4Fc0HsATjqv9wCtzFIg0JxAoCAQKGzoPcAqcSDJd0mON9zmukx+rLy+4TbP5MskP2by7VEr65NcmeTahtuksx1Z/teRLyW5YcpzbUtycAWzLbb2J7lpyrPfmOSVFcz20JTnYgWWE8ixJHcPONvWTG7DaBXHoSRbBpz/nkyO2egCGes1yANJXhhwfweTvNhwe88n+bbh9payvwcH3N+qMcZAvkqys8N+9zbc1r6G21qqJzNslKvCGAPZmeSfDvs90nBbRxtuazn7fKbDfrsaWyCHkjzXe4g1bFeSP3oPMaSxBbIryW+9h1jDfs3IPmDGFMjxjPAUYQqeTtvfXFa1MQXyepKvew8xAw4keav3EEMZUyBP9R5ghozmWI4lkA+TfNB7iBnybvp81Ty4WQrkcPHY4xnRefMATiR5onj8z6EGmbZZCuSjBf79nSSvDjnISLyc5L0FHlvotaCjczK5s/XUe4L2Jtncc6hTzKfdvVh3DTv6gi5L8mn+P9tnSeZ6DsXCrkvyfia3kzya1fVf0Mxn9gJJkk2ZnMJ+k8lfFLfIsyLzmc1AZtosXYNAcwKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIZDhzDbfldRuIAz2crQ23dXXDbUF3c0n2JznRaH0eH27MkPvTLo7/1n2DPgOYkvkkx9I+kKNJ7hzuaUA7m5LckWR32odx+nozyfYkGwd5ZrBCV2Vy2rMnyd+Zfhinr8NJ3k5yb5ItU36usKi5JNuSPJLkkwwfxGLr4yQ7ktwcF/QM6KIkjyX5Jf0jWOr6OcnDmZz6wdRck+Rg+r/hV7r2Z3IqCM2dm+SL9H+Tn+3al2RD42MD2Z7+b+5W6/bGx2ZmuXhbukt6D9DQ5t4DMHsuzeRit/en/9muH5Jc3PjYQJLJRfobmfyK3fuNvtx1NMlrcaPjsqzrPcAadX6Sy7N2TlGPJ/kpyV+9BwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM7kX8fwvIWqet/rAAAAAElFTkSuQmCC';
    //         }
    //         layers += temp.replace(/{id}/ig, obj.id).replace("{src}", src).replace("{_id}", obj.id).replace(/{index}/ig, i + 1);
    //     }
    //     if (layers != "") {
    //         $layers.html(layers);
    //         //$("#ws-btn-save").removeClass('hidden');
    //         if(!state.isPreviewCanvas)
    //         { $("#ws-btn-preview").removeClass('hidden');  }
    
    //     } else {
    //         $layers.html("Empty! please upload an image.");
    //         //$("#ws-btn-save").addClass('hidden');
    
    //         if(!state.isPreviewCanvas)
    //         { 
    //             $("#ws-btn-preview").addClass('hidden'); 
    //         }
    
    //     }
    
    // }
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
    function initLayerEvents($elem) {
        var id = $elem.id;

        $(`#${id} .delete`).on("click", function (e) {
            e.stopPropagation();
            canvas.remove(canvas.selectedObj).renderAll();
            addLayer();
        })

        $(`#${id} .duplicate`).on("click", function (e) {
            e.stopPropagation();
            var object = fabric.util.object.clone(canvas.getActiveObject());
            object.set("top", object.top + 5);
            object.set("left", object.left + 5);
            canvas.add(object);
        })

        $(`#${id} .bring-fwd`).on("click", function (e) {
            e.stopPropagation();
            var obj = canvas.getActiveObject();

            canvas.bringForward(obj)
            canvas.renderAll();
            var elem = $(`#${id}`);
            elem.prev().insertAfter(elem);
        })


    }


    function hideWorkspaceControls() {
        $layers.html("No Layer");
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

    /** */

    InitUIEvents();
    initCanvasEvents();

   
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


    function toast(message) {

        var $toast = $("#snackbar").addClass("show");
        $toast.text(message);
        setTimeout(function () {
            $toast.removeClass("show")

        }, 3000);
    }
    
    
   
    function onCanvasModified(o) {
        
    }
    
    function onObjectAdded(o) {
        addLayer(o);
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
                obj.set('stroke',strokeColor)
                //obj.stroke      = strokeColor;
                obj.strokeWidth = strokeWidth;
                obj.paintFirst  = "stroke";
              //  setSelectedTextStyle("stroke", strokeColor);
              //  setSelectedTextStyle("paintFirst", "stroke");
              //  setSelectedTextStyle("strokeWidth", strokeWidth);
            }else
            {
                obj.set('strokeWidth',0)
            }
            canvas.renderAll();
        });
        
        
       
    
        $btnTextSize.on("change", function () {
            canvas.getActiveObject().set("fontSize", this.value);
            canvas.renderAll();
        })
    
        $("#curveTextCtrl").on("input", function (e) {   
            let val = e.currentTarget.value;
            updateCurveText({diameter:val});
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
    function updateCurveText(valueObj)
    {
        var obj = canvas.getActiveObject();
        if (obj) {
            obj.set(valueObj);
        }
        canvas.renderAll();
    }
    var selectedUser = {};
  
    function editCustomer(user)
    {
        selectedUser = user;
        $("#edit-user-container .fname").val(user.fname);
        $("#edit-user-container .lname").val(user.lname);
        $("#edit-user-container .email").val(user.email);
        $("#edit-user-container .company").val(user.company_name);
        $("#edit-user-container .project_lmt").val(user.project_limit);
        $("#edit-user-container .created_dt").val(new Date(user.created_dt).toLocaleDateString("en-GB"));
        $("#edit-user-container .is_admin").prop("checked", user.is_admin);
        $("#edit-user-container .is_active").prop("checked", user.active);
        $("#edit-user-container .watermark").prop("checked", user.watermark);
    }
    function deleteCustomer(id)
    {
        if (confirm("Do you want to delete this user?")) {

            $.ajax({
                type: "DELETE",
                url: `/api/admin/user/${id}`,
                success: function (res) {

                    toast("Deleted successfully!");
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000)
                },
                error: function (res) {
                    toast("Error while deleting.");
                }
            })
        }
    }

    function enableCustomer(id,active)
    {
            var userId = id;
            var isActive = active;
            isActive = !(isActive == "true");
            var enableDisableText = isActive ? "enable" : "disable";
            if (confirm(`do you want to ${enableDisableText} this user?`)) {

                $.ajax({
                    type: "PUT",
                    url: `/api/admin/user-active/${userId}`,
                    data: {
                        active: isActive
                    },
                    success: function (res) {
                        toast("Updated successfully!");
                        setTimeout(function () {
                            window.location.reload();
                        }, 1000)
                    },
                    error: function (res) {
                        toast("Error while Updating.");
                    }
                })
            }
    }
    function updateTextControls(e){
        var item = e.selected[0]; 
        $("#btnTextSize").val(item.fontSize);
        if(item.charSpacing)
        { $("#text-letter-spacing").val(item.charSpacing);}
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
        
        $("#fontlist").text(item.fontFamily);
        
     }

 

// function loadUserProject(id) {
//     $loader.removeClass("hidden");
//     state.isPreviewCanvas = false;
//     var group = [];
//     //$("#btnBack").trigger("click");
//     $.get(`/api/user-project/${id}`, function (res) {
//         $loader.addClass("hidden");
//         const json = JSON.parse(res.data.json);
//         if (! json) {
//             return;
//         }
//         canvas.clear();
//         /// loading design 
//         canvas.setDimensions({width:502,height:500})
//         canvas.loadFromJSON(json, function () {
//             $("#btn-step-design").click();
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
//             $("#admin-main-canvas-logo").css({"width":`${__w}px`,"height":`${__h}px`,"padding":"1px","left":"21px"});
            
//             canvasPrev.setBackgroundImage(loadedObjects, canvasPrev.renderAll.bind(canvasPrev));
//             canvasPrev.renderAll();
//             loadedObjects.center().setCoords();
//             res.data.meta = res.template.meta;
//             loadTemplateDetails(res.data, loadedObjects._objects)
           


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

function onPageLoad(context){
updateCounts(context.counts);
}

function updateCounts(counts){
    $("#countCustomProjects").text(counts.customProjects);
}

   
function getUserDownloads(userId, userName)
{
    let fromDt = $("#datepickerFrom").val(); 
    let toDt = $("#datepickerTo").val();
    let paramsDt = "";
    if(fromDt && toDt){
        paramsDt = `?from=${fromDt}&to=${toDt}`;
    }else if(fromDt){
        paramsDt = `?from=${fromDt}`;
    }else if(toDt){
        paramsDt = `?to=${toDt}`;
    }
    $loader.removeClass("hidden");
  $.ajax({
                type: "GET",
                url: `/api/filter/user-downloads/${userId}${paramsDt}`,
                success: function (res) {
                  $loader.addClass("hidden");
                  let d = [];
                  if(res.data)
                  {  
                    $("#lbl-download-dates").text(`Date: ${fromDt?" From "+fromDt+" - ":""} ${toDt}`)
                    showDownloadHistory(userId,userName,res.data) }

                },error: function (request, status, error) {
                  $loader.addClass("hidden");
                },
               
            });
}

function getUserSavedProjects(userId, userName)
{
    $loader.removeClass("hidden");
  $.ajax({
                type: "GET",
                url: `/api/filter/user-projects/${userId}`,
                success: function (res) {
                  $loader.addClass("hidden");
                  let d = [];
                  if(res.data)
                  {  showProjectHistory(userId,userName,res.data) }

                },error: function (request, status, error) {
                  $loader.addClass("hidden");
                },
               
            });
}

function showProjectHistory(userId, title, userProjects) {
    let _title = `${title}`;

    let filteredUserProjects = userProjects.filter(function (f) {
        return f.uploaded_by == userId
    });

    let table = `<div class='table-responsive'>
    <table  class='table mg-b-0'>
        <thead>
            <th>Project Name</th>
            <th>Created Date</th>
            <th>View</th>
            </thead>
            <tbody>{tr}</tbody>
      </table></div>`;
    let tr = `<tr>{td}</tr>`;
    let temp = "";
    filteredUserProjects ?. forEach(item => {
        let d = {};
        if (item.data) {
            d = JSON.parse(item.data);
        }

        temp += tr.replace(
            "{td}",
            `<td><strong>${ item.title }</strong></td>
  <td>${ new Date(item.created_dt).toLocaleString() }</td>
  <td><a href='/app/admin/user-project/${item._id}'   >View</a></td>` ) });
    table = table.replace("{tr}", temp);
    if (filteredUserProjects.length == 0) {
        table = "<p clsss='pd-y-20'>No Records Found.</p>"
    }
    $("#projectHistoryTitle").text(_title);
    $("#projectHistoryContent").html(table);
}
var filteredHistory =[]; 
$("#btnFindDownloadHistory").on("click",function(){
    alert(filteredHistory)
})

function showDownloadHistory(userId, title, filteredDownloads) {
    selectedHistory = {
          userId: userId,
          title: title
      }
      let _title = `${title}`;
      filteredHistory = filteredDownloads ? filteredDownloads : history.filter(function (f) {
          return f.user_id == userId
      });
      let table = `<div class='table-responsive' style='max-height:400px;overflow-y:auto'>
      <table  class='table mg-b-0 tx-12 tx-bold tx-uppercase' >
          <thead>
              <th>Download Name</th>
              <th>Template Name</th>
              <th>Part No.</th>
              <th>Download Date</th>
              </thead>
              <tbody>{tr}</tbody>
        </table></div>`;
      let tr = `<tr>{td}</tr>`;
      let temp = "";
      filteredHistory ?. forEach(item => {
          let d = {};
          if (item.data) {
              d = JSON.parse(item.data);
          }
          temp += tr.replace(
              "{td}",
              `
    <td><strong>${ item.content }</strong></td>
    <td >${ d.title || 'N/A' }</td><td>${d.ref_code}</td><td>${ new Date(item.created_dt).toLocaleString() }</td>` ) });
      table = table.replace("{tr}", temp);
      if (filteredHistory.length == 0) {
          table = "<p clsss='pd-y-20'>No Records Found.</p>"
      }
      $("#lbl-download-count").text(filteredHistory.length)
      $("#downloadHistoryTitle").text(_title);
      $("#downloadHistoryContent").html(table);
  }