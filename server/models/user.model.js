const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    unique: false,
    trim: true
  },
  sizing: {
    shoesize: {
        type: String
    },
    pantsize: {
        type: String
    },
    shirtsize: {
        type: String
    },
    jacketsize: {
        type: String
    },
    dresssize: {
        type: String
    },
    sweatersize: {
        type: String
    }
  },
  personalphotos : [{
    img: {
        data: Buffer,
        contentType: String
      }  
  }],
  likedphotos : [{
    // TODO: Connect this to a card model
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;