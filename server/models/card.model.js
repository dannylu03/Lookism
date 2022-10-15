import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
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
  }],
  });

const Card = mongoose.model('Card', userSchema);

export default Card;