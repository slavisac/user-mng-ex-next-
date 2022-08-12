import { ThemeProvider } from "@emotion/react";
import { Box, Button, CssBaseline, Typography } from "@mui/material";
import Link from "next/link";
import lightTheme from "../styles/theme/lightTheme";

export default function EmptyLayout() {

    return (
        <ThemeProvider theme={lightTheme}>
            <Box className='content-center'>
                <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', mt: '10%', alignItems: 'center', textAlign: 'center' }}>
                    <CssBaseline />
                    <Typography variant='h1'>404</Typography>
                    <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
                        Page Not Found ⚠️
                    </Typography>

                    <Link passHref href='/'>
                        <Button component='a' variant='contained' sx={{ px: 5.5 }}>
                            Back to Home
                        </Button>
                    </Link>
                </Box>
            </Box>
        </ThemeProvider>
    );
}