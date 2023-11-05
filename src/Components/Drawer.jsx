import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { headerList } from '../Utils/Constants';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LaptopWindowsRoundedIcon from '@mui/icons-material/LaptopWindowsRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import "../Styles/TopBar.css";

/*
This component is used to show the left drawer. In mobile screens when the user click on hamburger
this left drawer will be opened
*/
export default function Drawer(props) {
  const {openDrawer, toggleDrawer} = props;
  const icons = {
    Home: <HomeRoundedIcon />,
    Experience:<LaptopWindowsRoundedIcon />,
    Education:<SchoolRoundedIcon />,
    Contact:<PermContactCalendarRoundedIcon />,
    Hobbies:<CameraAltRoundedIcon />,
    Skills:<StarBorderRoundedIcon />,
  };

  return (
    <div>
        <React.Fragment>
          <SwipeableDrawer
            anchor={"left"}
            open={openDrawer}
            className="left-drawer"
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                >
                <List>
                    {headerList.map((listItem, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton className="drawer-options" href={`#${listItem}`}>
                            <ListItemIcon>
                                {icons[listItem]}
                            </ListItemIcon>
                            <ListItemText primary={listItem} />
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
