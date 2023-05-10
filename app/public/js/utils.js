
const defaults = {
    fontSize:36,
    fontFill: '#000',
    fontFamily:'Comic-Sans',
    strokeWidth: 10,
    logoDisplaySize:500
}

function getPageFormatByDimensions(widthPx, heightPx)
{
    let wi = widthPx/dpi; 
    let hi = heightPx/dpi;
    if(wi === 8.5 && hi===11)
        return "letter";
    if(wi === 11 && hi===17)
        return "tabloid";
    if(wi === 17 && hi===11)
        return "ledger";         
    if(wi === 8.5 && hi===14)
        return "legal";
    
        console.error(`page format is not handled for this dimensions. ${wi}x${hi}`);
    return "letter";
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
        cacheProperties: fabric.Object.prototype.cacheProperties.concat('diameter', 'kerning', 'flipped', 'fill', 'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'strokeStyle', 'strokeWidth','stroke'),
        stroke: $("#inputStrokeText").is(":checked")?$("#strokecolor").val():null,
        strokeWidth: $("#inputStrokeText").is(":checked")?parseInt($("#text-stroke-width").val()):0,
        id: obj.id,
        index:obj.index
    })
    return ct; 
}

function textCurrentValues(textObject){
    let selectedFontFamily = $("#fontlist").attr('data-value');
    textObject.fontFamily = selectedFontFamily;
    textObject.cache          = false
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
                        var viewport = page.getViewport(1.0);
                        var canvasEl = document.createElement("canvas")
                        canvasEl.height = viewport.height;
                        canvasEl.width = viewport.width;
                        page.render({canvasContext: canvasEl.getContext('2d'), viewport: viewport}).then(function () {
                            var bg = canvasEl.toDataURL("image/png");
                            fabric.Image.fromURL(bg, function (img) {
                                img.scaleToWidth(canvas.width);
                                img.scaleToHeight(canvas.height);
                                img.globalCompositeOperation = 'source-atop';
                                canvas.add(img);
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
                    //let logoSize = canvas.context.originalWidth;
                    //img.scaleToWidth(logoSize/1.5);  
                    let ratio = canvas.width/1.5; 
                    img.scaleToWidth(ratio);                
                    let canvasCenter = getCanvasCenter(img.getScaledWidth(),img.getScaledHeight())
                    img.set({left: canvasCenter.left, top: canvasCenter.top})
                    img.globalCompositeOperation = 'source-atop';
                    if (state.isPreviewCanvas) {
                        canvasPrev.add(img);
                    } else {
                        canvas.add(img);
                        canvas.setActiveObject(img);
                    } mainControls(true);
                })
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