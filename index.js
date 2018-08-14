var express = require('express');
var app = express();
var fs = require("fs");
// static data for now istead of a dB

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "notes.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

