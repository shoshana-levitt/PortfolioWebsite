import React from "react";
import { Link } from "react-scroll";
import Homepage from "./Homepage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import {
  Home,
  LinkedIn,
  GitHub,
  Email,
  Description,
} from "@mui/icons-material";

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
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              <IconButton
                href="/"
                color="primary"
                disableRipple
                sx={{ ":hover": { color: "white" } }}
              >
                <Home></Home>
              </IconButton>
              <Button
                component={HashLink}
                smooth
                to="#intro"
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
                Intro
              </Button>
              <Button
                component={HashLink}
                smooth
                to="#aboutme"
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
                About Me
              </Button>
              <Button
                component={HashLink}
                smooth
                to="#skills"
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
                Skills
              </Button>
              <Button
                component={HashLink}
                smooth
                to="#projects"
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
                Projects
              </Button>
              <Button
                component={HashLink}
                smooth
                to="#contact"
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
                Contact
              </Button>
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
              href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:8ea3e6ce-2ffc-3f31-a872-dfa9d6aac50e"
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
    </BrowserRouter>
  );
};

export default Main;
