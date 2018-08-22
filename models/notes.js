
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  Department: {
    type: String,
    required: true,
  },
  Subject: {
    type: String,
    required: true,
  },
  Sem: {
    type: Number,
    required: true,
  },
  Link: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('notes', NoteSchema);
