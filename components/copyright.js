import { Link, Typography } from "@mui/material";

export default function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'©'}{new Date().getFullYear()}
      <Link color="inherit" href="https://www.md-softwaredesign.de/index.php/startseite.html">
        by MD Software & Design
      </Link>
    </Typography>
  );
}
