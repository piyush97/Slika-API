/*  eslint no-console: "error"  */

const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mmongodb://piyush:piyush1@ds123852.mlab.com:23852/slika', {
  useNewUrlParser: true,
}).then(() => {
  console.log('db Connected');
});

app.use(bodyParser.urlencoded({ extended: true }));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;
app.engine('mustache', mustacheExpressInstance);
app.set('view engine', 'mustache');
app.set('views', `${__dirname}/views`);
// Using our routes
app.use('/', routes);
const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening to port  ${PORT}`);
});
