import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Esolutions() {
    const theme = useTheme();
    return (
        <Box sx={{ ...theme.typography.flex, minHeight: '40vh' }}>
            <Typography sx={{ ...theme.typography.title3, textAlign: 'center', lineHeight: '30px' }}>
                Kindly set up your <br /> e-Solution here
            </Typography>
        </Box>
    );
}
