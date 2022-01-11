import React from 'react';
import { Box, Avatar, Typography, useTheme, Paper, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
import WorkIcon from '@mui/icons-material/Work';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const IconBox = ({ icon, text }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {icon}
            <Typography sx={{ color: '#C4C4C4', ml: '10px', fontSize: '0.9rem' }}>{text}</Typography>
        </Box>
    );
};

export default function Jobitem() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                minWidth: '100%',
                margintop: '30px',
                cursor: 'pointer',
                color: 'inherit',

                textDecoration: 'none'
                // [theme.breakpoints.down('sm')]: {
                //     width: '80%'
                // }
            }}
            component={Link}
            to="/job-details"
        >
            <Grid container>
                <Grid xs={12} item>
                    <Box
                        sx={{
                            background: 'white',
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '5px 20px 5px 5px',
                            '@media (max-width: 600px)': {
                                flexDirection: 'column'
                            }
                        }}
                    >
                        <Box sx={{ display: 'flex' }}>
                            <Box
                                component="img"
                                src="./samantha.jpg"
                                sx={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '3px' }}
                            />
                            <Box sx={{ ...theme.typography.column, justifyContent: 'space-around', padding: '5px 0', ml: '20px' }}>
                                <Typography sx={{ fontWeight: '700', color: theme.palette.text }}>UI/UX Designer</Typography>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', mb: '-10px !important', color: '#C4C4C4' }}>
                                        Kokoruns Ltd
                                    </Typography>
                                    <Typography sx={{ color: '#C4C4C4' }} variant="caption">
                                        Hybrid
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                '@media (max-width: 600px)': {
                                    display: 'flex',
                                    m: '5px'
                                }
                            }}
                        >
                            <IconBox text="Lagos, Nigeria" icon={<PlaceIcon fontSize="small" sx={{ color: theme.palette.text }} />} />
                            <IconBox text="2yrs Experience" icon={<WorkIcon fontSize="small" sx={{ color: theme.palette.text }} />} />
                            <IconBox text="N250,000" icon={<CreditCardIcon fontSize="small" sx={{ color: theme.palette.text }} />} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
