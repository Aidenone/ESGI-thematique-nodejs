const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo' , {
	user: process.env.MONGODB_USER,
	pass: process.env.MONGODB_PASS,
	dbName: process.env.MONGODB_DBNAME,
	useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', function () {console.log(arguments)});
db.on('open', function () {console.log("Connected")});