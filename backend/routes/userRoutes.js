import express from "express";
const router = express.Router();

import {
  authUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userControllers.js";

router.post("/auth", authUser);
router.post("/", registerUser);
router.post("/logout", logOutUser);
router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile);

export default router;
