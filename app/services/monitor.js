// const nodemailer           = require('nodemailer');
// let mailTransport = nodemailer.createTransport({
//     host: 'smtp.mail.yahoo.com',
//             port: 465,
//             service:'yahoo',
//             secure: false,
//             auth: {
//                user: 'devtestacc2023@yahoo.com',
//                pass: 'Xcccccc123'
//             },
//             debug: false,
//             logger: true 
// });

//   var mailOptions = {
//     from: 'kakeprint@gmail.com',
//     to: 'zeeshan01@gmail.com',
//     subject: 'Kakeprint - Alert',
//     text: 'That was easy!'
//   };


//   const monitoringService = (function(){
//     this.sendMail = function(message)
//     {
//         mailOptions.text = message;
//         mailTransport.sendMail(mailOptions, function(error, info){
//             if (error) {
//                 console.log("Error while sending email");
//               console.log(error);
//             } else {
//               console.log('Email sent: ' + info.response);
//             }
//           });
//     },
//     this.logError = function(message){
//         console.log(message);
//         this.sendMail(message);
        
//     }
   
// return {
// sendMail : this.sendMail,
// logError: this.logError
// };

//   })();




//   module.exports = monitoringService; 