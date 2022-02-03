const mongoose = require('mongoose');
const { Schema } = mongoose;

const sheetSchema = new Schema({
  title: String,
  slug: String,
  content: String,
  dateCreated: Date,
  lastUpdated: Date,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  createdBy: { type: Schema.Types.String, ref: 'User' },
});

module.exports = mongoose.model('Sheet', sheetSchema);
