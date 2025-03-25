import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section className="aboutWrapper">
      <div className="about">
        <div className="aboutdiv">
          <img src="/images/bg32.png"></img>
        </div>
        <div className="aboutContent">
          <h1>About Us</h1>
          <p>Who We Are:</p>
          <p className="teamDescription">
            We are a team of AI and security enthusiasts from DY Patil College of Engineering, Pune.
            Our project aims to enhance identity verification using real-time facial movement detection.
          </p>
          <p className="teamMembers">
            <strong>Team Members:</strong>
            <br /> <br></br>Dr. Dipalee Rane - Project Guide and Advisor<br></br>
            <br /> Vaibhav Patil - Backend Development<br></br>
            <br /> Soham Padwal - AI/ML Development<br></br>
            <br /> Dnyaneshwri Korhale - UI Designing and Development<br></br>
            <br /> Ayush Patil - Data Scientist
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
