import React, { useState, useEffect } from "react";
import "./ShortCourse.css";

const courses = {
  "Graphic Design": {
    title: "Graphic Design Course",
    description: `Learn the art of visual storytelling using tools like Adobe Photoshop, Illustrator, 
      and Canva. This course focuses on creating professional posters, logos, and digital art — 
      perfect for creative learners and aspiring designers.`,
    duration: "2 Months",
    eligibility: "Matriculation / O-Level",
    img: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?w=800&q=80&auto=format&fit=crop",
  },
  "Digital Marketing": {
    title: "Digital Marketing Course",
    description: `Master online marketing strategies including SEO, content creation, 
      social media advertising, and email campaigns. Gain practical skills to promote 
      brands and businesses effectively in the digital world.`,
    duration: "2.5 Months",
    eligibility: "Matriculation / Intermediate",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop",
  },
  "Video Editing": {
    title: "Video Editing Course",
    description: `Learn professional video editing using Adobe Premiere Pro, CapCut, and DaVinci Resolve. 
      This course covers cutting, transitions, effects, and storytelling to create engaging content for 
      YouTube and social media platforms.`,
    duration: "2 Months",
    eligibility: "Matriculation / Intermediate",
    img: "https://images.unsplash.com/photo-1588345921523-4ac1d1e9c7b0?w=800&q=80&auto=format&fit=crop",
  },
  "YouTube": {
    title: "YouTube Channel Growth Course",
    description: `Master YouTube content creation, SEO, audience retention, and monetization. 
      Learn how to plan, shoot, and grow your channel with proven techniques used by successful creators.`,
    duration: "1.5 Months",
    eligibility: "Matriculation / Intermediate",
    img: "https://images.unsplash.com/photo-1590608897129-79da98d159ab?w=800&q=80&auto=format&fit=crop",
  },
  "Taxation": {
    title: "Taxation and Filing Course",
    description: `Understand Pakistan’s tax system, FBR registration, return filing, and basic accounting 
      principles. Ideal for business owners, accountants, and freelancers handling financial records.`,
    duration: "2 Months",
    eligibility: "Intermediate / B.Com",
    img: "https://images.unsplash.com/photo-1565514020-07c8e1e2f27d?w=800&q=80&auto=format&fit=crop",
  },
  "Accounts": {
    title: "Accounting & Bookkeeping Course",
    description: `Learn fundamental accounting concepts, double-entry bookkeeping, and use of accounting 
      software like QuickBooks and Excel. Perfect for aspiring accountants and business students.`,
    duration: "2.5 Months",
    eligibility: "Intermediate / B.Com",
    img: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?w=800&q=80&auto=format&fit=crop",
  },
  "Amazon": {
    title: "Amazon Virtual Assistant (VA) Course",
    description: `Become a certified Amazon VA by learning product research, listing creation, PPC campaigns, 
      and account management. Get practical training to start freelancing or managing stores online.`,
    duration: "2 Months",
    eligibility: "Matriculation / Intermediate",
    img: "https://images.unsplash.com/photo-1610465299993-eb6e1d7b5b43?w=800&q=80&auto=format&fit=crop",
  },
  "Shopify": {
    title: "Shopify Store Management Course",
    description: `Learn how to create, customize, and manage your own Shopify store. 
      Covers product sourcing, dropshipping setup, marketing, and order handling.`,
    duration: "1.5 Months",
    eligibility: "Matriculation / Intermediate",
    img: "https://images.unsplash.com/photo-1515169067865-5387ec356754?w=800&q=80&auto=format&fit=crop",
  },
  "eBay": {
    title: "eBay Business Course",
    description: `Start your own eBay business with guidance on account setup, product listing, 
      shipping management, and scaling strategies for global sales.`,
    duration: "1.5 Months",
    eligibility: "Matriculation / Intermediate",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80&auto=format&fit=crop",
  },
  "Daraz": {
    title: "Daraz Seller Course",
    description: `Learn to sell effectively on Daraz by mastering product listing, campaign creation, 
      and order fulfillment. Ideal for small business owners and eCommerce beginners.`,
    duration: "1.5 Months",
    eligibility: "Matriculation / Intermediate",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&q=80&auto=format&fit=crop",
  },
  "Trading": {
    title: "Online Trading Course",
    description: `Get introduced to stock, forex, and crypto trading. Learn technical analysis, 
      risk management, and strategies to make informed financial decisions.`,
    duration: "2 Months",
    eligibility: "Intermediate / B.Com",
    img: "https://images.unsplash.com/photo-1569025690938-a00729c9e1c2?w=800&q=80&auto=format&fit=crop",
  },
  "TikTok Shop": {
    title: "TikTok Shop Business Course",
    description: `Learn how to sell and promote products on TikTok Shop using influencer marketing, 
      live selling, and product optimization to grow your sales and reach.`,
    duration: "1 Month",
    eligibility: "Matriculation / Intermediate",
    img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80&auto=format&fit=crop",
  },
};

const ShortCourse = () => {
  const [selected, setSelected] = useState(Object.keys(courses)[0]); // ✅ auto default
  const [fade, setFade] = useState(false);

  const course = courses[selected];

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 500);
    return () => clearTimeout(timeout);
  }, [selected]);

  if (!course) {
    return (
      <div className="shortcourse-container">
        <h1 className="shortcourse-title">Short Courses</h1>
        <p className="shortcourse-intro">
          Please select a course to view its details.
        </p>
      </div>
    );
  }

  return (
    <div className="shortcourse-container">
      <h1 className="shortcourse-title">Short Courses</h1>
      <p className="shortcourse-intro">
        Our short courses are designed to empower students with practical, industry-ready skills. 
        Each course blends theory with hands-on training, ensuring students gain real-world experience 
        in their chosen field.
      </p>

      {/* Course Tabs */}
      <div className="course-tabs">
        {Object.keys(courses).map((c) => (
          <button
            key={c}
            onClick={() => setSelected(c)}
            className={`tab-button ${selected === c ? "active" : ""}`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Course Details */}
      <div className={`course-content glass-card ${fade ? "fade-in" : ""}`}>
        <div className="course-text slide-left">
          <h2>{course.title}</h2>
          <p>{course.description}</p>

          <div className="course-details">
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Eligibility:</strong> {course.eligibility}</p>
          </div>
        </div>

        <div className="course-image slide-right">
          <img src={course.img} alt={course.title} />
        </div>
      </div>
    </div>
  );
};

export default ShortCourse;
