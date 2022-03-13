import React from 'react';
import { Box, Grid, Avatar, Typography, useTheme, Button, InputBase, Paper } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Singleevent from './Singleevent';

import { Link } from 'react-router-dom';

export const Createteam = ({ text = 'Create Team', to = '/create-event' }) => {
    const theme = useTheme();
    return (
        <Paper
            component={Link}
            to={to}
            sx={{
                ...theme.typography.flex,
                height: '210px',
                width: '200px',
                flexDirection: 'column',
                gap: '8px',
                padding: '13px 0',
                margintop: '30px !important',
                textDecoration: 'none',
                cursor: 'pointer'
            }}
        >
            <Avatar sx={{ bgcolor: theme.palette.primary.main, height: '60px', width: '60px' }}>
                <AddIcon fontSize="large" />
            </Avatar>
            <Typography sx={{ fontWeight: '600', marginTop: '10px' }}> {text} </Typography>
        </Paper>
    );
};

const Myevents = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: '100%',
                padding: '10px',
                [theme.breakpoints.down('sm')]: {
                    padding: '10px 0'
                }
            }}
        >
            <Grid container>
                <Grid xs={12} item>
                    <Box sx={{ display: 'flex' }}>
                        <Button
                            disableElevation
                            sx={{ textTransform: 'capitalize', borderRadius: '0px', height: '39px' }}
                            variant="contained"
                        >
                            All
                        </Button>

                        <Box
                            sx={{
                                padding: '0 5px',
                                background: 'white',
                                height: '39px',
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: '15px',
                                border: '1px solid #C4C4C4',
                                '&:hover': {
                                    border: '1px solid  rgba(0, 0, 0, 0.87)'
                                }
                            }}
                        >
                            <InputBase
                                placeholder="Try “Aura Inc.”"
                                sx={{
                                    height: '30px',
                                    width: '100%',
                                    background: 'white'
                                }}
                            />
                            <Avatar sx={{ bgcolor: theme.palette.primary.main, height: '30px', width: '30px' }} variant="square">
                                <SearchIcon fontSize="small" />
                            </Avatar>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} item>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '20px',
                            marginTop: '15px',
                            [theme.breakpoints.down('sm')]: {
                                justifyContent: 'center',
                                mt: '20px'
                            }
                        }}
                    >
                        <Singleevent to="/your-events" />
                        <Singleevent to="/your-events" />
                        <Singleevent to="/your-events" />
                        <Singleevent to="/your-events" />
                        <Singleevent to="/your-events" />
                        <Singleevent to="/your-events" />
                    </Box>
                    {/* create team */}
                    <Box sx={{ marginTop: '20px' }}>
                        <Createteam />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Myevents;
