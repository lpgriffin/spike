import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  password: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("userModel", userSchema);

export default UserModel;
