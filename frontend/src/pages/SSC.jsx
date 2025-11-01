import React, { useState, useEffect } from "react";
import "./SSC.css";

const programs = {
  "Pre-9th": {
    title: "Pre-9th Program",
    description: `The Pre-9th program at Rekhta Academy is designed to prepare students 
      for the Secondary School Certificate (SSC) curriculum by strengthening their 
      foundational understanding of key subjects such as Mathematics, English, and Science. 
      This early start allows students to confidently enter 9th grade with enhanced conceptual clarity.`,
    documents: [
      "Copy of 8th Grade Result Card",
      "Copy of Parent / Guardian CNIC",
      "Copy of Student B-Form",
      "3 Recent Passport Size Photographs",
    ],
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80&auto=format&fit=crop",
  },

  "9th": {
    title: "9th Class Program",
    description: `Our 9th Class program focuses on building a strong academic base in 
      subjects prescribed by the Board of Intermediate and Secondary Education (BISE). 
      Emphasis is placed on conceptual learning, exam preparation, and the development 
      of analytical thinking skills to help students excel academically.`,
    documents: [
      "Copy of 8th Grade Result Card / School Leaving Certificate",
      "Copy of CNIC / B-Form",
      "3 Recent Passport Size Photographs",
    ],
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900&q=80&auto=format&fit=crop",
  },

  "10th": {
    title: "10th Class Program",
    description: `The 10th Class program is structured to help students achieve 
      excellence in their board examinations. With focused revision sessions, 
      comprehensive study materials, and test sessions modeled after BISE standards, 
      Rekhta Academy ensures that every student performs to their fullest potential.`,
    documents: [
      "Copy of 9th Grade Result Card",
      "Copy of CNIC / B-Form",
      "3 Recent Passport Size Photographs",
    ],
    img: "https://images.unsplash.com/photo-1584697964199-5f6f0c80f3d1?w=900&q=80&auto=format&fit=crop",
  },
};


const SSC = () => {
  const [selected, setSelected] = useState("Pre-9th");
  const [fade, setFade] = useState(false);
  const program = programs[selected];

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 500);
    return () => clearTimeout(timeout);
  }, [selected]);

  return (
    <div className="ssc-container">
      <h1 className="ssc-title">Secondary School Certificate (SSC) Programs</h1>

      <p className="ssc-intro">
        Rekhta Academy provides a solid academic foundation through its SSC
        programs, ensuring students build confidence and achieve excellence in
        their studies. Our programs emphasize conceptual learning, regular
        assessments, and personalized guidance for every student.
      </p>

      <div className="ssc-tabs">
        {Object.keys(programs).map((prog) => (
          <button
            key={prog}
            onClick={() => setSelected(prog)}
            className={`ssc-tab-button ${selected === prog ? "active" : ""}`}
          >
            {prog}
          </button>
        ))}
      </div>

      {/* ✅ Horizontal layout fix */}
      <div className="ssc-content">
        <div className={`ssc-box ${fade ? "fade-in" : ""}`}>
          
          {/* LEFT TEXT */}
          <div className="ssc-text">
            <h2>{program.title}</h2>
            <p>{program.description}</p>

            <h3>Documents Required for Admission:</h3>
            <ul>
              {program.documents.map((doc, idx) => (
                <li key={idx}>{doc}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="ssc-image">
            <img src={program.img} alt={program.title} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default SSC;