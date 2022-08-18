import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import PropTypes from "prop-types";
import Image from "next/image";
import SidebarMenu from "./SidebarMenu";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar(props) {
  const { handleDrawerOpen, handleDrawerClose, open } = props;

  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
      })}
    >
      <Drawer
        variant="permanent"
        open={open}
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
        sx={{
          boxShadow: 8,
        }}
      >
        <DrawerHeader>
          <ListItemButton component="a" href="/">
            <Image
              src="/images/header-logo2.png"
              layout="intrinsic"
              width={196.68}
              height={39.84}
              alt="Logo"
            />
          </ListItemButton>
        </DrawerHeader>
        <Divider />
        <SidebarMenu open={open} />
      </Drawer>
    </ThemeProvider>
  );
}

Sidebar.propTypes = {
  handleDrawerOpen: PropTypes.func,
  handleDrawerClose: PropTypes.func,
  open: PropTypes.bool,
};
