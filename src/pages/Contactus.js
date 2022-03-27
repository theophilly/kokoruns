import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { WhatsappIcon, MessengerIcon, MailIcon } from '../assets/images/icons/svg_icons';
import ReactWhatsapp from 'react-whatsapp';
import { FooterSocials } from '../components/common/Footer';
import Findoutmore from '../components/homepage/Findoutmore';

export default function Contactus() {
    const theme = useTheme();
    return (
        <>
            <Box sx={{ background: '#faf9f9', ...theme.typography.column, alignItems: 'center', pb: '50px' }}>
                {/* header */}
                <Box sx={{ ...theme.typography.flex, height: '100px' }}>
                    <Typography sx={{ ...theme.typography.title3, color: theme.palette.primary.main }}>Contact Us</Typography>
                </Box>
                {/*  lower box */}
                <Box
                    sx={{
                        background: 'white',
                        width: '90%',
                        borderRadius: '10px',
                        pl: '50px',
                        pt: '30px',
                        pb: '10px',
                        [theme.breakpoints.down('sm')]: {
                            pl: '20px',
                            width: '100%'
                        }
                    }}
                >
                    <Box sx={{ marginBottom: '20px' }}>
                        <Typography sx={{ fontWeight: '600' }}>You can contact us vai the following</Typography>
                    </Box>
                    <Box
                        component="a"
                        href="https://wa.me/+2347069507640"
                        target="_blank"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '25px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <WhatsappIcon /> <Typography sx={{ fontWeight: '600', fontSize: '1.1rem' }}>WhatsApp</Typography>
                    </Box>

                    <Box
                        component="a"
                        href="https://m.me/adeyemi.kolade.90"
                        target="_blank"
                        sx={{
                            margin: '40px 0',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '25px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <MessengerIcon /> <Typography sx={{ fontWeight: '600', fontSize: '1.1rem' }}>Facebook Messager</Typography>
                    </Box>
                    <Box
                        component="a"
                        href="mailto:theophilly20@gmail.com"
                        target="_blank"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '25px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            color: 'inherit',
                            [theme.breakpoints.down('sm')]: {
                                pb: '30px'
                            }
                        }}
                    >
                        <MailIcon /> <Typography sx={{ fontWeight: '600', fontSize: '1.1rem' }}>Email</Typography>
                    </Box>
                    <Box
                        sx={{
                            mt: '40px',
                            [theme.breakpoints.down('sm')]: {
                                display: 'none'
                            }
                        }}
                    >
                        <FooterSocials textAlign="start" />
                    </Box>
                </Box>
            </Box>
            <Findoutmore
                firstLine="Find, Join or Create a Team. Work With"
                secondLine="Professionals & Colleagues on Projects"
                sub="Register for career-focused sponsored events here."
                bg="dd.png"
                path="/"
                buttonText="FIND OUT MORE"
            />
        </>
    );
}
