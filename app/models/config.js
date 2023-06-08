const mongoose = require('mongoose');
var configSchema = new Schema({any: Schema.Types.Mixed});
var config = mongoose.model('config', configSchema);
module.exports  = config;
