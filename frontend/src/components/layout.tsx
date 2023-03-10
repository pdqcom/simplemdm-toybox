import {Grid} from "@mui/material";
import Sidebar from "@/components/sidebar";

const Layout = ({ children }) => {
    return <>
        <Grid container spacing={5}>
            <Grid item xs={1}>
                <Sidebar/>
            </Grid>
            <Grid item xs={10}>
                { children }
            </Grid>
        </Grid>
    </>
}

export default Layout