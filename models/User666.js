const mongoose = require('mongoose');

const User666Schema = new mongoose.Schema({
email : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('User666', User666Schema);