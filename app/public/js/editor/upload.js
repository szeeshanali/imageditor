/**
 * Define action to upload, drag & drop images into canvas
 */
(function () {

  
  var upload = function (canvas) {
    const _self = this;

    
    $('.drag-drop-input').click(function () {

      console.log('click drag drop')
      $(`${_self.containerSelector} #btn-image-upload`).click();
    })

    $(".drag-drop-input").on("dragover", function (event) {
      event.preventDefault();
      event.stopPropagation();
      $(this).addClass('dragging');
    });

    $(".drag-drop-input").on("dragleave", function (event) {
      event.preventDefault();
      event.stopPropagation();
      $(this).removeClass('dragging');
    });

    $(".drag-drop-input").on("drop", function (event) {
      event.preventDefault();
      event.stopPropagation();
      $(this).removeClass('dragging');
      if (event.originalEvent.dataTransfer) {
        if (event.originalEvent.dataTransfer.files.length) {
          let files = event.originalEvent.dataTransfer.files
          processFiles(files);
          $('.custom-modal-container').remove();
        }
      }
    });
    
    this.openDragDropPanel = function () {
      console.log('open drag drop panel')
      $('body').append(`<div class="custom-modal-container">
        <div class="custom-modal-content">
          <div class="drag-drop-input">
            <div>Drag & drop files<br>or click to browse.<br>JPG, PNG or SVG only!</div>
          </div>
        </div>
      </div>`)
      $('.custom-modal-container').click(function () {
        $(this).remove()
      })

      $('.drag-drop-input').click(function () {

        console.log('click drag drop')
        $(`${_self.containerSelector} #btn-image-upload`).click();
      })

      $(".drag-drop-input").on("dragover", function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).addClass('dragging');
      });

      $(".drag-drop-input").on("dragleave", function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).removeClass('dragging');
      });

      $(".drag-drop-input").on("drop", function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).removeClass('dragging');
        if (event.originalEvent.dataTransfer) {
          if (event.originalEvent.dataTransfer.files.length) {
            let files = event.originalEvent.dataTransfer.files
            processFiles(files);
            $('.custom-modal-container').remove();
          }
        }
      });
    }

    const processFiles = (files) => {
      if (files.length === 0) return;
      const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml']

      for (let file of files) {
        // check type
        if (!allowedTypes.includes(file.type)) continue

        let reader = new FileReader()

        // handle svg
        if (file.type === 'image/svg+xml') {
          reader.onload = (f) => {
            fabric.loadSVGFromString(f.target.result, (objects, options) => {
              let obj = fabric.util.groupSVGElements(objects, options)
              obj.set({
                left: 0,
                top: 0
              }).setCoords()
              canvas.add(obj)
              canvas.renderAll()
              canvas.trigger('object:modified')
            })
          }
          reader.readAsText(file)
          continue
        }

        // handle image, read file, add to canvas
        reader.onload = (f) => {
          $("#uploadpanel").removeClass("active");
          $("#mainMenu").addClass("active");
          fabric.Image.fromURL(f.target.result, (img) => {
           
             var w = canvas.backgroundImage._objects[0].width; //img.width > canvas.width ? canvas.width/2 : img.width;
             var h = canvas.backgroundImage._objects[0].height; //img.height > canvas.height ? canvas.height/2 : img.height;           
             //img.scaleToWidth(w);
             img.scaleToHeight(h);
             img.id = `item${canvas._objects.length}`; 
             img.index = canvas._objects.length;
            //
          img.globalCompositeOperation = 'source-atop';
            canvas.add(img).renderAll();
           //canvaspreview.item(0).cloneObject = canvas.item(1);
          })
        }

        reader.readAsDataURL(file)
      }
    }

    this.containerEl.append(`<input id="btn-image-upload" type="file" accept="image/*" multiple hidden>`);
    document.querySelector(`${this.containerSelector} #btn-image-upload`).addEventListener('change', function (e) {
      if (e.target.files.length === 0) return;
      processFiles(e.target.files)
    })
  }

  window.ImageEditor.prototype.initializeUpload = upload;
})()