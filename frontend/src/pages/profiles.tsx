import useSWR from "swr";
import {DataGrid, GridColDef, GridRowsProp} from "@mui/x-data-grid";
import axios from "axios";
import {Box, Typography} from "@mui/material";
import StyledDataGrid from "@/components/styled_data_grid";

const columns: GridColDef[] = [
    {field: 'id', headerName: 'id', width: 150},
    {field: 'name', headerName: 'Name', width: 300},
    {field: 'deviceCount', headerName: 'Assigned Devices', width: 300},
];

const getProfiles = () => axios.get('/api/profiles.json')

export default function Profiles() {
    const {data: response, error, isLoading} = useSWR('/api/profiles', getProfiles)
    let dataGrid
    if (error) {
        dataGrid = <div>failed to load</div>
    } else {
        const rows: GridRowsProp = response?.data?.data || []
        dataGrid = <StyledDataGrid rows={rows} columns={columns} loading={isLoading}/>
    }
    return (
        <>
            <Typography color="textPrimary" gutterBottom variant="h2">Profiles</Typography>
            <Box sx={{ height: "500px" }}>
                {dataGrid}
            </Box>

        </>
    )
}
