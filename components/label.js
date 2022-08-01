import { Typography } from "@mui/material";

export const Label = (props) => {

    return (
        <Typography
            color="primary"
            variant='subtitle2'
            mt={2}
        >
            {props.title}
        </Typography>
    );
}