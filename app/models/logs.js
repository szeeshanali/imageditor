const mongoose = require('logs');

const schema  = new mongoose.Schema({
    created_dt:     {   type    :   Date    , default : Date.now },
    code:           {   type    :   Number  },
    message:        {   type    :   String   },
    exception:      {   type    :   String   }
    });

const logs   = mongoose.model('logs',schema);
module.exports  = logs;