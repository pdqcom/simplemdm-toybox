import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';
import axios from "axios";
import useSWR from 'swr'
import {useRouter} from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import {Box, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";

const getDevice = (id) => axios.get(`/api/devices/${id}.json`).then(({ data }) => data)
const getAssignments = (id) => axios.get(`/api/devices/${id}/profiles/assignments.json`)
export default function Device() {
    const router = useRouter()
    const {id} = router.query
    const {data: deviceResponse , isLoading: isLoadingDevice} = useSWR(
        `/api/devices/${id}`,
        () => getDevice(id)
    )
    const device = deviceResponse?.data

    const profileResponse = useSWR(
        `/api/devices/${id}/profiles/assignments`,
        () => getAssignments(id)
    )

    // let dataGrid
    // if (error) {
    //     dataGrid = <div>failed to load</div>
    // } else {
    //     const rows: GridRowsProp = response?.data?.data || []
    //     dataGrid = <DataGrid rows={rows} columns={columns} loading={isLoading}/>
    // }

    // let dataGrid
    // if (error) {
    //     dataGrid = <div>failed to load</div>
    // } else {
    //     const rows: GridRowsProp = response?.data?.data || []
    //     dataGrid = <DataGrid rows={rows} columns={columns} loading={isLoading}/>
    // }

    return (
        <Box>
            <Typography color="textPrimary" gutterBottom variant="h2">Device {id}</Typography>
            <Box>
                <List component="ul">
                    <ListItem component="li">
                        <ListItemText>
                            Serial Number: {isLoadingDevice ? <CircularProgress/> : device.serialNumber}
                        </ListItemText>
                    </ListItem>
                    <ListItem component="li">
                        <ListItemText>
                            Model: {isLoadingDevice ? <CircularProgress/> : device.model}
                        </ListItemText>
                    </ListItem>
                </List>
            </Box>
            <Typography color="textPrimary" gutterBottom variant="h2">Profile Assignments</Typography>
            <div>

            </div>
        </Box>
    )
}
