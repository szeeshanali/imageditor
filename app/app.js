/**
 * # Zeeshan
 * # zeeshan01@gmail.com
 * # 2022
 * */

require('dotenv').config();
const express = require('express')
const app = express()
var expressLayouts = require('express-ejs-layouts');
const port = 5001;
const mongoose = require('mongoose');
//const bodyParser           = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const adminroutes = require("../app/routes/admin/adminroutes");
const clientroutes = require("../app/routes/client/clientroutes");
const authroutes = require("../app/routes/authroutes");
const mainroutes = require("../app/routes/mainroutes");
const passport = require('passport');
const logs = require("../app/models/logs");
const appConfig = require("../app/models/config");
const compression = require('compression');

const path = require("path");
const cron = require('node-cron');
const {
  PORT,
  SESSION_SECRET,
  MONGO_CONN
} = process.env;



require("../app/config/passport")(passport);

//mongoose
mongoose.connect(MONGO_CONN,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true

  }).then(() => console.log('Connection Established.'))
  .catch((err) => {
    console.error(err);



  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

app.use(compression());

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));

app.use(session(
  {
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 365 * 24 * 60 * 60 * 1000
    }

  }));


app.use(passport.initialize());
app.use(passport.session());

//use flash 
app.use(flash());
app.use(async (req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user;
  res.locals.pagetitle = req.pagetitle;
  res.locals.templates = [];

  next();
})

app.use("/", adminroutes);
app.use("/", clientroutes);
app.use("/", authroutes);
app.use("/", mainroutes);

app.listen(5001, () => {
  console.log(`Example app listening on port 5001`)
})


process.on('uncaughtException', function (err) {
  console.error(err.stack);
  console.log("Node NOT Exiting...");
  //res.render("Server Error")
});

/** Job Scheduler */

// every five minus
cron.schedule('*/5 * * * *', async () => {
  try {
    
 
  const age = 0;
  const dt = new Date(Date.now() - age * 24 * 60 * 60 * 1000);
  const result = await logs.updateMany(
    {
      type: { $in: ["download_pdf"] }, "created_dt": { $lt: dt }
    }, { pdfBase64: null });

    console.log(`--> ${result.modifiedCount } download pdfs has been deleted after 7 days as per scheduled. ${dt}`);

    let emailLogs = await logs.find({type:"submit-design", "created_dt": { $lt: dt }}); 
    emailLogs.forEach((v,i,a)=>{
      try {
        let log = v ; 
        if(!log.content){return;}
        let jsonContent = JSON.parse(log.content);
        if(jsonContent.dataUrl){
          jsonContent.dataUrl = ""; 
          log.content = JSON.stringify(jsonContent);
          log.save()
        } 
      } catch (error) {
       
      }
     
    }); 

  console.log(`-->  email pdfs has been deleted after 7 days as per scheduled. ${dt}`);
} catch (error) {
 console.error(`--> Error in scheduler while deleting pdfs: ${error}`);   
}

});



