import express from "express";

import { getUser, register } from "../controllers/users.js";

import validateRegisterInput from "../validation/register.js";
import validateLoginInput from "../validation/login.js";
import UserModel from "../models/userModel.js";

const router = express.Router();

router.get("/", getUser);
router.post("/", register);

export default router;
