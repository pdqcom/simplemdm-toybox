import axios from "axios";
import {responseBody} from "@/shared/ajax-client";

interface ProfileAssignment {
    id: number
    name: string,
    assigned: boolean
}

const ProfileAssignments = {
    list: (deviceId) => axios.get(`/api/devices/${deviceId}/profiles/assignments.json`).then(responseBody<ProfileAssignment[]>),
    assign: (deviceId, profileId) => axios.post(`/api/devices/${deviceId}/profiles/${profileId}/assignments.json`).then(responseBody<ProfileAssignment>),
    unAssign: (deviceId, profileId) => axios.delete(`/api/devices/${deviceId}/profiles/${profileId}/assignments.json`).then(responseBody<ProfileAssignment>)
}

export { ProfileAssignments as default, ProfileAssignment }