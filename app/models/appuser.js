const mongoose = require('mongoose');

const UserSchema  = new mongoose.Schema({
    fname           :   {   type    :   String,  required   : true },
    lname           :   {   type    :   String,  required   : true },
    email           :   {   type    :   String,  required   : true },
    phone           :   {   type    :   String,  required   : false },
    company_name    :   {   type    :   String,  required   : false },
    password        :   {   type    :   String,  required   : false },
    address         :   {   type    :   String,  required   : false },
    is_admin        :   {   type    :   Boolean, default    : false },
    date            :   {   type    :   Date,   default : Date.now }});

const appusers   = mongoose.model('appusers',UserSchema);
module.exports  = appusers;