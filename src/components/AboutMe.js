import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Typography, Box, Grid, Avatar, Stack } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import TimelineComponent from "./Timeline";

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
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                margin={10}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  key={2}
                >
                  <Avatar
                    alt="Shoshana Levitt"
                    src="/media/headshot.jpg"
                    sx={{ width: 200, height: 200 }}
                  />
                </motion.div>
                <Typography variant="h3" align="center" margin={3}>
                  Hi, I'm Shoshana Levitt.
                </Typography>
                <Typography variant="h5" align="center" margin={3}>
                  I'm a full-stack software engineer based in NYC. My
                  unconventional background has uniquely enriched my approach to
                  software development. I believe that the most impactful
                  products are not just about excellent code and design; but
                  also must be experiences crafted to resonate with users on a
                  personal level. Here's my story...
                </Typography>
                <TimelineComponent />
              </Stack>
            </Grid>
          </Box>
        </motion.div>
      </section>
    </>
  );
};

export default AboutMe;
