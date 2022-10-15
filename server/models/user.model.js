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
  info: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Info'
  }

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