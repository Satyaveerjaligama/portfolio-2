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
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

const ExperienceCard = () => {
  return (
    <div id="Experience" style={{ marginTop: "75px" }} className="experienceMain">
      <Typography variant="h4" className="workExperienceTitle">
        Work Experience
      </Typography>
      <div className="experienceCard">
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography className="font-young-serif">Frontend Developer</Typography>
              <Typography className="font-signika-negative">(Full time)</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className="companyName">Zuno General Insurance</Typography>
              <Typography className="experienceDuration">Aug 2022 - Present</Typography>
              <Typography className="companySkills">HTML | CSS | JavaScript | TypeScript | React JS | Next JS</Typography>
              <ul>
                <li className="workDescription">
                    Added new functionalities in the existing Zuno Health product. Developed the frontend part for another 2 products of Zuno Health Team.
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography className="font-young-serif">Quality Assurance Engineer</Typography>
              <Typography className="font-signika-negative">(Internship)</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <LaptopMacIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Typography className="companyName">Vocera Communications</Typography>
              <Typography className="experienceDuration">Sept 2021 - July 2022</Typography>
              <Typography className="companySkills">Python | Selenium | Applitools</Typography>
              <ul>
                <li className="workDescription">
                    Automated 350+ manual testcases using Selenium, Python and Applitools.
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default ExperienceCard;
