import React from 'react';
import {
    Box,
    Grid,
    Avatar,
    Typography,
    useTheme,
    Button,
    Select,
    FormControl,
    OutlinedInput,
    MenuItem,
    InputBase,
    Paper,
    Divider
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import AddIcon from '@mui/icons-material/Add';

import { Link } from 'react-router-dom';
import SubCard from '../../ui-component/cards/SubCard';
import Jobitem from './Jobitem';

const Jobdash = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery('(min-width:600px)');

    return (
        <Box
            sx={{
                width: '100%',
                padding: '10px',
                [theme.breakpoints.down('sm')]: {
                    padding: '0px'
                }
            }}
        >
            <Grid spacing={2} container>
                <Grid xs={12} md={8.8} item>
                    <Box>
                        <Typography sx={{ ...theme.typography.title2, color: theme.palette.text, fontFamily: 'Mulish' }}>
                            Jobdash
                        </Typography>
                        <Typography sx={{ ...theme.typography.heading }}>Jobs Application</Typography>
                        {/* job listings */}
                        <Box sx={{ ...theme.typography.column, gap: '12px', mt: '20px' }}>
                            {Array(10)
                                .fill('')
                                .map((item) => (
                                    <Jobitem />
                                ))}
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} md={3.2} item>
                    <SubCard sx={{ boxShadow: 'none' }}>
                        {/* about user */}

                        <Box
                            sx={{
                                ...theme.typography.column,
                                height: '200px',
                                //  border: '1px solid red',
                                alignItems: 'center',
                                paddingTop: '20px'
                            }}
                        >
                            <Avatar alt="Remy Sharp" src="./register.png" sx={{ width: 100, height: 100 }} />
                            <Box mt="3px">
                                <Typography sx={{ ...theme.typography.heading, fontWeight: 'bold', textAlign: 'center', mt: '5px' }}>
                                    Adejola Ademola
                                </Typography>
                                <Typography sx={{ textAlign: 'center', fontSize: '0.8rem', mt: '2px' }}>UI/UX Designer</Typography>
                            </Box>
                        </Box>

                        {/*  details */}
                        <Divider
                            sx={{
                                opacity: 1,
                                borderColor: '#CCCCCC',
                                width: '100%'
                            }}
                        />
                        <Box sx={{ marginTop: '10px' }} title="About">
                            <Box sx={{ display: 'flex' }}>
                                <Typography sx={{ fontSize: '0.8rem' }}>Function: </Typography>
                                <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0991FF', ml: '5px' }}>
                                    User Experience Designer
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mt: '5px' }}>
                                <Typography sx={{ fontSize: '0.8rem' }}> Company: </Typography>
                                <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0991FF', ml: '5px' }}>
                                    Kokoruns Ltd
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mt: '5px' }}>
                                <Typography sx={{ fontSize: '0.8rem' }}> Education: </Typography>
                                <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0991FF', ml: '5px' }}>
                                    B.Sc,Medcine
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mt: '5px' }}>
                                <Typography sx={{ fontSize: '0.8rem' }}> Languages: </Typography>
                                <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0991FF', ml: '5px' }}>
                                    English, Yoruba, German
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mt: '5px' }}>
                                <Typography sx={{ fontSize: '0.8rem' }}> Phone Number: </Typography>
                                <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0991FF', ml: '5px' }}>
                                    0907 654 3210
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mt: '5px' }}>
                                <Typography sx={{ fontSize: '0.8rem' }}> Email: </Typography>
                                <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0991FF', ml: '5px' }}>
                                    adejolaofademola@mail.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mt: '5px' }}>
                                <Typography sx={{ fontSize: '0.8rem' }}> Location: </Typography>
                                <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0991FF', ml: '5px' }}>
                                    Lagos, Nigeria
                                </Typography>
                            </Box>
                        </Box>
                    </SubCard>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Jobdash;
