const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Resident: Boolean,
  Manager: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("userModel", userSchema);

module.exports = UserModel;
