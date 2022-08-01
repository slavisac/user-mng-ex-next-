import { Card, CardContent, CardHeader, Grid, Link, Typography } from '@mui/material';
import Image from 'next/image';
import mdLogo from '../../public/md-logo.png';
import { Text } from '../text';


export const AbaoutMDPanel = (props) => (
    <Card
        sx={{ height: '100%' }}
        {...props}
    >
        <CardHeader title={props.title}
            sx={{
                color: 'primary.contrastText',
                backgroundColor: 'primary.main'
            }}
        />
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={4} direction="column" mt={2}>
                    <Image src={mdLogo} width="135px" height="135px" alt="MDLogo" />
                </Grid>
                <Grid item xs={7} direction="column" >
                    <Text title="MD Software & Design" />
                    <Text title="Michael Dudenko" />
                    <Text title="53347 Alfter" />
                    <Text title="Deutschland" />
                    <br />
                    <Link target="_blank" color="primary.main" href="mailto:info@md-softwaredesign.de">
                        info@md-softwaredesign.de
                    </Link>
                    <br />
                    <Link target="_blank" color="primary.main" href="https://www.md-softwaredesign.de/">
                        https://www.md-softwaredesign.de/
                    </Link>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);
