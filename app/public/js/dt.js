(function($){

    var canvas = document.getElementById("c").fabric;
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
})($);
