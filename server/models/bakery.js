const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bakerySchema = new Schema({
    name: String,
    creation_date: Date,
    address: {
        street: String,
        city: {
        	type: String,
        	required: true
        },
        zip: Number
    },
    certification: {
    	vegan: {type: Boolean, default: false},
    	bio: {type: Boolean, default: false},
    	homemade: {type: Boolean, default: false},
    },
    photo: String
});

module.exports = db.model('Bakery', bakerySchema);