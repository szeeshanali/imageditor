const dpi = 72;
const defaults = {
    fontSize:36,
    fontFill:'#000',
    fontFamily:'Arial'
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

const projectHtml = `<div class='col-lg-12 my-projects'><div class="list-group-item d-flex">
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

const designHtml = `<div class='col-lg-12 pre-designed'><div class="list-group-item d-flex">
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
$btnRotate = $("#rotate");
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

fabric.CurvedText = fabric.util.createClass(fabric.Object, {
    type: 'curved-text',
    diameter: 250,
    kerning: 0,
    text: '',
    flipped: $("#inputFlipText").prop("checked") || false,
    fill: '#000',
    fontFamily: 'Times New Roman',
    fontSize: 24, // in px
    fontWeight: 'normal',
    fontStyle: '', // "normal", "italic" or "oblique".
    cacheProperties: fabric.Object.prototype.cacheProperties.concat('diameter', 'kerning', 'flipped', 'fill', 'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'strokeStyle', 'strokeWidth'),
    strokeStyle: null,
    strokeWidth: 0,
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
            const strokeStyle = this.strokeStyle;
            const strokeWidth = this.strokeWidth;
            if (strokeStyle && strokeWidth) {
                ctx.strokeStyle = strokeStyle;
                ctx.lineWidth = strokeWidth;
                ctx.miterLimit = 2;
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


var canvas = new fabric.Canvas("client-main-canvas", {preserveObjectStacking: true})
var canvasPrev = new fabric.Canvas("client-main-canvas-logo", {preserveObjectStacking: true});
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

            // if (typeof(res) === "string") {
            //     //debugger;  
            //     //window.location.reload();
            //     //return;
            // }
            
            toast("Project deleted successfully!");
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
    $("#btnBack").click();
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
function loadSVGTemplate(id) {
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
        var logoDisplaySize = 500;

        fabric.loadSVGFromURL(svgBase64, function (objects, options) {

            // / getting actual width and height of a logo
            // / setting canvas dimensions with logo width/height
            var logo = objects[objects.length-1];
            var w = Math.floor(logo.getScaledWidth());
            var h = Math.floor(logo.getScaledHeight());
            canvas.setDimensions({width: logoDisplaySize, height: logoDisplaySize});
            canvas.setBackgroundImage(logo, canvas.renderAll.bind(canvas));
            
            canvas.renderAll();
            // canvas.setZoom(2);
            var logoSize = (meta.objectWidth / dpi).toFixed(1);
            $("#template-info-panel .template-name").text(data.name);
            $("#template-info-panel .page-size").text(meta.pageSize);
            $("#template-info-panel .logo-size").text(logoSize + "''");
            $("#template-info-panel .total-logos").text(meta.objects);
            $("#template-info-panel .page-title").text(data.title);
            $("#template-info-panel .ref_code").text(data.ref_code | "NA");
            $("#template-info-panel #imgSelectedTemplate").attr("src", svgBase64)
            $(".kk-part-no").text(data.ref_code || "N/A");
            $(".kk-part-link").text(data.link || "N/A");
            $("#rulerLogoSize").text(`${logoSize} x ${logoSize} inches `)


            var reg = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            $("#kp-link").attr("href", reg.test(data.link) ? data.link : "#");
            if(!reg.test(data.link))
          {
            $("#kpweblink-panel").hide();
          }

            $("#use-template").unbind().click(function () {
                window.location.href = `/app/workspace/${
                    data.code
                }`;
            })

            $(".vRule, .hRule").remove();
            $('.canvas-container').first().ruler(rulerSettings);

            /// show grid lines 
            var labels   = $(".hRule .tickLabel");
            var vlabels   = $(".vRule .tickLabel");
            $("#btnDisplayGrid").prop("checked",true);
            $("#btnDisplayRuler").prop("checked",true);
            // if(!$("#btnDisplayGrid").prop("checked")){
            //     $("#btnDisplayGrid").click();
            // }
            // if(!$("#btnDisplayRuler").prop("checked")){
            //     $("#btnDisplayRuler").click();
            // }

          
            // hlines 
                for(var i=0;i<(labels.length);i++)
                {
                  
                  var pos = $(labels[i]).position();
                  console.log(pos);
                  $(".canvas-container").first().append(`<div class='grid-lines' style='height:500px;left:${pos.left-22}px; top:0px; '></div>`)
                }
          // vlines 
          
                for(var i=0;i<(vlabels.length);i++)
                {
                  
                  var pos = $(vlabels[i]).position();
                 console.log(pos);
                  $(".canvas-container").first().append(`<div class='grid-lines h-gridlines' style='width:500px;top:${pos.top-22}px; left:0px; border-bottom: solid 1px #666;'></div>`);
                  $(".canvas-container").first().css({border:"solid 1px #666", width:"502px",height:"503px"})
                }

        }, function (item, object) {

                   object.set({left: 8, top: 4});
            object.scaleToWidth(logoDisplaySize);
            // 4in = 96 res
            // object.set('id', item.getAttribute('id'));
            // group.push(object);
        });
        // / load template - preview display
        fabric.loadSVGFromURL(svgBase64, function (objects, options) { // $canvasPrev.fadeOut();
            let loadedObjects = new fabric.Group(group);

            let templateWidth = options.viewBoxWidth;
            let templateHeight = options.viewBoxHeight;
            let isLandspace = (templateWidth > templateHeight);
            if (isLandspace) {
                templateWidth = options.viewBoxHeight;
                templateHeight = options.viewBoxWidth;
            }


            canvasPrev.setDimensions({width: templateWidth, height: templateHeight});
            canvasPrev.setBackgroundImage(loadedObjects, canvasPrev.renderAll.bind(canvasPrev));
            // loadedObjects.scaleToWidth(templateWidth);
            // loadedObjects.scaleToHeight((templateHeight/72)*96);

            canvasPrev.renderAll();

            loadedObjects.center().setCoords();
            //loadgrid()
        }, function (item, object) {
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

function initUIEvents() {

    $("#menu-save-design").on("click",function(e){
        if(confirm("Your changes will be lost, do you want to continue?"))
        {  }
        else
        { e.preventDefault();
        e.stopPropagation(); return false; }
        
    })


    $("#btnStartOver").on("click",function(e){
    e.preventDefault();
    if(confirm("Your changes will be lost, do you want to continue?"))
    { window.location.reload(); }
    })
    $btnTemplate.on("click", function () {
        if (state.isPreviewCanvas) {
            backFromPreview();
        }
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
        $("#btnTemplate").click();
    })


    $btnSave.unbind().on("click", function (e) {
        e.preventDefault();
        saveDesign();
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
    });
    $("#btnMyProjects").on("click", function (e) {
        e.preventDefault();
        canvas.clear();
        canvasPrev.clear();
        $layers.html();
        getUserProjects();
    })

    $("#btnLibrary").on("click", function (e) {
        e.preventDefault();
        canvas.clear();
        canvasPrev.clear();
        $layers.html();
        getSharedProjects();
    })


    rotateObject();
    cropObject();
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

            if (value === 'bold') {
                var isTrue = o['fontWeight'] === 'bold';
                o.set({
                    "fontWeight": isTrue ? '' : 'bold'
                })


            } else if (value === 'italic') {
                var isTrue = o['fontStyle'] === 'italic';
                o.set({
                    "fontStyle": isTrue ? '' : 'italic'
                })

            } else if (value === 'underline') {
                var isTrue = o['textDecoration'] === 'underline';
                o.set({
                    "textDecoration": isTrue ? '' : 'underline'
                })

            } else if (value === "left" || value === "right" || value === "center") {
                o.set({"textAlign": value})
            }

            canvas.renderAll();
        }

    })

    $("#font-list-container").on("change", function (e) {
        var value = e.currentTarget.value || "Arial, sans-serif";
      
        //$("#selected-font").html($(this).html())
        canvas.getActiveObject().set("fontFamily", value);
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
            setSelectedTextStyle("stroke", this.value);

        }

    });
    $("#text-stroke-width").on("change", function () {

        var checked = $("#inputStrokeText").prop("checked");
        if(checked)
        {
            setSelectedTextStyle("strokeWidth", this.value);

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


    $("#clipartmenu .clipart img").on("click", (e) => {
        var id = e.currentTarget.src;
        var _canvas = state.isPreviewCanvas ? canvasPrev : canvas;

        fabric.Image.fromURL(id, function (img) {
            var img1 = img.set({left: 0, top: 0});
            img1.scaleToHeight(250);

            img1.globalCompositeOperation = 'source-atop';
            _canvas.add(img1);
            mainControls(true);
            // $("#menu-text > a").click();
        });

    });


}
function setSelectedTextStyle(prop, value) {
    
    var txt = canvas.getActiveObject();
 if(txt.type == 'curved-text')
 {return;}
    txt.set(prop, value);
    canvas.renderAll();

}
// function closeRepeatDesignPreview() {
//     $repeatImageCtrl.show();
//     $clientMainCanvas.parent().fadeIn();
//     $canvasPrev.parent().fadeOut();
//     state.isPreviewCanvas = false;

//     $("#repeat-image-ctrl #previewdesign").show();
//     $("#repeat-image-ctrl #backtodesign").hide();
//     $btnDownloadPDF.addClass("hidden");
//     $btnSaveDesign.addClass("hidden");
//     var json = canvas.toJSON();
//     canvasPrev.clear();
//     canvas.clear();
//     canvas.loadFromJSON(json, function() {
//         canvas.renderAll();
//      },function(o,object){
//         addLayer(o);
//         console.log(o,object)
//      })

// }


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
        },
        error: function (res) {
            if (res.status === 401) {
                toast(`${
                    res.statusText
                }:${
                    res.responseJSON.message
                }`);
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
    state.isPreviewCanvas = true;

    $("#workarea").attr("style", "background-image:url('')");
    $("#btnDisplayGrid").hide();
    $(".ruler-line").hide();


    // 1.
    if (canvas.getObjects().length == 0) {
        toast("Please create your design before preview.");
        return;
    }


    // 2.
    $("#btnBack").removeClass("hidden");
    $("#btnFinalized").removeClass("hidden");
    $("#btn-step-preview").addClass("hidden");


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
    $("#workarea").removeAttr("style");
    $("#btnDisplayGrid").show();
    //$("#btnDisplayRuler").show();
    $(".ruler-line").show();


    state.isPreviewCanvas = false;

    // 1.
    $("#btnBack").addClass("hidden");
    $("#btnFinalized").addClass("hidden");
    $("#btn-step-preview").removeClass("hidden");
    $("#create-design-heading").removeClass("hidden");
    $("#preview-design-heading").addClass("hidden");

    $("#ws-btn-save").removeClass("hidden");
    $("#ws-btn-back").addClass("hidden");
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
            canvasPrev.remove(... canvasPrev.getObjects());
            for (var i = 0; i < logos.length; i++) {
                var logo = logos[i];
                var object = fabric.util.object.clone(img);
                var left = logo.left + logo.group.left + logo.group.width / 2;
                var top = logo.top + logo.group.top + logo.group.height / 2;
                object.scaleToWidth(logo.width + 10);

                object.set("top", top);
                object.set("left", left);
                object.globalCompositeOperation = "source-atop";
                canvasPrev.add(object).renderAll();
                // $btnDownloadPDF.removeClass("hidden");
                // $btnSaveDesign.removeClass("hidden");
                //$(".vRule, .hRule").hide();
                $("#create-design-heading").addClass("hidden");
                $("#preview-design-heading").removeClass("hidden");
                // canvasPrev.setZoom(.8);

            }
            $loader.addClass("hidden");
            $("#ws-btn-save").addClass("hidden");
            $("#ws-btn-back").removeClass("hidden");
            //         closeRepeatDesignPreview();
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
   { $("#text-stroke-width").val(item.strokeWidth); }

   if(item.lineHeight)
   { $("#text-line-height").val(item.lineHeight); }
   if(item.stroke)
   { document.querySelector('#strokecolor')?.jscolor.fromString(item.stroke); }
   document.querySelector('#fontColorBox').jscolor.fromString(item.fill);
   
   
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
        // $("#layers .layer-item").on("click", function (e) {

        //     selectedObjectBySelectLayer(this);
        //     initLayerEvents(this);
        //     showLayerControls(this);


        // })
    } else {
        $layers.html("Empty! please upload an image.");
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
function downloadDesign() {

    if (! state.isPreviewCanvas) {
        toast("Please preview your design before download.");
        return;
    }

    if (canvasPrev.getObjects().length == 0) {
        toast("Please create your design before download.");
        return;
    }


    $loader.removeClass("hidden");

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
            canvasPrev.clone(function (clonedCanvas) {
                var bg = clonedCanvas.backgroundImage;
                clonedCanvas.backgroundImage = false;
                // let canvasJSON = clonedCanvas.toJSON();
                // clonedCanvas.setDimensions({width:width,height:height});
                // debugger;
                // var zoom = clonedCanvas.getZoom();
                // clonedCanvas.setZoom(1.2);

                for (var i = 0; i < clonedCanvas._objects.length; i++) {
                    clonedCanvas._objects[i].globalCompositeOperation = null;
                    canvasPrev.renderAll.bind(clonedCanvas)
                }
                bg.globalCompositeOperation = "destination-in";
                clonedCanvas.add(bg);
                clonedCanvas.renderAll();
                // let widthRatio = width / clonedCanvas.width
                // let heightRatio = height / clonedCanvas.height

                // let ratio = widthRatio > heightRatio ? heightRatio : widthRatio
                // clonedCanvas.scaleToWidth({width:1000,height:1000})
                // clonedCanvas.scale(2.0);
                // clonedCanvas.setWidth(width);
                // clonedCanvas.setHeight(height);
                var imgData = clonedCanvas.toDataURL('image/jpeg', 1.0);

                var img = document.createElement('img');

                // When the event "onload" is triggered we can resize the image.
                img.onload = function()
                    {        
                        // We create a canvas and get its context.
                        var canvas = document.createElement('canvas');
                        var ctx = canvas.getContext('2d');
        
                        // We set the dimensions at the wanted size.
                        canvas.width = wantedWidth;
                        canvas.height = wantedHeight;
        
                        // We resize the image with the canvas method drawImage();
                        ctx.drawImage(this, 0, 0, wantedWidth, wantedHeight);
        
                        var dataURI = canvas.toDataURL();
        
                        /////////////////////////////////////////
                        // Use and treat your Data URI here !! //
                        /////////////////////////////////////////
                    };
        
                // We put the Data URI in the image's src attribute
                img.src = imgData;

                

                // var imgData = 'data:image/svg+xml;utf8,' + encodeURIComponent(clonedCanvas.toSVG())
                pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
                if (res.data.watermark) {
                    var watermark = "data:image/png;base64,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";


                    pdf.addImage(watermark, 'PNG', 0, 0, 150, 150)
                    pdf.addImage(watermark, 'PNG', 100, 100, 150, 150)
                    pdf.addImage(watermark, 'PNG', 200, 200, 150, 150)
                    pdf.addImage(watermark, 'PNG', 300, 300, 150, 150)
                    pdf.addImage(watermark, 'PNG', 400, 400, 150, 150)
                }

                // let filename =
                // pdf = addWaterMark(pdf);
                pdf.save("download.pdf");
                $loader.addClass("hidden");

            });

        },
        error: function (res) {
            toast("Error while downloading.");
        }
    })
}

$btnDownloadPDF.on("click", () => {
    downloadDesign();
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
        $toast.removeClass("show")
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
    let isDrawingText = false;
    var textLeft = 50;
    var textTop = 100;
    $("#inputFlipText").on("click",function(){
        $("#inputCurvedText").click();
        $("#inputCurvedText").click();
        var checked = $(this).prop('checked');
        var obj = canvas.getActiveObject();
        if (obj) {
            setSelectedTextStyle("flipped", checked);           
        }

    })
    $("#inputStrokeText").on("click", function (e) {
        var checked = $(this).prop('checked');
        var obj = canvas.getActiveObject();
        if(obj.type == "curved-text")
        { return; }

        var strokeWidth = $("#text-stroke-width").val();
        var strokeColor = $("#strokecolor").attr('data-current-color');
        if (obj && checked) {
            setSelectedTextStyle("stroke", strokeColor);
            setSelectedTextStyle("strokeWidth", strokeWidth);
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
        var orginalText =  obj.text;
        if (e.target.checked) {
          //  $("#curveTextCtrlPanel").removeClass("hidden");
          var flipped = $("#inputFlipText").prop("checked");
            if (obj) {
                var item = new fabric.CurvedText(obj.text, {
                    type: 'curved-text',
                    diameter: parseInt($("#curveTextCtrl").val()) || 250,
                    left: obj.left,
                    top: obj.top,
                    fontFamily: obj.fontFamily,
                    fontSize: obj.fontSize,
                    kerning: 0,
                    flipped: flipped,
                    fill: obj.fill,
                    fontSize: obj.fontSize, // in px
                    fontWeight: obj.fontWeight,
                    fontStyle: obj.fontStyle,
                    cacheProperties: fabric.Object.prototype.cacheProperties.concat('diameter', 'kerning', 'flipped', 'fill', 'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'strokeStyle', 'strokeWidth','stroke'),
                    //strokeStyle: obj.strokeStyle,
                    //stroke:obj.stroke,
                    //strokeWidth: 2
                });
                canvas.add(item);
                canvas.renderAll();
                canvas.remove(obj)
                canvas.setActiveObject(item);
                addLayer();
            }

        } else {
            $("#curveTextCtrl").val(250);
            var obj = canvas.getActiveObject();
            
            var textInfo = {
                left: obj.left,
                top: obj.top,
                fontFamily: obj.fontFamily,
                fill: obj.fill,
                fontSize: obj.fontSize
            };
            
        
            var item = new fabric.IText(obj.text, textInfo);
            canvas.remove(obj);
            canvas.add(item);            
            canvas.setActiveObject(item);
            canvas.renderAll();
            
            addLayer();
           // $("#curveTextCtrlPanel").addClass("hidden");
        }
    })
    $btnAddText.on("click", function () {
        var text = $textarea.val();
        if (! text || text.length == 0) { // /toast("Please enter text");
            return;
        }

        var textInfo = {
            left: (textLeft += 20),
            top: (textTop += 20),
            fontFamily: defaults.fontFamily || 'Arial',
            fill: defaults.fontFill,
            fontSize: defaults.fontSize
        };
        var item = new fabric.IText(text, textInfo);

        var isCurvedText = $("#inputCurvedText").prop("checked");
        if (isCurvedText) {
            textInfo.diameter = 360;
            item = new fabric.CurvedText(text, textInfo);
        }
        if (state.isPreviewCanvas) {
            canvasPrev.add(item);
        } else {
            canvas.add(item);
        } canvas.setActiveObject(item);
        mainControls(true);
        textControls(true);
    })

    $btnTextSize.on("change", function () {
        canvas.getActiveObject().set("fontSize", this.value);
        canvas.renderAll();
    })

    $("#curveTextCtrl").on("input", function (e) {
        var val = e.currentTarget.value;
        console.log(val);
        var obj = canvas.getActiveObject();
        if (obj) {
            obj.set({diameter: val});
        }
        canvas.renderAll();
    })

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
    //     // _canvas.bringForward(obj)
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
function cropObject() {
    // $(`#crop`).on("click",function(e){
    // var selectedObj = canvas.getActiveObject();
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
    var selectedText = canvas.getActiveObject();
    var checked = $("#inputStrokeText").prop("checked");
    if(selectedText.type == "curved-text")
    { return; }
    if (type === 'font-color') {
        selectedText.set('fill', picker.toRGBAString());
    } else if (type === 'stroke-color' && checked) {
        selectedText.set('stroke', picker.toRGBAString());
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
