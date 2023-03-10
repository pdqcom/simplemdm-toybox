import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import axios from "axios";
import {useEffect, useState} from "react";
import useSWR from 'swr'
const columns: GridColDef[] = [
    {field: 'id', headerName: 'id', width: 150},
    {field: 'serialNumber', headerName: 'Serial Number', width: 300},
    {field: 'model', headerName: 'Model', width: 150},
];

const getDevices = () => axios.get('/api/devices.json')
export default function Devices() {
    const { data: response, error, isLoading } = useSWR('/api/devices', getDevices)

    const rows =  response?.data?.data || []
    let dataGrid = <DataGrid rows={rows} columns={columns} />
    if (error) dataGrid = <div>failed to load</div>
    if (isLoading) dataGrid = <div>loading...</div>

    return (
        <>
            <h1>Devices</h1>
            <div style={{ height: 500, width: '100%' }}>
                { dataGrid }
            </div>

        </>
    )
}
