import { Box, Typography } from "@mui/material";

const Intro = () => {
    return (
        <Box sx={{marginTop: "100px"}}>
            <Typography variant="h3" sx={{fontFamily: "Young Serif"}}>Hey, I'm <span style={{color: "#C887C5"}}>Satyaveer Jaligama</span></Typography>
            <Typography variant="h5" sx={{fontFamily: "Young Serif"}}>Frontend Developer</Typography>
        </Box>
    )
}

export default Intro;