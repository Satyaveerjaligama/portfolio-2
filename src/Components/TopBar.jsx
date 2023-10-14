import { AppBar, Grid, Switch, Typography } from "@mui/material";
import { useContext } from "react";
import { websiteTheme } from "../App";

const TopBar = () => {
    const headerList = ['Experience', 'Skills', 'Hobbies'];
    const context = useContext(websiteTheme);

  return (
    <>
      <AppBar className="header" sx={{backgroundColor: "black"}}>
        <Grid container sx={{justifyContent: "space-between"}} p={1}>
            <Grid item>
                <Typography variant="h4" sx={{fontFamily: "Papyrus"}}>
                    Satyaveer Jaligama
                </Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
                {headerList.map((listItem)=>
                    <Typography key={listItem} p={1} ml={3} sx={{fontFamily: "Georgia"}}>
                        {listItem}
                    </Typography>
                )}
                <Switch onChange={()=>context.changeTheme()}/>
            </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default TopBar;
