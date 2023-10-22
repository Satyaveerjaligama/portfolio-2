import { Typography } from "@mui/material";
import "../Styles/ExperienceCard.css";
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
    <div id="Education" style={{ marginTop: "75px" }} className="educationMain">
      <Typography variant="h4" className="educationTitle font-young-serif">
        Education
      </Typography>
      <div className="educationCard">
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography className="degreeName font-young-serif">M.Tech Integrated Software Engineering</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className="font-signika-negative font-size-20 text-decoration-underline">Vellore Institute Of Technology, Vellore (VIT University)</Typography>
              <Typography className="font-signika-negative">2017 - 2022</Typography>
              <Typography className="font-signika-negative">CGPA - 8.72</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography className="font-young-serif">Intermediate (11<sup>th</sup>, 12<sup>th</sup>)</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className="font-signika-negative font-size-20 text-decoration-underline">Sri Gayatri Educational Institution, Hyderabad</Typography>
              <Typography className="font-signika-negative">2015 - 2017</Typography>
              <Typography className="font-signika-negative">Percentage - 95.2</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography className="font-young-serif">10<sup>th</sup></Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot/>
            </TimelineSeparator>
            <TimelineContent>
              <Typography className="font-signika-negative font-size-20 text-decoration-underline">Sri Chaitanya Educational Institution, Hyderabad</Typography>
              <Typography className="font-signika-negative">2014 - 2015</Typography>
              <Typography className="font-signika-negative">GPA - 8.5</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Education;
