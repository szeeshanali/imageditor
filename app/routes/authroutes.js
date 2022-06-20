const express               = require('express');
const router                = express.Router();
const passport = require('passport');
require("../config/passport")(passport);

const PATH_ADMIN_LOGIN      = 'pages/admin/login';
const PATH_LOGIN            = 'pages/client/login';
const PATH_REGISTER         = 'pages/client/register'; 
const ROUTE_LOGIN           = '/app/login';
const ROUTE_ADMIN_LOGIN     = '/admin/login';
const ROUTE_USER_PROFILE    = '/profile';
const ROUTE_USER_REGISTER   = '/register';
const ROUTE_SIGNOUT         = '/signout';
const ROUTE_USER_HOME       = '/app';
const ROUTE_ADMIN_HOME      = '/app/admin/';


router.get(ROUTE_SIGNOUT,(req,res)=>{
    req.session.destroy(function(){
      console.log("user logged out.")
   });
   res.redirect(ROUTE_LOGIN);
  })

  router.get(ROUTE_ADMIN_LOGIN, (req, res) => {
    res.render(PATH_ADMIN_LOGIN,{layout: false});
  });

  router.post(ROUTE_ADMIN_LOGIN, (req, res, next) => {
    passport.authenticate('local',{
      successRedirect : ROUTE_ADMIN_HOME,
      failureRedirect : ROUTE_ADMIN_LOGIN,
      failureFlash : true,
      })(req, res, next);
  });

  
router.get(ROUTE_USER_REGISTER, (req, res) => {
    res.render(PATH_REGISTER,{layout: false});   
});

router.get(ROUTE_LOGIN, (req, res) => {
    res.render(PATH_LOGIN, {layout: false});
});

router.post(ROUTE_LOGIN, (req, res, next) => { 
    passport.authenticate('local',{
      successRedirect : ROUTE_USER_HOME,
      failureRedirect : ROUTE_LOGIN,
      failureFlash : true,
      })(req, res, next);
});


router.post(ROUTE_USER_REGISTER, (req, res) => {
    const {fname,lname,email,password, password2,company_name} = req.body;
    let errors = [];
    if(!fname || !email || !password || !password2) {
        errors.push({msg : "Please fill in all fields"})
    }
    //check if match
    if(password !== password2) {
        errors.push({msg : "passwords dont match"});
    } 
    //check if password is more than 6 characters
    if(password.length < 6 ) {
        errors.push({msg : 'password atleast 6 characters'})
    }
    if(errors.length > 0 ) {
    
        res.render(PATH_REGISTER, {
        errors : errors,
        name : fname,
        email : email,
        password : password,
        password2 : password2});
        
    } else {
        //validation passed
        appusers.findOne({email : email}).exec((err,user)=>{
        console.log(user);   
        if(user) {
            errors.push({msg: 'email already registered'});
            render(PATH_REGISTER, res,errors,fname,email,password,password2);        
           } else {
            const newUser = new appusers({
                fname : fname,
                lname: lname,                
                email : email,
                password : password,
                company_name: company_name
            });

                        //hash password
                        bcrypt.genSalt(10,(err,salt)=> 
                        bcrypt.hash(newUser.password,salt,
                            (err,hash)=> {
                                if(err) throw err;
                                    //save pass to hash
                                    newUser.password = hash;
                                //save user
                                newUser.save()
                                .then((value)=>{
                                    console.log(value)
                                    req.flash('success_msg','You have now registered!')

                                res.redirect(PATH_LOGIN);
                                })
                                .catch(value=> console.log(value));
                                  
                            }));
                         
          }
        }
    )}
  });


  module.exports = router;
