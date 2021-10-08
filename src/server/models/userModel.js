import mongoose from "mongoose";

const modelSchema = mongoose.Schema({
  id: Number,
  email: String,
  password: String,
});

const userModel = mongoose.model("userModel", modelSchema);

export default userModel;
