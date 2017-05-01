import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const wineSchema = new Schema({
	_id: String,
  name: { type: 'String', required: true },
  attributes: Object,
  flavors: [String],
  accepts: Object,
});

export default mongoose.model('Wine', wineSchema);
