const mongoose = require('mongoose');

const PostMalonev13Schema = new mongoose.Schema({
sunflower : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('PostMalonev13', PostMalonev13Schema);