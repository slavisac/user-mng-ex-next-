import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import lightTheme from "../styles/theme/lightTheme";

export default function EmptyLayout(){

    return (
        <ThemeProvider theme={lightTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                Page not found                
            </Box>
        </ThemeProvider>
    );
}