const mongoose = require('mongoose');

const User66678Schema = new mongoose.Schema({
email : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('User66678', User66678Schema);