import React from 'react';
import styles from './FacultyPage.module.css';

// Mock data — replace with real data or props
const facultyData = {
  administration: [
    {
      id: 1,
      name: "Babar Ilyas Awan",
      designation: "Chairman",
      qualifications: "M.A (URDU) , B-TECH CIVIL",
      contact: "4 Yers Experience",
      photo: "/sirbabar.svg"
    },
    {
      id: 2,
      name: "Mr. Robert Lee",
      designation: "Vice Principal",
      qualifications: "M.Ed, B.Sc",
      contact: "robert.lee@college.edu",
      photo: "https://placehold.co/300x300/2c5364/ffffff?text=Mr.+Robert+Lee"
    }
  ],
  computerScience: [
    {
      id: 3,
      name: "Dr. Alan Turing",
      designation: "HOD, Computer Science",
      qualifications: "Ph.D. in AI",
      contact: "alan.turing@college.edu",
      photo: "https://placehold.co/300x300/2c5364/ffffff?text=Dr.+Alan+Turing"
    },
    {
      id: 4,
      name: "Ms. Grace Hopper",
      designation: "Assistant Professor",
      qualifications: "M.Tech, B.E.",
      contact: "grace.hopper@college.edu",
      photo: "https://placehold.co/300x300/2c5364/ffffff?text=Ms.+Grace+Hopper"
    }
  ],
  chemistry: [
    {
      id: 5,
      name: "Dr. Marie Curie",
      designation: "Professor",
      qualifications: "Nobel Laureate, Ph.D. Chemistry",
      contact: "marie.curie@college.edu",
      photo: "https://placehold.co/300x300/2c5364/ffffff?text=Dr.+Marie+Curie"
    }
  ]
};

const FacultyPage = () => {
  return (
    <div className={styles.facultyContainer}>
      {/* Banner */}
      <section className={styles.bannerSection}>
        <div className={styles.bannerOverlay}>
            <h1>Faculty</h1>
        </div>
      </section>

      {/* Administration Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Administration</h2>
        <div className={styles.facultyGrid}>
          {facultyData.administration.map((member) => (
            <FacultyCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Computer Science Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Department of Computer Science</h2>
        <div className={styles.facultyGrid}>
          {facultyData.computerScience.map((member) => (
            <FacultyCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Chemistry Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Department of Chemistry</h2>
        <div className={styles.facultyGrid}>
          {facultyData.chemistry.map((member) => (
            <FacultyCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
};

// Reusable Faculty Card Component
const FacultyCard = ({ member }) => {
  return (
    <div className={styles.facultyCard}>
      <img 
        src={member.photo} 
        alt={member.name} 
        className={styles.facultyPhoto} 
        onError={(e) => {
          e.target.src = "https://placehold.co/300x300/cccccc/969696?text=No+Image";
        }}
      />
      <h3>{member.name}</h3>
      <p className={styles.designation}>{member.designation}</p>
      <p className={styles.qualifications}>{member.qualifications}</p>
      <p className={styles.contact}>{member.contact}</p>
    </div>
  );
};

export default FacultyPage;