const mongoose = require('mongoose');

const PostMalonev6Schema = new mongoose.Schema({
sunflower : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('PostMalonev6', PostMalonev6Schema);