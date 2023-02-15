const mongoose = require('mongoose');

const schema  = new mongoose.Schema({
    created_dt:     {   type    :   Date    , default : Date.now },
    code:           {   type    :   Number  },
    message:        {   type    :   String   },
    content:        {   type    :   String   },
    type:           {   type    :   String   },
    path:           {   type    :   String   },
    user_id:        {   type    :   mongoose.ObjectId               },
    is_admin:       {   type    :   Boolean },
    level:          {   type    :   Number},
    data:           {   type    :   String}
    });

const logs   = mongoose.model('logs',schema);
module.exports  = logs;