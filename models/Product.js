const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
email : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('Product', ProductSchema);