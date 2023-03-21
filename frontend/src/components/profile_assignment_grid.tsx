import {GridColDef, GridRowsProp} from '@mui/x-data-grid';
import useSWR from 'swr'
import {Alert, Box, Checkbox, Typography} from "@mui/material";
import StyledDataGrid from "@/components/styled_data_grid";
import React, {useState} from "react";
import ProfileAssignments, {ProfileAssignment} from "@/models/profile_assignment";
import Users, {User} from "@/models/users";

export default function ProfileAssignmentGrid({id}) {
    const [error, setError] = useState(null)

    const profileResponse = useSWR<ProfileAssignment[]>(
        `/api/devices/${id}/profiles/assignments.json`,
        () => id ? ProfileAssignments.list(id) : null
    )

    const {data: users } = useSWR<User[]>('/api/users.json', Users.list)
    const currentUser = users ?  users.find(user => user.current) : null

    const ProfileAssignmentCheckbox = ({row: profile}) => {
        const changeHandler = (e) => {
            const {checked} = e.target
            const request = checked ? ProfileAssignments.assign(id, profile.id) : ProfileAssignments.unAssign(id, profile.id)
            request.then(() => profileResponse.mutate())
                .catch((error) => {
                    const errorMessage = error?.response?.data?.error?.message
                    if (errorMessage) {
                        setError(errorMessage)
                        profileResponse.mutate()
                    }
                })
        }
        return <Checkbox checked={profile.assigned} onChange={changeHandler}/>
    }

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'id', width: 150},
        {field: 'name', headerName: 'Name', width: 300},
        {field: 'assigned', headerName: 'Assigned', width: 150, renderCell: ProfileAssignmentCheckbox}
    ];

    let dataGrid
    if (profileResponse.error) {
        dataGrid = <div>failed to load</div>
    } else {
        const rows = profileResponse.data || []
        dataGrid = <StyledDataGrid rows={rows} columns={columns} loading={profileResponse.isLoading}/>
    }

    const errorAlert = error ?
        <Alert severity="error" onClose={() => setError(null)} sx={{mb: 2}}>{error}</Alert> : null
    return (
        <Box>
            <Typography color="textPrimary" gutterBottom variant="h2">Profile Assignments</Typography>
            {errorAlert}
            {dataGrid}
        </Box>
    )
}
