import express from "express";
import Inquiry from "../models/Inquiry.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * 📩 POST — Create Inquiry (Public)
 */
router.post("/", async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json({ message: "Inquiry submitted successfully!" });
  } catch (err) {
    console.error("❌ Error saving inquiry:", err);
    res.status(400).json({ error: err.message });
  }
});

/**
 * 📤 GET — Fetch All Inquiries (Admin Only)
 */
router.get("/", verifyToken, async (req, res) => {
  try {
    const { search = "", type = "", page = 1, limit = 10, status = "" } = req.query;

    const query = {};

    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } }
      ];
    }

    if (type) query.courseType = type;
    if (status) query.status = status;

    const skip = (page - 1) * limit;
    const total = await Inquiry.countDocuments(query);

    const inquiries = await Inquiry.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    res.json({
      success: true,
      data: inquiries,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.error("❌ Error fetching inquiries:", err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * 📝 PATCH — Update Inquiry (Admin Only)
 */
router.patch("/:id", verifyToken, async (req, res) => {
  try {
    const updatedInquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedInquiry) {
      return res.status(404).json({ message: "Inquiry not found!" });
    }

    res.json({
      success: true,
      message: "Inquiry updated successfully!",
      data: updatedInquiry,
    });
  } catch (err) {
    console.error("❌ Error updating inquiry:", err);
    res.status(400).json({ error: err.message });
  }
});

/**
 * 🗑️ DELETE — Delete Inquiry (Admin Only)
 */
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deleted = await Inquiry.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Inquiry not found!" });
    }

    res.json({ success: true, message: "Inquiry deleted successfully!" });
  } catch (err) {
    console.error("❌ Error deleting inquiry:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
