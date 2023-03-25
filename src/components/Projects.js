import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Typography,
  Box,
  Grid,
  Stack,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
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

  const projectList = [
    {
      name: "Portfolio Website",
      description:
        "My portfolio website that you're currently interacting with was made with React, Material UI, and Framer Motion.",
      imageURL:
        "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
      gitHub: "https://github.com/shoshana-levitt/PortfolioWebsite",
    },
    {
      name: "augmentEd♫⁺",
      description:
        "Peer-to-peer music education software designed for people who want to learn and teach music. Users can craft lessons using an editable musical staff, view the lessons created by other users, and play a virtual piano using their computer's keyboard.",
      imageURL:
        "https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      gitHub: "https://github.com/GHP-Team-C/Capstone",
      hostedLink: "https://augmented.onrender.com",
    },
    {
      name: "Grace Shopper",
      description:
        "E-Commerce site where users can purchase puppy playdates! A persistent cart securely is maintained in the back-end database for logged-in users.",
      imageURL:
        "https://images.unsplash.com/photo-1535909339361-ef56e179d637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      gitHub: "https://github.com/shoshana-levitt/EcommerceSite",
      hostedLink: "https://grace-shopper-1krt.onrender.com",
    },
  ];

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
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h2" align="center" margin={3}>
                Projects
              </Typography>
              <Stack direction="row" spacing={5}>
                {projectList.map((project) => (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Card
                      sx={{ width: 375 }}
                      style={{ backgroundColor: "rgba(254, 253, 253, 0.3)" }}
                    >
                      <CardMedia
                        sx={{ height: 200 }}
                        component="img"
                        image={project.imageURL}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          color="primary"
                        >
                          {project.name}
                        </Typography>
                        <Typography variant="body2" color="primary">
                          {project.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <IconButton
                          href={project.gitHub}
                          target="_blank"
                          disableRipple
                          color="primary"
                          sx={{ m: 1, ":hover": { color: "#cfcfcf" } }}
                        >
                          <GitHub></GitHub>
                        </IconButton>
                        {project.hostedLink && (
                          <IconButton
                            href={project.hostedLink}
                            target="_blank"
                            disableRipple
                            color="primary"
                            sx={{ m: 1, ":hover": { color: "#cfcfcf" } }}
                          >
                            <Launch></Launch>
                          </IconButton>
                        )}
                      </CardActions>
                    </Card>
                  </motion.div>
                ))}

                {/* <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Card
                    sx={{ width: 375 }}
                    style={{ backgroundColor: "rgba(254, 253, 253, 0.3)" }}
                  >
                    <CardMedia
                      sx={{ height: 200 }}
                      component="img"
                      image="https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="primary"
                      >
                        augmentEd♫⁺
                      </Typography>
                      <Typography variant="body2" color="primary">
                        Peer-to-peer music education software designed for
                        people who want to learn and teach music. Users can
                        craft lessons using an editable musical staff, view the
                        lessons created by other users, and play a virtual piano
                        using their computer's keyboard.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton
                        href="https://github.com/GHP-Team-C/Capstone"
                        target="_blank"
                        disableRipple
                        color="primary"
                        sx={{ m: 1, ":hover": { color: "#cfcfcf" } }}
                      >
                        <GitHub></GitHub>
                      </IconButton>
                      <IconButton
                        href="https://augmented.onrender.com/"
                        target="_blank"
                        disableRipple
                        color="primary"
                        sx={{ m: 1, ":hover": { color: "#cfcfcf" } }}
                      >
                        <Launch></Launch>
                      </IconButton>
                    </CardActions>
                  </Card>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Card
                    sx={{ width: 375 }}
                    style={{ backgroundColor: "rgba(254, 253, 253, 0.3)" }}
                  >
                    <CardMedia
                      sx={{ height: 200 }}
                      component="img"
                      image="https://images.unsplash.com/photo-1535909339361-ef56e179d637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="primary"
                      >
                        Grace Shopper
                      </Typography>
                      <Typography variant="body2" color="primary">
                        E-Commerce site where users can purchase puppy
                        playdates! A persistent cart securely is maintained in
                        the back-end database for logged-in users.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton
                        href="https://github.com/shoshana-levitt/EcommerceSite"
                        target="_blank"
                        disableRipple
                        color="primary"
                        sx={{ m: 1, ":hover": { color: "#cfcfcf" } }}
                      >
                        <GitHub></GitHub>
                      </IconButton>
                      <IconButton
                        href="https://grace-shopper-1krt.onrender.com"
                        target="_blank"
                        disableRipple
                        color="primary"
                        sx={{ m: 1, ":hover": { color: "#cfcfcf" } }}
                      >
                        <Launch></Launch>
                      </IconButton>
                    </CardActions>
                  </Card>
                </motion.div> */}
              </Stack>
            </Grid>
          </Box>
        </motion.div>
      </section>
    </>
  );
};

export default Projects;
