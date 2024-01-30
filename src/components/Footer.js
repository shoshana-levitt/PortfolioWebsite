import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  console.log(year);
  return (
    <>
      <footer
        style={{ position: "fixed", bottom: 0 }}
        sx={{ backdropFilter: "blur(20px)" }}
      >
        <Typography variant="caption" align="center" margin={1}>
          © {year} Shoshana Levitt
        </Typography>
      </footer>
    </>
  );
};

export default Footer;
