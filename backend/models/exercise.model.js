const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  // fields and validations
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true, // auto create data when created and modified
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;