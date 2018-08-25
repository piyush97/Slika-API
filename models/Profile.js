const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creating Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
});
