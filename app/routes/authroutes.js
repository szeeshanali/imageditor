const express               = require('express');
const router                = express.Router();
const passport              = require('passport');
const bcrypt                = require('bcrypt');

require("../config/passport")(passport);
const appusers              = require("../../app/models/appuser")

const PATH_ADMIN_LOGIN      = 'pages/admin/login';
const PATH_LOGIN            = 'pages/client/login';
const PATH_REGISTER         = 'pages/client/register'; 
const PATH_PROFILE          = 'pages/client/profile'; 
const ROUTE_LOGIN           = '/app/login';
const ROUTE_ADMIN_LOGIN     = '/app/admin/login';
const ROUTE_USER_PROFILE    = '/app/profile';
const ROUTE_USER_REGISTER   = '/app/register';
const ROUTE_SIGNOUT         = '/app/signout';
const ROUTE_USER_HOME       = '/app';
const ROUTE_ADMIN_HOME      = '/app/admin/';
const ROUTE_ADMIN_DASHBOARD = '/app/admin/dashboard';


router.get(ROUTE_SIGNOUT,(req,res)=>{
    req.session.destroy(function(){
      console.log("user logged out.")
   });
   res.redirect(ROUTE_LOGIN);
  });

  router.get(ROUTE_USER_PROFILE,(req,res)=>{    
      console.log(req);
   res.redirect(PATH_PROFILE);
  });

  router.get(ROUTE_ADMIN_LOGIN, (req, res) => {
    res.render(PATH_ADMIN_LOGIN,{layout: false});
  });

  // admin dashboard 
  router.post(ROUTE_ADMIN_LOGIN, (req, res, next) => {

    passport.authenticate('local',{
      successRedirect : ROUTE_ADMIN_DASHBOARD,
      failureRedirect : ROUTE_ADMIN_LOGIN,
      failureFlash : true,
      })(req, res, next);
  });

  
router.get(ROUTE_USER_REGISTER, (req, res) => {
    res.render(PATH_REGISTER, {layout: false});   
});

router.get(ROUTE_LOGIN, (req, res) => {
    res.render(PATH_LOGIN, {layout: false});
    console.log( req );
});

router.post(ROUTE_LOGIN, (req, res, next) => { 
    passport.authenticate('local',{
      successRedirect : ROUTE_USER_HOME,
      failureRedirect : ROUTE_LOGIN,
      badRequestMessage : 'Missing username or password.',
      failureFlash : true,
      })(req, res, next);
});


router.post(ROUTE_USER_REGISTER, async (req, res) => {
    const {fname, lname, email, password, password2, company_name} = req.body;
    let errors = [];
    if(!fname || !email || !password || !password2) {
        errors.push({msg : "Please fill in all fields"})
    }

    if(password !== password2) {
        errors.push({msg : "passwords dont match"});
    } 

    if(password.length < 6 ) {
        errors.push({msg : 'password atleast 6 characters'})
    }

    if(errors.length > 0 ) {
        res.render(PATH_REGISTER, {
        layout: false,
        errors : errors,
        name : fname,
        email : email,
        password : password,
        password2 : password2});
        
    } else {
       
        var user = await appusers.findOne({email : email}); 
        if(user)
        { 
            errors.push({msg: 'Email already registered'});
            console.log('Email already registered');
            res.render(PATH_REGISTER, res, errors, fname, email, password, password2,{layout:false});
        }

        // new user model. 
        var newUser = new appusers({
            fname : fname,
            lname: lname,                
            email : email,
            password : password,
            company_name: company_name
        });

        // hashing password.
        bcrypt.genSalt(10,(err,salt)=> {
            bcrypt.hash(newUser.password,salt, (err,hash)=> 
            {
                if(err) throw err;
                newUser.password = hash;
                newUser.save().then((value)=>
                {
                    req.flash('success_msg','You have now registered!')
                    res.redirect(ROUTE_LOGIN);
                }).catch(value=> { console.log(value);});
            }) 
        })
    }

  });
  module.exports = router;
