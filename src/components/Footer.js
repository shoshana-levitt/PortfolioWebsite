import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <footer
        style={{ position: "fixed", bottom: 0 }}
        sx={{ backdropFilter: "blur(20px)" }}
      >
        <Typography variant="caption" align="center" margin={1}>
          © 2024 Shoshana Levitt
        </Typography>
      </footer>
    </>
  );
};

export default Footer;
