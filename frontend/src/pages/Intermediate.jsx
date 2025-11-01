import React, { useState, useEffect } from "react";
import "./Intermediate.css";

const programs = {
  "F.Sc": {
    title: "F.Sc Program (Pre-Medical & Pre-Engineering)",
    description: `The F.Sc program at Rekhta Academy provides a strong foundation for 
      students aspiring to enter the fields of medicine, engineering, or applied sciences. 
      Divided into Pre-Medical and Pre-Engineering streams, the program emphasizes 
      analytical learning and conceptual understanding in core subjects like 
      Physics, Chemistry, Biology, and Mathematics. Our experienced faculty ensures 
      that students are well-prepared for their board examinations and professional 
      entrance tests (MDCAT & ECAT).`,
    documents: [
      "Matric / O-Level result card",
      "Copy of CNIC / B-Form",
      "Copy of Parent / Guardian CNIC",
      "3 Recent Passport Size Photographs",
    ],
    img: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?w=900&q=80&auto=format&fit=crop",
  },
  "I.C.S": {
    title: "Intermediate in Computer Science (ICS)",
    description: `The ICS program is designed for students interested in pursuing 
      careers in computer science, software engineering, or information technology. 
      It offers a balanced mix of computer programming, mathematics, and logical reasoning 
      to prepare students for the digital future.`,
    documents: [
      "Matric / O-Level result card",
      "Copy of CNIC / B-Form",
      "3 Recent Passport Size Photographs",
    ],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop",
  },
  "I.COM": {
    title: "Intermediate in Commerce (I.COM)",
    description: `The I.COM program introduces students to the world of business, 
      finance, and economics. It equips learners with the skills and understanding 
      necessary for higher education in commerce, accounting, and business administration.`,
    documents: [
      "Matric / O-Level result card",
      "Copy of CNIC / B-Form",
      "3 Recent Passport Size Photographs",
    ],
    img: "https://images.unsplash.com/photo-1561414927-6d86591d0c4b?w=900&q=80&auto=format&fit=crop",
  },
  "FA (IT)": {
    title: "FA (Information Technology)",
    description: `The FA (IT) program blends creativity with technology, providing 
      students a unique combination of arts and computer literacy. It’s ideal for 
      learners who aim to pursue digital design, multimedia, or modern communication fields.`,
    documents: [
      "Matric / O-Level result card",
      "Copy of CNIC / B-Form",
      "3 Recent Passport Size Photographs",
    ],
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=900&q=80&auto=format&fit=crop",
  },
};

const Intermediate = () => {
  const [selected, setSelected] = useState("F.Sc");
  const [fade, setFade] = useState(false);
  const program = programs[selected];

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 500);
    return () => clearTimeout(timeout);
  }, [selected]);

  return (
    <div className="intermediate-container">
      <h1 className="intermediate-title">Intermediate Programs</h1>
      <p className="intermediate-intro">
        At Rekhta Academy, we blend knowledge with excellence to nurture leaders of tomorrow. 
        Our Intermediate programs build a solid foundation for academic and personal growth, 
        fostering innovation, conceptual learning, and character development.
      </p>

      <div className="program-tabs">
        {Object.keys(programs).map((prog) => (
          <button
            key={prog}
            onClick={() => setSelected(prog)}
            className={`tab-button ${selected === prog ? "active" : ""}`}
          >
            {prog}
          </button>
        ))}
      </div>

      {/* ✅ Final working horizontal layout */}
<div className={`program-content ${fade ? "fade-in" : ""}`}>

        <div className="program-text slide-left">
          <h2>{program.title}</h2>
          <p>{program.description}</p>

          <h3>Documents Required for Admission:</h3>
          <ul>
            {program.documents.map((doc, idx) => (
              <li key={idx}>{doc}</li>
            ))}
          </ul>
        </div>

        <div className="program-image slide-right">
          <img src={program.img} alt={program.title} />
        </div>
      </div>
    </div>
  );
};

export default Intermediate;
