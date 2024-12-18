const express               = require('express');
const router                = express.Router();
const passport              = require('passport');
const bcrypt                = require('bcrypt');
const commonService         = require("../services/common");
const logs         = require("../models/logs");
require("../config/passport")(passport);
const appusers              = require("../../app/models/appuser")
const app_settings          = require('../../app/models/settings');
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
const ROUTE_USER_WORKSPACE  = '/app/workspace';
const ROUTE_ADMIN_HOME      = '/app/admin/';
const ROUTE_ADMIN_DASHBOARD = '/app/admin/dashboard';


router.get(ROUTE_SIGNOUT,(req,res)=>{
    req.session.destroy(function(){
      console.log("user logged out.")
   });
   res.redirect('/app/');
  });



  router.get(ROUTE_USER_PROFILE,(req,res)=>{
     // console.log(req);
   res.redirect(PATH_PROFILE);
  });
  

  router.get(ROUTE_ADMIN_LOGIN, async (req, res) => {
    // var x = await logs.find({type:"download_pdf"}).limit(100).sort({_id:-1})
    // x.forEach((v,i,a)=>{
    //   var json = JSON.parse(v.data);
    //   v.template_id = json._id
    //   v.save();
    
    // })

    res.render(PATH_ADMIN_LOGIN,{layout: false});
  });

  // storedHash = "$P$BsbMemV6Nti0Z7loZSYo7o.uUI2goJ.";

  // if (args.length < 2) {
  //     password = args[0] ? args[0] : 'Abcd@1234';
  // } else if (args.length >= 2) {
  //     password = args[0];
  //     storedHash = args[1];
  // }

  // const hasher = new PasswordHash(8, true);
  // console.info(hasher);

  // if (storedHash) {
  //     console.log('check password = ', hasher.CheckPassword(password, storedHash) ? 'OK' : 'NOT OK');
  // } else {
  //     hasher.HashPassword(password, CRYPT_BLOWFISH)
  //         .then(hash => console.log('Hash (Blowfish) = ', hash))
  //         .catch(error => console.error(error));

  //     hasher.HashPassword(password, CRYPT_EXT_DES)
  //         .then(hash => console.log('Hash (DES) = ', hash))
  //         .catch(error => console.error(error));

  //     hasher.HashPassword(password)
  //         .then(hash => console.log('Hash (Private) = ', hash))
  //         .catch(error => console.error(error));
  // }




  // admin dashboard
  router.post(ROUTE_ADMIN_LOGIN, (req, res, next) => {

    req.params['mode'] = 'admin';
    passport.authenticate('local',{
      successRedirect : ROUTE_ADMIN_DASHBOARD,
      failureRedirect : ROUTE_ADMIN_LOGIN,
      failureFlash : true,
      })(req, res, next);
  });


router.get(ROUTE_USER_REGISTER,   (req, res) => {
  res.render(PATH_REGISTER, {layout: false});

  });


  router.get('/app/content',   (req, res) => {
    var content = req.query.content;
    console.log(content);
    commonService.contentService.getContentAsync(content).then((d)=>{
      res.status(200).send(d.content);
    }).catch(()=>{
      console.error("Error loading terms and conditions.")
      res.status(500).send("");
    });

    });

router.get(ROUTE_LOGIN, isTemporarilyDown, async (req, res) => {
    res.render(PATH_LOGIN, {layout: false});
});
router.get("/app/503", (req, res) => {
  res.render("pages/client/503", {layout: false});
//  console.log( req );
});
router.get("/app/home", (req, res) => {
    res.render("pages/client/main", {layout: false});
  //  console.log( req );
});


router.post(ROUTE_LOGIN, (req, res, next) => {
    passport.authenticate('local',{
      successRedirect : "/app/workspace",
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
          errors.push({msg : "passwords don't match"});
      }


    if(fname?.length < 3 || fname?.length > 20) {
      errors.push({msg : "First name should be greater than 3 and less than 20 characters."})
    }

    if(lname?.length > 20) {
      errors.push({msg : "Last name should be less than 20 characters."})
    }


    if(password.length < 6 ) {
      errors.push({msg : 'Password should be atleast 6 characters.'})
    }

    if(password2?.length > 20) {
      errors.push({msg : "Password should be less than 20 characters."})
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
       try {


        var user = await appusers.findOne({email : email});
        if(user)
        {
            errors.push({msg: 'Email already registered'});
            console.log('Email already registered');
            res.render(PATH_REGISTER, res, errors, fname, email, password, password2,{layout:false});
            return;
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
        } catch (error) {
          console.log(error);
        }
    }

  });
  module.exports = router;
