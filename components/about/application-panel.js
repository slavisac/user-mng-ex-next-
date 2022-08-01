import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import Image from 'next/image';
import dwLogo from '../../public/header-logo2.png';
import { Label } from '../label';
import { Text } from '../text';


export const AbaoutApplicationPanel = (props) => (
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
                    <Image src={dwLogo} width="135px" height="32px" alt="MDLogo" />
                </Grid>
                <Grid item xs={7} direction="column" >
                    <Label title="Unternehmen:" />
                    <Text title=" Wheel Wizard Eine Betriebsstätte der Dent" />
                    <Text title="Wizard GmbH" />
                    <Label title=" Anwendung:" />
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
);
