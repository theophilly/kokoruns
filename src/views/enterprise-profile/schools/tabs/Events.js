import React, { useEffect } from 'react';
import { Box, useTheme } from '@mui/material';
import Singleevent from '../../../Myevents/Singleevent';
import { Createteam } from '../../../Myevents';
import { useSelector } from 'react-redux';

export default function Events() {
    const { schoolevents } = useSelector((state) => state.userDataReducer.events);
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
            {schoolevents.map((item) => (
                <Singleevent page="schools" {...item} />
            ))}

            {/* create team */}
            <Box sx={{ marginTop: '20px' }}>
                <Createteam to="/create-school-event" />
            </Box>
        </Box>
    );
}