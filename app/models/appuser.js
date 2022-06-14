const mongoose = require('mongoose');

const UserSchema  = new mongoose.Schema({
    fname       :   {   type    :   String, required : false },
    lname       :   {   type    :   String, required : false },
    email       :   {   type    :   String, required : false },
    phone       :   {   type    :   String, required : false },
    company_name:   {   type    :   String, required : false },
    password    :   {   type    :   String, required : false },
    date        :   {   type    :   Date,   default : Date.now }});

const appusers   = mongoose.model('appusers',UserSchema);
module.exports  = appusers;