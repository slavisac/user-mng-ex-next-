import { Typography } from "@mui/material";

export const Text = (props) => {

    return (
        <Typography
            variant="body2"
            color="primary"
        >
            {props.title}
        </Typography>
    );
}
