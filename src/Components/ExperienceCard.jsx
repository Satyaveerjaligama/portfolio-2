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
    <div id="Experience" className="experienceMain">
      <Typography variant="h6" className="workExperienceTitle">
        Work Experience
      </Typography>
      <div className="experienceCard">
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent className="company-details">
              <Typography className="font-size-small font-young-serif">Frontend Developer</Typography>
              <Typography className="font-size-small font-signika-negative">(Full time)</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="companyInformation">
              <Typography className="font-size-small font-young-serif">Zuno General Insurance</Typography>
              <Typography className="font-size-small experienceDuration">Aug 2022 - Present</Typography>
              <ul>
                <li className="font-size-small workDescription">
                    My responsibility at Zuno is to create the Frontend for the web applications based on the Business requirements.
                </li>
                <li className="font-size-small workDescription">
                    I had an opportunity to work with technologies/languages like JavaScript, TypeScript, React JS, Next JS, Vite JS, Redux Toolkit, CSS, Sass, Material UI and Docker.
                    Integration of REST APIs with the frontend using axios.
                </li>
                <li className="font-size-small workDescription">
                    For the contribution that I have done to the company and team, I was awarded with the title &quot;Popper&quot; (Surprise Achiever)
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className="company-details">
              <Typography className="font-size-small font-young-serif">Quality Assurance Engineer</Typography>
              <Typography className="font-size-small font-signika-negative">(Internship)</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <LaptopMacIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent className="companyInformation">
              <Typography className="font-size-small font-young-serif">Vocera Communications</Typography>
              <Typography className="font-size-small experienceDuration">Sept 2021 - July 2022 (Python | Selenium | Applitools)</Typography>
              {/* <Typography className="font-size-small companySkills">Python | Selenium | Applitools</Typography> */}
              {/* <ul>
                <li className="font-size-small workDescription">
                    Automated 350+ manual testcases using Selenium, Python and Applitools.
                </li>
              </ul> */}
              <ul>
                  <li className="font-size-small workDescription">My responsibility was to write the Python with Selenium code in order to automate the manual testcases.</li>
                  <li className="font-size-small workDescription">I have written most of the automation code for textcases related to company&apos;s gadget (Vocera badge) then after a
                      couple of testcases related to Mobile application and web application.</li>
              </ul>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default ExperienceCard;
