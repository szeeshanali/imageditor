var $btnAddText = $("#btnAddText");
$("#clipartmenu .clipart").on("click", (e) => {
    const url = $(e.currentTarget).attr("data-url");
    const title = $(e.currentTarget).attr("data-title");
    $("#clipartTitle").text(title);
    $("#clipartImage").attr("src",url);
    $("#btnAddClipart").unbind().on("click",function(){
        const _canvas = state.isPreviewCanvas ? canvasPrev : canvas;
        fabric.Image.fromURL(url, function (img) {            
           var ratio = canvas.context.orignalWidth/2;   
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



$btnAddText.on("click", function () {
    $("#inputCurvedText").prop("checked",false);
    var text = $textarea.val();
    if (! text || text.length == 0) { // /toast("Please enter text");
        return;
    }
    
    var textInfo = {
        left:0,
        top: 0,
        fontFamily: defaults.fontFamily || 'Arial',
        fill: $("#fontColorBox").val() || defaults.fontFill,
        fontSize: defaults.fontSize
    };
    var item = new fabric.IText(text, textInfo);
    let canvasCenter = getCanvasCenter(item.width,item.height);
    item.left = canvasCenter.left; 
    item.top = canvasCenter.top; 
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