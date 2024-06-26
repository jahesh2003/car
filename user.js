const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
