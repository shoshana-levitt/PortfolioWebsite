import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Typography,
  Box,
  Grid,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import { Javascript, Html, Css } from "@mui/icons-material";
import { motion, useAnimation } from "framer-motion";

const Skills = () => {
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
      <section id="skills">
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
                Skills
              </Typography>
              <Typography variant="h5" align="center" margin={10}>
                Cupcake ipsum dolor sit amet. Wafer apple pie cake halvah
                tiramisu. Marzipan marshmallow pie muffin sweet roll fruitcake
                donut. I love carrot cake ice cream apple pie I love lollipop
                jelly beans tiramisu. Pudding soufflé cookie halvah tootsie roll
                I love. Tiramisu cookie danish I love I love I love pie. I love
                cake candy pastry I love jelly beans. Marshmallow jelly brownie
                candy canes marshmallow icing.
              </Typography>
              <Stack direction="row" spacing={2}>
                <IconButton
                  href="/"
                  disableRipple
                  sx={{ ":hover": { color: "#5499C7" } }}
                >
                  <Javascript sx={{ fontSize: 50 }}></Javascript>
                </IconButton>
                <IconButton
                  href="/"
                  disableRipple
                  sx={{ ":hover": { color: "#5499C7" } }}
                >
                  <Html sx={{ fontSize: 50 }}></Html>
                </IconButton>
                <IconButton
                  href="/"
                  disableRipple
                  sx={{ ":hover": { color: "#5499C7" } }}
                >
                  <Css sx={{ fontSize: 50 }}></Css>
                </IconButton>
              </Stack>
            </Grid>
          </Box>
        </motion.div>
      </section>
    </>
  );
};

export default Skills;
