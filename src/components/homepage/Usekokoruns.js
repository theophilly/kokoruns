import React from 'react';
import { Box, Typography, Avatar, Button, useTheme } from '@mui/material';
import { School, People, Business } from '@mui/icons-material';

const data = [
    {
        icon: <Business sx={{ fontSize: 20 }} />,
        title: 'Company'
    },
    {
        icon: <People sx={{ fontSize: 20 }} />,
        title: 'Association'
    },
    {
        icon: <School sx={{ fontSize: 20 }} />,
        title: 'Schools'
    }
];

const Usesingle = ({ icon }) => {
    return (
        <Box>
            <Avatar sx={{ bgcolor: '#D92627', height: '35px', width: '35px' }} variant="rounded">
                {icon}
            </Avatar>
        </Box>
    );
};

export default function Usekokoruns() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                height: 'auto',
                ...theme.typography.flex,
                flexDirection: 'column',
                background: '#faf9f9',
                paddingTop: '30px',
                paddingBottom: '60px',
                '@media (max-width: 500px)': {
                    lineHeight: '2rem'
                }
            }}
        >
            <Box
                sx={{
                    '@media (max-width: 500px)': {
                        marginTop: '40px'
                    }
                }}
            >
                <Typography
                    sx={{
                        ...theme.typography.title1,
                        color: theme.palette.primary.main,
                        '@media (max-width: 500px)': {
                            lineHeight: '2.2rem',
                            textAlign: 'center',
                            marginBottom: '30px'
                        }
                    }}
                >
                    Who can use Kokoruns?
                </Typography>
            </Box>
            <Box gap="70px" display="flex" justifyContent="center" flexWrap="wrap" margin="50px 0">
                {data.map((item) => (
                    <Box
                        sx={{
                            '@media (max-width: 500px)': {
                                ...theme.typography.flex,
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginTop: '-40px'
                            }
                        }}
                    >
                        <Usesingle icon={item.icon} />
                        <Typography sx={{ fontWeight: '600', fontSize: '1.3rem', margin: '15px 0px' }}>{item.title}</Typography>
                        {item.title === 'Company' && (
                            <Typography
                                sx={{
                                    '@media (max-width: 500px)': {
                                        textAlign: 'center'
                                    }
                                }}
                            >
                                - Showcase your business and products <br /> - Find qualified, honest talents <br /> - Find Staff close to
                                your location <br /> - Post Jobs <br /> - Send job invitations <br /> - Post events <br /> - Find resources
                                for your job openings
                            </Typography>
                        )}
                        {item.title === 'Schools' && (
                            <Typography
                                sx={{
                                    '@media (max-width: 500px)': {
                                        textAlign: 'center'
                                    }
                                }}
                            >
                                - DIY website for your school
                                <br />
                                - Find qualified, honest staff <br />
                                - Find Staff close to your location <br />
                                - Post Jobs <br />
                                - Send job invitations <br />
                                - Post events <br />
                                - Find resources for your job openings <br />
                                - Broadcast to students and parents <br />
                            </Typography>
                        )}
                        {item.title === 'Association' && (
                            <Typography
                                sx={{
                                    '@media (max-width: 500px)': {
                                        textAlign: 'center'
                                    }
                                }}
                            >
                                - DIY website for your associations <br />
                                - Find and send Membership invitations <br />
                                - Broadcast to Members <br />
                                - Post Jobs <br />
                                - Send job invitations <br />
                                - Post events <br />
                                - Send events invitations <br />
                            </Typography>
                        )}
                    </Box>
                ))}
            </Box>
            <Button disableElevation sx={{ borderRadius: '0px' }} variant={'contained'}>
                Register
            </Button>
        </Box>
    );
}
