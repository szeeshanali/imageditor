const express = require('express')
const app = express()
const router = express.Router();
const port = 3000
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const bcrypt = require('bcrypt');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
require("../app/config/passport")(passport);
const {isLoggedIn,isAdmin} = require("../app/config/auth.js")

/** Models */
const appusers    = require("../app/models/appuser.js")
const categories  = require("../app/models/categories.js")
const uploads     = require("../app/models/uploads.js")
/** */

const   PATH_LOGIN      = `pages/client/login`;
const   PATH_REGISTER   = `pages/client/register`; 
const   PATH_PROFILE    = `pages/client/profile`;


//mongoose
mongoose.connect('mongodb+srv://dtimageeditor:Xcccccc123@cluster0.gte2f0n.mongodb.net/dtimageeditor',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({limit: '5mb'}));



app.use(session({
  secret : 'secret',
  resave : true,
  saveUninitialized : true
 }));

  app.use(passport.initialize());
  app.use(passport.session());

 //use flash
 app.use(flash());
 app.use((req,res,next)=> {
   res.locals.success_msg = req.flash('success_msg');
   res.locals.error_msg = req.flash('error_msg');
   res.locals.error  = req.flash('error');
 next();
 })


router.get('/app', isLoggedIn, (req, res) => {
    res.render(`pages/client/index`,{
      user: req.user
      });
  });

router.get("/app/signout",(req,res)=>{
  req.session.destroy(function(){
    console.log("user logged out.")
 });
 res.redirect('/app/login');
})

router.get("/app/profile", isLoggedIn, (req,res)=>{
  res.render(PATH_PROFILE,{user:req.user});
})



/** ADMIN */

  const PATH_ADMIN_LOGIN  =  `pages/admin/login`;
  const PATH_ADMIN_HOME   =  `pages/admin/index`;
  const PATH_ADMIN_UPLOADS = `../app/uploads/admin`
  router.get('/app/admin',  isAdmin, async (req, res) => {

    const cats = await categories.find({}); 
    console.log(cats);
        res.render(PATH_ADMIN_HOME,{ 
          user:  req.user,
          categories: cats
        });
          
        });

  router.get('/app/admin/login', (req, res) => {
    res.render(PATH_ADMIN_LOGIN);
  });

  router.post('/app/admin/login', (req, res, next) => {
    passport.authenticate('local',{
      successRedirect : '/app/admin',
      failureRedirect : '/app/admin/login',
      failureFlash : true,
      })(req, res, next);
  });

  router.post("/app/admin/savedesign",  isAdmin,  (req,res)=>{
    const {title,description,category,json} = req.body;
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
      category   : category});

  }else{
    
    //var base64Data = blob.replace(/^data:image\/png;base64,/, "");
    var ticks = new Date().getTime();
    var code = `img${category}${ticks}`;
    
    console.log(json);
    //require("fs").writeFile(`${PATH_ADMIN_UPLOADS}${code}.png`, base64Data, 'base64', function(err) {
     // console.log(err);
     // res.redirect(PATH_ADMIN_HOME);
    //});

    var upload = new uploads({
      title:title,
      desc: description,
      code: code,
      category:category,
      json: json      
    });

    upload.save()
    .then((value)=>{
        console.log(value)
        req.flash('success_msg','You have now registered!')

    res.redirect(PATH_ADMIN_HOME);
    })
    .catch(value=> console.log("Error uploading image"));
    
    // categories.findOneAndUpdate({code: category}, 
    //   { 
    //       $push: {"items":{title: title, desc: description}},
    //   }, 
    //     {upsert: true}, function(err,doc) {
    //   if (err) { throw err; }
    //   else { 
    //     console.log("Updated"); 
    //   }
    // });
  
    // req.flash('success_msg','Profile updated');
    //     res.redirect("/app",{user:req.user})  
    

   }

});


/** */

  

  router.get('/app/register', (req, res) => {
    res.render(PATH_REGISTER);   
  });

  router.get('/app/login', (req, res) => {
    res.render(PATH_LOGIN);
  });
  
  router.post('/app/login', (req, res, next) => {
  
    passport.authenticate('local',{
      successRedirect : '/app/',
      failureRedirect : '/app/login',
      failureFlash : true,
      })(req, res, next);
  });
  

  router.post("/app/profile", isLoggedIn, (req,res)=>{
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

  
  router.post('/app/register', (req, res) => {
   
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

  
app.use("/",router);  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})