(($)=>{
    const dpi = 72;
    const letterPageSize = {
        width:(8.5 * dpi),
        height:(11 * dpi)
    }

    const layerHtml = `<div class="media d-block d-flex layer-item object-options" id='{id}'  >
    <div class="d-block mg-sm-r-10 img"> <img src="{src}" class="wd-40" alt="Image" ></div>
    <small class="d-sm-flex layer-label">Layer {index}</small>
    <div class="d-sm-flex layers-controls" style="display:none !important">
    <i class='ion-ios-copy-outline duplicate main-tool-button'  id='duplicate' title='duplicate' ></i>
    <i class='ion-ios-upload-outline bring-fwd' title="move up" id="bring-fwd" ></i>
    <i class='ion-ios-download-outline bring-back' title="move down" id="bring-back" ></i>
    <i class='ion-ios-arrow-thin-up' title="top" ></i>
    <i class='ion-ios-arrow-thin-down' title="down" ></i>
    <i class='ion-ios-trash-outline delete main-tool-button' id='delete' title='delete' ></i>
    </div>
</div>` 


    //vars 
    $btnDownloadPDF = $("#btn-download-pdf"); 
    $btnUploadImage = $("#btn-upload-img"); 
    $btnUploadImageHidden = $("#btn-upload-img-hidden"); 
    $layers = $("#layers");
    $repeatDesign = $("#repeatdesign");
    
         


   

    var canvas = new fabric.Canvas("client-main-canvas",{
        preserveObjectStacking:true
    })


   
    // Events: 

    

    function loadDefaultSVGTemplate()
    {
        var group = [];
        $.get(`/api/svg-templates/default`, function (data) {
            const svgBase64 = data.base64;
            canvas.setDimensions({width: letterPageSize.width, height: letterPageSize.height});

            var b = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjEycHgiIGhlaWdodD0iNzkycHgiIHZpZXdCb3g9IjAgMCA2MTIgNzkyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2MTIgNzkyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNBN0E5QUMiIGQ9Ik0xNTMuMzI0LDIzNC4wNTRjNDUuNDIyLTM2LjQ3NSw3Ni4yMjItNjUuMzM5LDkyLjQwMi04Ni41NDljMTYuMjM4LTIxLjE2NSwyNC4zMjgtNDEuNDczLDI0LjMyOC02MC45MjcNCgljMC0xNS4yMi01LjA5My0yNy40NjgtMTUuMjgxLTM2LjdjLTEwLjE4Ni05LjIzMS0yMy41NDktMTMuODI0LTQwLjAyOC0xMy44MjRjLTEwLjc4NiwwLTIyLjc3Myw0LjQyOC0zMi44MzksMTAuMDExDQoJYy0xMC4wNjcsNS41ODMtMTguNTE1LDIxLjUwMS0yOC41ODIsMzMuMDI5Yy0xMC4wNjctMTEuNTI4LTE4LjU3NS0yNy40NDYtMjguNzYxLTMzLjAyOWMtMTAuMTg3LTUuNTgzLTIyLjI5NC0xMC4wMTEtMzMuMDgtMTAuMDExDQoJYy0xNi41OTksMC0zMC4wMjEsNC41OTMtNDAuMTQ5LDEzLjgyNGMtMTAuMTg3LDkuMjMyLTE1LjI4LDIxLjQ4LTE1LjI4LDM2LjdjMCwxOS4zNjMsOC4wODksMzkuNTgzLDI0LjI2OSw2MC43NDcNCglDNzYuNTYyLDE2OC40ODksMTA3LjU0MiwxOTcuMzk5LDE1My4zMjQsMjM0LjA1NHoiLz4NCjxwYXRoIGZpbGw9IiNBN0E5QUMiIGQ9Ik0xNTMuMzI0LDQ5Ni44NTRjNDUuNDIyLTM2LjQ3NSw3Ni4yMjItNjUuMzM5LDkyLjQwMi04Ni41NDljMTYuMjM4LTIxLjE2NSwyNC4zMjgtNDEuNDczLDI0LjMyOC02MC45MjcNCgljMC0xNS4yMi01LjA5My0yNy40NjgtMTUuMjgxLTM2LjdjLTEwLjE4Ni05LjIzMS0yMy41NDktMTMuODI0LTQwLjAyOC0xMy44MjRjLTEwLjc4NiwwLTIyLjc3Myw0LjQyOC0zMi44MzksMTAuMDExDQoJYy0xMC4wNjcsNS41ODMtMTguNTE1LDIxLjUwMS0yOC41ODIsMzMuMDI5Yy0xMC4wNjctMTEuNTI4LTE4LjU3NS0yNy40NDYtMjguNzYxLTMzLjAyOWMtMTAuMTg3LTUuNTgzLTIyLjI5NC0xMC4wMTEtMzMuMDgtMTAuMDExDQoJYy0xNi41OTksMC0zMC4wMjEsNC41OTMtNDAuMTQ5LDEzLjgyNGMtMTAuMTg3LDkuMjMyLTE1LjI4LDIxLjQ4LTE1LjI4LDM2LjdjMCwxOS4zNjMsOC4wODksMzkuNTgzLDI0LjI2OSw2MC43NDcNCglDNzYuNTYyLDQzMS4yODksMTA3LjU0Miw0NjAuMTk5LDE1My4zMjQsNDk2Ljg1NHoiLz4NCjxwYXRoIGZpbGw9IiNBN0E5QUMiIGQ9Ik00NTkuMzI0LDIzNC4wNTRjNDUuNDIyLTM2LjQ3NSw3Ni4yMjItNjUuMzM5LDkyLjQtODYuNTQ5YzE2LjIzOS0yMS4xNjUsMjQuMzI5LTQxLjQ3MywyNC4zMjktNjAuOTI3DQoJYzAtMTUuMjItNS4wOTMtMjcuNDY4LTE1LjI4LTM2LjdjLTEwLjE4Ny05LjIzMS0yMy41NS0xMy44MjQtNDAuMDI4LTEzLjgyNGMtMTAuNzg2LDAtMjIuNzczLDQuNDI4LTMyLjgzOSwxMC4wMTENCgljLTEwLjA2Nyw1LjU4My0xOC41MTYsMjEuNTAxLTI4LjU4MiwzMy4wMjljLTEwLjA2Ny0xMS41MjgtMTguNTc1LTI3LjQ0Ni0yOC43NjItMzMuMDI5cy0yMi4yOTQtMTAuMDExLTMzLjA3OS0xMC4wMTENCgljLTE2LjYsMC0zMC4wMjEsNC41OTMtNDAuMTQ5LDEzLjgyNGMtMTAuMTg3LDkuMjMyLTE1LjI4LDIxLjQ4LTE1LjI4LDM2LjdjMCwxOS4zNjMsOC4wODksMzkuNTgzLDI0LjI3LDYwLjc0Nw0KCUMzODIuNTYyLDE2OC40ODksNDEzLjU0MiwxOTcuMzk5LDQ1OS4zMjQsMjM0LjA1NHoiLz4NCjxwYXRoIGZpbGw9IiNBN0E5QUMiIGQ9Ik00NTkuMzI0LDQ5Ni44NTRjNDUuNDIyLTM2LjQ3NSw3Ni4yMjItNjUuMzM5LDkyLjQtODYuNTQ5YzE2LjIzOS0yMS4xNjUsMjQuMzI5LTQxLjQ3MywyNC4zMjktNjAuOTI3DQoJYzAtMTUuMjItNS4wOTMtMjcuNDY4LTE1LjI4LTM2LjdjLTEwLjE4Ny05LjIzMS0yMy41NS0xMy44MjQtNDAuMDI4LTEzLjgyNGMtMTAuNzg2LDAtMjIuNzczLDQuNDI4LTMyLjgzOSwxMC4wMTENCgljLTEwLjA2Nyw1LjU4My0xOC41MTYsMjEuNTAxLTI4LjU4MiwzMy4wMjljLTEwLjA2Ny0xMS41MjgtMTguNTc1LTI3LjQ0Ni0yOC43NjItMzMuMDI5cy0yMi4yOTQtMTAuMDExLTMzLjA3OS0xMC4wMTENCgljLTE2LjYsMC0zMC4wMjEsNC41OTMtNDAuMTQ5LDEzLjgyNGMtMTAuMTg3LDkuMjMyLTE1LjI4LDIxLjQ4LTE1LjI4LDM2LjdjMCwxOS4zNjMsOC4wODksMzkuNTgzLDI0LjI3LDYwLjc0Nw0KCUMzODIuNTYyLDQzMS4yODksNDEzLjU0Miw0NjAuMTk5LDQ1OS4zMjQsNDk2Ljg1NHoiLz4NCjxwYXRoIGZpbGw9IiNBN0E5QUMiIGQ9Ik0xNTMuMzI0LDc1Ni4wNTRjNDUuNDIyLTM2LjQ3NSw3Ni4yMjItNjUuMzM5LDkyLjQwMi04Ni41NDljMTYuMjM4LTIxLjE2NSwyNC4zMjgtNDEuNDczLDI0LjMyOC02MC45MjcNCgljMC0xNS4yMi01LjA5My0yNy40NjgtMTUuMjgxLTM2LjdjLTEwLjE4Ni05LjIzLTIzLjU0OS0xMy44MjQtNDAuMDI4LTEzLjgyNGMtMTAuNzg2LDAtMjIuNzczLDQuNDI5LTMyLjgzOSwxMC4wMTINCgljLTEwLjA2Nyw1LjU4My0xOC41MTUsMjEuNTAxLTI4LjU4MiwzMy4wMjhjLTEwLjA2Ny0xMS41MjctMTguNTc1LTI3LjQ0NS0yOC43NjEtMzMuMDI4Yy0xMC4xODctNS41ODMtMjIuMjk0LTEwLjAxMi0zMy4wOC0xMC4wMTINCgljLTE2LjU5OSwwLTMwLjAyMSw0LjU5NC00MC4xNDksMTMuODI0Yy0xMC4xODcsOS4yMzItMTUuMjgsMjEuNDgtMTUuMjgsMzYuN2MwLDE5LjM2Myw4LjA4OSwzOS41ODMsMjQuMjY5LDYwLjc0Nw0KCUM3Ni41NjIsNjkwLjQ4OSwxMDcuNTQyLDcxOS4zOTksMTUzLjMyNCw3NTYuMDU0eiIvPg0KPHBhdGggZmlsbD0iI0E3QTlBQyIgZD0iTTQ1OS4zMjQsNzU2LjA1NGM0NS40MjItMzYuNDc1LDc2LjIyMi02NS4zMzksOTIuNC04Ni41NDljMTYuMjM5LTIxLjE2NSwyNC4zMjktNDEuNDczLDI0LjMyOS02MC45MjcNCgljMC0xNS4yMi01LjA5My0yNy40NjgtMTUuMjgtMzYuN2MtMTAuMTg3LTkuMjMtMjMuNTUtMTMuODI0LTQwLjAyOC0xMy44MjRjLTEwLjc4NiwwLTIyLjc3Myw0LjQyOS0zMi44MzksMTAuMDEyDQoJYy0xMC4wNjcsNS41ODMtMTguNTE2LDIxLjUwMS0yOC41ODIsMzMuMDI4Yy0xMC4wNjctMTEuNTI3LTE4LjU3NS0yNy40NDUtMjguNzYyLTMzLjAyOHMtMjIuMjk0LTEwLjAxMi0zMy4wNzktMTAuMDEyDQoJYy0xNi42LDAtMzAuMDIxLDQuNTk0LTQwLjE0OSwxMy44MjRjLTEwLjE4Nyw5LjIzMi0xNS4yOCwyMS40OC0xNS4yOCwzNi43YzAsMTkuMzYzLDguMDg5LDM5LjU4MywyNC4yNyw2MC43NDcNCglDMzgyLjU2Miw2OTAuNDg5LDQxMy41NDIsNzE5LjM5OSw0NTkuMzI0LDc1Ni4wNTR6Ii8+DQo8L3N2Zz4NCg==";

            fabric.loadSVGFromURL(b,function(objects,options) {               
                var loadedObjects = new fabric.Group(group);     
                canvas.orignalBackgroundImage = loadedObjects;                      
                canvas.setBackgroundImage(loadedObjects, canvas.renderAll.bind(canvas));
                canvas.renderAll();
               
            },function(item, object) {
                    object.set('id',item.getAttribute('id'));
                    group.push(object);
            });
        })

    }

    function initUIEvents()
    {
        $repeatDesign.on("click",function(e){
            var txt = $(e.currentTarget).find(".active").text();
            if(txt == "ON"){
                var canvasSVGLogo = canvas.backgroundImage._objects[0];
                if(!canvasSVGLogo)
                {alert("No logo found in SVG template");}
           
                canvasSVGLogo.scaleToWidth(canvas.width/1.5);
                canvas.setBackgroundImage(canvasSVGLogo, canvas.renderAll.bind(canvas));
                canvas.renderAll();
                
            }
            else {
            debugger;
            canvas.setBackgroundImage(canvas.orignalBackgroundImage, canvas.renderAll.bind(canvas));
                canvas.renderAll();
              
                
            }
        })

       
       
    }
  

    function initCanvasEvents(){
        canvas.selectedLayerId = null; 
        canvas.on("object:added",(o)=>{
            o.target.id = `obj${canvas._objects.length}`;
            o.target.index = canvas._objects.length-1;
            addLayer(o);
        })
    }


    // Layers: 
    function addLayer(o){
        var temp = layerHtml; 
        var obj = o.target;        
         temp = temp.replace("{id}",obj.id)
         .replace("{src}",obj._element?.currentSrc)
         .replace("{_id}",obj.id)
         .replace("{index}", obj.index);
         $layers.prepend(temp);
         onLayerAdded($(`#${obj.id}`),o);
        
    }



    function onLayerAdded($elem, obj){
        $elem.on("click",function($event){
            onLayerSelected($elem, obj);
        })
    }

    function onLayerSelected($elem, obj){
        showLayerControls($elem, obj);        
    }
    function showLayerControls($elem, obj)
    {
        var target = obj.target;
        var preObj = canvas.selectedObj?.target;
        if(preObj?.id != target.id)
        { 
            $(`#${target.id} .layers-controls`).show();
            $(`#${target.id}`).addClass("selected-layer");
            canvas.discardActiveObject();
            canvas.requestRenderAll();
            canvas.setActiveObject(canvas.item(target.index));
            if(preObj)
            {
                $(`#${preObj.id} .layers-controls`)
                .attr("style","display:none !important");
                $(`#${preObj.id}`).removeClass("selected-layer");                
            }
            canvas.selectedObj = obj;
        }
       
    }

  

  

    // UI events:
    $btnDownloadPDF.on("click",()=>{
        alert("worked");
        var pdf = new jsPDF("p", "pt", "letter");              
              //width = pdf.internal.pageSize.getWidth();
              //height = pdf.internal.pageSize.getHeight();
              var width = canvas.width; 
              var height = canvas.height;
              var pdf = null;   
              pdf = new jsPDF('p', 'pt',[width, height]);
              width = pdf.internal.pageSize.getWidth();
              height = pdf.internal.pageSize.getHeight();
              var imgData = canvas.toDataURL('image/svg+xml');
              pdf.addImage(imgData, 'svg+xml', 0, 0, width, height);
              //var dataURL = canvas.toDataURL();
              //pdf.addImage(dataURL, 'SVG', 0, 0);
              pdf.save("download.pdf");
    }); 

    $btnUploadImage.on("click",()=>{
            $btnUploadImageHidden.click();
    })

    $btnUploadImageHidden.on("change",(e)=>{
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
          //if (file.type === 'image/svg+xml') {
            reader.onload = (e) => {
                fabric.Image.fromURL(e.target.result, (img) => {
                    img.scaleToHeight(300);
                   img.globalCompositeOperation = 'source-atop';
                   canvas.add(img).renderAll();
                  //canvaspreview.item(0).cloneObject = canvas.item(1);
                 })
            }
            reader.readAsDataURL(file)
            continue
         // }
    
        }
      }



      initUIEvents();
      initCanvasEvents();
      loadDefaultSVGTemplate();

})($);


