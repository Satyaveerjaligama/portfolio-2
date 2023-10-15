import { Box, Typography, Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';

const Intro = () => {
    return (
        <Box id="Home" sx={{marginTop: "100px"}}>
            <Typography variant="h3" className="font-young-serif">Hey, I'm <span style={{color: "#C887C5"}}>{`<SatyaveerJaligama />`}</span></Typography>
            <Typography variant="h5" className="font-young-serif">Frontend Developer</Typography>
            {/* <Button download href="/logo192.png" variant="contained" startIcon={<DownloadIcon />} sx={{textTransform: "none", borderRadius: "10px"}}>Download Resume</Button> */}
        </Box>
    )
}

export default Intro;