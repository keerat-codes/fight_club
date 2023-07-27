const mongoose = require('mongoose');

const PostMalonev4Schema = new mongoose.Schema({
sunflower : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('PostMalonev4', PostMalonev4Schema);