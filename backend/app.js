const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
      secret: process.env.SESSION,
      resave: true,
      saveUninitialized: true,
      cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days in milliseconds
    })
  );



app.use(passport.initialize());
app.use(passport.session());
require('./services/passport');

const routes = require('./routes/auth.js');
app.use('/', routes);


app.listen(port, () => console.log(`Listening on port ${port}`));