import React from "react";
import { HashLink } from "react-router-hash-link";
import { Typography, Box } from "@mui/material";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
