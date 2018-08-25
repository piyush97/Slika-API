// Routes
const router = require('express').Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const Notes = require('../models/notes');
const keys = require('../config/keys');
// const notes = require('./notes');
const User = require('../models/User');

// Load Input Validation
const ValidateRegisterInput = require('../validation/register');
const ValidateLoginInput = require('../validation/login');
// @Route Get

router.get('/', (req, res) => {
  Notes.find().then((results) => {
    res.send({ notes: results });
  });
});

// @Route Post

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

// @Route Get

router.get('/notes', (req, res) => (res.send(Notes)));

// @Route Post

router.post('/register', (req, res) => {
  const { errors, isValid } = ValidateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(404).json(errors);
  }
  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json({ email: 'email already exists' }); 
    } {
      const avatar = gravatar.url(req.body.email, {
        s: '200', // size
        r: 'pg', // rating
        d: 'mm', // Default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @Route Post

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find user by Email
  User.findOne({ email })
    .then((user) => {
      // Check for User
      if (!user) {
        return res.status(404).json({ email: 'User not found' });
      }

      // Check Password

      bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (isMatch) {
            // User matched

            // Created JWT Payload
            const payload = {
              id: user.id,
              name: user.name,
              avatar: user.avatar,
            };

            // Signed Token
            jwt.sign(payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token,
                });
              });
          } else {
            return res.status(400).json({ password: 'Password Incorrect'});
          }
        });
    });
});

// @Route GET
// @Access Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
  });
});
module.exports = router;
