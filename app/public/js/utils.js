
const defaults = {
    fontSize:36,
    fontFill: '#000',
    fontFamily:'Comic-Sans',
    strokeWidth: 10,
    logoDisplaySize:500
}

function cropInit(){
    var cropCanvas  = new fabric.Canvas("cropCanvas",               {preserveObjectStacking: true});
    $("#btnCrop").on("click",(e)=>{
        var img = cropCanvas.item(0);
        cropCanvas.isCropped = true;
        crop(img);
         
    }); 
    $("#btnCropDone").on("click",(e)=>{
        if(!cropCanvas.isCropped)
        {return;}
        let rect = new fabric.Rect({
            left: selectionRect.left,
            top: selectionRect.top,
            width: selectionRect.getScaledWidth(),
            height: selectionRect.getScaledHeight(),
            absolutePositioned: true,
        });
    
        
        var cropped = new Image();
    // set src value of canvas croped area as toDataURL
    cropped.src = cropCanvas.toDataURL({
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
        quality:1.0,
        multiplier:3
    });
    
    
    // after onload clear the canvas and add cropped image to the canvas
    cropped.onload = function () {        
        cropCanvas.clear();
        image = new fabric.Image(cropped);
        image.scaleToWidth(rect.width);
        image.scaleToHeight(rect.height);
        var _canvas = canvas; 
        if(state.isPreviewCanvas){
            _canvas = canvasPrev;
        }
        let originalImg = _canvas.getActiveObject(); 
        let objId = originalImg.id; 
        let objIndex = originalImg.index; 
        let originalImageIndex = _canvas.getObjects().indexOf(originalImg);
        _canvas.remove(originalImg);
        _canvas.renderAll(); 


        //let canvasCenter = getCanvasCenter(image.getScaledWidth(),image.getScaledHeight())
        //image.set({left: canvasCenter.left, top: canvasCenter.top})
        image.setCoords();
        image.id = objId; 
        image.index = objIndex;
        image.globalCompositeOperation = 'source-atop';
        image.subType = "cropped";
        image.set({
            originX:"center",
            originY:"center",
        }) ;
        
        _canvas.centerObject(image);
        _canvas.insertAt(image,originalImageIndex,false);        
        image.setCoords();
        _canvas.renderAll();
        //addLayer();
    };
    
    })
    $("#btnCropModal").on("click",(e)=>{
        cropRect=null; 
        cropCanvas.clear();
        cropCanvas.isCropped = false; 
        var _canvas = canvas;
        if(state.isPreviewCanvas){
            _canvas = canvasPrev;
        }
        let img = _canvas.getActiveObject(); 
        if(!img)
        {toast("Please select image.");return;}
        let _img =new fabric.Image(img.getElement());
        let w = img.getScaledWidth(); 
        let h = img.getScaledHeight();   
        _img.scaleToWidth(w);
        _img.scaleToHeight(h);
        cropCanvas.setDimensions({width:w,height:h})
        cropCanvas.add(_img);
        cropCanvas.renderAll();
        addSelectionRect(_img);
    
    })

    function crop(currentImage) {
    
        let rect = new fabric.Rect({
            left: selectionRect.left,
            top: selectionRect.top,
            width: selectionRect.getScaledWidth(),
            height: selectionRect.getScaledHeight(),
            absolutePositioned: true,
        });
    
        // add to the current image clicpPath property
        currentImage.clipPath = rect;
    
        // remove the mask layer
        cropCanvas.remove(selectionRect);
    
        // init new image instance
        var cropped = new Image();
        // set src value of canvas croped area as toDataURL
        cropped.src = cropCanvas.toDataURL();
    
     
        // after onload clear the canvas and add cropped image to the canvas
        cropped.onload = function () {
            //canvas.clear();
            image = new fabric.Image(cropped);
            image.left = rect.left;
            image.top = rect.top;
            image.scaleToWidth(rect.width),
            image.scaleToHeight(rect.height),
        
            image.setCoords();
            //let originalImage = canvas.getActiveObject();
            //canvas.remove(originalImage);
            //cropCanvas.add(image);
            cropCanvas.renderAll();
        };
    }
    function addSelectionRect(currentImage) {
        selectionRect = new fabric.Rect({
            fill: "rgba(0,0,0,0.3)",
            originX: "left",
            originY: "top",
            stroke: "black",
            opacity: 1,
            width: currentImage.getScaledWidth()-50,
            height: currentImage.getScaledHeight()-50,
            hasRotatingPoint: false,
            transparentCorners: true,
            
            cornerSize: 12,
            padding: 0,
            borderDashArray: [3, 3],
            borderScaleFactor: 1.3,
        });
        //selectionRect.scaleToWidth(200);
        cropCanvas.centerObject(selectionRect);
        cropCanvas.add(selectionRect);
        cropCanvas.setActiveObject(selectionRect);
    
    }
}



function getPageFormatByDimensions(widthPx, heightPx)
{
    let wi = widthPx/dpi; 
    let hi = heightPx/dpi;
    if(wi === 8.5 && hi===11)
        return "Letter";
    if(wi === 11 && hi===17)
        return "Tabloid";
    if(wi === 17 && hi===11)
        return "Ledger";         
    if(wi === 8.5 && hi===14)
        return "Legal";
    
    console.log(`page format is not handled for this dimensions. ${wi}x${hi}`);
    return "Letter";
}


function isSessionExpired(data){
    if (typeof(data) === 'string') {
        toast(`Your session has expired. Redirecting to the Login page...`);
        setTimeout(function(){
            window.location.reload();
        },2000)
        return true; 
    }
    return false;


}

function getInches(widthInPx, heightInPx)
{
   
    const w = getInch(widthInPx);
    const h = getInch(heightInPx);
    return `${w.toFixed(1)}x${h.toFixed(1)}`;
}

function getInch(size)
{
    return size/dpi;
}


const cache = (function(){

    function get(key){
        return localStorage.getItem(key);
    }
    function set(key,value){
        localStorage.setItem(key,value);
    }
    function remove(key){
        localStorage.removeItem(key);
    }
    function exists(key)
    {

        return !(localStorage.getItem(key) === null);
    }

    return {
        get:get,
        set:set,
        remove:remove,
        exists:exists
    }
})($);

function getCanvasCenter(objectWidth,objectHeight){
    
    if(!canvas || !canvas.context)
    { return {left:0,top:0}}

    if(objectWidth>canvas.width)
    { return { left:0, top: 0 } }

    return {
        left:    (canvas.width/2)-(objectWidth/2),
        top:     (canvas.height/2)-(objectHeight/2)
    }

}

function getFormattedDate(dt){
    dt = new Date(dt);
    const month = (dt.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = dt.getDate().toString().padStart(2, '0');
    const year = dt.getFullYear();
    const hours = dt.getHours().toString().padStart(2, '0');
    const minutes = dt.getMinutes().toString().padStart(2, '0');
    const seconds = dt.getSeconds().toString().padStart(2, '0');
     return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
   // return dt.toLocaleString();
    
}


function curveText(obj)
{
    var flipped = $("#inputFlipText").prop("checked");
    obj.flipped = flipped;
    var ct = new fabric.CurvedText(obj.text, {
        type: 'curved-text',
        diameter: parseInt($("#curveTextCtrl").val()) || 500,
        left: obj.left,
        top: obj.top,
        fontFamily: obj.fontFamily,
        fontSize: obj.fontSize,
        kerning: 0,
        flipped: flipped,
        fill: obj.fill,
        fontSize: obj.fontSize, // in px
        fontWeight: obj.fontWeight,
        fontStyle: obj.fontStyle,
        cacheProperties: fabric.Object.prototype.cacheProperties.concat('diameter', 'kerning', 'flipped', 'fill', 'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'strokeStyle', 'strokeWidth','stroke','textAlign'),
        stroke: $("#inputStrokeText").is(":checked")?$("#strokecolor").val():null,
        strokeWidth: $("#inputStrokeText").is(":checked")?parseInt($("#text-stroke-width").val()):0,
        id: obj.id,
        index:obj.index,
        underline:obj.underline,
        textAlign:obj.textAlign
    })
    return ct; 
}

function textCurrentValues(textObject){
    let selectedFontFamily = $("#fontlist").attr('data-value');
    textObject.fontFamily = selectedFontFamily;
    textObject.fontName = $("#fontlist").text();
    //textObject.cache          = false
    return  new fabric.IText(textObject.text, textObject);
}

function addText(text)
{
    let item            = textCurrentValues(text);
    let canvasCenter    = getCanvasCenter(item.width,item.height);
    item.left           = canvasCenter.left;
    item.top            = canvasCenter.top;
    item.padding        = 15;
    item.dirty = true;
    return item; 
}

function measureImageDimensions(img,canvas)
{
    const factor = 1.5;
    // if(img.height<canvas.height && img.width<canvas.width){
    //     //img.scaleToHeight(ratio);    
    //     return; 
    // }


    if(img.height>canvas.height && img.height>img.width){
        let ratio = canvas.height/factor; 
        img.scaleToHeight(ratio);    
       }else{

        


            let ratio = canvas.width/factor; 
            img.scaleToWidth(ratio);    
       }
}

function getPath(path){
    return path.replace("../app/public/",'');
}
const processFiles = (files) => {
    if (files.length === 0) 
        return;
    
    const allowedTypes = ['image/jpeg','image/gif', 'image/png', 'image/svg+xml', 'application/pdf']
    for (let file of files) {
        var fileSizeInMB = file.size / 1024 / 1024;
        
        var limit = FILE_SIZE_LIMIT;
        limit = limit || 5;
        if (fileSizeInMB > limit) {
            toast(`File size should be less than ${limit}mb.`);
            return;
        }
        // check type
        if (! allowedTypes.includes(file.type)) 
        { 
            toast(`'${file.type}' unsupported image type. `)
            return; }

        let reader = new FileReader()
        // handle svg
        if (file.type === 'application/pdf') {

            reader.onload = function () {
                var typedarray = new Uint8Array(this.result);
                PDFJS.getDocument(typedarray).then(function (pdf) { // you can now use *pdf* here
                    console.log("the pdf has ", pdf.numPages, "page(s).");
                    // getting first page only.
                    pdf.getPage(1).then(function (page) {
                        // you can now use *page* here
                        var viewport = page.getViewport(10);
                        var canvasEl = document.createElement("canvas")
                        canvasEl.height = viewport.height;
                        canvasEl.width = viewport.width;
                        page.render({canvasContext: canvasEl.getContext('2d'), viewport: viewport}).then(function () {
                            var bg = canvasEl.toDataURL("image/png");
                            fabric.Image.fromURL(bg, function (img) {
                                // img.scaleToWidth(canvas.width);
                                // img.scaleToHeight(canvas.height);
                                // img.globalCompositeOperation = 'source-atop';
                                // canvas.add(img);
                                measureImageDimensions(img,canvas);                    
                                img.set({ 
                                    originX:"center", 
                                    originY:"center" }),                                    
                                    img.setCoords();
                               img.globalCompositeOperation = 'source-atop';
           
                               if (state.isPreviewCanvas) {
                                canvasPrev.centerObject(img);
                                   canvasPrev.add(img);
                                   img.setCoords();
                                   canvas.setActiveObject(img);
                                   canvasPrev.renderAll();
                               } else {
                                   
                                   canvas.centerObject(img);
                                   canvas.add(img);
                                   img.setCoords();
                                   canvas.setActiveObject(img);
           
                                   canvas.renderAll();
                               } 
                               mainControls(true);            
                            });
                            canvas.renderAll();
                        });
                    });

                });
            };
            reader.readAsArrayBuffer(file);

        } else {
            reader.onload = (e) => {
                fabric.Image.fromURL(e.target.result, (img) => {
                    measureImageDimensions(img,canvas);                    
                     img.set({ 
                         originX:"center", 
                         originY:"center" })
                         img.setCoords();
                    img.globalCompositeOperation = 'source-atop';

                    if (state.isPreviewCanvas) {
                        canvasPrev.centerObject(img);
                        canvasPrev.add(img);
                        img.setCoords();
                        canvasPrev.renderAll();
                        canvasPrev.setActiveObject(img);
                    } else {
                        
                        canvas.centerObject(img);
                        canvas.add(img);
                        img.setCoords();
                        canvas.setActiveObject(img);

                        canvas.renderAll();
                    } 
                    mainControls(true);

                },null,{crossOrigin: 'anonymous'})
            } 
            reader.readAsDataURL(file);
        }
        continue
        // }

    }
}
function moveSelected(direction) {
    const STEP = 2;
    var activeObject = canvas.getActiveObject();

    if (activeObject) {
        switch (direction) {
        case Direction.LEFT:
            activeObject.set({"left": activeObject.left - STEP});
            break;
        case Direction.UP:
            activeObject.set({"top": activeObject.top - STEP});
            break;
        case Direction.RIGHT:
            activeObject.set({"left": activeObject.left + STEP});
            break;
        case Direction.DOWN:
            activeObject.set({"top": activeObject.top + STEP});
            break;
        }
        activeObject.setCoords();
        canvas.renderAll();
        console.log('selected objects was moved');
    } else {
        console.log('no object selected');
    }

}

window.addEventListener("paste", pasteImage);

function pasteImage(event) { // get the raw clipboardData
    var cbData = event.clipboardData;
    for (var i = 0; i < cbData.items.length; i++) { // get the clipboard item
        var cbDataItem = cbData.items[i];
        var type = cbDataItem.type;

        // warning: most browsers don't support image data type
        if (type.indexOf("image") != -1) { // grab the imageData (as a blob)
            $("#menu-upload > a").click();
            if(!isAckConfirmUpload()){ return; }

            var imageData = cbDataItem.getAsFile();
            // format the imageData into a URL
            //var imageURL = window.webkitURL.createObjectURL(imageData);

            var reader = new FileReader();
            reader.readAsDataURL(imageData);
            reader.onload = function () {
                
                
                fabric.Image.fromURL(reader.result, (img) => { // img.scaleToWidth(300);
                    measureImageDimensions(img,canvas);
                    img.set({originX: "center", originY:"center"})
                    img.setCoords();
                    img.globalCompositeOperation = "source-atop";
                    canvas.centerObject(img);
                    canvas.add(img);
                    canvas.setActiveObject(img);
                    canvas.renderAll();
            })

                console.log(reader.result);
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };


            
            // We've got an imageURL, add code to use it as needed
            // the imageURL can be used as src for an Image object
        }
    }
}

function isFieldValid(fieldId){
    let fld = $(`#${fieldId}`);
    let isError = !fld.val();

    if(isError){
        fld.addClass('error-field');
        fld.next().removeClass("hidden");
        return false; 

    }
    fld.removeClass('error-field');
    fld.next().addClass("hidden");
    return true; 

}

function isAckConfirmUpload(){
    const ack = $("#ackUploadImage").prop("checked");
    if(!ack)
    {
        toast("Please confirm you have the rights to use these images.")
        return; 
    }
    return true; 
}
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

function getCurrentCanvas(){
   return  state.isPreviewCanvas?canvasPrev:canvas;
}
function getScreenWidthInPx(){
  
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function sidebarToggle(open){
    if(!open){
        $('.sidebar-contact').removeClass('active');
        $('.sidebar-contact > .toggle').removeClass('active');
        return; 
    }
    $('.sidebar-contact').removeClass('active').addClass('active');
    $('.sidebar-contact > .toggle').removeClass('active').addClass('active');

    // $('.toggle').text("Expand Menu");
    // $('.toggle.active').text("Collapse Menu");
}

cropInit();