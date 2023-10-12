import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Typography, Box, Grid, Avatar, Stack, Link } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import Timeline from "./Timeline";

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
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                margin={10}
              >
                <Avatar
                  alt="Shoshana Levitt"
                  src="/media/headshot.jpg"
                  sx={{ width: 300, height: 300 }}
                />
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={5}
                  margin={10}
                >
                  <Typography variant="h2" align="center" margin={3}>
                    Hi, I'm Shoshana Levitt.
                  </Typography>
                  <Typography variant="h5" align="center" margin={3}>
                    I’m Shoshana, a full-stack software engineer based in New
                    York City. I specialize in front-end development and
                    creating clean, intuitive interfaces. I'm passionate about
                    delivering exceptional user experiences. <br></br>
                  </Typography>
                  <Typography variant="h5" align="center" margin={3}>
                    I'm currently seeking a full-time opportunity as a
                    full-stack or front-end developer.
                  </Typography>

                  <Typography
                    variant="h6"
                    align="center"
                    margin={3}
                    sx={{ fontStyle: "italic" }}
                  >
                    Graduate of{" "}
                    <Link href="https://www.gracehopper.com/" target="_blank">
                      The Grace Hopper Program at Fullstack Academy
                    </Link>{" "}
                    (February 2023)
                  </Typography>
                  <Timeline />
                </Stack>
              </Stack>
            </Grid>
          </Box>
        </motion.div>
      </section>
    </>
  );
};

export default AboutMe;
