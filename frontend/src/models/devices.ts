import axios from "axios";
import {responseBody} from "@/shared/ajax-client";

interface Device {
    id: number
    serialNumber: string
    model: string
}

const Devices = {
    list: () => axios.get('/api/devices.json').then(responseBody<Device[]>),
    show: (id) => axios.get(`/api/devices/${id}.json`).then(responseBody<Device>)
}
export {Device, Devices as default}