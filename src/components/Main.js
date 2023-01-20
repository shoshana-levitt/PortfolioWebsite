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
        <AppBar position="fixed">
          <Toolbar sx={{ p: -1 }}>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <IconButton
                href="/"
                disableRipple
                sx={{ ":hover": { color: "blue" } }}
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
                  m: 1,
                  ":hover": { backgroundColor: "transparent", color: "blue" },
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
                  ":hover": { backgroundColor: "transparent", color: "blue" },
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
                  ":hover": { backgroundColor: "transparent", color: "blue" },
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
                  ":hover": { backgroundColor: "transparent", color: "blue" },
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
                  ":hover": { backgroundColor: "transparent", color: "blue" },
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
                sx={{ m: 1, ":hover": { color: "blue" } }}
              >
                <LinkedIn></LinkedIn>
              </IconButton>
              <IconButton
                href="https://github.com/shoshana-levitt"
                target="_blank"
                disableRipple
                sx={{ m: 1, ":hover": { color: "blue" } }}
              >
                <GitHub></GitHub>
              </IconButton>
              <IconButton
                href="mailto:shoshana.levitt@gmail.com"
                disableRipple
                sx={{ m: 1, ":hover": { color: "blue" } }}
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
