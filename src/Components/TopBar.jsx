import { AppBar, Grid, Switch, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { websiteTheme } from "../App";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import "../Styles/TopBar.css";
import Drawer from "./Drawer";
import { headerList } from "../Utils/Constants";

const TopBar = () => {
    const context = useContext(websiteTheme);
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = (open) => (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
      setOpenDrawer(open);
    };

  return (
    <>
      <AppBar className="header" sx={{backgroundColor: "black"}}>
        <Grid container sx={{justifyContent: "space-between"}} p={1}>
            <Grid item className="first-grid">
                <Typography className="logo font-young-serif align-self-center">
                  {" "}
                </Typography>
                <MenuRoundedIcon onClick={toggleDrawer(true)} className="hamburger"/>
                <Drawer 
                  openDrawer={openDrawer}
                  toggleDrawer={toggleDrawer}
                />
            </Grid>
            <Grid item className="nav-options">
                {headerList.map((listItem)=>
                <a href={`#${listItem}`} key={listItem} className="header-text text-decoration-none">
                    <Typography className="title" href={`#${listItem}`} key={listItem} p={1} ml={3} sx={{fontFamily: "Georgia"}}>
                        {listItem}
                    </Typography>
                </a>
                )}
            </Grid>
            <Grid item className="theme-switch">
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
