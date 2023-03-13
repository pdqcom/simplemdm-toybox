import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';
import axios from "axios";
import useSWR from 'swr'
import {useRouter} from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import {
    Box,
    Checkbox,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@mui/material";

const getDevice = (id) => id ? axios.get(`/api/devices/${id}.json`).then(({ data }) => data) : null
const getAssignments = (id) => id ? axios.get(`/api/devices/${id}/profiles/assignments.json`).then(({ data }) => data) : null
const assignProfile = (deviceId, profileId) => axios.post(`/api/devices/${deviceId}/profiles/${profileId}/assignments.json`)
const unassignProfile = (deviceId, profileId) => axios.delete(`/api/devices/${deviceId}/profiles/${profileId}/assignments.json`)

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

    const ProfileAssignmentCheckbox = ({ row: profile }) => {
        const changeHandler = (e) => {
            const {checked} = e.target
            const request = checked ? assignProfile(id, profile.id) : unassignProfile(id, profile.id)

            request.then(() => profileResponse.mutate())
        }
        return <Checkbox checked={profile.assigned} onChange={ changeHandler } />
    }

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'id', width: 150 },
        {field: 'name', headerName: 'Name', width: 300},
        {field: 'assigned', headerName: 'Assigned', width: 150, renderCell: ProfileAssignmentCheckbox},
    ];

    let dataGrid
    if (profileResponse.error) {
        dataGrid = <div>failed to load</div>
    } else {
        const rows: GridRowsProp = profileResponse?.data?.data || []
        dataGrid = <DataGrid rows={rows} columns={columns} loading={profileResponse.isLoading}/>
    }

    return (
        <Box>
            <Typography color="textPrimary" gutterBottom variant="h2">Device {id}</Typography>
            <Box>
                <List>
                    <ListItem>
                        <ListItemText>
                            Serial Number: {isLoadingDevice ? <CircularProgress/> : device?.serialNumber}
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText>
                            Model: {isLoadingDevice ? <CircularProgress/> : device?.model}
                        </ListItemText>
                    </ListItem>
                    <Divider />
                </List>
            </Box>
            <Typography color="textPrimary" gutterBottom variant="h2">Profile Assignments</Typography>
            <Box height="500px">
                {dataGrid}
            </Box>
        </Box>
    )
}
