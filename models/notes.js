var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
  name: String
});

module.exports = mongoose.model('notes', NoteSchema);
