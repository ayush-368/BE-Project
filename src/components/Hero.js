import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h2>Face Liveliness Detection using ML Approaches</h2>
      <p>As deepfakes become more realistic, identity verification is crucial. Our ML-powered Face Liveliness Detection ensures secure authentication by distinguishing real faces from Al-generated or static images</p>
      <button className="cta-button">Get Started</button>
    </section>
  );
};

export default Hero;
