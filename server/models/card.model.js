import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
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
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  tags: [{
    type: String,
    required: true

  }],
  });

const Card = mongoose.model('Card', userSchema);

export default Card;