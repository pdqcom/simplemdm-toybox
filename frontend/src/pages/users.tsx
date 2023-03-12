import useSWR from "swr";
import {DataGrid, GridColDef, GridRowsProp} from "@mui/x-data-grid";
import axios from "axios";
import {Typography} from "@mui/material";

const columns: GridColDef[] = [
    {field: 'id', headerName: 'id', width: 150},
    {field: 'email', headerName: 'Email', width: 300},
];

const getUsers = () => axios.get('/api/users.json')

export default function Users() {
    const {data: response, error, isLoading} = useSWR('/api/users', getUsers)
    let dataGrid
    if (error) {
        dataGrid = <div>failed to load</div>
    } else {
        const rows: GridRowsProp = response?.data?.data || []
        dataGrid = <DataGrid rows={rows} columns={columns} loading={isLoading}/>
    }
    return (
        <>
            <Typography color="textPrimary" gutterBottom variant="h2">Users</Typography>
            <div style={{height: 500, width: '100%'}}>
                {dataGrid}
            </div>

        </>
    )
}
