import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon, Typography
} from '@mui/material';
import { Upload as UploadIcon } from '../../icons/upload';
import { Download as DownloadIcon } from '../../icons/download';


export const UserListToolbar = (props) => (
    <Card {...props}>
        <Box
            sx={{
                padding: 1,
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                m: -1
            }}
        >
            <Typography
                sx={{ m: 1 }}
                variant="h4"
                color="primary"
            >
                Users
            </Typography>
            <Box sx={{ m: 1 }}>
                <Button
                    startIcon={(<UploadIcon fontSize="small" />)}
                    sx={{ mr: 1 }}
                >
                    Import
                </Button>
                <Button
                    startIcon={(<DownloadIcon fontSize="small" />)}
                    sx={{ mr: 1 }}
                >
                    Export
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                >
                    Add Users
                </Button>
            </Box>
        </Box>
    </Card>
);