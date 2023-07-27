const mongoose = require('mongoose');

const PostMalonev12Schema = new mongoose.Schema({
sunflower : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('PostMalonev12', PostMalonev12Schema);