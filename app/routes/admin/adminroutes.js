const express               = require('express');
const router                = express.Router();
const fs                    = require('fs');
const formidable                    = require('formidable');
const categories            = require("../../models/categories.js");
const uploads               = require("../../models/uploads.js");
const contents               = require("../../models/contents.js");

const commonService         = require("../../services/common");
const appusers              = require("../../models/appuser");
var request = require('request');

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
 
const mysql = require('mysql');
const { PasswordHash, CRYPT_BLOWFISH, CRYPT_EXT_DES } = require('../../public/js/password-hash');

// Prod
// const mysqlSettings = {
//   host: "104.154.144.42",
//   user: "u8bvx965rzk53",
//   password: "EJ67dAkZTuAhgYB",
//   database: 'db4qgewmyrzq4v'
// }

const mysqlSettings = {
  host: "localhost",
  user: "root",
  password: "abcd1234",
  database: "kkdb",
  port:"3306"
}

// layout. 
router.use((req, res, next) => {
    req.app.set('layout', 'pages/admin/layout');
    next();
});

var cached_layout_data = {};


router.get('/app/sync-users', isAdmin, async (req,res)=>{
  var con = mysql.createConnection(mysqlSettings);
                 
  con.connect(function(err) {
     
    if (err) {
      console.log('Error: MySQL Connection Error:' + err);  
      return done(null, false, { message : 'Server Error.'});
     }

     console.log("KopyKake DB Connected");
     let queryFindUserByEmail = `select * from wp_users`; 
     
     con.query(queryFindUserByEmail, function (err, result, fields) {
       
      if (err) {
        console.error("Error: Database Query Error: " + err);
        return done(null, false, { message : 'Server Error.'});
       }

       if(result == null || result.length == 0){
        console.error('Error: User email not found in KopyKake DB');  
        return done(null, false, { message : 'Incorrect username or password'});   
       }

       result.forEach(item=>{
        const {user_login, user_pass, user_nicename, user_email, user_url,  user_registered,  user_activation_key, user_status, display_name} = item;
       
        const kakePrintUser = {
        
             fname         : display_name,
             lname         : null,
             email         : user_email,
             password      : user_pass,
             company_name  : null,
             created_dt    : new Date(user_registered)
           };

          new appusers(kakePrintUser).save().then(()=>{
            console.log("user saved");
          });
           console.log(kakePrintUser)

       })
        

     })

    })
})


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





router.get("/app/admin/user-management", isAdmin, async (req,res)=>{
  res.locals.page = {
    title  : "User Management",
    id     : "__usermanagement",
    user   : req.user
 
   } ;
  res.render("pages/admin/user-management",res.locals.page);
})

router.get("/app/admin/reporting", isAdmin, async (req,res)=>{
  res.locals.page = {
    title  : "Reporting",
    id     : "__reporting",
    user   : req.user
   } ;
  res.render("pages/admin/reporting",res.locals.page);
})

router.get("/app/admin/", isAdmin, async (req,res)=>{
  res.redirect("/app/admin/dashboard");
})

router.get("/app/admin/privacy", isAdmin, async (req,res)=>{
  var content = await commonService.contentService.getContentAsync('privacy-policy') || {};
  res.locals.page = {
    title  : "Privacy & Policy",
    id     : "__privacy",
    user   : req.user,
    content: content || ""
   } ;
  res.render("pages/admin/privacy",res.locals.page );
})

router.get("/app/admin/settings", isAdmin, async (req,res)=>{
  res.locals.page = {
    title  : "Settings",
    id     : "__setting",
    user   : req.user
   } ;
  res.render("pages/admin/settings",res.locals.page);
})


router.get("/app/admin/terms", isAdmin, async (req,res)=>{
  var content = await commonService.contentService.getContentAsync('terms-conditions') || {};

  res.locals.page = {
    title  : "Terms & Conditions",
    id     : "__terms",
    user   : req.user,
    content: content
   } ;
  res.render("pages/admin/terms",res.locals.page);
})

router.get("/app/admin/faq", isAdmin, async (req,res)=>{
  var content = await commonService.contentService.getContentAsync('faq') || {};
  res.locals.page = {
    title  : "FAQs",
    id     : "__faq",
    user   : req.user,
    content : content
   } ;
  res.render("pages/admin/faq",res.locals.page);
})

router.get("/api/admin/custom-text", async (req,res)=>{
  var content = await commonService.contentService.getContentAsync('custom-text') || {};
  res.status(200).send(content);
})

router.delete('/api/admin/custom-text/:id', isAdmin, async (req,res)=>{
  var id = req.params["id"]; 
  if(!id){
    return res.status(400).send({"status":400,"message":"Can't Deleted. Id is missing."});
  }  
  try{
    await contents.findOneAndDelete({type:'custom-text', by_admin:true, code:id }); 
    return res.status(200).send({"status":400,"message":`Deleted successfully, Id:${id}`});
  }catch(e)
  { return res.status(400).send({"status":400,"message":"Can't Deleted. Id is missing."}); }
 
}) 
router.get("/app/admin/custom-text", isAdmin, async (req,res)=>{
  var content = await commonService.contentService.getContentAsync('custom-text') || {};
  res.locals.page = {
    title  : "Custom Text",
    id     : "__customtext",
    user   : req.user,
    content : content
   } ;
  res.render("pages/admin/custom-text",res.locals.page);
})

router.delete('/api/admin/fonts/:id', isAdmin, async (req,res)=>{
  const id = req.params["id"];
 
  if(!id){
    return res.status(400).send({"status":400,"message":"Can't Deleted. Id is missing."});
  }  
  try{
    await contents.findOneAndUpdate({type:'fonts', _id:id },
    { $set: { "deleted" : true}});

    return res.status(200).send({"status":200,"message":`Updated successfully, Id:${id}`});
  }catch(e)
  { return res.status(400).send({"status":400,"message":"Can't Deleted. Id is missing."}); }
 
}) 
router.put('/api/admin/fonts/:id', isAdmin, async (req,res)=>{
  const id = req.params["id"];
  let {active} = req.body;  
  if(!id){
    return res.status(400).send({"status":400,"message":"Can't Deleted. Id is missing."});
  }  
  try{
    await contents.findOneAndUpdate({type:'fonts', _id:id },
    { $set: { "active" : active}});

    return res.status(200).send({"status":200,"message":`Updated successfully, Id:${id}`});
  }catch(e)
  { return res.status(400).send({"status":400,"message":"Can't Deleted. Id is missing."}); }
 
}) 
router.get("/api/admin/fonts", async (req,res)=>{
  var content = await commonService.contentService.getContentAsync('fonts') || {};
  res.status(200).send(content);
})
router.get("/app/admin/fonts", isAdmin, async (req,res)=>{
  var content = await commonService.contentService.getContentAsync('fonts', true) || {};
  res.locals.page = {
    title  : "Fonts",
    id     : "__fonts",
    user   : req.user,
    fonts : content
   } ;
  res.render("pages/admin/fonts",res.locals.page);
})

router.get("/app/admin/watermark", isAdmin, async (req,res)=>{
  var content = await commonService.contentService.getContentAsync('fonts', true) || {};
  res.locals.page = {
    title  : "Watermark",
    id     : "__watermark",
    user   : req.user,
    fonts : content
   } ;
  res.render("pages/admin/watermark",res.locals.page);
})

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
      
 
      categories.findOneAndUpdate(
        {"_id" : categoryId},
        { $push: {items: objectId }},
        function(err, result) {
          if (err) {
            console.log(err);
          } else {
           // console.log(result);
          }}
          );
 
        res.redirect(ROUTE_ADMIN_HOME);
    }).catch(value=> console.log("Error uploading image"));
   }

});

router.post('/api/admin/content', isAdmin, async (req,res)=>{
  const  {content, type, fontFile, label} = req.body;
  try{
    if(type === 'faq' || type === 'privacy-policy' || type === "terms-conditions")
    { 
      await commonService.contentService.addOrUpdateContentAsync(label,content,type,true);       
      return res.status(200).send({status:"success",message:"Content updated successfully!"});      
    }
    //Create an instance of the form object
  let form = new formidable.IncomingForm();
  //Process the file upload in Node
  

  form.parse(req, function (error, fields, file) {
    let filepath = file.contentFile.filepath;
    let containingFolder = '';
    let type = fields.type;
    let filename = file.contentFile.originalFilename;
    if(type === 'fonts')
    { containingFolder = 'fonts' }
    else if(type === 'watermark')
    { containingFolder = "uploads/admin/watermark"
    filename = 'watermark.png'; }




    let newpath = `../app/public/${containingFolder}/${filename}`;
    //newpath += file.fileupload.originalFilename;

    //Copy the uploaded file to a custom folder
    fs.readFile(file.contentFile.filepath, function (err, data) {
      fs.writeFile(newpath, data, async function () {
        //Send a NodeJS file upload confirmation message
        await commonService.contentService.addOrUpdateContentAsync(fields.label,fields.content,fields.type,true);       
        res.status(200).send({status:"success",message:"Content updated successfully!"})
      });
    })
   
  });

     
    
  }catch{
    res.status(500).send({status:"error",message:"Update Failed!"})

  }
  
  
}) 
router.post('/app/admin/workspace',(req,res)=>{
  const  {width, height, title} = req.body;
  res.render("pages/admin/index",{ executescript: `callback({width:${width},height:${height},title:${title}});` })
})


router.get('/app/admin/workspace',(req,res)=>{
  const  {width, height, title} = req.body;
  res.render("pages/admin/index",);``
})

/** Dashboard */

router.get(ROUTE_ADMIN_DASHBOARD, isAdmin, async (req,res)=>{



  var totalUsers = await appusers.count();
  var allusers = await appusers
  .find({deleted:false, active:true},{password:0,is_admin:0,deleted:0,date:0,lname:0});

  var report = {
    todayUsers:0,
    thisWeekUsers:0,
    thisMonthUsers:0
} 

var start = new Date();
start.setHours(0,0,0,0);
var end = new Date();
end.setHours(23,59,59,999);
var today = new Date();
report.todayUsers      = totalUsers;
report.thisWeekUsers   = allusers.filter(function(value){ return value.created_dt >= new Date(today.getFullYear(), today.getMonth(), today.getDate()-7);}).length || 0;
report.thisMonthUsers  = allusers.filter(function(value){ return value.created_dt >= new Date(today.getFullYear(), today.getMonth(), today.getDate()-30);}).length || 0;
report.totalUsers      = allusers.length; 
report.activeUsers      = allusers.filter(function(value){ return value.active == true}).length || 0;
report.adminUsers     = allusers.filter(function(value){ return value.is_admin == true}).length || 0;


  res.locals.page = {
   title  : "Dashboard",
   id     : "__dashboard",
   user   : req.user,
   users  : allusers,
   report: report

  } ;
  res.render(PATH_ADMIN_DASHBOARD,res.locals.page);
})


/** End */
/** Template */
/**---------------------------- */

router.get('/app/admin/template-designer', isAdmin, (req,res)=>{ 
  res.locals.page = {
    user  : req.user,
    id    : "__template-designer",
    title : "Template Designer", 
    upload_text: "Upload SVG Templates." 
  }

  res.render("pages/admin/templatedesigner",{user:req.user});
})

router.get('/app/admin/templates', isAdmin, async (req,res)=>{
  res.locals.page = {
    id: "__edit-template",
    title: "Edit Template",
    user : req.user,
  }
  var templates = await uploads.find({type:'template', by_admin:true , }).sort({order_no:1}); 
  res.render("pages/admin/templates",{
    user      : req.user,
    templates : templates
  });

})

router.get('/app/admin/categories', isAdmin, async (req,res)=>{
  const  {width, height, title} = req.body;
  res.locals.pagetitle ="Categories";
  res.render("pages/admin/templates",{
    user      : req.user });
})
/** End Template */




router.get('/app/admin/cliparts', isAdmin, async (req,res)=>{

  const cliparts = await commonService.uploadService.getUploads('clipart',null,true)
  var categories = await commonService.categoryService.getCategoriesAsync(); 
  res.locals.page = {
    id: "__cliparts",
    title: "Upload Cliparts",
    user: req.user, 
    categories: categories,
    cliparts:cliparts
  }
  res.render("pages/admin/cliparts",
  res.locals.page);
})



router.get('/app/admin/banners', isAdmin, async (req,res)=>{
  const banners = await commonService.uploadService.getUploads('banner',null,true)
  res.locals.page = {
    id: "__banners",
    title: "Upload Banners",
    user: req.user,
    banners: banners
  }
  res.render("pages/admin/banners",
  res.locals.page);
})

//****Save Design */
router.post('/app/admin/save-design', isAdmin, async function(req, res) {
  try{

    const {json,thumbBase64,title, desc, templateId, active} = req.body; 
      var _id = mongoose.Types.ObjectId();
      var uploadModel = {
        title           :   title || `design${_id}`,
        name            :   desc || "",
        order_no        :   1,
        code            :   _id,
        active          :   active,
        json            :   json,
        thumbBase64     :   thumbBase64,
        default         :   false,
        by_admin        :   false,
        type            :   "pre-designed",
        uploaded_by     :    req.user._id  ,
        templateId      :    templateId 
      };
      commonService.uploadService.upload(uploadModel,(err,msg)=>{
          if(!err)
              {res.status(200).send({message:`Success`, error: msg}); }
              else{res.status(400).send({message:`Unable to upload file.`, error: msg});  }
              
          })
      }catch{
          res.status(500).send({message:`Something went wrong!`, error: msg});
      }
   })
    
router.get('/app/admin/pre-designed', isAdmin, async (req,res)=>{
    
  res.locals.page = {
    id: "__workspace",
    title: "Workspace",
    user: req.user
  }

const id = req.params.id;
const type = req.params.type;
let template = {};
let meta = {};

//let customDesigns = await uploads.find({type:'pre-designed', active:true, deleted:false, base64:{$ne:null},json:{$ne:null}},{code:1,base64:1}) || [];
let adminUploadItems = await commonService.uploadService.getUploads('all',true,true);
let templates = adminUploadItems.filter(function(item){ return item.type == 'template'});
let cliparts = adminUploadItems.filter(function(item){ return item.type == 'clipart'});
let customDesigns = adminUploadItems.filter(function(item){ return item.type == 'pre-designed'});
let categories = await commonService.categoryService.getCategoriesAsync();
let fonts = await commonService.contentService.getContentAsync('fonts',false);
let customText = await commonService.contentService.getContentAsync('custom-text');

let ca = [];
categories.forEach(category => {
var items = cliparts?.filter(i=>i.category == category.id);
if(items != null && items.length > 0)
{
    ca.push({
       categoryName:category.name,
       items: items
    })
}

});
res.render('pages/admin/pre-designed',{
    user:req.user,
    template:template,
    templateMeta:meta,
    templates: templates,
    customDesigns: customDesigns,
    cliparts:ca,
    categories:categories,
    type:type,
    code:id,
    project_limit:req.user.project_limit,
    fonts:fonts,
    customText:customText

});

})
router.put('/api/admin/template/:id?', isAdmin, async (req,res)=>{
  try{
    var id = req.params["id"]; 
    if(!id){
      return res.status(400).send({"status":400,"message":"Can't Update. Id is missing."});
    }    
    await uploads.updateMany({type:'template', by_admin:true }, {$set: {default: false} });
  
    /// find document by new Order no. 
    let findDocumentByOrderNo = await uploads.findOne({type:'template', by_admin:true, order_no:req.body.order_no });
    let updateDocument  = await uploads.findOneAndUpdate({type:'template', by_admin:true, code:id }, req.body,{returnDocument:'before'}); 
    if(findDocumentByOrderNo){
      findDocumentByOrderNo.order_no = updateDocument.order_no;
      findDocumentByOrderNo.save();
    }
    return res.status(200).send({"status":400,"message":`Updated successfully, Id:${id}`});
  }catch(ex)
  {
    return res.status(500).send({"status":500,"message":`Error while updating template, Id:${id}`});
  }
  

})



// per
router.delete('/api/admin/template/:id', isAdmin, async (req,res)=>{
  var id = req.params["id"]; 
  if(!id){
    return res.status(400).send({"status":400,"message":"Can't Deleted. Id is missing."});
  }  
  try{
    await uploads.findOneAndDelete({type:'template', by_admin:true, code:id }); 
    return res.status(200).send({"status":400,"message":`Deleted successfully, Id:${id}`});
  }catch(e)
  { return res.status(400).send({"status":400,"message":"Can't Deleted. Id is missing."}); }
 
}) 
router.delete('/api/admin/banner/:id', isAdmin, async (req,res)=>{
  var id = req.params["id"]; 
  if(!id){
    return res.status(400).send({"status":400,"message":"Can't Deleted. Id is missing."});
  }  
  try{
    await uploads.findOneAndDelete({type:'banner', by_admin:true, code:id }); 
    return res.status(200).send({"status":400,"message":`Deleted successfully, Id:${id}`});
  }catch(e)
  { return res.status(400).send({"status":400,"message":"Can't Deleted. Id is missing."}); }
 
}) 

router.delete('/api/admin/clipart/:id', isAdmin, async (req,res)=>{
  var id = req.params["id"]; 
  if(!id){
    return res.status(400).send({"status":400,"message":"Can't Deleted. Id is missing."});
  }  
  try{
    await uploads.findOneAndDelete({type:'clipart', by_admin:true, code:id }); 
    return res.status(200).send({"status":400,"message":`Deleted successfully, Id:${id}`});
  }catch(e)
  { return res.status(400).send({"status":400,"message":"Can't Deleted. Id is missing."}); }
 
}) 
router.post('/app/admin/uploads',  function(req, res) {
  let {desc, mime_type, meta, title,name,file_name,file_ext,order_no,active,base64,type,by_admin,link, json, code, ref_code,category} = req.body; 
 
  file_name = file_name || "pd.png"; 
  //filename = `${filename}-${_id}${file_ext}`;       
  var _id = mongoose.Types.ObjectId();
  
  var uploadModel = {
    title           :   title,
    name            :   name,
    desc            :   desc,
    file_name       :   file_name,
    file_ext        :   file_ext,
    order_no        :   order_no,
    code            :   _id,
    active          :   active,
    blob            :   null,
    json            :   json,
    base64          :   base64,
    editable        :   false,
    paid            :   false,
    category        :   category,
    link            :   link,
    path            :   null,
    meta            :   meta,
    default         :   req.body.default,
    by_admin        :   true,
    type            :   type,
    ref_code        :   ref_code,
    
  };

  let _path = file_name?`../app/public/uploads/admin/${type}/${type}-${_id}.${file_name.split('.').pop()}`:'';  
  let _base64Alter = base64.replace(`data:${mime_type};base64,`, "");

  
  fs.writeFile(_path, _base64Alter, 'base64', function(err) {
      if(err){ 
        console.log(err);
        return res.status(500).send({message:`Error uploading file.`, error: err}); 
       }

       commonService.uploadService.upload(uploadModel,(err,msg)=>{
        if(!err)
        {res.status(200).send({message:`Success`, error: null}); }
         res.status(400).send({message:`Unable to upload file.`, error: msg}); 
       });
       
  });
  res.status(200).send({message:`Success`, error: null});
 // commonService.uploadService.clear();
 // res.redirect('/app/admin/template-designer');
})

router.get('/api/admin/svg-templates/:id', isAdmin, async (req,res)=>{
  const itemid = req.params["id"]; 
  var result = null; 
  if(itemid == "default"){
      result = await uploads.findOne({
          type:'template', by_admin:true,  default:true });    
  }else{

      result = await uploads.findOne({
          type:'template', by_admin:true,  code:itemid, deleted:false });  
  }
  res.send(result);
  
})


/// users 

router.delete('/api/admin/user/:id', isAdmin, async (req,res)=>{
  var id = req.params["id"]; 
  if(!id){
    return res.status(400).send({"status":400,"message":"Can't Deleted. Id is missing."});
  }  
  try{
    await appusers.findOneAndUpdate({ _id:id}, {deleted:true}); 
    return res.status(200).send({"status":400,"message":`Deleted successfully, Id:${id}`});
  }catch(e)
  { return res.status(400).send({"status":400,"message":"Can't Deleted. Id is missing."}); }
 
}) 
/// do not allow admin activation from api. 
// router.put('/api/admin/user-active/:id?', isAdmin, async (req,res)=>{
//   var id = req.params["id"]; 
//   const {active} = req.body;   
//   if(!id){
//     return res.status(400).send({"status":400,"message":"Can't Update. Id is missing."});
//   } 
//   await appusers.findOneAndUpdate({ _id:id}, {active:active}); 
//   return res.status(200).send({"status":400,"message":`Updated successfully, Id:${id}`});
// })
router.put('/api/admin/user/:id?', isAdmin, async (req,res)=>{
  var id = req.params["id"]; 
  const {project_limit, active, is_admin,  watermark} = req.body; 
  if(!id){
    return res.status(400).send({"status":400,"message":"Can't Update. Id is missing."});
  } 
  await appusers.findOneAndUpdate({_id:id}, {active:active,project_limit:project_limit,is_admin:is_admin,watermark:watermark});   
  return res.status(200).send({"status":400,"message":`Updated successfully, Id:${id}`});
})

module.exports = router;