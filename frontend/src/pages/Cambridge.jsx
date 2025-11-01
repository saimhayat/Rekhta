import React, { useState, useEffect } from "react";
import "./Cambridge.css";

const programs = {
  "O & A Levels": {
    title: "O & A Levels Program",
    description: `The Cambridge O & A Levels program at Rekhta Academy is designed for 
      students who aspire to achieve globally recognized academic excellence. 
      Our O Level curriculum (equivalent to Matric) and A Level (equivalent to Intermediate) 
      provide a comprehensive understanding of core and elective subjects under the 
      Cambridge Assessment International Education (CAIE) framework. 
      The program emphasizes analytical skills, research-based learning, 
      and conceptual mastery, preparing students for world-class universities.`,
    documents: [
      "Copy of previous academic record (Grade 8 / O Level results)",
      "Copy of CNIC / B-Form",
      "Copy of Parent / Guardian CNIC",
      "3 Recent Passport Size Photographs",
    ],
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=900&q=80&auto=format&fit=crop",
  },

  IGCSE: {
    title: "IGCSE Program",
    description: `The International General Certificate of Secondary Education (IGCSE) 
      is an internationally recognized qualification offered by Cambridge International. 
      Rekhta Academy’s IGCSE program encourages critical thinking, practical learning, 
      and academic independence. Students are guided through a diverse range of subjects 
      that promote global perspectives and prepare them for A Levels or other 
      international qualifications.`,
    documents: [
      "Copy of previous school transcript",
      "Copy of CNIC / B-Form",
      "Copy of Parent / Guardian CNIC",
      "3 Recent Passport Size Photographs",
    ],
    img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=900&q=80&auto=format&fit=crop",
  },
};

const Cambridge = () => {
  const [selected, setSelected] = useState("O & A Levels");
  const [fade, setFade] = useState(false);
  const program = programs[selected];

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 500);
    return () => clearTimeout(timeout);
  }, [selected]);

  return (
    <div className="cambridge-container">
      <h1 className="cambridge-title">Cambridge Programs</h1>
      <p className="cambridge-intro">
        Rekhta Academy is proud to offer world-class Cambridge programs designed 
        to nurture global thinkers and lifelong learners. Our O & A Levels and 
        IGCSE courses equip students with the academic excellence and confidence 
        required to excel in international education systems.
      </p>

      <div className="cambridge-tabs">
        {Object.keys(programs).map((prog) => (
          <button
            key={prog}
            onClick={() => setSelected(prog)}
            className={`cambridge-tab-button ${selected === prog ? "active" : ""}`}
          >
            {prog}
          </button>
        ))}
      </div>

      {/* ✅ Horizontal layout (glass-card removed) */}
      <div className={`cambridge-content ${fade ? "fade-in" : ""}`}>
        <div className="cambridge-text slide-left">
          <h2>{program.title}</h2>
          <p>{program.description}</p>

          <h3>Documents Required for Admission:</h3>
          <ul>
            {program.documents.map((doc, idx) => (
              <li key={idx}>{doc}</li>
            ))}
          </ul>
        </div>

        <div className="cambridge-image slide-right">
          <img src={program.img} alt={program.title} />
        </div>
      </div>
    </div>
  );
};

export default Cambridge;
