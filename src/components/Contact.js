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
              <Typography variant="h2" align="center" margin={3}>
                Let's Connect!
              </Typography>
              <Typography variant="h5" align="center" margin={3}>
                Looking for someone to collaborate with, or just want to chat?
              </Typography>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  startIcon={<Mail />}
                  href="mailto:shoshana.levitt@gmail.com"
                  color="primary"
                  variant="outlined"
                  disableRipple
                  sx={{
                    m: 1,
                    ":hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  style={{ backgroundColor: "rgba(254, 253, 253, 0.2)" }}
                >
                  Email Me
                </Button>
              </motion.div>
            </Grid>
          </Box>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
