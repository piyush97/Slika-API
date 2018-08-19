
const express = require('express');

const app = express();

const Notes = require('./notes');

app.get('/notes', (req, res) => (res.send(Notes)));

app.listen(process.env.PORT || 8080);
