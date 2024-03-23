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
  const experienceDetails = [
    {
      role: "Frontend Developer",
      employmentType: "Full time",
      companyName: "Zuno General Insurance",
      duration: "Aug 2022 - Present",
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
      duration: "Sept 2021 - July 2022 (Python | Selenium | Applitools)",
      workDescription: [
        "My responsibility was to write the Python with Selenium code in order to automate the manual testcases.",
        "I have done most of the automation for testcases related to company's gadget (Vocera badge) then after a couple of testcases related to Mobile application and web application."
      ]
    }
  ]
  return (
    <div id="Experience" className="experienceMain">
      <Typography variant="h6" className="workExperienceTitle text-decoration-underline">
        Work Experience
      </Typography>
      <div className="experienceCard">
        <Timeline>
          { experienceDetails.map((company, index)=>
            <TimelineItem key={company.companyName}>
              <TimelineOppositeContent className="company-details">
                <Typography className="font-size-small font-young-serif">{company.role}</Typography>
                <Typography className="font-size-small font-signika-negative">{`(${company.employmentType})`}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <LaptopMacIcon />
                </TimelineDot>
                { experienceDetails.length !== index+1 && <TimelineConnector /> }
              </TimelineSeparator>
              <TimelineContent className="companyInformation">
                <Typography className="font-size-small font-young-serif">{company.companyName}</Typography>
                <Typography className="font-size-small experienceDuration">{company.duration}</Typography>
                <ul>
                { company.workDescription.map((point, index)=>
                  <li className="font-size-small workDescription" key={index}>{point}</li>
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
