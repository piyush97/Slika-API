/**
 * These are the imports
 */
const express = require('express');
// const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const keys = require('./config/keys');

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
}).then(() => {
  console.log('db Connected');
}).catch(err => console.log(err));

// Body Parser as a Middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Passport middleware
app.use(passport.initialize());

// Passport Config

require('./config/passport')(passport);

// Moustache Express

// const mustacheExpressInstance = mustacheExpress();
// mustacheExpressInstance.cache = null;
// app.engine('mustache', mustacheExpressInstance);
// app.set('view engine', 'mustache');
// app.set('views', `${__dirname}/views`);

// Using our routes as middleware

app.use('/', routes);

const PORT = 8080;

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening to port  ${PORT}`);
});
