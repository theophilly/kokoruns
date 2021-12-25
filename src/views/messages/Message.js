import React from 'react';
import {
    Grid,
    Paper,
    Avatar,
    Typography,
    useTheme,
    InputBase,
    Select,
    MenuItem,
    Box,
    useMediaQuery,
    styled,
    Badge,
    OutlinedInput
} from '@mui/material';

export default function Message() {
    const theme = useTheme();
    return (
        <Box sx={{ ...theme.typography.column, width: 'max-content' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Avatar alt="Remy Sharp" src="./samantha.jpg" sx={{ width: 35, height: 35, mr: '10px', mb: '3px' }} />
                <Typography sx={{ bgcolor: '#CEE9FF', padding: '15px', borderRadius: '10px', width: '500px' }}>
                    Hi, hope you had enough rest during the weekend? Let’s talk when you are free today?
                </Typography>
            </Box>
            <Typography sx={{ alignSelf: 'flex-end' }} variant="caption">
                03:25
            </Typography>
        </Box>
    );
}
