
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  description: String,
  done: Boolean,
});

module.exports = mongoose.model('notes', NoteSchema);
