const mongoose = require('mongoose');

const User23Schema = new mongoose.Schema({
email : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('User23', User23Schema);