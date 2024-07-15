import { Box, Typography, Card } from "@mui/material";
import jsLogo from "../Assests/JavaScriptLogo.png";
import gitLogo from "../Assests/GitLogo.png";
import htmlLogo from "../Assests/HtmlLogo.png";
import cssLogo from "../Assests/CssLogo.png";
import reactJsLogo from "../Assests/ReactJsLogo.png";
import nextJsLogo from "../Assests/NextJsLogo.png";
import tsLogo from "../Assests/TypeScriptLogo.png";
import sassLogo from "../Assests/SassLogo.png";
import materialUiLogo from "../Assests/materialUiLogo.svg";
import reduxLogo from "../Assests/ReduxLogo.png";
import dockerLogo from "../Assests/DockerLogo.webp";
import "../Styles/Skills.css";

const Skills = () => {
    const skillsList = [
        {
            logo: htmlLogo,
            skillName: "HTML"
        },
        {
            logo: cssLogo,
            skillName: "CSS"
        },
        {
            logo: sassLogo,
            skillName: "Sass"
        },
        {
            logo: jsLogo,
            skillName: "JavaScript"
        },
        {
            logo: reactJsLogo,
            skillName: "React JS"
        },
        {
            logo: nextJsLogo,
            skillName: "Next JS"
        },
        {
            logo: tsLogo,
            skillName: "TypeScript"
        },
        {
            logo: reduxLogo,
            skillName: "Redux Toolkit"
        },
        {
            logo: materialUiLogo,
            skillName: "Material UI"
        },
        {
            logo: gitLogo,
            skillName: "Git"
        },
        {
            logo: dockerLogo,
            skillName: "Docker"
        }
    ]
    return (
        <Box id="Skills" className="skills-box">
            <Typography variant="h6" className="text-decoration-underline" sx={{fontFamily: "Young Serif"}}>Skills</Typography>
            <div className="skill-cards">
            {skillsList.map((skill)=>
                <Card className="singleSkillCard" key={skill.skillName}>
                    <img height="30px" width="30px" src={skill.logo} alt={`${skill.skillName} logo`}/>
                    <Typography sx={{fontFamily: "Young Serif"}}>{skill.skillName}</Typography>
                </Card>
            )}
            </div>
        </Box>
    )
}

export default Skills;