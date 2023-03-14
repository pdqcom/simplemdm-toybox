import {AppBar, Box, Grid, Toolbar, Typography} from "@mui/material";
import Sidebar from "@/components/sidebar";
import React from "react";

const Layout = ({ children }) => {
    return <>
        <AppBar position="relative" open={true} sx={ { left: "200px", "background-color": "#FFF" }}>
            <Toolbar>
                <Typography variant="h6" color="secondary">asdkasdasdaskdasdasdHi</Typography>
            </Toolbar>
        </AppBar>
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={3} lg={2} xl={1}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={9} lg={10} xl={11}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    </>
}

export default Layout