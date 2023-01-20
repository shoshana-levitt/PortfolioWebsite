import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Typography, Box, Grid, Button } from "@mui/material";
import { Mail } from "@mui/icons-material";
import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
    hidden: { opacity: 0, scale: 1, x: -200 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <>
      <section id="contact">
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <Box height="100vh" width="100vw" display="flex">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h1" align="center" margin={10}>
                Let's Connect!
              </Typography>
              <Typography variant="h5" align="center" margin={10}>
                Looking for someone to collaborate with, or just want to chat?
              </Typography>
              <Button
                startIcon={<Mail />}
                href="mailto:shoshana.levitt@gmail.com"
                color="grey"
                variant="contained"
                disableRipple
                sx={{
                  m: 1,
                  ":hover": {
                    backgroundColor: "transparent",
                    color: "#5499C7",
                  },
                }}
              >
                Email Me
              </Button>
            </Grid>
          </Box>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
