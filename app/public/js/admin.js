(()=>{
 $adminImageUpload      =   $("#admin-image-upload");
 $btnImageUploadHidden  =   $(`#admin-image-upload-hidden`);
 $templateContainer     =   $("#template-container"); 

 $adminImageUpload.on("click",function () {
    $btnImageUploadHidden.click();
  })

  $btnImageUploadHidden.on('change', function (e) {
    alert('change')
    if (e.target.files.length === 0) return;
    processFiles(e.target.files)
  })


  
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
            $templateContainer.html(`<img src=${svgBase64} style='height:650px'/>`); 
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

})()