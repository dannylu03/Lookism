import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  data: [{
    outfit_id: {type: Number},
    tags: {type: String}
  }]
})

const CardData = mongoose.model('CardData', userSchema);

export default CardData;