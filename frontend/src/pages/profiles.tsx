import useSWR from "swr";
import {GridColDef, GridRowsProp} from "@mui/x-data-grid";
import {Typography} from "@mui/material";
import StyledDataGrid from "@/components/styled_data_grid";
import {default as ProfileClient, Profile} from '../models/profiles'

const columns: GridColDef[] = [
    {field: 'id', headerName: 'id', width: 150},
    {field: 'name', headerName: 'Name', width: 300},
    {field: 'deviceCount', headerName: 'Assigned Devices', width: 300},
];

export default function Profiles() {
    const {data: profiles, error, isLoading} = useSWR<Profile[]>('/api/profiles', ProfileClient.list)
    let dataGrid
    if (error) {
        dataGrid = <div>failed to load</div>
    } else {
        const rows: GridRowsProp = profiles || []
        dataGrid = <StyledDataGrid rows={rows} columns={columns} loading={isLoading}/>
    }
    return (
        <>
            <Typography color="textPrimary" gutterBottom variant="h2">Profiles</Typography>
            {dataGrid}

        </>
    )
}
