
(function($){

    var canvas = document.getElementById("c")?.fabric;
    var categoryItemTemplate = 
    `<div class='col-lg-2'  >
        <div style="width:150px;height:150px;overflow:hidden" >
            <img src='{0}' style='width:150px;' id='{1}' onclick='loadCategoryItemsToCanvas(this.id)' >
        </div>
    <div>`;
    var templatethumbs = 
    `<div class="card bd-0 wd-xs-150 mg-10 pd-10 " id="t{code}">
    <img class="card-img-top img-fluid" src="{src}" alt="Image">
    <div class="card-body">
      <h6 class="mg-b-3"><a href="" class="tx-dark"><%= templates[i].title %> </a></h6>
      <span class="tx-12">{dt}</span>
      <i class="ion-ios-trash-outline tx-20 delete-template" title="delete" id="{code}" ></i>
    </div>
  </div>`;

    var templates = `
    <div class="card bd-0 wd-xs-300">
                <img class="card-img-top img-fluid" src="../img/img12.jpg" alt="Image">
                <div class="card-body bd bd-t-0">
                  <h6 class="mg-b-3"><a href="" class="tx-dark">How to Be a Good Leader</a></h6>
                  <span class="tx-12">March 21, 2017 8:30pm</span>
                </div>
              </div>`;
    var clientCategoryItems = $(".categoryitem");

    clientCategoryItems.on("click",(elem)=>{
        var categoryItemId = elem.target.id; 
        displayUserCategoryItems(categoryItemId);
    })

    var dropdownCanvasSize          =   $("#dropdownCanvasSize");
    var $dropdownTemplateSize        =   $("#dropdownTemplateSize");
    var $dropdownCanvasShape        =   $("#dropdownCanvasShape");
    var inputCanvasWidth            =   $("#inputCanvasWidth"); 
    var inputCanvasHeight           =   $("#inputCanvasHeight");
    var $inputTemplateShapeWidth    =   $("#inputTemplateShapeWidth"); 
    var $inputTemplateShapeHeight   =   $("#inputTemplateShapeHeight");
    var $inputTemplateDiameter      =   $("#inputTemplateDiameter");
    var $inputColumns               =   $("#inputColumns"); 
    var $inputRows                  =   $("#inputRows");
    var heightInchsToCM             =   $("#heightInchsToCM");
    var widthInchsToCM              =   $("#widthInchsToCM");
    var canvaspreview              =   new fabric.Canvas("canvaspreview");
    var $shapeWidthHeight           =   $("#shapeWidthHeight"); 
    var $saveTemplate               =   $("#saveTemplate");
    var $inputTemplateShapeLeft     =   $("#inputTemplateShapeLeft");
    var $inputTemplateShapeTop      =   $("#inputTemplateShapeTop");
    var $templateContainer          =   $("#templatecontainer");
    var $deleteTemplate             =   $(".delete-template");
    var $templatethumbs             =   $(".template-thumbs");
    var $templateTitle              =   $("#templateTitle");
    var $shapeDiameter              =   $("#shapeDiameter");
    var $templatepanel              =   $("#templatepanel");

    var templateDefaultSettings = {
        wi      :   8.3,
        hi      :   11,
        shape   :   "circle"
    }
    
    
    var shapeWidth = 0; 
    var th = 0; 
    var tr = 1; 
    var shapeX =0;
    var shapeY =0; 
    var shapeLeft = 0; 
    var shapeTop = 0; 

    var rows = 0;
    var columns = 0;  
    var selectedShape = "circle";
    $shapeWidthHeight.addClass("hidden");
    $("#templatepanel .template").on("click",(e)=>{
        //canvaspreview.clear();
        var id = e.currentTarget.id;
        canvas.clear();
       //canvaspreview.globalCompositeOperation   = 'source-atop';
       canvas.globalCompositeOperation          = 'source-atop';
       canvas.setDimensions({width:531.2, height:704});
       fabric.loadSVGFromURL(`http://localhost:3000/api/svg-templates/${id}`,function(objects,options){
        svg = fabric.util.groupSVGElements(objects,options);
        svg.scaleToHeight(canvas.height);
        canvas.setBackgroundImage(svg, canvas.renderAll.bind(canvas));
        //canvas.item(0).selectable = false;
        
        svg.center();
        canvas.renderAll();
      

        //var firstElem = svg._objects[0];
        //firstElem.scaleToHeight(canvas.height);
        //canvas.add(firstElem);
        //canvas.renderAll();
       // svg.setCoords();
       // var bounds = svg.getObjects();
       // console.log(bounds[1]);
       // bounds[0].group.setFill('#00000');
  
//   fabric.loadSVGFromString(str, function(objects, options) {		
//     var group = new fabric.Group(objects,options);
//     canvaspreview.add(group);
//     group.scaleToHeight(canvaspreview.getHeight());
//     canvaspreview.renderAll();
//     var items = group._objects;
//     group._restoreObjectsState();
//     canvaspreview.remove(group);    
//     for(var i = 0; i < items.length; i++) {	
//     	items[i].set({
//       	left:svg.getLeft() + bounds[i].getLeft()*svg.getScaleX(),
//         top:svg.getTop() + bounds[i].getTop()*svg.getScaleY(),
//       });
//       canvaspreview.add(items[i]);
//     }    
// 	});   
	}); 
       $("#templatepanel").removeClass("active");
       $("#mainMenu").addClass("active");

    })
    $deleteTemplate.on("click", (elem)=>{
        var id = elem.target.id;
        $.ajax({
            type: "DELETE",
            url: `/app/admin/delete-template/${id}`
        }).done(function(o) 
        {  
            toast("Template has been deleted.");
            $(`#t${id}`).remove();
        });
    })

    $templatethumbs.on("click", (elem)=>{
        canvas.remove.apply(canvas, canvas.getObjects())

        var id = `t-${elem.currentTarget.id}.png`;
        var meta = JSON.parse($(elem.currentTarget).attr("data-meta"));


        $(".canvas-size-panel  .page-size").text(meta.canvasSize);
        $(".canvas-size-panel  .shape-type").text(meta.shape);
        $(".canvas-size-panel  .page-title").text(meta.canvasTitle);





        fabric.Image.fromURL(elem.target.src, function (objects, options) {
            background = objects;
            background.set({
               // left: 0,
               // top: 0,
                //scaleY: canvas.height / background.width,
                //scaleX: canvas.width / background.width,
               // selectable: false
            });
            background.selectable =false;
            background.meta = meta;
            canvas.add(background);
            canvas.renderAll();
        });
    })

    inputCanvasWidth.on("input", (elem)=>{
        var value = elem.target.value || 0;
        widthInchsToCM.text(inchesToCentimeter(value) + " (cm)");
    })
    inputCanvasHeight.on("input", (elem)=>{
        var value = elem.target.value || 0;
        heightInchsToCM.text(inchesToCentimeter(value) + " (cm)");
    })
    $inputTemplateShapeLeft.on("input", (elem)=>{
        var value = elem.target.value || 0;
        shapeLeft  = parseInt(value);
        redraw(columns);
    })
    $inputTemplateShapeTop.on("input", (elem)=>{
        var value = elem.target.value || 0;
        shapeTop = parseInt(value);
        redraw(columns);
    })

    $inputColumns.on("input", (elem)=>{
        var value      = elem.target.value || 0;
        columns        = parseInt(value);
        redraw(columns);
        //  var value      = elem.target.value || 0;
        //  var c          = $canvasTemplatePreview;
        //  var ctx        = c.getContext("2d");
        //  

        // shapeY = shapeTop;
        //  ctx.clearRect(0, 0, c.width, c.height);
        //  for(var r =0; r<rows; r++)
        //  {
        //     var shapeX = shapeLeft;
        //     for(var c =0; c<columns; c++)
        //     {
        //         ctx.beginPath();
        //         ctx = drawShapeOnCanvas(ctx,{
        //                     s:selectedShape,
        //                     x: shapeX ,
        //                     y: shapeY ,
        //                     w:shapeWidth,h:th,d:shapeWidth/2}); 
        //                 ctx.stroke();
        //                 shapeX+= shapeWidth + shapeLeft;           
        //     }
        //     shapeY+= shapeWidth + shapeTop;
        //  }


        
    })
    
    function redraw(value){
       // var value      = elem.target.value || 0;
        var c          = $canvasTemplatePreview;
        var ctx        = c.getContext("2d");
        columns        = parseInt(value);
        shapeY = shapeTop;
         ctx.clearRect(0, 0, c.width, c.height);
         for(var r =0; r<rows; r++)
         {
            var shapeX = shapeLeft;
            for(var c =0; c<columns; c++)
            {
                ctx.beginPath();
                ctx = drawShapeOnCanvas(ctx,{
                            s:selectedShape,
                            x: shapeX ,
                            y: shapeY ,
                            w:shapeWidth,h:th,d:shapeWidth/2}); 
                        ctx.stroke();
                        shapeX+= shapeWidth + shapeLeft;           
            }
            shapeY+= shapeWidth + shapeTop;
         }
    }
    $inputRows.on("input", (elem)=>{
         var value = elem.target.value || 0;
         var c = $canvasTemplatePreview;
         var ctx = c.getContext("2d");

         ctx.clearRect(0, 0, c.width, c.height); 
         $inputColumns.val("");
         shapeY = 0; 
         rows = parseInt(value);
      
      
        // th = th===0?tw:th;
        // for(var i=0;i<tr;i++)
        // {
           
        //     ctx.beginPath();
        //     ctx = drawShapeOnCanvas(ctx,
        //         {s:selectedShape,
        //         x:x,
        //         y:y,w:tw,h:th,d:tw/2}); 

        //     //ctx.rect(x, y, tw, th===0?tw:th);
        //     ctx.stroke();
        //     y+=th;            
        // }

        // for(var i=0;i<tc;i++)
        // {
        //     ctx.beginPath();
        //    // ctx.rect(x, y, tw, th===0?tw:th);
        //    ctx = drawShapeOnCanvas(ctx,{
        //     s:selectedShape,
        //     x:x,
        //     y:y,
        //     w:tw,h:th,d:tw/2}); 
        //     ctx.stroke();
        //     x+=tw;            
        // }
    })

    $inputTemplateDiameter.on("input", (elem)=>{
        var value = elem.target.value || 0;
        var c = $canvasTemplatePreview;
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        $inputColumns.val("");
        $inputRows.val("");
        $inputTemplateShapeTop.val("");
        $inputTemplateShapeTop.val("");
        shapeLeft = 0; 
        shapeTop =0;
        shapeX = 0; 
        shapeY = 0;
        columns = 1;
        rows = 1;

        shapeWidth = parseInt(inchesToPixel(value)) / 2;
        ctx.beginPath();
        ctx = drawShapeOnCanvas(ctx,{s:selectedShape,x:0,y:0,w:shapeWidth,h:th,d:shapeWidth/2}); 
       // ctx.rect(0, 0, tw, th===0?tw:th);
        ctx.stroke();

        //widthInchsToCM.text(inchesToCentimeter(value) + " (cm)");
    })

    $inputTemplateShapeWidth.on("input", (elem)=>{
        var value = elem.target.value || 0;
        var c = $canvasTemplatePreview;
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        shapeWidth = parseInt(inchesToPixel(value)) / 2;
        ctx.beginPath();
        ctx = drawShapeOnCanvas(ctx,{s:"circle",x:0,y:0,w:shapeWidth,h:th}); 
        ctx.stroke();
        //widthInchsToCM.text(inchesToCentimeter(value) + " (cm)");
    })

    $inputTemplateShapeHeight.on("input", (elem)=>{

        var value = elem.target.value || 0;
        var c = $canvasTemplatePreview;
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        th = parseInt(inchesToPixel(value)) / 2;
        ctx.beginPath();
        ctx.rect(0, 0, shapeWidth===0?th:shapeWidth, th);
        ctx.stroke();
    })

    dropdownCanvasSize.on("change",(elem)=>{
        var values = elem.target.value; 
        var dimensions = values.split('x'); 
        var w = dimensions[0];
        var h = dimensions[1];
        var wcm = inchesToCentimeter(w) + " (cm)"; 
        var hcm = inchesToCentimeter(h) + " (cm)"; 
        
        widthInchsToCM.text(wcm);
        heightInchsToCM.text(hcm);
        inputCanvasWidth.val(w); 
        inputCanvasHeight.val(h); 
    }) 

    $dropdownCanvasShape.on("change",(elem)=>{
        var v = elem.target.value;
        var c =  $canvasTemplatePreview;
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        selectedShape = v;
        if(v === "circle")
        {
            
            $shapeWidthHeight.addClass("hidden"); 
            $("#shapeDiameter").show();
        }else{
            $shapeWidthHeight.removeClass("hidden"); 
            $("#shapeDiameter").hide();
        }
    })

    $dropdownTemplateSize.on("change",(elem)=>{

        var values = elem.target.value; 
        var dimensions = values.split('x'); 
        var w = dimensions[0];
        var h = dimensions[1];
        var wcm = inchesToCentimeter(w); 
        var hcm = inchesToCentimeter(h); 
        var size = `${wcm} x ${hcm} cm`;
        $("#lblSheetSize").text(size)
        //converting inches into pixel and then aspect ratio. 
        var prevW = (parseFloat(w) * 96) / 2;
        var prevH = (parseFloat(h) * 96) / 2;

        $("#templatepreview").width(prevW).height(prevH);
            var c  = $canvasTemplatePreview;
            c.width = prevW;
            c.height = prevH;

        

        // inputCanvasWidth.val(w); 
        // inputCanvasHeight.val(h); 

    })
$saveTemplate.on("click",()=>{
    var templateDesc = $templateTitle.val();
    toPNG("templateCanvas",templateDesc);
})
    function inchesToCentimeter(value){
        return (parseFloat(value) * 2.54).toFixed(1);
    }
    
    function inchesToPixel(value){
        return (parseFloat(value) * 96).toFixed(2);
    }

    function drawShapeOnCanvas(ctx, params){
        var {s, x, y, w, h, d} = params; 
        ctx.lineWidth = .1; 
        if(s === "circle"){            
            ctx.arc(d+x, d+y, d, 0, Math.PI * 2);
        }else{
            ctx.rect(x, y, w, h);
        }

        
        ctx.fillStyle = "#868ba1";
        ctx.fill();
        return ctx; 
    }
    

    function displayUserCategoryItems(categoryId) {
        $.get(`/api/category/${categoryId}`, function (data) {
            var items = data; 
            var img = categoryItemTemplate;
            var temp = '';
            for(var i=0;i<items.length;i++)
            { temp += img.replace("{0}",items[i].base64).replace("{1}",items[i]._id) ;}
            var div = "<div class='row row-sm'>"+ temp +"</div>"
            $("#container_category_items").html(div);
        });
    }

    
    function getTemplates(categoryId) {
        $.get(`/api/templates`, function (data) {
            var items = data; 
            // var img = categoryItemTemplate;
            // var temp = '';
            // for(var i=0;i<items.length;i++)
            // { temp += img.replace("{0}",items[i].base64).replace("{1}",items[i]._id) ;}
            // var div = "<div class='row row-sm'>"+ temp +"</div>"
            // $("#container_category_items").html(div);
        });
    }
    
    
    this.loadCategoryItemsToCanvas = function(id)
    {
        $('#popupcategoryitems').modal('hide');
        $.get(`/api/categoryitem/${id}`, function (data) {
         
            canvas.loadFromJSON(data.json, function() {
                canvas.renderAll(); 
            },function(o,object){
                console.log(o,object)
            })    
        })    
    }


    // var clipPath = new fabric.Circle(
    //     { 
    //       radius: 200,
    //       top: 15,
    //       left: 30,
    //       strokeWidth: 5,
    //       stroke: "red",
    //       fill: "#3ff4ff",
    //       hoverCursor: "pointer",
    //       opacity: 1,
    //       selectable: false,
    //       absolutePositioned: true,
    //       controlsAboveOverlay: true,
    //       hasBorders: true,
    //       borderDashArray: [3, 3],
    //       borderColor: 'red',
    //       strokeLineJoin: 'mitter',
    //       strokeMiterLimit: 3000,
    //       objectCaching: true,
    //       affectStroke: true });

    //  canvas.clipPath = clipPath;
//     var background;
//     debugger;
//     fabric.Image.fromURL('https://i.ibb.co/1n8xj1J/test-4.png', function (objects, options) {
//       background = objects;
//       background.set({
//           left: 0,
//           top: 0,
//           scaleY: canvas.height / background.width,
//           scaleX: canvas.width / background.width,
//           selectable: false
//       });

//       canvas.add(background);
//       canvas.renderAll();
//    });

function toPNG(id, desc){
        var canvasElement = document.getElementById(id);    
        if(isCanvasBlank(canvasElement)){
            return;
        }


        var meta = {
            canvasSize  :  $dropdownTemplateSize.val(),
            canvasTitle :  $templateTitle.val(),
            widthIn     :  $inputTemplateShapeWidth.val()  || "0",
            heightIn    :  $inputTemplateShapeHeight.val() || "0",
            diameterIn  :  $inputTemplateDiameter.val() || "0",
            rows        :  $inputRows.val(),
            columns     :  $inputColumns.val(),
            leftCm      :  $inputTemplateShapeLeft.val(), 
            topCm       :  $inputTemplateShapeTop.val(),
            shape       :  $dropdownCanvasShape.val()
        }; 

        if(  !meta.canvasSize 
            || !meta.canvasTitle 
            || !meta.columns 
            || !meta.diameterIn  
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
        var imgURL = canvasElement.toDataURL(MIME_TYPE);    
        $.ajax({
            type: "POST",
            url: "/app/admin/save-template",
            data: {  
                imgBase64: imgURL,
                desc:desc,
                meta: JSON.stringify(meta) }
        }).done(function(o) 
        {  toast("Template has been successfully saved.");
            });
}
function initTemplateDesigner(){

    //var values = elem.target.value; 
    //var dimensions = values.split('x'); 
    var w = templateDefaultSettings.wi;
    var h = templateDefaultSettings.hi;
    var wcm = inchesToCentimeter(w); 
    var hcm = inchesToCentimeter(h); 
    var size = `${wcm} x ${hcm} cm`;
    $("#lblSheetSize").text(size);
    //converting inches into pixel and then aspect ratio. 
    var prevW = inchesToPixel(w) / 2;
    var prevH = inchesToPixel(h) / 2;

   
   // $("#templatepreview").width(prevW).height(prevH);
    //  var c  = $canvasTemplatePreview;
    // c.width = prevW;
    // c.height = prevH;
}
function toast(message) {
    var $toast = $("#snackbar").addClass("show");
    $toast.text(message);
    setTimeout(function(){ 
        $toast.removeClass("show")

    }, 3000);
}

function isCanvasBlank(canvas) {
    const context = canvas.getContext('2d');
  
    const pixelBuffer = new Uint32Array(
      context.getImageData(0, 0, canvas.width, canvas.height).data.buffer
    );
  
    return !pixelBuffer.some(color => color !== 0);
  }

initTemplateDesigner();
})($);
