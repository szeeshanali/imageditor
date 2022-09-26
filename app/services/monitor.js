const nodemailer           = require('nodemailer');


let testAccount = nodemailer.createTestAccount();

// create reusable transporter object using the default SMTP transport
let mailTransport = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: testAccount.user, // generated ethereal user
    pass: testAccount.pass, // generated ethereal password
  },
});



// const mailTransport = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'zeeshan01@gmail.com',
//       pass: 'a1c346as!'
//     }
//   });
  
  
  var mailOptions = {
    from: 'zeeshan01@gmail.com',
    to: 'zeeshan01@gmail.com',
    subject: 'Kakeprint - Alert',
    text: 'That was easy!'
  };


  const monitoringService = (function(){
    this.sendMail = function(message)
    {
        mailOptions.text = message;
        mailTransport.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    },
    this.logError = function(message){
        console.log(message);
        this.sendMail(message);
        
    }
   
return {
sendMail : this.sendMail,
logError: this.logError
};

  })();




  module.exports = monitoringService; 