import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./AdmissionInquiry.css";

// ✅ Form validation schema
const schema = yup.object().shape({
  fullName: yup.string().required("Name is required!"),
  email: yup
    .string()
    .email("Please enter a valid email address!")
    .required("Email is required!"),
  contact: yup
    .string()
    .matches(/^[0-9]{10,13}$/, "Please enter a valid phone number!")
    .required("Contact number is required!"),
  gender: yup.string().required("Please select a gender!"),
  courseType: yup.string().required("Please select course type!"),
  course: yup.string().required("Please select course!"),
});

// ✅ All available course data
const courseData = {
  SSC: ["Pre-9th", "9th", "10th"],
  Intermediate: ["F.Sc", "ICS", "I.Com", "F.A"],
  Cambridge: ["O&A Levels", "IGCSE"],
  "Short Course": [
    "English Language",
    "IELTS",
    "Computer Basics",
    "Graphic Designing",
  ],
};

const AdmissionInquiry = () => {
  const [selectedType, setSelectedType] = useState("");
  const [availableCourses, setAvailableCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // ✅ Submit form data to backend
  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://rekhta-orpin.vercel.app/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
  fullName: data.fullName,
  email: data.email,
  contact: data.contact,
  gender: data.gender,
  courseType: data.courseType,
  course: data.course,
}),

      });

      const result = await res.json();

      if (res.ok) {
        setMessage("✅ Inquiry submitted successfully!");
        reset();
        setSelectedType("");
        setAvailableCourses([]);
      } else {
        setMessage(result.error || "❌ Failed to submit inquiry");
      }
    } catch (err) {
      setMessage("❌ Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // 🔁 Update courses when type changes
  useEffect(() => {
    if (selectedType && courseData[selectedType]) {
      setAvailableCourses(courseData[selectedType]);
      setValue("course", "");
    } else {
      setAvailableCourses([]);
      setValue("course", "");
    }
  }, [selectedType, setValue]);

  return (
    <div className="admission-container">
      <h1 className="admission-title">Admission Inquiry</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="admission-form glass-card"
      >
        <h2 className="section-title">Personal Information</h2>

        <div className="form-grid">
          {/* Full Name */}
          <div className="form-group">
            <label>Full Name*</label>
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="error">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email*</label>
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          {/* Contact */}
          <div className="form-group">
            <label>Contact No*</label>
            <input
              type="text"
              placeholder="Student’s Contact No."
              {...register("contact")}
            />
            {errors.contact && <p className="error">{errors.contact.message}</p>}
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Select Gender*</label>
            <select {...register("gender")}>
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && <p className="error">{errors.gender.message}</p>}
          </div>
        </div>

        <hr className="divider" />

        {/* General Information */}
        <h2 className="section-title">General Information</h2>

        <div className="form-grid">
          {/* Course Type */}
          <div className="form-group">
            <label>Course Type*</label>
            <select
              {...register("courseType")}
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">Select course type</option>
              {Object.keys(courseData).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.courseType && (
              <p className="error">{errors.courseType.message}</p>
            )}
          </div>

          {/* Course */}
          <div className="form-group">
            <label>Select Course*</label>
            <select {...register("course")} disabled={!availableCourses.length}>
              <option value="">Select course</option>
              {availableCourses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
            {errors.course && <p className="error">{errors.course.message}</p>}
          </div>
        </div>

        {/* Submit Section */}
        <div className="submit-container">
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit Inquiry"}
          </button>
          {message && <p className="status-message">{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default AdmissionInquiry;
