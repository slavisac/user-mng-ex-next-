import { Avatar, Box, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

import Person from "@mui/icons-material/Person";
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';

import { getInitials } from "../utility/get-initials";

import css from "../styles/SidebarMenu.module.css";

const NavMenu = () => {

    const router = useRouter();

    const [anchorEl, setAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleAbout = async (e) => {
        e.preventDefault();
        router.push("/about");
    }

    const handleLogout = async (e) => {
        e.preventDefault();
        router.push("/login");
    }

    const menuId = "account-menu";
    const renderMenu = (
        <Menu 
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon >
                    <Person fontSize="small" className={css.colored}/>
                </ListItemIcon>
                <ListItemText className={css.colored}>My account</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleAbout} >
                <ListItemIcon>
                    <InfoIcon fontSize="small" className={css.colored}/>
                </ListItemIcon>
                <ListItemText className={css.colored}>About</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                    <LogoutIcon fontSize="small" className={css.colored}/>
                </ListItemIcon>
                <ListItemText className={css.colored}>Logout</ListItemText>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <Typography mr={1}>
                        Slavisa Cicovic
                    </Typography>
                    <Avatar>
                        {getInitials('Slavisa Cicovic')}
                    </Avatar>
                </IconButton>
            </Box>
            {renderMenu}            
        </>
    )
}

export default NavMenu;