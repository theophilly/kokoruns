import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { InputBase, Avatar, Typography, Button, Box, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SubCard from '../../ui-component/cards/SubCard';
import Teammember from '../teams/Teammember';

export default function RequestRecommendation() {
    const theme = useTheme();
    return (
        <SubCard sx={{ pb: '60px' }}>
            <Box>
                <Typography sx={{ fontWeight: '600', fontSize: '1.3rem', ml: '15px', mb: '5px', color: theme.palette.textColor }}>
                    Send Request for Recommendation
                </Typography>
                <Box sx={{ display: 'flex', padding: '10px 0' }}>
                    <Box
                        sx={{
                            padding: '0 5px',
                            background: 'white',
                            height: '33px',
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '15px',
                            border: '1px solid #C4C4C4',
                            width: '400px',
                            '&:hover': {
                                border: '1px solid  rgba(0, 0, 0, 0.87)'
                            }
                        }}
                    >
                        <InputBase
                            placeholder="Search by name"
                            sx={{
                                height: '25px',
                                width: '100%',
                                background: 'white'
                            }}
                        />
                        <Avatar sx={{ bgcolor: theme.palette.primary.main, height: '25px', width: '30px' }} variant="square">
                            <SearchIcon fontSize="small" />
                        </Avatar>
                    </Box>
                </Box>
                {/* peoples list */}
                <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap', mt: '20px' }}>
                    <Teammember to="/send-recommendation" dontShow />
                    <Teammember to="/send-recommendation" dontShow />
                    <Teammember to="/send-recommendation" dontShow />
                    <Teammember to="/send-recommendation" dontShow />
                    <Teammember to="/send-recommendation" dontShow />
                    <Teammember to="/send-recommendation" dontShow />
                    <Teammember to="/send-recommendation" dontShow />
                </Box>
            </Box>
        </SubCard>
    );
}
