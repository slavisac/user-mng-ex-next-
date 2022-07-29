import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';


export default function Footer() {
    const ref = React.useRef(null);

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

                <Box
                    padding={2.4}
                    sx={{
                        bgcolor: 'primary.main',
                    }}
                >

                    <Grid container justifyContent="flex-end" columns={4} spacing={4}>
                        <Grid item xs sx={{
                            color: 'primary.contrastText'
                        }}>
                            {'©'}{new Date().getFullYear()}
                            <a target="_blank" href="https://www.md-softwaredesign.de/index.php/startseite.html" rel="noopener noreferrer">
                                by MD Software & Design
                            </a>
                        </Grid>
                        <Grid item sx={{
                            color: 'primary.contrastText'
                        }}>
                            <a target="_blank" href="https://wheel.dentwizard.de/datenschutz/" rel="noopener noreferrer">
                                Datenschutz
                            </a>
                        </Grid>
                        <Grid item sx={{
                            color: 'primary.contrastText'
                        }}>
                            <a target="_blank" href="https://wheel.dentwizard.de/impressum/" rel="noopener noreferrer"                    >
                                Impressum
                            </a>
                        </Grid>
                        <Grid item sx={{
                            color: 'primary.contrastText'
                        }}>
                            <a target="_blank" href="https://wheel.dentwizard.de/agb/" rel="noopener noreferrer"                     >
                                AGB
                            </a>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
}

