import {IconProps, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {AppSettingsAlt, Ballot, Group} from "@mui/icons-material";
import {ComponentType, ReactNode} from "react";

type SidebarItemProps = {
    text: String,
    Icon: ComponentType<IconProps>
}

const SidebarItem = ({text, Icon}: SidebarItemProps) => {
    return <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <Icon/>
            </ListItemIcon>
            <ListItemText primary={text}/>
        </ListItemButton>
    </ListItem>
}

const Sidebar = () => {
    return <nav>
        <List>
            <SidebarItem text="Devices" Icon={AppSettingsAlt}/>
            <SidebarItem text="Profiles" Icon={Ballot}/>
            <SidebarItem text="Users" Icon={Group}/>
        </List>
    </nav>
}

export default Sidebar