import React from "react";
import { Typography, Link, Card, CardContent, Box } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { motion } from "framer-motion";

const TimelineComponent = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.4,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="h6">
            Media Studies at New York University
          </Typography>
          <Typography variant="subtitle2" sx={{ fontStyle: "italic" }}>
            2018 • B.S. Media, Culture, & Communication
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            key={1}
          >
            <Card style={{ backgroundColor: "rgba(254, 253, 253, 0.1)" }}>
              <CardContent>
                <Typography variant="subtitle2" color="primary">
                  My academic journey at NYU provided a robust foundation for my
                  career in technology. My degree from the Steinhardt School
                  equipped me with the essential tools to dissect the
                  sociological, political, and cultural dimensions of our media
                  landscape.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="h6">
            Account Management + Customer Success
          </Typography>
          <Typography variant="subtitle2" sx={{ fontStyle: "italic" }}>
            2018 - 2020 • Account Manager at{" "}
            <Link href="https://www.betterhealthcare.co/" target="_blank">
              BetterHealthcare
            </Link>
            <br></br>
            2020 - 2022 • Senior Member Experience Specialist at{" "}
            <Link href="https://current.com/" target="_blank">
              Current
            </Link>
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            key={2}
          >
            <Card style={{ backgroundColor: "rgba(254, 253, 253, 0.1)" }}>
              <CardContent>
                <Typography variant="subtitle2" color="primary">
                  In my client-facing roles, for both B2B and B2C products, I
                  developed a unique perspective on how products can be improved
                  to better serve the needs of the end user. I honed my ability
                  to collaborate with cross-functional teams and communicate
                  effectively with both engineering and non-engineering
                  stakeholders.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="h6">Software Engineering</Typography>
          <Typography variant="subtitle2" sx={{ fontStyle: "italic" }}>
            2023 •{" "}
            <Link href="https://www.gracehopper.com/" target="_blank">
              The Grace Hopper Program at Fullstack Academy
            </Link>
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            key={3}
          >
            <Card style={{ backgroundColor: "rgba(254, 253, 253, 0.1)" }}>
              <CardContent>
                <Typography variant="subtitle2" color="primary">
                  Through my training in an accelerated bootcamp, I gained
                  proficiency in Javascript and the PERN stack. I developed
                  applications both solo and in teams, using Git and agile
                  project management.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineComponent;
