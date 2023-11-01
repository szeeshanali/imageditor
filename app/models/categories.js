const mongoose = require('mongoose');

const schema  = new mongoose.Schema({
    name           :    {   type    :   String },
    code           :    {   type    :   String },
    level          :    {   type    :   String },
    parent         :    {   type    :   String },
    order          :    {   type    :   Number },
    active         :    {   type    :   Boolean,   default : true },
    items          :    [{  type    :   mongoose.Types.ObjectId}], 
    deleted        :    {   type    :   Boolean,   default : false }
    });

const categories   = mongoose.model('categories',schema);
module.exports  = categories;