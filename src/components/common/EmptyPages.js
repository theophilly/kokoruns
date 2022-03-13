import React from 'react';
import { Box } from '@mui/system';
import { Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function EmptyPages({ label }) {
    const theme = useTheme();
    return (
        <Box sx={{ ...theme.typography.flex, flexDirection: 'column', background: 'white', borderRadius: '5px' }}>
            <Box sx={{ height: '280px', width: '280px' }} component="img" src="./noQuery.png" />
            <Typography sx={{ ...theme.typography.heading }}>{label} not Set Up</Typography>
            <Typography sx={{ display: 'block', textAlign: 'center', margin: '20px 0 20px' }} variant="caption">
                This page is empty because {label} is not set up. <br /> Kindly set up your {label}.
            </Typography>
        </Box>
    );
}
