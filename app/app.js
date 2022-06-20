const express               = require('express')
const app                   = express()
var expressLayouts          = require('express-ejs-layouts');

const port                  = 3000
const mongoose              = require('mongoose');
const bodyParser            = require('body-parser');
const bcrypt                = require('bcrypt');
const session               = require('express-session');
const flash                 = require('connect-flash');
const {isLoggedIn,isAdmin}  = require("../app/config/auth.js")
const appusers              = require("../app/models/appuser.js")
const admin_routes          = require("../app/routes/admin/adminroutes");
const client_routes         = require("../app/routes/client/clientroutes");
const auth_routes           = require("../app/routes/authroutes");
const passport              = require('passport');
require("../app/config/passport")(passport);

//mongoose
mongoose.connect('mongodb+srv://dtimageeditor:Xcccccc123@cluster0.gte2f0n.mongodb.net/dtimageeditor',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));
app.use(expressLayouts);

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
app.use(session(
  {   secret            : 'secret',
      resave            : true,
      saveUninitialized : true
 }));

app.use(passport.initialize());
app.use(passport.session());

 //use flash
 app.use(flash());
 app.use((req,res,next)=> {
   res.locals.success_msg   = req.flash('success_msg');
   res.locals.error_msg     = req.flash('error_msg');
   res.locals.error         = req.flash('error'); 
  next();
 })

app.use("/",  admin_routes);  
app.use("/",  client_routes);  
app.use("/",  auth_routes);  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})