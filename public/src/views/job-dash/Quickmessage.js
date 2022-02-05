import React from 'react';
import { Box, Grid, Typography, useTheme, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import AddIcon from '@mui/icons-material/Add';

import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import SubCard from '../../ui-component/cards/SubCard';
import Jobitem from './Jobitem';

const status = {
    sender: <BsFillArrowUpCircleFill style={{ fontSize: '1.4rem' }} />,
    reciever: <BsFillArrowDownCircleFill style={{ fontSize: '1.4rem' }} />
};

const Quickmessage = ({ openModal }) => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery('(min-width:600px)');

    return (
        <Box
            sx={{
                width: '100%',
                // padding: '10px',
                minHeight: '100px',
                height: 'auto',
                display: 'flex',
                border: '1px solid black',
                borderRadius: '5px',
                mt: '10px',
                [theme.breakpoints.down('sm')]: {
                    padding: '5px'
                }
            }}
        >
            {/* icon */}
            <Box
                sx={{
                    ...theme.typography.flex,
                    minHeight: '100px',
                    height: 'auto',
                    width: '100px'
                    //  border: '1px solid red'
                }}
            >
                {status['sender']}
            </Box>
            {/* content */}
            <Box sx={{ ...theme.typography.column, justifyContent: 'center' }}>
                <Typography sx={{ fontWeight: '600', fontSize: '1.1rem' }}>Subject: UI/UX Designer</Typography>
                <Typography sx={{ fontWeight: '600', color: theme.palette.textColor1 }}>From: Recruiting Team</Typography>
                <Box>
                    <Typography sx={{ color: theme.palette.textColor1 }} variant="caption">
                        Thank you for your time yesterday. I'd like to inform you that we decided to go with someone else for this role.
                        This decision was made...
                    </Typography>
                    <Box onClick={() => openModal()} sx={{ color: theme.palette.primary.main, cursor: 'pointer', display: 'inline' }}>
                        Read more
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Quickmessage;
