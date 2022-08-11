import Head from "next/head";
import * as React from "react";
import Box from "@mui/material/Box";
import { AppBar, Card, CardContent, CardHeader, Grid, Toolbar, Typography } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Image from "next/image";
import Footer from "../components/Footer";
import { useRouter } from 'next/router'
import Link from "next/link";
import lightTheme from "../styles/theme/lightTheme";
import { ThemeProvider } from "@emotion/react";

const AboutLayout = ({ children }) => {

    const router = useRouter()

    const handleClick = () => {
        router.back()
    }

    return (
        <ThemeProvider theme={lightTheme} >
            <Box component="main" sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" >
                    <Toolbar>
                        <a target="_blank" href="https://wheel.dentwizard.de/" rel="noopener noreferrer">
                            <Image src="/images/header-logo.png" width="135px" height="28.5px" alt="Logo" />
                        </a>

                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <ExitToAppIcon
                                onClick={handleClick}
                                sx={{
                                    cursor: 'pointer'
                                }} />
                        </Box>
                    </Toolbar>
                </AppBar>
                {children}
                <Footer theme={lightTheme} />
            </Box>
        </ThemeProvider>
    );
}

export const Label = (props) => {

    return (
        <Typography
            color="primary"
            variant='subtitle2'
            mt={2}
            sx={{
                fontWeight: 'bold'
            }}
        >
            {props.title}
        </Typography>
    );
}

const Text = (props) => {

    return (
        <Typography
            variant="body2"
            color="primary"
            noWrap
        >
            {props.title}
        </Typography>
    );
}

const MDPanel = () => {
    return (
        <Card sx={{ height: 1 }}>
            <CardHeader
                title="Technical support"
                sx={{
                    color: 'primary.contrastText',
                    backgroundColor: 'primary.main'
                }} />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={4} direction="column" mt={2}>
                        <Image src="/images/md-logo.png" width="135px" height="135px" alt="MDLogo" />
                    </Grid>
                    <Grid item xs={8} direction="column" >
                        <Text title="MD Software & Design" />
                        <Text title="Michael Dudenko" />
                        <Text title="53347 Alfter" />
                        <Text title="Deutschland" />
                        <br />
                        <Link target="_blank" href="mailto:info@md-softwaredesign.de">
                            <Text title="info@md-softwaredesign.de" />
                        </Link>
                        <Link target="_blank" href="https://www.md-softwaredesign.de/">
                            <Text title="https://www.md-softwaredesign.de/" />
                        </Link>
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    )
}


const AppPanel = () => {
    return (
        <ThemeProvider theme={lightTheme} >
            <Card sx={{ height: 1 }}>
                <CardHeader
                    title="Application"
                    sx={{
                        color: 'primary.contrastText',
                        backgroundColor: 'primary.main'
                    }} />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4} direction="column" mt={2}>
                            <Image src="/images/header-logo2.png" width="135px" height="32px" alt="MDLogo" />
                        </Grid>
                        <Grid item xs={8} direction="column" >
                            <Label title="Unternehmen:" />
                            <Text title="Wheel Wizard Eine Betriebsstätte der DentWizard GmbH" />
                            <Label title="Anwendung:" />
                            <Text title="eWheel - TestExam1" />
                            <Label title="Version:" />
                            <Text title="0.0.0" />
                            <Label title="Copyright:" />
                            <Text title="MD Software & Design" />
                            <Text title="Michael Dudenko" />
                            <Text title="53347 Alfter" />
                            <Text title="Deutschland" />
                        </Grid>
                    </Grid>
                </CardContent>

            </Card>
        </ThemeProvider>
    )
}

const About = () => {

    return (
        <>
            <Head>
                <title>eWheel2 | About</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Grid
                mt={12}
                padding={1}
                container
                justifyContent='center'
                spacing={4}
            >
                <Grid item xs={12} sm={6} md={4}>
                    <AppPanel />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <MDPanel />
                </Grid>
            </Grid>

        </>
    );
}

About.Layout = AboutLayout;

export default About;