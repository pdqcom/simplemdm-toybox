import useSWR from 'swr'
import {useRouter} from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import {Box, Card, List, ListItem, ListItemText, Typography} from "@mui/material";
import React from "react";
import Devices, {Device as DeviceModel} from "@/models/devices";
import ProfileAssignmentGrid from "@/components/profile_assignment_grid";

export default function Device() {
    const router = useRouter()
    const {id} = router.query

    const {data: device, isLoading: isLoadingDevice} = useSWR<DeviceModel>(
        `/api/devices/${id}.json`,
        () => Devices.show(id)
    )

    const profileAssignmentGrid = <ProfileAssignmentGrid id={id } />
    return (
        <Box>
            <Typography color="textPrimary" gutterBottom variant="h2">Device {id}</Typography>
            <Card sx={{mb: 4}}>
                <List dense={true}>
                    <ListItem>
                        <ListItemText primary="Serial Number"
                                      secondary={isLoadingDevice ? <CircularProgress/> : device?.serialNumber}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Model"
                                      secondary={isLoadingDevice ? <CircularProgress/> : device?.model}/>
                    </ListItem>
                </List>
            </Card>
            { profileAssignmentGrid }
        </Box>
    )
}
