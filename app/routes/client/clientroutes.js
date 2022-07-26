const express               = require('express');
const router                = express.Router();
const {isLoggedIn,isAdmin}  = require('../../config/auth');
const categories            = require('../../models/categories');
const uploads = require('../../models/uploads');
const commonService = require('../../services/common');
PATH_USER_HOME              = 'pages/client/myprojects';
PATH_TEMPLATES              = 'pages/client/templates';
PATH_WORKSPACE              = 'pages/client/workspace';

PATH_USER_PROFILE           = 'pages/client/profile';
ROUTE_USER_HOME             = '/app'
ROUTE_USER_PROFILE          = '/app/profile';
const cached_layout_data    = {}; 


// layout. 
router.use((req, res, next) => {
    req.app.set('layout', 'pages/client/layout');
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
      else { console.log("Updated"); }
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
    res.locals.pagetitle ="My Projects";
    res.render(PATH_USER_HOME, {user:req.user});
});
router.get("/app/templates",  isLoggedIn, async (req, res) => {
    res.locals.pagetitle ="Templates";
    res.render(PATH_TEMPLATES,{user:req.user});
}); 
router.get("/app/workspace/:id?",  isLoggedIn, async (req, res) => {
    res.locals.pagetitle ="Workspace";
    var templateId = req.params.id;
    var template = {};
    var meta = {};
    if(templateId){
        template = await commonService.uploadService.getTemplateAsync(templateId);
        meta = JSON.parse(template.meta);
    }
    var templates = await commonService.uploadService.getTemplatesAsync();
    console.log(templates);
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