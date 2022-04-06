import React from 'react';
import { Box, Avatar, Typography, useTheme, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';

import { RiCalendarTodoLine } from 'react-icons/ri';
import { HiOutlineClock } from 'react-icons/hi';
import { dateFormatter2 } from '../../helpers/dateFormatter';

export default function Singleevent({ page, to = '/', title, event_link, event_state, event_lga, from, event_id, event_image1 }) {
    const theme = useTheme();

    return (
        <Paper
            component={Link}
            to={`/event-detail/${page}/${event_id}`}
            sx={{
                ...theme.typography.column,
                height: 'max-content',
                width: '240px',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 5px',
                margintop: '30px !important',
                cursor: 'pointer',
                textDecoration: 'none'

                //   [theme.breakpoints.down('sm')]: {
                //   display: 'flex !important'
                //    flexDirection: 'row'
                //  }
            }}
        >
            <Avatar
                alt="Remy Sharp"
                src={`https://kokoruns.s3.eu-west-3.amazonaws.com/${page}/events/eventimages/${event_image1}`}
                sx={{ width: 110, height: 110 }}
            />
            <Typography sx={{ fontWeight: '600', marginBottom: '-5px !important' }}> {title} </Typography>
            <Typography sx={{ visibility: 'hidden' }} variant="caption">
                {event_link}
            </Typography>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ borderRight: '1px dashed #C4C4C4', paddingRight: '15px' }}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '-5px !important', textAlign: 'center' }}>
                        <RiCalendarTodoLine />
                    </Typography>
                    <Typography sx={{ ...theme.typography.caption }}>14:30</Typography>
                </Box>
                <Box sx={{ borderRight: '1px dashed #C4C4C4', padding: '0 15px' }}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '-5px !important', textAlign: 'center' }}>
                        <IoLocationOutline />
                    </Typography>
                    <Typography sx={{ ...theme.typography.caption }}>
                        {event_lga} <br /> {event_state}
                    </Typography>
                </Box>
                <Box sx={{ paddingLeft: '15px' }}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '-5px !important', textAlign: 'center' }}>
                        <HiOutlineClock />
                    </Typography>
                    <Typography sx={{ ...theme.typography.caption }}>{dateFormatter2(from)}</Typography>
                </Box>
            </Box>
        </Paper>
    );
}
