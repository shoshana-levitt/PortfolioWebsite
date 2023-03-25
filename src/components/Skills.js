import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Typography,
  Box,
  Grid,
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Chip,
} from "@mui/material";
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

  const frontEndSkills = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Redux",
    "MaterialUI",
    "Framer Motion",
    "VexFlow",
  ];

  const backEndSkills = ["NodeJS", "PostgreSQL", "Sequelize", "Express"];

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
              <Typography variant="h2" align="center" margin={3}>
                Skills
              </Typography>
              <Typography variant="h5" align="center" margin={3}>
                I'm trained in JavaScript and developing full-stack applications
                using the PERN stack.<br></br>I'm always looking to build new
                skills and expand my tech stack.
              </Typography>
              <Stack
                direction="column"
                spacing={2}
                align="center"
                alignItems="center"
              >
                <Stack direction="row" spacing={2}>
                  {frontEndSkills.map((skill) => (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Chip
                        label={skill}
                        variant="outlined"
                        color="primary"
                        style={{ backgroundColor: "rgba(254, 253, 253, 0.2)" }}
                      />
                    </motion.div>
                  ))}
                </Stack>
                <Stack direction="row" spacing={2}>
                  {backEndSkills.map((skill) => (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Chip
                        label={skill}
                        variant="outlined"
                        color="primary"
                        style={{ backgroundColor: "rgba(254, 253, 253, 0.2)" }}
                      />
                    </motion.div>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Box>
        </motion.div>
      </section>
    </>
  );
};

export default Skills;
