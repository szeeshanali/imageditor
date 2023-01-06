
const dpi = 72;
const defaults = {
    fontSize:36,
    fontFill: '#000',
    fontFamily:'Arial',
    strokeWidth: 10,
    logoDisplaySize:500
}
const letterPageSize = {
    width: (8.5 * dpi),
    height: (11 * dpi)
}
const enabledSaveInBrowser = true;
var state = {
    isPreviewCanvas: false

}
const rulerSettings = {
    vRuleSize: 28, hRuleSize: 25, showCrosshair: false, showMousePos: false
}

const layerHtml = `<div class="media d-block d-flex layer-item object-options" data-index='{index}' id='{id}'  >
    <div class="d-block mg-sm-r-10 img"> <img src="{src}" class="wd-30" alt="Image" ></div>
    <div class="d-sm-flex layer-label tx-bold">Layer {index}</div>
    <div class="d-sm-flex layers-controls" style="display:none !important">
    <i class='ion-ios-copy-outline duplicate main-tool-button'   title='duplicate' ></i>
    <i class='ion-ios-upload-outline bring-fwd' title="move up" id="bring-fwd" ></i>
    <i class='ion-ios-download-outline bring-back' title="move down" id="bring-back" ></i>
    <i class='ion-ios-trash-outline delete main-tool-button' title='delete' ></i>
    </div>
   </div>`;

const projectHtml = `<div class='my-projects'><div class="list-group-item d-flex">
<div class="media d-block d-sm-flex">
  <div class="d-block d-sm-flex mg-sm-r-20">
    <img src="{base64}" class="rounded-circle wd-40" alt="Image">
  </div><!-- d-flex -->
  <div class="media-body mg-t-10 mg-sm-t-0">
    <h6 class="mg-b-5 tx-14"><a href="#" class="tx-inverse hover-primary tx-bold" onclick="loadProject('{code}')" id='{code}' >{title}</a></h6>
    <p class="mg-b-0 tx-12">{created_dt}</p>
  </div><!-- media-body -->
</div><!-- media -->
<a href="#" class="pd-lg-x-20 mg-l-auto ion-trash-a tx-30 text-secondary delete"  onclick="deleteProject('{code}',this)" ></a>
</div></div>`;

const designHtml = `<div class='pre-designed'><div class="list-group-item d-flex">
<div class="media d-block d-sm-flex">
  <div class="d-block d-sm-flex mg-sm-r-20">
    <img src="{base64}" class="rounded-circle wd-40" alt="Image">
  </div><!-- d-flex -->
  <div class="media-body mg-t-10 mg-sm-t-0">
    <h6 class="mg-b-5 tx-14"><a href="#" class="tx-inverse hover-primary tx-bold" onclick="loadDesign('{code}')" id='{code}' >{title}</a></h6>
    <p class="mg-b-0 tx-12">{created_dt}</p>
  </div><!-- media-body -->
</div><!-- media -->
</div></div>`;


// vars
$btnDownloadPDF = $("#btn-download-pdf");
// $btnSaveDesign = $("#btn-save-design");

$btnUploadImage = $("#btn-upload-img");
$btnUploadImageHidden = $("#btn-upload-img-hidden");
$layers = $("#layers");
$btnRepeatDesign = $("#repeatdesign");
$clientMainCanvas = $("#client-main-canvas");
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
$btnAddText = $("#btnAddText");
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


async function parseClipboardData() {
    
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
    flipped:    $("#inputFlipText").prop("checked") || false,
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


var canvas      = new fabric.Canvas("client-main-canvas",       {preserveObjectStacking: true})
var canvasPrev  = new fabric.Canvas("client-main-canvas-logo",  {preserveObjectStacking: true});
var cropCanvas  = new fabric.Canvas("cropCanvas",  {preserveObjectStacking: true});

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
    $.get(`/api/project/`, function (res) {
        $loader.addClass("hidden");
        var projects = res.data || [];

        var temp = "";
        $("#myProjectContainer").html("<p>No projects found.</p>");
        for (var i = 0; i < projects.length; i++) {
            var p = projects[i];
            temp += projectHtml.replace(/{code}/ig, p.code).replace(/{base64}/ig, p.thumbBase64).replace(/{title}/ig, p.title).replace(/{created_dt}/ig, new Date(p.created_dt).toDateString());
            $("#myProjectContainer").html(temp);
        }

    })

}


function getSharedProjects() {
    $loader.removeClass("hidden");
    $.get(`/api/pre-designed/`, function (res) {
        $loader.addClass("hidden");
        var projects = res.data || [];

        var temp = "";
        $("#preDesignedContainer").html("<p>No projects found.</p>");
        for (var i = 0; i < projects.length; i++) {
            var p = projects[i];
            temp += designHtml.replace(/{code}/ig, p.code).replace(/{base64}/ig, p.thumbBase64).replace(/{title}/ig, p.title).replace(/{created_dt}/ig, new Date(p.created_dt).toDateString());
            $("#preDesignedContainer").html(temp);
        }

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
        url: `/api/client/project/${id}`,
        success: function (res) {
            $loader.addClass("hidden");

            toast("Project has been successfully deleted.");
            $(self).parent().parent().fadeOut();
        },
        error: function (res) {
            $loader.addClass("hidden");

            toast("Error while deleting project.");
        }
    })
}
function loadProject(id) {
    $loader.removeClass("hidden");
    state.isPreviewCanvas = false;
    var group = [];
    $("#btnBack").trigger("click");
    $.get(`/api/project/${id}`, function (res) {
        $loader.addClass("hidden");
        const json = JSON.parse(res.data.json);
        if (! json) {
            return;
        }
        canvas.clear();
        canvas.loadFromJSON(json, function () {
            $("#menu-upload > a").click();
        }, function (o, object) { // console.log(o,object)
        })

        fabric.loadSVGFromURL(res.template.base64, function (objects, options) { // $canvasPrev.fadeOut();
            var loadedObjects = new fabric.Group(group);
            var templateWidth = options.viewBoxWidth;
            var templateHeight = options.viewBoxHeight;

        



            let isLandspace = (templateWidth > templateHeight);
            let __f = 0.9;
            if (isLandspace) {
              
                templateWidth = options.viewBoxHeight;
                templateHeight = options.viewBoxWidth;
            }
            let __w = parseInt(templateWidth*__f); 
            let __h = parseInt(templateHeight*__f);
            $("#client-main-canvas-logo").css({"width":`${__w}px`,"height":`${__h}px`,"padding":"1px"});
            
            canvasPrev.setDimensions({width: templateWidth, height: templateHeight});
            canvasPrev.setBackgroundImage(loadedObjects, canvasPrev.renderAll.bind(canvasPrev));
            canvasPrev.renderAll();
            loadedObjects.center().setCoords();

           


        }, function (item, object) {
            object.set({fill:"#fff"});
            object.set('id', item.getAttribute('id'));
            group.push(object);
        });

    }).fail(function (err) {
        $loader.addClass("hidden");
        toast("Something went wrong! Please contact admin.");
        console.log(err);
    })
}

function loadDesign(id) {
    state.isPreviewCanvas = false;
    var group = [];
    $("#btnBack").click();
    $loader.removeClass("hidden");
    $.get(`/api/pre-designed/${id}`, function (res) {
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
            canvasPrev.setBackgroundImage(loadedObjects, canvasPrev.renderAll.bind(canvasPrev));
            canvasPrev.renderAll();
            loadedObjects.center().setCoords();

        }, function (item, object) {
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
var selectedTemplateId = 'default';
function loadSVGTemplate(id) {
    selectedTemplateId = id;
    var group = [];
    state.isPreviewCanvas = false;
    $.get(`/api/svg-templates/${id}`, function (data) {
        if (typeof(data) === 'string') {
            window.location.reload();
            return;
        }
        const svgBase64 = data.base64;
        if (! svgBase64) {
            toast("Error loading Template.");
            return;
        }
        var meta = {};
        if (data.meta) {
            meta = JSON.parse(data.meta);
        }

        canvas.clear();
        canvas.templateId = data.code;
        hideWorkspaceControls();
        // loading Big display
        let logoDisplaySize = defaults.logoDisplaySize;
        let logoHeight = defaults.logoDisplaySize;

        fabric.loadSVGFromURL(svgBase64, function (objects, options) {

            // / getting actual width and height of a logo
            // / setting canvas dimensions with logo width/height
            let logo = objects[objects.length-1];  
            if(logo.height && logo.height < logo.width)
            {
                let ratio = (logo.width/logo.height);
                logoHeight = logoDisplaySize/ratio;
                
            }

            logo.scaleToWidth(logoDisplaySize-2);
            logo.scaleToHeight(logoHeight-2);
            canvas.setDimensions({width: logoDisplaySize, height: logoHeight});
            canvas.setBackgroundImage(logo, canvas.renderAll.bind(canvas));
            
            canvas.renderAll();
            // canvas.setZoom(2);
            let logoSize = `${(meta.objectWidth / dpi).toFixed(1)}" x ${((meta.objectHeight || meta.objectWidth) / dpi).toFixed(1)}`;
            let pageSize = `${meta.width/dpi}" x ${meta.height/dpi}"`;
            $("#template-info-panel .template-name").text(data.title);
            $("#template-info-panel .page-size").text(pageSize);
            $("#template-info-panel .logo-size").text(logoSize + "''");
            $("#template-info-panel .total-logos").text(meta.objects);
            $("#template-info-panel .page-title").text(data.title);
            $("#template-info-panel .ref_code").text(data.ref_code | "NA");
            $("#template-info-panel #imgSelectedTemplate").attr("src", svgBase64)
            $(".kk-part-no").text(data.ref_code || "N/A");
            $(".kk-part-link").text(data.link || "N/A");
            $("#rulerLogoSize").text(`${logoSize} x ${logoSize} inches `)


            let reg = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            $("#kp-link").attr("href", reg.test(data.link) ? data.link : "#");
            $("#template-info-panel .webstore-link").attr("href", (data.link || "#"));

            if(!reg.test(data.link))
            {
            $("#kpweblink-panel").addClass("hidden");
            }else{
                $("#kpweblink-panel").removeClass("hidden");
            }

            $("#use-template").unbind().click(function () {
                window.location.href = `/app/workspace/${
                    data.code
                }`;
            })

            $(".vRule, .hRule").remove();
            $('.canvas-container').first().ruler(rulerSettings);
            $(".vRule").height(logoHeight+22);
            
            
            
            /// show grid lines 
            let labels   = $(".hRule .tickLabel");
            let vlabels   = $(".vRule .tickLabel");
           let isGridLinesEnabled =  $("#btnDisplayGrid").is(":checked");
           let isRulerEnabled =  $("#btnDisplayRuler").is(":checked");
            $("#btnDisplayRuler").prop("checked",true);
            $("#btnDisplayGrid").prop("checked",true);
           
            $(".grid-lines").remove();
                for(var i=0;i<(labels.length);i++)
                {
                  
                  let pos = $(labels[i]).position();
                  console.log(pos);
                  $(".canvas-container").first().append(`<div class='grid-lines' style='height:${logoHeight}px;left:${pos.left-22}px; top:0px; '></div>`)
                }
          
                for(let i=0;i<(vlabels.length);i++)
                {
                  
                    let pos = $(vlabels[i]).position();
                    console.log(pos);
                
                  $(".canvas-container").first().append(`<div class='grid-lines h-gridlines' style='width:500px;top:${pos.top-22}px; left:0px; border-bottom: solid 1px #666;'></div>`);
                  $(".canvas-container").first().css({border:"solid 1px #666", width:"502px",height:`${logoHeight}px`})
                }
                if(!isRulerEnabled){
                    $("#btnDisplayRuler").click();
                }
                if(!isGridLinesEnabled){
                    $("#btnDisplayGrid").click();
                }
            
                //var canvas = document.getElementById('myCanvas'), 
            //     debugger;
            //     let context = canvas.getContext('2d');
            //     let centerX = canvas.width / 2;
            //     let centerY = canvas.height - 30;
            //     let angle = Math.PI * 0.8;
            //     radius = 150;
            
            // context.font = '30pt Calibri';
            // context.textAlign = 'center';
            // context.fillStyle = 'blue';
            // context.strokeStyle = '#ccc';
            // context.lineWidth = 1;
             //drawTextAlongArc(context, 'Zeeshan1', centerX, centerY, radius, angle);
              
                //drawCircle();
        }, function (item, object) {
            object.set({fill:"#fff"});
            object.set({left: 6, top: 4});
           
        });
        // / load template - preview display
        fabric.loadSVGFromURL(svgBase64, function (objects, options) { // $canvasPrev.fadeOut();
            let loadedObjects = new fabric.Group(group);

            let templateWidth = options.viewBoxWidth;
            let templateHeight = options.viewBoxHeight;
            let isLandspace = (templateWidth > templateHeight);
            let __f = 0.9;
            if (isLandspace) {
              
                templateWidth = options.viewBoxHeight;
                templateHeight = options.viewBoxWidth;
            }


            canvasPrev.setDimensions({width: templateWidth, height: templateHeight});
            
            canvasPrev.setBackgroundImage(loadedObjects, canvasPrev.renderAll.bind(canvasPrev));
            // loadedObjects.scaleToWidth(templateWidth);
            // loadedObjects.scaleToHeight((templateHeight/72)*96);
            //canvasPrev.setZoom(0.9);
           
            let __w = parseInt(templateWidth*__f); 
            let __h = parseInt(templateHeight*__f);

            $("#client-main-canvas-logo").css({"width":`${__w}px`,"height":`${__h}px`,"padding":"1px"})
           
            canvasPrev.renderAll();

            loadedObjects.center().setCoords();
            //loadgrid()
        }, function (item, object) {
            object.set({fill:"#fff"});
            object.set('id', item.getAttribute('id'));
            // object.set('width', (object.width/72)*96);
            // object.set('height', (object.height/72)*96);
            group.push(object);
        });
    })
}

function applyFilter(index, filter) {

    var obj = canvas.getActiveObject();
    obj.filters[index] = filter;
    // if (!obj.filterIndex && obj.filterIndex != 0) {
    //     obj.filters[index] = true && filter;
    //     obj.filterIndex = index;
    // } else {
    //     obj.filters[index] = false && filter;
    //     obj.filterIndex = null;
    // }
    obj.applyFilters();
    canvas.renderAll();
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
        width: currentImage.width,
        height: currentImage.height,
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

    selectionRect.scaleToWidth(200);
    cropCanvas.centerObject(selectionRect);
    cropCanvas.add(selectionRect);
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

  var selectionRect;
function initUIEvents() {
   

    initContextMenu();
   



    $("#btnCrop").on("click",(e)=>{
        var img = cropCanvas.item(0);
        crop(img);
    }); 


    $("#btnCropDone").on("click",(e)=>{

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
        canvas.add(image);
        canvas.renderAll();
    };

        




    })

    $("#btnCropModal").on("click",(e)=>{
        cropRect=null; 
        cropCanvas.clear();
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

            // fabric.Image.fromURL(imgSrc, function (img) {
            //     cropCanvas.clear();
            //    /// img.scaleToHeight(250);
                
            //   ///  let w = img.getScaledWidth(); 
            //   ///  let h = img.getScaledHeight(); 
            //   //  cropCanvas.setDimensions({width:w,height:h})
            //     cropCanvas.add(img);
            //     cropRect  = getCropRect();
            //     cropCanvas.add(cropRect); 
            //     cropCanvas.renderAll();
            //     //mainControls(true);
            //     // $("#menu-text > a").click();
            // });
        }

        //$("#cropImageHolder").attr("src");
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
                    toast('Thank you, Your request has been submitted, we will contact you soon.');
                    form.trigger('reset');
                    $('#rfq').modal('toggle');
                    $loader.addClass("hidden");
                },error: function (request, status, error) {
                    toast('Server Error: Form could not be submitted.');
                    form.trigger('reset');
                    $('#rfq').modal('toggle');
    
                },
                cache: false,
                contentType: false,
                processData: false,
               
            });
        
        });

       

         
    });
    $("#menu-save-design").on("click",function(e){
        e.preventDefault();
        e.stopPropagation(); return false;
        
        
    })
/**
 * Confirm Boxes
 */



$("#btnLibraryModal").on("click",function(e){
    $("#btnModelContinue").text("Continue");
    $("#confirmBoxBody").text("Do you want to discard your changes?");
    $("#btnModelContinue").unbind().on("click", function (e) {
        e.preventDefault();       
        canvas.clear();
        canvasPrev.clear();
        $layers.html();
        getSharedProjects();
        $("#libraryLink").click();
        menuHighlighter("#btnLibrary");
    })

})

$("#btnMyProjectsModal").on("click",function(e){
   
    $("#btnModelContinue").text("Continue");
    $("#confirmBoxBody").text("Do you want to discard your changes?");
    $("#btnModelContinue").unbind().on("click", function (e) {
        e.preventDefault();
        canvas.clear();
        canvasPrev.clear();
        $layers.html();
        getUserProjects();
        $("#myProjectLink").click();
        menuHighlighter("#btnMyProjects");
        
    });
   


})

    $("#btnSaveModel").on("click",function(e){
        e.preventDefault();
        $("#btnModelContinue").text("Save Changes");
        $("#confirmBoxBody").text("Do you want to save your changes?");
        $("#btnModelContinue").unbind().on("click",function(e){
            e.preventDefault();
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
        })
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
            var object = fabric.util.object.clone(_canvas.getActiveObject());
            object.set("top", object.top + 5);
            object.set("left", object.left + 5);
            _canvas.add(object);
            _canvas.renderAll();
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


    // $btnSave.unbind().on("click", function (e) {
    //     if(!confirm("Do you want to save your changes?"))
    //     {  return; }
    //     e.preventDefault();
    //     saveDesign();
    // })
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

    // $("#menu-clipart").on("click",function(){
    //     menuHighlighter(this);
    // })

    $("#btnDisplayGrid").on("click", function (e) {
      
       if(e.target.checked)
       {
        $(".grid-lines").show();
       }else{
        $(".grid-lines").hide();
       }
        

    })
    $("#btnDisplayRuler").on("click", function () {
        
        var style = !($(".ruler").is(':visible'));
        if (style) {
            $('.canvas-container').first().ruler(rulerSettings);
            $(".vRule").height($(".vRule").height()+22);
            $(this).html($(this).html().replace("On", "Off"));
        } else {
            $(".vRule, .hRule").remove();
            // $(".ruler-line").hide();
            // $("#client-main-canvas").css({
            //     "border": "dashed 0px #333",
            //     "border-top": "0px",
            //     "padding-top": "10px",
            //       "margin-top": -"10px"
            //    });
            $(this).html($(this).html().replace("Off", "On"));
            $(this).addClass('tx-gray-500');

        }

    })

    $txtDecorationCtrl.on("click", function (e) {
        var value = $(this).attr("data-value");
        var o = canvas.getActiveObject();
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

            canvas.renderAll();
        }

    })

    $("#font-list-container a").on("click", function (e) {
        var value = $(this).text() || "Arial, sans-serif";
        $("#fontlist").text(value);
        //$("#selected-font").html($(this).html())
        canvas.getActiveObject().set("fontFamily", $(this).attr("data-value"));
        canvas.requestRenderAll();
    })

    // $("#text-color").on("click",function() {
    //     setSelectedTextStyle("fill",this.value);
    // });
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
            let obj = canvas.getActiveObject(); 
            obj.strokeWidth = parseInt(this.value) || 10;
            canvas.renderAll();
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
        var selectedObj = canvas.getActiveObject();
        selectedObj.set('flipX', ! selectedObj.flipX);
        canvas.renderAll();
    });

    // $btnFlipY.click(() => {
    //     canvas.activeSelection.set('flipY', !canvas.activeSelection.flipY);
    //     this.canvas.renderAll();
    // });

    $btnRotate.on("click", function () {
        var selectedObj = canvas.getActiveObject();
        if (! selectedObj) {
            toast("Please select an object.");
            return;
        }
        var curAngle = selectedObj.angle;
        selectedObj.rotate(curAngle + 90);
        canvas.renderAll();
    })

    // $btnTemplate.on("click", function (e) {
    //     //$("#templatepanel").hide();
    //     //canvas.discardActiveObject().renderAll();
    // })

    // $btnMyProject.on("click", function (e) {


    //     // $.get("",)
    //     $loader.removeClass("hidden")
    //     window.location.href = '/app/projects';
    // })

    $btnTextMenu.on("click", function (e) {
        canvas.discardActiveObject().renderAll();
        // textControls(false);
    })

    // $btnUploadpanel.on("click", function (e) {
    //     canvas.discardActiveObject().renderAll();
    //     $("#workspace-right-panel .img-ctrl").each(function () {
    //         $(this).removeClass("hidden");
    //     })
    // })


    // $repeatImageCtrl.hide();
    $canvasPrev.parent().hide();

    // $btnRepeatDesign.on("click", function (e) {
    //     openRepeatDesignPreview(e);
    // })

    // $btnCancelRepeatDesign.on("click", function (e) {
    //     // $("#repeatdesign .toggle-on").removeClass("active");
    //     // $("#repeatdesign .toggle-off").addClass("active");
    //     closeRepeatDesignPreview();
    //     // closeRepeatDesignPreview();
    // })

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


    $("#clipartmenu .clipart").on("click", (e) => {
        const url = $(e.currentTarget).attr("data-url");
        const title = $(e.currentTarget).attr("data-title");
        $("#clipartTitle").text(title);
        $("#clipartImage").attr("src",url);

        $("#btnAddClipart").unbind().on("click",function(){
            const _canvas = state.isPreviewCanvas ? canvasPrev : canvas;
            fabric.Image.fromURL(url, function (img) {
               img.set({left: 150, top: 150, border:10, borderColor:"black"});
               img.scaleToWidth(250);
               img.globalCompositeOperation = 'source-atop';
                _canvas.add(img);
                _canvas.renderAll();
                mainControls(true);
                // $("#menu-text > a").click();
            });
        })
        

    });




    
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

    if (! canvas.templateId) {
        console.error("templateId is not present in canvas.");
        toast("Can't save project. please contact admin.");
        return;
    }


    var thumbBase64 = canvas.toDataURL({format: 'jpg', quality: 0.8});
    $.ajax({
        type: "POST",
        url: "/app/client/save-design",
        data: {
            title: title || "N/A",
            desc: desc || "N/A",
            thumbBase64: thumbBase64,
            json: JSON.stringify(canvas.toDatalessJSON()),
            templateId: canvas.templateId
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

function previewDesign() { /*
   . Check Design can be previewed. 
   . Hide create design heading and show preview design heading. 
   . Disable Save button. 
   . Hide main canvas. 
   . Show preview canvas.
   . Render preview. 
   . Set Preview State. 
   . Set Wizard
   . Hide Ruler 
   . Hide Grid 
    */

    $("#workarea").attr("style", "background-image:url('')");
    //$("#btnDisplayGrid").hide();
    //$(".ruler-line").hide();


    // 1.
    if (canvas.getObjects().length == 0) {
        toast("Please create your design before preview.");
        return;
    }


    // 2.
    $("#btnBack").removeClass("hidden");
    $("#btnFinalized").removeClass("hidden");
    $("#btn-step-preview").addClass("hidden");
    $("#btn-step-preview").addClass("btnStartOver");
    

    // 3.
    //    $("#btnSave").unbind().click(function(){
    //     toast("Please go back and save your design.");
    //    });

    // 4.
    $clientMainCanvas.parent().fadeOut();
    // 5.
    $canvasPrev.parent().fadeIn();
    // 6.
    renderPreview();
    // 7.

    // 8.
    $(".step-item:nth-child(3)").removeClass("active");
    $(".step-item:nth-child(4)").addClass("active");

    menuHighlighter("#menu-preview");
}
function backFromPreview() { /**
     * . Hide Back and Finalized Button and show Preview button. 
     * . Enable Save button
     * . Hide Preview Canvas 
     * . Show Main Canvas. 
     * . Clear Preview Canvas. 
     * . Render Main Canvas back to its original state.  
     * . Set Main Canvas State. 
     * . Set Wizard 
     */

menuHighlighter("#menu-upload");
    $("#workarea").removeAttr("style");
    //$("#btnDisplayGrid").show();
    //$("#btnDisplayRuler").show();
    //$(".ruler-line").show();
    $("#ruler-ctrl").removeAttr("style");


    state.isPreviewCanvas = false;

    // 1.
    $("#btnBack").addClass("hidden");
    $("#btnFinalized").addClass("hidden");
    $("#btn-step-preview").removeClass("hidden");
    $("#create-design-heading").removeClass("hidden");
    $("#preview-design-heading").addClass("hidden");

    $("#ws-btn-save").removeClass("hidden");
    $("#ws-btn-preview").removeClass("hidden");
    $("#ws-btn-back").addClass("hidden");
    $("#previewMsg").addClass("hidden");
    $("#ws-btn-download").addClass("hidden");
    $("#btnStartOverModel").removeClass("hidden");
    
    $(".step-item:nth-child(3)").removeClass("active");
    $(".step-item:nth-child(2)").addClass("active");

    // 2.
    // $("#btnSave").unbind().click(function(){
    //     toast("Please go back and save your design.");
    // });

    // 3.
    $clientMainCanvas.parent().fadeIn();
    // 4.
    $canvasPrev.parent().fadeOut();
    // 5.
    // canvasPrev.clear();
    // 6.
    renderMainCanvasOnBackButton()
    // 7.

    $(".step-item:nth-child(4)").removeClass("active");
    $(".step-item:nth-child(3)").addClass("active");
    
    
    

}

function renderPreview() {
    $loader.removeClass("hidden");
    /***
   * creating copy of main canvas.
   * extracting objects from main canvas. 
   * removing globalCompositeOperation from all objects of main canvas. 
   * converting main canvas to image/png dataUrl   
   * getting all logos in preview canvas template. 
   * cleanup preview canvas objects. 
   */
    canvas.clone(function (clonedCanvas) {
        var bg = clonedCanvas.backgroundImage;
        clonedCanvas.backgroundImage = false;
        for (var i = 0; i < clonedCanvas._objects.length; i++) {
            clonedCanvas._objects[i].globalCompositeOperation = null;
            canvas.renderAll.bind(clonedCanvas)
        }
        clonedCanvas.renderAll()
        var dataURL = clonedCanvas.toDataURL({
            format: "png",
            left: 0,
            top: 0,
            width: canvas.width,
            height: canvas.height
        });

        var logos = canvasPrev.backgroundImage._objects;
     
        fabric.Image.fromURL(dataURL, (img) => {
            state.isPreviewCanvas = true;
            canvasPrev.remove(... canvasPrev.getObjects());
            for (var i = 0; i < logos.length; i++) {
                var logo = logos[i];
                var object = fabric.util.object.clone(img);
                var left = logo.left + logo.group.left + (logo.group.width / 2);
                var top = logo.top + logo.group.top + (logo.group.height / 2);
                object.scaleToWidth(logo.width);

                object.set("top", top);
                object.set("left", left);
                object.globalCompositeOperation = "source-atop";
                canvasPrev.add(object).renderAll();
               
                $("#create-design-heading").addClass("hidden");
                $("#preview-design-heading").removeClass("hidden");
                $("#ruler-ctrl").attr("style", "display:none !important");;
              

            }
            $loader.addClass("hidden");
            //$("#ws-btn-save").addClass("hidden");
            $("#ws-btn-preview").addClass("hidden");
            $("#ws-btn-back").removeClass("hidden");
            $("#ws-btn-download").removeClass("hidden");
            $("#btnStartOverModel").addClass("hidden");
            $("#previewMsg").removeClass("hidden");
          
           

          
        });
    })
}
function renderMainCanvasOnBackButton() {
    var json = canvas.toJSON();
    canvas.clear();
    canvas.loadFromJSON(json, function () {
        canvas.renderAll();
    }, function (o, object) {
        addLayer(o);
        console.log(o, object)
    })

}
// function openRepeatDesignPreview(e) {
//     var txt = $(e.currentTarget).find(".active").text();
//     var factor = 2;
//     if (txt == "ON") {
//         state.isPreviewCanvas = true;
//         var canvasSVGLogo = canvas.backgroundImage._objects[0];
//         // canvasSVGLogo.scaleToWidth(canvasPrev.width);
//         if (! canvasSVGLogo || canvas._objects.length == 0) {
//             alert("No logo found in SVG template");
//             return;
//         }

//         $repeatImageCtrl.show();
//         $clientMainCanvas.parent().fadeOut();
//         $canvasPrev.parent().fadeIn();
//         canvasPrev.loadFromJSON(JSON.stringify(canvas), function (o) {
//             var object = fabric.util.object.clone(canvasSVGLogo);
//             object.scaleToWidth(object.width * factor)
//             canvasPrev.setDimensions({
//                 width: object.width - object.left,
//                 height: object.height - object.top
//             })
//             canvasPrev.setBackgroundImage(object, canvasPrev.renderAll.bind(canvasPrev));
//             canvasPrev.renderAll();

//         });
//     } else {
//         closeRepeatDesignPreview();
//     }
// }

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
        o.target.id = `obj${
            canvas._objects.length
        }`;
        o.target.index = canvas._objects.length - 1;
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

    setTimeout(function () {

        saveInBrowser.save('kp-editor', canvas.toJSON());
        $saveBrowserTxt.fadeIn();
        setTimeout(function () {
            $saveBrowserTxt.fadeOut("slow");
        }, 2000)
    }, 2000)

}

function onObjectAdded(o) {
    // $pageTitle.addClass("hidden");
    // $("#maintools > .image-tools").removeClass("hidden");

    addLayer(o);
    enabledRepeatDesignButton(o);
}


function enabledRepeatDesignButton(o) {
    $btnRepeatDesign.find(".disabled").removeClass("disabled");
}

// Layers:
function addLayer(o) {
    $("#collapse-layers").addClass("show");

    var temp = layerHtml;
    $layers.html();
    var layers = "";
    // var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
    var _canvas = state.isPreviewCanvas ? canvasPrev : canvas;
    for (var i = _canvas._objects.length - 1; i >= 0; i--) {
        var obj = _canvas._objects[i];
        
        var src = obj._element ?. currentSrc;
        if (obj.text) {
            src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABHNJREFUeJzt3LurHGUcx+FvcqKiJohGBBGjRPHyB4imE0u72Akix1bsBAsriyiKokQ7CQoKaiGKCpGAjSI2golXhIR4v3USbzExicViiCHndy55d95zdp4H3iYLM7+d3c+emd0hCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJsq73AFOyMckVmd3ntxp9n+T33kNQ25hkV5IjSU5Yg64jSZ5NcuGirxJdrEuyJ/3fKGNfu+Mv96p0W/q/OazJurV+qdaO9b0HaOiW3gNw0rbeA7QyS4Fc0HsATjqv9wCtzFIg0JxAoCAQKGzoPcAqcSDJd0mON9zmukx+rLy+4TbP5MskP2by7VEr65NcmeTahtuksx1Z/teRLyW5YcpzbUtycAWzLbb2J7lpyrPfmOSVFcz20JTnYgWWE8ixJHcPONvWTG7DaBXHoSRbBpz/nkyO2egCGes1yANJXhhwfweTvNhwe88n+bbh9payvwcH3N+qMcZAvkqys8N+9zbc1r6G21qqJzNslKvCGAPZmeSfDvs90nBbRxtuazn7fKbDfrsaWyCHkjzXe4g1bFeSP3oPMaSxBbIryW+9h1jDfs3IPmDGFMjxjPAUYQqeTtvfXFa1MQXyepKvew8xAw4keav3EEMZUyBP9R5ghozmWI4lkA+TfNB7iBnybvp81Ty4WQrkcPHY4xnRefMATiR5onj8z6EGmbZZCuSjBf79nSSvDjnISLyc5L0FHlvotaCjczK5s/XUe4L2Jtncc6hTzKfdvVh3DTv6gi5L8mn+P9tnSeZ6DsXCrkvyfia3kzya1fVf0Mxn9gJJkk2ZnMJ+k8lfFLfIsyLzmc1AZtosXYNAcwKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIZDhzDbfldRuIAz2crQ23dXXDbUF3c0n2JznRaH0eH27MkPvTLo7/1n2DPgOYkvkkx9I+kKNJ7hzuaUA7m5LckWR32odx+nozyfYkGwd5ZrBCV2Vy2rMnyd+Zfhinr8NJ3k5yb5ItU36usKi5JNuSPJLkkwwfxGLr4yQ7ktwcF/QM6KIkjyX5Jf0jWOr6OcnDmZz6wdRck+Rg+r/hV7r2Z3IqCM2dm+SL9H+Tn+3al2RD42MD2Z7+b+5W6/bGx2ZmuXhbukt6D9DQ5t4DMHsuzeRit/en/9muH5Jc3PjYQJLJRfobmfyK3fuNvtx1NMlrcaPjsqzrPcAadX6Sy7N2TlGPJ/kpyV+9BwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM7kX8fwvIWqet/rAAAAAElFTkSuQmCC';
        }
        layers += temp.replace(/{id}/ig, obj.id).replace("{src}", src).replace("{_id}", obj.id).replace(/{index}/ig, i + 1);
    }
    if (layers != "") {
        $layers.html(layers);
        $("#ws-btn-save").removeClass('hidden');
        if(!state.isPreviewCanvas)
        { $("#ws-btn-preview").removeClass('hidden');  }

    } else {
        $layers.html("Empty! please upload an image.");
        $("#ws-btn-save").addClass('hidden');

        if(!state.isPreviewCanvas)
        { 
            $("#ws-btn-preview").addClass('hidden'); 
        }

    }

}

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
    // $elem.click();
    /*
    var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
    var target = $elem;
  
    var index = parseInt($elem.getAttribute("data-index")) - 1;
    var preObj = _canvas.selectedObj ?. target;
    if (preObj?. id != target.id) {
        $(`#${target.id} .layers-controls`).show();
        $(`#${target.id}`).addClass("selected-layer");

        _canvas.discardActiveObject();
        _canvas.requestRenderAll();
        _canvas.setActiveObject(_canvas.item(index));
        if (preObj) {
            $(`#${preObj.id} .layers-controls`).attr("style", "display:none !important");
            $(`#${preObj.id}`).removeClass("selected-layer");
        }
       _canvas.selectedObj = _canvas.item(index);

    }
*/
    // initLayerEvents($elem)

}


// UI events:

// $("#btnSaveDesignPopup").on("click",function(){

//     var projectName = $("#projectname").val();
//     var projectDesc = $("#projectdesc").val();
//     var base64 = canvasPrev.toDataURL({format: 'jpg', quality: 0.8});

//     $.ajax({
//         type: "POST",
//         url: "/app/client/save-design",

//         data: {
//             title : projectName || "N/A",
//             desc :  projectDesc || "N/A",
//             thumbBase64:base64 ,
//             json: JSON.stringify(canvasPrev.toJSON())
//         },
//         success: function (res) {

//             toast("Design has been Saved.");
//         },
//         error: function (res) {
//             if (res.status === 401) {
//                 toast(`${res.statusText}:${res.responseJSON.message}`);
//             } else {}

//         }
//     })


// })

// $btnSaveDesign.on("click", () => {
//     var base64 = canvas.toDataURL({format: 'jpg', quality: 0.8});
//     $("#prevesavdesign").attr("src",base64);
// })


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
function generatePDFfromPreview(onServer, callback) {

    if (!state.isPreviewCanvas) {
        toast("Please preview your design before download.");
        return;
    }

    if (canvasPrev.getObjects().length == 0) {
        toast("Please create your design before download.");
        return;
    }


    $loader.removeClass("hidden");
    menuHighlighter("#menu-download");
    $.ajax({
        type: "GET",
        url: `/api/client/download/`,
        success: function (res) {
            if (! res.data) {
                window.location.reload();
                return;
            }
            const {watermark, download} = res.data;
            if (!download) {
                throw "You are not eligible to download. please contact admin";
            }
            var width = canvasPrev.backgroundImage.width;
            var height = canvasPrev.backgroundImage.height;


            var pdf = new jsPDF({
                orientation: (width > height) ? 'l' : 'p',
                unit: 'pt',
                format: 'letter',
                putOnlyUsedFonts: true
            });
            width = pdf.internal.pageSize.getWidth();
            height = pdf.internal.pageSize.getHeight();
            const factor = 1.3; 
            canvasPrev.clone(function (clonedCanvas) {
                var bg = clonedCanvas.backgroundImage;
                clonedCanvas.backgroundImage = false;
                clonedCanvas.setDimensions({ width: 612 * factor, height: 792 * factor })
                clonedCanvas.setZoom(factor);
                for (var i = 0; i < clonedCanvas._objects.length; i++) {
                    clonedCanvas._objects[i].globalCompositeOperation = null;
                    canvasPrev.renderAll.bind(clonedCanvas)
                }
                bg.globalCompositeOperation = "destination-in";
                clonedCanvas.add(bg);
                clonedCanvas.renderAll();
                var imgData = clonedCanvas.toDataURL('image/png');
                pdf.addImage(imgData, 'png', 0, 0);

                if(onServer)
                {
                    callback(btoa(pdf.output(),"base64"));
                }else{
                    if (res.data.watermark) {
                        var watermark = "/images/wm-sample.png";
                        pdf.addImage(watermark, 'PNG', 0, 0, 150, 150)
                    }
                    pdf.save("KakePrints.pdf");
                }

                $loader.addClass("hidden");
                $(".step-item:nth-child(3)").removeClass("active");
                $(".step-item:nth-child(4)").addClass("active");

            });

        },
        error: function (res) {
            toast("Error while downloading.");
        }
    })
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
    // var curStep = $(".setup-content"),
    // curStepBtn = curStep.attr("id"),
    nextStepWizard = $('div.setup-panel div a[href="#' + stepId + '"]').parent().next().children("a"),
    // curInputs = curStep.find("input[type='text'],input[type='url']"),
    isValid = true;
    // $(".form-group").removeClass("has-error");
    // for (var i = 0; i < curInputs.length; i++) {
    //     if (!curInputs[i].validity.valid) {
    //         isValid = false;
    //         $(curInputs[i]).closest(".form-group").addClass("has-error");
    //     }
    // }
    if (isValid) 
        nextStepWizard.removeAttr('disabled').trigger('click');
    
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
                        // window.objs = [];
                        // page.getOperatorList().then(function (ops) {
                        //     for (var i=0; i < ops.fnArray.length; i++) {
                        //         if (ops.fnArray[i] == PDFJS.OPS.paintJpegXObject) {
                        //             window.objs.push(ops.argsArray[i][0])
                        //         }
                        //     }
                        // })


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
                    img.set({left: 150, top: 150})
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
            obj.stroke      = strokeColor;
            obj.strokeWidth = strokeWidth;
            obj.paintFirst  = "stroke";
          //  setSelectedTextStyle("stroke", strokeColor);
          //  setSelectedTextStyle("paintFirst", "stroke");
          //  setSelectedTextStyle("strokeWidth", strokeWidth);
        }else
        {
            obj.set('strokeWidth',0)
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
          var flipped = $("#inputFlipText").prop("checked");
          obj.flipped = flipped;
          var item = new fabric.CurvedText(obj.text, {
            type: 'curved-text',
            diameter: parseInt($("#curveTextCtrl").val()) || 500,
            left: 100,
            top: 40,
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
            strokeWidth: $("#inputStrokeText").is(":checked")?parseInt($("#text-stroke-width").val()):0

            //strokeStyle: obj.strokeStyle,
            //stroke:obj.stroke,
            //strokeWidth: 2
        });
        canvas.add(item);
        canvas.renderAll();
        canvas.remove(obj)
        canvas.setActiveObject(item);
       
        } else {
            //$("#inputFlipText").prop('checked',false);
            $("#curveTextCtrl").val(500);
            var obj = canvas.getActiveObject();
            
            var textInfo = {

                left        :   (canvas.width/2)-obj.width/2,
                top         :   canvas.height/2,
                fontFamily  :   obj.fontFamily,
                fill        :   obj.fill,
                fontSize    :   obj.fontSize,
                flipped     :   flipped,
                stroke      :   obj.stroke,
                strokeWidth :   obj.strokeWidth,
                paintFirst  :   "stroke",
                fontWeight  : obj.fontWeight,
                fontStyle   : obj.fontStyle,

            };
            
        
            var item = new fabric.IText(obj.text, textInfo);
            canvas.remove(obj);
            item.globalCompositeOperation = 'source-atop';
            canvas.add(item);            
            canvas.setActiveObject(item);
            canvas.renderAll();
 
        }
        addLayer();
    })
    
    $btnAddText.on("click", function () {
        $("#inputCurvedText").prop("checked",false);
        var text = $textarea.val();
        if (! text || text.length == 0) { // /toast("Please enter text");
            return;
        }

        var textInfo = {
            left: (canvas.width/2)-(((text.length/2)*defaults.fontSize)/2),
            top: (canvas.width/2),
            fontFamily: defaults.fontFamily || 'Arial',
            fill: $("#fontColorBox").val() || defaults.fontFill,
            fontSize: defaults.fontSize
        };
        var item = new fabric.IText(text, textInfo);

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

    $btnTextSize.on("change", function () {
        canvas.getActiveObject().set("fontSize", this.value);
        canvas.renderAll();
    })

    $("#curveTextCtrl").on("input", function (e) {   
        let val = e.currentTarget.value;
        updateCurveText({diameter:val});
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


function initLayerEvents($elem) {
    // var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
    // var id = $elem.id;
    // $(`#${id} .delete`).on("click", function (e) {
    //     _canvas.remove(_canvas.getActiveObject()).renderAll();
    //     addLayer();
    // })

    // $(`#${id} .duplicate`).on("click", function (e) {
    //     var object = fabric.util.object.clone(_canvas.getActiveObject());
    //     object.set("top", object.top + 5);
    //     object.set("left", object.left + 5);
    //     _canvas.add(object);
    // })

    // $(`#${id} .bring-fwd`)().on("click", function (e) {
    //     e.stopPropagation();
    //     alert(1);
    //     // var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
    //     // var obj = _canvas.getActiveObject();
    //     // _canvas.bringForward(obj)
    //     // _canvas.renderAll();
    //     // debugger;
    //     // var $selectedLayer = $(this).parent().parent();
    //     // var $nextItem = $selectedLayer.next($(".layer-item"))
    //     // $selectedLayer.insertAfter($nextItem);
    //     //
    //     //var x = selectedLayer.closest('layer-item');
    //     //insertBefore( x.prev() )
    //     //alert(index);
    //     // e.stopPropagation();
    //     // var _canvas = state.isPreviewCanvas?canvasPrev:canvas;
    //     // var obj = _canvas.getActiveObject();
    //     // _canvas.bringForward(obj)inputFlipText

    //     // _canvas.renderAll();
    //     // var elem = $(`#${id}`);
    //     // elem.prev().insertAfter(elem);
    // })


}
this.configUndoRedoStack = () => {
    this.history = window.UndoRedoStack();
    const ctrZY = (e) => {
        const key = e.which || e.keyCode;

        if (e.ctrlKey && document.querySelectorAll('textarea:focus, input:focus').length === 0) {
            if (key === 90) 
                this.undo()

            

            if (key === 89) 
                this.redo()

            

        }
    }
    document.addEventListener('keydown', ctrZY)
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
    //if(selectedText.type == "curved-text")
    //{ return; }
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
      
    
        selectedText.stroke = picker.toRGBAString();
        selectedText.strokeWidth= strokeSize;
        selectedText.paintFirst= "stroke";
        
    }
    
    canvas.renderAll();
}
initUIEvents();
initCanvasEvents();


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
