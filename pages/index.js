import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PrimaryAppBar from '../components/primaryAppBar';
import Image from 'next/image';
import * as Yup from 'yup';

import headerLogo from '../public/header-logo2.png';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { Card, Typography } from '@mui/material';
import Footer from '../components/footer';

const theme = createTheme();


const Login = () => {

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Password is required')
    }),
    onSubmit: () => {
      router.push('/table');
    }
  });

  return (
    <Box
      sx={{
        mx: 'auto',
        justifyContent: 'center',
        boxShadow: 0,
        display: 'flex',
        padding: 0,
        flexDirection: 'column',
        alignItems: 'center',
        mt: 17,
      }}
    >
      <Image src={headerLogo} width={260} height={55} alt="Logo" />
      <Card
        sx={{
          mx: 'auto',
          mt: 4,
          justifyContent: 'center',
          display: 'flex',
          padding: 4,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <Typography
            color="primary"
            variant="h5"
            display="flex"
            justifyContent="center">
            Login
          </Typography>
          <TextField
            error={Boolean(formik.touched.email && formik.errors.email)}
            fullWidth
            helperText={formik.touched.email && formik.errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="email"
            value={formik.values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(formik.touched.password && formik.errors.password)}
            fullWidth
            helperText={formik.touched.password && formik.errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="password"
            value={formik.values.password}
            variant="outlined"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            disabled={formik.isSubmitting}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/table"
                variant="body2"
                underline="hover"
                sx={{
                  cursor: 'pointer'
                }}>
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );

}

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
        <Login />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
