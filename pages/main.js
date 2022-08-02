import Head from 'next/head';
import { Box, Container, CssBaseline, Grid } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserListToolbar } from '../components/user/user-list-toolbar';
import { UserListResults } from '../components/user/user-list-results';
import PrimaryAppBar from '../components/primaryAppBar';
import { users } from '../__mocks__/users';

const theme = createTheme();


const DashboardContent = () => (
  <Box
    component="main"
    maxWidth="xs"
    sx={{
      flexGrow: 1,
      py: 6,
    }}
  >
    <UserListToolbar />
    <Box sx={{ mt: 3 }}>
      <UserListResults users={users} />
    </Box>
  </Box>
)

const Dashboard = () => (

  <ThemeProvider theme={theme}>
    <Head>
      <title>
        eWheel | Home
      </title>
    </Head>
    <CssBaseline />
    <DashboardLayout>
      <Container component="main"
        maxWidth={false} >
        <DashboardContent />
      </Container>
    </DashboardLayout>
  </ThemeProvider>

);


export default Dashboard;
