var $btnAddText = $("#btnAddText");
$("#clipartmenu .clipart").on("click", (e) => {
    const url = $(e.currentTarget).attr("data-url");
    const title = $(e.currentTarget).attr("data-title");
    $("#clipartTitle").text(title);
    $("#clipartImage").attr("src",url);
    $("#btnAddClipart").unbind().on("click",function(){
        const _canvas = state.isPreviewCanvas ? canvasPrev : canvas;
        fabric.Image.fromURL(url, function (img) {            
           var ratio = canvas.width/2;   
           img.scaleToWidth(ratio);
           let canvasCenter = getCanvasCenter(img.getScaledWidth(),img.getScaledHeight())
           img.set({ left:canvasCenter.left , top: canvasCenter.top });                 
           img.globalCompositeOperation = 'source-atop';
            _canvas.add(img);
            _canvas.renderAll();
            mainControls(true);
        });
    })
});


function resetTextControls(){
    
    $("#inputStrokeText").prop("checked",false);
    $("#text-stroke-width").val(defaults.strokeWidth); 
    

}

$btnAddText.on("click", function () {
    $("#inputCurvedText").prop("checked",false);
    var text = $textarea.val();
    if (! text || text.length == 0) { // /toast("Please enter text");
        return;
    }
    //resetTextControls();
    let item = addText({
        text:text });
    if (state.isPreviewCanvas) {
        canvasPrev.add(item);
        canvasPrev.renderAll();
    } else {
        item.globalCompositeOperation = "source-atop";
        canvas.add(item);
        canvas.renderAll();
    } 
    canvas.setActiveObject(item);
    mainControls(true);
    textControls(true);
})
