import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{marginTop: "100px", paddingBottom: "10px"}}>
            <Typography className="font-young-serif">
              &#169; 2023 Satyaveer Jaligama. All rights reserved
            </Typography>
        </Box>
    )
}

export default Footer;