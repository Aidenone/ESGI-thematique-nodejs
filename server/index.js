const express = require('express');
const bodyparser = require('body-parser');
const bakeryRouter = require('./routes/bakery');
const securityRouter = require('./routes/security');
const userRouter = require('./routes/user');
const security = require('./middleware/security');
const app = express();
const cors = require('cors');

// app.use(session({
// 	secret: 'keyboard cat',
//   	resave: false,
//   	saveUninitialized: true,
//   	cookie: {},
// }));

app.use(cors());
app.use(bodyparser.json());
app.use(security.verifyToken);
app.use('/', securityRouter);
app.use('/bakery', bakeryRouter);
app.use('/user', userRouter);

app.listen(3000, () => console.log("nodeBakery listening on port 3000"));

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