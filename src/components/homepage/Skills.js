import React from 'react';
import { Box, Typography, Chip, useTheme } from '@mui/material';

const data = [
    'Entertainment',
    'Art & Craft',
    'iT',
    'AGRICULTURE',
    'MARKETING',
    'Education',
    'Artisanship',
    'Engineering',
    'Advertising',
    'Banking',
    'POLITICS',
    'hEALTH',
    'Finance',
    'human resources'
];

export default function Skills() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                height: '80vh',
                ...theme.typography.flex,
                background: theme.palette.background2,
                //  border: '1px solid red',
                '@media (max-width: 800px)': {
                    lineHeight: '2rem',
                    padding: '10px',
                    height: 'auto'
                }
            }}
        >
            <Box
                sx={{
                    // border: '1px solid red',
                    // flex: '0.6',
                    height: '100%',
                    width: '50%',
                    padding: '40px 100px',
                    boxSizing: 'border-box !important',
                    '@media (max-width: 1075px)': {
                        padding: '40px 10px'
                    },
                    '@media (max-width: 955px)': {
                        padding: '20px 0px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    },
                    '@media (max-width: 700px)': {
                        padding: '20px 0px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }
                }}
            >
                <Typography sx={{ ...theme.typography.title1 }} component="h1">
                    Multi-Talented? <br /> Multi-Skilled?
                </Typography>
                <Typography sx={{ ...theme.typography.subtitle1, margin: '25px 0' }}>Find Your Kokoruns</Typography>

                <Box
                    sx={{
                        '@media (max-width: 700px)': {
                            ...theme.typography.flex,
                            flexWrap: 'wrap'
                        }
                    }}
                >
                    {data.map((item) => (
                        <Chip
                            color="primary"
                            style={{
                                borderRadius: '2px',
                                margin: '8px',
                                width: '136px',
                                textTransform: 'uppercase'
                            }}
                            label={item}
                        />
                    ))}
                </Box>
            </Box>
            <Box
                sx={{
                    // border: '1px solid red',
                    //  flex: '0.4 !important',
                    width: '50% !important',
                    height: '100%',
                    '@media (max-width: 955px)': {
                        display: 'none'
                    }
                }}
            >
                <Box
                    component="img"
                    alt="student"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', clipPath: 'ellipse(90% 100% at right)' }}
                    src="student.png"
                />
            </Box>
        </Box>
    );
}
