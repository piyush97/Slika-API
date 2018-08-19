
const express = require('express');

const app = express();

const Notes = require('./notes');

app.get('/notes', (req, res) => (res.send(Notes)));

const PORT = 3000;
app.listen(process.env.PORT || PORT);

console.log(`Running on http://localhost:${PORT}`);
