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
import CropLandscapeRoundedIcon from '@mui/icons-material/CropLandscapeRounded';


export default function Drawer(props) {
  const {openDrawer, toggleDrawer} = props;

  const getIcon = (itemName) => {
    if (itemName === "Home") {
        return (
            <HomeRoundedIcon />
        )
    } else if (itemName === "Experience") {
        return (
            <LaptopWindowsRoundedIcon />
        )
    } else if (itemName === "Education") {
        return (
            <SchoolRoundedIcon />
        )
    } else if (itemName === "Contact") {
        return (
            <PermContactCalendarRoundedIcon />
        )
    } else {
        return (
            <CropLandscapeRoundedIcon />
        )
    }
  }

  return (
    <div>
        <React.Fragment>
          <SwipeableDrawer
            anchor={"left"}
            open={openDrawer}
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
                        <ListItemButton href={`#${listItem}`}>
                        <ListItemIcon>
                            {getIcon(listItem)}
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
