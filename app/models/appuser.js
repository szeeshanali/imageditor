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
    modified_by     :   {   type    :   Boolean, default    : false },
    modified_dt     :   {   type    :   Boolean, default    : false },
    date            :   {   type    :   Date,   default : Date.now },
    active          :   {   type    :   Boolean,   default : true },
    watermark       :   {   type    :   Boolean,   default : false },
    limit_projects  :   {   type    :   Number,   default : 5 },
    created_dt      :   {   type    :   Date,   default : Date.now }});

const appusers   = mongoose.model('appusers',UserSchema);
module.exports  = appusers;