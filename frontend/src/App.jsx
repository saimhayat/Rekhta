import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard"
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Admissions from "./pages/Admissions";
import FacultyPage from "./pages/FacultyPage";
import WhatsNew from "./pages/WhatsNew";
import Campuses from "./pages/Campuses";
import Home from "./pages/Home";
import Intermediate from "./pages/Intermediate";
import ShortCourse from "./pages/ShortCourses";
import SSC from "./pages/SSC";
import Cambridge from "./pages/Cambridge";
import AdmissionInquiry from "./pages/AdmissionInquiry"; // adjust path as needed
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Default route — website opens here */}
        <Route path="/" element={<Home />} />

        {/* Optional: keep /home available as well */}
        <Route path="/home" element={<Navigate to="/" />} />


        {/* Admin dashboard */}
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />


        {/* Other routes */}
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/whats-new" element={<WhatsNew />} />
        <Route path="/campuses" element={<Campuses />} />
        <Route path="/programs/intermediate" element={<Intermediate/>} />
        <Route path="/programs/ShortCourses" element={<ShortCourse/>} />
        <Route path="/programs/SSC" element={<SSC/>} />
        <Route path="/programs/Cambridge" element={<Cambridge/>} />
        <Route path="/admission-inquiry" element={<AdmissionInquiry />} />       
        <Route path="/admin/login" element={<AdminLogin />} /> 
        
        {/* Fallback — redirect any unknown route to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
