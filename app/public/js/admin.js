(()=>{
  
  var canvas = new fabric.Canvas("admin-main-canvas",{
    preserveObjectStacking:true
 })


 $layers = $("#layers");
 $adminImageUpload              =   $("#admin-image-upload");
 $btnImageUploadHidden          =   $(`#admin-image-upload-hidden`);
 $templateContainer             =   $("#template-container"); 
 $btnSaveDesign                 =   $("#save-design"); 
 $cancelDesign                 =   $("#cancel-design"); 

 var $dropdownTemplateSize      = $("#dropdownTemplateSize");
 var $dropdownCanvasShape       = $("#dropdownCanvasShape");
 var $inputTemplateShapeWidth   = $("#inputTemplateShapeWidth");
 var $inputTemplateShapeHeight  = $("#inputTemplateShapeHeight");
 var $inputTemplateShapeLeft    = $("#inputTemplateShapeLeft");
 var $inputTemplateShapeTop     = $("#inputTemplateShapeTop");
 var $inputRows                 = $("#inputRows");
 var $inputColumns              = $("#inputColumns");
 var $templateTitle             = $("#admin-design-title");
 var $btnUploadTemplate         = $("#btn-upload-template");
 var $adminDesignCtrl           = $(".admin-design-ctrl");
 var $pageTitle                 = $(".am-pagetitle");
 var $btnSavePreDesign          = $("#btnSavePreDesign");
 
 const layerHtml = `<div class="media d-block d-flex layer-item object-options" data-index='{index}' id='{id}'  >
 <div class="d-block mg-sm-r-10 img"> <img src="{src}" class="wd-30" alt="Image" ></div>
 <small class="d-sm-flex layer-label">Layer {index}</small>
 <div class="d-sm-flex layers-controls" style="display:none !important">
 <i class='ion-ios-copy-outline duplicate main-tool-button'   title='duplicate' ></i>
 <i class='ion-ios-upload-outline bring-fwd' title="move up" id="bring-fwd" ></i>
 <i class='ion-ios-download-outline bring-back' title="move down" id="bring-back" ></i>
 <i class='ion-ios-arrow-thin-up' title="top" ></i>
 <i class='ion-ios-arrow-thin-down' title="down" ></i>
 <i class='ion-ios-trash-outline delete main-tool-button' title='delete' ></i>
 </div>
</div>`; 
  // Template Upload: 

  $kopykakePartNo    =       $("#admin-kopykake-part");
  $inputDesignName    =       $("#admin-design-name");
  $inputThumbnailName =       $("#admin-design-title");
  $btnActiveDesign    =       $("#design-active");
  $btnDefaultDesign   =       $("#design-default");
  $inputFileName      =       $("#admin-file-name");
  $inputDesignLink    =       $("#admin-design-link");
  $inputOrderNo       =       $("#admin-display-order");
  $selectPageSize     =       $("#admin-page-size");
  $inputLogoPerPage   =       $("#admin-logo-count");
  $templateThumb      =       $("#templatepanel .template");
  $btnUpdateDesign    =       $("#btnUpdateDesign");

  $editTemplateDesignName   =       $("#editTemplateDesignName");
  $editTemplateThumbName    =       $("#editTemplateThumbName");

 var selectedDesign  = {};
 var designFlags = {active:true, default:false, submitted:false}; 
 
 const dpi = 72; 
 
 var filters = ['grayscale', 'invert', 'remove-color', 'sepia', 'brownie',
 'brightness', 'contrast', 'saturation', 'vibrance', 'noise', 'vintage',
 'pixelate', 'blur', 'sharpen', 'emboss', 'technicolor',
 'polaroid', 'blend-color', 'gamma', 'kodachrome',
 'blackwhite', 'blend-image', 'hue', 'resize'];
 function applyFilter(index, filter) {
       
  var obj = canvas.getActiveObject();
  if(!obj) return; 

   if(!obj.filterIndex && obj.filterIndex != 0)
   {
      obj.filters[index] = true && filter;
      obj.filterIndex = index;
   }else{
      obj.filters[index] = false && filter;
      obj.filterIndex = null;
   }
     

  obj.applyFilters();     
  canvas.renderAll();
}

function applyFilterValue(index, prop, value) {
  var obj = canvas.getActiveObject();
  if(!obj) return; 
  if (obj.filters[index]) {
    obj.filters[index][prop] = value;
    obj.applyFilters();
    canvas.renderAll();
  }
}

 function flipXYObject()
 {

  $("#flipW").on("click", () => {
    var selectedObj = canvas.getActiveObject(); 
    if(!selectedObj)
    {
        toast("Please select an object.");
        return; 
    }
    selectedObj.set('flipX', !selectedObj.flipX);
    canvas.renderAll();
  });



  $("#flipH").click(() => {
    var selectedObj = canvas.getActiveObject(); 
    if(!selectedObj)
    {
        toast("Please select an object.");
        return; 
    }
    selectedObj.set('flipY', !selectedObj.flipY);
    canvas.renderAll();

  });



      // $deleteItem = $(`#${obj.id} .delete`); 
      // $duplicateItem = $(`#${obj.id} .duplicate`); 
      // $moveUpItem = $("#layers .bring-fwd"); 
      // $moveDownItem = $("#layers .bring-back"); 

      // $deleteItem.on("click",function(){
      //     //$(this).parent().parent().remove();
      //     var selectedObj = canvas.selectedObj.target;
      //     canvas.remove(selectedObj).renderAll();
      //     $(`#${selectedObj.id}`).remove();           
      // });


      // $duplicateItem.on("click",function(){
      //     var object = fabric.util.object.clone(canvas.getActiveObject());
      //     object.set("top", object.top+5);
      //     object.set("left", object.left+5);
      
      //     canvas.add(object);

      // });
      // $moveUpItem.on("click",function(){});
      // $moveDownItem.on("click",function(){});
      //$moveTopItem.on("click",function(){});
      //$moveBottomItem.on("click",function(){});
 }
function rotateObject()
{
  $(`#rotate`).on("click",function(e){
    var selectedObj = canvas.getActiveObject();
    if(!selectedObj)
    {
        toast("Please select an object.");
        return; 
    }
    var curAngle = selectedObj.angle + 90;
    selectedObj.rotate(curAngle);
    if(curAngle > 270)
    { selectedObj.angle = 0; }
    canvas.renderAll();
  })
}
function cropObject(){
  // $(`#crop`).on("click",function(e){
  //   var selectedObj = canvas.getActiveObject();
  //     if(!selectedObj)
  //     {
  //         toast("Please select an object.");
  //         return; 
  //     }


  //     var pos = [0, 0];
  //     var c = document.getElementById('admin-main-canvas');
  //     var r = c.getBoundingClientRect();
  //     pos[0] = r.left;
  //     pos[1] = r.top;
      
  //     var mousex = 0;
  //     var mousey = 0;
  //     var crop = false;
  //     var disabled = false;
      
  //     //console.log(pos);
      
  //     var el = new fabric.Rect({
  //         //left: 100,
  //         //top: 100,
  //         fill: 'transparent',
  //         originX: 'left',
  //         originY: 'top',
  //         stroke: '#ccc',
  //         strokeDashArray: [2, 2],
  //         opacity: 1,
  //         width: 1,
  //         height: 1
  //     });
      
  //     el.visible = false;
  //     canvas.add(el);
  //     var object;
    
      
  //     canvas.on("mouse:down", function (event) {
  //         if (disabled) return;
  //         el.left = event.e.pageX - pos[0];
  //         el.top = event.e.pageY - pos[1];
  //         //el.selectable = false;
  //         el.visible = true;
  //         mousex = event.e.pageX;
  //         mousey = event.e.pageY;
  //         crop = true;
  //         canvas.bringToFront(el);
  //     });
      
  //     canvas.on("mouse:move", function (event) {
  //         //console.log(event);
  //         if (crop && !disabled) {
  //             if (event.e.pageX - mousex > 0) {
  //                 el.width = event.e.pageX - mousex;
  //             }
      
  //             if (event.e.pageY - mousey > 0) {
  //                 el.height = event.e.pageY - mousey;
  //             }
  //         }
  //     });
      
  //     canvas.on("mouse:up", function (event) {
  //         crop = false;
  //    });





  // })

}


function grayscaleObject()
{
  $("#btnGrayscale").on("click", ()=>{
    applyFilter(0, new fabric.Image.filters.Grayscale());         
    applyFilterValue(0, 'mode', 'average');
    
})
}

function brightnessObject()
{
  $("#brightnessVal").text(`(0%)`);  
  $('#brightness-value').on("click",function(){
    applyFilter(5,    new fabric.Image.filters.Brightness({
      brightness: parseFloat($('#brightness-value').val())
    }));
  })

  $('#brightness-value').on("input", function() {   
    var val = this.value; 
    $("#brightnessVal").text(`(${parseInt(val*100)}%)`);
    applyFilterValue(5, 'brightness', parseFloat(val));
  });
}


window.addEventListener("paste",pasteImage);

function pasteImage(event) {
    // get the raw clipboardData
    var cbData=event.clipboardData;

    for(var i=0;i<cbData.items.length;i++){

        // get the clipboard item
        var cbDataItem = cbData.items[i];
        var type = cbDataItem.type;

        // warning: most browsers don't support image data type
        if (type.indexOf("image")!=-1) {
            // grab the imageData (as a blob)
            var imageData = cbDataItem.getAsFile();
            // format the imageData into a URL
            var imageURL=window.webkitURL.createObjectURL(imageData);
            fabric.Image.fromURL(imageURL, (img) => {
              //img.scaleToWidth(300);
                canvas.add(img).renderAll();
              })
            // We've got an imageURL, add code to use it as needed
            // the imageURL can be used as src for an Image object
        }
    }
}
function contrastObject()
{
  $("#contrastVal").text(`(0%)`);

  $('#contrast-value').on("click", function() {
  applyFilter(6,    new fabric.Image.filters.Contrast({
    contrast: parseFloat($('#contrast-value').val())
  }))
})

  $('#contrast-value').on("input", function() {
    
    var val = this.value; 
    $("#contrastVal").text(`(${parseInt(val*100)}%)`);
    applyFilterValue(6, 'contrast', parseFloat(val));
  });
}

function initImageEvents(){

}

function deleteTemplate(id)
{
  var templateId = $("#edit-template-id").val(); 
    $.ajax({
        type: "DELETE",
        url: `/api/admin/template/${templateId}`,           
        success:function(res){
          toast("Deleted successfully!");
          setTimeout(function(){
            window.location.reload();
          },1000)
        },
        error:function(res){
          toast("Error while deleting.");
        }
    })
}

 function InitUIEvents()
 {
  rotateObject(); 
  cropObject();
  flipXYObject();
  grayscaleObject();
  brightnessObject();
  contrastObject();
 

  $("#user-ctrl .edit").on("click", function(e){
    var userId = e.currentTarget.id.replace("edit","");
      var meta = $(e.currentTarget).attr("data-meta");
      meta = JSON.parse(meta); 
      loadUserInfo(meta);
      // $.ajax({
      //     type: "PUT",
      //     url: `/api/admin/user/${userId}`,     
      //     data:{
      //       active:isActive
      //     },      
      //     success:function(res){
      //       toast("Updated successfully!");
      //       setTimeout(function(){
      //         window.location.reload();
      //       },1000)
      //     },
      //     error:function(res){
      //       toast("Error while Updating.");
      //     }
      // })
  });
  var selectedUser = {};
  function loadUserInfo(meta){
    selectedUser = meta; 
    $("#edit-user-container .fname").val(meta.fname);
    $("#edit-user-container .lname").val(meta.lname);
    $("#edit-user-container .email").val(meta.email);
    $("#edit-user-container .company").val(meta.company_name);
    $("#edit-user-container .project_lmt").val(meta.project_limit);
    $("#edit-user-container .created_dt").val(meta.date);
    $( "#edit-user-container .is_admin" ).prop( "checked", meta.is_admin );
    $( "#edit-user-container .is_active" ).prop( "checked", meta.active );
    $( "#edit-user-container .watermark" ).prop( "checked", meta.watermark );
  }

  

  $("#btnEditUser").on("click",function(e)
  {
    if(confirm("Do you want to save this user changes?")){
      var userId = selectedUser?._id;
if(!userId)
{ toast("Something went wrong!");
  return; }

      selectedUser.is_admin = $( "#edit-user-container .is_admin" ).prop("checked");
      selectedUser.active = $( "#edit-user-container .is_active" ).prop("checked");
      selectedUser.watermark = $( "#edit-user-container .watermark" ).prop("checked");
      selectedUser.project_limit = parseInt($("#edit-user-container .project_lmt").val()) ;
     
      $.ajax({
          type: "PUT",
          url: `/api/admin/user/${userId}`,     
          data:selectedUser,      
          success:function(res){
            toast("Updated successfully!");
            setTimeout(function(){
              window.location.reload();
            },1000)
          },
          error:function(res){
            toast("Error while Updating.");
          }
      })
    }
  });
  
  $("#user-ctrl .delete").on("click", function(e){
    if(confirm("do you want to delete this user?")){
      var userId = e.currentTarget.id.replace("delete","");
      $.ajax({
        type: "DELETE",
        url: `/api/admin/user/${userId}`,           
        success:function(res){
          toast("Deleted successfully!");
          setTimeout(function(){
            window.location.reload();
          },1000)
        },
        error:function(res){
          toast("Error while deleting.");
        }
    })
    }
  });

  
  $("#user-ctrl .active").on("click", function(e){
    if(confirm("do you want to disable this user?")){
      var userId = e.currentTarget.id.replace("active","");
      var isActive = $(e.currentTarget).attr("data-meta");
      isActive = !(isActive == "true");
      $.ajax({
          type: "PUT",
          url: `/api/admin/user-active/${userId}`,     
          data:{
            active:isActive
          },      
          success:function(res){
            toast("Updated successfully!");
            setTimeout(function(){
              window.location.reload();
            },1000)
          },
          error:function(res){
            toast("Error while Updating.");
          }
      })
    }
  });

  $("#admin-delete-template").on("click",function(e){
    deleteTemplate();
  })
 


  $templateThumb.on("click",(e)=>{
    var templateId = e.currentTarget.id; 
    if(templateId){
      loadSVGTemplate(templateId);
    }else{
      toast(`Can't load Template.`)
    }
  })

  $btnActiveDesign.on("click",(e)=>{
    alert("worked");
    if(!selectedDesign.base64) {
      toast("Please upload template.");
      e.currentTarget.checked =false; 
      return; 
    }
    designFlags.active = e.currentTarget.checked;
 

    // setTimeout(function(){
    //   var txt = $(e.currentTarget).find(".active").text();
    //   designFlags.active = (txt == "ON");  
    // },500);
   
  })
  $cancelDesign.on("click",(e)=>{
    onDesignReload();
   })

  $btnDefaultDesign.on("click",(e)=>{
   
    if(!selectedDesign.base64)  {
      toast("Please upload template.");
      e.currentTarget.checked =false; 
    return; 
  }
   

  designFlags.default = e.currentTarget.checked;
    // setTimeout(function(){
    //   var txt = $(e.currentTarget).find(".active").text();
    //   designFlags.default = (txt == "ON");
    // },500)
   
  })


  
  $btnUpdateDesign.on("click",function(){
    var data = {  
          
      title     : $inputThumbnailName.val(),
      name      : $inputDesignName.val(),
      file_name : $inputFileName.val(),
      order_no  : $inputOrderNo.val(),
      active    : designFlags.active,
      default   : designFlags.default,
      link      : $inputDesignLink.val(),
      logos     : $inputLogoPerPage.val(), 
      ref_code  : $kopykakePartNo.val(),
  
  }
  if(!data.title || !data.name)
  { toast("Template mandatory information is missing. ")
    return; 
  }
      $.ajax({
        type: "PUT",
        url: `/api/admin/template/${selectedDesign.data.code}`,
        data: data,
        success:function(res){
          designFlags.submitted = true; 
          toast("Template information saved successfully!");
        },
        error:function(res){
          designFlags.submitted = false; 
          toast("Error while updating template.");
        }
    })
  })
  $btnSaveDesign.on("click",function(){
   
    if(!selectedDesign.base64)
    {  toast("Error: Please upload a Template"); return; }
      onSaveTemplate();
    });
  
   $adminImageUpload.on("click",function () {
      $btnImageUploadHidden.click();
    })
  
    $btnImageUploadHidden.on('change', function (e) {
      if (e.target.files.length === 0) return;
      var pageid = $(this).attr("data-page-id");
      processFiles(e.target.files, pageid);
      $btnImageUploadHidden.val('');
    })
   
 }
 function enabledDesignCtrl(o){
  $adminDesignCtrl.find(".disabled").removeClass("disabled");
}

function loadSVGTemplate(id)
{
    var group = [];
    $.get(`/api/admin/svg-templates/${id}`, function (data) {
        const svgBase64 = data.base64;
        if(!svgBase64)
        {
            alert("Error loading Template");
            return;}

        //canvas.setDimensions({width: letterPageSize.width, height: letterPageSize.height});
        //canvasPrev.setDimensions({width: letterPageSize.width, height: letterPageSize.height});
        canvas.clear();
        fabric.loadSVGFromURL(svgBase64,function(objects,options) {      
            var loadedObjects = new fabric.Group(group);
            var templateWidth = options.viewBoxWidth;
            var templateHeight = options.viewBoxHeight;      
            canvas.setDimensions({width: templateWidth, height: templateHeight});
            //canvas.orignalBackgroundImage = loadedObjects;                      
            canvas.setBackgroundImage(loadedObjects,canvas.renderAll.bind(canvas));
            canvas.renderAll();
            loadedObjects.center().setCoords();
        



           $("#upload-template-splash").remove();
           $(".tab-content .tab-pane").each((i,e)=>
           { $(e).removeClass("active"); })    
          $("#edit-template").addClass("active");
        },function(item, object) {
                object.set('id',item.getAttribute('id'));
                group.push(object);
        });

        loadTemplateInfo(data);
    })

}

function loadTemplateInfo(data)
{

  selectedDesign.data = data; 
  $("#edit-template-id").val(data.code);
  $inputThumbnailName.val(data.title);
   $inputDesignName.val(data.name);
  $inputFileName.val(data.file_name);
  $inputOrderNo.val(data.order_no);
  designFlags.active = data.active;
  designFlags.default = data.default;
  $inputDesignLink.val(data.link);
   $inputLogoPerPage.val(data.logos);
   $kopykakePartNo.val(data.ref_code);

  if(data.active)
   { $("#editTemplateActive").attr("checked",true); }

  if(data.default)
  {  $("#editTemplateDefault").attr("checked",true); }

  $("#editTemplateActive").on("click",function(e)
  { designFlags.active = e.target.checked; })

  
  $("#editTemplateDefault").on("click",function(e){
    designFlags.default = e.target.checked;    
  })
 
  //$btnActiveDesign    =       $("#design-active");
  // $btnDefaultDesign   =       $("#design-default");
  // $inputFileName      =       $("#admin-file-name");
  // $inputDesignLink    =       $("#admin-design-link");
  // $inputOrderNo       =       $("#admin-display-order");
  // $selectPageSize     =       $("#admin-page-size");
  // $inputLogoPerPage   =       $("#admin-logo-count");
  // $templateThumb      = $("#templatepanel .template")
}


function onDesignReload(o){
  location.reload();

}
 function onDesignLoaded(o)
 {  
    enabledDesignCtrl({});
    // var msg = `Sheet size: Width: ${(o.width/dpi).toFixed(2)}", Height: ${(o.height/dpi).toFixed(2)}", Logo size: Width: ${(o.logoWidth/dpi).toFixed(2)}", Height: ${(o.logoHeight/dpi).toFixed(2)}", Total Logos: ${o.logoCount}`;
    // $pageTitle.html(msg);    
    var pageHeightInInches = (o.height/72).toFixed(1);
    var pageWidthInInches = (o.width/72).toFixed(1);
    var pageSize = `${pageWidthInInches}x${pageHeightInInches}''`;

    var logoHeightInInches = (o.height/72).toFixed(1);
    var logoWidthInInches = (o.logoWidth/72).toFixed(1);
    var logoSize = `${logoWidthInInches}''`;

    $("#template-info-panel .page-size").text(pageSize);
    $("#template-info-panel .logo-size").text(logoSize);
    $("#template-info-panel .total-logos").text(o.logoCount);

 }

 $btnSavePreDesign.on("click",()=>{
  $.ajax({
      type: "POST",
      url: "/api/admin/save-pre-design",

      data: {   

        desc      : "",
        title     : $inputThumbnailName.val(),
        name      : $inputDesignName.val(),
        file_name : $inputFileName.val(),
        file_ext  : ".json",
        order_no  : $inputOrderNo.val(),
        active    : designFlags.active,
        type      : "pre-designed",
        by_admin  : true,
        default   : designFlags.default,
        link      : $inputDesignLink.val(),
        logos     : $inputLogoPerPage.val(), 
        ref_code  : $kopykakePartNo.val() ,
        thumbBase64  : canvas.toDataURL(
              {
                  format: 'jpg',
                  quality: 0.8
              }
          ),  
          json    : JSON.stringify(canvas.toJSON()) },
      success:function(res){
        toast("Design has been Saved.");
      },
      error:function(res){
        toast("Error while saving design.");
      }
  })
})

  function onSaveTemplate(){
    if(designFlags.submitted ){
      toast("Already submitted, please choose new design.");
    return ; 
    }
    var m = selectedDesign.meta;
    var meta = {
        width: m.width, 
        height: m.height,
        objects: m.logoCount, 
        objectWidth: m.logoWidth,
        objectWidth: m.logoHeight,
        title: $templateTitle.val(),
        pageSize: $selectPageSize.val(),
    }
    if(!meta.title || meta.title.length > 100) 
    { 
      toast("Error: Please Enter Title!");
      return; 
    }
    var MIME_TYPE = "image/png";
    var dataUrl = selectedDesign.base64;  
var category = $("#admin-categories").val() ; 

    $.ajax({
        type: "POST",
        url: "/app/admin/save-template",
        data: {  
            
            desc      : "",
            meta      : JSON.stringify(meta) ,
            title     : $inputThumbnailName.val(),
            name      : $inputDesignName.val(),
            file_name : $inputFileName.val(),
            file_ext  : ".svg",
            order_no  : $inputOrderNo.val(),
            active    : designFlags.active,
            base64    : dataUrl,
            type      : $("#design-type").val(),
            by_admin  : true,
            default   : designFlags.default,
            link      : $inputDesignLink.val(),
            logos     : $inputLogoPerPage.val(), 
            ref_code  : $kopykakePartNo.val(),
            category  : category
        },
        success:function(res){
          designFlags.submitted = true; 
          toast("Template has been successfully uploaded.");
        },
        error:function(res){
          designFlags.submitted = false; 
          toast("Error while uploading template.");
        }
      })
    }


  const processFiles = (files, pageid) => {
    if (files.length === 0) return;
    designFlags.submitted = false; 
    const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml','image/gif']

    for (let file of files) {
      // check type
      if (!allowedTypes.includes(file.type)) continue
      let reader = new FileReader()
      // handle svg
      if (file.type === 'image/svg+xml') {
        reader.onload = (f) => {
            var svgBase64 = f.srcElement.result;
            selectedDesign.base64 = svgBase64; 
            canvas.clear();
            var group =[];
            fabric.loadSVGFromURL(svgBase64,function(objects,options) {  
              selectedDesign.meta = {
                width     : options.viewBoxWidth, 
                height    : options.viewBoxHeight,
                logoCount : objects.length,
                logoWidth : objects[0].width, 
                logoHeight: objects[0].height
            }
              var loadedObjects = new fabric.Group(group);
              var templateWidth = 612;
              var templateHeight = 792;      
              canvas.setDimensions({top:0, width: templateWidth, height: templateHeight});
              if( pageid === "__template-designer"){
                canvas.setBackgroundImage(loadedObjects,canvas.renderAll.bind(canvas));
                $("#upload-template-splash").remove();
              }else{
                canvas.add(loadedObjects);
              }
              canvas.renderAll();
              onDesignLoaded(selectedDesign.meta);
             
          },function(item, object) {
                  object.set('id',item.getAttribute('id'));
                  group.push(object);
          });
         
        }
        reader.readAsDataURL(file);
        continue;
      }else{
        if( pageid != "__template-designer")
        {
          reader.onload = (f) => {
            fabric.Image.fromURL(f.target.result, (img) => {
              selectedDesign.base64 = f.target.result; 
              selectedDesign.meta = {
                width     : img.width, 
                height    : img.height
            }

                img.scaleToWidth(300);
              canvas.add(img).renderAll();
            })
          }
          reader.readAsDataURL(file);
        }
        else
        { toast("Error: Please Upload SVG File!"); }        
      }

    }
  }


function onObjectAdded(o){
  addLayer();
}


function initCanvasEvents(){
  fabric.Object.prototype.transparentCorners = false;
  fabric.Object.prototype.cornerStyle = 'circle';
  fabric.Object.prototype.borderColor = '#000';
  fabric.Object.prototype.cornerColor = '#494699';
  fabric.Object.prototype.cornerStrokeColor = '#000';
  fabric.Object.prototype.cornerSize = 5;
  fabric.Object.prototype.padding = 0;

       
  canvas.selectedLayerId = null; 
  canvas.on("object:added",(o)=>{
      o.target.id = `obj${canvas._objects.length}`;
      o.target.index = canvas._objects.length-1;
      onObjectAdded(o);
  })
  canvas.on("selection:updated",(o)=>{
    const id = o.selected[0].id; 
    var elem = $(`#${id}`)[0];
    clearLayerSelection();
    addFiltersOnSelection();
    $(`#${id} .layers-controls`).show();
    $(`#${id}`).addClass("selected-layer");

    //layerSelectEventHandler(elem,true);
  })
  
  canvas.on("selection:created",(o)=>{
    const id = o.selected[0].id; 
    var elem = $(`#${id}`)[0];
    clearLayerSelection();
    addFiltersOnSelection();
    $(`#${id} .layers-controls`).show();
    $(`#${id}`).addClass("selected-layer");

    //layerSelectEventHandler(elem,true);
  })
  canvas.on("object:modified",(o)=>{
    //  onCanvasModified(o);
  })

  //initCanvasTextEvents();    
}

function addFiltersOnSelection(){
 
  
}

/** Layer functions */
function addLayer(){
  var temp = layerHtml;    
  $layers.html();
  var layers = "";
  for(var i=canvas._objects.length-1;i>=0; i--)
  {
    var obj = canvas._objects[i];
    var src = obj._element?.currentSrc;
    if(obj.text) {
        src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABHNJREFUeJzt3LurHGUcx+FvcqKiJohGBBGjRPHyB4imE0u72Akix1bsBAsriyiKokQ7CQoKaiGKCpGAjSI2golXhIR4v3USbzExicViiCHndy55d95zdp4H3iYLM7+d3c+emd0hCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJsq73AFOyMckVmd3ntxp9n+T33kNQ25hkV5IjSU5Yg64jSZ5NcuGirxJdrEuyJ/3fKGNfu+Mv96p0W/q/OazJurV+qdaO9b0HaOiW3gNw0rbeA7QyS4Fc0HsATjqv9wCtzFIg0JxAoCAQKGzoPcAqcSDJd0mON9zmukx+rLy+4TbP5MskP2by7VEr65NcmeTahtuksx1Z/teRLyW5YcpzbUtycAWzLbb2J7lpyrPfmOSVFcz20JTnYgWWE8ixJHcPONvWTG7DaBXHoSRbBpz/nkyO2egCGes1yANJXhhwfweTvNhwe88n+bbh9payvwcH3N+qMcZAvkqys8N+9zbc1r6G21qqJzNslKvCGAPZmeSfDvs90nBbRxtuazn7fKbDfrsaWyCHkjzXe4g1bFeSP3oPMaSxBbIryW+9h1jDfs3IPmDGFMjxjPAUYQqeTtvfXFa1MQXyepKvew8xAw4keav3EEMZUyBP9R5ghozmWI4lkA+TfNB7iBnybvp81Ty4WQrkcPHY4xnRefMATiR5onj8z6EGmbZZCuSjBf79nSSvDjnISLyc5L0FHlvotaCjczK5s/XUe4L2Jtncc6hTzKfdvVh3DTv6gi5L8mn+P9tnSeZ6DsXCrkvyfia3kzya1fVf0Mxn9gJJkk2ZnMJ+k8lfFLfIsyLzmc1AZtosXYNAcwKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIZDhzDbfldRuIAz2crQ23dXXDbUF3c0n2JznRaH0eH27MkPvTLo7/1n2DPgOYkvkkx9I+kKNJ7hzuaUA7m5LckWR32odx+nozyfYkGwd5ZrBCV2Vy2rMnyd+Zfhinr8NJ3k5yb5ItU36usKi5JNuSPJLkkwwfxGLr4yQ7ktwcF/QM6KIkjyX5Jf0jWOr6OcnDmZz6wdRck+Rg+r/hV7r2Z3IqCM2dm+SL9H+Tn+3al2RD42MD2Z7+b+5W6/bGx2ZmuXhbukt6D9DQ5t4DMHsuzeRit/en/9muH5Jc3PjYQJLJRfobmfyK3fuNvtx1NMlrcaPjsqzrPcAadX6Sy7N2TlGPJ/kpyV+9BwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM7kX8fwvIWqet/rAAAAAElFTkSuQmCC';
    }
    layers += temp.replace(/{id}/ig,obj.id)
    .replace("{src}",src)
    .replace("{_id}",obj.id)
    .replace(/{index}/ig, i+1);
  }
  if(layers != "")
  {
    $layers.html(layers);  
    $("#layers .layer-item").on("click",function() {
      layerSelectEventHandler(this, false);
    })
  }
  else{ $layers.html("Empty! please upload an image.");}
}
function layerSelectEventHandler($elem, selected)
{ showLayerControls($elem,selected);
}
function clearLayerSelection()
{
  for(var i =0;i<canvas._objects.length;i++)
  {
    var id = canvas._objects[i].id;
    $(`#${id} .layers-controls`).attr("style","display:none !important");
    $(`#${id}`).removeClass("selected-layer");
  }
 
}
function showLayerControls($elem, selected)
    {
        var target = $elem;
        var index = parseInt($elem.getAttribute("data-index"))-1;        
        var preObj = canvas.selectedObj?.target;
        if(preObj?.id != target.id)
        { 
            $(`#${target.id} .layers-controls`).show();
            $(`#${target.id}`).addClass("selected-layer");
           
            canvas.discardActiveObject();
            canvas.requestRenderAll();
            canvas.setActiveObject(canvas.item(index));
            if(preObj)
            {
                $(`#${preObj.id} .layers-controls`)
                .attr("style","display:none !important");
                $(`#${preObj.id}`).removeClass("selected-layer");                
            }
            canvas.selectedObj = canvas.item(index);
            
        }

        initLayerEvents($elem)
       
}
function initLayerEvents($elem) {
var id = $elem.id;

  $(`#${id} .delete`).on("click",function(e){
    e.stopPropagation();
     canvas.remove(canvas.selectedObj).renderAll();
     addLayer();
  })

  $(`#${id} .duplicate`).on("click",function(e){
    e.stopPropagation();
    var object = fabric.util.object.clone(canvas.getActiveObject());
    object.set("top", object.top+5);
    object.set("left", object.left+5);
    canvas.add(object);
  })

  $(`#${id} .bring-fwd`).on("click",function(e){
    e.stopPropagation();
    var obj = canvas.getActiveObject();
   
    canvas.bringForward(obj)
    canvas.renderAll();
    var elem = $(`#${id}`);
    elem.prev().insertAfter(elem);
  })

  

}
/** */

 InitUIEvents();
 initCanvasEvents();

  function toast(message) {
    var $toast = $("#snackbar").addClass("show");
    $toast.text(message);
    setTimeout(function(){ 
        $toast.removeClass("show")

    }, 3000);
}
})()