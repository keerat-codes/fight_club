const mongoose = require('mongoose');

const PostMalonev11Schema = new mongoose.Schema({
sunflower : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('PostMalonev11', PostMalonev11Schema);