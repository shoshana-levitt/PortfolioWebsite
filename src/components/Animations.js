import React from "react";
import { HashLink } from "react-router-hash-link";
import { Typography, Box } from "@mui/material";

const Animations = () => {
  return (
    <>
      <HashLink smooth to="#intro">
        Intro
      </HashLink>
      <HashLink smooth to="#aboutme">
        About Me
      </HashLink>
      <HashLink smooth to="#projects">
        Projects
      </HashLink>
      <section id="info">
        <Box height="100vh" display="flex">
          <Typography variant="h1" align="center" margin={10}>
            Info
          </Typography>
          <Typography variant="h5" align="center" margin={10}>
            Cupcake ipsum dolor sit amet. Wafer apple pie cake halvah tiramisu.
            Marzipan marshmallow pie muffin sweet roll fruitcake donut. I love
            carrot cake ice cream apple pie I love lollipop jelly beans
            tiramisu. Pudding soufflé cookie halvah tootsie roll I love.
            Tiramisu cookie danish I love I love I love pie. I love cake candy
            pastry I love jelly beans. Marshmallow jelly brownie candy canes
            marshmallow icing. <br></br>
            Soufflé biscuit sweet roll oat cake jelly-o. Cheesecake tootsie roll
            jelly shortbread I love wafer. Pie gingerbread halvah sweet roll
            croissant chupa chups tiramisu. Sugar plum tiramisu soufflé
            fruitcake topping pie I love candy canes cheesecake. I love tootsie
            roll sesame snaps I love liquorice cake. Caramels bonbon tootsie
            roll caramels bonbon. I love jelly muffin pie candy biscuit. Gummi
            bears carrot cake cheesecake dragée pastry halvah I love. Dessert
            pastry powder sweet topping. Wafer donut carrot cake brownie dessert
            sugar plum gummies macaroon. <br></br>
            Chocolate bar pie I love liquorice jelly beans toffee. Powder jelly
            gingerbread brownie biscuit cake. Cake sweet roll caramels fruitcake
            I love shortbread brownie cheesecake. Toffee danish tart soufflé pie
            sugar plum. Lemon drops jelly-o apple pie gingerbread biscuit candy
            cupcake. Chupa chups I love jelly beans cheesecake apple pie lemon
            drops ice cream.
          </Typography>
        </Box>
      </section>
      <section id="aboutme">
        <Box height="100vh" display="flex">
          <Typography variant="h1" align="center" margin={10}>
            About Me
          </Typography>
          <Typography variant="h5" align="center" margin={10}>
            Cupcake ipsum dolor sit amet. Wafer apple pie cake halvah tiramisu.
            Marzipan marshmallow pie muffin sweet roll fruitcake donut. I love
            carrot cake ice cream apple pie I love lollipop jelly beans
            tiramisu. Pudding soufflé cookie halvah tootsie roll I love.
            Tiramisu cookie danish I love I love I love pie. I love cake candy
            pastry I love jelly beans. Marshmallow jelly brownie candy canes
            marshmallow icing. <br></br>
            Soufflé biscuit sweet roll oat cake jelly-o. Cheesecake tootsie roll
            jelly shortbread I love wafer. Pie gingerbread halvah sweet roll
            croissant chupa chups tiramisu. Sugar plum tiramisu soufflé
            fruitcake topping pie I love candy canes cheesecake. I love tootsie
            roll sesame snaps I love liquorice cake. Caramels bonbon tootsie
            roll caramels bonbon. I love jelly muffin pie candy biscuit. Gummi
            bears carrot cake cheesecake dragée pastry halvah I love. Dessert
            pastry powder sweet topping. Wafer donut carrot cake brownie dessert
            sugar plum gummies macaroon. <br></br>
            Chocolate bar pie I love liquorice jelly beans toffee. Powder jelly
            gingerbread brownie biscuit cake. Cake sweet roll caramels fruitcake
            I love shortbread brownie cheesecake. Toffee danish tart soufflé pie
            sugar plum. Lemon drops jelly-o apple pie gingerbread biscuit candy
            cupcake. Chupa chups I love jelly beans cheesecake apple pie lemon
            drops ice cream.
          </Typography>
        </Box>
      </section>
      <section id="projects">
        <Box height="100vh" display="flex">
          <Typography variant="h1" align="center" margin={10}>
            Projects
          </Typography>
          <Typography variant="h5" align="center" margin={10}>
            Cupcake ipsum dolor sit amet. Wafer apple pie cake halvah tiramisu.
            Marzipan marshmallow pie muffin sweet roll fruitcake donut. I love
            carrot cake ice cream apple pie I love lollipop jelly beans
            tiramisu. Pudding soufflé cookie halvah tootsie roll I love.
            Tiramisu cookie danish I love I love I love pie. I love cake candy
            pastry I love jelly beans. Marshmallow jelly brownie candy canes
            marshmallow icing. <br></br>
            Soufflé biscuit sweet roll oat cake jelly-o. Cheesecake tootsie roll
            jelly shortbread I love wafer. Pie gingerbread halvah sweet roll
            croissant chupa chups tiramisu. Sugar plum tiramisu soufflé
            fruitcake topping pie I love candy canes cheesecake. I love tootsie
            roll sesame snaps I love liquorice cake. Caramels bonbon tootsie
            roll caramels bonbon. I love jelly muffin pie candy biscuit. Gummi
            bears carrot cake cheesecake dragée pastry halvah I love. Dessert
            pastry powder sweet topping. Wafer donut carrot cake brownie dessert
            sugar plum gummies macaroon. <br></br>
            Chocolate bar pie I love liquorice jelly beans toffee. Powder jelly
            gingerbread brownie biscuit cake. Cake sweet roll caramels fruitcake
            I love shortbread brownie cheesecake. Toffee danish tart soufflé pie
            sugar plum. Lemon drops jelly-o apple pie gingerbread biscuit candy
            cupcake. Chupa chups I love jelly beans cheesecake apple pie lemon
            drops ice cream.
          </Typography>
        </Box>
      </section>
    </>
  );
};

export default Animations;
