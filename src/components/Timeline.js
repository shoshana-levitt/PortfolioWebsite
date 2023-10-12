import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Timeline = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="basic tabs example"
        >
          <Tab label="Media Studies at NYU" {...a11yProps(0)} />
          <Tab
            label="Account Management and Customer Success"
            {...a11yProps(1)}
          />
          <Tab label="Software Engineering Bootcamp" {...a11yProps(2)} />
          <Tab label="Me Today" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        2018 • New York University - B.S. Media, Culture, & Communication{" "}
        <br></br>
        <br></br>
        My academic journey at New York University provided a robust foundation
        for my career in technology. My Bachelor of Science in Media, Culture,
        and Communication (Steinhardt School of Culture, Education, and Human
        Development) equipped me with the essential tools to dissect the
        sociological, political, and cultural dimensions of our media landscape.
        <br></br>
        <br></br>
        My concentrations in Images and Screen Studies and Technology and
        Society provided me with a deep understanding of the intersection of
        media and culture. Understanding how technology shapes our world has
        been paramount to informing my approach to user-centric design in
        software development.
        <br></br>
        <br></br>
        Complementing my major, the Business of Entertainment, Media, and
        Technology minor in collaboration with the Stern School of Business and
        the Tisch School of the Arts provided me with a foundation in the
        business facets of media and entertainment. This prepared me to navigate
        the dynamic landscape of modern tech-driven businesses.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        2018 - 2020 • Account Manager at BetterHealthcare
        <br></br>
        2020 - 2022 • Senior Member Experience Specialist at Current
        <br></br>
        <br></br>
        My past client-facing roles, for both B2B and B2C products, allowed me
        to develop a unique perspective on how products can be improved to
        better serve the needs of the end user. My experience has also allowed
        me to hone my ability to collaborate with cross-functional teams and
        communicate effectively with both engineering and non-engineering
        stakeholders.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        2023 • The Grace Hopper Program at Fullstack Academy
        <br></br>
        <br></br>
        Through my software engineering training in an accelerated bootcamp, I
        gained proficiency in Javascript and the PERN stack. I developed
        applications both solo and in teams, using Git and agile project
        management.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        My unconventional background has uniquely enriched my approach to
        software development. I believe that the most impactful products are not
        just about excellent code and design; but also must be experiences
        crafted to resonate with users on both a personal and societal level.
      </CustomTabPanel>
    </Box>
  );
};

export default Timeline;
