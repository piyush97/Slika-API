// Routes
const router = require('express').Router();
const Notes = require('../models/notes');
// const notes = require('./notes');
const User = require('../models/User');

router.get('/', (req, res) => {
  Notes.find().then((results) => {
    res.send({ notes: results });
  });
});

router.post('/', (req, res) => {
  const newNote = new Notes({
    Department: req.body.Department,
    Subject: req.body.Subject,
    Sem: req.body.Sem,
    Link: req.body.Link,
    id: req.body.id,
  });

  newNote
    .save()
    .then((result) => {
      console.log(result);
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/');
    });
});

router.get('/notes', (req, res) => (res.send(Notes)));

router.post('/register', (req, res) => {
  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (user) {
      return res.status(400).json({ email: 'email already exists' });
    }
  });
});
module.exports = router;
