import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PaperPublication from "../components/PaperPublication";
import About from "../components/About";
import Footer from "../components/Footer";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <PaperPublication />
      <About />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
