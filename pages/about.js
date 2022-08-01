import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PrimaryAppBar from '../components/primaryAppBar';
import Footer from '../components/footer';
import { Box, Grid, Typography } from '@mui/material';
import { AbaoutMDPanel } from '../components/about/md-panel';
import { AbaoutApplicationPanel } from '../components/about/application-panel';


const theme = createTheme();


const About = () => (

  <ThemeProvider theme={theme}>
    <PrimaryAppBar link="/" />
    <Container component="main" >
      <CssBaseline />
      <Box
        component="main"
        maxWidth="xs"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Grid
          container
          spacing={3}
        >
          <Grid item xs={6} direction="column" >
            <AbaoutApplicationPanel title="Application"/>
          </Grid>
          <Grid item xs={6} direction="column" >
            <AbaoutMDPanel title="Technical support"/>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Container>
  </ThemeProvider>

);


export default About;
