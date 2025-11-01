import React, { useState } from "react";
import "./Admission.css";

const Admission = () => {
  const [activeTab, setActiveTab] = useState("howToApply");

  return (
    <div className="admission-container">
      <section className="admission-hero glass-card">
        <h1>Admissions</h1>
        <p>
          Our admission process is designed to welcome aspiring students and
          provide them with the best opportunities for a promising future.
        </p>
        <div className="admission-tabs">
          <button
            className={activeTab === "faq" ? "active" : ""}
            onClick={() => setActiveTab("faq")}
          >
            FAQs
          </button>
          <button
            className={activeTab === "scholarships" ? "active" : ""}
            onClick={() => setActiveTab("scholarships")}
          >
            Scholarships
          </button>
          <button
            className={activeTab === "howToApply" ? "active" : ""}
            onClick={() => setActiveTab("howToApply")}
          >
            How to Apply
          </button>
        </div>
      </section>

      {/* ==== HOW TO APPLY ==== */}
      {activeTab === "howToApply" && (
        <section className="glass-card admission-content">
          <h2>How to Apply</h2>
          <ol>
            <li>
              <strong>Visit the Desired Campus:</strong> Prospective students
              should visit the Rekhta Academy campus they are interested in to
              learn about programs and meet staff.
            </li>
            <li>
              <strong>Obtain the Prospectus:</strong> Purchase or collect the
              academy prospectus for detailed information about available
              programs and requirements.
            </li>
            <li>
              <strong>Complete the Admission Form:</strong> Fill in accurate
              details and attach all necessary documents.
            </li>
            <li>
              <strong>Submit the Form:</strong> Submit your completed form and
              documents to the admissions office.
            </li>
            <li>
              <strong>Evaluation:</strong> The admissions team reviews
              applications based on eligibility and merit.
            </li>
            <li>
              <strong>Receive Admission Offer:</strong> Selected candidates will
              receive an official offer letter.
            </li>
            <li>
              <strong>Submit Fees:</strong> Pay your tuition and registration
              fees within the specified deadline.
            </li>
            <li>
              <strong>Enrollment:</strong> Complete the enrollment process and
              join the Rekhta Academy community!
            </li>
          </ol>
        </section>
      )}

      {/* ==== SCHOLARSHIPS ==== */}
      {activeTab === "scholarships" && (
        <section className="glass-card admission-content">
          <h2>Scholarships & Financial Aid</h2>
          <p>
            Rekhta Academy offers a variety of financial aid programs to support
            deserving and talented students.
          </p>
          <ul>
            <li>
              <strong>Merit-Based Scholarships:</strong> Up to 100% fee
              waivers for high-achieving students.
            </li>
            <li>
              <strong>Need-Based Concessions:</strong> Available upon review of
              financial circumstances.
            </li>
            <li>
              <strong>Special Concessions:</strong> For children of teachers,
              alumni, and government employees.
            </li>
            <li>
              <strong>Fee Installments:</strong> Flexible payment plans to
              ensure education is accessible to all.
            </li>
          </ul>
        </section>
      )}

      {/* ==== FAQ SECTION ==== */}
      {activeTab === "faq" && (
        <section className="glass-card admission-content">
          <h2>Frequently Asked Questions</h2>

          <h3>What documents are required for admission?</h3>
          <ul>
            <li>Copies of previous academic result cards</li>
            <li>Copy of parent/guardian CNIC</li>
            <li>Copy of student CNIC/B-Form</li>
            <li>Passport-size photos</li>
            <li>Copy of final result card (once available)</li>
          </ul>

          <h3>Do I need certain marks to be considered for admission?</h3>
          <p>
            Yes, a minimum of <strong>60% marks</strong> is typically required.
            Requirements may vary depending on the program.
          </p>

          <h3>How do I know which program suits me best?</h3>
          <p>
            We offer on-campus counseling sessions to guide you in selecting the
            program that aligns with your goals.
          </p>

          <h3>Does the college encourage extracurricular activities?</h3>
          <p>
            Absolutely! Rekhta Academy promotes debates, competitions, and
            cultural events for overall development.
          </p>

          <h3>What transport facilities does the academy provide?</h3>
          <p>
            Bus services are available for students on specific routes. Contact
            the administration office for route details.
          </p>
        </section>
      )}
    </div>
  );
};

export default Admission;
