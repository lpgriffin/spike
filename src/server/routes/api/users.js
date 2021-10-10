import express from "express";

import { login, register } from "../controllers/users.js";

const router = express.Router();

router.post("/", login);
router.post("/", register);

export default router;
