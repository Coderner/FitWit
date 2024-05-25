import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Typography sx={{ fontSize: { lg: '16px', xs: '12px' } }} mt="41px" textAlign="center">
      Created by @Coderner
    </Typography>
  </Box>
);

export default Footer;