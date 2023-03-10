import {IconProps, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {AppSettingsAlt, Ballot, Group} from "@mui/icons-material";
import {ComponentType} from "react";

import NextLink from "next/link"

type SidebarItemProps = {
    text: String,
    href: String,
    Icon: ComponentType<IconProps>
}

const SidebarItem = ({text, href, Icon}: SidebarItemProps) => {
    return <ListItem disablePadding key={href}>
        <NextLink href={href} passHref>
            <Link underline="none" color="#000" component={ListItemButton}>
                <ListItemIcon>
                    <Icon/>
                </ListItemIcon>
                <ListItemText primary={text}/>
            </Link>
        </NextLink>
    </ListItem>
}

const Sidebar = () => {
    return <nav>
        <List>
            <SidebarItem text="Devices" href="/devices" Icon={AppSettingsAlt}/>
            <SidebarItem text="Profiles" href="/profiles" Icon={Ballot}/>
            <SidebarItem text="Users" href="/users" Icon={Group}/>
        </List>
    </nav>
}

export default Sidebar