// import React from "react";
// import "./CampusLife.css";

// const campusSections = [
//   {
//     id: 1,
//     title: "Sports Round-Up",
//     description:
//       "A healthy body leads to a healthy mind. Different sports and games are played throughout the season, but the Sports Round-Up is a vibrant festival that brings excitement and joy — giving students a chance to refresh their minds and re-energize for the upcoming sessions.",
//     image:
//       "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: 2,
//     title: "Debates and Public Speaking",
//     description:
//       "From debates and public speaking competitions that enhance communication and critical thinking skills, to seminars and workshops that broaden knowledge beyond the curriculum — Rakhta Academy fosters confident expression and leadership.",
//     image:
//       "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: 3,
//     title: "Cultural & Arts Events",
//     description:
//       "Rakhta Academy celebrates art, music, and culture through vibrant festivals and creative showcases — inspiring students to express themselves and appreciate diverse talents.",
//     image:
//       "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: 4,
//     title: "Community Service",
//     description:
//       "Students actively participate in outreach programs and social initiatives — cultivating empathy, teamwork, and a sense of responsibility towards society.",
//     image:
//       "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// const CampusLife = () => {
//   return (
//     <div className="campus-life-wrapper">
//       {campusSections.map((section, index) => (
//         <div
//           key={section.id}
//           className={`campus-section ${
//             index % 2 === 1 ? "reverse-layout" : ""
//           }`}
//         >
//           <div className="campus-text">
//             <h2>{section.title}</h2>
//             <p>{section.description}</p>
//           </div>
//           <div className="campus-image-box">
//             <img src={section.image} alt={section.title} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CampusLife;
