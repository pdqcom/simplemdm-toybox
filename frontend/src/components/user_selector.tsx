import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import useSWR from "swr";
import CircularProgress from '@mui/material/CircularProgress';
import Users, {User} from '../models/user'

const UserForm = ({ children }) => <FormControl fullWidth>
    <InputLabel>Current Users</InputLabel>
    { children }
</FormControl>

export default function UserSelector() {

    const {data: users, error, mutate} = useSWR<User[]>('/api/users/.json', Users.list)

    if (error) {
        return <div>failed to load</div>
    }

    if (users) {
        const currentUser = users.find(user => user.current)
        const userMenuItems = users.map(user => <MenuItem key={user.id} value={user.id}>{user.email}</MenuItem>)
        const handleChange = (e) => {
            const {value} = e.target
            Users.setCurrent(value).then(() => mutate())
        }
        const userSelector = <Select
            value={currentUser?.id}
            label="Current Users"
            onChange={handleChange}
        >
            {userMenuItems}
        </Select>

        return <UserForm>
            { userSelector }
        </UserForm>
    } else {
        return null
    }
}