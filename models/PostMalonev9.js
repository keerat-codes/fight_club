const mongoose = require('mongoose');

const PostMalonev9Schema = new mongoose.Schema({
sunflower : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('PostMalonev9', PostMalonev9Schema);