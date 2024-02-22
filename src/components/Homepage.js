import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Background from "./Background";

const Homepage = () => {
  return (
    <div>
      <AboutMe />
      <Background />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
