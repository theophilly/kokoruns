import React from 'react';
import { Box, Typography, Button } from '@mui/material';

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
            <Box position="relative">
                <Box
                    component="img"
                    alt="leaderboard"
                    sx={{
                        width: '1150px',
                        height: '500px',
                        objectFit: 'cover',
                        objectPosition: '10% 40%',
                        position: 'relative',
                        '@media (max-width: 1075px)': {
                            height: '90vh',
                            width: '100vw'
                        },
                        '@media (max-width: 400px)': {
                            objectPosition: '45% 100px',
                            // height: '100vh',
                            //  maxWidth: '100%',
                            height: '100vh'
                        }
                    }}
                    src="hero.png"
                />
                <Box
                    sx={{
                        top: 150,
                        left: 30,
                        color: 'white',
                        position: 'absolute',
                        // border: '1px solid red',
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
                        Kokoma has got you the best of services. sign in or register to <br /> access them.
                    </Typography>
                    <Box marginTop="30px">
                        <Button sx={{ borderRadius: '0px', marginRight: '30px', textTransform: 'capitalize' }} variant="contained">
                            register
                        </Button>
                        <Button
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
