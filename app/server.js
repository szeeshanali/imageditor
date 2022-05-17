const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const multer  = require('multer')
const imageSize = require('image-size');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static('public'))
const config = {
  host: "localhost",
  app: "app",
  api: "api",
  port: "8080",
  protocol:"http://"
  
}


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,  'uploads')
    },
    filename: function (req, file, cb) {
        console.log(file);
      cb(null,  Date.now() + '_' + file.originalname)
    }
  })

const upload = multer({storage:storage})
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

router.get('/', (req, res) => {
  const url = req.params.id;
  res.sendFile(`${__dirname}/index.html`);
});

router.get('/api/user-images/:id', (req, res) => {
    const url = req.params.id;
    res.sendFile(path.join(__dirname,"uploads",url));
});

router.post("/api/upload-image", upload.single('userimages[]'), (req,res)=>{ 
console.log( req.file)
const url =  "http://localhost:8080/api/user-images/" + req.file.filename;
 const dimensions = imageSize(req.file.path)
 console.log(dimensions);

console.log
    res.json({
        images: [
            {
            "url":url,
            "pxWidth": dimensions.width,
            "pxHeight":dimensions.height,
            "inWidth": parseFloat((dimensions.width * 0.0104166667).toFixed(2)),
            "inHeight": parseFloat((dimensions.height * 0.0104166667).toFixed(2))
            }]
            
    });
});

router.post("/api/cliparts", upload.single('cliparts[]'), (req,res)=>{ 
  console.log( req.file)
  const url =  "http://localhost:8080/api/user-images/" + req.file.filename;
  // const dimensions = imageSize(req.file.filename)
  // console.log(dimensions);
  
  console.log
      res.json({
          images: [
              {
              "url":url,
              "pxWidth":1200,
              "pxHeight":630,
              "inWidth":4,
              "inHeight":2.1
              }]
              
      });
  });

app.use("/",router);
app.listen(8080, () => {
    console.log('api server is listening on port 8080');
});