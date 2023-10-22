import { AppBar, Grid, Switch, Typography } from "@mui/material";
import { useContext } from "react";
import { websiteTheme } from "../App";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';

const TopBar = () => {
    const headerList = ['Home', 'Skills', 'Experience', 'Education', 'Hobbies', 'Contact'];
    const context = useContext(websiteTheme);

  return (
    <>
      <AppBar className="header" sx={{backgroundColor: "black"}}>
        <Grid container sx={{justifyContent: "space-between"}} p={1}>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
                <Typography className="font-young-serif align-self-center">
                  {`</>`}
                </Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
                {headerList.map((listItem)=>
                <a href={`#${listItem}`} className="header-text text-decoration-none">
                    <Typography className="title" href={`#${listItem}`} key={listItem} p={1} ml={3} sx={{fontFamily: "Georgia"}}>
                        {listItem}
                    </Typography>
                </a>
                )}
            </Grid>
            <Grid item sx={{ display: "flex", alignItems: "center"}}>
              <LightModeIcon />
                <Switch onChange={()=>context.changeTheme()}/>
              <NightsStayIcon />
            </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default TopBar;
