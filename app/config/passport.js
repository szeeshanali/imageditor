const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require("../models/appuser");

module.exports = function(passport) {

    passport.use(
        new LocalStrategy(
                {usernameField : 'email', passReqToCallback: true},
                (req, email, password, done)=> {
                //match user
                 const agreeterms = req.body.agreeterms; 
                 const admin = req.body.admin; 

                 User.findOne({email : email, deleted:false}).exec()
                 .then((user)=>{
                  if(!user) {
                      return done(null, false, { message : 'Incorrect username or password'});
                  }

                  if(user && !user.active) {
                    return done(null, false, { message : 'Account has been blocked by Admin.'});
                }


                  if(!agreeterms && !user.is_admin )
                  {return done(null, false, { message : 'Before sign-in, you must agree with terms & conditions.'}); }
                

                 //match pass
                 bcrypt.compare(password, user.password, (err,isMatch)=>{
                     if(err) throw err;
                     if(isMatch) {
                         return done(null,user);
                     } else {
                         return done(null,false,{ message : 'Incorrect username or password'});
                     }
                 })
                })
                .catch((err)=> {console.log(err)})
        })
        
    )
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      }); 
}; 