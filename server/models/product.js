const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    id_bakery: {
    	type: String, 
    	required: true
    },
    id_type_product: String,
    reviews: {
        id_user: String,
        rate: Number,
        comment: String
    },
    created_at: Date,
    updated_at: Date
});

productSchema.pre('save', function(next) {
	if(this.isNew) this.created_at = Date.now();
	this.updated_at = Date.now();
	next();
});

module.exports = db.model('Product', bakerySchema);