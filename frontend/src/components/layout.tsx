import {Grid} from "@mui/material";
import Sidebar from "@/components/sidebar";

const Layout = ({ children }) => {
    return <>
        <Grid container spacing={1}>
            <Grid item xs={3} lg={2} xl={1}>
                <Sidebar/>
            </Grid>
            <Grid item xs={9} lg={10} xl={11}>
                { children }
            </Grid>
        </Grid>
    </>
}

export default Layout