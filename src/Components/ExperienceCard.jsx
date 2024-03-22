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
  const experienceInfo = [
    {
      role: "Frontend Developer",
      employmentType: "Full time",
      companyName: "Zuno General Insurance",
      tenure: "Aug 2022 - Present",
      technologies: "HTML | CSS | JavaScript | TypeScript | React JS | Next JS",
      workDescription: [
        "My responsibility at Zuno is to create the Frontend for the web applications based on the Business requirements.",
        "I had an opportunity to work with technologies/languages like JavaScript, TypeScript, React JS, Next JS, Vite JS, Redux Toolkit, CSS, Sass, Material UI and Docker. Integration of REST APIs with the frontend using axios.",
        "For the contribution that I have done to the company and team, I was awarded with the title 'Popper' (Surprise Achiever)."
      ]
    },
    {
      role: "Quality Assurance Engineer",
      employmentType: "Internship",
      companyName: "Vocera Communications",
      tenure: "Sept 2021 - July 2022",
      technologies: "Python | Selenium | Applitools",
      workDescription: [
        "My responsibility was to write the Python with Selenium code in order to automate the manual testcases.",
        "I have done most of the automation for testcases related to company's gadget (Vocera badge) then after a couple of testcases related to Mobile application and web application."
      ]
    }
  ];

  return (
    <div id="Experience" className="experienceMain">
      <Typography variant="h4" className="workExperienceTitle">
        Work Experience
      </Typography>
      <div className="experienceCard">
        <Timeline>
          { experienceInfo.map((experience, index)=>
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                <Typography className="font-young-serif">{experience.role}</Typography>
                <Typography className="font-signika-negative">{`(${experience.employmentType})`}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <LaptopMacIcon />
                </TimelineDot>
                { experienceInfo.length !== index+1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent className="companyInformation">
                <Typography className="font-young-serif">{experience.companyName}</Typography>
                <Typography className="experienceDuration">{experience.tenure}</Typography>
                <Typography className="companySkills">{experience.technologies}</Typography>
                <ul>
                  { experience.workDescription.map((point)=>
                    <li className="workDescription">
                      {point}
                    </li>
                  )}
                </ul>
              </TimelineContent>
            </TimelineItem>
          )}
        </Timeline>
      </div>
    </div>
  );
};

export default ExperienceCard;
