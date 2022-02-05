import React from 'react';
import { Box, Avatar, Typography, useTheme, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Teammember({ dontShow, to }) {
    const theme = useTheme();
    return (
        <Paper
            component={to && Link}
            sx={{
                ...theme.typography.column,
                height: 'max-content',
                width: '200px',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 0',
                margintop: '30px !important',
                cursor: 'pointer',
                textDecoration: 'none'
            }}
            to={to && to}
        >
            <Avatar alt="Remy Sharp" src="./register.png" sx={{ width: 110, height: 110 }} />
            <Typography sx={{ fontWeight: '600', marginBottom: '-5px !important' }}> Friends of Figma</Typography>
            <Typography sx={{}} variant="caption">
                A committee of avid users of Figma
            </Typography>
            {!dontShow && (
                <Box>
                    <Typography sx={{ fontWeight: '600', marginTop: '-5px !important', color: theme.palette.secondary.main1 }}>
                        Remove
                    </Typography>
                </Box>
            )}
        </Paper>
    );
}
