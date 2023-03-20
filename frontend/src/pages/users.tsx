import {GridColDef, GridRowsProp} from "@mui/x-data-grid";
import {Chip, Typography} from "@mui/material";
import StyledDataGrid from "@/components/styled_data_grid";
import {default as UserClient, User} from '../models/users'
import useSWR from "swr";

const Current = ({row: user}) => user.current ? <Chip label="Current Users"/> : null

const columns: GridColDef[User] = [
    {field: 'id', headerName: 'id', width: 150},
    {field: 'email', headerName: 'Email', width: 300},
    {field: 'current', headerName: 'current', width: 300, renderCell: Current}
];

export default function Users() {
    const {data: users, error, isLoading} = useSWR<User[]>('/api/users.json', UserClient.list)
    let dataGrid
    if (error) {
        dataGrid = <div>failed to load</div>
    } else {
        const rows: GridRowsProp = users || []
        dataGrid = <StyledDataGrid rows={rows} columns={columns} loading={isLoading}/>
    }
    return (
        <>
            <Typography color="textPrimary" gutterBottom variant="h2">Users</Typography>
            {dataGrid}
        </>
    )
}
