const mongoose = require('mongoose');

const User6667Schema = new mongoose.Schema({
email : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('User6667', User6667Schema);