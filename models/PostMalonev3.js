const mongoose = require('mongoose');

const PostMalonev3Schema = new mongoose.Schema({
sunflower : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('PostMalonev3', PostMalonev3Schema);