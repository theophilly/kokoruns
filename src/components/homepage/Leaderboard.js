import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Leaderboard() {
    return (
        <Box
            sx={{
                height: '85.3vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#faf9f9',

                '@media (max-width: 1075px)': {
                    height: '60.3vh !important',
                    marginBottom: '100px !important'
                }
            }}
        >
            <Box
                sx={{
                    width: '1150px',
                    height: '500px',
                    objectFit: 'contain',
                    backgroundSize: '100px',
                    //  backgroundPosition: '0% 40%',
                    position: 'relative',
                    backgroundRepeat: 'no-repeat',
                    background: "url('hero.png')",
                    '&::before': {
                        content: '""',
                        color: 'red',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.3)'
                    },
                    '@media (max-width: 1075px)': {
                        height: '90vh',
                        width: '100vw'
                    },
                    '@media (max-width: 400px)': {
                        backgroundPosition: '45% 110px',
                        height: '100vh',
                        backgroundSize: '1400px',
                        backgroundRepeat: 'no-repeat'
                    }
                }}
            >
                <Box
                    sx={{
                        top: 150,
                        left: 30,
                        color: 'white',
                        position: 'absolute',
                        height: '100%',
                        '@media (max-width: 400px)': {
                            top: '45vh !important',
                            left: 20
                        }
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: '600',
                            fontSize: 'clamp(30px, 3.8vw, 60px)',
                            lineHeight: '3rem',
                            marginBottom: '20px',
                            '@media (max-width: 500px)': {
                                lineHeight: '2rem'
                            }
                        }}
                        variant="h1"
                        component="h1"
                    >
                        Whoever you are,
                        <br /> Whatever you do...
                    </Typography>
                    <Typography>
                        We’ve got you. Let’s brand you. <br />
                        Kokoruns has got you the best of services. sign in or register to <br /> access them.
                    </Typography>
                    <Box marginTop="30px">
                        <Button
                            to="/register"
                            LinkComponent={Link}
                            sx={{ borderRadius: '0px', marginRight: '30px', textTransform: 'capitalize' }}
                            variant="contained"
                        >
                            register
                        </Button>
                        <Button
                            to="/contact-us"
                            LinkComponent={Link}
                            sx={{ color: 'white', borderColor: 'white', borderRadius: '0px', textTransform: 'capitalize' }}
                            variant="outlined"
                        >
                            Contact Us
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
