import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "../models/Admin.js";
import { verifyToken } from "../middleware/authMiddleware.js";

dotenv.config();
const router = express.Router();

/**
 * 🤝 Admin Login
 */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error("❌ Admin login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * 🔐 Protected Check
 */
router.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: "Welcome to the Admin Dashboard!" });
});

export default router;
