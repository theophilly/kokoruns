import React from 'react';
import { Box, Avatar, Typography, useTheme, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
//import IoLocationOutline from '@mui/icons-material/Place';
import { IoLocationOutline } from 'react-icons/io5';

import { RiCalendarTodoLine } from 'react-icons/ri';
import { HiOutlineClock } from 'react-icons/hi';

export default function Singleevent({ to = '/' }) {
    const theme = useTheme();
    return (
        <Paper
            component={Link}
            to={to}
            sx={{
                ...theme.typography.column,
                height: 'max-content',
                width: '240px',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 0',
                margintop: '30px !important',
                cursor: 'pointer',
                textDecoration: 'none'
                // [theme.breakpoints.down('sm')]: {
                //     width: '80%'
                // }
            }}
        >
            <Avatar alt="Remy Sharp" src="./register.png" sx={{ width: 110, height: 110 }} />
            <Typography sx={{ fontWeight: '600', marginBottom: '-5px !important' }}> New Product Launch</Typography>
            <Typography sx={{}} variant="caption">
                Patricia, Nigeria
            </Typography>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ borderRight: '1px dashed #C4C4C4', paddingRight: '15px' }}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '-5px !important', textAlign: 'center' }}>
                        <RiCalendarTodoLine />
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="caption">
                        14:30
                    </Typography>
                </Box>
                <Box sx={{ borderRight: '1px dashed #C4C4C4', padding: '0 15px' }}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '-5px !important', textAlign: 'center' }}>
                        <IoLocationOutline />
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="caption">
                        Ikeja, Lagos
                    </Typography>
                </Box>
                <Box sx={{ paddingLeft: '15px' }}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '-5px !important', textAlign: 'center' }}>
                        <HiOutlineClock />
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="caption">
                        Dec 24, 2021
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
}
