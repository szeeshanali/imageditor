(()=>{
  
  var canvas = new fabric.StaticCanvas("admin-main-canvas",{
    preserveObjectStacking:true
})

 $adminImageUpload              =   $("#admin-image-upload");
 $btnImageUploadHidden          =   $(`#admin-image-upload-hidden`);
 $templateContainer             =   $("#template-container"); 
 $btnSaveDesign                 =   $("#save-design"); 
 $cancelDesign                 =   $("#cancel-design"); 

 var $dropdownTemplateSize      = $("#dropdownTemplateSize");
 var $dropdownCanvasShape       = $("#dropdownCanvasShape");
 var $inputTemplateShapeWidth   = $("#inputTemplateShapeWidth");
 var $inputTemplateShapeHeight  = $("#inputTemplateShapeHeight");
 var $inputTemplateShapeLeft    = $("#inputTemplateShapeLeft");
 var $inputTemplateShapeTop     = $("#inputTemplateShapeTop");
 var $inputRows                 = $("#inputRows");
 var $inputColumns              = $("#inputColumns");
 var $templateTitle             = $("#admin-design-title");
 var $btnUploadTemplate         = $("#btn-upload-template");
 var $adminDesignCtrl           = $(".admin-design-ctrl");
 var $pageTitle                 = $(".am-pagetitle");
 

  // Template Upload: 

  $kopykakePartNo    =       $("#admin-kopykake-part");
  $inputDesignName    =       $("#admin-design-name");
  $inputThumbnailName =       $("#admin-design-title");
  $btnActiveDesign    =       $("#design-active");
  $btnDefaultDesign   =       $("#design-default");
  $inputFileName      =       $("#admin-file-name");
  $inputDesignLink    =       $("#admin-design-link");
  $inputOrderNo       =       $("#admin-display-order");
  $selectPageSize     =       $("#admin-page-size");
  $inputLogoPerPage   =       $("#admin-logo-count");
  $templateThumb      =       $("#templatepanel .template")

  $editTemplateDesignName   =       $("#editTemplateDesignName");
  $editTemplateThumbName    =       $("#editTemplateThumbName");

 var selectedDesign  = {};
 var designFlags = {active:false, default:false, submitted:false}; 
 
 const dpi = 72; 

 
 function InitUIEvents()
 {

  $templateThumb.on("click",(e)=>{
    var templateId = e.currentTarget.id; 
    if(templateId){
      loadSVGTemplate(templateId);
    }else{
      toast(`Can't load Template.`)
    }
  })

  $btnActiveDesign.on("click",(e)=>{
    if(!selectedDesign.base64) return; 
    setTimeout(function(){
      var txt = $(e.currentTarget).find(".active").text();
      designFlags.active = (txt == "ON");  
    },500);
   
  })
  $cancelDesign.on("click",(e)=>{
    onDesignReload();
   })
  $btnDefaultDesign.on("click",(e)=>{
    if(!selectedDesign.base64) return; 
    setTimeout(function(){
      var txt = $(e.currentTarget).find(".active").text();
      designFlags.default = (txt == "ON");
    },500)
   
  })
  
  $btnSaveDesign.on("click",function(){
   
    if(!selectedDesign.base64)
    {  toast("Error: Please upload a Template"); return; }
      onSaveTemplate();
   })
  
   $adminImageUpload.on("click",function () {
      $btnImageUploadHidden.click();
    })
  
    $btnImageUploadHidden.on('change', function (e) {
      if (e.target.files.length === 0) return;
      processFiles(e.target.files)
    })
   
 }
 function enabledDesignCtrl(o){
  $adminDesignCtrl.find(".disabled").removeClass("disabled");
}

function loadSVGTemplate(id)
{
    var group = [];
    $.get(`/api/admin/svg-templates/${id}`, function (data) {
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
           $("#upload-template-splash").remove();
           $(".tab-content .tab-pane").each((i,e)=>
           { $(e).removeClass("active"); })    
          $("#edit-template").addClass("active");
        },function(item, object) {
                object.set('id',item.getAttribute('id'));
                group.push(object);
        });

        loadTemplateInfo(data);
    })

}

function loadTemplateInfo(template)
{
  $editTemplateDesignName.val(template.name);
  $editTemplateThumbName.val(template.title);
  //$btnActiveDesign    =       $("#design-active");
  // $btnDefaultDesign   =       $("#design-default");
  // $inputFileName      =       $("#admin-file-name");
  // $inputDesignLink    =       $("#admin-design-link");
  // $inputOrderNo       =       $("#admin-display-order");
  // $selectPageSize     =       $("#admin-page-size");
  // $inputLogoPerPage   =       $("#admin-logo-count");
  // $templateThumb      = $("#templatepanel .template")
}


function onDesignReload(o){
  location.reload();

}
 function onDesignLoaded(o)
 {  
    enabledDesignCtrl({});
    var msg = `Sheet size: Width: ${(o.width/dpi).toFixed(2)}", Height: ${(o.height/dpi).toFixed(2)}", Logo size: Width: ${(o.logoWidth/dpi).toFixed(2)}", Height: ${(o.logoHeight/dpi).toFixed(2)}", Total Logos: ${o.logoCount}`;
    $pageTitle.html(msg);    
 }

  function onSaveTemplate(){
    if(designFlags.submitted ){

      $.ajax({
        type: "POST",
        url: "/app/admin/save-template",
        data: {  
            
            desc      : "",
            meta      : JSON.stringify(meta) ,
            title     : $inputThumbnailName.val(),
            name      : $inputDesignName.val(),
            file_name : $inputFileName.val(),
            file_ext  : ".svg",
            order_no  : $inputOrderNo.val(),
            active    : designFlags.active,
            base64    : dataUrl,
            type      : "template",
            by_admin  : true,
            default   : designFlags.default,
            link      : $inputDesignLink.val(),
            logos     : $inputLogoPerPage.val(), 
            ref_code  : $kopykakePartNo.val() 
        },
        success:function(res){
          designFlags.submitted = true; 
          toast("Template has been successfully uploaded.");
        },
        error:function(res){
          designFlags.submitted = false; 
          toast("Error while uploading template.");
        }
    })

     // toast("Design has already been submitted. Please upload new design.");
      return; 
    }
    var m = selectedDesign.meta;
    var meta = {
        width: m.width, 
        height: m.height,
        objects: m.logoCount, 
        objectWidth: m.logoWidth,
        objectWidth: m.logoHeight,
        title: $templateTitle.val(),
        pageSize: $selectPageSize.val(),
    }; 


    if(!meta.title || meta.title.length > 100) 
      { 
        toast("Error: Please Enter Title!")
        return; 
      }
    
    var MIME_TYPE = "image/png";
    var dataUrl = selectedDesign.base64;    
    $.ajax({
        type: "POST",
        url: "/app/admin/save-template",
        data: {  
            
            desc      : "",
            meta      : JSON.stringify(meta) ,
            title     : $inputThumbnailName.val(),
            name      : $inputDesignName.val(),
            file_name : $inputFileName.val(),
            file_ext  : ".svg",
            order_no  : $inputOrderNo.val(),
            active    : designFlags.active,
            base64    : dataUrl,
            type      : "template",
            by_admin  : true,
            default   : designFlags.default,
            link      : $inputDesignLink.val(),
            logos     : $inputLogoPerPage.val(), 
        },
        success:function(res){
          designFlags.submitted = true; 
          toast("Template has been successfully uploaded.");
        },
        error:function(res){
          designFlags.submitted = false; 
          toast("Error while uploading template.");
        }
    })
  }
  
  const processFiles = (files) => {
    if (files.length === 0) return;
    designFlags.submitted = false; 
    const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml']

    for (let file of files) {
      // check type
      if (!allowedTypes.includes(file.type)) continue
      let reader = new FileReader()
      // handle svg
      if (file.type === 'image/svg+xml') {
        reader.onload = (f) => {
          
            var svgBase64 = f.srcElement.result;
            selectedDesign.base64 = svgBase64; 
            canvas.clear();
            var group =[];
            fabric.loadSVGFromURL(svgBase64,function(objects,options) {  
              selectedDesign.meta = {
                width     : options.viewBoxWidth, 
                height    : options.viewBoxHeight,
                logoCount : objects.length,
                logoWidth : objects[0].width, 
                logoHeight: objects[0].height


              }
              var loadedObjects = new fabric.Group(group);
              var templateWidth = 612;
              var templateHeight = 792;      
              canvas.setDimensions({top:0, width: templateWidth, height: templateHeight});
              //canvas.orignalBackgroundImage = loadedObjects;                      
              canvas.setBackgroundImage(loadedObjects,canvas.renderAll.bind(canvas));
             // canvas.add(loadedObjects);
              canvas.renderAll();
              onDesignLoaded(selectedDesign.meta);
              $("#upload-template-splash").remove();
             // loadedObjects.center().setCoords();
             
          },function(item, object) {
                  object.set('id',item.getAttribute('id'));
                  group.push(object);
          });
            //$templateContainer.html(`<img src=${svgBase64} '/>`); 
           // 
            // $("#template-info-panel").removeClass("hidden");
            // $('#ruler-area').ruler({
            //     vRuleSize: 18,
            //     hRuleSize: 18,
            //     showCrosshair : false,
            //     showMousePos: true
            // });    
        }
        reader.readAsDataURL(file);
        continue;
      }else{
        alert("Error: Please Upload SVG File!")
      }

    }
  }


  
 InitUIEvents();

  function toast(message) {
    var $toast = $("#snackbar").addClass("show");
    $toast.text(message);
    setTimeout(function(){ 
        $toast.removeClass("show")

    }, 3000);
}
})()