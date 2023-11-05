import { Box, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import "../Styles/HeroComponent.css";

const HeroComponent = () => {
    return (
        <Box id="Home" className="hero">
            <Typography variant="h3" className="font-young-serif">Hey, I'm <span style={{color: "#C887C5"}}>{`<SatyaveerJaligama />`}</span></Typography>
            <Typography variant="h5" className="font-young-serif">
                <Typewriter
                    loop
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Frontend Developer")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Frontend Developer")
                            .start();
                    }}
                />
            </Typography>
        </Box>
    )
}

export default HeroComponent;