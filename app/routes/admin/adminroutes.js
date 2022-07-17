const express               = require('express');
const router                = express.Router();
const fs                    = require('fs');

const categories            = require("../../models/categories.js")
const uploads               = require("../../models/uploads.js")
const commonService         = require("../../services/common")

const {isLoggedIn,isAdmin}  = require('../../config/auth')
const passport = require('passport');
const { default: mongoose, mongo } = require('mongoose');
const { title } = require('process');
const { response } = require('express');
require("../../config/passport")(passport);
const PATH_ADMIN_CATEGORY_ITEMS       = 'pages/admin/categoryitems';
const PATH_ADMIN_HOME                 =  `pages/admin/main`;
const PATH_ADMIN_UPLOADS              = `/app/uploads/admin`;
const PATH_ADMIN_DASHBOARD            = `pages/admin/dashboard`;
const ROUTE_ADMIN_DASHBOARD           = `/app/admin/dashboard`;
const ROUTE_ADMIN_HOME                = '/app/admin/';
const ROUTE_ADMIN_SAVEDESIGN          = '/app/admin/savedesign';
 

// layout. 
router.use((req, res, next) => {
    req.app.set('layout', 'pages/admin/layout');
    next();
});

var cached_layout_data = {};
router.get('/app/admin/category/:categoryid/', isAdmin, async (req,res)=>{
    const categories = cached_layout_data.categories; 
    const categoryid =  req.params["categoryid"];   
    const category =  categories.find(o => o._id == categoryid);
    const categoryItemIds = category.items;
    cached_layout_data.pagetitle = `Category > ${category.name} (${categoryItemIds.length})`;
    if(categoryItemIds == null || categoryItemIds.length === 0)
    { res.render("pages/admin/404.ejs",cached_layout_data); }
    const records = uploads.find({code: {$in: categoryItemIds}},function(err,docs){
        cached_layout_data.categoryItems = docs;
        res.render(PATH_ADMIN_CATEGORY_ITEMS,cached_layout_data)
    }).select({json:0,blob:0});
    //console.log(records);
  

})


router.get(ROUTE_ADMIN_DASHBOARD, isAdmin, async (req,res)=>{
  res.locals.pagetitle ="Dashboard";
  var customerReport = await commonService.reportingService.getCustomerReport(); 
  var summaryReport  = await commonService.reportingService.getSummaryReport(); 

  res.locals.reports = {
    customerReport  : customerReport,
    summaryReport   : summaryReport,   
  } ;
  res.render(PATH_ADMIN_DASHBOARD,{categories:[]});
})
router.get('/app/admin/',  isAdmin, async (req, res) => {

    cached_layout_data.user = req.user;
    cached_layout_data.pagetitle = "Home";
    //if(cached_layout_data.categories == null)
    //{ 
      cached_layout_data.categories = await categories.find({});
   //}    
    res.render(PATH_ADMIN_HOME,cached_layout_data);          
});

  

  router.post(ROUTE_ADMIN_SAVEDESIGN,  isAdmin,  (req,res)=>{
    const {title,description,categoryId,json,base64} = req.body;
    let errors = [];

    if(!title || !description  ) {
       errors.push({msg : "Please fill in all fields"})
    }

    if(errors.length > 0 ) {
      res.render(PATH_PROFILE, {
      user: req.user,
      errors  : errors,
      title   : title,
      desc   : description,
      category   : categoryId});

  }else{
    
    //var base64Data = blob.replace(/^data:image\/png;base64,/, "");
    console.log(json.src);
    var ticks = new Date().getTime();
    var objectId = mongoose.Types.ObjectId();
    
    //require("fs").writeFile(`${PATH_ADMIN_UPLOADS}${code}.png`, base64Data, 'base64', function(err) {
     // console.log(err);
     // res.redirect(PATH_ADMIN_HOME);
    //});

    var upload = new uploads({
      title:title,
      desc: description,
      code: objectId,
      category:categoryId,
      json: json,
      base64: base64      
    });

    upload.save()
    .then((value)=>{
      
      console.log("canvas json uploaded successfully..");
      console.log("updating category items"); 
      console.log(categoryId);
      categories.findOneAndUpdate(
        {"_id" : categoryId},
        { $push: {items: objectId }},
        function(err, result) {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }}
          );
 
        res.redirect(ROUTE_ADMIN_HOME);
    }).catch(value=> console.log("Error uploading image"));
   }

});


router.post('/app/admin/workspace',(req,res)=>{
  const  {width, height, title} = req.body;
  res.render("pages/admin/index",{ executescript: `callback({width:${width},height:${height},title:${title}});` })
})
router.get('/app/admin/workspace',(req,res)=>{
  const  {width, height, title} = req.body;
  res.render("pages/admin/index",);``
})

router.get('/app/admin/template-designer', isAdmin, (req,res)=>{
  const  {width, height, title} = req.body;
  res.locals.pagetitle = "Template Designer"
  res.render("pages/admin/templatedesigner",{user:req.user});
})
router.get('/app/admin/templates', isAdmin, async (req,res)=>{
  const  {width, height, title} = req.body;
  res.locals.pagetitle ="Templates";
  var templates = await commonService.uploadService.getTemplatesAsync();
  res.locals.templates = templates;
  res.render("pages/admin/templates",{user:req.user});
})
router.delete('/app/admin/delete-template/:id', isAdmin, async (req,res)=>{
  const  templateid = req.params["id"];
  var templates = await commonService.uploadService.deleteTemplatesAsync(templateid);
  res.locals.templates = templates; 
  commonService.uploadService.clear();
  res.send();  
}) 
router.post('/app/admin/save-template', function(req, res) {
  const {imgBase64, desc, meta} = req.body; 
  //var base64Data = imgBase64.replace(/^data:image\/png;base64,/, "");
 
  var _id = mongoose.Types.ObjectId();
  var uploadModel = {
    title           :   desc || " ",
    desc            :   desc || " ",
    code            :   _id,
    active          :   true,
    blob            :   null,
    json            :   "",
    base64          :   imgBase64,
    editable        :   false,
    paid            :   false,
    category        :   null,
    type            :   "template",
    uploaded_by     :   "admin",
    meta            :   meta
  };

  var templatename = `../app/uploads/admin/templates/t-${_id}.png`;
  require("fs").writeFile(templatename, imgBase64, 'base64', function(err) {
      if(err){
         console.log(err); 
       }
       commonService.uploadService.upload(uploadModel);

       //response.redirect('/app/admin/template-designer');
  });
  commonService.uploadService.clear();
  
  res.redirect('/app/admin/template-designer');
})

module.exports = router;