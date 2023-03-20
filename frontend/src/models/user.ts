import {AxiosResponse} from "axios/index";
import axios from "axios";
import useSWR, {SWRResponse} from "swr";

axios.defaults.headers.common['Content-Type'] = 'application/json';

interface User {
    id: number,
    email: string,
    current: boolean
}

const responseBody = <T>(response: AxiosResponse<T>) => {
    console.log("axios response", response.data.data)
    return response.data.data; // axios response object has a data property but so does out json response
};

const axiosSWR = <T>(method: string, url: string): SWRResponse<T> => {
    const requestMethod = axios[method];
    const request = requestMethod(url);
    const swrResponse = useSWR<T>(url, () => request.then(responseBody<T>));
    console.log("swr response", swrResponse)
    return swrResponse;
}

const request = {
    get: <T>(url) => axiosSWR<T>('get', url),
    post: <T>(url) => axiosSWR<T>('post', url),
    put: <T>(url) => axiosSWR<T>('put', url),
    delete: <T>(url) => axiosSWR<T>('delete', url),
};

const Users = {
    list: () => request.get<User[]>('/api/users.json'),
    setCurrent: (id: string) => request.put<User>(`/api/users/${id}/current.json`)
};

export {User, Users as default}