import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import inquiryRoutes from "./routes/inquiryRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();
const app = express();

// ============================
// 🧱 Middleware (CORS Setup)
// ============================
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = ["http://localhost:5173",
      process.env.FRONTEND_URL // ✅ Add this in Vercel env
    ];

    if (!origin || allowedOrigins.some((pattern) => {
      if (typeof pattern === "string") return pattern === origin;
      return pattern.test(origin);
    })) {
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
// 🧠 MongoDB Connection (Serverless safe)
// ============================
if (!global._mongooseConnected) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Atlas Connected"))
    .catch((err) => console.error("❌ MongoDB Error:", err.message));

  global._mongooseConnected = true;
}

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

// ============================
// 🚀 Local Development Server
// ============================
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Backend running locally at http://localhost:${PORT}`);
  });
}

export default app;
