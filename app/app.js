const express = require('express')
const app = express()
const router = express.Router();
const port = 3000
const mongoose = require('mongoose');
const appusers = require("../app/models/appuser.js")
const bcrypt = require('bcrypt');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
require("../app/config/passport")(passport);
const {ensureAuthenticated} = require("../app/config/auth.js")


//mongoose
mongoose.connect('mongodb+srv://dtimageeditor:Xcccccc123@cluster0.gte2f0n.mongodb.net/dtimageeditor',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({extended : false}));


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


router.get('/app', ensureAuthenticated, (req, res) => {
    res.render(`pages/client/index`,{
      user: req.user
      });
  });

  router.get('/app/admin',  (req, res) => {
    res.render(`pages/admin/index`);
  });

  router.get('/app/register', (req, res) => {
    res.render(`pages/client/register`);   
  });

  router.get('/app/login', (req, res) => {
    res.render(`pages/client/login`);
  });
  
  
  router.post('/app/client/login', (req, res, next) => {
    console.log(res);
    passport.authenticate('local',{
      successRedirect : '/app/',
      failureRedirect : '/app/login',
      failureFlash : true,
      })(req,res,next);
  });
  

  router.post('/app/client/register', (req, res) => {
   
    const {fname,lname,email,password, password2,company_name} = req.body;
    let errors = [];
    
    console.log(' FirstName ' + fname + ' email :' + email+ ' pass:' + password);
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
    
        res.render('pages/client/register', {
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
            render('pages/client/register', res,errors,fname,email,password,password2);
            
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

                                res.redirect('/app/client/login');
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