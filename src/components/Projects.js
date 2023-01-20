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
} from "@mui/material";
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
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h1" align="center" margin={10}>
                Projects
              </Typography>
              <Stack direction="row" spacing={5}>
                <Card sx={{ width: 375 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    component="img"
                    image="https://picsum.photos/400/300"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Project #1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Cupcake ipsum dolor sit amet. Wafer apple pie cake halvah
                      tiramisu. Marzipan marshmallow pie muffin sweet roll
                      fruitcake donut.
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                  <Button size="small">Share</Button>
                </CardActions> */}
                </Card>
                <Card sx={{ width: 375 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    component="img"
                    image="https://picsum.photos/400/300"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Project #2
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Cupcake ipsum dolor sit amet. Wafer apple pie cake halvah
                      tiramisu. Marzipan marshmallow pie muffin sweet roll
                      fruitcake donut.
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ width: 375 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    component="img"
                    image="https://picsum.photos/400/300"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Project #3
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Cupcake ipsum dolor sit amet. Wafer apple pie cake halvah
                      tiramisu. Marzipan marshmallow pie muffin sweet roll
                      fruitcake donut.
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Box>
        </motion.div>
      </section>
    </>
  );
};

export default Projects;
