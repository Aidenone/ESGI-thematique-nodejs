const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo' , {
	user: process.env.MONGODB_USER,
	pass: process.env.MONGODB_PASS,
	dbName: process.env.MONGODB_DBNAME,
	useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', function () {console.log(arguments)});
db.on('open', function () {
    const Schema = mongoose.Schema;

    const movieDetailsSchema = new Schema({
        title: String,
        year: {type: Number, min:1850},
        released: Date
    });

    const Movie = mongoose.model('Movie', movieDetailsSchema);

    const movie1 = new Movie();
    movie1.title = "Test Movie";
    movie1.year = 1930;
    movie1.released = Date.now();

    movie1.save(function(error, result){
        console.log("save");
        console.log(result);
        console.log(error);
    });

    const fecthMovies = Movie.find({title: "Wild Wild West"}, function(error, result) {
        console.log("find");
        console.log(result);
        console.log(error);
    });
    
});