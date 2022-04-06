import React from 'react';
import { Box, useTheme } from '@mui/material';
import Singleevent from '../../../Myevents/Singleevent';
import { Createteam } from '../../../Myevents';
import { useSelector } from 'react-redux';

export default function Events() {
    const { associationevents } = useSelector((state) => state.userDataReducer.events);
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                [theme.breakpoints.down('sm')]: {
                    justifyContent: 'center'
                }
            }}
        >
            {associationevents.map((item) => (
                <Singleevent page="associations" {...item} />
            ))}

            {/* create team */}
            <Box sx={{ marginTop: '20px' }}>
                <Createteam text="Create Event" to="/create-association-event" />
            </Box>
        </Box>
    );
}
