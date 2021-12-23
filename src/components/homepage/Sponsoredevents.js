import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Single = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                background: 'white',
                height: '185px',
                width: '320px',
                borderRadius: '5px',
                //  border: '1px solid red',
                padding: '10px',
                cursor: 'pointer',
                '@media (max-width: 750px)': {
                    height: 'max-content',
                    width: '165px'
                }
            }}
        >
            {/* upper */}
            <Box sx={{ display: 'flex' }}>
                <Box
                    component="a"
                    sx={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '5px',
                        '@media (max-width: 750px)': {
                            width: '40px',
                            height: '40px',
                            borderRadius: '5px'
                        }
                    }}
                    src="./new.jpg"
                />
                {/* upper right */}
                <Box sx={{ ...theme.typography.column, justifyContent: 'space-evenly', marginLeft: '15px' }}>
                    <Box
                        component="img"
                        src="./access.png"
                        sx={{
                            width: '80px',
                            '@media (max-width: 750px)': {
                                width: '50px'
                            }
                        }}
                    />
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1.3rem',
                            '@media (max-width: 750px)': {
                                fontSize: '1rem'
                            }
                        }}
                    >
                        Career Fair
                    </Typography>
                </Box>
            </Box>
            {/* lower */}
            <Box>
                <Typography
                    sx={{
                        lineHeight: '17px',
                        fontSize: '.9rem',
                        '@media (max-width: 750px)': {
                            fontSize: '.7rem'
                        },
                        '@media (max-width: 500px)': {
                            marginTop: '4px'
                        }
                    }}
                >
                    The annual career fair and exhibition by organized by Access Bank Plc., will hold on the 24th of December, 2021. Venue:
                    Radisson Blu, Issac John Street, Ikeja. The fair is aimed to expose recent graduates to the opportunities...Read more.
                </Typography>
            </Box>
        </Box>
    );
};

export default function Sponsoredevents() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                minHeight: '80vh',
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
                // border: '1px solid red',
                // background: theme.palette.background1,
                background: '#faf9f9',
                flexDirection: 'column',
                //  paddingBottom: '70px',
                padding: ' 15px calc((100vw - 1300px) / 2) 70px !important',
                '@media (max-width: 500px)': {
                    lineHeight: '2rem',
                    // padding: '20px',
                    height: 'auto'
                }
            }}
        >
            <Box
                sx={{
                    ...theme.typography.flex,
                    height: '200px',
                    // border: '1px solid red',
                    flexDirection: 'column',
                    width: '100%',
                    '@media (max-width: 500px)': {
                        marginTop: '20px',
                        height: 'auto',
                        paddingBottom: '20px'
                    }
                }}
            >
                <Typography
                    sx={{
                        ...theme.typography.title1,
                        color: theme.palette.textColor,
                        marginBottom: '5px',
                        '@media (max-width: 500px)': {
                            lineHeight: '2.2rem',
                            textAlign: 'center',
                            marginBottom: '15px'
                        }
                    }}
                    component="h1"
                >
                    Sponsored Events
                </Typography>
                <Typography
                    sx={{
                        ...theme.typography.subtitle1,
                        textAlign: 'center'
                        //margin: '25px 0'
                    }}
                >
                    Register for career-focused sponsored events here.
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '40px',
                    justifyContent: 'center',
                    '@media (max-width: 750px)': {
                        gap: '10px'
                    }
                }}
            >
                <Single />
                <Single />
                <Single />
                <Single />
                <Single />
                <Single />
            </Box>
        </Box>
    );
}
