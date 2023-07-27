const mongoose = require('mongoose');

const PostMaloneSchema = new mongoose.Schema({
sunflower : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('PostMalone', PostMaloneSchema);