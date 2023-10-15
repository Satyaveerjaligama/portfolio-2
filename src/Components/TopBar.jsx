import { AppBar, Grid, Switch, Typography } from "@mui/material";
import { useContext } from "react";
import { websiteTheme } from "../App";

const TopBar = () => {
    const headerList = ['Home', 'Skills', 'Experience', 'Education', 'Hobbies', 'Contact'];
    const context = useContext(websiteTheme);

  return (
    <>
      <AppBar className="header" sx={{backgroundColor: "black"}}>
        <Grid container sx={{justifyContent: "space-between"}} p={1}>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
                {headerList.map((listItem)=>
                <a href={`#${listItem}`} className="text-dark text-decoration-none">
                    <Typography href={`#${listItem}`} key={listItem} p={1} ml={3} sx={{fontFamily: "Georgia"}}>
                        {listItem}
                    </Typography>
                </a>
                )}
            </Grid>
            <Grid item>
                <Switch onChange={()=>context.changeTheme()}/>
            </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default TopBar;
