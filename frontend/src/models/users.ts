import axios from "axios";
import {responseBody} from "@/shared/ajax-client";

interface User {
    id: number,
    email: string,
    current: boolean
}

const Users = {
    list: () => axios.get('/api/users.json').then(responseBody<User[]>),
    setCurrent: (id: number) => axios.put(`/api/users/${id}/current.json`).then(responseBody<User[]>)
};

export { Users as default };
export type { User };
