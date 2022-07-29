import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PrimaryAppBar from '../components/primaryAppBar';
import Footer from '../components/footer';


const theme = createTheme();

export default function About() {
  
  return (
    <ThemeProvider theme={theme}>
      <PrimaryAppBar link="/"/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box  sx={{ mt: 1 }}>
            
          </Box>
        </Box>
        <Footer/>
      </Container>
    </ThemeProvider>
  );
}
