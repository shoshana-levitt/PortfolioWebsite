import React from "react";
import { Link } from "react-scroll";
import Homepage from "./Homepage";
import Info from "./Info";
import Test from "./Test";
import Animations from "./Animations";
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
            <Button href="/info" color="secondary" variant="text" sx={{ m: 1 }}>
              Info
            </Button>
            <Button href="/test" color="secondary" variant="text" sx={{ m: 1 }}>
              Test
            </Button>
            <Button
              // component={Link}
              // to="/animations"
              // spy={true}
              // smooth={true}
              // offset={50}
              // duration={500}
              href="/animations"
              color="secondary"
              variant="text"
              sx={{ m: 1 }}
            >
              Animations
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar></Toolbar>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/info" element={<Info />} />
            <Route path="/test" element={<Test />} />
            <Route path="/animations" element={<Animations />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default Main;
