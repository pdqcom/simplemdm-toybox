import useSWR from "swr";
import {GridColDef, GridRowsProp} from "@mui/x-data-grid";
import {Typography} from "@mui/material";
import StyledDataGrid from "@/components/styled_data_grid";
import {default as UserClient, User} from '../models/user'

const columns: GridColDef[] = [
    {field: 'id', headerName: 'id', width: 150},
    {field: 'email', headerName: 'Email', width: 300},
];

export default function Users() {
    const {data: users, error, isLoading} = useSWR<User[]>('/api/users', UserClient.list)
    let dataGrid
    if (error) {
        dataGrid = <div>failed to load</div>
    } else {
        const rows: GridRowsProp<User> = users || []
        dataGrid = <StyledDataGrid rows={rows} columns={columns} loading={isLoading}/>
    }
    return (
        <>
            <Typography color="textPrimary" gutterBottom variant="h2">Users</Typography>
            {dataGrid}
        </>
    )
}
