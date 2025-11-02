import React from "react";
import {
  FaSchool,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaUniversity,
  FaTrophy,
  FaLightbulb,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* ===== Hero Section ===== */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to Rekhta Academy</h1>
            <p>Shaping bright minds through conceptual, value-based education.</p>
            <button className="hero-btn" onClick={() => navigate("/about")}>
  Learn More
</button>

          </div>
        </div>
        <img
          className="hero-bg"
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80"
          alt="Students collaborating in class"
        />
      </section>

      {/* ===== Journey Section ===== */}
      <section className="journey-section">
        <h2>Journey of Rekhta Academy</h2>
        <p>
          Since 2017, Rekhta Academy has been a beacon of knowledge, fostering
          excellence and integrity in every student.
        </p>

        <div className="journey-grid">
          <div className="journey-card">
            <FaSchool className="journey-icon" />
            <p>
              Founded with a vision to cultivate intellectual and moral growth.
            </p>
          </div>
          <div className="journey-card">
            <FaChalkboardTeacher className="journey-icon" />
            <p>
              Expert faculty and revision sessions ensure strong academic
              foundations.
            </p>
          </div>
          <div className="journey-card">
            <FaUserGraduate className="journey-icon" />
            <p>Our alumni continue to excel in top universities worldwide.</p>
          </div>
        </div>
      </section>

      {/* ===== Programs Section ===== */}
      <section className="programs-section">
        <div className="programs-content">
          <h2>Our Programs</h2>
          <p>
            Rekhta Academy offers a diverse range of programs tailored to meet
            every student's aspirations.
          </p>
          <div className="programs-buttons">

            {/* SSC Card */}
            <div
              className="program-card"
              onClick={() => navigate("/programs/SSC")}
              style={{ cursor: "pointer" }}
            >
              <FaBookOpen className="program-icon" />
              <p>SSC</p>
            </div>

            {/* Intermediate Card */}
            <div
              className="program-card"
              onClick={() => navigate("/programs/intermediate")}
              style={{ cursor: "pointer" }}
            >
              <FaBookOpen className="program-icon" />
              <p>Intermediate</p>
            </div>

            {/* Cambridge Card */}
            <div
              className="program-card"
              onClick={() => navigate("/programs/Cambridge")}
              style={{ cursor: "pointer" }}
            >
              <FaBookOpen className="program-icon" />
              <p>Cambridge</p>
            </div>


            {/* Short Courses Card */}
            <div
              className="program-card"
              onClick={() => navigate("/programs/ShortCourses")}
              style={{ cursor: "pointer" }}
            >
              <FaUniversity className="program-icon" />
              <p>Short Courses</p>
            </div>
          </div>
        </div>
        <div className="programs-image">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&q=80"
            alt="Students studying together"
          />
        </div>
      </section>

      {/* ===== Excellence Section ===== */}
      <section className="excellence-section">
        <h2>Excellence at Rekhta</h2>
        <div className="excellence-grid">
          <div className="excellence-card">
            <FaLightbulb className="excellence-icon" />
            <h3>Conceptual Learning</h3>
            <p>
              We emphasize understanding concepts deeply, not just memorizing.
            </p>
          </div>
          <div className="excellence-card">
            <FaTrophy className="excellence-icon" />
            <h3>Top Achievers</h3>
            <p>
              Our students consistently secure top positions in board exams.
            </p>
          </div>
          <div className="excellence-card">
            <FaUserGraduate className="excellence-icon" />
            <h3>Bright Futures</h3>
            <p>
              Graduates pursue higher studies at renowned institutions globally.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Top Positions Section ===== */}
      <section className="top-positions-section">
        <div className="top-header">
          <h2>Top Positions</h2>
          <p>
            We have a multitude of inspiring success stories that showcase
            the transformative power of education and the determination of our students.
          </p>
        </div>

        <div className="positions-grid">
          <div className="position-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&q=80"
              alt="Rida Fatima"
            />
            <h3>Usman</h3>
            <p>1st Position (Overall)</p>
            <span>Rekhta Academy</span>
          </div>

          <div className="position-card">
            <img
              src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=500&q=80"
              alt="Asma Ijaz"
            />
            <h3>Ayesha</h3>
            <p>2nd Position (Overall)</p>
            <span>Rekhta Academy</span>
          </div>

          <div className="position-card">
            <img
              src="https://images.unsplash.com/photo-1618355776464-8666794d2520?w=500&q=80"
              alt="Azka Abdulrehman"
            />
            <h3>Nadia</h3>
            <p>2nd Position</p>
            <span>Rekhta Academy</span>
          </div>
        </div>
      </section>

      {/* ===== Affiliations Section ===== */}
      <section className="affiliations-section">
        <h2>Our Affiliations</h2>
        <div className="affiliations-logos">
          <div className="affiliation-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/f/f2/University_of_Punjab_logo.png"
              alt="University of the Punjab"
            />
            <p>University of the Punjab</p>
          </div>

          <div className="affiliation-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/79/Government_College_University_Lahore_logo.png"
              alt="GCU Lahore"
            />
            <p>GCU Lahore</p>
          </div>

          <div className="affiliation-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/0/02/University_of_Sargodha_logo.png"
              alt="University of Sargodha"
            />
            <p>University of Sargodha</p>
          </div>

          <div className="affiliation-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e7/University_of_Lahore_logo.png"
              alt="University of Lahore"
            />
            <p>University of Lahore</p>
          </div>

          <div className="affiliation-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/af/Lahore_College_for_Women_University_logo.png"
              alt="LCWU"
            />
            <p>LCWU</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
