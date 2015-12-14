var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  email: String,
  picture: String,
  facebookId: String
});

var User = mongoose.model('User', userSchema);
module.exports = User;