import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Typography, Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

const Projects = () => {
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
      <section id="projects">
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <Box height="100vh" width="100vw" display="flex">
            <Typography variant="h1" align="center" margin={10}>
              Projects
            </Typography>
            <Typography variant="h5" align="center" margin={10}>
              XYZ
            </Typography>
          </Box>
        </motion.div>
      </section>
    </>
  );
};

export default Projects;
