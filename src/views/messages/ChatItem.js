import React from 'react';
import { Box, Badge, Avatar, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { shouldForwardProp } from '@mui/system';

const StyledBadge = styled(Badge)(({ theme, active }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: active ? '#44b700' : theme.palette.secondary.main1,
        color: active ? '#44b700' : theme.palette.secondary.main1,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""'
        }
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0
        }
    }
}));

export default function ChatItem({ active, name, src, time }) {
    const theme = useTheme();
    return (
        <Box sx={{ display: 'flex', mt: '15px', cursor: 'pointer' }}>
            <StyledBadge active={active} overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src={src} />
            </StyledBadge>
            <Box sx={{ ...theme.typography.column, flex: 1, ml: '10px', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Typography sx={{ fontWeight: '700' }}> {name} </Typography>
                    <Typography variant="caption"> {time} </Typography>
                </Box>
                <Typography variant="caption">Let’s try to get all the user s...</Typography>
            </Box>
        </Box>
    );
}
