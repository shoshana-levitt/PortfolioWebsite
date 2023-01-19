import React from "react";
import { HashLink } from "react-router-hash-link";
import { Typography, Box } from "@mui/material";
import Intro from "./Intro";
import AboutMe from "./AboutMe";

const Homepage = () => {
  return (
    <div>
      <Intro />
      <AboutMe />
    </div>
  );
};

export default Homepage;
