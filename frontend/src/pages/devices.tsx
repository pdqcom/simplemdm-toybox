import {GridColDef, GridRowsProp} from '@mui/x-data-grid';
import useSWR from 'swr'
import Link from "next/link";
import {Box, Typography} from "@mui/material";
import StyledDataGrid from "@/components/styled_data_grid";
import {default as DevicesClient, Device} from '../models/devices'

const DeviceLink = ({ id }) => {
    return <Link href={{
        pathname: '/devices/[id]',
        query: { id },
    }}>{ id }</Link>
}
const columns: GridColDef[Device] = [
    {field: 'id', headerName: 'id', width: 150, renderCell: DeviceLink},
    {field: 'serialNumber', headerName: 'Serial Number', width: 300},
    {field: 'model', headerName: 'Model', width: 150},
];

export default function Devices() {
    const {data: devices, error, isLoading} = useSWR<Device[]>('/api/devices.json', DevicesClient.list)
    let dataGrid

    if (error) {
        dataGrid = <div>failed to load</div>
    } else {
        const rows: GridRowsProp = devices || []
        dataGrid = <StyledDataGrid rows={rows} columns={columns} loading={isLoading}/>
    }
    return (
        <Box>
            <Typography color="textPrimary" gutterBottom variant="h2">Devices</Typography>
                {dataGrid}
        </Box>
    )
}
