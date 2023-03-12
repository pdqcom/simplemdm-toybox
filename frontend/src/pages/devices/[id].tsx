import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';
import axios from "axios";
import useSWR from 'swr'
import {useRouter} from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import {ListItem, ListItemButton, ListItemText} from "@mui/material";

const getDevice = (id) => axios.get(`/api/devices/${id}.json`)
const getAssignments = (id) => axios.get(`/api/devices/${id}/profiles/assignments.json`)
export default function Device() {
    const router = useRouter()
    const {id} = router.query
    const {data: deviceResponse, isLoading: isLoadingDevice} = useSWR(
        `/api/devices/${id}`,
        () => getDevice(id)
    )
    const device = deviceResponse?.data?.data

    const {data: assignmentResponse, isLoading: isLoadingAssignments} = useSWR(
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

    return (
        <>
            <h1>Device {id}</h1>
            <div>
                <ListItemButton component="ul">
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
                </ListItemButton>
            </div>
            <h2>Profile Assignments</h2>
            <div>

            </div>
        </>
    )
}
