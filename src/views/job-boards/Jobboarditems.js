import React from 'react';
import { Box, Avatar, Typography, useTheme, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

import { IoLocationOutline } from 'react-icons/io5';

import { RiCalendarTodoLine } from 'react-icons/ri';
import { HiOutlineClock } from 'react-icons/hi';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PlaceIcon from '@mui/icons-material/Place';
import WorkIcon from '@mui/icons-material/Work';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const IconBox = ({ icon, text }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                '@media (max-width: 552px)': {
                    mr: '12px'
                }
            }}
        >
            {icon}
            <Typography
                sx={{
                    color: '#C4C4C4',
                    ml: '10px',
                    fontSize: '0.9rem',
                    '@media (max-width: 552px)': {
                        ml: '3px'
                    }
                }}
            >
                {text}
            </Typography>
        </Box>
    );
};

export default function Jobboarditems({ onclick }) {
    const theme = useTheme();
    return (
        <Paper
            onClick={onclick}
            sx={{
                width: '100%',
                height: 'auto',
                textDecoration: 'none',
                padding: '15px',
                boxShadow: 'none',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                justifyContent: 'space-between',
                '@media (max-width: 552px)': {
                    flexDirection: 'column',
                    alignItems: 'baseline',
                    padding: '5px',
                    justifyContent: 'center !important'
                    //  border: '1px solid red'
                }
            }}
        >
            {/* first box */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box component="img" src="./dash.jpg" sx={{ height: '100px', width: '100px', borderRadius: '3px', mr: '15px' }} />
                <Box>
                    <Typography sx={{ fontWeight: '600' }}>UI/UX Designer</Typography>
                    <Typography sx={{ color: '#C4C4C4', margin: '5px 0' }}>
                        Kokoruns Ltd
                        <Box
                            sx={{
                                width: '10px',
                                display: 'inline-block',
                                height: '10px',
                                borderRadius: '50%',
                                background: '#C4C4C4',
                                margin: '0 7px'
                            }}
                        />
                        Hybrid
                    </Typography>
                    <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '0.8rem' }}>
                        Today
                        <Box
                            sx={{
                                width: '10px',
                                display: 'inline-block',
                                height: '10px',
                                borderRadius: '50%',
                                background: '#C4C4C4',
                                margin: '0 7px'
                            }}
                        />
                        <RemoveRedEyeIcon sx={{ mr: '7px' }} fontSize="small" /> 54 views{' '}
                        <Box
                            sx={{
                                width: '10px',
                                display: 'inline-block',
                                height: '10px',
                                borderRadius: '50%',
                                background: '#C4C4C4',
                                margin: '0 7px'
                            }}
                        />
                        8 Applied
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    '@media (max-width: 552px)': {
                        marginTop: '7px',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }
                }}
            >
                <IconBox text="Lagos, Nigeria" icon={<PlaceIcon fontSize="small" sx={{ color: theme.palette.text }} />} />
                <Box sx={{ margin: '5px 0' }}>
                    <IconBox text="2yrs Experience" icon={<WorkIcon fontSize="small" sx={{ color: theme.palette.text }} />} />
                </Box>
                <IconBox text="N250,000" icon={<CreditCardIcon fontSize="small" sx={{ color: theme.palette.text }} />} />
            </Box>
        </Paper>
    );
}
