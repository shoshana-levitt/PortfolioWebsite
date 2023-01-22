import React from "react";
import { Link } from "react-scroll";
import Homepage from "./Homepage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Button, AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { Home, LinkedIn, GitHub, Email } from "@mui/icons-material";

const Main = () => {
  return (
    <BrowserRouter>
      <div>
        <AppBar
          position="fixed"
          sx={{ backdropFilter: "blur(20px)" }}
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Toolbar sx={{ p: -1 }}>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <IconButton
                href="/"
                disableRipple
                sx={{ ":hover": { color: "#2085a0" } }}
              >
                <Home></Home>
              </IconButton>
              <Button
                component={HashLink}
                smooth
                to="#intro"
                color="secondary"
                variant="text"
                disableRipple
                sx={{
                  // color: '#dfdfdf'
                  m: 1,
                  ":hover": {
                    backgroundColor: "transparent",
                    color: "#2085a0",
                  },
                }}
              >
                Intro
              </Button>
              <Button
                component={HashLink}
                smooth
                to="#aboutme"
                color="secondary"
                variant="text"
                disableRipple
                sx={{
                  m: 1,
                  ":hover": {
                    backgroundColor: "transparent",
                    color: "#2085a0",
                  },
                }}
              >
                About Me
              </Button>
              <Button
                component={HashLink}
                smooth
                to="#skills"
                color="secondary"
                variant="text"
                disableRipple
                sx={{
                  m: 1,
                  ":hover": {
                    backgroundColor: "transparent",
                    color: "#2085a0",
                  },
                }}
              >
                Skills
              </Button>
              <Button
                component={HashLink}
                smooth
                to="#projects"
                color="secondary"
                variant="text"
                disableRipple
                sx={{
                  m: 1,
                  ":hover": {
                    backgroundColor: "transparent",
                    color: "#2085a0",
                  },
                }}
              >
                Projects
              </Button>
              <Button
                component={HashLink}
                smooth
                to="#contact"
                color="secondary"
                variant="text"
                disableRipple
                sx={{
                  m: 1,
                  ":hover": {
                    backgroundColor: "transparent",
                    color: "#2085a0",
                  },
                }}
              >
                Contact
              </Button>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton
                href="https://www.linkedin.com/in/shoshanalevitt/"
                target="_blank"
                disableRipple
                sx={{ m: 1, ":hover": { color: "#2085a0" } }}
              >
                <LinkedIn></LinkedIn>
              </IconButton>
              <IconButton
                href="https://github.com/shoshana-levitt"
                target="_blank"
                disableRipple
                sx={{ m: 1, ":hover": { color: "#2085a0" } }}
              >
                <GitHub></GitHub>
              </IconButton>
              <IconButton
                href="mailto:shoshana.levitt@gmail.com"
                disableRipple
                sx={{ m: 1, ":hover": { color: "#2085a0" } }}
              >
                <Email></Email>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar></Toolbar>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default Main;
