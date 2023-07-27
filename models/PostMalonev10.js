const mongoose = require('mongoose');

const PostMalonev10Schema = new mongoose.Schema({
sunflower : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('PostMalonev10', PostMalonev10Schema);