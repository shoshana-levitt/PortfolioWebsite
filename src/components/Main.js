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

const Main = () => {
  const hashLinks = [
    { sectionName: "About Me", link: "#aboutme" },
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
                sx={{ ":hover": { color: "white" } }}
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
                      color: "white",
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
              sx={{ m: 1, ":hover": { color: "white" } }}
            >
              <GitHub></GitHub>
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/shoshanalevitt/"
              target="_blank"
              color="primary"
              disableRipple
              sx={{ m: 1, ":hover": { color: "white" } }}
            >
              <LinkedIn></LinkedIn>
            </IconButton>
            <IconButton
              href="mailto:shoshana.levitt@gmail.com"
              color="primary"
              disableRipple
              sx={{ m: 1, ":hover": { color: "white" } }}
            >
              <Email></Email>
            </IconButton>
            <Button
              startIcon={<Description />}
              href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:2921ab55-a421-3951-bd78-be16e02fae70"
              target="_blank"
              color="primary"
              variant="outlined"
              disableRipple
              sx={{
                m: 1,
                ":hover": {
                  backgroundColor: "transparent",
                  color: "white",
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
