import React from 'react';
import { Box, Grid, Avatar, Typography, useTheme, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import SubCard from '../../ui-component/cards/SubCard';
import MainCard from '../../ui-component/cards/MainCard';
import { BiEditAlt } from 'react-icons/bi';
import FullWidthTabs from './tabs';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    profile_cover_img: {
        height: '25vh',
        position: 'relative',
        zIndex: '1',
        minWidth: '100%',
        borderRadius: '10px',
        width: '100%',
        overflowY: 'hidden !important',
        overflowX: 'hidden !important',
        '& img': {
            objectFit: 'cover !important',
            width: '100%',
            objectPosition: '10% 40%'
        }
    },
    title: {
        ...theme.typography.heading,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    title_sub: {
        textAlign: 'center'
    },
    bio_card: {
        ...theme.typography.flex,
        height: '240px',
        background: '#0991FF',
        border: 'none',
        marginTop: '-8px',
        color: 'white',
        position: 'relative',
        overFlow: 'visible !important',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px'
    },
    bio_avatar: {
        position: 'absolute',
        zIndex: '4 !important',
        top: -50
    }
}));

const Profile = () => {
    const { root, profile_cover_img, title, bio_card, title_sub, bio_avatar } = useStyles();
    const theme = useTheme();
    const matchDownMd = useMediaQuery('(min-width:600px)');

    return (
        <Box className={root}>
            <Grid container>
                <Grid item>
                    <Box className={profile_cover_img}>
                        <img alt="bio" src="./dash.jpg" />
                    </Box>
                </Grid>
                {/* profile */}
                <Grid item xs={12} sm={5} md={4} lg={3}>
                    <Grid container>
                        <Grid xs={7} sm={12} item>
                            <Box className={bio_card}>
                                <Avatar
                                    // className={bio_avatar}
                                    alt="Remy Sharp"
                                    src="./register.png"
                                    sx={{ width: 150, height: 150, position: 'absolute', zIndex: 4, top: -60 }}
                                />
                                <Box mt="78px">
                                    <Typography className={title}>Adejola Ademola</Typography>
                                    <Typography className={title_sub} variant="caption">
                                        UI/UX Designer at Kokoruns Ltd
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        {!matchDownMd && (
                            <Grid xs={5} item>
                                <Box sx={{ display: 'flex', justifyContent: 'center', textTransform: 'capitalize', mt: '20px' }}>
                                    <Button
                                        startIcon={<BiEditAlt />}
                                        disableElevation
                                        variant="contained"
                                        sx={{ textTransform: 'capitalize', background: '#0991FF' }}
                                    >
                                        Edit
                                    </Button>
                                </Box>
                            </Grid>
                        )}
                    </Grid>

                    <SubCard sx={{ marginTop: '30px' }} title="About">
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
                    </SubCard>
                </Grid>

                {/* left section */}
                <Grid item xs={12} sm={7} md={8} lg={9}>
                    <SubCard
                        divider={true}
                        sx={{
                            ml: '20px',
                            mt: '20px',
                            minHeight: '213px',
                            height: 'auto',
                            [theme.breakpoints.down('sm')]: {
                                ml: '0px'
                            }
                        }}
                        title="Bio"
                    >
                        <Typography sx={{ fontSize: '0.9rem', color: '#333333', ml: '5px' }}>
                            I am an energetic user experience designer that believes users should have the ultimate experience with visually
                            appealing interfaces. I have 3 years of experience in marketing communications and a year of user experience
                            design. These years has helped me garnered real life experiences in dealing with users and achieving preferred
                            goals. My skills set includes user research, wireframing, prototyping and brainstorming. I believe these will
                            enable me add value to your firm and expand your customer base.
                        </Typography>
                    </SubCard>
                    {/* tabs */}
                    <Box sx={{ width: '100%' }}>
                        <FullWidthTabs />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Profile;
