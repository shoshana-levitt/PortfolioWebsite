import React from "react";
import { Link } from "react-scroll";
import Homepage from "./Homepage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Button, AppBar, Toolbar } from "@mui/material";
/*</Box>
    This is you entry point for your routes
*/
const Main = () => {
  return (
    <BrowserRouter>
      <div>
        <AppBar position="fixed">
          <Toolbar sx={{ p: -1 }}>
            <Button href="/" color="secondary" variant="text" sx={{ m: 1 }}>
              Home
            </Button>
            <Button
              component={HashLink}
              smooth
              to="#aboutme"
              color="secondary"
              variant="text"
              sx={{ m: 1 }}
            >
              About Me
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
