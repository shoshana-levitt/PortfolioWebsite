import React from "react";
import { HashLink } from "react-router-hash-link";
import { Typography, Box } from "@mui/material";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Homepage = () => {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Homepage;
