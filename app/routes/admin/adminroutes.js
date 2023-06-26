const express               = require('express');
const router                = express.Router();
const fs                    = require('fs');
const formidable                    = require('formidable');
const categories            = require("../../models/categories.js");
const uploads               = require("../../models/uploads.js");
const contents               = require("../../models/contents.js");
const categoryModel = require("../../models/categories");
const commonService         = require("../../services/common");
const appusers              = require("../../models/appuser");
const app_settings              = require("../../models/settings");
const logs              = require("../../models/logs");
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


router.get("/app/admin/template-report", isAdmin, async (req,res)=>{
  res.locals.page = {
    user   : req.user
   } ;
  res.render("pages/admin/template-reports",res.locals.page);
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
  let settings = await app_settings.findOne(); 
  res.locals.page = {
    title  : "Settings",
    id     : "__setting",
    user   : req.user, 
    settings: settings
   } ;

  res.render("pages/admin/settings",res.locals.page);
})


router.get("/app/admin/terms", isAdmin, async (req,res)=>{
  var content =  await contents.findOne({type:'terms', active:true, deleted:false});
  var exp = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
  
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
    title  : "FAQ",
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
    await contents.findOneAndDelete({type:'custom-text', by_admin:true, _id:id }); 
    let items = await contents.find({type:"custom-text"}).sort({order:1}); 
    if(items && items.length>0){
      
      for(let j =0;j<items.length;j++){
        await contents.findOneAndUpdate({_id:items[j]._id},{order:j+1})       
      }
      
    }
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
  const  {content, type, fontFile, label, id, order} = req.body;
  try{
    if(type === 'faq' || type === 'privacy-policy' || type === "terms")
    { 
      await commonService.contentService.addOrUpdateContentAsync(label,content,type,true);       
      return res.status(200).send({status:"success",message:"Content updated successfully!"});      
    }
    else if(type === 'custom-text')
    {
      if(id && id.length === 24)
      {

        if(!order || order < 1)
        {order=1}
      
        // let previousDoc = await contents.findOneAndUpdate({_id:id,type:'custom-text'},{order:order,content:content},{returnDocument:'before'});
        // await contents.findOneAndUpdate({order:order,type:'custom-text'},{order:previ.order});
        let findDocumentByOrderNo = await contents.findOne({type:'custom-text', by_admin:true, order:order },{_id:1,order:1});
        let findTargetDocumentOrderNo = await contents.findOne({type:'custom-text', by_admin:true, _id:id },{_id:1,order:1} );
        let inputOrder = order;
        let targetOrder =  findTargetDocumentOrderNo.order;

    
        if(inputOrder<targetOrder)
        {
          let range = [];
          for(let i=inputOrder;i<targetOrder;i++)
          { range.push(i) }
    
          if(range.length>0)
          {
            let findRangeIds = await contents.find({order:{$in:range}},{_id:1,order:1});
            findTargetDocumentOrderNo.order = inputOrder;
            findTargetDocumentOrderNo.save();  
            findRangeIds.forEach(item=>{
              item.order = item.order+1; 
              item.save();
            })
            console.log("update order upword");
          }
    
        }else{
    
    
          let range = [];
          for(let i=inputOrder;i>targetOrder;i--)
          { range.push(i); }
    
          if(range.length>0)
          {
            let findRangeIds = await contents.find({order:{$in:range}},{_id:1,order:1});
            findTargetDocumentOrderNo.order = inputOrder;
            findTargetDocumentOrderNo.save();
            findRangeIds.forEach(item=>{
              item.order = item.order-1; 
              item.save();
            })
            console.log("update order downword");
          }
          
        }

        await contents.findOneAndUpdate({_id:id }, {
          label:label,
          content:content          
        } ,{returnDocument:'before'});


        return res.status(200).send({status:"success",message:"Content updated successfully!"});  
        
      }
      await commonService.contentService.addOrUpdateContentAsync(label,content,type,true,order);       
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
        await commonService.contentService.addOrUpdateContentAsync(
          fields.label,
          fields.content,
          fields.type,
          true
          );       
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

router.post('/api/admin/category', isAdmin , async (req,res)=>{
  const  {name, id} = req.body;
  try{
    


    let nameAlreadyExists = await commonService.categoryService.getCategoriesByFilterAsync({name:name});
    if(nameAlreadyExists && nameAlreadyExists.length > 0)
    { return res.status(409).send(`DUPLICATE: ${name}`) }

    if(id && id.length === 24)
    { 
      await categories.updateOne({_id:id},{name:name});
      return res.status(200).send(`UPDATED: ${name}`)  
    }
     
    await commonService.categoryService.addCategoryAsync(name);
    return res.status(200).send(`CREATED: ${name}`)  

  }catch(ex)
  {
    res.status(500).send(`ERROR: ${name}`)
  }
 
})
router.delete('/api/admin/category/:id', isAdmin , async (req,res)=>{
  const  {categoryId} = req.params.id;
  try{

    await commonService.categoryService.deleteCategoriesByFilterAsync({id:req.params.id});
    res.status(200).send(`OK: ${req.params.id}`);

  }catch(ex)
  {
    if(ex === 403)
    { return res.status(403).send(`FORBIDDEN: Category is associated with cliparts, please remove associated cliparts and try again.`) }else
    res.status(500).send(`ERROR: ${req.params.id}`)
   
  }
 
})
router.get('/app/admin/workspace',(req,res)=>{
  const  {width, height, title} = req.body;
  res.render("pages/admin/index",);``
})

/** Dashboard */

router.get(ROUTE_ADMIN_DASHBOARD, isAdmin, async (req,res)=>{



  let totalUsers = await appusers.count();
  let allusers = await appusers.find({deleted:false, active:true},{password:0,is_admin:0,deleted:0,date:0,lname:0});
  let userIds =  allusers.map(function(i){return i._id});
  let allDownloads = await logs.find({"type":"download_pdf"},{ user_id:1,created_dt:1, content:1, data:1  });
  
  let _uploads = await uploads.find({ "type":{$in:["project","pre-designed"]}, deleted:false},{ 
    _id:1,
    created_dt:1,
    uploaded_by:1,
    title:1,
    type:1
   })

  let allCustomProjects = _uploads.filter(function(i){return i.type === "pre-designed"});
  let allUserProjects = _uploads.filter(function(i){return i.type === "project"}); 
  

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
var year = today.getFullYear();
var month = today.getMonth();
var date = today.getDate();
report.todayUsers      = allusers.filter(todayFilter).length || 0;
report.thisWeekUsers   = allusers.filter(thisWeekFilter).length || 0;
report.thisMonthUsers  = allusers.filter(thisMonthFilter).length || 0;
report.totalUsers      = allusers.length; 
report.activeUsers      = allusers.filter(function(value){ return value.active == true}).length || 0;
report.adminUsers     =   allusers.filter(function(value){ return value.is_admin == true}).length || 0;

/// download filter 
report.todayDownloads =   allDownloads.filter(todayFilter).length || 0;;
report.thisWeekDownloads = allDownloads.filter(thisWeekFilter).length || 0;
report.thisMonthDownloads =allDownloads.filter(thisMonthFilter).length || 0;
report.totalDownloads      = allDownloads.length;

/// project filter 
report.totalProjects = allUserProjects.length;
report.todayProjects =   allUserProjects.filter(todayFilter).length || 0;;
report.thisWeekProjects = allUserProjects.filter(thisWeekFilter).length || 0;
report.thisMonthProjects =allUserProjects.filter(thisMonthFilter).length || 0;


//let projects = await uploads.find({"type":"project","deleted":false, "active":true},{projection:{"json":0,"base64":0}}); 


function todayFilter(value)
{ return value.created_dt >= new Date(year, month, date); }

function thisWeekFilter(value)
{ return value.created_dt >= new Date(year, month, date-7); }

function thisMonthFilter(value)
{ return value.created_dt >= new Date(year, month, date-30); }

  res.locals.page = {
   title  : "Dashboard",
   id     : "__dashboard",
   user   : req.user,
   report         : report

  } ;
  res.render(PATH_ADMIN_DASHBOARD,res.locals.page);
})



router.get("/app/admin/reports", isAdmin, async (req,res)=>{

  res.locals.page = {
    title  : "Reports",
    id     : "__reports",
    user   : req.user
  };

  res.render("pages/admin/reports",res.locals.page);
})

/** End */
/** Template */
/**---------------------------- */

router.get('/app/admin/template-designer',  isAdmin, async (req,res)=>{ 
  //let templateCou = await uploads.count({type:'template',deleted:false}); 

  res.locals.page = {
    user  : req.user,
    id    : "__template-designer",
    title : "Template Designer", 
    upload_text: "Upload SVG Templates.",
    next_order: 1000,
  }
  res.render("pages/admin/templatedesigner",{user:req.user,next_order:1000});
})


router.post('/api/filter/users', isAdmin, async (req,res)=>{ 
  try{
    
    const {startDate, endDate, name, email,delete_logs} = req.body;
    let filter = { deleted:false };
    
    if(startDate){
      let _d = startDate.split('/')[1];
      let _m = startDate.split('/')[0];
      let _y = startDate.split('/')[2]; 
      let _sd = new Date(_y,_m,_d);  
      let year =_sd.getFullYear();
      let month =_sd.getMonth()-1;
      let date =  _sd.getDate();
      filter.created_dt = { $gte: new Date(year ,month ,date)}
    }
    
    if(endDate){
      let _d = endDate.split('/')[1];
      let _m = endDate.split('/')[0];
      let _y = endDate.split('/')[2]; 
      let _ed = new Date(_y,_m,_d);

      let year =_ed.getFullYear();
      let month =_ed.getMonth()-1;
      let date =  _ed.getDate();

      if(!startDate)
      {
        filter.created_dt= { $lte: new Date(year ,month ,date)} }
        else{
        filter.created_dt.$lte = new Date(year, month, date,23,59,59);
      }
            
    }

    let _userIds = [];
    if(name)
    { 
      _userIds = await appusers.find({
        fname:{$regex:new RegExp(name, "i")}
      },{_id:1})
      filter.user_id = {$in:_userIds};
   }
    if(email)
    {
      _userIds = await appusers.find({
        email:{$regex:new RegExp(email, "i")}
      },{_id:1})
      filter.user_id = {$in:_userIds};    
    }




    filter.type = "download_pdf";
    let projects = [];
    if(delete_logs === 'false'){
      downloads = await logs.find(filter,{_id:1,user_id:1}) 
    }else{
      await logs.deleteMany(filter);
      downloads = await logs.find(filter,{_id:1,user_id:1}) 
    }
    let userIds = [];
    userIds = downloads.map(i=>i.user_id) || []; 
    projects =await uploads.find( { type:'project'},{_id:1,uploaded_by:1});
    userIds = userIds.concat(projects.map(i=>i.uploaded_by));
    users = await appusers.find({_id:{$in:userIds}},{password:0}).sort({created_dt:-1});

    const out = {
      users : users, 
      projects: projects,
      downloads: downloads
    }
   

    return ok(res,out)
  }catch(ex){
    return error(res,ex)
  }
  
})




router.get('/api/filter/user-downloads/:id',  isAdmin, async (req,res)=>{ 
  try{

    const id = req.params["id"];
    const endDate = req.query["to"];
    const startDate = req.query["from"];
    let filter = {
      user_id:id, 
      type:"download_pdf"
    }

    
    if(startDate){
      let _d = startDate.split('/')[1];
      let _m = startDate.split('/')[0];
      let _y = startDate.split('/')[2]; 
      let _sd = new Date(_y,_m,_d);  
      let year =_sd.getFullYear();
      let month =_sd.getMonth()-1;
      let date =  _sd.getDate();
      filter.created_dt = { $gte: new Date(year ,month ,date)}
    }
    
    if(endDate){
      let _d = endDate.split('/')[1];
      let _m = endDate.split('/')[0];
      let _y = endDate.split('/')[2]; 
      let _ed = new Date(_y,_m,_d);

      let year =_ed.getFullYear();
      let month =_ed.getMonth()-1;
      let date =  _ed.getDate();

      if(!startDate)
      {filter.created_dt= { $lte: new Date(year ,month ,date)} }else{
        filter.created_dt.$lte = new Date(year, month, date,23,59,59);
      }
    }



    let downloads = await logs.find(filter); 
    return ok(res,downloads)
  }catch(ex){
    return error(res,ex)
  }
})

router.get('/api/filter/user-projects/:id',  isAdmin, async (req,res)=>{ 
  try{

    const id = req.params["id"];
    let projects = await uploads.find({uploaded_by:id,  type:"project"},{json:0,base64:0, deleted:false}); 
    return ok(res,projects)
  }catch(ex){
    return error(res,ex)
  }
  
})


router.post('/api/filter/templates',  isAdmin, async (req,res)=>{ 
  try{
    const {startDate, endDate, name, partNo} = req.body;
    let filter = { type:"download_pdf"};
    
    if(startDate){
      let _d = startDate.split('/')[1];
      let _m = startDate.split('/')[0];
      let _y = startDate.split('/')[2]; 
      let _sd = new Date(_y,_m,_d);  
      let year =_sd.getFullYear();
      let month =_sd.getMonth()-1;
      let date =  _sd.getDate();
      filter.created_dt = { $gte: new Date(year ,month ,date)}
    }
    
    if(endDate){
      let _d = endDate.split('/')[1];
      let _m = endDate.split('/')[0];
      let _y = endDate.split('/')[2]; 
      let _ed = new Date(_y,_m,_d);

      let year =_ed.getFullYear();
      let month =_ed.getMonth()-1;
      let date =  _ed.getDate();

      if(!startDate)
      {filter.created_dt= { $lte: new Date(year ,month ,date)} }else{
        filter.created_dt.$lte = new Date(year, month, date,23,59,59);
      }
            
    }

    let _logs = await logs.find(filter).sort({created_dt:-1}); 
    let out = [];
    if(_logs)
    {
       
      _logs.forEach(log=>{
        if(log.data)
        {
          let json = JSON.parse(log.data)
          let templateFound = out.find(o=>o.templateId === json._id); 
          if(!templateFound)
          {
            out.push({
              title       : json.title,
              count       : 1,
              ref_code    : json.ref_code,
              created_dt  : json.created_dt,
              link        : json.link,
              templateId  : json._id,
              code        : json.code
            })
          }else{
            out.find(o=>o.templateId === json._id).count +=1; 
          }
        }
      })
    }
    if(partNo)
    {
      out = out.filter(function(o){
        return o.ref_code?.toLowerCase().indexOf(partNo.toLowerCase()) != -1 
      })
    }
    
    if(name)
    {
      out = out.filter(function(o){
        return o.title?.toLowerCase().indexOf(name.toLowerCase()) != -1 
      })
    }
    return ok(res,out)
  }catch(ex){
    return error(res,ex)
  }
  
})

router.get('/api/filter/top-templates',  isAdmin, async (req,res)=>{ 
  try{
    let filter = { type:"download_pdf"};
    let _logs = await logs.find(filter); 
    let out = [];
    if(_logs)
    {
       
      _logs.forEach(log=>{
        if(log.data)
        {
          let json = JSON.parse(log.data)
          let templateFound = out.find(o=>o.templateId === json._id); 
          if(!templateFound)
          {
            out.push({
              title       : json.title,
              count       : 1,
              ref_code    : json.ref_code,
              created_dt  : json.created_dt,
              link        : json.link,
              templateId  : json._id,
              code        : json.code
            })
          }else{
            out.find(o=>o.templateId === json._id).count +=1; 
          }
        }
      })
    }
    out = out.sort(function(a,b){
      if(a.count > b.count)
      {return -1}
      return 1;
    })
    out = out.splice(0,10)


    return ok(res,out)
  }catch(ex){
    return error(res,ex)
  }
  
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

router.get('/app/admin/user-project/:id', isAdmin, async (req,res)=>{ 
  res.locals.page = {
    id: "__workspace",
    title: "Workspace",
    user: req.user
  }

  const id = req.params.id;
  const type = req.params.type;
  let template = {};
  let meta = {};
  
 let _uploads = await uploads.find(
  {type:{$in:["template","clipart"]},
  active:true,deleted:false},{json:0,base64:0,thumbBase64:0}).sort({order_no:1});

 let templates = _uploads.filter(function(i){return i.type === 'template'});
 let cliparts = _uploads.filter(function(i){return i.type === 'clipart'});
 //let customDesigns = await uploads.findOne({type:'pre-designed'});
 let banners = await uploads.find({type:'banner', active:true, deleted:false, ref_code:'home-page',json:0,base64:0});
 let customText = await commonService.contentService.getContentAsync('custom-text');
 let fonts = await commonService.contentService.getContentAsync('fonts',false);
 let ca = [];
 let settings = await app_settings.findOne();

 let categories = await commonService.categoryService.getCategoriesAsync();
 categories.forEach(category => {
  var items = cliparts?.filter(i=>i.category == category.id);
  if(items != null && items.length > 0)
  {
      items = items.map(i=>{
          i.path = i.path?.replace("../app/public","");
          return i; 
      });

      ca.push({
         categoryName:category.name,
         items: items
      }); 
      
  }
 
 });
  res.render('pages/admin/UserProject',{
      user:req.user,
      template:template,
      templateMeta:meta,
      templates: templates,
      customDesigns: [],
      cliparts:ca,
      categories:categories,
      type:type,
      code:id,
      project_limit:req.user.project_limit,
      customText:customText,
      fonts:fonts,
      banners:banners,
      settings: settings
  });
});

router.get('/app/admin/categories', isAdmin, async (req,res)=>{
  const  {width, height, title} = req.body;
  var categories = await commonService.categoryService.getCategoriesAsync(true)


  res.render("pages/admin/categories",{
    categories      : categories });
})

/** End Template */




router.get('/app/admin/manage/cliparts', isAdmin, async (req,res)=>{

  let categoriesWithItems = []; 
  let cliparts = await uploads.find({type:"clipart",deleted:false},{json:0,base64:0,thumbBase64:0})    
  let categories = await categoryModel.find({deleted:false}).sort({name:1});
  
  categories.forEach(category => {
   var items = cliparts?.filter(i=>i.category == category.id);
   items = items.map(i=>{
    i.path = i.path?.replace("../app/public","");
    return i;
   })
   if(items != null && items.length > 0)
   {
    categoriesWithItems.push({
          categoryName:category.name,
          categoryId:category._id,
          items: items,
          count: categories.length
       })
   }else{
    categoriesWithItems.push({
      categoryName: category.name,
      categoryId:category._id,
      items:[],
      count: categories.length
    })
   }
  
  });
  res.locals.page = {
    id: "__cliparts",
    title: "Upload Cliparts",
    user: req.user, 
    categories: categories,
    cliparts:categoriesWithItems
  }
  res.render("pages/admin/cliparts",
  res.locals.page);
})



router.get('/app/admin/manage/banners', isAdmin, async (req,res)=>{
  const banners = await uploads.find({type:'banner',deleted:false},{json:0,base64:0})//await commonService.uploadService.getUploads('banner',null,true)
  
  
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

router.post('/api/admin/save-design', isAdmin, async function(req, res) {
  try{
    

      const totalProjects =  await uploads.find({ 
          uploaded_by     :   req.user._id,  
          deleted         :   false,
          active          :   true,
          type            :   'pre-designed'  
      },{title:1}); 
  
      let {id, itemId, userDesignId, desc, mime_type, meta, title,name,file_name,file_ext,order_no,active,base64,type,by_admin,link, json, code, ref_code,category} = req.body; 
       
      if(totalProjects.find(i=>i.title?.toLowerCase()?.trim() === title?.toLowerCase().trim()))
      {
          ///return res.status(400).send({message:`A project with the same name  (${title}) is already exists. `, error: `Project with the same name  (${title}) is already exists. `});
          return res.status(409).send({
              status:409,
              message:`Filename already exists, Do you wish to replace?`,
              exception:null,
              error:true,
              valid:false
          });
      }
          
      let _id = mongoose.Types.ObjectId();
      let uploadModel = {
        title           :   title,
        name            :   title,
        desc            :   desc,
        code            :   _id,
        active          :   true,
        json            :   json,
        base64          :   base64,
        path            :   null,
        meta            :   meta,
        by_admin        :   true,
        type            :   type,
        uploaded_by     :   req.user._id      
      };
    
      let _path = `../app/public/uploads/admin/${type}/${type}-${_id}.jpg`;    
      let _base64Alter = base64.replace(`data:${"image/png"};base64,`, "");
      await fs.writeFileSync(_path,_base64Alter,{ encoding: 'base64' }); 
      uploadModel.path = _path;
      var upload = new uploads(uploadModel);
      await upload.save();
      res.status(200).send({message:`Success`, error: null});
  
      }catch(ex) {
          res.status(500).send({message:`Something went wrong!`, error: ex.message});
      }
   })

   
router.put('/api/admin/edit-user-design/:id', isAdmin, async function(req, res) {
  try{
    
      const project_id = req.params["id"];
      if(!project_id){
        return error(res)
      }

      let {json,comments,base64} = req.body; 
          
      let _path = `../app/public/uploads/client/pre-designed/pre-designed-${project_id}.jpg`;    
      let _base64Alter = base64.replace(`data:${"image/png"};base64,`, "");
      await fs.writeFileSync(_path,_base64Alter,{ encoding: 'base64' }); 
      //uploadModel.path = _path;
      //var upload = new uploads(uploadModel);
      ///await upload.save();
      
      var project = await uploads.findOne({_id: project_id});
      project.json = json;
      project.modified_dt = new Date();
      if(!project.comments){
        project.comments = [];
      }
      project.comments.push(
        {
          name        :   'Admin',
          created_dt  :   new Date(),
          comments    :   comments
      });
      
      project.save();
      return ok(res);
  
      }catch(ex) {
        return error(res,ex);
      }
   })
// router.post('/app/admin/save-design', isAdmin, async function(req, res) {
//   try{

//     const {json,thumbBase64,title, desc, templateId, active} = req.body; 
//       var _id = mongoose.Types.ObjectId();
//       var uploadModel = {
//         title           :   title || `design${_id}`,
//         name            :   desc || "",
//         order_no        :   1,
//         code            :   _id,
//         active          :   active,
//         json            :   json,
//         thumbBase64     :   thumbBase64,
//         default         :   false,
//         by_admin        :   false,
//         type            :   "pre-designed",
//         uploaded_by     :    req.user._id  ,
//         templateId      :    templateId 
//       };
//       commonService.uploadService.upload(uploadModel,(err,msg)=>{
//           if(!err)
//               {res.status(200).send({message:`Success`, error: msg}); }
//               else{res.status(400).send({message:`Unable to upload file.`, error: msg});  }
              
//           })
//       }catch{
//           res.status(500).send({message:`Something went wrong!`, error: msg});
//       }
//    })


    
router.get('/app/admin/custom-design/:id?', isAdmin, async (req,res)=>{
    
  res.locals.page = {
    id: "__workspace",
    title: "Workspace",
    user: req.user
  }

  
const id = req.params.id;
const type = req.params.type;
let template = {};
let meta = {};

const _uploads = await uploads.find({$or:[{type:"template"},{type:"clipart"},
{type:"pre-designed"}],active:true,deleted:false},{json:0,base64:0,thumbBase64:0}).sort({order_no:1});
const templates = _uploads.filter(function(i){return i.type === 'template'});
const cliparts = _uploads.filter(function(i){return i.type === 'clipart'});
const customDesigns = _uploads.filter(function(i){return i.type === 'pre-designed'});

let categories  = await commonService.categoryService.getCategoriesAsync();
let fonts       = await commonService.contentService.getContentAsync('fonts',false);
let customText  = await commonService.contentService.getContentAsync('custom-text');
let settings = await app_settings.findOne();
let ca = [];
categories.forEach(category => {
var items = cliparts?.filter(i=>i.category == category.id);
if(items != null && items.length > 0)
{
  items = items.map(i=>{
    i.path = i.path?.replace("../app/public","");
    return i; 
});
    ca.push({
       categoryName:category.name,
       items: items
    })
}

});

res.render('pages/admin/custom-design',{
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
    customText:customText,
    banners:[],
    settings:settings

});

})
router.put('/api/admin/template/:id?', isAdmin, async (req,res)=>{
  try{
    var id = req.params["id"]; 
    if(!id){
      return res.status(400).send({"status":400,"message":"Can't Update. Id is missing."});
    }
    
    

    let requestOrder = req.body.order_no;
    /// find document by new Order no. 
    let findDocumentByOrderNo = await uploads.findOne({type:'template', by_admin:true, order_no:requestOrder },{_id:1,order_no:1});
    let findTargetDocumentOrderNo = await uploads.findOne({type:'template', by_admin:true, code:id },{_id:1,order_no:1} );
    let inputOrder =findDocumentByOrderNo.order_no;
    let targetOrder =  findTargetDocumentOrderNo.order_no;
   

    
    if(inputOrder<targetOrder)
    {
      let range = [];
      for(let i=inputOrder;i<targetOrder;i++)
      { range.push(i) }

      if(range.length>0)
      {
        let findRangeIds = await uploads.find({order_no:{$in:range}},{_id:1,order_no:1});
        findTargetDocumentOrderNo.order_no = inputOrder;
        findTargetDocumentOrderNo.save();  
        findRangeIds.forEach(item=>{
          item.order_no = item.order_no+1; 
          item.save();
        })
        console.log("update order upword");
      }

    }else{


      let range = [];
      for(let i=inputOrder;i>targetOrder;i--)
      { range.push(i); }

      if(range.length>0)
      {
        let findRangeIds = await uploads.find({order_no:{$in:range}},{_id:1,order_no:1});
        findTargetDocumentOrderNo.order_no = inputOrder;
        findTargetDocumentOrderNo.save();
        findRangeIds.forEach(item=>{
          item.order_no = item.order_no-1; 
          item.save();
        })
        console.log("update order downword");
      }
      
    }
    if(req.body.default == 'true'){
      await uploads.updateMany({type:'template', by_admin:true }, {$set: {default: false} });
    }
    await uploads.findOneAndUpdate({type:'template', by_admin:true, code:id }, {
      active  : req.body.active,
      default : req.body.default, 
      ref_code : req.body.ref_code, 
      file_name : req.body.file_name, 
      link : req.body.link,
      title : req.body.title,
      name : req.body.name,
    } ,{returnDocument:'before'});

    // let updateDocument  = await uploads.findOneAndUpdate({type:'template', by_admin:true, code:id }, req.body,{returnDocument:'before'}); 
    // if(findDocumentByOrderNo){
    //   findDocumentByOrderNo.order_no = updateDocument.order_no;
    //   findDocumentByOrderNo.save();
    // }
    return res.status(200).send({"status":400,"message":`Updated successfully, Id:${id}`});
  }catch(ex)
  {
    return res.status(500).send({"status":500,"message":`Error while updating template, Id:${id}`});
  }
  

})

/**
 * Shared Library
 */

router.get("/app/admin/shared-library", isAdmin, async (req,res)=>{
     var kpDesigns = await uploads.find({type:"pre-designed",deleted:false},{_id:1,path:1,title:1,meta:1});
   res.locals.page = {
    title  : "Shared Library",
    id     : "__sharedlibrary",
    user   : req.user,
    kpDesigns : kpDesigns,
    banners:[]
   } ;
   res.render("pages/admin/shared-library",res.locals.page);
})



router.delete("/app/admin/shared-library/:id", isAdmin, async (req,res)=>{
  var id = req.params["id"]; 
  try{
  
    if(!id){ throw "Error while deleting. Id is missing."; }
    await uploads.findOneAndDelete({type:'pre-designed', by_admin:true, _id:id }); 
    return ok(res,`${id} has been deleted.`);

  }catch(ex)
  { 
    return error(res,ex)
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
    let items = await uploads.find({type:"template",deleted:false}).sort({order_no:1}); 
    if(items && items.length>0){
      
      for(let j =0;j<items.length;j++){
        await uploads.findOneAndUpdate({_id:items[j]._id},{order_no:j+1})       
      }
      
    }
    return res.status(200).send({"status":400,"message":`Deleted successfully, Id:${id}`});
  }catch(e)
  { return res.status(400).send({"status":400,"message":"Can't Deleted. Id is missing."}); }
 
}) 
router.delete('/api/admin/manage/banner/:id', isAdmin, async (req,res)=>{
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
    await uploads.findOneAndDelete({_id:id }); 
    return res.status(200).send({"status":400,"message":`Deleted successfully, Id:${id}`});
  }catch(e)
  { return res.status(400).send({"status":400,"message":"Can't Deleted. Id is missing."}); }
 
}) 


router.get("/api/user-project/:id?",  async (req, res) => {
  var id = req.params.id; 
  try{
      var data  = await commonService.uploadService.getUserDesignsAsync('admin',id);
      var svgTemplate = await uploads.findOne({code:data.templateId},{base64:1,meta:1})
      res.status(200).send({data:data,template:svgTemplate});
  }catch{
      res.status(500).send();
  }
});

// router.get("/api/project/:id?", isLoggedIn,  async (req, res) => {
//   var id = req.params.id; 
//   try{
//     if(!id)
//     { return res.status(404).send("Design not Found.") }

//     var data  = await uploads.findOne({_id:id},{_id:1,json:1,meta:1});
//       res.status(200).send({data:data});
//   }catch(ex) {
//       console.error(`Error: api:/api/p/${id}, exception:${ex}`);
//       res.status(500).send("Sever Error");
//   }
// });


router.get("/api/admin/project/:id?", isAdmin,  async (req, res) => {
  var id = req.params.id; 
  try{
    if(!id)
    { return res.status(404).send("Design not Found.") }
    var data  = await uploads.findOne({_id:id},{_id:1,json:1,meta:1,title:1,name:1,desc:1});
      res.status(200).send({data:data});
  }catch(ex) {
      console.error(`Error: api:/api/p/${id}, exception:${ex}`);
      res.status(500).send("Sever Error");
  }
});


router.post('/app/admin/template', async function(req, res) {
  let {id, userDesignId, desc, mime_type, meta, title,name,file_name,file_ext,order_no,active,base64,type,by_admin,link, json, code, ref_code,category} = req.body; 
 
  let _id = mongoose.Types.ObjectId();
  let uploadModel = {
    title           :   title,
    name            :   name,
    desc            :   desc,
    file_name       :   file_name,
    file_ext        :   file_ext,
    order_no        :   order_no,
    code            :   _id,
    active          :   active,
    base64          :   base64,
    link            :   link,
    path            :   null,
    meta            :   meta,
    default         :   req.body.default,
    by_admin        :   true,
    type            :   type,
    ref_code        :   ref_code,
    
    
  };

  let _path = file_name?`../app/public/uploads/admin/template/template-${_id}.${file_name.split('.').pop()}`:'';  
  let _base64Alter = base64.replace(`data:${mime_type};base64,`, "");

  const process = async ()=>{
    fs.writeFile(_path, _base64Alter, 'base64', function(err) {
      if(err){ 
        return error(res,err)
        //res.status(500).send({message:`Error uploading file.`, error: err}); 
      }
       commonService.uploadService.upload(uploadModel, id, (err,msg)=>{
        if(!err)
        {
          return ok(res,{message:`Success`, error: null});
        }
        res.status(400).send({message:`Unable to upload file.`, error: msg}); 
      });      
  });
 }
 
 await process();
res.status(200).send({message:`Success`, error: null});
 // commonService.uploadService.clear();
 // res.redirect('/app/admin/template-designer');
})

async function uploadAsync(req,res)
{
  let {id, itemId, userDesignId, desc, mime_type, meta, title,name,file_name,file_ext,order_no,active,base64,type,
    by_admin,link, json, code, ref_code, category} = req.body; 
  
  mime_type = mime_type || "image/png"
  file_name = file_name || "pd.png"; 
  //filename = `${filename}-${_id}${file_ext}`;       
  let _id = mongoose.Types.ObjectId();
  let uploadModel = {
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
    ref_code        :   ref_code

  };

  let _path = file_name?`../app/public/uploads/admin/${type}/${type}-${_id}.${file_name.split('.').pop()}`:'';  
  if(type === 'template')
  {mime_type = "image/png"}

  let _base64Alter = base64.replace(`data:${mime_type};base64,`, "");

  await fs.writeFileSync(_path,_base64Alter,{ encoding: 'base64' }); 
  uploadModel.path = _path;
    if(itemId)
    {
      if(type === "banner"){
        await uploads.findOneAndUpdate({_id:itemId},{
          title:title,
          base64:base64,
          path:_path,
          ref_code:ref_code,
          link:link,
          active:active
        });
  
      }else{
        await uploads.findOneAndUpdate({_id:itemId},{
          title:title,
          base64:base64,
          json:json,
          path:_path
        });
  
      }
      
    }else{
    
      commonService.uploadService.upload(uploadModel, id, (err,msg)=>{
        if(!err)
        {res.status(200).send({message:`Success`, error: null}); }
        res.status(400).send({message:`Unable to upload file.`, error: msg}); 
      }); 

    }
        res.status(200).send({message:`Success`, error: null});
}


router.post('/app/admin/uploads', isAdmin, async function(req, res) {
  await uploadAsync(req,res);
});
router.post('/app/uploads', isLoggedIn, async function(req, res) {
  await uploadAsync(req,res);
});
 // commonService.uploadService.clear();
 // res.redirect('/app/admin/template-designer');

router.get('/api/admin/svg-templates/:id', isAdmin, async (req,res)=>{
  const itemid = req.params["id"]; 
  var result = null; 
  if(itemid == "default"){
      result = await uploads.findOne({
          type:'template', by_admin:true,  default:true });    
  }else{

      result = await uploads.findOne({
          type:'template', code:itemid, deleted:false });  
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
/** Cliparts */
router.put("/api/clipart/:id",isAdmin, async (req,res)=>{
  const id = req.params["id"];
  const {name,active,category} = req.body;

  try{
    const d = await uploads.updateOne({"_id":id},{"name":name,"title":name,"active":active,"category":category}); 
    return ok(res,d);
  }catch(ex){
    return error(res,ex);
  }
})


//** Settings Routes */
router.put("/api/admin/settings/file-upload-limit",isAdmin, async (req,res)=>{
  const {maxLimit} = req.body;

  try{
    let setting = await app_settings.findOne();
    setting.file_size_limit = maxLimit;
    setting.save(); 
    return ok(res,setting);
  }catch(ex){
    return error(res,ex);
  }
})

router.put("/api/admin/settings/banner-delay",isAdmin, async (req,res)=>{
  const {bannerDelay} = req.body;

  try{
    let setting = await app_settings.findOne();
    setting.banner_delay = bannerDelay;
    setting.save(); 
    return ok(res,setting);
  }catch(ex){
    return error(res,ex);
  }
})
//** Settings Routes */


function error(res,ex)
{
    console.log(ex.message);
    return  res.status(500).send({
        status:500,
        message:"error",
        error:true,
        exception:ex.message,
        data:null
    });

}
function ok(res,data)
{
  return  res.status(200).send({
        status:200,
        message:"ok",
        error:false,
        exception:null,
        data:data
    });
}

module.exports = router;