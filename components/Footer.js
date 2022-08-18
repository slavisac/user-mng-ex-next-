import * as React from "react";
import { AppBar, Grid } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ width: 1, position: "fixed", top: "auto", bottom: 0, padding: 2.4 }}
    >
      <Grid container justifyContent="flex-end" columns={4} spacing={4}>
        <Grid
          item
          xs
          sx={{
            color: "primary.contrastText",
          }}
        >
          {"©"}
          {new Date().getFullYear()}
          <a
            target="_blank"
            href="https://www.md-softwaredesign.de/index.php/startseite.html"
            rel="noopener noreferrer"
          >
            by MD Software & Design
          </a>
        </Grid>
        <Grid
          item
          sx={{
            color: "primary.contrastText",
          }}
        >
          <a
            target="_blank"
            href="https://wheel.dentwizard.de/datenschutz/"
            rel="noopener noreferrer"
          >
            Datenschutz
          </a>
        </Grid>
        <Grid
          item
          sx={{
            color: "primary.contrastText",
          }}
        >
          <a
            target="_blank"
            href="https://wheel.dentwizard.de/impressum/"
            rel="noopener noreferrer"
          >
            Impressum
          </a>
        </Grid>
        <Grid
          item
          sx={{
            color: "primary.contrastText",
          }}
        >
          <a
            target="_blank"
            href="https://wheel.dentwizard.de/agb/"
            rel="noopener noreferrer"
          >
            AGB
          </a>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Footer;
