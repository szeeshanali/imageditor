const mongoose = require('mongoose');

const UserSchema  = new mongoose.Schema({
    fname           :   {   type    :   String,  required   : true },
    lname           :   {   type    :   String,  required   : false },
    email           :   {   type    :   String,  required   : true },
    phone           :   {   type    :   String,  required   : false },
    company_name    :   {   type    :   String,  required   : false },      
    password        :   {   type    :   String,  required   : false },
    address         :   {   type    :   String,  required   : false },
    is_admin        :   {   type    :   Boolean, default    : false },
    modified_by     :   {   type    :   Boolean, default    : false },
    modified_dt     :   {   type    :   Date      },
    date            :   {   type    :   Date,     default : Date.now },
    active          :   {   type    :   Boolean,   default : true },
    deleted         :   {   type    :   Boolean,   default : false },
    watermark       :   {   type    :   Boolean,   default : false },
    project_limit   :   {   type    :   Number,   default : 2 },
    download_count  :   {   type    :   Number,   default : 0 },
    registered_dt   :   {   type    :   Date    },
    created_dt      :   {   type    :   Date    }});

const appusers   = mongoose.model('appusers',UserSchema);
module.exports  = appusers;