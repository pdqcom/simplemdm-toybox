import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';
import axios from "axios";
import useSWR from 'swr'
import Link from "next/link";
import {Box, Typography} from "@mui/material";
import {AppSettingsAlt} from "@mui/icons-material";

const DeviceLink = ({ id }) => {

    return <Link href={{
        pathname: '/devices/[id]',
        query: { id },
    }}>{ id }</Link>
}
const columns: GridColDef[] = [
    {field: 'id', headerName: 'id', width: 150, renderCell: DeviceLink},
    {field: 'serialNumber', headerName: 'Serial Number', width: 300},
    {field: 'model', headerName: 'Model', width: 150},
];

const getDevices = () => axios.get('/api/devices.json')
export default function Devices() {
    const {data: response, error, isLoading} = useSWR('/api/devices', getDevices)
    let dataGrid
    if (error) {
        dataGrid = <div>failed to load</div>
    } else {
        const rows: GridRowsProp = response?.data?.data || []
        dataGrid = <DataGrid rows={rows} columns={columns} loading={isLoading}/>
    }
    return (
        <Box>
            <Typography color="textPrimary" gutterBottom variant="h2">Devices</Typography>
            <Box sx={{ height: "500px" }}>
                {dataGrid}
            </Box>
        </Box>
    )
}
