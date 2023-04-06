import axios, {AxiosResponse} from "axios";

axios.defaults.headers.common['Content-Type'] = 'application/json';
interface JsonResponse<T> {
    data: T
}

const responseBody = <T>(response: AxiosResponse<JsonResponse<T>>) => {
    return response.data.data; // axios response object has a data property but so does out json response
};

export {
    responseBody
}