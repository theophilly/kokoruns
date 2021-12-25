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

export default function Message({ owner = false }) {
    const theme = useTheme();
    return (
        <>
            {!owner && (
                <Box sx={{ ...theme.typography.column, width: 'max-content', mt: '10px' }}>
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
            )}

            {owner && (
                <Box sx={{ ...theme.typography.column, alignItems: 'flex-end', mt: '10px' }}>
                    <Box sx={{ width: '500px' }}>
                        <Typography sx={{ bgcolor: '#D6D6D6', padding: '15px', borderRadius: '10px', width: '500px' }}>
                            Hi, hope you had enough rest during the weekend? Let’s talk when you are free today?
                        </Typography>

                        <Typography sx={{ textAlign: 'start' }} variant="caption">
                            03:25
                        </Typography>
                    </Box>
                </Box>
            )}
        </>
    );
}
