import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/copyright';
import PrimaryAppBar from '../components/primaryAppBar';
import { blue } from '@mui/material/colors';
import Image from 'next/image';

import headerLogo from '../public/header-logo.png';
import backgroundImg from '../public/background.png';

const theme = createTheme();

const styles = {
  gridContainer: {
      backgroundImage: `url(${backgroundImg})`,
      minHeight: '80vh'
  }
};

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <PrimaryAppBar link="/about" />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"      
          style={styles.gridContainer}>
          <Box
            sx={{
              mx: 'auto',
              justifyContent: 'center',
              boxShadow: 4,
              display: 'flex',
              padding: 5,
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image src={headerLogo} width="135px" height="28.5px" alt="Logo" />
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/table" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
