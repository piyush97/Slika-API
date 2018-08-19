
const express = require('express');

const mustacheExpress = require('mustache-express');

const bodyParser = require('body-parser');

// const mongoose = require('mongoose');

const app = express();

// const Joi = require('joi');

const Notes = require('./notes');

app.use(bodyParser.urlencoded({ extended: true }));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;
app.engine('mustache', mustacheExpressInstance);
app.set('view engine', 'mustache');
app.set('views', `${__dirname}/views`);

app.get('/', (req, res) => res.render('index', {}));

app.get('/notes', (req, res) => (res.send(Notes)));

app.post('/', (req, res) => {
  res.json(req.body);
});
const PORT = 8080;
app.listen(process.env.PORT || PORT);
