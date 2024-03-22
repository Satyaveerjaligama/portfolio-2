import { Box, Typography } from "@mui/material";
import "../Styles/HeroComponent.css";

const HeroComponent = () => {
    return (
        <Box id="Home" className="hero">
            <Typography variant="h4" className="name font-young-serif"><span style={{color: "#C887C5"}}>{`<SatyaveerJaligama />`}</span></Typography>
            <Typography variant="h6" className="font-young-serif">Frontend Developer</Typography>
        </Box>
    )
}

export default HeroComponent;