const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const type_productSchema = new Schema({
    name: {
    	type: String,
    	required: true
    },
    photo: String,
});

type_productSchema.pre('save', function(next) {
	if(this.isNew) this.created_at = Date.now();
	this.updated_at = Date.now();
	next();
});

module.exports = db.model('Type_Product', bakerySchema);