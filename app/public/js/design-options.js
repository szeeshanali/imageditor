var $btnAddText = $("#btnAddText");
$("#clipartmenu .clipart").on("click", (e) => {
    const url = $(e.currentTarget).attr("data-url");
    const title = $(e.currentTarget).attr("data-title");
    $("#clipartTitle").text(title);
    $("#clipartImage").attr("src",url);
    $("#btnAddClipart").unbind().on("click",function(){
        const _canvas = state.isPreviewCanvas ? canvasPrev : canvas;
        fabric.Image.fromURL(url, function (img) {            
        measureImageDimensions(img,canvas);                    
                     img.set({ 
                         originX:"center", 
                         originY:"center" })
                         img.setCoords();
                    img.globalCompositeOperation = 'source-atop';
                    _canvas.centerObject(img);
                    _canvas.add(img);
                    img.setCoords();
                    _canvas.setActiveObject(img);
                    _canvas.renderAll();
                    mainControls(true);
        
        },{ crossOrigin: 'anonymous' });
    })
});


function resetTextControls(){
    
    $("#inputStrokeText").prop("checked",false);
    $("#text-stroke-width").val(defaults.strokeWidth); 
    

}

$btnAddText.on("click", function () {
    
    $("#inputCurvedText").prop("checked",false);
    var text = $textarea.val();
    if (! text || text.length == 0) { return; }

    let item = addText({ text:text });
    const _canvas = state.isPreviewCanvas?canvasPrev:canvas;  
    item.set({ originX:"center", originY:"center" });
    item.setCoords();

    _canvas.centerObject(item);
    item.globalCompositeOperation = 'source-atop';
    _canvas.add(item);
    _canvas.setActiveObject(item);
    _canvas.renderAll.bind(_canvas);
    mainControls(true);
    textControls(true);    


})
