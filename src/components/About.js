import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>Who We Are:</p>
      <p>
        We are a team of AI and security enthusiasts from DY Patil College of Engineering, Pune. 
        Our project aims to enhance identity verification using real-time facial movement detection.
      </p>
      <p>
        <strong>Team Members:</strong>
        <br /> <br></br>Dr. Dipalee Rane - Project Guide and Advisor<br></br>
        <br /> Vaibhav Patil - Backend Development<br></br>
        <br /> Soham Padwal - AI/ML Development<br></br>
        <br /> Dnyaneshwri Korhale - UI Designing and Development<br></br>
        <br /> Ayush Patil - Data Scientist
      </p>
    </section>
  );
};

export default About;
