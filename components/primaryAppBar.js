import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';

import headerLogo from '../public/header-logo.png';
import Link from 'next/link';


export default function PrimaryAppBar(props) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <a target="_blank" href="https://wheel.dentwizard.de/" rel="noopener noreferrer">
            <Image src={headerLogo} width="135px" height="28.5px" alt="Logo" />
          </a>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link href={props.link} variant="body2" >
              <InfoIcon sx={{
                cursor: 'pointer'
              }} />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
