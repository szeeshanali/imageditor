const mongoose = require('default_settings');

const schema  = new mongoose.Schema({
    upload_size_limit_kb:    {   type    :   Number, default: 5120 },
    });

const defaultSettings   = mongoose.model('default_settings',schema);
module.exports  = defaultSettings;