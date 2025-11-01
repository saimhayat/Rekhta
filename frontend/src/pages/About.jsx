import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      {/* ===== Hero Section ===== */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <h1>About <span className="highlight">Our Academy</span></h1>
            <p>
              Since 2017, Rekhta Academy Pakistan has been continuously achieving success and making progress in the field of knowledge and education.
This institution is not only active in academic and literary fields but is also providing modern and standard education according to the needs of the present era through qualified and well-trained teachers. Many of its teachers are serving efficiently in various educational institutions across the country.
With the aim of taking education to new heights, Rekhta Academy Pakistan is now providing high-quality educational services through Campus College (Girls&Boys Campus) in 6th Road, Rawalpindi, at the matriculation and intermediate levels. 
            </p>
          </div>
        </div>
      </section>

      {/* ===== Mission & Vision ===== */}
      <section className="mission-vision-section">
        <div className="mission-card glass-card">
          <h2>🎯 Our Mission</h2>
          <p>
            Knowledge Sphere Academy offeres holistic development approach that focuses on nuturing student's physical,
            emotional,mental,social and spiritual sides of life . Our focus is to groom students and teach them 
            the qualities of self-discipline, diligence and determination for achieving wisdom in life.
          </p>
        </div>

        <div className="vision-card glass-card">
          <h2>🌟 Our Vision</h2>
          <p>
            Empowering students for the future , We envision a world where learning inspires curiosity, creativity,
            and lifelong success — building future leaders who make a positive
            impact on society.
          </p>
        </div>
      </section>

      {/* ===== Academy Journey ===== */}
      <section className="about-journey">
        <h2>Our Journey</h2>
        <div className="journey-timeline">
          <div className="timeline-item glass-card">
            <h3>📘 Founded in 2017</h3>
            <p>
              Since 2017, Rekhta Academy Pakistan has been continuously achieving success and making progress in the field of knowledge and education.
            </p>
          </div>
          <div className="timeline-item glass-card">
            <h3>🚀 Growth & Expansion</h3>
            <p>
              Over the years, we’ve expanded into multiple programs, empowering
              hundreds of students to achieve outstanding academic results.
            </p>
          </div>
          <div className="timeline-item glass-card">
            <h3>🏆 Recognition</h3>
            <p>
              Today, we stand among the top academic institutions known for
              producing board toppers and inspiring future leaders.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Leadership Section ===== */}
      <section className="leadership-section">
        <h2>Meet Our Leadership</h2>
        <div className="leadership-grid">
          <div className="leader-card glass-card">
            <img src="/sirbabar.svg" alt="sirbabr" className="leader-card" />
            <h3>Babar Ilyas</h3>
            <p>CHAIRMAN</p>
          </div>

          <div className="leader-card glass-card">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&q=80"
              alt="Academic Head"
            />
            <h3>Mr. Ahmed Ali</h3>
            <p>Head of Academics</p>
          </div>

          <div className="leader-card glass-card">
            <img
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600&q=80"
              alt="Coordinator"
            />
            <h3>Ms. Sara Malik</h3>
            <p>Program Coordinator</p>
          </div>
        </div>
      </section>

      {/* ===== Call to Action ===== */}
      <section className="about-cta">
        <div className="cta-content glass-card">
          <h2>Join Our Academic Family</h2>
          <p>
            Be part of a community that values excellence, creativity, and
            lifelong learning. Together, we’ll shape a brighter future.
          </p>
          <button className="cta-btn" onClick={() => navigate("/admission-inquiry")}>
  Enroll Now
</button>

        </div>
      </section>
    </div>
  );
};

export default About;
