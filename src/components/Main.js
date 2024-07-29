import React from "react";
import { Link } from "react-scroll";
import Homepage from "./Homepage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Button, AppBar, Toolbar, IconButton, Box } from "@mui/material";
import {
  Home,
  LinkedIn,
  GitHub,
  Email,
  Description,
} from "@mui/icons-material";
import { motion, useAnimation } from "framer-motion";

const Main = () => {
  const hashLinks = [
    { sectionName: "About Me", link: "#aboutme" },
    { sectionName: "Background", link: "#background" },
    { sectionName: "Skills", link: "#skills" },
    { sectionName: "Projects", link: "#projects" },
    { sectionName: "Contact", link: "#contact" },
  ];
  return (
    <BrowserRouter>
      <div>
        <AppBar
          position="fixed"
          sx={{ backdropFilter: "blur(20px)" }}
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Toolbar sx={{ p: -1 }}>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              <IconButton
                href="/"
                color="primary"
                disableRipple
                sx={{ ":hover": { color: "#999999" } }}
              >
                <Home></Home>
              </IconButton>
              {hashLinks.map((item) => (
                <Button
                  component={HashLink}
                  smooth
                  to={item.link}
                  color="primary"
                  variant="text"
                  disableRipple
                  sx={{
                    m: 1,
                    ":hover": {
                      backgroundColor: "transparent",
                      color: "#999999",
                    },
                  }}
                >
                  {item.sectionName}
                </Button>
              ))}
            </Box>
            <IconButton
              href="https://github.com/shoshana-levitt"
              target="_blank"
              color="primary"
              disableRipple
              sx={{ m: 1, ":hover": { color: "#999999" } }}
            >
              <GitHub></GitHub>
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/shoshanalevitt/"
              target="_blank"
              color="primary"
              disableRipple
              sx={{ m: 1, ":hover": { color: "#999999" } }}
            >
              <LinkedIn></LinkedIn>
            </IconButton>
            <IconButton
              href="mailto:shoshana.levitt@gmail.com"
              color="primary"
              disableRipple
              sx={{ m: 1, ":hover": { color: "#999999" } }}
            >
              <Email></Email>
            </IconButton>
            <Button
              startIcon={<Description />}
              href="https://acrobat.adobe.com/id/urn:aaid:sc:US:d595f9f6-928b-4f71-b4f5-43d76a47a42a"
              target="_blank"
              color="primary"
              variant="outlined"
              disableRipple
              sx={{
                m: 1,
                ":hover": {
                  backgroundColor: "transparent",
                  color: "#999999",
                  borderColor: "#999999",
                },
              }}
            >
              Resume
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar></Toolbar>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </main>
      </div>
      <div id="circular-cursor"></div>
    </BrowserRouter>
  );
};

export default Main;
