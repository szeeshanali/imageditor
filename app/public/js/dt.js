(function($){

    var canvas = document.getElementById("c")?.fabric;
    var categoryItemTemplate = 
    `<div class='col-lg-2'  >
        <div style="width:150px;height:150px;overflow:hidden" >
            <img src='{0}' style='width:150px;' id='{1}' onclick='loadCategoryItemsToCanvas(this.id)' >
        </div>
    <div>`;
    var clientCategoryItems = $(".categoryitem");

    clientCategoryItems.on("click",(elem)=>{
        var categoryItemId = elem.target.id; 
        displayUserCategoryItems(categoryItemId);
    })

    var dropdownCanvasSize  =   $("#dropdownCanvasSize");
    var dropdownTemplateSize=   $("#dropdownTemplateSize");
    var inputCanvasWidth    =   $("#inputCanvasWidth"); 
    var inputCanvasHeight   =   $("#inputCanvasHeight");
    var inputCanvasWidth2   =   $("#inputCanvasWidth2"); 
    var inputCanvasHeight2  =   $("#inputCanvasHeight2");
    var $inputColumns       =   $("#inputColumns"); 
    var $inputRows          =   $("#inputRows");
    var heightInchsToCM     =   $("#heightInchsToCM");
    var widthInchsToCM      =   $("#widthInchsToCM");
    var canvasTemplatePreview = $("#canvasTemplatePreview");
    var tw = 0; 
    var th = 0; 
    var tc = 1; 
    var tr = 1; 

    inputCanvasWidth.on("input", (elem)=>{
        var value = elem.target.value || 0;
        widthInchsToCM.text(inchesToCentimeter(value) + " (cm)");
    })
    inputCanvasHeight.on("input", (elem)=>{
        var value = elem.target.value || 0;
        heightInchsToCM.text(inchesToCentimeter(value) + " (cm)");
    })

    $inputColumns.on("input", (elem)=>{
        var value = elem.target.value || 0;
        var c = document.getElementById("canvasTemplatePreview");
        var ctx = c.getContext("2d");
        tc = parseInt(value);
        var  x =0;
        var  y =0; 
        ctx.clearRect(0, 0, c.width, c.height);

        for(var i=0;i<tr;i++)
        {
            ctx.beginPath();
            ctx.rect(x, 0, tw, th===0?tw:th);
            ctx.stroke();
            y+=th;            
        }

        for(var i=0;i<tc;i++)
        {
            ctx.beginPath();
            ctx.rect(x, y, tw, th===0?tw:th);
            ctx.stroke();
            x+=tw;            
        }
    })
    
    $inputRows.on("input", (elem)=>{
        var value = elem.target.value || 0;
        var c = document.getElementById("canvasTemplatePreview");
        var ctx = c.getContext("2d");
        tr = parseInt(value);
        var  y =0;
        var  x =0;
        ctx.clearRect(0, 0, c.width, c.height); 
        
        for(var i=0;i<tr;i++)
        {
            ctx.beginPath();
            ctx.rect(x, y, tw, th===0?tw:th);
            ctx.stroke();
            y+=th;            
        }

        for(var i=0;i<tc;i++)
        {
            ctx.beginPath();
            ctx.rect(x, y, tw, th===0?tw:th);
            ctx.stroke();
            x+=tw;            
        }
    })

    inputCanvasWidth2.on("input", (elem)=>{
        var value = elem.target.value || 0;
        var c = document.getElementById("canvasTemplatePreview");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        tw = parseInt(inchesToPixel(value)) / 3.5;
        ctx.beginPath();
        ctx.rect(0, 0, tw, th===0?tw:th);
        ctx.stroke();

        //widthInchsToCM.text(inchesToCentimeter(value) + " (cm)");
    })
    inputCanvasHeight2.on("input", (elem)=>{
        var value = elem.target.value || 0;
        var c = document.getElementById("canvasTemplatePreview");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        th = parseInt(inchesToPixel(value)) / 3.5;
        ctx.beginPath();
        ctx.rect(0, 0, tw===0?th:tw, th);
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
    dropdownTemplateSize.on("change",(elem)=>{
        debugger;
        var values = elem.target.value; 
        var dimensions = values.split('x'); 
        var w = dimensions[0];
        var h = dimensions[1];
        var wcm = inchesToCentimeter(w) + " (cm)"; 
        var hcm = inchesToCentimeter(h) + " (cm)"; 
        widthInchsToCM.text(wcm);
        heightInchsToCM.text(hcm);

        // converting inches into pixel and then aspect ratio. 
        var prevW = (parseInt(w) * 96) / 3.5;
        var prevH = (parseInt(h) * 96) / 3.5;

        $("#templatepreview").width(prevW).height(prevH);
            var c  = document.getElementById("canvasTemplatePreview");
            c.width = prevW;
            c.height = prevH;

        

        // inputCanvasWidth.val(w); 
        // inputCanvasHeight.val(h); 

    })

    function inchesToCentimeter(value){
        return (parseFloat(value) * 2.54).toFixed(1);
    }
    
    function inchesToPixel(value){
        return (parseFloat(value) * 96).toFixed(2);
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
//     fabric.Image.fromURL('http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png', function (objects, options) {
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
//   });


})($);
