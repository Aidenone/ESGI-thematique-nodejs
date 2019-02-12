const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: String,
    last_name: String,
	created_at: Date,
	updated_at: Date
});

userSchema.pre('save', function(next) {
	if(this.isNew) this.created_at = Date.now();
	this.updated_at = Date.now();
	next();
});

module.exports = db.model('User', userSchema);