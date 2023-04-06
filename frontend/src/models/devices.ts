import axios from "axios";
import {responseBody} from "@/shared/ajax-client";

interface Device {
    id: number
    serialNumber: string
    model: string
}

const Devices = {
    list: () => axios.get('/api/devices.json').then(responseBody<Device[]>),
    show: (id: number) => axios.get(`/api/devices/${id}.json`).then(responseBody<Device>)
}
export { Devices as default };
export type { Device };
