(()=>{
  
  var canvas = new fabric.StaticCanvas("admin-main-canvas",{
    preserveObjectStacking:true
})

 $adminImageUpload              =   $("#admin-image-upload");
 $btnImageUploadHidden          =   $(`#admin-image-upload-hidden`);
 $templateContainer             =   $("#template-container"); 
 $btnSaveDesign                 =   $("#save-design"); 

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
 
 var selectedDesign  = {};
 
 const dpi = 72; 

 
 function InitUIEvents()
 {
  $btnSaveDesign.on("click",function(){
    if(!selectedDesign.base64)
    {  toast("Error: Please upload template!"); return; }
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

 function onDesignLoaded(o)
 {  
    enabledDesignCtrl({});
    var msg = `Sheet size: Width: ${o.width/dpi}", Height: ${o.height/dpi}", Logo size: Width: ${o.logoWidth/dpi}, Height: ${o.logoHeight/dpi}, Total Logos: ${o.logoCount}`;
    $pageTitle.html(msg);    
 }

  function onSaveTemplate(){
    var m = selectedDesign.meta;
    var meta = {
        width: m.width, 
        height: m.height,
        objects: m.logoCount, 
        objectWidth: m.logoWidth,
        objectWidth: m.logoHeight,
        title: $templateTitle.val()
    }; 


    if(!meta.title || meta.title.length > 100) 
      { 
        toast("Error: Please Enter Title!")
        return; 
      }
    
    var MIME_TYPE = "image/png";
    var imgURL = selectedDesign.base64;    
    $.ajax({
        type: "POST",
        url: "/app/admin/save-template",
        data: {  
            imgBase64: imgURL,
            desc:$("#admin-design-title").val() || "N/A",
            meta: JSON.stringify(meta) }
    }).done(function(o) 
    {  
      
      toast("Template has been successfully saved.");
    
  
  });

      }
  
  const processFiles = (files) => {
    if (files.length === 0) return;
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