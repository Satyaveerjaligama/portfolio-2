import { Card, Typography } from "@mui/material";
import "../Styles/ExperienceCard.css";

const ExperienceCard = () => {
    return (
        <div style={{marginTop: "100px"}} className="experienceMain">
            <Typography variant="h4" className="workExperienceTitle">Work Experience</Typography>
            <div className="experienceCard">
                <Card className="singleCard">
                    <Typography variant="h5" className="roleTitle">Frontend Developer</Typography>
                    <Typography variant="h6" className="companyName">Zuno General Insurance</Typography>
                    <Typography className="companySkills">HTML | CSS | JavaScript | TypeScript | React JS | Next JS</Typography>
                </Card>
                <Card className="singleCard">
                    <Typography variant="h5" className="roleTitle">Quality Assurance Engineer</Typography>
                    <Typography variant="h6" className="companyName">Vocera Communications</Typography>
                    <Typography className="companySkills">Python | Selenium | Applitools</Typography>
                </Card>
            </div>
        </div>
    )
}

export default ExperienceCard;