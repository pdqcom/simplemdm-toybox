import {Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {AppSettingsAlt, Group, Ballot} from "@mui/icons-material";
import Sidebar from "@/components/sidebar";
export default function Home() {
  return (
    <>
      <main>
          <Grid container spacing={2}>
              <Grid item xs={3}>
                <Sidebar />
              </Grid>
              <Grid item xs={9}>
                  main
              </Grid>
          </Grid>
      </main>
    </>
  )
}
