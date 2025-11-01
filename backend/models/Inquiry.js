import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    contact: {
      type: String,
      required: [true, "Contact number is required"],
      match: [/^[0-9]{10,13}$/, "Please enter a valid phone number"],
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: [true, "Gender is required"],
    },
    courseType: {
      type: String,
      required: [true, "Course type is required"],
      enum: ["SSC", "Intermediate", "Cambridge", "Short Course"],
    },
    course: {
      type: String,
      required: [true, "Course name is required"],
    },
  },
  {
    timestamps: true, // Adds createdAt & updatedAt automatically
  }
);

const Inquiry = mongoose.model("Inquiry", inquirySchema);
export default Inquiry;
