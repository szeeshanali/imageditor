
function getPageFormatByDimensions(widthPx, heightPx)
{
    let wi = widthPx/dpi; 
    let hi = heightPx/dpi;
    if(wi === 8.5 && hi===11)
        return "letter";
    
    if(wi === 11 && hi===17)
        return "ledger";
        
    if(wi === 8.5 && hi===14)
        return "legal";
    
        console.error(`page format is not handled for this dimensions. ${wi}x${hi}`);
    return "letter";
}

function getCanvasCenter(objectWidth,objectHeight){
    if(!canvas || !canvas.context)
    {return {left:0,top:0}}

    if(objectWidth>canvas.context.orignalWidth)
    { return { left:0, top: 0 } }

    return {
        left:    (canvas.context.orignalWidth/2)-(objectWidth/2),
        top:    (canvas.context.orignalHeight/2)-(objectHeight/2)
    }

}

const processFiles = (files) => {
    if (files.length === 0) 
        return;
    
    const allowedTypes = ['image/jpeg','image/gif', 'image/png', 'image/svg+xml', 'application/pdf']
    for (let file of files) {
        var fileSizeInMB = file.size / 1024 / 1024;
        var limit = 5;
        if (fileSizeInMB > limit) {
            toast(`File size exceeds ${limit} Mb`);
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
                    
                    img.scaleToHeight(250);                    
                    let canvasCenter = getCanvasCenter(img.width,img.height)
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