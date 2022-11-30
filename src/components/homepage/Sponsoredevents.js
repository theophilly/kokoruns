import React from 'react';
import { Box, Typography, useTheme, Grid, Button, CircularProgress } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Textfield from '../reusables/FormUI/Textfield';

const Single = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                background: 'white',
                height: '185px',
                width: '320px',
                borderRadius: '5px',

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
                background: '#faf9f9',
                flexDirection: 'column',
                padding: ' 15px calc((100vw - 1300px) / 2) 70px !important',
                '@media (max-width: 500px)': {
                    lineHeight: '2rem',
                    height: 'auto'
                }
            }}
        >
            <Box
                sx={{
                    ...theme.typography.flex,
                    height: '200px',
                    flexDirection: 'column',
                    width: '100%',
                    //  border: '1px solid red',
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
                            marginBottom: '0px'
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
                    }}
                >
                    Register for career-focused sponsored events here.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'white',
                    width: '70%',
                    borderRadius: '3px',
                    padding: '20px 0 50px',
                    '@media (max-width: 750px)': {
                        gap: '10px'
                    },
                    '@media (max-width: 449px)': {
                        width: '100%'
                    }
                }}
            >
                <Typography
                    sx={{
                        ...theme.typography.title3,
                        textAlign: 'center',
                        mb: '20px',
                        '@media (max-width: 449px)': {
                            ...theme.typography.heading,
                            fontWeight: '700'
                        }
                    }}
                >
                    No Events are available for now
                </Typography>
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontSize: '0.9rem',
                        '@media (max-width: 449px)': {
                            padding: '0 15px'
                        }
                    }}
                >
                    stay up to date on sponsored events by subscribing to our newsletter. You get notified of events as as they come up
                </Typography>
                <Box marginTop="20px">
                    <Box>
                        <Formik
                            initialValues={{
                                email: ''
                            }}
                            onSubmit={async (values) => {
                                //  console.log(values);
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string().email('Invalid email format').required('Required')
                            })}
                        >
                            {({ isSubmitting }) => (
                                <Form autoComplete="off">
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            gap: '10px',
                                            alignItems: 'flex-end',
                                            //  border: '1px solid red',
                                            '@media (max-width: 449px)': {
                                                flexDirection: 'column',
                                                padding: '0 15px'
                                            }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '60%',
                                                '@media (max-width: 449px)': {
                                                    width: '100%'
                                                }
                                            }}
                                        >
                                            <Box>
                                                <Textfield subscribe={true} name="email" helpertext="Email Address" />
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                width: '20%',
                                                '@media (max-width: 449px)': {
                                                    width: '100%'
                                                }
                                            }}
                                        >
                                            <Box>
                                                <Button
                                                    startIcon={isSubmitting ? <CircularProgress color="secondary" size="1rem" /> : null}
                                                    sx={{
                                                        width: '100%',
                                                        marginTop: '20px',
                                                        letterSpacing: '1px',

                                                        color: 'white',
                                                        '& :hover': {
                                                            color: 'black'
                                                        }
                                                    }}
                                                    disableElevation
                                                    variant="contained"
                                                    type="submit"
                                                >
                                                    Subscribe
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
