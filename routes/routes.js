// Routes
const router = require('express').Router();
const Notes = require('../models/notes');
// const notes = require('./notes');

router.get('/', (req, res) => {
  Notes.find().then((results) => {
    res.send({ notes: results });
  });
});

router.post('/', (req, res) => {
  const newNote = new Notes({ description: req.body.description });

  newNote
    .save()
    .then((result) => {
      console.log(result);
      res.redirect('/');
    });
});

router.get('/notes', (req, res) => (res.send(Notes)));

module.exports = router;
