import React from 'react';
<<<<<<< HEAD
import { Box, Typography, Button, useTheme, CircularProgress } from '@mui/material';
import { WarningIcon } from '../../assets/images/icons/svg_icons';

export default function Warning({ onYesClick, onNoClick, text, load }) {
=======
import { Box, Typography, Button, useTheme } from '@mui/material';
import { WarningIcon } from '../../assets/images/icons/svg_icons';

export default function Warning({ onYesClick, onNoClick, text }) {
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
    const theme = useTheme();
    return (
        <Box sx={{ ...theme.typography.column, alignItems: 'center' }}>
            <WarningIcon />
            <Typography sx={{ margin: '25px 0', fontSize: '0.9rem', lineHeight: '15px', textAlign: 'center', width: '300px' }}>
                {text}
            </Typography>
            <Box sx={{ ...theme.typography.flex, gap: '10px' }}>
                <Button onClick={onNoClick} sx={{ padding: '6px 50px', textTransform: 'capitalize' }} disableElevation variant="outlined">
                    No
                </Button>
<<<<<<< HEAD
                <Button
                    startIcon={load ? <CircularProgress color="secondary" size="1rem" /> : null}
                    onClick={onYesClick}
                    sx={{ padding: '6px 50px', textTransform: 'capitalize' }}
                    disableElevation
                    variant="contained"
                >
=======
                <Button onClick={onYesClick} sx={{ padding: '6px 50px', textTransform: 'capitalize' }} disableElevation variant="contained">
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
                    Yes
                </Button>
            </Box>
        </Box>
    );
}
