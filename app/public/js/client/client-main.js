

var canvas      = new fabric.Canvas("client-main-canvas",       {preserveObjectStacking: true})
var canvasPrev  = new fabric.Canvas("client-main-canvas-logo",  {preserveObjectStacking: true});
var cropCanvas  = new fabric.Canvas("cropCanvas",               {preserveObjectStacking: true});

const dpi = 72;
// const defaults = {
//     fontSize:36,
//     fontFill: '#000',
//     fontFamily:'Arial',
//     strokeWidth: 10,
//     logoDisplaySize:500
// }

const letterPageSize = {
    width: (8.5 * dpi),
    height: (11 * dpi)
}
const enabledSaveInBrowser = true;
var state = {
    isPreviewCanvas: false

}
var rulerSettings = {
    vRuleSize: 28, hRuleSize: 25, showCrosshair: false, showMousePos: false
}

var layerHtml = `<div class="media d-block d-flex layer-item object-options" data-index='{index}' id='{id}'  >
    <div class="d-block mg-sm-r-10 img"> <img src="{src}" class="wd-30" alt="Image" ></div>
    <div class="d-sm-flex layer-label tx-bold">Layer {index}</div>
    <div class="d-sm-flex layers-controls" style="display:none !important">
    <i class='ion-ios-copy-outline duplicate main-tool-button'   title='duplicate' ></i>
    <i class='ion-ios-upload-outline bring-fwd' title="move up" id="bring-fwd" ></i>
    <i class='ion-ios-download-outline bring-back' title="move down" id="bring-back" ></i>
    <i class='ion-ios-trash-outline delete main-tool-button' title='delete' ></i>
    </div>
   </div>`;

// var projectHtml = `<div class='my-projects'><div class="list-group-item d-flex">
// <div class="media d-block d-sm-flex">
//   <div class="d-block d-sm-flex ">
//     <img src="{base64}" class=" wd-100" alt="Image">
//   </div><!-- d-flex -->
//   <div class="media-body pd-15">
//     <h6 class="mg-b-5 tx-14"><a href="#" class="tx-inverse hover-primary tx-bold" onclick="loadProject('{code}',false)" id='{code}' >{title}</a></h6>
//     <p class='tx-12'>{desc}</p>
//     <p class="mg-b-0 tx-12">{created_dt}</p>
//   </div><!-- media-body -->
// </div><!-- media -->
// <a href="#" class="pd-lg-x-20 mg-l-auto ion-trash-a tx-30 text-secondary delete"  onclick="deleteProject('{code}',this)" ></a>
// </div></div>`;

const projectHtml = `
<div class="col-md">
              <div class="card bg-gray-200">
                <div class="card-body">
                  <h5 class="card-body-title">{{title}}</h5>
                  <p class="card-subtitle tx-normal mg-b-15">{{desc}}</p>
                  <p class="card-text">
                  <img src="{{src}}" class=" wd-100" alt="Image">
                  </p>
                  <a href="#"  onclick="loadProject('{{code}}',false)" class="card-link">Edit</a>
                  <a href="#" onclick="deleteProject('{{code}}',this)" class="card-link">Delete</a>
                </div>
              </div><!-- card -->
            </div>
`

const designHtml = `<div class='pre-designed'>
<div class="list-group-item  pd-0">
<div class="media d-block ">
  <div class="d-block ">
    <img src="{{base64}}" class="wd-100" alt="Image">
  </div>
  <div class="media-body pd-15">
    <h6 class="mg-b-5 tx-14 "><a href="#" class="tx-inverse hover-primary tx-bold"  id='{{code}}' >{{title}}</a></h6>
    <p class="mg-b-0 tx-12 tx-bold">{{created_dt}}</p>
    <p class="mg-b-0 tx-12 tx-bold">Sheet Size: {{sheetSize}}</p>
    <p class="mg-b-0 tx-12 tx-bold">Logo Size: {{logoSize}}</p>
    <p class="mg-b-0 tx-12 tx-bold">Total Logos: {{totalLogos}}</p>
    <p class="mg-b-0 tx-12 tx-bold tx-uppercase">Format: {{pageFormat}}</p>
    <a href="#" class="btn btn-sm btn-primary"  onclick="loadProject('{{code}}')" class="card-link">Edit</a>
  </div>
</div>
</div>
</div>`;


// vars
$btnDownloadPDF = $("#btn-download-pdf");
$btnUploadImage = $("#btn-upload-img");
$btnUploadImageHidden = $("#btn-upload-img-hidden");
$layers = $("#layers");
$btnRepeatDesign = $("#repeatdesign");

$canvasPrev = $("#client-main-canvas-logo");
$btnSave = $("#btnSave");
// $repeatImageCtrl = $("#repeat-image-ctrl");
// $btnCancelRepeatDesign = $("#repeat-image-ctrl .cancel");
// $btnApplyToOne = $("#repeat-image-ctrl .done");
// $btnApplyRepeatDesign = $("#applytoall");
$templatepanel = $("#templatepanel");
$clipartPanel = $("#clipartmenu");
$btnTextMenu = $("#btnTextMenu");
$textarea = $("#textarea");

$btnTextSize = $("#btnTextSize,#btnTextSize-range ");
$saveBrowserTxt = $("#save-browser-txt");
$rotateObj = $("#rotateObj");
$previewSaveDesign = $("#prevesavdesign");
$pageTitle = $("#page-title");
$loader = $("#loader");
$btnTemplate = $("#btnTemplate");
// $btnMyProject = $("#btnMyProject");
// $btnDeleteMyProject = $("#myprojects .delete");


$btnUploadpanel = $("#uploadpanel");


/**maintool */
$btnRotate = $("#rotate, #rotateText");
$btnFlipX = $("#btnFlipX");
$btnFlipY = $("#btnFlipY");
$btnGrayScale = $("#btnGrayScale");
$btnUndo = $("#btnUndo");
$btnRedo = $("#btnRedo");
/** */

/** workspace */
$imgCtrl = $("#workspace-right-panel .img-ctrl");
$txtCtrl = $("#workspace-right-panel .txt-ctrl");
$txtDecorationCtrl = $("#workspace-right-panel .txt-ctrl .text-decoration");

$mainCtrl = $("#workspace-right-panel .main-ctrl");
/** */


fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.cornerStyle = 'circle';
fabric.Object.prototype.borderColor = '#000';
fabric.Object.prototype.cornerColor = '#494699';
fabric.Object.prototype.cornerStrokeColor = '#000';
fabric.Object.prototype.cornerSize = 10;
fabric.Object.prototype.padding = 3;


var Direction = {
    LEFT: 0,
    UP: 1,
    RIGHT: 2,
    DOWN: 3
};
fabric.util.addListener(document.getElementById('client-main-canvas'), 'keydown', function (options) {
    if (options.repeat) {
        return;
    }
    options.stopPropagation();
    options.preventDefault();

    var key = options.which || options.keyCode; // key detection
    if (key === 37) { // handle Left key
        moveSelected(Direction.LEFT);
    } else if (key === 38) { // handle Up key
        moveSelected(Direction.UP);
    } else if (key === 39) { // handle Right key
        moveSelected(Direction.RIGHT);
    } else if (key === 40) { // handle Down key
        moveSelected(Direction.DOWN);
    }
});


async function parseClipboardData() {
    if(!window.isSecureContext)
    {
        console.error();
        toast("You are not running into secure origin - Please use CTRL+V to paste.");
        return;
    }
    
    const items = await navigator.clipboard.read().then((items)=>{
        for (let item of items) {
            for (let type of item.types) {
              if (type.startsWith("image/")) {
              
              
              item.getType(type).then((imageBlob) => {
                let url = window.URL.createObjectURL(imageBlob);
                fabric.Image.fromURL(url, function (img) {
                    img.globalCompositeOperation = 'source-atop';

                    canvas.add(img);
                    canvas.renderAll();
                })
                  // const image = `<img src="${}" />`;
                  // $container.innerHTML = image;
                });
                $('#pasteClipboard').css({'display':'none'});
                return true;
              }
            }
          }
          $('#pasteClipboard').css({'display':'none'});

    }).catch((err) => {
      console.error(err);
      $('#pasteClipboard').css({'display':'none'});
    });
   
    
  }

fabric.CurvedText = fabric.util.createClass(fabric.Object, {
    type: 'curved-text',
    diameter: parseInt($("#curveTextCtrl").val()) || 250,
    kerning: 0,
    //flipped:    $("#inputFlipText").prop("checked") || false,
    fill:       $("#fontColorBox").val() || '#000000',
    fontFamily: $("#fontlist").attr("data-value") || 'Arial',
    fontSize: parseInt($("#btnTextSize").val()), // in px
    fontWeight: 'normal',
    fontStyle: '', // "normal", "italic" or "oblique".
    cacheProperties: fabric.Object.prototype.cacheProperties.concat('diameter', 'kerning', 'flipped', 'fill', 'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'strokeStyle', 'strokeWidth'),
    //strokeStyle: null,
    stroke: $("#inputStrokeText").is(":checked")?(parseInt($("#strokecolor").val())):null,
    strokeWidth: $("#inputStrokeText").is(":checked")?(parseInt($("#text-stroke-width").val())):null,
    paintFirst: "stroke",
    text: '',

    initialize: function (text, options) { // this = (typeof(text) ==='object')?text:this;
        options || (options =
            {});

        // if((typeof(text) === 'object')) {
        //     this.self = text;
        // }

        this.text = text.text || text;
        if(text.text)
        {
            for(var i in text)
            { this[i] = text[i]; }
        }

        this.callSuper('initialize', options);
        this.set('lockUniScaling', true);

        // Draw curved text here initially too, while we need to know the width and height.
        var ___canvas = this.getCircularText();
        this._trimCanvas(___canvas);
        this.set('width', ___canvas.width);
        this.set('height', ___canvas.height);
    },

    _getFontDeclaration: function () {
        const fontWeight =  this.fontWeight;
        const fontStyle =   this.fontStyle;
        const fontSize =    this.fontSize;
        const fontFamily =  this.fontFamily;
        return [
            // node-canvas needs "weight style", while browsers need "style weight"
            (fabric.isLikelyNode ? fontWeight : fontStyle),
            (fabric.isLikelyNode ? fontStyle : fontWeight),
            fontSize + 'px',
            (fabric.isLikelyNode ? ('"' + fontFamily + '"') : fontFamily)
        ].join(' ');
    },

    _trimCanvas: function (canvas) {
        var ctx = canvas.getContext('2d'),
            w = canvas.width,
            h = canvas.height,
            pix = {
                x: [],
                y: []
            },
            n,
            imageData = ctx.getImageData(0, 0, w, h),
            fn = function (a, b) {
                return a - b
            };

        for (var y = 0; y < h; y++) {
            for (var x = 0; x < w; x++) {
                if (imageData.data[(
                        (y * w + x) * 4
                    ) + 3] > 0) {
                    pix.x.push(x);
                    pix.y.push(y);
                }
            }
        }
        pix.x.sort(fn);
        pix.y.sort(fn);
        n = pix.x.length - 1;

        w = pix.x[n] - pix.x[0];
        h = pix.y[n] - pix.y[0];
        var cut = ctx.getImageData(pix.x[0], pix.y[0], w, h);

        canvas.width = w;
        canvas.height = h;
        ctx.putImageData(cut, 0, 0);
    },

    // Source: http://jsfiddle.net/rbdszxjv/
    getCircularText: function () {
        
        var text = this.text,
            diameter = this.diameter,
            flipped = $("#inputFlipText").prop("checked") || this.flipped,
            kerning = this.kerning,
            fill = this.fill,
            inwardFacing = true,
            startAngle = 0,
            canvas = fabric.util.createCanvasElement(),
            ctx = canvas.getContext('2d'),
            cw, // character-width
            x, // iterator
            clockwise = -1; // draw clockwise for aligned right. Else Anticlockwise

        if (flipped) {
            startAngle = 180;
            inwardFacing = false;
        }

        startAngle *= Math.PI / 180;
        // convert to radians

        // Calc heigt of text in selected font:
        var d = document.createElement('div');
        d.style.fontFamily = this.fontFamily;
        d.style.whiteSpace = 'nowrap';
        d.style.fontSize = this.fontSize + 'px';
        d.style.fontWeight = this.fontWeight;
        d.style.fontStyle = this.fontStyle;
        d.textContent = text;
        document.body.appendChild(d);
        var textHeight = d.offsetHeight;
        document.body.removeChild(d);

        canvas.width = canvas.height = diameter;
        ctx.font = this._getFontDeclaration();

        // Reverse letters for center inward.
        if (inwardFacing) {
            text = text.split('').reverse().join('')
        };

        // Setup letters and positioning
        ctx.translate(diameter / 2, diameter / 2); // Move to center
        startAngle += (Math.PI * ! inwardFacing); // Rotate 180 if outward
        ctx.textBaseline = 'middle'; // Ensure we draw in exact center
        ctx.textAlign = 'center';
        // Ensure we draw in exact center

        // rotate 50% of total angle for center alignment
        for (x = 0; x < text.length; x++) {
            cw = ctx.measureText(text[x]).width;
            startAngle += ((cw + (x == text.length - 1 ? 0 : kerning)) / (diameter / 2 - textHeight)) / 2 * - clockwise;
        }

        // Phew... now rotate into final start position
        ctx.rotate(startAngle);

        // Now for the fun bit: draw, rotate, and repeat
        for (x = 0; x < text.length; x++) {
            cw = ctx.measureText(text[x]).width;
            // half letter
            // rotate half letter
            ctx.rotate((cw / 2) / (diameter / 2 - textHeight) * clockwise);
            // draw the character at "top" or "bottom"
            // depending on inward or outward facing

            // Stroke
            //const strokeStyle = this.strokeStyle;
            //const strokeWidth = this.strokeWidth;
            const strokeStyle = this.stroke;
            const strokeWidth = this.strokeWidth;
            if (strokeStyle && strokeWidth) {
                ctx.strokeStyle = strokeStyle;
                ctx.lineWidth = strokeWidth;
                ctx.strokeWidth = strokeWidth;
                ctx.stroke = strokeStyle;
                //ctx.miterLimit = 2;
                ctx.strokeText(text[x], 0, (inwardFacing ? 1 : -1) * (0 - diameter / 2 + textHeight / 2));
            }

            // Actual text
            ctx.fillStyle = fill;
            ctx.fillText(text[x], 0, (inwardFacing ? 1 : -1) * (0 - diameter / 2 + textHeight / 2));
            ctx.rotate((cw / 2 + kerning) / (diameter / 2 - textHeight) * clockwise); // rotate half letter
        }
        return canvas;
    },

    _set: function (key, value) {
        switch (key) {
            case 'scaleX':
                this.fontSize *= value;
                this.diameter *= value;
                this.width *= value;
                this.scaleX = 1;
                if (this.width < 1) {
                    this.width = 1;
                }
                break;

            case 'scaleY':
                this.height *= value;
                this.scaleY = 1;
                if (this.height < 1) {
                    this.height = 1;
                }
                break;

            default:
                this.callSuper('_set', key, value);
                break;
        }
    },

    _render: function (ctx) {
        
        var canvas = this.getCircularText();
        this._trimCanvas(canvas);
        this.set('width', canvas.width);
        this.set('height', canvas.height);
        const width = this.width;
        const height = this.height;
        ctx.drawImage(canvas, - width / 2, - height / 2, width, height);
        this.setCoords();
        //this.left = this.text.left || this.left;
        //this.top = this.text.top || this.top;
    },

    toObject: function (propertiesToInclude) {
        return this.callSuper('toObject', [
            'text',
            'diameter',
            'kerning',
            'flipped',
            'fill',
            'fontFamily',
            'fontSize',
            'fontWeight',
            'fontStyle',
            'strokeStyle',
            'strokeWidth'
        ].concat(propertiesToInclude));
    }
});

fabric.CurvedText.fromObject = function (object, callback, forceAsync) {
    return fabric.Object._fromObject('CurvedText', object, callback, forceAsync, 'curved-text');
};



fabric.util.addListener(canvas.upperCanvasEl, 'dblclick', function (e) {
    var target = canvas.findTarget(e);
    ungroup(e);
});


var enabledTextMode = false;

var filters = [
    'grayscale',
    'invert',
    'remove-color',
    'sepia',
    'brownie',
    'brightness',
    'contrast',
    'saturation',
    'vibrance',
    'noise',
    'vintage',
    'pixelate',
    'blur',
    'sharpen',
    'emboss',
    'technicolor',
    'polaroid',
    'blend-color',
    'gamma',
    'kodachrome',
    'blackwhite',
    'blend-image',
    'hue',
    'resize'
];


function getUserProjects() {
    $loader.removeClass("hidden");
    backFromPreview();
    $.get(`/api/my-designs/`, function (res) {
        
        if(res.error)
        {
            $loader.addClass("hidden");
            toast("Error Loading Projects");
            console.error(res.exception); 
            return; 
        }

        var projects = res.data || [];
        var temp = "";
        $("#my-proj-container").html("<p>No Project found.</p>");
        for (var i = 0; i < projects.length; i++) {
            var p = projects[i];
            var desc = p.title.lenght>50?p.title.substring(0, p.title.length):p.title;
            temp += projectHtml.replace(/{{code}}/ig, p._id)
            .replace(/{{src}}/ig, p.path)
            .replace(/{{title}}/ig, p.title)
            .replace(/{created_dt}/ig, new Date(p.created_dt).toDateString())
            .replace(/{{desc}}/ig, p.desc);
            $("#my-proj-container").html(temp);
        }
        $loader.addClass("hidden");
    })

}


function getSharedProjects() {
    $loader.removeClass("hidden");
    $.get(`/api/custom-designs`, function (res) {
        $loader.addClass("hidden");
        var projects = res.data || [];

        var temp = "";
        $("#kp-designs-container").html("<p>No Project found.</p>");

        projects?.forEach(item=>{
            let meta = JSON.parse(item.meta);
            temp += designHtml
            .replace(/{{code}}/ig, item._id)
            .replace(/{{base64}}/ig, item.path)
            .replace(/{{title}}/ig, item.title)
            .replace(/{{created_dt}}/ig, new Date(item.created_dt).toDateString())
            .replace(/{{sheetSize}}/ig, `${getInches(meta.sheetWidth,meta.sheetHeight)}"`)
            .replace(/{{logoSize}}/ig, `${getInches(meta.logoWidth,meta.logoHeight)}"`)
            .replace(/{{pageFormat}}/ig, meta.pageFormat)
            .replace(/{{totalLogos}}/ig, meta.totalLogos);
        })
       
        $("#kp-designs-container").html(temp);

    }).fail(function (ex) {
        console.log(ex);
        toast('Something went wrong! please contact to admin.');
    })

}

// function loadUserProject(id) {
//     var group = [];
//     $.get(`/api/project/${id}`, function (data) {
//         const json = data.json;

//         if (!json) { return; }

//         var object = JSON.parse(json);
//         canvas.clear();
//         canvasPrev.clear();
//         canvasPrev.loadFromJSON(json, function () {
//             state.isPreviewCanvas = true;
//             $("#repeat-image-ctrl #previewdesign").hide();
//             $("#repeat-image-ctrl #backtodesign").show();
//             $clientMainCanvas.parent().fadeOut();
//             $canvasPrev.parent().fadeIn();
//             canvas.setWidth(8.5 * dpi);
//             canvas.setHeight(11 * dpi);
//             canvasPrev.renderAll.bind(canvasPrev);
//             // $("#template-info-panel .template-name").text(data.name);
//             // $("#template-info-panel .template-desc").text(data.desc || "NA");
//             // $("#template-info-panel .template-desc").text(data.modified_dt || "NA");
//             // $("#use-project").attr("href",`/app/workspace/project/${data.code}`);

//             // $imgCtrl.each(function () {
//             //     $(this).removeClass("hidden");
//             // })
//         }, function (o, object) {
//             // console.log(o,object)
//         })
//     })
// }


function deleteProject(id, self) {

    if (!confirm("Do you want to delete this project?")) {
        return;
    }
    $loader.removeClass("hidden");

    $.ajax({
        type: "DELETE",
        url: `/api/my-designs/${id}`,
        success: function (res) {
            $loader.addClass("hidden");
            if(res.error)
            {
                toast("Error deleting project.");
                console.error(res.message);
            }else{

                toast("Project has been successfully deleted.");
                $(self).parent().parent().fadeOut();

            }
        },
        error: function (res) {
            $loader.addClass("hidden");
            toast("Error while deleting project.");
        }
    })
}
// function loadProject(id) {
//     $loader.removeClass("hidden");
//     state.isPreviewCanvas = false;
//     var group = [];
//     $("#btnBack").trigger("click");
//     $.get(`/api/project/${id}`, function (res) {
//         $loader.addClass("hidden");
//         const json = JSON.parse(res.data.json);
//         if (! json) {
//             return;
//         }
//         canvas.clear();
//         /// loading design 
//         canvas.loadFromJSON(json, function () {
//             $("#menu-upload > a").click();
            
//         }, function (o, object) {
//         })

//         /// loading template 
//         fabric.loadSVGFromURL(res.template.base64, function (objects, options) { // $canvasPrev.fadeOut();
//             var loadedObjects = new fabric.Group(group);
      
//             var templateWidth = options.viewBoxWidth;
//             var templateHeight = options.viewBoxHeight;

//             let isLandspace = (templateWidth > templateHeight);
//             canvasPrev.setDimensions({width: templateWidth, height: templateHeight});

//             let __f = 0.9;
//             if (isLandspace) {
              
//                 templateWidth = options.viewBoxHeight;
//                 templateHeight = options.viewBoxWidth;
//             }
//             let __w = parseInt(templateWidth*__f); 
//             let __h = parseInt(templateHeight*__f);
//             $("#client-main-canvas-logo").css({"width":`${__w}px`,"height":`${__h}px`,"padding":"1px","left":"21px"});
            
//             canvasPrev.setBackgroundImage(loadedObjects, canvasPrev.renderAll.bind(canvasPrev));
//             canvasPrev.renderAll();
//             loadedObjects.center().setCoords();

           


//         }, function (item, object) {
//             object.set({fill:"#fff"});
//             object.set('id', item.getAttribute('id'));
//             group.push(object);
//         });

//     }).fail(function (err) {
//         $loader.addClass("hidden");
//         toast("Something went wrong! Please contact admin.");
//         console.log(err);
//     })
// }

function loadDesign(id) {
    state.isPreviewCanvas = false;
    var group = [];
    $("#btnBack").click();
    $loader.removeClass("hidden");
    $.get(`/api/custom-design/${id}`, function (res) {
        $loader.addClass("hidden");
        const json = JSON.parse(res.data.json);
        if (! json) {
            return;
        }
        canvas.clear();

        // / this is to set the canvas to load design.
        canvas.loadFromJSON(json, function () {
            $("#menu-upload > a").click();
        }, function (o, object) { // console.log(o,object)
        })

        // / this is to set the previous canvas to load template.
        // / we pre load the template and use this while preview.
        fabric.loadSVGFromURL(res.template.base64, function (objects, options) {
            var loadedObjects = new fabric.Group(group);
            var templateWidth = options.viewBoxWidth;
            var templateHeight = options.viewBoxHeight;
            canvasPrev.setDimensions({width: templateWidth, height: templateHeight});
            let isLandspace = (templateWidth > templateHeight);
            let __f = 0.9;
            if (isLandspace) {
              
                templateWidth = options.viewBoxHeight;
                templateHeight = options.viewBoxWidth;
            }


            
            canvasPrev.setBackgroundImage(loadedObjects, canvasPrev.renderAll.bind(canvasPrev));
           
            let __w = parseInt(templateWidth*__f); 
            let __h = parseInt(templateHeight*__f);

            // $("#client-main-canvas-logo").css({"width":`${__w}px`,"height":`${__h}px`,"padding":"1px","left":"-21px"})

            canvasPrev.setBackgroundImage(loadedObjects, canvasPrev.renderAll.bind(canvasPrev));
            canvasPrev.renderAll();
            loadedObjects.center().setCoords();

        }, function (item, object) {
            object.set({"fill":"#fff"});
            object.set('id', item.getAttribute('id'));
            group.push(object);
        });

    }).fail(function (err) {
        $loader.addClass("hidden");
        toast("Something went wrong! Please contact admin.");
        console.log(err);
    })
}



/***
 * Workspace canvas.
 */



function applyFilter(index, filter) {
let __canvas =  state.isPreviewCanvas?canvasPrev:canvas;
    var obj = __canvas.getActiveObject();
    obj.filters[index] = filter;
    // if (!obj.filterIndex && obj.filterIndex != 0) {
    //     obj.filters[index] = true && filter;
    //     obj.filterIndex = index;
    // } else {
    //     obj.filters[index] = false && filter;
    //     obj.filterIndex = null;
    // }
    obj.applyFilters();
    __canvas.renderAll();
}

function applyFilterValue(index, prop, value) {
    var obj = canvas.getActiveObject();
    if (obj.filters[index]) {
        obj.filters[index][prop] = value;
        obj.applyFilters();
        canvas.renderAll();
    }
}
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
    cropped.src = cropCanvas.toDataURL({
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
    });

 
    // after onload clear the canvas and add cropped image to the canvas
    cropped.onload = function () {
        //canvas.clear();
        image = new fabric.Image(cropped);
        image.left = rect.left;
        image.top = rect.top;
        image.setCoords();
        //let originalImage = canvas.getActiveObject();
        //canvas.remove(originalImage);
        cropCanvas.add(image);
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
        transparentCorners: false,
        cornerColor: "white",
        cornerStrokeColor: "black",
        borderColor: "black",
        cornerSize: 12,
        padding: 0,
        cornerStyle: "circle",
        borderDashArray: [5, 5],
        borderScaleFactor: 1.3,
    });
    //selectionRect.scaleToWidth(200);
    cropCanvas.centerObject(selectionRect);
    cropCanvas.add(selectionRect);
    cropCanvas.setActiveObject(selectionRect);

}

function menuHighlighter(itemToHighlight) {
    $("#toolbar .nav-item").each(function (e) {
        $(this).removeClass('bg-menu-highlight');
    })

    $(itemToHighlight).addClass("bg-menu-highlight");
}

function menuPanelDisplay(itemToDisplay) {
    $("#menu-panel > .tab-content > .tab-pane").each(function (e) {
        $(this).removeClass('active');
        $(this).removeAttr("style");
    })

    $(itemToDisplay).addClass("active");
}

function initContextMenu()
    {
        let timeout = false;
        fabric.util.addListener(document.getElementsByClassName('upper-canvas')[0], 'contextmenu', function(e) {
            e.preventDefault();
          
            var cnvsPos = $('#client-main-canvas').offset();
            curX = e.clientX - cnvsPos.left+50;
            curY = e.clientY - cnvsPos.top+80;
            $('#pasteClipboard').css({'position':'absolute', 'top': curY, 'left': curX, 'display':'block'});
          
          /// hide contextmenu in 3 seconds.
          if(!timeout)
          {
            timeout = true; 
            setTimeout(function(){
                timeout = false; 
                $('#pasteClipboard').css({'display':'none'});
            },5000); 
          }
        });

        $("#workarea").on("click",function(){
            $('#pasteClipboard').css({'display':'none'});
        })
    }




function drawTextAlongArc(context, str, centerX, centerY, radius, angle) {
    var len = str.length, s;
    context.save();
    context.translate(centerX, centerY);
    context.rotate(-1 * angle / 2);
    context.rotate(-1 * (angle / len) / 2);
    for(var n = 0; n < len; n++) {
      context.rotate(angle / len);
      context.save();
      context.translate(0, -1 * radius);
      s = str[n];
      context.fillText(s, 0, 0);
      context.restore();
    }
    context.restore();
  }
function initUIUndoRedo(){
    $("#undo").on("click",function(){
        canvasUndo.undo();
    });
    $("#redo").on("click",function(){
        canvasUndo.redo();
    });
}

var selectionRect;
function initUIEvents() {
    initUIUndoRedo();
    initImageSelectionUIControls();
    /// disable previous date in rfq calandar.
    $(function(){
        var dtToday = new Date();    
        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
         day = '0' + day.toString();
        var maxDate = year + '-' + month + '-' + day;
        $('#rfqRequiredByDt').attr('min', maxDate);
    });

    initContextMenu();
   

    $("#btnFaqPopup").on("click",(e)=>{
        $.get('/app/faq',(res)=>{
            $("#faq-contanier").html(res);
          })
    })

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
    });

 
    // after onload clear the canvas and add cropped image to the canvas
    cropped.onload = function () {
        //canvas.clear();
        cropCanvas.clear();
        image = new fabric.Image(cropped);
        image.left = rect.left;
        image.top = rect.top;
        image.setCoords();      
        let originalImg = canvas.getActiveObject(); 
        canvas.remove(originalImg); 
        image.globalCompositeOperation = 'source-atop';
        canvas.add(image);
        canvas.renderAll();
    };

        




    })

    $("#btnCropModal").on("click",(e)=>{
        cropRect=null; 
        cropCanvas.clear();
        cropCanvas.isCropped = false; 
        let img = canvas.getActiveObject(); 
        if(img)
        {
            let imgSrc = img._element.src;
            fabric.Image.fromURL(imgSrc, function (img) {
                img.scaleToWidth(250);
                img.scaleToHeight(250);
                let w = img.getScaledWidth(); 
                let h = img.getScaledHeight();
                cropCanvas.setDimensions({width:w,height:h})
                cropCanvas.add(img);
                cropCanvas.renderAll();
                addSelectionRect(img);
            })

        }

    })

    $("#cbRfqShip").on("click", function (e) {
      
        if(e.target.checked)
        {
            $("#rfqShippingInfo").addClass('hidden');
        }else{
            $("#rfqShippingInfo").removeClass('hidden');
           
        }
         
 
     })

    $("#formRFQ").submit(function(e) {

        e.preventDefault();         
        var form = $(this);
        var actionUrl = form.attr('action');
        var formData = new FormData(form[0]);
       
          
        generatePDFfromPreview(true,(pdfBase64)=>{

            formData.append('file', pdfBase64);
            $loader.removeClass("hidden");
            $.ajax({
                type: "POST",
                url: actionUrl,
                data: formData, // serializes the form's elements.
                async: false,
                success: function (data) {
                    //toast('Thank you, Your request has been submitted, we will contact you soon.');
                    form.trigger('reset');
                    $('#rfq').modal('toggle');
                    $loader.addClass("hidden");
                    $("#rfq_confirm").modal();
                },error: function (request, status, error) {
                    toast('Server Error: Form could not be submitted.');
                    form.trigger('reset');
                    $('#rfq').modal('toggle');
                    $loader.addClass("hidden");
                },
                cache: false,
                contentType: false,
                processData: false,
               
            });
        
        });
  
    });
    $("#menu-save-design").on("click",function(e){
        e.preventDefault();
        e.stopPropagation(); 
        return false;
        
        
    })
/**
 * Confirm Boxes
 */



$("#btnLibraryModal").on("click",function(e){
    // $("#btnModelContinue").text("Continue");
    // $("#confirmBoxBody").text("Do you want to discard your changes?");
    // $("#btnModelContinue").unbind().on("click", function (e) {
    //     e.preventDefault();       
    //     canvas.clear();
    //     canvasPrev.clear();
    //     $layers.html();
    //     getSharedProjects();
    //     $("#libraryLink").click();
    //     menuHighlighter("#btnLibrary");
    // })
    getSharedProjects();
})

//Menu: My Save Design Button. 

 $("#btnMyProjectsModal").on("click",function(e){
    getUserProjects();
//     // $("#btnModelContinue").text("Continue");
//     // $("#confirmBoxBody").text("Do you want to discard your changes?");
//     // $("#btnModelContinue").unbind().on("click", function (e) {
//     //     e.preventDefault();
//     //     canvas.clear();
//     //     canvasPrev.clear();
//     //     $layers.html();

//     //     getUserProjects();
//     //     $("#myProjectLink").click();
//     //     menuHighlighter("#btnMyProjects");        
//     // });

 })

 $("#btnSaveModel").on("click",function(e){
        e.preventDefault();
        $("#btnModelContinue").text("Save Changes");
        $("#confirmBoxBody").text("Do you want to save your changes?");
        $("#btnModelContinue").unbind().on("click",function(e){
            e.preventDefault();
            //saveDesign();
            saveDesign();
        })
       
})
    
$("#btnStartOverModel").on("click",function(e){
        e.preventDefault();
        $("#btnModelContinue").text("Continue"); 
        $("#confirmBoxBody").text("Do you want to discard your changes?"); 
        $("#btnModelContinue").unbind().on("click",function(e){
            const templateId  = selectedTemplateId || 'default';
            loadSVGTemplate(templateId);
            $("#ws-btn-preview").addClass("hidden");
            $("#ws-btn-save").addClass("hidden");
            $btnTemplate.click();
        }); 

        $("#btnSave").unbind().on("click",function(e){
            
            const templateId  = selectedTemplateId || 'default';
            loadSVGTemplate(templateId);
           
        })

       
        
})

 /********* */   
    $btnTemplate.on("click", function () {
        if (state.isPreviewCanvas) { backFromPreview(); }
        $(".step-item:nth-child(3)").removeClass("active");
        $(".step-item:nth-child(2)").addClass("active");
    });
    var layers = $("#layers");

   
    $("#predefinedText").on("change",function(){
        var selectedValue = $(this).val();
        $("#textarea").val(selectedValue);
        $(this).val("");
    })
    $("#collapse-layers").on("click", ".layer-item", function (e) {
        var _canvas = state.isPreviewCanvas ? canvasPrev : canvas;
        // layerSelectEventHandler(this);
        var selected = $(this).index();
        var len = $(layers).children().length;
        _canvas.discardActiveObject().renderAll();

        var obj = _canvas.getObjects().find(i => i.id == this.id);
        _canvas.setActiveObject(obj).renderAll();

        showLayerControls(this);
        $(this).on("click", ".bring-fwd", function (evt) {
            evt.stopPropagation();
            if (selected > 0) {
                _canvas.bringForward(obj);
                jQuery($(layers).children().eq(selected - 1)).before(jQuery($(layers).children().eq(selected)));
                selected = selected - 1;
            }
        });

        $(this).on("click", ".bring-back", function (evt) {
            evt.stopPropagation();
            if (selected < len) {
                _canvas.sendBackwards(obj);
                jQuery($(layers).children().eq(selected + 1)).after(jQuery($(layers).children().eq(selected)));
                selected = selected + 1;
            }
        });
        $(this).on("click", ".duplicate", function (evt) {
         
            evt.stopPropagation();
            let activeObj = _canvas.getActiveObject();
            var t = activeObj.get('type');
           // var object = fabric.util.object.clone(activeObj);

             activeObj.clone(function(object){
                if (t == "i-text" || t == "curved-text") {
                    object.left = object.left + 10; 
                    object.top = object.top + 10; 
                    if(t == "curved-text"){
                      object =   curveText(object);
                    }else{
                        object = addText(object);
                    }
    
                    object.set("top", object.top + 5);
                    object.set("left", object.left + 5);
                    object.set("id", _canvas._objects.length)
                    object.set("index", _canvas._objects.length-1)
                   
                }else
                {
                    
                    object.set("top", object.top + 5);
                    object.set("left", object.left + 5);
                    object.set("id", _canvas._objects.length)
                    object.set("index", _canvas._objects.length-1)
                }
               
                _canvas.add(object);
                _canvas.renderAll();
            })
            
        });
        $(this).on("click", ".delete", function (evt) {
            evt.stopPropagation();
            _canvas.remove(_canvas.getActiveObject()).renderAll();
            addLayer();
        })

    })


    $("#btn-step-design").on("click", function (e) {
        e.preventDefault();
        $("#menu-upload > a").click();
        $(".step-item:nth-child(2)").removeClass("active");
        $(".step-item:nth-child(3)").addClass("active");
    })
    $("#btnCancelSaveDesign").on("click", function () {
        $("#input-project-title").val("");
        $("#input-project-desc").val("");
        $("#btnTemplate").click();
       
    })
    $("#btn-step-preview, #btn-menu-peview").on("click", function (e) {
        e.preventDefault();
        previewDesign();
    });
    $("#btn-step-download").on("click", function (e) {
        e.preventDefault();
        $btnDownloadPDF.click();
    });
    $("#btnBack").on("click", function (e) {
        e.preventDefault();
        backFromPreview();
        $(".step-item:nth-child(4)").removeClass("active");
        $(".step-item:nth-child(3)").addClass("active");
    });
  

    


    rotateObject();
    flipXYObject();
    grayscaleObject();
    brightnessObject();
    contrastObject();

    $("#accordion a").on("click", function () {
        $("#accordion").find('.arrow').each(function () {
            $(this).removeClass("down");
        })
        $(this).find('.arrow').first().addClass("down");
    })
    
   
    $txtDecorationCtrl.on("click", function (e) {
        let __canvas = state.isPreviewCanvas?canvasPrev:canvas;
        var value = $(this).attr("data-value");
        var o = __canvas.getActiveObject();
        if (o && o.type === 'i-text') {
         
            let isTextSelection; 
            if(o.getSelectionStyles)
            { isTextSelection  = o.getSelectionStyles().length > 0; }
             
            if (value === 'bold') {
                var isTrue = o['fontWeight'] === 'bold';


                
               
                if(isTextSelection)
                { o.setSelectionStyles({"fontWeight":isTrue ? '' : 'bold'}) }
                else{
                    o.set({
                        "fontWeight": isTrue ? '' : 'bold'
                    })
                }            
                


            } else if (value === 'italic') {
                var isTrue = o['fontStyle'] === 'italic';
                if(isTextSelection)
                { o.setSelectionStyles({"fontStyle":isTrue ? '' : 'italic'}) }
                else{
                o.set({
                    "fontStyle": isTrue ? '' : 'italic'
                })}

            } else if (value === 'underline') {
                var isTrue = !o['underline'];
                if(isTextSelection)
                { o.setSelectionStyles({"underline":isTrue}) }
                else{
                o.set({
                   "underline":isTrue
                })
                }
            } else if (value === "left" || value === "right" || value === "center") {
                o.set({"textAlign": value})
            }

            __canvas.renderAll();
        }

    })
    $("#font-list-container a").on("click", function (e) {
        let __canvas = state.isPreviewCanvas?canvasPrev:canvas;
        var value = $(this).text() || "Arial, sans-serif";
        $("#fontlist").text(value);
        //$("#selected-font").html($(this).html())
        __canvas.getActiveObject().set("fontFamily", $(this).attr("data-value"));
        __canvas.requestRenderAll();
    })
    $("#text-letter-spacing, #text-letter-spacing-range").on("change", function () {
        setSelectedTextStyle("charSpacing", this.value);
    });
    $("#text-bg-color").on("change", function () {
        setSelectedTextStyle("backgroundColor", this.value);

    });
    $("#text-stroke-color").on("change", function () {
        
        var checked = $("#inputStrokeText").prop("checked");
        if(checked)
        {
            ///setSelectedTextStyle("stroke", this.value);

        }

    });
    $("#text-stroke-width").on("change", function () {

        if($("#inputStrokeText").is(":checked"))
        {
            let __canvas = state.isPreviewCanvas?canvasPrev:canvas;
            let obj = __canvas.getActiveObject(); 
            obj.strokeWidth = parseInt(this.value) || 10;
            __canvas.renderAll();
            //setSelectedTextStyle("strokeWidth", this.value);

        }



    });
    $('#text-line-height').on("change", function () {
        setSelectedTextStyle("lineHeight", this.value);
    });
    $btnUndo.on("click", () => {

        // try {
        //     let undoList = this.history.getValues().undo;
        //     if (undoList.length) {
        //       let current = undoList[undoList.length - 1];
        //       this.history.undo();
        //       current && this.canvas.loadFromJSON(JSON.parse(current), this.canvas.renderAll.bind(this.canvas))
        //     }
        // } catch (_) {
        //     console.error("undo failed")
        // }

    })
    $btnRedo.on("click", () => {

        // alert("undo");
        // canvas.redo();

    })


    $btnFlipX.on("click", () => {
        let __canvas = state.isPreviewCanvas?canvasPrev:canvas;
        var selectedObj = __canvas.getActiveObject();
        selectedObj.set('flipX', ! selectedObj.flipX);
        __canvas.renderAll();
    });

  
    $btnRotate.on("click", function () {
        let __canvas = state.isPreviewCanvas?canvasPrev:canvas;
        var selectedObj = __canvas.getActiveObject();
        if (! selectedObj) {
            toast("Please select an object.");
            return;
        }
        var curAngle = selectedObj.angle;
        selectedObj.rotate(curAngle + 90);
        __canvas.renderAll();
    })

   

    $btnTextMenu.on("click", function (e) {
        canvas.discardActiveObject().renderAll();
        // textControls(false);
    })

    $canvasPrev.parent().hide();

    $("#templatepanel .template").on("click", (e) => {
       
        enabledTextMode = false;
        var id = e.currentTarget.id;
        canvas.clear();
        loadSVGTemplate(id);
    });


    $("#workspace-menu .nav-link").on("click", function (e) {
        const navItem = $(this).parent();
        const id = navItem.attr("id");
        menuHighlighter(navItem);
        menuPanelDisplay(navItem);
        if (canvas._objects.length == 0) {
            $("#template-info-panel").show();
            // $("#layers").parent().hide();
        } else {
            $("#template-info-panel").hide();
            // $("#layers").parent().show();

        }
    })


    




    
}



function setSelectedTextStyle(prop, value) {
    var txt = canvas.getActiveObject();
//  if(txt.type == 'curved-text')
//  {return;}
    txt.set(prop, value);
    canvas.renderAll();

}

function saveDesign() {
    /**
     * . Check is Canvas is not Preview Canvas. 
     * . Check if canvas has atleast one item. 
     * . Validate project info. atleast title should be provided. 
     * . Submit canvas json and project info to api. 
     * . Notify success or failed. 
     */
    // if(state.isPreviewCanvas)
    // {toast("Please go back and save your design."); return;}

    if (canvas.getObjects().length == 0) {
        toast("Please create your design before save.");
        return;
    }

    var title = $("#input-project-title").val();
    var desc = $("#input-project-desc").val();

    if (!title) {
        toast("Please enter project title.");
        return;
    }
    if (title?.length < 3 || title?.length > 50) {
        toast("Title should be greater than 3 and less than 50 characters.");
        return;
    }

    if ( title?.length > 100) {
        toast("Description should be less than 100 characters.");
        return;
    }


    $.ajax({
        type: "POST",
        url: "/app/client/save-design",
        data: {
            desc: desc,
            meta: JSON.stringify(canvas.context),
            title: title,
            name: title,
            active: true,
            base64: JSON.stringify(canvas.toDataURL()),
            json: JSON.stringify(canvas.toDatalessJSON()),
            type: "project",
            by_admin: false,            
        },
        success: function (res) {
            if (typeof(res) === "string") {
                window.location.reload();
                return;
            }
            toast("Design has been Saved.");
            $("#input-project-title").val("");
            $("#input-project-desc").val("");
        },
        error: function (res) {
            if (res.status != 200) {
                toast(`${ res.responseJSON.message}`);
            } else {}
        }
    })
}


function onObjectSelectionCleared(o) {
    hideObjectControls();
}

function onObjectSelection(o) {
    var _canvas = state.isPreviewCanvas ? canvasPrev : canvas;
    var t = _canvas.getActiveObject().get('type');
    if (t == "i-text" || t == "curved-text") {

        textControls(true);
        updateTextControls(o);
        imageControls(false);

    } else {
        textControls(false);
        imageControls(true);
    }


    const id = o.selected[0].id;
    var elem = $(`#${id}`)[0];
    clearLayerSelection();
    // showLayerControls(elem);
    $(`#${id}`).addClass("selected-layer");

}


function updateTextControls(e){
   var item = e.selected[0]; 
   $("#btnTextSize").val(item.fontSize);
   if(item.charSpacing)
   { $("#text-letter-spacing").val(item.charSpacing);}

   $("#inputStrokeText").prop("checked",!!item.stroke); 

   $("#text-letter-spacing").val(item.charSpacing||10)
   

   if(item.strokeWidth)
   { 
    if($("#inputStrokeText").is(":checked"))
    {
        $("#text-stroke-width").val(item.strokeWidth); 
    }
}

   if(item.lineHeight)
   { $("#text-line-height").val(item.lineHeight); }
   if(item.stroke)
   { document.querySelector('#strokecolor')?.jscolor.fromString(item.stroke); }
   document.querySelector('#fontColorBox').jscolor.fromString(item.fill);
   
   $("#fontlist").text(item.fontFamily);
   
}

function initCanvasEvents() {

    canvas.on({
        "selection:updated": onObjectSelection, 
        "selection:created": onObjectSelection, 
        "selection:cleared": onObjectSelectionCleared});

    canvasPrev.on({
        "selection:updated": onObjectSelection, 
    "selection:created": onObjectSelection, 
    "selection:cleared": onObjectSelectionCleared});


    canvas.selectedLayerId = null;
    canvas.on("object:added", (o) => {
        if(o.target.type != "curved-text")
           {
            o.target.id = `obj${canvas._objects.length}`;
            o.target.index = canvas._objects.length - 1;
           }
        onObjectAdded(o);
    })

    canvasPrev.on("object:added", (o) => {
        o.target.id = `obj${
            canvasPrev._objects.length
        }`;
        o.target.index = canvasPrev._objects.length - 1;
        onObjectAdded(o);
    })

    canvas.on("object:modified", (o) => {
        onCanvasModified(o);
    })

    initCanvasTextEvents();
}

function onCanvasModified(o) {
    if (! enabledSaveInBrowser) {
        return;
    }

    

}

function onObjectAdded(o) {
    // $pageTitle.addClass("hidden");
    // $("#maintools > .image-tools").removeClass("hidden");

    addLayer(o);
}




// Layers:

function layerSelectEventHandler($elem, selected) {
    selectedObjectBySelectLayer($elem, selected);
}
function clearLayerSelection() {
    var _canvas = state.isPreviewCanvas ? canvasPrev : canvas;
    for (var i = 0; i < _canvas._objects.length; i++) {
        var id = _canvas._objects[i].id;
        $(`#${id} .layers-controls`).attr("style", "display:none !important");
        $(`#${id}`).removeClass("selected-layer");
    }

}
function selectedObjectBySelectLayer($elem, selected) {
    var _canvas = state.isPreviewCanvas ? canvasPrev : canvas;
    var target = $elem;
    _canvas.discardActiveObject().renderAll();
    var index = parseInt(target.id.replace("obj", "")) - 1;
    _canvas.setActiveObject(_canvas.item(index)).renderAll();


}
function showLayerControls($elem, selected) {
    var target = $elem;

    $(`.layers-controls`).each(function () {
        $(this).hide();
        $(this).addClass('hidden');
        $(this).parent().removeClass('selected-layer')
    }).hide();


    $(`#${
        target.id
    } .layers-controls`).show();
    $(`#${
        target.id
    } .layers-controls`).removeClass('hidden');
    $(`#${
        target.id
    }`).addClass("selected-layer");
   

}


function addWaterMark(doc) {
    var totalPages = doc.internal.getNumberOfPages();

    for (i = 1; i <= totalPages; i ++) {
        doc.setPage(i);
        // doc.addImage(imgData, 'PNG', 40, 40, 75, 75);
        doc.setTextColor(150);
        doc.text(50, doc.internal.pageSize.height - 30, 'Watermark');
    }

    return doc;
}


$btnDownloadPDF.on("click", () => {
    generatePDFfromPreview();
});

$btnUploadImage.on("click", () => {
    $btnUploadImageHidden.click();
})

$btnUploadImageHidden.on("change", (e) => {
    if (e.target.files.length === 0) 
        return;
    
    processFiles(e.target.files);
    $btnUploadImageHidden.val('');
    // $("#menu-clipart > a").click();
})


function triggerNextStep(stepId) {
  
    nextStepWizard = $('div.setup-panel div a[href="#' + stepId + '"]').parent().next().children("a"),
    isValid = true;
    if (isValid) 
        nextStepWizard.removeAttr('disabled').trigger('click');
    
}





// Text:

function toast(message) {

    var $toast = $("#snackbar").addClass("show");
    $toast.text(message);
    setTimeout(function () {
        $toast.removeClass("show");
    }, 5000);
}

function hideWorkspaceControls() {
    $layers.html("Empty! please upload an image.");
    mainControls(false);
    hideObjectControls();
}

function hideObjectControls() {
    imageControls(false);
    textControls(false);
}

function imageControls(show) {

    if (show) {
        $imgCtrl.each(function () {
            $(this).removeClass("hidden");
        })
    } else {
        $imgCtrl.each(function () {
            $(this).addClass("hidden");
        })

    }

}

function textControls(show) {
    if (show) {
        $txtCtrl.each(function () {
            $(this).removeClass("hidden");
        })
    } else {
        $txtCtrl.each(function () {
            $(this).addClass("hidden");
        })
    }
}

function mainControls(show) {
    if (show) {
        $mainCtrl.each(function () {
            $(this).removeClass("hidden");
        })
    } else {
        $mainCtrl.each(function () {
            $(this).addClass("hidden");
        })
    }

}
function initCanvasTextEvents() {
    
    $("#inputFlipText").on("click",function(){
        var obj = canvas.getActiveObject(); 
        const flipped = $("#inputFlipText").is(':checked'); 
        obj.set("flipped",flipped);
        canvas.renderAll();
    })
    $("#inputStrokeText").on("click", function (e) {
        var checked = $(this).prop('checked');
        var obj = canvas.getActiveObject();
        // if(obj.type == "curved-text")
        // { return; }
        var strokeWidth = parseInt($("#text-stroke-width").val());
        var strokeColor = $("#strokecolor").attr('data-current-color');
        if (obj && checked) {
           // obj.stroke      = strokeColor;
            obj.set('stroke',strokeColor);
            obj.strokeWidth = strokeWidth;
            obj.paintFirst  = "stroke";
           
          //  setSelectedTextStyle("stroke", strokeColor);
          //  setSelectedTextStyle("paintFirst", "stroke");
          //  setSelectedTextStyle("strokeWidth", strokeWidth);
        }else
        {
            obj.set('strokeWidth',0)
            obj.set('stroke',null);
        }
        canvas.renderAll();
    });
    
    $("#inputCurvedText").on("click", function (e) {
        
        var obj = canvas.getActiveObject();
        if(!obj){
            toast("Please select Text");
            return;
        }
        if (e.target.checked) {
        //   var flipped = $("#inputFlipText").prop("checked");
        //   obj.flipped = flipped;
        //   var item = new fabric.CurvedText(obj.text, {
        //     type: 'curved-text',
        //     diameter: parseInt($("#curveTextCtrl").val()) || 500,
        //     left: 100,
        //     top: 40,
        //     fontFamily: obj.fontFamily,
        //     fontSize: obj.fontSize,
        //     kerning: 0,
        //     flipped: flipped,
        //     fill: obj.fill,
        //     fontSize: obj.fontSize, // in px
        //     fontWeight: obj.fontWeight,
        //     fontStyle: obj.fontStyle,
        //     cacheProperties: fabric.Object.prototype.cacheProperties.concat('diameter', 'kerning', 'flipped', 'fill', 'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'strokeStyle', 'strokeWidth','stroke'),
        //     stroke: $("#inputStrokeText").is(":checked")?$("#strokecolor").val():null,
        //     strokeWidth: $("#inputStrokeText").is(":checked")?parseInt($("#text-stroke-width").val()):0,
        //     id: obj.id,
        //     index:obj.index
        //     //strokeStyle: obj.strokeStyle,
        //     //stroke:obj.stroke,
        //     //strokeWidth: 2
        // });
        var item = curveText(obj);
        item.globalCompositeOperation = "source-atop";
        canvas.add(item);
        canvas.renderAll();
        canvas.remove(obj)
        canvas.setActiveObject(item);
       
        } else {
            //$("#inputFlipText").prop('checked',false);
            $("#curveTextCtrl").val(1250);
            var obj = canvas.getActiveObject();
            canvas.remove(obj);
           // var c = getCanvasCenter(obj.width,obj.height);
            var textInfo = {

                left        :   obj.left,
                top         :   obj.top,
                fontFamily  :   obj.fontFamily,
                fill        :   obj.fill,
                fontSize    :   obj.fontSize,
                flipped     :   $("#inputFlipText").prop("checked") || false,
                stroke      :   obj.stroke,
                strokeWidth :   obj.strokeWidth,
                paintFirst  :   "stroke",
                fontWeight  : obj.fontWeight,
                fontStyle   : obj.fontStyle,

            };
            
        
            var item = new fabric.IText(obj.text, textInfo);
            
            
            //var item = addText(obj)
            item.globalCompositeOperation = 'source-atop';
            canvas.add(item);            
            canvas.setActiveObject(item);
            canvas.renderAll();
 
        }
        addLayer();
    })
    

    $btnTextSize.on("change", function () {
        canvas.getActiveObject().set("fontSize", this.value);
        canvas.renderAll();
    })

    $("#curveTextCtrl").on("input", function (e) {   
        let val =  e.currentTarget.value;
       console.log(val);
        updateCurveText({"diameter":val});
    })
    $("#curveTextKerning").on("input", function (e) {
        let val = e.currentTarget.value;
        updateCurveText({kerning:val});
    })
   

}

function updateCurveText(valueObj)
{
    var obj = canvas.getActiveObject();
    if (obj) {
        obj.set(valueObj);
    }
    canvas.renderAll();
}




function flipXYObject() {

    $("#flipW").on("click", () => {
        var selectedObj = canvas.getActiveObject();
        if (! selectedObj) {
            toast("Please select an object.");
            return;
        }
        selectedObj.set('flipX', ! selectedObj.flipX);
        canvas.renderAll();
    });


    $("#flipH").click(() => {
        var selectedObj = canvas.getActiveObject();
        if (! selectedObj) {
            toast("Please select an object.");
            return;
        }
        selectedObj.set('flipY', ! selectedObj.flipY);
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
    // $moveTopItem.on("click",function(){});
    // $moveBottomItem.on("click",function(){});
}


function rotateObject() {
    var curAngle = 0;
    $(`#rotate`).on("click", function (e) {
        var selectedObj = canvas.getActiveObject();
        if (! selectedObj) {
            toast("Please select an object.");
            return;
        }
        selectedObj.rotate(curAngle);
        if (curAngle > 270) {
            curAngle = 0;
        }
        curAngle += 90;
        canvas.renderAll();

    })
}


function grayscaleObject() {
    $("#btnGrayscale").on("click", (e) => {

        applyFilter(0, e.currentTarget.checked && new fabric.Image.filters.Grayscale());
        applyFilterValue(0, 'mode', 'average');
    })
}

function brightnessObject() {
    $("#brightnessVal").text(`(0%)`);
    $('#brightness-value').on("click", function () {
        applyFilter(5, new fabric.Image.filters.Brightness({
            brightness: parseFloat($('#brightness-value').val())
        }));
    })

    $('#brightness-value').on("input", function () {
        var val = this.value;
        $("#brightnessVal").text(`(${
            parseInt(val * 100)
        }%)`);

        applyFilterValue(5, 'brightness', parseFloat(val));
    });
}

window.addEventListener("paste", pasteImage);

function pasteImage(event) { // get the raw clipboardData
    var cbData = event.clipboardData;

    for (var i = 0; i < cbData.items.length; i++) { // get the clipboard item
        var cbDataItem = cbData.items[i];
        var type = cbDataItem.type;

        // warning: most browsers don't support image data type
        if (type.indexOf("image") != -1) { // grab the imageData (as a blob)
            var imageData = cbDataItem.getAsFile();
            // format the imageData into a URL
            var imageURL = window.webkitURL.createObjectURL(imageData);
            fabric.Image.fromURL(imageURL, (img) => { // img.scaleToWidth(300);
                img.scaleToHeight(300);

                img.globalCompositeOperation = "source-atop";
                canvas.add(img).renderAll();
            })
            // We've got an imageURL, add code to use it as needed
            // the imageURL can be used as src for an Image object
        }
    }
}
function contrastObject() {
    $("#contrastVal").text(`(0%)`);

    $('#contrast-value').on("click", function () {
        applyFilter(6, new fabric.Image.filters.Contrast({
            contrast: parseFloat($('#contrast-value').val())
        }))
    })

    $('#contrast-value').on("input", function () {

        var val = this.value;
        $("#contrastVal").text(`(${
            parseInt(val * 100)
        }%)`);
        applyFilterValue(6, 'contrast', parseFloat(val));
    });
}

function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return {
        width: srcWidth * ratio,
        height: srcHeight * ratio
    };
}


function ungroup(event) {
    var activeObject = canvas.getActiveObject();
    if (activeObject.type == "group") {
        var items = activeObject._objects;
        activeObject._restoreObjectsState();
        canvas.remove(activeObject);
        for (var i = 0; i < items.length; i++) {
            items[i].globalCompositeOperation = "source-atop"
            canvas.add(items[i]);
            canvas.item(canvas.size() - 1).hasControls = true;
        }
        canvas.renderAll();
    }
}



function onChangeFontColor(picker, type) {
    let selectedText = canvas.getActiveObject();
    let checked = $("#inputStrokeText").prop("checked");
    let strokeSize = parseInt($("#text-stroke-width").val());
    let strokeColor = $("#strokecolor").val();
  

    if (type === 'font-color') {
        let isTextSelection; 
        if(selectedText.getSelectionStyles)
        { isTextSelection  = selectedText.getSelectionStyles().length > 0; }
        if(isTextSelection) {
            selectedText.setSelectionStyles({"fill":picker.toRGBAString()}) 
        }else{
            selectedText.set('fill', picker.toRGBAString());
        }
        
    } else if (type === 'stroke-color' && checked) {
      
    
        selectedText.set('stroke',picker.toRGBAString()); ;
        selectedText.strokeWidth= strokeSize;
        selectedText.paintFirst= "stroke";
        
    }
    
    canvas.renderAll();
}
initUIEvents();
initCanvasEvents();

function initImageSelectionUIControls()
{
    $("#btnImagePlus").on("click",function(e){
        selectedCanvasImageResizeOnButtonClick(10);
    })
    $("#btnImageMinus").on("click",function(e){
        selectedCanvasImageResizeOnButtonClick(-10);
    })

    $("#sliderImageSize").on("input",function(e){
        //this.value = canvas.getActiveObject().getScaledWidth() + this.value;
        selectedCanvasImageResizeOnButtonClick(this.value);
    })


    function selectedCanvasImageResizeOnButtonClick(value){
        const selectedImage = canvas.getActiveObject(); 
        const imageScaledWidth = selectedImage.getScaledWidth();
        if(!selectedImage) return; 
        selectedImage.scaleToWidth((imageScaledWidth+value)*canvas.context.zoomLevel);
        //let getCenter = getCanvasCenter(imageScaledWidth,selectedImage.getScaledHeight());
        //selectedImage.set({left:getCenter.left,top:getCenter.top})
        canvas.setActiveObject(selectedImage);
        canvas.renderAll();
        selectedImage.setCoords();
    }
}
// const savedCanvas = saveInBrowser.load('kp-editor');
// if (savedCanvas) {
//     canvas.loadFromJSON(savedCanvas, canvas.renderAll.bind(canvas));
// }



var grid = 20;
var width = 700;

window.canvasgrid = new fabric.Canvas('cg', { selection: false });

// Draw measuring area
// First = first point
// 
// Third = second point
var measurementThickness = 60;
window.canvasgrid.add( new fabric.Rect({
    left: 0,
    top: 0,
    fill: '#FFF',
    selectable: false,
    width: measurementThickness,
    height: 1000
}));

window.canvasgrid.add( new fabric.Rect({
    left: 0,
    top: 0,
    fill: '#FFF',
    width: 4000,
    selectable: false,
    height: measurementThickness
}));

    
    
// var r = $("#ruler3");
// for(var i=0;i<=500;i++)
// {
//     var val = Math.ceil(500/1.5)
//     if(i == val)
//     {
//         r.append(`<li style='border-right:solid 2px #000'></li>`);

//     }else
//     {
//         r.append(`<li style='border-right:solid 1px #ccc'></li>`);

//     }

// }
