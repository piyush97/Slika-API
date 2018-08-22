
const express = require('express');
// const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mmongodb://piyush:piyush1@ds123852.mlab.com:23852/slika', {
  useNewUrlParser: true,
}).then(() => {
  console.log('db Connected');
}).catch(err => console.log(err));

// Body Parser as a Middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
