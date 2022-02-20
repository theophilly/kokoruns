import React from 'react';
import { Box, Grid, Avatar, Typography, useTheme, Button, Select, MenuItem, InputBase } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import Teamsbox from '../teams/Teambox';

const DiscoverTeams = () => {
    const theme = useTheme();

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

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

                        <Select
                            sx={{
                                height: '39px',
                                width: '200px',
                                marginLeft: '15px',
                                background: 'white',
                                borderRadius: '0px'
                            }}
                            onChange={handleChange}
                            displayEmpty
                            placeholder="filter by name"
                            value={age}
                        >
                            <MenuItem value="">
                                <em>filter by name</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
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

                {/* Recommended */}
                <Grid xs={12}>
                    <Typography
                        sx={{
                            ...theme.typography.heading,
                            mt: '10px',
                            [theme.breakpoints.down('sm')]: {
                                mt: '20px'
                            }
                        }}
                    >
                        Recommended
                    </Typography>
                </Grid>
                <Grid xs={12} item>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '20px',
                            marginTop: '15px',
                            [theme.breakpoints.down('sm')]: {
                                justifyContent: 'center'
                            }
                        }}
                    >
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                    </Box>
                </Grid>
                {/* Popular */}
                <Grid xs={12}>
                    <Typography sx={{ ...theme.typography.heading, mt: '20px' }}>Popular</Typography>
                </Grid>
                <Grid xs={12} item>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '20px',
                            marginTop: '20px',
                            [theme.breakpoints.down('sm')]: {
                                justifyContent: 'center'
                            }
                        }}
                    >
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                    </Box>
                </Grid>

                {/* Others */}
                <Grid xs={12}>
                    <Typography sx={{ ...theme.typography.heading, mt: '20px' }}>Others</Typography>
                </Grid>
                <Grid xs={12} item>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '30px',
                            marginTop: '15px',
                            [theme.breakpoints.down('sm')]: {
                                justifyContent: 'center'
                            }
                        }}
                    >
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                        <Teamsbox to="/discover-team-details" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DiscoverTeams;
