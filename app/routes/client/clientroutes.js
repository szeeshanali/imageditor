const express               = require('express');
const router                = express.Router();
const {isLoggedIn,isAdmin}  = require('../../config/auth');
const categories            = require('../../models/categories');
const uploads = require('../../models/uploads');
const commonService = require('../../services/common');
PATH_USER_PROJECTS              = 'pages/client/myprojects';
PATH_TEMPLATES              = 'pages/client/templates';
PATH_WORKSPACE              = 'pages/client/workspace';
const { default: mongoose, mongo } = require('mongoose');

PATH_USER_PROFILE           = 'pages/client/profile';
ROUTE_USER_HOME             = '/app'
ROUTE_USER_PROFILE          = '/app/profile';
const cached_layout_data    = {}; 


// layout. 
router.use( async (req, res, next) => {
    req.app.set('layout', 'pages/client/layout');
    //res.locals.projects = await commonService.uploadService.getUserDesignsAsync(req.user._id);
    next();
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
    res.redirect("/app/workspace")
});

router.get("/app/projects", isLoggedIn,  async (req, res) => {
    res.locals.page = {
        id: "__my-projects",
        title: "My projects",
        user: req.user
      }

    res.locals.projects = await commonService.uploadService.getUserDesignsAsync(req.user._id) || [];
    res.render(PATH_USER_PROJECTS, {user:req.user});
});

router.get("/api/project/:id?", isLoggedIn,  async (req, res) => {
    var id = req.params.id; 
    try{
        var data  = await commonService.uploadService.getUserDesignsAsync(req.user._id,id);
        res.status(200).send(data);
    }catch{
        res.status(500).send();
    }
});

router.delete("/api/client/project/:id?", isLoggedIn,  async (req, res) => {
    var id = req.params.id; 
    console.log("Deleted Id: ", id)
    try{
        var data  = await commonService.uploadService.deleteUploadAsync(id, 'project' ,req.user._id);
        res.status(200).send(data);
    }catch{
        res.status(500).send();
    }
});
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

router.post('/app/client/save-design', isLoggedIn, function(req, res) {

    const {json,thumbBase64} = req.body; 
    var _id = mongoose.Types.ObjectId();
    var uploadModel = {
      title           :   "project1",
      name            :   "project1",
      order_no        :   1,
      code            :   _id,
      active          :   true,
      json            :   json,
      thumbBase64     :   thumbBase64,
      default         :   false,
      by_admin        :   false,
      type            :   "project",
      uploaded_by     :    req.user._id   
    };
    commonService.uploadService.upload(uploadModel,(err,msg)=>{
        if(!err)
            {res.status(200).send({message:`Success`, error: msg}); }
            else{res.status(400).send({message:`Unable to upload file.`, error: msg});  }
            
        })

  })

  
router.get("/app/pre-designed/:id?",  isLoggedIn, async (req, res) => {

    res.locals.page = {
        id: "__pre-designed",
        title: "Custom Designs",
        user: req.user,
        
      }

    var predesigned = await commonService.uploadService.getPreDesigned(req.user._id);
    console.log("userId: =====>");
    console.log(req.user._id);
    res.render("pages/client/pre-designed",{
        user:req.user, 
        predesigned: predesigned});
});

router.get("/app/workspace/:id?",  isLoggedIn, async (req, res) => {

    res.locals.page = {
        id: "__workspace",
        title: "Workspace",
        user: req.user
      }

    var templateId = req.params.id;
    var template = {};
    var meta = {};
    if(templateId){
        template = await commonService.uploadService.getTemplateAsync(templateId);
        meta = JSON.parse(template.meta);
    }
    var templates = await commonService.uploadService.getTemplatesAsync();
   // var projects = await commonService.uploadService.getUserDesignsAsync(req.user._id);
    console.log("userId: =====>");
    console.log(req.user._id);
    res.render(PATH_WORKSPACE,{
        user:req.user,
        template:template,
        templateMeta:meta,
        templates: templates
    });
});



// router.post('/app/workspace', isLoggedIn, (req,res)=>{
//     const  {width, height, title} = req.body;
//     res.render("pages/client/index",{ executescript: `callback({width:${width},height:${height},title:${title}});` })
// })
// router.get('/app/workspace',isLoggedIn, (req,res)=>{
//     const  {width, height, title} = req.body;

//     res.render("pages/client/index",);
// })

module.exports = router;