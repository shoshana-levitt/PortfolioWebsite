import React from "react";
import { HashLink } from "react-router-hash-link";
import { Typography, Box } from "@mui/material";
import AboutMe from "./AboutMe";

const Homepage = () => {
  return (
    <div>
      <Box height="100vh" width="100vw" display="flex">
        <Typography variant="h4" align="center" margin={10}>
          Welcome to Shoshana's Website!
        </Typography>
        <Typography variant="h6" align="center">
          Please pardon our appearance while we're under construction.
        </Typography>
      </Box>
      <AboutMe />
    </div>
  );
};

export default Homepage;
