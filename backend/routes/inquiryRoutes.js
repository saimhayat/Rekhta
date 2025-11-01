import express from "express";
import Inquiry from "../models/Inquiry.js";
import { verifyAdmin } from "./adminRoutes.js"; // ✅ Import admin verification middleware

const router = express.Router();

/**
 * 📩 POST — Create a new inquiry (Public)
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
 * 📤 GET — Fetch all inquiries (Admin only)
 * Supports filters, search, and pagination.
 * Example: /api/inquiry?search=Ali&type=Short%20Course&page=1&limit=10
 */
router.get("/", verifyAdmin, async (req, res) => {
  try {
    const { search = "", type = "", page = 1, limit = 10, status = "" } = req.query;

    const query = {};

    // 🔍 Search by name or email
    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    // 🎓 Filter by course type
    if (type) query.courseType = type;

    // ⚙️ Filter by inquiry status
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
 * 📝 PATCH — Update inquiry (Admin only)
 * Updates any editable field
 */
router.patch("/:id", verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    console.log("🟡 Received update request for:", id, req.body);

    const updatedInquiry = await Inquiry.findByIdAndUpdate(
      id,
      { $set: req.body }, // ✅ apply all updated fields
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
 * 🗑️ DELETE — Remove an inquiry by ID (Admin only)
 */
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Inquiry.findByIdAndDelete(id);
    if (!deleted)
      return res.status(404).json({ message: "Inquiry not found!" });

    res.json({ success: true, message: "Inquiry deleted successfully!" });
  } catch (err) {
    console.error("❌ Error deleting inquiry:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
