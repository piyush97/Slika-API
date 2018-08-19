
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let NoteSchema = new Schema({
  description: String
});

module.exports = mongoose.model('notes', NoteSchema);
