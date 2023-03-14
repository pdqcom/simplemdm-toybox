import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import useSWR from "swr";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

const getUsers = () => axios.get('/api/users.json')
const UserSelector = () => {
    const {data: response, error, isLoading, mutate} = useSWR('/api/users', getUsers)

    const users = response?.data?.data || []
    const currentUser = users.find(user => user.current)
    const userMenuItems = users.map(user => <MenuItem value={user.id}>{user.email}</MenuItem>)
    const handleChange = () => {

    }
    if (error){
        return <div>failed to load</div>
    } else {
        return <FormControl fullWidth>
            <InputLabel>Current User</InputLabel>
            <Select
                value={5}
                label="Current User"
                onChange={handleChange}
            >
                {userMenuItems}
            </Select>
        </FormControl>
    }

}

export default UserSelector