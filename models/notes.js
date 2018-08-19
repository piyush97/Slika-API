
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  Department: String,
  Subject: String,
  Sem: Number,
  Link: String,
  id: Number,
});

module.exports = mongoose.model('notes', NoteSchema);
