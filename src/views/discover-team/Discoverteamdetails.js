import React from 'react';
import { Box, Grid, Avatar, Typography, useTheme, Button, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BiEditAlt } from 'react-icons/bi';
import LogoutIcon from '@mui/icons-material/Logout';

import SubCard from '../../ui-component/cards/SubCard';
import MainCard from '../../ui-component/cards/MainCard';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

import Teammember from '../teams/Teammember';
import Teamsbox from '../teams/Teambox';

const Createteambox = ({ onClick }) => {
    const theme = useTheme();
    return (
        <Paper
            onClick={onClick}
            sx={{
                ...theme.typography.flex,
                height: '218px',
                width: '200px',
                flexDirection: 'column',
                gap: '8px',
                //  mt: '20px',
                padding: '13px 0',
                margintop: '30px !important',
                cursor: 'pointer'
            }}
        >
            <Avatar sx={{ bgcolor: theme.palette.primary.main, height: '50px', width: '50px', cursor: 'pointer' }}>
                <AddIcon fontSize="large" />
            </Avatar>
            <Typography sx={{ fontWeight: '600', marginTop: '10px' }}>Add Member</Typography>
        </Paper>
    );
};

const Discoverteamdetails = () => {
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
                <Grid item xs={12}>
                    <SubCard>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
                            <Box sx={{ display: 'flex', mt: '15px', cursor: 'pointer' }}>
                                <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src="./student.png" />

                                <Box sx={{ ...theme.typography.column, flex: 1, ml: '15px', justifyContent: 'center' }}>
                                    <Typography sx={{ fontWeight: '700', color: theme.palette.text }}> Friends of Figma </Typography>

                                    <Typography variant="caption">A committee of avid users of Figma</Typography>
                                </Box>
                            </Box>
                            {/* buttons */}
                            <Box sx={{ ...theme.typography.column, mt: '15px' }}>
                                <Button
                                    sx={{
                                        width: '130px'
                                    }}
                                    disableElevation
                                    variant="contained"
                                >
                                    <Typography sx={{ fontSize: '0.9rem' }}> Join Group</Typography>
                                </Button>
                                <Button
                                    sx={{
                                        width: '130px',
                                        mt: '3px',
                                        border: `1px solid ${theme.palette.primary.main} !important`,
                                        '&:hover': {
                                            //  border: 'none !important'
                                        }
                                    }}
                                    variant="outlined"
                                >
                                    <Typography sx={{ fontSize: '0.9rem' }}> Go Back</Typography>
                                </Button>
                            </Box>
                        </Box>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontWeight: '600', m: '10px' }}>Team Members</Typography>
                    <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <Teammember />
                        <Teammember />
                        <Teammember />
                        <Teammember />
                        <Teammember />
                        <Teammember />
                        <Teammember />
                        <Teammember />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Discoverteamdetails;
