import { Box, Grid, Link, Typography } from "@mui/material";
import { LinkedIn, WhatsApp, EmailOutlined, GitHub, LocalPhoneOutlined } from "@mui/icons-material";
import "../Styles/ContactCard.css";

const ContactCard = () => {
    return (
        <Box id="Contact" className="contactMain">
            <Typography variant="h6" className="font-young-serif text-decoration-underline">Contact Me</Typography>
            <Grid container>
                <Grid item xs={6} sm={2.4}>
                    <Link href="https://github.com/Satyaveerjaligama" target="_blank">
                        <GitHub className="contactIcons"/>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={2.4}>
                    <Link href="https://www.linkedin.com/in/satyaveer-jaligama" target="_blank">
                        <LinkedIn className="contactIcons"/>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={2.4}>
                    <Link href="mailto:satyaveerjaligama13@gmail.com" target="_blank">
                        <EmailOutlined className="contactIcons"/>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={2.4}>
                    <Link href="tel:9182313086" target="_blank">
                        <LocalPhoneOutlined className="contactIcons"/>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={2.4}>
                    <Link href="https://wa.me/qr/OSUEJTTLXWGUH1" target="_blank">
                        <WhatsApp className="contactIcons"/>
                    </Link>
                </Grid>
                {/* <Grid item xs={6} sm={2.4}>
                    <Link href="https://www.instagram.com/satyaveer_jaligama/" target="_blank">
                        <Instagram className="contactIcons"/>
                    </Link>
                </Grid> */}
            </Grid>
        </Box>
    )
}

export default ContactCard;