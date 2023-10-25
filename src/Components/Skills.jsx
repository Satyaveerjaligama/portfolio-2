import { Box, Typography, Card } from "@mui/material";
import jsLogo from "../Assests/JavaScriptLogo.png";
import gitLogo from "../Assests/GitLogo.png";
import htmlLogo from "../Assests/HtmlLogo.png";
import cssLogo from "../Assests/CssLogo.png";
import reactJsLogo from "../Assests/ReactJsLogo.png";
import nextJsLogo from "../Assests/NextJsLogo.png";
import tsLogo from "../Assests/TypeScriptLogo.png";
import sassLogo from "../Assests/SassLogo.png";
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
            skillName: "Java Script"
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
            skillName: "Type Script"
        },
        {
            logo: gitLogo,
            skillName: "Git"
        },
    ]
    return (
        <Box id="Skills" sx={{marginTop: "100px"}}>
            <Typography variant="h4" sx={{fontFamily: "Young Serif"}}>Skills</Typography>
            <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            {skillsList.map((skill)=>
                <Card className="skillCard">
                    <img height="50px" width="50px" src={skill.logo} alt={`${skill.skillName} logo`}/>
                    <Typography sx={{fontFamily: "Young Serif"}}>{skill.skillName}</Typography>
                </Card>
            )}
            </div>
        </Box>
    )
}

export default Skills;