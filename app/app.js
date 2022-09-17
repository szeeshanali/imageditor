const express               = require('express')
const app                   = express()
var expressLayouts          = require('express-ejs-layouts');
const port                 = 5001 
const mongoose             = require('mongoose');
const bodyParser           = require('body-parser');
const session              = require('express-session');
const flash                = require('connect-flash');
const adminroutes          = require("../app/routes/admin/adminroutes");
const clientroutes         = require("../app/routes/client/clientroutes");
const authroutes           = require("../app/routes/authroutes");
const mainroutes           = require("../app/routes/mainroutes");
const passport             = require('passport');
const commonService        = require('../app/services/common');
require("../app/config/passport")(passport);




//mongoose
mongoose.connect('mongodb+srv://dtimageeditor:Xcccccc123@cluster0.gte2f0n.mongodb.net/dtimageeditor',
{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('Connection Stablished.'))
.catch((err)=> {
  console.log("Connection Failed");
  console.log(err)}
  );



app.use(expressLayouts);
 
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.static('uploads'))

app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
app.use(session(
  {   secret            : 'secret',
      resave            : true,
      saveUninitialized : true,
      cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
 }));

app.use(passport.initialize());
app.use(passport.session());

 //use flash 
 app.use(flash());
 app.use(async (req,res,next) => {
   res.locals.success_msg   = req.flash('success_msg');
   res.locals.error_msg     = req.flash('error_msg');
   res.locals.error         = req.flash('error'); 

   //res.locals.categories    = await commonService.categoryService.getCategoriesAsync();
   res.locals.user          = req.user;
   res.locals.pagetitle     = req.pagetitle;
   //res.locals.templates     = await commonService.uploadService.getTemplatesAsync();
   res.locals.templates = [];
   
  next();
 })

app.use("/",  adminroutes);  
app.use("/",  clientroutes);  
app.use("/",  authroutes);  
app.use("/",  mainroutes);  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})