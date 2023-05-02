const express                       = require('express');
const router                        = express.Router();
const {isLoggedIn,isAdmin}          = require('../../config/auth');
const uploads                       = require('../../models/uploads');
const fs                            = require('fs');
const commonService                 = require('../../services/common');
const formidable                    = require('formidable');
const { default: mongoose, mongo }  = require('mongoose');
const appusers                      = require('../../models/appuser');
const nodemailer                    = require('nodemailer');

const PATH_TEMPLATES                = 'pages/client/templates';
const PATH_WORKSPACE                = 'pages/client/workspace';
const PATH_USER_PROFILE             = 'pages/client/profile';
const ROUTE_USER_HOME               = '/app'
const ROUTE_USER_PROFILE            = '/app/profile';
const cached_layout_data            = {}; 
const config                        = process.env; 

router.use( async (req, res, next) => {
    req.app.set('layout', 'pages/client/layout');
    next();
});


const transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    auth: {
        user: config.SMTP_USR,
        pass: config.SMTP_PASS
    }
});

router.get(ROUTE_USER_PROFILE, isLoggedIn, (req,res)=>{    
    res.render(PATH_USER_PROFILE,{
        user:req.user,
        categories:cached_layout_data.categories
    });
})


router.post(ROUTE_USER_PROFILE, isLoggedIn, (req,res)=>{
    const {fname,lname,email,address, password2,company_name} = req.body;
    let errors = [];
    if(!fname || !email || !lname ) {
       errors.push({msg : "Please fill in all fields"})
    }

    if(errors.length > 0 ) {
      res.render(PATH_PROFILE, {
      user: req.user,
      errors  : errors,
      fname   : fname,
      lname   : lname,
      email   : email});
}else{
    appusers.findOneAndUpdate({_id: req.user._id}, 
      { 
          $set: {lname: lname},
          $set: {fname: fname},
          $set: {email: email},
          $set: {address: address},
     }, {upsert: true}, function(err,doc) {
      if (err) { throw err; }
      else {  }
    });
    req.flash('success_msg','Profile updated');
        res.redirect("/app",{user:req.user})  
  }
})

router.get(ROUTE_USER_HOME,  async (req, res) => {
    res.locals.pagetitle ="Dashboard";
    res.redirect("/app/main")
});

// router.get("/app/projects", isLoggedIn,  async (req, res) => {
//     var myProjects = await commonService.uploadService.getUserDesignsAsync(req.user._id) || [];
//     res.locals.page = {
//         id: "__my-projects",
//         title: "My projects",
//         user: req.user,
//         projects: myProjects
//       }

//     res.render(PATH_USER_PROJECTS, res.locals.page);
// });

router.get("/api/project/:id?", isLoggedIn,  async (req, res) => {
    var id = req.params.id; 
    try{
       
        //var data  = //await commonService.uploadService.getUserDesignsAsync(req.user._id,id);
        var data = await uploads.findOne({_id:id,deleted:false,active:true},{code:1,title:1,meta:1,json:1,desc:1})
        //var svgTemplate = await uploads.findOne({code:data.templateId},{base64:1})
        //res.status(200).send({data:data,template:svgTemplate});
        return ok(res,data);
    }catch(ex){
        //res.status(500).send();
        return error(res,ex)
    }
});

router.get("/api/custom-design/:id?", isLoggedIn,  async (req, res) => {
    
    var id = req.params.id; 
    console.log(`API: /api/custom-design/${id||''}`);
    try{
        var data  = await commonService.uploadService.getPreDesignedAsync(id); 
        var svgTemplate= {};     
        if(id)
        { svgTemplate = await uploads.findOne({code:data.templateId},{base64:1}); }
         
     
        const response = {data:data,template:svgTemplate};
        res.status(200).send(response);
    }catch{
        res.status(500).send();
    }
});
router.get("/api/custom-designs", isLoggedIn,  async (req, res) => {
    
    var id = req.params.id; 
    console.log(`API: /api/custom-designs'}`);
    try{
        var data  = await uploads.find({"type":"pre-designed","deleted":false, "active":{$ne:false}},{
            _id:1,
            path:1,
            title:1,
            created_dt:1,
            meta:1
        }); 
        
        if(data)
        {
            data = data.map(i=>{
              i.path=  i.path.replace("../app/public","");
              return i
            })
        }
        res.status(200).send({
                "status"    : 200,
                "message"   : "success",
                "exception" : null,
                "data"      : data
            });   
      
    }catch(ex){
        res.status(500).send({
            "status"    : 500,
            "message"   : "Error while getting custom designs",
            "exception" : ex.message,
        });
    }
});
router.delete("/api/client/project/:id?", isLoggedIn,  async (req, res) => {
    var id = req.params["id"]; 
    var data  =  await commonService.uploadService.deleteUploadAsync(id, 'project' , req.user._id);

    res.status(200).send(data);
});

router.get('/api/svg-templates/:id/:t?', isLoggedIn,  async (req,res)=>{
    const itemid = req.params["id"]; 
    var result = null; 
    if(itemid == "default"){
        result = await uploads.findOne({type:'template', by_admin:true, active:true, default:true });  
            if(result == null)
            {
                result = await uploads.findOne({
                    type:'template', by_admin:true, active:true }).sort({order_no:1}); 
            }  
    }else{
        const type = req.params["t"];
        if(type === 'project')
        {
            result = await uploads.findOne({
                type:'project', by_admin:false, uploaded_by:req.user._id, active:true, code:itemid });  
        }else{
            result = await uploads.findOne({
                type:'template', by_admin:true, active:true, code:itemid });  
        }
        
    }
    res.send(result);
    
})





router.get('/app/cliparts/', isLoggedIn,  async (req,res)=>{
    var templates = await commonService.uploadService.getTemplatesAsync();

    res.locals.page = {
        id: "__cliparts",
        title: "Cliparts",
        user: req.user,
        templates: templates
      }
    res.render("pages/client/cliparts",res.locals.page);
    
})

router.get("/app/templates",  isLoggedIn, async (req, res) => {
    var templates = await commonService.uploadService.getTemplatesAsync();
    res.locals.page = {
        id: "__templates",
        title: "Templates",
        user: req.user,
        templates: templates
      }
    res.render(PATH_TEMPLATES,res.locals.page);
}); 


router.get("/app/main",  async (req, res) => {
   const banners = await commonService.uploadService.getUploads('banner',true, true)
    res.render('pages/client/main',{layout:false, banners:banners});
}); 


//****Save Design */
router.delete("/api/my-designs/:id", isLoggedIn,  async (req, res) => {
    try{
        var id = req.params["id"]; 
        var data  =  await uploads.remove({_id:id});
        return ok(res, data);
    }catch(ex)
    {
        return error(res,ex);
    }

});

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

router.get("/api/my-designs", isLoggedIn, async function(req,res){

    try{
        let d = await uploads.find({
            uploaded_by:req.user._id,
            type:"project",
            active:true,
            deleted:false,
        },{_id:1,title:1,created_dt:1,path:1,meta:1,desc:1});

        d = d.map(i=>{
            i.path = i.path?.replace("../app/public","");
            return  i; 
        })
        res.status(200).send({
            status:200,
            message:"ok",
            error:false,
            exception:null,
            data:d
        }); 
    }catch(ex){
        res.status(500).send({
            status:500,
            message:"error",
            error:true,
            exception:ex.message,
            data:null
        }); 
    }
})


router.post('/app/client/save-design', isLoggedIn, async function(req, res) {
try{

    const totalProjects =  await uploads.find({ 
        uploaded_by     :   req.user._id,  
        deleted         :   false,
        active          :   true,
        type            :   'project'

    },{title:1}); 

    const count = totalProjects.length;
    console.log(`total project count: ${count}`); 
    console.log(totalProjects);

    if(count>=req.user.project_limit){
        //return res.status(401).send({message:`You can not save more than ${req.user.project_limit} projects.`, error: `You can not save more than ${req.user.project_limit} projects.`});
        return res.status(403).send({
            status:403,
            message:`You can not save more than ${req.user.project_limit} projects.`,
            exception:null,
            error:true,
            valid:false
        });
    }        
    let {id, itemId, userDesignId, desc, mime_type, meta, title,name,file_name,file_ext,order_no,active,base64,type,by_admin,link, json, code, ref_code,category} = req.body; 
     
    if(totalProjects.find(i=>i.title?.toLowerCase()?.trim() === title?.toLowerCase().trim()))
    {
        ///return res.status(400).send({message:`A project with the same name  (${title}) is already exists. `, error: `Project with the same name  (${title}) is already exists. `});
        return res.status(400).send({
            status:401,
            message:`Project with the same name is already exists, please choose different name.`,
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
      by_admin        :   false,
      type            :   'project',
      uploaded_by     :   req.user._id      
    };
  
    let _path = `../app/public/uploads/client/pre-designed/pre-designed-${_id}.jpg`;    
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
  

  
// router.get("/app/pre-designed/:id?",  isLoggedIn, async (req, res) => {

//     res.locals.page = {
//         id: "__pre-designed",
//         title: "Custom Designs",
//         user: req.user,
        
//       }

//     var predesigned = await commonService.uploadService.getPreDesigned(req.user._id);
    
//     res.render("pages/client/pre-designed",{
//         user:req.user, 
//         predesigned: predesigned});
// });


// router.get("/api/pre-designed/:id?",  isLoggedIn, async (req, res) => {

   
//     var id = req.params.id;
//     var predesigned = await commonService.uploadService.getPreDesigned(null,id);
//     res.status(200).send({data:predesigned});
// });

router.get("/api/client/download",  isLoggedIn, async (req, res) => {

    var watermark = req.user.watermark;
    var enableDownload = true; 
    try {
        await appusers.findOneAndUpdate({_id: req.user._id},{ $inc: { download_count: 1, },upsert:true});
        res.status(200).send({data:{watermark:watermark,download:enableDownload}});
    } catch (error) {

        console.log(`Error while updating download count for user ${req.user._id}`);
        res.status(500).send({data:{watermark:watermark,download:enableDownload,error:`Error while updating download count for user ${req.user._id}`}});
    }
    
});

router.get("/app/workspace/:type?/:id?",  isLoggedIn, async (req, res) => {

    
    res.locals.page = {
        id: "__workspace",
        title: "Workspace",
        user: req.user
      }

    const id = req.params.id;
    const type = req.params.type;
    let template = {};
    let meta = {};
    
   let _uploads = await uploads.find({$or:[{type:"template"},{type:"clipart"},{type:"pre-designed"}],active:true,deleted:false},{json:0,base64:0,thumbBase64:0}).sort({order_no:1});
   let templates = _uploads.filter(function(i){return i.type === 'template'});
   let cliparts = _uploads.filter(function(i){return i.type === 'clipart'});
   let customDesigns = _uploads.filter(function(i){return i.type === 'pre-designed'});
   
   let customText = await commonService.contentService.getContentAsync('custom-text');
   let fonts = await commonService.contentService.getContentAsync('fonts',false);
   let ca = [];

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
    res.render(PATH_WORKSPACE,{
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
        customText:customText,
        fonts:fonts
    });
});

router.get('/app/rfq/pdf/:id', async function(req, res){
    let code = req.params['id'];
    try{
        let attachment = await uploads.findOne({code:code,type:'rfq_attachments'});
        if(!attachment || !attachment.path)
        {res.status(400).send(`Error: File not found. Request id: ${code}`)};
        const file = attachment.path;
        res.download(file); // Set disposition and send it.
    }catch(ex)
    {
       console.log(ex);
       res.status(400).send(`Error: File not found. Request id: ${code}`)
    }
   
  });

router.post('/api/rfq', isLoggedIn, async (req,res)=>{
    const  {companyName, name, phone, sheets, email, additionalInfo, file, date} = req.body;

    var form = new formidable.IncomingForm();

    var formfields = await new Promise(function (resolve, reject) {
        form.parse(req, function (err, fields, _file) {
            try{
    
                    let file = fields.file; 
                    const _id = mongoose.Types.ObjectId();
                    //let filepath = "file.filepath \";
                    const filename = `KakePrint${_id}.pdf`
                    let newpath = `../app/public/uploads/client/attachments/${filename}`;
                   console.log(`Saving file to path: ${newpath}`);

                   fs.writeFile(newpath, file,"base64", function (err) {
                    
                      //Send a NodeJS file upload confirmation message
                      if (err) {
                        reject(err);
                        console.log(`Error saving file.`);
                        console.log('err: ' + err);
                       return res.status(500).send(err);
                    } else {
                        console.log(`File saved.`);
                        console.log(`Adding entry to DB: ${newpath}`);
                        var model = {
                        title           :   `${filename}`,
                        name            :   `${additionalInfo}`,
                        code            :   _id,
                        active          :   true,                   
                        default         :   false,
                        by_admin        :   false,
                        type            :   "rfq_attachments",
                        uploaded_by     :    req.user._id,
                        path            :   newpath
                        };
    
                        commonService.uploadService.upload(model,null,(err,msg)=>{
    
                            if(!err)
                                { 
                                    console.log(`Added entry to DB.`);
                                    console.log(`Sending Email...`);
                                    let appUrl = `${req.protocol}://${req.hostname}:${req.socket.localPort}`;

                                   

                                    transporter.sendMail({
                                        from:       [{name:"KakePrints", address: config.RFQ_FROM}],
                                        to:         config.RFQ_TO,
                                        subject:    config.RFQ_SUBJECT.replace("{user}",fields.name),
                                        bcc:        [config.RFQ_BCC,config.RFQ_BCC2],
                                        html:       `<strong>Hello Admin,</strong>
                                        <p>Please find the details with attached PDF.</p>
                                        <p>Please find the details with attached PDF.</p>
                                        <table style='font-family:Arial; color:#222; font-size:12px; text-align:left'>
                                            <tr><th width='150'>Name</th><td>${fields.name}</td></tr>
                                            <tr><th>Company Name</th><td>${fields.companyName}</td></tr>
                                            <tr><th>Email</th><td>${fields.email}</td></tr>
                                            <tr><th>Phone</th><td>${fields.phone}</td></tr>
                                            <tr><th># of Sheets</th><td>${fields.sheets}</td></tr>
                                            <tr><th>Pickup in Torrance</th><td>${fields.pickup}</td></tr>
                                            <tr><th colspan='2'>Shipping Details</tthd></tr>
                                            <tr><th>Street 1</th><td>${fields.street1}</td></tr>
                                            <tr><th>Street 2</th><td>${fields.street2}</td></tr>
                                            <tr><th>City</th><td></td>${fields.city}</tr>
                                            <tr><th>State</th><td>${fields.state}</td></tr>
                                            <tr><th>Zip</th><td>${fields.zip}</td></tr>
                                            <tr><th>Required Date</th><td>${fields.date}</td></tr>
                                            <tr><th colspan='2'>Additional Information</th></tr>
                                            <tr><td colspan='2'><p>
                                            ${fields.additionalInfo}
                                            </p></td></tr>
                                            </table>
                                     <div style=''>
                                    <div> File: ${filename} </div><br>
                                      <div><a style='color:white;padding:10px;background-color:green;border-radius:3px;font-size:11px;text-decoration:none;font-family:Arial' href="${appUrl}/app/rfq/pdf/${_id}">DOWNLOAD  </a> </div>
                                     </div>`
                                    });  
                                    console.log(`Email Sent to: ${config.RFQ_TO}`);
                                    resolve();
                                    //return  res.status(200).send("Ok"); 
                                }
                                else { 
                                    console.log(`Error adding entry to DB.`);
                                    reject(err);
                                   //  console.log(err);
                                  // return  res.status(500).send(err);
                                     }
                            });
                            
                    }
                    })
    
    
                
               }catch(ex){
                return error(res,ex);
               }
   
        })
    });


    
  
console.log(file);
res.status(200).send("Ok")
    
  
    ///res.render("pages/client/index",{ executescript: `callback({width:${width},height:${height},title:${title}});` })
})
// router.get('/app/workspace',isLoggedIn, (req,res)=>{
//     const  {width, height, title} = req.body;

//     res.render("pages/client/index",);
// })

module.exports = router;