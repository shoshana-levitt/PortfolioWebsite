import React from "react";
import { HashLink } from "react-router-hash-link";
import { Typography } from "@mui/material";

const Animations = () => {
  return (
    <>
      <div>
        <HashLink smooth to="/#home">
          Home
        </HashLink>
        <HashLink smooth to="/#services">
          Services
        </HashLink>
        <HashLink smooth to="/#testimonial">
          Testimonial
        </HashLink>
      </div>
      <div>
        <section id="home">
          <h1> Home </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nam!
            Iure officia aut esse tempore accusantium explicabo? Corporis
            deleniti ipsa fuga quas aut neque dicta nostrum laboriosam, iusto
            ullam minima est porro, totam saepe. Facilis aliquid praesentium,
            voluptates rem quibusdam sequi numquam illo eius adipisci eaque,
            necessitatibus consectetur, labore vero et ipsum. Officiis, ea vero.
            Praesentium, et. Enim, nostrum illo.
          </p>
        </section>
        <section id="services">
          <h1> Services </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nam!
            Iure officia aut esse tempore accusantium explicabo? Corporis
            deleniti ipsa fuga quas aut neque dicta nostrum laboriosam, iusto
            ullam minima est porro, totam saepe. Facilis aliquid praesentium,
            voluptates rem quibusdam sequi numquam illo eius adipisci eaque,
            necessitatibus consectetur, labore vero et ipsum. Officiis, ea vero.
            Praesentium, et. Enim, nostrum illo.
          </p>
        </section>
        <section id="testimonial">
          <h1> Testimonial </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nam!
            Iure officia aut esse tempore accusantium explicabo? Corporis
            deleniti ipsa fuga quas aut neque dicta nostrum laboriosam, iusto
            ullam minima est porro, totam saepe. Facilis aliquid praesentium,
            voluptates rem quibusdam sequi numquam illo eius adipisci eaque,
            necessitatibus consectetur, labore vero et ipsum. Officiis, ea vero.
            Praesentium, et. Enim, nostrum illo.
          </p>
        </section>
      </div>
    </>

    //
    // <div>
    //   <HashLink smooth to="/#aboutme">
    //     About Me
    //   </HashLink>
    //   <section id="aboutme">
    //     <Typography variant="h1" align="center" margin={10}>
    //       Hi, my name is Shoshana Levitt.
    //     </Typography>
    //     <Typography variant="h4" align="center" margin={10}>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum.
    //     </Typography>
    //   </section>
    // </div>
  );
};

export default Animations;
