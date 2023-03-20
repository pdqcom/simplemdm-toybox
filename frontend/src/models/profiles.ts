import axios from "axios";
import {responseBody} from "@/shared/ajax-client";

interface Profile {
    id: number
    name: string
    deviceCount: number
}

const Profiles = {
    list: () => axios.get('/api/profiles.json').then(responseBody<Profile[]>)
}

export { Profiles as default, Profile }