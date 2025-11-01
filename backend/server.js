import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import inquiryRoutes from "./routes/inquiryRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

// ============================
// 🧱 Middleware (CORS Setup)
// ============================
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    // Allow localhost (for local dev) and your deployed frontend
    const allowedOrigins = [
      /^http:\/\/localhost:\d+$/, 
      /^http:\/\/127\.0\.0\.1:\d+$/,
      "https://your-frontend-name.vercel.app" // 🔁 change this to your actual frontend URL after deployment
    ];

    if (allowedOrigins.some((pattern) => pattern.test(origin))) {
      return callback(null, true);
    }

    console.warn("❌ CORS blocked origin:", origin);
    callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));

// ============================
// 🧭 API Routes
// ============================
app.use("/api/inquiry", inquiryRoutes);
app.use("/api/admin", adminRoutes);

// ============================
// 🧠 MongoDB Connection
// ============================
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Atlas Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
};
connectDB();

// ============================
// 🌐 Serve Frontend (for Vercel full MERN setup)
// ============================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.join(__dirname, "../frontend/build");

app.use(express.static(frontendPath));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(frontendPath, "index.html"));
});

// ============================
// 💥 Global Error Handler
// ============================
app.use((err, req, res, next) => {
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "CORS policy: origin not allowed",
    });
  }
  console.error("🔥 Server Error:", err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// ✅ For Vercel: export app (instead of app.listen)
export default app;
