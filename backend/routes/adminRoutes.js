import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "../models/Admin.js";

dotenv.config();
const router = express.Router();

// ⚠️ TEMPORARY ROUTE — run once to create your admin
// router.post("/create-admin", async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash("admin123", 10);
//     const admin = new Admin({ email: "admin@rakhta.com", password: hashedPassword });
//     await admin.save();
//     res.json({ message: "Admin created successfully!" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error creating admin" });
//   }
// });



// 🧠 Helper: Generate JWT
const generateToken = (admin) => {
  return jwt.sign({ email: admin.email }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// 🔐 POST /api/admin/login
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

    const token = generateToken(admin);
    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error("❌ Admin login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔒 Middleware — verify JWT
export const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

// 🧾 Example protected route (for dashboard)
router.get("/dashboard", verifyAdmin, (req, res) => {
  res.json({ message: "Welcome to the Admin Dashboard!" });
});

export default router;
