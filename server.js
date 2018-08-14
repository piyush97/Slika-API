const express = require('express');
const app = express();
let Notes = require('./notes');

app.get('/notes', function (req, res) {
  return res.send(Notes);
});

app.listen(process.env.PORT || 8080);
