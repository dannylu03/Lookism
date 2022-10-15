const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  img: {
    data: Buffer,
    contentType: String
  },
  clotheslist : [{
    type: String
    }],
  user: {
    id: String
  },
  tags: [{
    type: String
  }]
  });

const User = mongoose.model('User', userSchema);

module.exports = User;