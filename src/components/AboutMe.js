import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Typography, Box, Grid, Avatar, Stack } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
// import headshot from "../media/headshot.jpg";

const AboutMe = () => {
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
      <section id="aboutme">
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
              <Typography variant="h2" align="center" margin={3}>
                About Me
              </Typography>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                margin={10}
              >
                <Avatar
                  alt="Shoshana Levitt"
                  // src={headshot}
                  src="https://images.unsplash.com/photo-1577909659949-2302826adf26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  sx={{ width: 300, height: 300 }}
                />
                <Typography variant="h5" align="center" margin={3}>
                  Hello! I’m Shoshana, a full-stack software engineer based in
                  New York City. I specialize in front-end development and
                  creating clean, intuitive interfaces. I'm passionate about
                  delivering exceptional user experiences.
                </Typography>
              </Stack>
            </Grid>
          </Box>
        </motion.div>
      </section>
    </>
  );
};

export default AboutMe;
