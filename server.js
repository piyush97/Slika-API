
const express = require('express');

const mustacheExpress = require('mustache-express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

const Joi = require('joi');

const Notes = require('./notes');

app.use(bodyParser.urlencoded({ extended: true }));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;
app.engine('mustache', mustacheExpressInstance);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.post('/notes', (req, res) => {
  const schema = {
    Department: Joi.string().min(1).required(),
  };
  const result = Joi.validate(req.body, schema);
  console.log(result);

  if (result.error) {
    res.status(400).send("Error");
  }
});

app.get('/notes', (req, res) => (res.send(Notes)));

const PORT = 8080;
app.listen(process.env.PORT || PORT);

console.log(`Running on http://localhost:${PORT}`);
