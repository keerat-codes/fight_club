const mongoose = require('mongoose');

const PostMalonev7Schema = new mongoose.Schema({
sunflower : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('PostMalonev7', PostMalonev7Schema);