/**
 * LOG LEVELS: 
 * 1. INFO
 * 2. WARNING 
 * 3. DEBUG
 * 4. ERROR
 * 5. FATAL ERROR
 */

const mongoose = require('mongoose');

const schema  = new mongoose.Schema({
    created_dt:     {   type    :   Date    , default : Date.now },
    code:           {   type    :   mongoose.ObjectId  },
    message:        {   type    :   String   },
    content:        {   type    :   String   },
    type:           {   type    :   String   },
    path:           {   type    :   String   },
    user_id:        {   type    :   mongoose.ObjectId               },
    is_admin:       {   type    :   Boolean },
    level:          {   type    :   Number},
    data:           {   type    :   String},
    pdfBase64:           {   type    :   String},
    is_error:          {   type    :   Boolean},    
    template_id:  {   type    :   mongoose.ObjectId  },
    file_id:  {   type    :   mongoose.ObjectId  }
    });

const logs   = mongoose.model('logs',schema);
module.exports  = logs;