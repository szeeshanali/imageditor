const express               = require('express');
const router                = express.Router();

const categories  = require("../../models/categories.js")
const uploads     = require("../../models/uploads.js")

const {isLoggedIn,isAdmin}  = require('../../config/auth')
const passport = require('passport');
const { default: mongoose, mongo } = require('mongoose');
require("../../config/passport")(passport);
const PATH_ADMIN_CATEGORY_ITEMS      = 'pages/admin/categoryitems';
const PATH_ADMIN_HOME       =  `pages/admin/index`;
const PATH_ADMIN_UPLOADS    = `../app/uploads/admin`;
const ROUTE_ADMIN_HOME      = '/app/admin/';


// layout. 
router.use((req, res, next) => {
    req.app.set('layout', 'pages/admin/layout');
    next();
});

var cached_layout_data = {};
router.get('/category/:categoryid/', isAdmin, async (req,res)=>{
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


router.get('dashboard', isAdmin, async (req,res)=>{
    const cats = await categories.find({}); 
        res.render(PATH_ADMIN_HOME,cached_layout_data);
})
router.get('/',  isAdmin, async (req, res) => {

    cached_layout_data.user = req.user;
    cached_layout_data.pagetitle = "Home";
    if(cached_layout_data.categories == null)
    { cached_layout_data.categories = await categories.find({}); }    
    res.render(PATH_ADMIN_HOME,cached_layout_data);          
});

  

  router.post("/savedesign",  isAdmin,  (req,res)=>{
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

module.exports = router;