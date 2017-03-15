import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const foodSchema = new Schema({
	name: { type: 'String', required: true },
  attributes: Object,
  flavors: [String],
  accepts: Object,
});

export default mongoose.model('Food', foodSchema);
