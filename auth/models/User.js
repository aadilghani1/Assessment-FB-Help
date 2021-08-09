const mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  uid: String,
  accessToken: String,
  imgUrl: String,

  name: String,
});

module.exports = mongoose.model("User", userSchema);
