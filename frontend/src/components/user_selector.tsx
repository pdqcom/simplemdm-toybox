import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import useSWR from "swr";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

const getUsers = () => axios.get('/api/users.json')
export default function UserSelector() {
    const {data: response, error, isLoading, mutate} = useSWR('/api/users', getUsers)

    const users = response?.data?.data || []
    const currentUser = users.find(user => user.current)
    const userMenuItems = users.map(user => <MenuItem key={user.id} value={user.id}>{user.email}</MenuItem>)
    const handleChange = (e) => {
        const { value } = e.target
        axios.put(`/api/users/${value}/current`).then(() => mutate)
    }
    const userSelector = <Select
        value={currentUser?.id}
        label="Current User"
        onChange={handleChange}
    >
        {userMenuItems}
    </Select>

    if (error) {
        return <div>failed to load</div>
    } else {
        return <FormControl fullWidth>
            <InputLabel>Current User</InputLabel>
            {isLoading ? <CircularProgress/> : userSelector}
        </FormControl>
    }

}