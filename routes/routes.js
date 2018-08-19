// Routes
const router = require('express').Router();
const Notes =  require('../models/notes');
// const notes = require('./notes');

router.get('/', (req, res) => res.render('index', {}));

router.post('/', (req, res) => {
  let newNote = new Notes({ description: req.body });
});

router.get('/notes', (req, res) => (res.send(Notes)));

module.exports = router;
