import { AxiosResponse } from "axios/index";
import axios from "axios";
import useSWR from "swr";

axios.defaults.headers.common['Content-Type'] = 'application/json';
interface User {
    id: number,
    email: string,
    current: boolean
}

const responseBody = <T>(response: AxiosResponse<T>) => response.data.data;

const request = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body?: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body?: {}) => axios.put<T>(url, body).then(responseBody),
};

const Users = {
    list: () => request.get<User[]>('/api/users.json'),
    setCurrent: (id: string) => request.put<User>(`/api/users/${id}/current.json`)
};

export {User, Users as default}