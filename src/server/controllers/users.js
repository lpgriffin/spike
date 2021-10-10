import UserModel from "../models/userModel.js";

export const getUser = async (req, res) => {
  try {
    const userModels = await UserModel.find();
    res.status(200).json(userModels);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const register = (req, res) => {
  const body = req.body;

  try {
  } catch (error) {}
};
