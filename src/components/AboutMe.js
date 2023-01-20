import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Typography, Box, Grid } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

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
              <Typography variant="h1" align="center" margin={10}>
                About Me
              </Typography>
              <Typography variant="h5" align="center" margin={10}>
                Cupcake ipsum dolor sit amet. Wafer apple pie cake halvah
                tiramisu. Marzipan marshmallow pie muffin sweet roll fruitcake
                donut. I love carrot cake ice cream apple pie I love lollipop
                jelly beans tiramisu. Pudding soufflé cookie halvah tootsie roll
                I love. Tiramisu cookie danish I love I love I love pie. I love
                cake candy pastry I love jelly beans. Marshmallow jelly brownie
                candy canes marshmallow icing. <br></br>
                Soufflé biscuit sweet roll oat cake jelly-o. Cheesecake tootsie
                roll jelly shortbread I love wafer. Pie gingerbread halvah sweet
                roll croissant chupa chups tiramisu. Sugar plum tiramisu soufflé
                fruitcake topping pie I love candy canes cheesecake. I love
                tootsie roll sesame snaps I love liquorice cake. Caramels bonbon
                tootsie roll caramels bonbon. I love jelly muffin pie candy
                biscuit. Gummi bears carrot cake cheesecake dragée pastry halvah
                I love. Dessert pastry powder sweet topping. Wafer donut carrot
                cake brownie dessert sugar plum gummies macaroon.
              </Typography>
            </Grid>
          </Box>
        </motion.div>
      </section>
    </>
  );
};

export default AboutMe;
