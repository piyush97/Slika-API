
const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;
app.engine('mustache', mustacheExpressInstance);
app.set('view engine', 'mustache');
app.set('views', `${__dirname}/views`);
// Using our routes
app.use('/', routes);
const PORT = 8080;
app.listen(process.env.PORT || PORT);
