import { Box, Grid, Link, Typography } from "@mui/material";
import { LinkedIn, WhatsApp, Instagram, EmailOutlined, GitHub } from "@mui/icons-material";

const ContactCard = () => {
    return (
        <Box className="contactMain">
            <Typography variant="h4" sx={{fontFamily: "Young Serif"}}>Contact Me</Typography>
            <Grid container>
                <Grid item xs={6} sm={2.4}>
                    <Link href="https://www.linkedin.com/in/satyaveer-jaligama" target="_blank">
                        <LinkedIn className="contactIcons"/>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={2.4}>
                    <Link href="https://wa.me/qr/FB2UCT6ZJPQKL1" target="_blank">
                        <WhatsApp className="contactIcons"/>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={2.4}>
                    <Link href="https://www.instagram.com/satyaveer_jaligama/" target="_blank">
                        <Instagram className="contactIcons"/>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={2.4}>
                    <Link href="mailto:satyaveerjaligama13@gmail.com" target="_blank">
                        <EmailOutlined className="contactIcons"/>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={2.4}>
                    <Link href="https://github.com/Satyaveerjaligama" target="_blank">
                        <GitHub className="contactIcons"/>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ContactCard;