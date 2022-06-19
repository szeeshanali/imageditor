const mongoose = require('mongoose');

const schema  = new mongoose.Schema({
    name           :    {   type    :   String },
    code           :    {   type    :   String },
    level          :    {   type    :   String },
    parent         :    {   type    :   String },
    order          :    {   type    :   String },
    active         :    {   type    :   String },
    items          :    {   type    :   Object}, 
    });

const categories   = mongoose.model('categories',schema);
module.exports  = categories;