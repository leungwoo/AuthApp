import express from "express";
const router = express.Router();

import {
  authUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authmiddleware.js";

router.post("/auth", authUser);
router.post("/", registerUser);
router.post("/logout", logOutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
