const mongoose = require('mongoose');

const schema  = new mongoose.Schema({
    title           :   {   type    :   String, required   :   true    },
    desc            :   {   type    :   String, required   :   true    },
    code            :   {   type    :   String, required   :   true    },
    active          :   {   type    :   Boolean,default    :   true    },
    blob            :   {   type    :   Buffer, required   :   false    },
    json            :   {   type    :   String, required   :   true     },
    category        :   {   type    :   Buffer, required   :   false    },
    created_dt      :   {   type    :   Date,   default    :   Date.now()},
    modified_dt     :   {   type    :   Date}});

const uploads   = mongoose.model('uploads',schema);
module.exports  = uploads;
