import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';
import PropTypes from "prop-types";
import { useState } from 'react';
import { loadCSS } from 'fg-loadcss';
import { useEffect } from 'react';
import { AccountCircle, ExpandLess, ExpandMore } from '@mui/icons-material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

import css from "../styles/SidebarMenu.module.css";

const items = [
    {
        id: 'orders',
        title: 'Orders',
        type: 'item',
        url: '/orders',
        icon: <ListAltIcon className={css.colored} />
    },
    {
        id: 'items',
        title: 'Items',
        type: 'item',
        url: '/items',
        icon: <AccountCircle className={css.colored} />
    },
    {
        id: 'documents',
        title: 'Documents',
        type: 'item',
        url: '/documents',
        icon: <InsertDriveFileIcon className={css.colored} />
    },
    {
        id: 'customers',
        title: 'Customers',
        type: 'item',
        url: '/customers',
        icon: <AccountCircle className={css.colored} />
    },
    {
        id: 'userAdmin',
        title: 'User Administration',
        type: 'compose',
        icon: <PersonIcon className={css.colored} />,
        children: [
            {
                id: 'users',
                title: 'Users',
                type: 'item',
                url: '/admin/users',
                icon: <PersonIcon />
            },
            {
                id: 'purgedUser',
                title: 'Purged User',
                type: 'item',
                url: '/admin/purgedUser',
                icon: <PersonOffIcon />
            },
            {
                id: 'roles',
                title: 'Role List',
                type: 'item',
                url: '/admin/roles',
                icon: <AccountCircle />
            },
        ]
    },
    {
        id: 'admin',
        title: 'Administration',
        type: 'compose',
        icon: <SettingsSuggestIcon className={css.colored} />,
        children: [
            {
                id: 'domains',
                title: 'Domains',
                type: 'item',
                url: '/admin/domains',
                icon: <AccountCircle />
            },
            {
                id: 'companies',
                title: 'Companies',
                type: 'item',
                url: '/admin/companies',
                icon: <AccountCircle />
            },
            {
                id: 'products',
                title: 'Products',
                type: 'item',
                url: '/admin/products',
                icon: <AccountCircle />
            },
            {
                id: 'refunds',
                title: 'Refunds',
                type: 'item',
                url: '/admin/refunds',
                icon: <AccountCircle />
            },
            {
                id: 'passwords',
                title: 'Passwords settings',
                type: 'item',
                url: '/admin/passwords',
                icon: <AccountCircle />
            },
            {
                id: 'factoryDevices',
                title: 'Factory devices',
                type: 'item',
                url: '/admin/factoryDevices',
                icon: <AccountCircle />
            },
        ]
    },
    {
        id: 'settings',
        title: 'Settings',
        type: 'compose',
        icon: <AccountCircle className={css.colored} />,
        children: [
            {
                id: 'website',
                title: 'Website settings',
                type: 'item',
                url: '/admin/website',
                icon: <SettingsIcon />
            },
            {
                id: 'email',
                title: 'Email settings',
                type: 'item',
                url: '/admin/email',
                icon: <SettingsIcon />
            },
            {
                id: 'mobile',
                title: 'Mobile settings',
                type: 'item',
                url: '/admin/mobile',
                icon: <SettingsIcon />
            },
            {
                id: 'app',
                title: 'Application settings',
                type: 'item',
                url: '/admin/application',
                icon: <SettingsIcon />
            },
        ]
    },
]

const SimpleMenuItem = (item, open) => {

    const router = useRouter();

    const handleLinkClick = async (e) => {
        e.preventDefault();
        router.push(item.url);
    }

    useEffect(() => {
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
            // Inject before JSS
            document.querySelector('#font-awesome-css') || document.head.firstChild,
        );

        return () => {
            node.parentNode.removeChild(node);
        };
    }, []);

    return (
        <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
            <ListItemButton
                onClick={handleLinkClick}
                sx={{
                    justifyContent: open ? "initial" : "center",
                    px: 2,
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                    }}
                >
                    {item.icon}
                </ListItemIcon>
                <ListItemText
                    className={css.colored}
                    primary={item.title}
                    sx={{
                        opacity: open ? 1 : 0,
                    }}
                />                
            </ListItemButton>
        </ListItem>
    );
}

SimpleMenuItem.propTypes = {
    item: PropTypes.func,
    open: PropTypes.bool,
};


const NestedItem = (item, open) => {
    const router = useRouter();

    const handleLinkClick = async (e) => {
        e.preventDefault();
        router.push(item.url);
    }

    return (
        <ListItemButton
            key={item.id}
            onClick={handleLinkClick}
            sx={{ py: 0, px: 3 }}
        >
            <ListItemIcon sx={{
                minWidth: 0,
                mr: open ? 1 : "auto",
                justifyContent: "center",
            }}>
                {item.icon}
            </ListItemIcon>
            <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                }}
                sx={{
                    color: 'text.secondary',
                    opacity: open ? 1 : 0
                }}
            />
        </ListItemButton>
    )
}

NestedItem.propTypes = {
    item: PropTypes.func,
    open: PropTypes.bool,
};

const ComposeMenuItem = (item, open) => {

    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => {
        setDropdown(!dropdown);
    };

    return (
        <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
            <ListItemButton
                onClick={handleClick}
                sx={{
                    justifyContent: open ? "initial" : "center",
                    px: 2,
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                    }}>
                    {item.icon}
                </ListItemIcon>
                <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                        mb: "1px",
                    }}
                    sx={{
                        opacity: open ? 1 : 0,
                    }}
                />
                {open && (dropdown ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            <Collapse in={dropdown} timeout="auto" unmountOnExit>
                {item.children.map((it) => (
                    NestedItem(it, open)
                ))}
            </Collapse>
        </ListItem>
    );
}

ComposeMenuItem.propTypes = {
    item: PropTypes.func,
    open: PropTypes.bool,
};


const SidebarMenu = (props) => {
    const { open } = props;

    const navItems = items.map((item) => {
        switch (item.type) {
            case 'compose':
                return ComposeMenuItem(item, open);
            default:
                return SimpleMenuItem(item, open);
        }
    });

    return <List className={css.colored} >{navItems}</List>
}

SidebarMenu.propTypes = {
    open: PropTypes.bool,
};

export default SidebarMenu;
