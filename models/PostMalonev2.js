const mongoose = require('mongoose');

const PostMalonev2Schema = new mongoose.Schema({
sunflower : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('PostMalonev2', PostMalonev2Schema);