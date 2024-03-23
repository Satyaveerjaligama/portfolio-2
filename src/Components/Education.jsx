import { Typography } from "@mui/material";
import "../Styles/ExperienceCard.css";
import "../Styles/Education.css";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";

const Education = () => {
  return (
    <div id="Education" className="educationMain">
      <Typography variant="h6" className="educationTitle font-young-serif text-decoration-underline">
        Education
      </Typography>
      <div className="educationCard">
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent className="degree-name">
              <Typography className="font-size-small font-young-serif">M.Tech Integrated in Software Engineering</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className="font-size-small font-young-serif">Vellore Institute Of Technology, Vellore (VIT University)</Typography>
              <Typography className="font-size-small font-signika-negative">2017 - 2022</Typography>
              <Typography className="font-size-small font-signika-negative">CGPA - 8.72 / 10</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className="degree-name">
              <Typography className="font-size-small font-young-serif">Intermediate (11<sup>th</sup>,12<sup>th</sup>)</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className="font-size-small font-young-serif">Sri Gayatri Educational Institution, Hyderabad</Typography>
              <Typography className="font-size-small font-signika-negative">2015 - 2017</Typography>
              <Typography className="font-size-small font-signika-negative">Percentage - 95.2</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className="degree-name">
              <Typography className="font-size-small font-young-serif">10<sup>th</sup></Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot/>
            </TimelineSeparator>
            <TimelineContent>
              <Typography className="font-size-small font-young-serif">Sri Chaitanya Educational Institution, Hyderabad</Typography>
              <Typography className="font-size-small font-signika-negative">2014 - 2015</Typography>
              <Typography className="font-size-small font-signika-negative">GPA - 8.5 / 10</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Education;
