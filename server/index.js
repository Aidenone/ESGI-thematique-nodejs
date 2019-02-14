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

app.use(bodyparser.json());
app.use(security.verifyToken);
app.use('/', securityRouter);
app.use('/bakery', bakeryRouter);
app.use('/user', userRouter);
app.use(cors());

app.listen(3000, () => console.log("nodeBakery listening on port 3000"));

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