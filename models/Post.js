const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
email : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('Post', PostSchema);