import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const foodSchema = new Schema({
	name: { type: 'String', required: true },
  attributes: [String],
  flavors: [String],
  accepts: [String],
});

export default mongoose.model('Food', foodSchema);
