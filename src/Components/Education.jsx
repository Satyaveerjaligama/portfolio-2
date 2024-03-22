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
  const educationInfo = [
    {
      degree: "M.Tech Integrated in Software Engineering",
      college: "Vellore Institute Of Technology, Vellore",
      courseTenure: "2017 - 2022",
      score: "CGPA - 8.72"
    },
    {
      degree: "Intermediate (11th, 12th)",
      college: "Sri Gayatri Educational Institution, Hyderabad",
      courseTenure: "2015 - 2017",
      score: "Percentage - 95.2"
    },
    {
      degree: "10th",
      college: "Sri Chaitanya Educational Institution, Hyderabad",
      courseTenure: "2014 - 2015",
      score: "GPA - 8.5"
    },
  ]

  return (
    <div id="Education" className="educationMain">
      <Typography variant="h4" className="educationTitle font-young-serif">
        Education
      </Typography>
      <div className="educationCard">
        <Timeline>
          { educationInfo.map((education, index)=>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography className="font-young-serif">{education.degree}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                { educationInfo.length !== index+1 && <TimelineConnector /> }
              </TimelineSeparator>
              <TimelineContent>
                <Typography className="font-young-serif">{education.college}</Typography>
                <Typography className="font-signika-negative">{education.courseTenure}</Typography>
                <Typography className="font-signika-negative">{education.score}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
        </Timeline>
      </div>
    </div>
  );
};

export default Education;
