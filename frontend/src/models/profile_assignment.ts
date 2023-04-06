import axios from "axios";
import {responseBody} from "@/shared/ajax-client";

interface ProfileAssignment {
    id: number
    name: string,
    assigned: boolean
}

const ProfileAssignments = {
    list: (deviceId: number) => axios.get(`/api/devices/${deviceId}/profiles/assignments.json`).then(responseBody<ProfileAssignment[]>),
    assign: (deviceId: number, profileId: number) => axios.post(`/api/devices/${deviceId}/profiles/${profileId}/assignments.json`).then(responseBody<ProfileAssignment>),
    unAssign: (deviceId: number, profileId:number) => axios.delete(`/api/devices/${deviceId}/profiles/${profileId}/assignments.json`).then(responseBody<ProfileAssignment>)
}

export { ProfileAssignments as default };
export type { ProfileAssignment };
