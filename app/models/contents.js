const mongoose = require('mongoose');

const schema  = new mongoose.Schema({
    content        :    {   type    :   String },
    type           :    {   type    :   String },
    deleted        :    {   type    :   Boolean, default : false },
    active         :    {   type    :   Boolean, default : true },
    created_dt     :    {   type    :   Date,   default : Date.now },
    modified_dt    :    {   type    :   Date,   default : null },
    by_admin       :    {   type    :   Boolean },
    label           :   {   type    :   String },
    order           :   {   type    :   Number}
    });

const contents   = mongoose.model('contents',schema);
module.exports  = contents;