const express = require('express');
const bakeryRouter = require('./routes/bakery');
const app = express();
const bodyparser = require('body-parser');

app.get('/', function(req, res){
	res.send("Hello World");
});

app.use(bodyparser.json());

app.use('/bakery', bakeryRouter);

app.listen(3000, () => console.log("Listening on port 3000"));




// const Movie = require('./models/movie');
// const Bakery = require('./models/bakery');
// const User = require('./models/user');

// const user1 = new User();
// user1.first_name = "Patrick";
// user1.last_name = "Timsit";

// user1.save(function(error, result){
//     console.log("save");
//     console.log(result);
//     console.log(error);
// });

// const fecthUser = User.find({first_name: "Patrick"}, function(error, result) {
//     console.log("find");
//     console.log(result);
//     console.log(error);
// });