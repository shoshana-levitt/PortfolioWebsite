import React from "react";
import Homepage from "./Homepage";
import Info from "./Info";
import Test from "./Test";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Button, AppBar, Toolbar } from "@mui/material";
/*</Box>
    This is you entry point for your routes
*/
const Main = () => {
  return (
    <BrowserRouter>
      <div>
        <AppBar position="static">
          <Toolbar sx={{ p: -1 }}>
            <Button href="/" color="secondary" variant="outlined" sx={{ m: 1 }}>
              Home
            </Button>
            <Button
              href="/info"
              color="secondary"
              variant="outlined"
              sx={{ m: 1 }}
            >
              Info
            </Button>
            <Button
              href="/test"
              color="secondary"
              variant="outlined"
              sx={{ m: 1 }}
            >
              Test
            </Button>
          </Toolbar>
        </AppBar>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/info" element={<Info />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default Main;
