import React from "react";
import "./Campuses.css";

const campuses = [
  {
    city: "Rawalpindi",
    address:
      "F-777, Steps Collage (Girls Campus) 6th Road Satellite Town Rawalpindi",
    contact: "0311-3333418 , 0304-3333418",
  },
];

const Campuses = () => {
  return (
    <section className="campuses-section">
      <div className="campuses-container">
        <div className="campuses-content glass-card">
          <h2>Campuse</h2>
          <p>
            Discover our vibrant campuse, where learning transcends boundaries.
            With state-of-the-art facilities and a nurturing environment, our
            campuses provide the perfect setting for academic growth and
            personal development. Explore modern classrooms, collaborative
            spaces, and recreational amenities — fostering a holistic learning
            experience.
          </p>

          <div className="campus-list">
            {campuses.map((campus, index) => (
              <div key={index} className="campus-box glass-inner">
                <h3>{campus.city}</h3>
                <p className="address">{campus.address}</p>
                <p className="contact">{campus.contact}</p>
                <span className="tag">(Boys & Girls Campus)</span>
              </div>
            ))}
          </div>
        </div>

        <div className="campuses-map glass-card">
          <img
  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
  alt="Pakistan Map"
/>


        </div>
      </div>
    </section>
  );
};

export default Campuses;
