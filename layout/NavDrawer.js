import * as React from "react";
import { Box, styled, useTheme, useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { ThemeProvider } from "@emotion/react";
import lightTheme from "../styles/theme/lightTheme";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function NavDrawer({ children }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [active, setActive] = React.useState(false);

    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerOpen = () => {
        active === true ? setOpen(true) : {};
    };

    const handleDrawerClose = () => {
        active === true ? setOpen(false) : {};
    };

    const handleActiveToggle = () => {
        if (active === true) {
            setOpen(true);
            setActive(false);
        } else {
            setOpen(false);
            setActive(true);
        }
    };

    return (
        <ThemeProvider theme={lightTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Header
                    open={!matchDownMd && open}
                    handleActiveToggle={handleActiveToggle}
                />
                <Sidebar
                    handleDrawerOpen={handleDrawerOpen}
                    handleDrawerClose={handleDrawerClose}
                    open={!matchDownMd && open}
                />
                <Box component="main" sx={{ flexGrow: 1 }}>
                    <DrawerHeader />
                    {children}
                </Box>
            </Box>
        </ThemeProvider>
    );
}
