import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="heroWrapper" >
      <div className="hero">
        <div className="herodiv">
          <img src="/images/bg1.png"></img>
        </div>
        <div className="heroContent">
          <h1>Face Liveliness Detection using ML Approaches</h1>
          <p>As deepfakes become more realistic, identity verification is crucial. Our ML-powered Face Liveliness Detection ensures secure authentication by distinguishing real faces from Al-generated or static images</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;