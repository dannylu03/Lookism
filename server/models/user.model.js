import mongoose from 'mongoose';
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
  tags: [{
    type:String}],
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
    type: mongoose.Schema.Types.ObjectId, ref: 'Card'
  }],
  likedphotos : [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Card'
  }]
}); 

const User = mongoose.model('User', userSchema);

// User.findOne({})
//   .populate('personalphotos')
//   .exec((err, comment)=>{
//     console.log(comment)
//   })

// User.findOne({})
// .populate('likedphotos')
// .exec((err, comment)=>{
//   console.log(comment)
// })

export default User;