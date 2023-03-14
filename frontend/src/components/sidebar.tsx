import {Drawer, IconProps, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
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
        <NextLink href={href} passHref legacyBehavior>
            <Link underline="none" color="#000" width="100%" component={ListItemButton}>
                <ListItemIcon>
                    <Icon/>
                </ListItemIcon>
                <ListItemText primary={text}/>
            </Link>
        </NextLink>
    </ListItem>
}

const Sidebar = () => {
    return <Drawer
        open={true}
        variant="persistent"
        sx={{
            [`& .MuiDrawer-paper`]: { width: "200px" }
        }}
    >
        <List>
            <SidebarItem text="Devices" href="/devices" Icon={AppSettingsAlt}/>
            <SidebarItem text="Profiles" href="/profiles" Icon={Ballot}/>
            <SidebarItem text="Users" href="/users" Icon={Group}/>
        </List>
    </Drawer>
}

export default Sidebar