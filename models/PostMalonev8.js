const mongoose = require('mongoose');

const PostMalonev8Schema = new mongoose.Schema({
sunflower : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('PostMalonev8', PostMalonev8Schema);