import {
    Box,
    Drawer,
    IconProps,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import {AppSettingsAlt, Ballot, CloudSync, FilterDrama, Group} from "@mui/icons-material";
import {ComponentType} from "react";

import NextLink from "next/link"
import UserSelector from "@/components/user_selector";

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
        variant="permanent"
        sx={{
            [`& .MuiDrawer-paper`]: {width: "200px"}
        }}
    >
        <Typography variant="h6" sx={{ margin: "0 auto" }}>
            <FilterDrama sx={{position: "relative", top: 4}}/> SimplerMDM
        </Typography>
        <List>
            <SidebarItem text="Devices" href="/devices" Icon={AppSettingsAlt}/>
            <SidebarItem text="Profiles" href="/profiles" Icon={Ballot}/>
            <SidebarItem text="Users" href="/users" Icon={Group}/>
        </List>
        <Box sx={{position: "absolute", bottom: 1, width: "100%"}}>
            <UserSelector/>
        </Box>
    </Drawer>
}

export default Sidebar