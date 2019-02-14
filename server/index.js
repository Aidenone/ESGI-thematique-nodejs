const express = require('express');

/*const Movie = require('./models/movie');

    const movie1 = new Movie();
    movie1.title = "Black Panther";
    movie1.year = 2018;
    movie1.released = Date.now();


    movie1.save(function(error, result){
        console.log("Save movie Succes");
        console.log(result);
        console.log(error);
    });

    const fecthMovies = Movie.find({title: "Coach Carter"}, function(error, result) {
        console.log("find");
        console.log(result);
        console.log(error);
    });*/

const movieRouter = require('./routes/movie');
const securityRouter = require('./routes/security');
const bodyparser = require('body-parser');
const security = require('./middlewares/security');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(security.verifyToken);
app.use(bodyparser.json())
app.use('/', securityRouter);
app.use('/movies', movieRouter);

app.listen(3000, ()=> console.log('Listening on port 3000'));