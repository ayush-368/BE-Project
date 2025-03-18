import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PaperPublication from "../components/PaperPublication";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PaperPublication />
      <About />
      <Footer />
    </>
  );
};
export default Home;
