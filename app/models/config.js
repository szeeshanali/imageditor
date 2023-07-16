const mongoose = require('mongoose');

const Schema  = new mongoose.Schema({},{ strict: false });

const config   = mongoose.model('app_configs',Schema);
module.exports  = config;