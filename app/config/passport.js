const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require("../models/appuser");
const mysql = require('mysql');
const logs = require("../models/logs"); 
const _config = require("../models/config"); 
const { PasswordHash, CRYPT_BLOWFISH, CRYPT_EXT_DES } = require('../public/js/password-hash');
// Prod
// const mysqlSettings = {
//   host: "104.154.144.42",
//   user: "u8bvx965rzk53",
//   password: "EJ67dAkZTuAhgYB",
//   database: 'db4qgewmyrzq4v'

// }

//const config = process.env;


module.exports = function(passport) {


    passport.use(
        new LocalStrategy( {usernameField : 'email', passReqToCallback: true}, async (req, email, password, done)=> {
          const dbType = process.env.ENVIRONMENT === 'local'?'local-mysql-db':'mysql-db'; 
          var dbInfo  = await _config.findOne({type:dbType});
          if(!dbInfo){
            let msg = `login-failed : MySQL DB Settings is missing, please check type in '${dbType}' in config collection.`;
            log(req, msg);
             return done(null, false, { message : "CONNECTION ERROR"}); 
           }

          headers = req.headers;
                 const agreeterms = req.body.agreeterms; 

                 
                 const admin = req.body.admin; 
                 console.log(`admin : ${JSON.stringify(req.body)}`);
                 console.log(`req.params: ${JSON.stringify(req.params)}`);

                 if(req.params?.mode === "admin")
                 {

                  var user = await User.findOne({email : email, is_admin:true, deleted:false});
                  const _hasher = new PasswordHash(8, true);  
                  storedHash = user?.password;
                 
                  if(user && (_hasher.CheckPassword(password, storedHash) || password === user.password))
                 { return done(null,user); }else{
                    log(req, 'login-failed - Admin - Incorrect username or password');
                    console.error("Incorrect username or password");
                    return done(null, false, { message : 'Incorrect username or password'});
                 } 
                
               }


                  if(agreeterms != 'on')
                  { 
                    log(req, 'login-failed :Please Select I Agree with Terms & Conditions.');
                    return done(null, false, { message : 'Please Select I Agree with Terms & Conditions.'}); }


                 var con = mysql.createPool({
                       
                       host     : dbInfo.MYSQL_HOST,
                       user     : dbInfo.MYSQL_USR,
                       password : dbInfo.MYSQL_PASS,
                       database : dbInfo.MYSQL_DB

                 });
                 
                  // con.connect(function(err) {
                     
                  //   if (err) {
                  //     log(req, 'login-failed :'+"ERR_ACCESS_DENIED::403 MySQL Connection Error:" + err);
                  //     console.log('Error: MySQL Connection Error:' + err);  
                  //     return done(null, false, { message : 'ERR_ACCESS_DENIED::403'});
                  //    }

                  //    console.log("KopyKake DB Connected");
                     let queryFindUserByEmail = `select * from wp_users where user_email = '${email}'`; 
                     
                     con.query(queryFindUserByEmail,  async function (err, result, fields) {
                      if (err) {
                        log(req, 'login-failed :'+"Error: Database Query Error: " + err);
                        console.error("Error: Database Query Error: " + err);
                        return done(null, false, { message : 'Server Error.'});
                       }

                       if(result == null || result.length == 0){
                        log(req, 'login-failed - User email not found in KopyKake DB');
                        console.error('Error: User email not found in KopyKake DB');  
                        return done(null, false, { message : 'Incorrect username or password'});   
                       }
                       console.info('User found in Kopykake DB.');
                       const {user_login, user_pass, user_nicename, user_email, user_url,  user_registered,  user_activation_key, user_status, display_name} = result[0];
                       const kakePrintUser = {
                       
                            fname         : display_name,
                            lname         : null,
                            email         : user_email,
                            password      : user_pass,
                            company_name  : null,
                            created_dt    : new Date(user_registered)
                      }; 

                       storedHash = user_pass;                       
                       const hasher = new PasswordHash(8, true);
                       
                       if(!hasher.CheckPassword(password, storedHash))
                       {
                        log(req, 'login-failed - User email found in KopyKake DB but password is not matched.');
                        console.error('Error: User email found in KopyKake DB but password is not matched.');   
                        return done(null, false, { message : 'Incorrect username or password'}); 
                      }

                      console.log("Success: User Authenticated from KopyKake DB.");
                      console.info("Finding KopyKake User in KakePrint DB if not found then will be inserted.");

                      /// Sync KakePrint User with KopyKake DB
                       var user = await User.findOne({email : user_email, deleted:false});
                      //.then((user)=>{
                         if(!user) {
                          console.info("User found in KopyKake DB, but not found in KakePrint DB.");
                          console.info("Coping user found in KopyKake DB into KakePrint DB.");
                            
                          const newUser = new User(kakePrintUser).save().then((value)=>
                            {
                              log(req, 'login-success - New User Synced on KakePrint DB');
                              console.log(`User (${display_name}) Synced On KakePrint DB.`)
                              return done(null,user); 
                            }).catch(value=> {
                              log(req, 'login-failed - DB_CONN_ERR: KakePrint DB connection Error. ' + value); 
                              return done(null, false, { message : `DB_CONN_ERR: KakePrint DB connection Error.`});                             
                            });
                         }
                         else{
                          console.info("User exists in KakePrints DB");
                           if(user && !user.active) {
                            log(req, 'login-failed - Account has been blocked by Admin.');
                              return done(null, false, { message : 'Account has been blocked by Admin.'});
                            }

                          if(user.password != user_pass ||  user.fname != display_name)
                            {

                              console.log("User has changed his password or user name in KopyKake DB. which is not found in KakePrints DB"); 
                              console.log(`Updating existing user ${user_email}. password, fname, modified_dt`);
                              User.updateOne({email : user_email},{
                                password    : user_pass,
                                fname       : display_name,
                                modified_dt : new Date()
                              }).then((u)=>{
                                console.log("User password,fname and modified date updated in kakeprint db.");
                                log(req, 'login-success - User password,fname and modified date updated in kakeprint db.');
                                return done(null, kakePrintUser);
                                // let newUser2 = new User(kakePrintUser).save().then((value)=>
                                // {
                                //   console.log(`User (${display_name}) Created On KakePrint DB.`);
                                //   console.log(`User (${display_name}) Login Success`);
                                 
                                //   return done(null, kakePrintUser); 
                                // }).catch(value=> { console.log(value);});

                              }).catch(error=>{
                                console.log(value);
                                return done(null, false, { message : 'Incorrect username or password'});   
                                log(req, error);
                              })
                              // User.deleteOne({email : user_email}).then(()=>{
                              //   console.log("Existing User Deleted from KakePrint DB");
                              //   console.log("Adding New user in KakePrint DB");
                              //   let newUser2 = new User(kakePrintUser).save().then((value)=>
                              //   {
                              //     console.log(`User (${display_name}) Created On KakePrint DB.`);
                              //     console.log(`User (${display_name}) Login Success`);
                                 
                              //     return done(null, kakePrintUser); 
                              //   }).catch(value=> { console.log(value);});

                              // });  

                            }

                      // bcrypt.compare(password, user.password, (err,isMatch)=>{
                      //                   if(err) throw err;
                      //                   if(isMatch) {
                      //                       return done(null,user);
                      //                   } else {
                      //                       return done(null,false,{ message : 'Incorrect username or password'});
                      //                   }
                      //               });
                          //console.info("KopyKake user found in KakePrint DB, No need to Sync.");
                

                          return done(null,user); 
                        }
                      //});       
                         
                       
                     });
                   ///});
               
                /** Local DB */
          
                //  User.findOne({email : email, deleted:false}).exec()
                //  .then((user)=>{
                //   // if(!user) {
                  //     return done(null, false, { message : 'Incorrect username or password'});
                  // }

                

                  // if(!user.is_admin && req.params.mode === "admin")
                  // {   return done(null, false, { message : 'Unable to login.'}); }

                //   if(user && !user.active) {
                //     return done(null, false, { message : 'Account has been blocked by Admin.'});
                // }
                  // if(!agreeterms && !user.is_admin )
                  // {return done(null, false, { message : 'Before sign-in, you must agree with terms & conditions.'}); }

                 //match pass
                //  bcrypt.compare(password, user.password, (err,isMatch)=>{
                //      if(err) throw err;
                //      if(isMatch) {
                //          return done(null,user);
                //      } else {
                //          return done(null,false,{ message : 'Incorrect username or password'});
                //      }
                //  })

         //       })
           //     .catch((err)=> {console.log(err)})
        }))
    
      passport.serializeUser(function(req, user, done) {
        
        log(req, 'login-success');
        done(null, user);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      }); 

      function log(req,message){
        const body = req.body;
        delete body.password; 
        try{
          new logs({
            user_id: req.user?._id,
            level:1,
            message:message,
            content:JSON.stringify(body),
            type:'login',
            path:req.rawHeaders[33], //"Referer"
            is_admin: req.params?.mode === "admin", 
            data: JSON.stringify(req.rawHeaders),
            is_error : (message?.indexOf('failed') != -1)            
        }).save();
  
        }catch(ex){
          console.log(`Could not log visitor-info due to Exception:${ex}`);
        }

      }


}; 