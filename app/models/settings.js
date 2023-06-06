const mongoose = require('mongoose');

const schema  = new mongoose.Schema({
    file_size_limit:    {   type    :   Number, default: 5 },
    banner_delay:    {   type    :   Number, default: 5 },
    });

const appSettings   = mongoose.model('app_settings',schema);
module.exports  = appSettings;