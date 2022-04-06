import React from 'react';
import { Box, useTheme } from '@mui/material';
import Singleevent from '../../../Myevents/Singleevent';
import { Createteam } from '../../../Myevents';
import { useSelector } from 'react-redux';

export default function Events() {
    const { companyevents = [] } = useSelector((state) => state.userDataReducer.events);
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
            {companyevents.map((item) => (
                <Singleevent page="companies" {...item} />
            ))}

            {/* create team */}
            <Box sx={{ marginTop: '20px' }}>
                <Createteam text="Create Event" to="/create-company-event" />
            </Box>
        </Box>
    );
}
