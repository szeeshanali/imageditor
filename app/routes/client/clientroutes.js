const express               = require('express');
const router                = express.Router();
const {isLoggedIn,isAdmin}  = require('../../config/auth');
const categories            = require('../../models/categories');
PATH_USER_HOME              = 'pages/client/index';
ROUTE_USER_HOME             = '/app'

// layout. 
router.use((req, res, next) => {
    req.app.set('layout', 'pages/client/layout');
    next();
});


router.get("profile", isLoggedIn, (req,res)=>{    
    res.render(PATH_PROFILE,{user:req.user});
})


router.post("profile", isLoggedIn, (req,res)=>{
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
const cached_layout_data = {}; 

router.get(ROUTE_USER_HOME, async (req, res) => {
    cached_layout_data.user = req.user;
    cached_layout_data.pagetitle = "Home";
    if(cached_layout_data.categories == null) 
    { cached_layout_data.categories = await categories.find({active:true, items:{$gt: []}}); }
    
    console.log("categories:",cached_layout_data.categories)
    res.render(PATH_USER_HOME,cached_layout_data);

    res.render(PATH_USER_HOME,
    { user:req.user });
});

module.exports = router;