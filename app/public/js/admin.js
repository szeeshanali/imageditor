(()=>{
 $adminImageUpload      =   $("#admin-image-upload");
 $btnImageUploadHidden  =   $(`#admin-image-upload-hidden`);
 $templateContainer     =   $("#template-container"); 
 $btnSaveTemplate       =   $("#saveTemplate"); 

 var $dropdownTemplateSize  = $("#dropdownTemplateSize");
 var $dropdownCanvasShape   = $("#dropdownCanvasShape");
 var $inputTemplateShapeWidth = $("#inputTemplateShapeWidth");
 var $inputTemplateShapeHeight = $("#inputTemplateShapeHeight");
 var $inputTemplateShapeLeft = $("#inputTemplateShapeLeft");
 var $inputTemplateShapeTop = $("#inputTemplateShapeTop");
 var $inputRows = $("#inputRows");
 var $inputColumns = $("#inputColumns");
 var $templateTitle = $("#templateTitle");
 
 var templateBase64     = null;

 $btnSaveTemplate.on("click",function(){
  if(!templateBase64)
  { alert("Please upload template."); return; }
    onSaveTemplate();
 })

 $adminImageUpload.on("click",function () {
    $btnImageUploadHidden.click();
  })

  $btnImageUploadHidden.on('change', function (e) {
    if (e.target.files.length === 0) return;
    processFiles(e.target.files)
  })

  function onSaveTemplate(){
    var meta = {
        canvasSize  :  $dropdownTemplateSize.val(),
        canvasTitle :  $templateTitle.val(),
        widthIn     :  $inputTemplateShapeWidth.val()  || "0",
        heightIn    :  $inputTemplateShapeHeight.val() || "0",
        rows        :  $inputRows.val(),
        columns     :  $inputColumns.val(),
        leftCm      :  $inputTemplateShapeLeft.val(), 
        topCm       :  $inputTemplateShapeTop.val(),
        shape       :  $dropdownCanvasShape.val()
    }; 


    if(  !meta.canvasSize 
        || !meta.canvasTitle 
        || !meta.columns 
        || !meta.leftCm 
        || !meta.topCm
        || !meta.rows
        || !meta.columns
        || !meta.widthIn  
        || !meta.heightIn ) 
        {
            alert("Error: Missing template information.")
            return; 
        }
    
    var MIME_TYPE = "image/png";
    var imgURL = templateBase64;    
    $.ajax({
        type: "POST",
        url: "/app/admin/save-template",
        data: {  
            imgBase64: imgURL,
            desc:$("#templateTitle").val() || "",
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
            templateBase64 = svgBase64; 
            $templateContainer.html(`<img src=${svgBase64} '/>`); 
            $("#template-info-panel").removeClass("hidden");
            $('#ruler-area').ruler({
                vRuleSize: 18,
                hRuleSize: 18,
                showCrosshair : false,
                showMousePos: true
            });    
        }
        reader.readAsDataURL(file)
        continue
      }

    }
  }
  function toast(message) {
    var $toast = $("#snackbar").addClass("show");
    $toast.text(message);
    setTimeout(function(){ 
        $toast.removeClass("show")

    }, 3000);
}
})()