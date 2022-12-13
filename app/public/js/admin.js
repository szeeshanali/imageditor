(() => {


    var canvas = new fabric.Canvas("admin-main-canvas", {preserveObjectStacking: true})
    var canvasPrev = new fabric.Canvas("admin-main-canvas-logo", {preserveObjectStacking: true});

    var $canvas = $("#admin-main-canvas");
    var $canvasPrev = $("#admin-main-canvas-logo");

    var state = {
        isPreviewCanvas: false
    }
    const rulerSettings = {
        vRuleSize: 28,
        hRuleSize: 25,
        showCrosshair: false,
        showMousePos: false
    }
    // var $adminMainCanvas           = $("#admin-main-canvas");
    // var $canvasPrev                 = $("#admin-main-canvas-logo");

    var $layers = $("#layers");
    var $adminImageUpload = $("#admin-image-upload");
    var $btnImageUploadHidden = $(`#admin-image-upload-hidden`);
    var $templateContainer = $("#template-container");
    var $btnSaveDesign = $("#save-design");
    var $cancelDesign = $("#cancel-design");
    var $dropdownTemplateSize = $("#dropdownTemplateSize");
    var $dropdownCanvasShape = $("#dropdownCanvasShape");
    var $inputTemplateShapeWidth = $("#inputTemplateShapeWidth");
    var $inputTemplateShapeHeight = $("#inputTemplateShapeHeight");
    var $inputTemplateShapeLeft = $("#inputTemplateShapeLeft");
    var $inputTemplateShapeTop = $("#inputTemplateShapeTop");
    var $inputRows = $("#inputRows");
    var $inputColumns = $("#inputColumns");
    var $templateTitle = $("#admin-design-title");
    var $btnUploadTemplate = $("#btn-upload-template");
    var $adminDesignCtrl = $(".admin-design-ctrl");
    var $pageTitle = $(".am-pagetitle");
    var $btnSavePreDesign = $("#btnSavePreDesign");
    var $btnTextSize = $("#btnTextSize");
    var $loader = $("#loader");


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

    $kopykakePartNo = $("#admin-kopykake-part");
    $inputDesignName = $("#admin-design-name");
    $inputThumbnailName = $("#admin-design-title");
    $btnActiveDesign = $("#design-active");
    $btnDefaultDesign = $("#design-default");
    $inputFileName = $("#admin-file-name");
    $inputDesignLink = $("#admin-design-link");
    $inputOrderNo = $("#admin-display-order");
    $selectPageSize = $("#admin-page-size");
    $inputLogoPerPage = $("#admin-logo-count");
    $templateThumb = $("#templatepanel .template");
    $customTemplateThumb = $("#customTemplateThumb .template");
    $clipartThumb = $("#clipartmenu .clipart img");


    $btnUpdateDesign = $("#btnUpdateDesign");

    $editTemplateDesignName = $("#editTemplateDesignName");
    $editTemplateThumbName = $("#editTemplateThumbName");
    $btnAddText = $("#btnAddText");
    $textarea = $("#textarea");

    $imgCtrl = $("#workspace-right-panel .img-ctrl");
    $txtCtrl = $("#workspace-right-panel .txt-ctrl");
    $txtDecorationCtrl = $("#workspace-right-panel .txt-ctrl .text-decoration");

    $mainCtrl = $("#workspace-right-panel .main-ctrl");

    var selectedDesign = {};
    var designFlags = {
        active: true,
        default: false,
        submitted: false
    };

    const dpi = 72;

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
    function applyFilter(index, filter) {

        var obj = canvas.getActiveObject();
        if (! obj) 
            return;
        

        if (! obj.filterIndex && obj.filterIndex != 0) {
            obj.filters[index] = true && filter;
            obj.filterIndex = index;
        } else {
            obj.filters[index] = false && filter;
            obj.filterIndex = null;
        } obj.applyFilters();
        canvas.renderAll();
    }

    function applyFilterValue(index, prop, value) {
        var obj = canvas.getActiveObject();
        if (! obj) 
            return;
        
        if (obj.filters[index]) {
            obj.filters[index][prop] = value;
            obj.applyFilters();
            canvas.renderAll();
        }
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


    }
    function rotateObject() {
        $(`#rotate`).on("click", function (e) {
            var selectedObj = canvas.getActiveObject();
            if (! selectedObj) {
                toast("Please select an object.");
                return;
            }
            var curAngle = selectedObj.angle + 90;
            selectedObj.rotate(curAngle);
            if (curAngle > 270) {
                selectedObj.angle = 0;
            }
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

    function initImageEvents() {}

    function deleteTemplate(id) {
        if (!confirm("do you want to delete this template?")) {
            return;
        }
        var templateId = $("#edit-template-id").val();
        $.ajax({
            type: "DELETE",
            url: `/api/admin/template/${templateId}`,
            success: function (res) {
                debugger;
                toast("Deleted successfully!");
                setTimeout(function () {
                    window.location.reload();
                }, 1000)
            },
            error: function (res) {
                toast("Error while deleting.");
            }
        })
    }


    function previewDesign() {
        /*
   . Check Design can be previewed. 
   . Hide create design heading and show preview design heading. 
   . Disable Save button. 
   . Hide main canvas. 
   . Show preview canvas.
   . Render preview. 
   . Set Preview State. 
   . Set Wizard
    */

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
        $canvas.parent().fadeOut();
        // 5.
        $canvasPrev.parent().fadeIn();
        // 6.
        renderPreview();
        // 7.


        // 8.
        $(".step-item:nth-child(3)").removeClass("active");
        $(".step-item:nth-child(4)").addClass("active");


    }


    function backFromPreview() {
        /**
   * . Hide Back and Finalized Button and show Preview button. 
   * . Enable Save button
   * . Hide Preview Canvas 
   * . Show Main Canvas. 
   * . Clear Preview Canvas. 
   * . Render Main Canvas back to its original state.  
   * . Set Main Canvas State. 
   * . Set Wizard 
   */

        // 1.
        $("#btnBack").addClass("hidden");
        $("#btnFinalized").addClass("hidden");
        $("#btn-step-preview").removeClass("hidden");
        $("#create-design-heading").removeClass("hidden");
        $("#preview-design-heading").addClass("hidden");
        // 2.
        // $("#btnSave").unbind().click(function(){
        //     toast("Please go back and save your design.");
        // });

        // 3.
        $canvas.parent().fadeIn();
        // 4.
        $canvasPrev.parent().fadeOut();
        // 5.
        // canvasPrev.clear();
        // 6.
        renderMainCanvasOnBackButton()
        // 7.
        state.isPreviewCanvas = false;


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
        var active = $("#designActive").prop("checked");


        if (! title) {
            toast("Please enter project title.");
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
            url: "/app/admin/save-design",
            data: {
                title: title || "N/A",
                desc: desc || "N/A",
                thumbBase64: thumbBase64,
                active: active,
                json: JSON.stringify(canvas.toDatalessJSON()),
                templateId: canvas.templateId
            },
            success: function (res) {
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


    function renderPreview() {

        $loader.removeClass("hidden");
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
                    object.scaleToWidth(logo.width + 10)
                    object.set("top", top);
                    object.set("left", left);
                    object.globalCompositeOperation = "source-atop";
                    canvasPrev.add(object).renderAll();
                    // $btnDownloadPDF.removeClass("hidden");
                    // $btnSaveDesign.removeClass("hidden");
                    $(".vRule, .hRule").hide();
                    $("#create-design-heading").addClass("hidden");
                    $("#preview-design-heading").removeClass("hidden");
                    // canvasPrev.setZoom(.8);

                }$loader.addClass("hidden");
                //         closeRepeatDesignPreview();
            });
        })
        state.isPreviewCanvas = true;
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

        var pdf = null;
        var pdf = new jsPDF({
            unit: 'px', // set the unit of measurement to px
            format: 'letter', // set your paper size format
        });

        var width = canvasPrev.backgroundImage.width;
        var height = canvasPrev.backgroundImage.height;
        width = pdf.internal.pageSize.getWidth();
        height = pdf.internal.pageSize.getHeight();

        canvasPrev.clone(function (clonedCanvas) {
            var bg = clonedCanvas.backgroundImage;
            clonedCanvas.backgroundImage = false;
            // let canvasJSON = clonedCanvas.toJSON();
            // /clonedCanvas.setDimensions({width:1000,height:1200});


            for (var i = 0; i < clonedCanvas._objects.length; i++) {
                clonedCanvas._objects[i].globalCompositeOperation = null;
                canvasPrev.renderAll.bind(clonedCanvas)
            }
            bg.globalCompositeOperation = "destination-in";
            clonedCanvas.add(bg);
            clonedCanvas.renderAll();
            let widthRatio = width / clonedCanvas.width
            let heightRatio = height / clonedCanvas.height

            // let ratio = widthRatio > heightRatio ? heightRatio : widthRatio
            var imgData = clonedCanvas.toDataURL('image/jpeg', 1.0);
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("KakePrints.pdf");
            $loader.addClass("hidden");

        });

    }
    function InitUIEvents() {

        $canvasPrev.parent().hide();
        var customTextInProgress = false;

        $(".btn-custom-text").on("click",function(e){
          var id = e.currentTarget.id;

          $.ajax({
            type: "DELETE",
            url: `/api/admin/custom-text/${id}`,
            success: function (res) {
                toast("Deleted successfully!");
                $(`#custom-text-${id}`).remove();
            },
            error: function (res) {
                toast("Error while deleting.");
            }
        })

        
         
        });
        $("#btnCustomTextClear").on("click", function (e) {
          $('#inputCustomText').val("");
        })
        $("#btnCustomText").on("click", function (e) {
          if(customTextInProgress){
            toast("Please wait... ");
            return;
          }
          var customTextInProgress = true;
          var type = 'custom-text';
          var text = $('#inputCustomText').val();

          if(!text || text === "" || text.length === 0)
          {
            toast("Please enter text.");
            return; 
          }

          if(text.length > 100)
          {
            toast("Custom text should not be greater than 100 characters.");
            return; 
          }
          $.ajax({
              type: "POST",
              url: "/api/admin/content",
              data: {
                  content: text,
                  type: type
              },
              success: function (res) {
                window.location.reload();
                  designFlags.submitted = true;
                  toast("Content has been saved successfully.");
              },
              error: function (res) {
                  designFlags.submitted = false;
                  toast("Error while saving Content.");
              }
          })
      })

        $("#menu-save-design").on("click", function () { /**
       * 1. validate - please create design before save.
       * 2. show save design form. 
       * 3. save design. 
       */
            if (canvas.backgroundImage == null || canvas._objects.length == 0) {
                toast("Please create your design before save.");
                return;
            }

            // 1.
            $("#add-template-panel,#create-design-panel").addClass("hidden");
            $("#save-design-panel").removeClass("hidden");


            // /saveDesign();


        });


        rotateObject();
        cropObject();
        flipXYObject();
        grayscaleObject();
        brightnessObject();
        contrastObject();

        $("#btn-step-download").on("click", function (e) {
            e.preventDefault();
            downloadDesign();
        });


        $("#btnSave").unbind().on("click", function (e) {
            e.preventDefault();
            saveDesign();
        })

        $("#btnBack").on("click", function (e) {
            e.preventDefault();
            backFromPreview();
        });

        $("#btn-step-preview, #btn-menu-peview").on("click", function (e) {
            e.preventDefault();
            previewDesign();
        });

        $("#btnDisplayGrid").on("click", function (e) {
            if (e.target.checked) {
                $(".grid-lines").show();
            } else {
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

        $("#font-list-container .fontfamily").on("click", function (e) {
            var value = $(this).attr("data-value");
            $("#selected-font").html($(this).html())

            canvas.getActiveObject().set("fontFamily", value);
            canvas.requestRenderAll();


        })


        var textLeft = 50;
        var textTop = 100;
        $btnAddText.on("click", function () {

            var text = $textarea.val();
            var item = new fabric.IText(text, {
                left: (textLeft += 20),
                top: (textTop += 20),
                fontFamily: 'arial black',
                fill: '#333',
                fontSize: 18
            });

            canvas.add(item);
            canvas.setActiveObject(item);
            mainControls(true);
        })
        $btnTextSize.on("change", function () {
            setSelectedTextStyle("fontSize", this.value);

        })

        $("#text-color").on("change", function () {
            setSelectedTextStyle("fill", this.value);

        });
        $("#text-letter-spacing").on("change", function () {
            setSelectedTextStyle("charSpacing", this.value);

        });
        $("#text-bg-color").on("change", function () {
            setSelectedTextStyle("backgroundColor", this.value);

        });

        $("#text-stroke-color").on("change", function () {
            setSelectedTextStyle("stroke", this.value);

        });
        $("#text-stroke-width").on("change", function () {
            setSelectedTextStyle("strokeWidth", this.value);

        });
        $('#text-line-height').on("change", function () {
            setSelectedTextStyle("lineHeight", this.value);
        });


        function setSelectedTextStyle(prop, value) {
            canvas.getActiveObject().set(prop, value);
            canvas.renderAll();

        }


        $("#user-ctrl .edit").on("click", function (e) {
            var userId = e.currentTarget.id.replace("edit", "");
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
        function loadUserInfo(meta) {
            selectedUser = meta;
            $("#edit-user-container .fname").val(meta.fname);
            $("#edit-user-container .lname").val(meta.lname);
            $("#edit-user-container .email").val(meta.email);
            $("#edit-user-container .company").val(meta.company_name);
            $("#edit-user-container .project_lmt").val(meta.project_limit);
            $("#edit-user-container .created_dt").val(meta.date);
            $("#edit-user-container .is_admin").prop("checked", meta.is_admin);
            $("#edit-user-container .is_active").prop("checked", meta.active);
            $("#edit-user-container .watermark").prop("checked", meta.watermark);
        }


        $("#btnEditUser").on("click", function (e) {
            if (confirm("Do you want to save this user changes?")) {
                var userId = selectedUser ?. _id;
                if (! userId) {
                    toast("Something went wrong!");
                    return;
                }


                selectedUser.is_admin = $("#edit-user-container .is_admin").prop("checked");
                selectedUser.active = $("#edit-user-container .is_active").prop("checked");
                selectedUser.watermark = $("#edit-user-container .watermark").prop("checked");
                selectedUser.project_limit = parseInt($("#edit-user-container .project_lmt").val());

                $.ajax({
                    type: "PUT",
                    url: `/api/admin/user/${userId}`,
                    data: selectedUser,
                    success: function (res) {
                        toast("Updated successfully!");
                        setTimeout(function () {
                            window.location.reload();
                        }, 1000)
                    },
                    error: function (res) {
                        toast("Error while Updating.");
                    }
                })
            }
        });

        $("#user-ctrl .delete").on("click", function (e) {
            if (confirm("Do you want to delete this user?")) {

                var userId = e.currentTarget.id.replace("delete", "");
                $.ajax({
                    type: "DELETE",
                    url: `/api/admin/user/${userId}`,
                    success: function (res) {

                        toast("Deleted successfully!");
                        setTimeout(function () {
                            window.location.reload();
                        }, 1000)
                    },
                    error: function (res) {
                        debugger;
                        toast("Error while deleting.");
                    }
                })
            }
        });


        $("#user-ctrl .active").on("click", function (e) {
            var userId = e.currentTarget.id.replace("active", "");
            var isActive = $(e.currentTarget).attr("data-meta");
            isActive = !(isActive == "true");
            var enableDisableText = isActive ? "enable" : "disable";
            if (confirm(`do you want to ${enableDisableText} this user?`)) {

                $.ajax({
                    type: "PUT",
                    url: `/api/admin/user-active/${userId}`,
                    data: {
                        active: isActive
                    },
                    success: function (res) {
                        toast("Updated successfully!");
                        setTimeout(function () {
                            window.location.reload();
                        }, 1000)
                    },
                    error: function (res) {
                        toast("Error while Updating.");
                    }
                })
            }
        });

        $("#admin-delete-template").on("click", function (e) {
            deleteTemplate();
        })


        $templateThumb.on("click", (e) => {

            var templateId = e.currentTarget.id;
            if (templateId) {

                loadTemplateInfoByTemplateId(templateId);
                // loadSVGTemplate(templateId);
            } else {
                toast(`Can't load Template.`)
            }
        })

        $customTemplateThumb.on("click", (e) => {
            // var templateId = e.currentTarget.id;
            // if(templateId){
            // loadSVGTemplateForCustomDesign(templateId);
            // }else{
            // toast(`Can't load Template.`)
            // }
            var id = e.currentTarget.id;
            canvas.clear();
            loadSVGTemplate(id);
        })

        $clipartThumb.on("click", (e) => {
            var id = e.currentTarget.src;
            fabric.Image.fromURL(id, function (img) {
                var img1 = img.set({left: 0, top: 0});
                img1.scaleToWidth(250);
                img1.globalCompositeOperation = 'source-atop';
                canvas.add(img1);
            });

        });

        $btnActiveDesign.on("click", (e) => {
            if (! selectedDesign.base64) {
                toast("Please upload template.");
                e.currentTarget.checked = false;
                return;
            }
            designFlags.active = e.currentTarget.checked;


            // setTimeout(function(){
            // var txt = $(e.currentTarget).find(".active").text();
            // designFlags.active = (txt == "ON");
            // },500);

        })
        $cancelDesign.on("click", (e) => {
            onDesignReload();
        })

        $btnDefaultDesign.on("click", (e) => {

            if (! selectedDesign.base64) {
                toast("Please upload template.");
                e.currentTarget.checked = false;
                return;
            }


            designFlags.default = e.currentTarget.checked;
            var meta = JSON.parse(selectedDesign.meta);

            // setTimeout(function(){
            // var txt = $(e.currentTarget).find(".active").text();
            // designFlags.default = (txt == "ON");
            // },500)

        })


        $btnUpdateDesign.on("click", function () {

            var meta = selectedDesign.data.meta;

            if (meta) {
                meta = JSON.parse(meta);
                meta.objects = $inputLogoPerPage.val() || 0;
            }
            var data = {

                title: $inputThumbnailName.val(),
                name: $inputThumbnailName.val(),
                file_name: $inputFileName.val(),
                order_no: $inputOrderNo.val(),
                active: designFlags.active,
                default: designFlags.default,
                link: $inputDesignLink.val(),
                logos: $inputLogoPerPage.val(),
                ref_code: $kopykakePartNo.val(),
                meta: JSON.stringify(meta)
            }
            if (! data.title || ! data.name) {
                toast("Template mandatory information is missing. ")
                return;
            }

            if (data.order_no > 1000) {
                toast("Display Order should be less than 1000.")
                return;
            }

            $.ajax({
                type: "PUT",
                url: `/api/admin/template/${
                    selectedDesign.data.code
                }`,
                data: data,
                success: function (res) {
                    designFlags.submitted = true;
                    toast("Template information saved successfully!");
                },
                error: function (res) {
                    designFlags.submitted = false;
                    toast("Error while updating template.");
                }
            })
        })

        $btnSaveDesign.on("click", function () {
            if (! selectedDesign.base64) {
                toast("Please Browse Template.");
                return;
            }
            onSaveDesign();
        });

        $adminImageUpload.on("click", function (e) {
            e.preventDefault();
            $btnImageUploadHidden.click();
        })

        $btnImageUploadHidden.on('change', function (e) {
            if (e.target.files.length === 0) 
                return;
            
            var pageid = $(this).attr("data-page-id");
            processFiles(e.target.files, pageid);
            $btnImageUploadHidden.val('');
        })

        $("#btnSaveContent").on("click", function (e) {
            var type = $(this).attr("data-value");
            var html = $('#summernote').summernote('code');

            $.ajax({
                type: "POST",
                url: "/api/admin/content",
                data: {
                    content: html,
                    type: type
                },
                success: function (res) {
                    designFlags.submitted = true;
                    toast("Content has been successfully saved.");
                },
                error: function (res) {
                    designFlags.submitted = false;
                    toast("Error while saving Content");
                }
            })
        })

       
    }
    function enabledDesignCtrl(o) {
        $adminDesignCtrl.find(".disabled").removeClass("disabled");
    }


    function loadSVGTemplate(id) {
        var group = [];
        state.isPreviewCanvas = false;
        $.get(`/api/admin/svg-templates/${id}`, function (data) {
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


    


    function loadSVGTemplateForCustomDesign(id) {
        var group = [];

        $.get(`/api/admin/svg-templates/${id}`, function (data) {
            const svgBase64 = data.base64;
            if (! svgBase64) {
                alert("Error loading Template");
                return;
            }

            // canvas.setDimensions({width: letterPageSize.width, height: letterPageSize.height});
            // canvasPrev.setDimensions({width: letterPageSize.width, height: letterPageSize.height});
            canvas.clear();
            fabric.loadSVGFromURL(svgBase64, function (objects, options) {
                var loadedObjects = new fabric.Group(group);
                var width = 400;
                var height = 400;
                // canvas.orignalBackgroundImage = loadedObjects;
                var logo = objects[0];
                // debugger;
                // var diff = templateWidth - logo.width;
                // var logoWidth = logo.width + diff;
                logo.scaleToWidth(width);
                canvas.setDimensions({
                    width: width + 100,
                    height: height + 100
                });
                canvas.setBackgroundImage(logo, canvas.renderAll.bind(canvas));
                canvas.renderAll();
                loadedObjects.center().setCoords();

            }, function (item, object) {
                object.set('id', item.getAttribute('id'));
                group.push(object);
            });

            loadTemplateInfo(data);
        })

    }
    function loadTemplateInfo(data) {

        var meta = data.meta;
        if (meta) {
            meta = JSON.parse(meta);
        }
        selectedDesign.data = data;
        $("#edit-template-id").val(data.code);
        $inputThumbnailName.val(data.title);
        $inputDesignName.val(data.name);
        $inputFileName.val(data.file_name);
        $inputOrderNo.val(data.order_no);
        designFlags.active = data.active;
        designFlags.default = data.default;
        $inputDesignLink.val(data.link);
        debugger;
        $inputLogoPerPage.val(meta.objects || 0);
        $kopykakePartNo.val(data.ref_code);

        $("#editTemplateActive").prop("checked", data.active);
        $("#editTemplateDefault").prop("checked", data.default);

        $("#editTemplateActive").on("click", function (e) {
            designFlags.active = e.target.checked;
        })

        $("#editTemplateDefault").on("click", function (e) {
            designFlags.default = e.target.checked;
        })

        // $btnActiveDesign    =       $("#design-active");
        // $btnDefaultDesign   =       $("#design-default");
        // $inputFileName      =       $("#admin-file-name");
        // $inputDesignLink    =       $("#admin-design-link");
        // $inputOrderNo       =       $("#admin-display-order");
        // $selectPageSize     =       $("#admin-page-size");
        // $inputLogoPerPage   =       $("#admin-logo-count");
        // $templateThumb      = $("#templatepanel .template")
    }


    function loadTemplateInfoByTemplateId(id) {

        var group = [];
        state.isPreviewCanvas = false;
        $.get(`/api/admin/svg-templates/${id}`, function (data) {
            const svgBase64 = data.base64;
            if (! svgBase64) {
                toast("Error loading Template");
                return;
            }
            var meta = {};
            if (data.meta) {
                meta = JSON.parse(data.meta);
                // meta.objects = parseInt($inputLogoPerPage.val() || (meta.objects || 0));
            }canvas.clear();
            canvas.templateId = data.code;
            loadTemplateInfo(data);
        })

    }


    function onDesignReload(o) {
        $loader.addClass("hidden");
        location.reload();

    }
    function onDesignLoaded(o) {
        enabledDesignCtrl({});
        // var msg = `Sheet size: Width: ${(o.width/dpi).toFixed(2)}", Height: ${(o.height/dpi).toFixed(2)}", Logo size: Width: ${(o.logoWidth/dpi).toFixed(2)}", Height: ${(o.logoHeight/dpi).toFixed(2)}", Total Logos: ${o.logoCount}`;
        // $pageTitle.html(msg);
        var pageHeightInInches = (o.height / 72).toFixed(1);
        var pageWidthInInches = (o.width / 72).toFixed(1);
        var pageSize = `${pageWidthInInches}x${pageHeightInInches}''`;

        var logoHeightInInches = (o.height / 72).toFixed(1);
        var logoWidthInInches = (o.logoWidth / 72).toFixed(1);
        var logoSize = `${logoWidthInInches}''`;

        $("#template-info-panel .page-size").text(pageSize);
        $("#template-info-panel .logo-size").text(logoSize);
        $("#template-info-panel .total-logos").text(o.logoCount);
        $("#admin-file-name").val(o.filename);

    }

    $("#btnDisplayGrid").on("click", function () {
        var style = $("#workarea").attr("style");
        if (style) {
            $(this).removeClass('tx-gray-500');
            $("#workarea").removeAttr("style");
            $(this).html($(this).html().replace("On", "Off"));

        } else {
            $(this).html($(this).html().replace("Off", "On"));

            $(this).addClass('tx-gray-500');
            $("#workarea").attr("style", "background-image:url('')");

        }

    })


    $("#btn-step-design").on("click", function () {


        if (canvas.backgroundImage == null) {
            toast("Please Select template");
            return;
        }


        $("#add-template-panel").addClass("hidden");
        $("#create-design-panel").removeClass("hidden");

    })


    $("#btnDisplayRuler").on("click", function () {
        var style = !($(".vRule").is(':visible'));
        if (style) {
            $(this).removeClass('tx-gray-500');
            $(".vRule, .hRule").show();
            $(this).html($(this).html().replace("On", "Off"));
        } else {
            $(".vRule, .hRule").hide();
            $(this).html($(this).html().replace("Off", "On"));
            $(this).addClass('tx-gray-500');

        }

    })

    $btnSavePreDesign.on("click", () => {
        var objs = canvas._objects;
        var grp = new fabric.Group(objs, {
            width: 150,
            height: 150,
            left: 0,
            top: 0
        });
        var json = grp.toDatalessJSON();
        var m = {};
        var meta = {
            width: m.width,
            height: m.height,
            objects: m.logoCount,
            objectWidth: m.logoWidth,
            objectHeight: m.logoHeight,
            // /title: $templateTitle.val(),
            // pageSize: $selectPageSize.val(),
        }


        var dataUrl = grp.toDataURL({format: 'png', quality: 0.8});
        var category = $("#admin-categories").val();
        if(!category){
            toast(`Please select a category.`);
            return;
        }

        $.ajax({
            type: "POST",
            url: "/app/admin/save-template",
            data: {

                desc: $inputThumbnailName.val(),
                json: JSON.stringify(json),
                meta: JSON.stringify(meta),
                title: $inputThumbnailName.val(),
                name: $inputDesignName.val(),
                file_name: $inputFileName.val(),
                file_ext: ".json",
                order_no: $inputOrderNo.val(),
                active: designFlags.active,
                base64: dataUrl,
                type: "pre-designed",
                by_admin: true,
                default: designFlags.default,
                link: $inputDesignLink.val(),
                logos: $inputLogoPerPage.val(),
                ref_code: $kopykakePartNo.val(),
                category: category
            },
            success: function (res) {
                designFlags.submitted = true;
                toast("Design has been successfully saved.");
            },
            error: function (res) {
                designFlags.submitted = false;
                toast("Error while uploading Design.");
            }
        })
    })

    function onSaveDesign() {
        if (designFlags.submitted) {
            toast("Already submitted, please choose new design.");
            return;
        }
        var m = selectedDesign.meta;
        var meta = {
            width: m.width,
            height: m.height,
            objects: m.logoCount,
            objectWidth: m.logoWidth,
            objectHeight: m.logoHeight,
            title: $templateTitle.val(),
            pageSize: $selectPageSize.val()
        }
        if (!meta.title || meta.title.length == 0) {
            toast("Please Enter Title!");
            return;
        }
        if(meta.title.length > 50)
        {
            toast("Please should not greater than 50 characters.");
            return;
        }
        var MIME_TYPE = "image/png";
        var dataUrl = selectedDesign.base64;
       // const file = DataURIToBlob(dataUrl)
        // const formData = new FormData();
        // formData.append('upload', file, 'image.jpg');
        // formData.append('data', JSON.stringify({

        //     file      : formData,
        //     desc      : "",
        //     meta      : JSON.stringify(meta) ,
        //     title     : $inputThumbnailName.val(),
        //     name      : $inputDesignName.val(),
        //     file_name : $inputFileName.val(),
        //     file_ext  : ".svg",
        //     order_no  : $inputOrderNo.val(),
        //     active    : designFlags.active,
        //     base64    : dataUrl,
        //     type      : $("#design-type").val(),
        //     by_admin  : true,
        //     default   : designFlags.default,
        //     link      : $inputDesignLink.val(),
        //     logos     : $inputLogoPerPage.val(),
        //     ref_code  : $kopykakePartNo.val(),
        //     category  : category
        // })

        // )

        let designType =  $("#design-type").val();
        var category = $("#admin-categories").val();
        if(!category && designType != 'template'){
            toast(`Please select a category.`);
            return;
        }
        $loader.removeClass("hidden");
        $.ajax({
            type: "POST",
            url: "/app/admin/save-template",
            // contentType: false,
            // enctype: 'multipart/form-data',
            // processData: false,
            data: {

                desc: "",
                meta: JSON.stringify(meta),
                title: $inputThumbnailName.val(),
                name: $inputDesignName.val(),
                file_name: selectedDesign.file.name,
                file_ext: `.${selectedDesign.file.name.split('.').pop()}`,
                mime_type : selectedDesign.file.type,
                order_no: $inputOrderNo.val(),
                active: designFlags.active,
                base64: dataUrl,
                type: designType,
                by_admin: true,
                default: designFlags.default,
                link: $inputDesignLink.val(),
                logos: $inputLogoPerPage.val(),
                ref_code: $kopykakePartNo.val(),
                category: category
            },
            success: function (res) {
                designFlags.submitted = true;
                toast("Uploaded Successfully!");
                setTimeout(function () {
                    onDesignReload();
                }, 2000)
            },  
            error: function (res) {
                designFlags.submitted = false;
                toast("Server Error.");
                $loader.addClass("hidden");
            }
        })
      }


    const processFiles = (files, pageid) => {
        if (files.length === 0) 
            return;
        
        designFlags.submitted = false;
        const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml', 'image/gif']
        canvas.clear();
        onDesignLoaded({});
        for (let file of files) { // check type
            debugger;
            if (! allowedTypes.includes(file.type)) {
                toast(`Incorrect File Type`)
                return;
            }
               
            
            let reader = new FileReader();
            // handle svg
            selectedDesign.file = file;
            if (file.type === 'image/svg+xml') {
                reader.onload = (f) => {
                    var svgBase64 = f.srcElement.result;
                    selectedDesign.base64 = svgBase64;
                    canvas.clear();
                    var group = [];
                    fabric.loadSVGFromURL(svgBase64, function (objects, options) {
                        selectedDesign.meta = {
                            width: options.viewBoxWidth,
                            height: options.viewBoxHeight,
                            logoCount: objects.length,
                            logoWidth: objects[0].width,
                            logoHeight: objects[0].height,
                            filename: file.name
                        }
                        var loadedObjects = new fabric.Group(group);
                        var templateWidth = options.viewBoxWidth;
                        var templateHeight = options.viewBoxHeight;
                        canvas.setDimensions({top: 0, width: templateWidth, height: templateHeight});
                        if (pageid === "__template-designer") {
                            canvas.add(loadedObjects);
                            canvas.renderAll.bind(canvas);
                            $("#upload-template-splash").remove();
                        } else {
                            canvas.add(loadedObjects);
                        } canvas.renderAll();
                        onDesignLoaded(selectedDesign.meta);


                    }, function (item, object) {
                        object.set('id', item.getAttribute('id'));
                        group.push(object);
                    });

                };
                reader.readAsDataURL(file);
                continue;
            } else {

                if (pageid != "__template-designer") {
                    reader.onload = (f) => {
                        fabric.Image.fromURL(f.target.result, (img) => {
                            selectedDesign.base64 = f.target.result;
                            selectedDesign.meta = {
                                width: img.width,
                                height: img.height,
                                filename: file.name
                            }
                            $("#admin-file-name").val(file.name);
                            // img.globalCompositeOperation = 'source-atop';
                            img.scaleToWidth(300);
                            canvas.add(img).renderAll();
                        })
                    } ; 
                    reader.readAsDataURL(file);
                } else {
                    toast("Error: Please Upload SVG File!");
                }
            }

        }
    }


    function onObjectAdded(o) {
        addLayer();
    }

    function onObjectSelectionCleared(o) {
        hideObjectControls();
    }

    function hideObjectControls() {
        imageControls(false);
        textControls(false);
    }

    function onObjectSelection(o) {
        if (canvas.getActiveObject().get('type') == "image") {
            textControls(false);
            imageControls(true);

        } else {
            textControls(true);
            imageControls(false);
        }


        const id = o.selected[0].id;
        var elem = $(`#${id}`)[0];
        clearLayerSelection();

        $(`#${id} .layers-controls`).show();
        $(`#${id}`).addClass("selected-layer");
    }
    function initCanvasEvents() {
        fabric.Object.prototype.transparentCorners = false;
        fabric.Object.prototype.cornerStyle = 'circle';
        fabric.Object.prototype.borderColor = '#000';
        fabric.Object.prototype.cornerColor = '#494699';
        fabric.Object.prototype.cornerStrokeColor = '#000';
        fabric.Object.prototype.cornerSize = 5;
        fabric.Object.prototype.padding = 0;

        canvas.on({"selection:updated": onObjectSelection, "selection:created": onObjectSelection, "selection:cleared": onObjectSelectionCleared});

        canvas.selectedLayerId = null;
        canvas.on("object:added", (o) => {
            o.target.id = `obj${
                canvas._objects.length
            }`;
            o.target.index = canvas._objects.length - 1;
            onObjectAdded(o);
        })
        canvas.on("selection:updated", (o) => {
            const id = o.selected[0].id;
            var elem = $(`#${id}`)[0];
            clearLayerSelection();
            addFiltersOnSelection();
            $(`#${id} .layers-controls`).show();
            $(`#${id}`).addClass("selected-layer");

            // layerSelectEventHandler(elem,true);
        })

        canvas.on("selection:created", (o) => {
            const id = o.selected[0].id;
            var elem = $(`#${id}`)[0];
            clearLayerSelection();
            addFiltersOnSelection();
            $(`#${id} .layers-controls`).show();
            $(`#${id}`).addClass("selected-layer");

            // layerSelectEventHandler(elem,true);
        })
        canvas.on("object:modified", (o) => { // onCanvasModified(o);
        })

        // initCanvasTextEvents();
    }

    function addFiltersOnSelection() {}

    /** Layer functions */
    function addLayer() {
        var temp = layerHtml;
        $layers.html();
        var layers = "";
        for (var i = canvas._objects.length - 1; i >= 0; i--) {
            var obj = canvas._objects[i];
            var src = obj._element ?. currentSrc;
            if (obj.text) {
                src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABHNJREFUeJzt3LurHGUcx+FvcqKiJohGBBGjRPHyB4imE0u72Akix1bsBAsriyiKokQ7CQoKaiGKCpGAjSI2golXhIR4v3USbzExicViiCHndy55d95zdp4H3iYLM7+d3c+emd0hCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJsq73AFOyMckVmd3ntxp9n+T33kNQ25hkV5IjSU5Yg64jSZ5NcuGirxJdrEuyJ/3fKGNfu+Mv96p0W/q/OazJurV+qdaO9b0HaOiW3gNw0rbeA7QyS4Fc0HsATjqv9wCtzFIg0JxAoCAQKGzoPcAqcSDJd0mON9zmukx+rLy+4TbP5MskP2by7VEr65NcmeTahtuksx1Z/teRLyW5YcpzbUtycAWzLbb2J7lpyrPfmOSVFcz20JTnYgWWE8ixJHcPONvWTG7DaBXHoSRbBpz/nkyO2egCGes1yANJXhhwfweTvNhwe88n+bbh9payvwcH3N+qMcZAvkqys8N+9zbc1r6G21qqJzNslKvCGAPZmeSfDvs90nBbRxtuazn7fKbDfrsaWyCHkjzXe4g1bFeSP3oPMaSxBbIryW+9h1jDfs3IPmDGFMjxjPAUYQqeTtvfXFa1MQXyepKvew8xAw4keav3EEMZUyBP9R5ghozmWI4lkA+TfNB7iBnybvp81Ty4WQrkcPHY4xnRefMATiR5onj8z6EGmbZZCuSjBf79nSSvDjnISLyc5L0FHlvotaCjczK5s/XUe4L2Jtncc6hTzKfdvVh3DTv6gi5L8mn+P9tnSeZ6DsXCrkvyfia3kzya1fVf0Mxn9gJJkk2ZnMJ+k8lfFLfIsyLzmc1AZtosXYNAcwKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIZDhzDbfldRuIAz2crQ23dXXDbUF3c0n2JznRaH0eH27MkPvTLo7/1n2DPgOYkvkkx9I+kKNJ7hzuaUA7m5LckWR32odx+nozyfYkGwd5ZrBCV2Vy2rMnyd+Zfhinr8NJ3k5yb5ItU36usKi5JNuSPJLkkwwfxGLr4yQ7ktwcF/QM6KIkjyX5Jf0jWOr6OcnDmZz6wdRck+Rg+r/hV7r2Z3IqCM2dm+SL9H+Tn+3al2RD42MD2Z7+b+5W6/bGx2ZmuXhbukt6D9DQ5t4DMHsuzeRit/en/9muH5Jc3PjYQJLJRfobmfyK3fuNvtx1NMlrcaPjsqzrPcAadX6Sy7N2TlGPJ/kpyV+9BwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM7kX8fwvIWqet/rAAAAAElFTkSuQmCC';
            }
            layers += temp.replace(/{id}/ig, obj.id).replace("{src}", src).replace("{_id}", obj.id).replace(/{index}/ig, i + 1);
        }
        if (layers != "") {
            $layers.html(layers);
            $("#layers .layer-item").on("click", function () {
                layerSelectEventHandler(this, false);
            })
        } else {
            $layers.html("Empty! please upload an image.");
        }
    }
    function layerSelectEventHandler($elem, selected) {
        showLayerControls($elem, selected);
    }
    function clearLayerSelection() {
        for (var i = 0; i < canvas._objects.length; i++) {
            var id = canvas._objects[i].id;
            $(`#${id} .layers-controls`).attr("style", "display:none !important");
            $(`#${id}`).removeClass("selected-layer");
        }

    }
    function showLayerControls($elem, selected) {
        var target = $elem;
        var index = parseInt($elem.getAttribute("data-index")) - 1;
        var preObj = canvas.selectedObj ?. target;
        if (preObj ?. id != target.id) {
            $(`#${
                target.id
            } .layers-controls`).show();
            $(`#${
                target.id
            }`).addClass("selected-layer");

            canvas.discardActiveObject();
            canvas.requestRenderAll();
            canvas.setActiveObject(canvas.item(index));
            if (preObj) {
                $(`#${
                    preObj.id
                } .layers-controls`).attr("style", "display:none !important");
                $(`#${
                    preObj.id
                }`).removeClass("selected-layer");
            }
            canvas.selectedObj = canvas.item(index);

        }

        initLayerEvents($elem)

    }
    function initLayerEvents($elem) {
        var id = $elem.id;

        $(`#${id} .delete`).on("click", function (e) {
            e.stopPropagation();
            canvas.remove(canvas.selectedObj).renderAll();
            addLayer();
        })

        $(`#${id} .duplicate`).on("click", function (e) {
            e.stopPropagation();
            var object = fabric.util.object.clone(canvas.getActiveObject());
            object.set("top", object.top + 5);
            object.set("left", object.left + 5);
            canvas.add(object);
        })

        $(`#${id} .bring-fwd`).on("click", function (e) {
            e.stopPropagation();
            var obj = canvas.getActiveObject();

            canvas.bringForward(obj)
            canvas.renderAll();
            var elem = $(`#${id}`);
            elem.prev().insertAfter(elem);
        })


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

    /** */

    InitUIEvents();
    initCanvasEvents();
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
    function toast(message) {
        var $toast = $("#snackbar").addClass("show");
        $toast.text(message);
        setTimeout(function () {
            $toast.removeClass("show")

        }, 3000);
    }
    function DataURIToBlob(dataURI) {
        const splitDataURI = dataURI.split(',')
        const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
        const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

        const ia = new Uint8Array(byteString.length)
        for (let i = 0; i < byteString.length; i++) 
            ia[i] = byteString.charCodeAt(i)

        

        return new Blob([ia], {type: mimeString})
    }
})()
