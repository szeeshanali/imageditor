const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require("../models/appuser");
const mysql = require('mysql');
const { PasswordHash, CRYPT_BLOWFISH, CRYPT_EXT_DES } = require('../public/js/password-hash');
// Prod
// const mysqlSettings = {
//   host: "104.154.144.42",
//   user: "u8bvx965rzk53",
//   password: "EJ67dAkZTuAhgYB",
//   database: 'db4qgewmyrzq4v'
// }

const config = process.env;


module.exports = function(passport) {

    passport.use(
        new LocalStrategy( {usernameField : 'email', passReqToCallback: true}, async (req, email, password, done)=> {
                //match user
                 const agreeterms = req.body.agreeterms; 
                 const admin = req.body.admin; 
                 console.log(`admin : ${JSON.stringify(req.body)}`);
                 console.log(`req.params: ${JSON.stringify(req.params)}`);

                 if(req.params?.mode === "admin")
                 {

                  var user = await User.findOne({email : email, is_admin:true, deleted:false});
                    if(!user) {
                      return done(null, false, { message : 'Incorrect username or password'});
                   }else{
                      return done(null,user);
                   }
                 
                  }

                 //let email = req.body.email;
                 //let password = req.body.password;
                 console.log(config.MYSQL_USR)
                 var con = mysql.createConnection({
                       
                       host     : config.MYSQL_HOST,
                       user     : config.MYSQL_USR,
                       password : "abcd1234",
                       database : "kkdb"

                 });
                 
                  con.connect(function(err) {
                     
                    if (err) {
                      console.log('Error: MySQL Connection Error:' + err);  
                      return done(null, false, { message : 'Server Error.'});
                     }

                     console.log("KopyKake DB Connected");
                     let queryFindUserByEmail = `select * from wp_users where user_email = '${email}'`; 
                     
                     con.query(queryFindUserByEmail,  async function (err, result, fields) {
                       
                      if (err) {
                        console.error("Error: Database Query Error: " + err);
                        return done(null, false, { message : 'Server Error.'});
                       }

                       if(result == null || result.length == 0){
                        console.error('Error: User email not found in KopyKake DB');  
                        return done(null, false, { message : 'Incorrect username or password'});   
                       }
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
                        console.error('Error: User email found in KopyKake DB but password is not matched.');   
                        return done(null, false, { message : 'Incorrect username or password'}); 
                      }

                      console.log("Success: User Authenticated from KopyKake DB.");
                      console.info("Finding KopyKake User in KakePrint DB if not found then will be inserted.");

                      /// Sync KakePrint User with KopyKake DB
                       var user = await User.findOne({email : user_email, deleted:false});
                      //.then((user)=>{
                         if(!user) {
                          console.info("Could'nt find KopyKake user in KakePrint DB, Syncing user in KakePrint...");
                          // new user model.
                            const newUser = new User(kakePrintUser).save().then((value)=>
                            {
                              console.log(`User (${display_name}) Synced On KakePrint DB.`)
                              return done(null,user); 

                            }).catch(value=> { console.log(value);});
                         }
                         else{

                           if(user && !user.active) {
                              return done(null, false, { message : 'Account has been blocked by Admin.'});
                            }

                          if(user.password != user_pass ||  user.fname != display_name)
                            {
                              console.log("User password Or user name is update on KopyKake DB."); 
                              console.log("Deleting existing user from KakePrint DB.");
                              User.deleteOne({email : user_email}).then(()=>{
                                console.log("Existing User Deleted from KakePrint DB");
                                console.log("Adding New user in KakePrint DB");
                                let newUser2 = new User(kakePrintUser).save().then((value)=>
                                {
                                  console.log(`User (${display_name}) Created On KakePrint DB.`);
                                  return done(null,kakePrintUser); 
                                }).catch(value=> { console.log(value);});

                              });  

                            }

                          console.info("KopyKake user found in KakePrint DB, No need to Sync.");
                          return done(null,user); 
                        }
                      //});       
                         
                       
                     });
                   });
               
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
    
      passport.serializeUser(function(user, done) {
        console.log("passport.serializeUser", user);
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      }); 


}; 