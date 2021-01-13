const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // fields
  username: {
    // validations
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 3
  },
}, {
  timestamps: true, // auto create data when created and modified
});

const User = mongoose.model('User', userSchema);

module.exports = User;