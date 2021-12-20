import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
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
    },
    first_div: {
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
    },
    sponsored_div_heading: {
        ...theme.typography.title1,
        color: theme.palette.textColor,
        marginBottom: '5px',
        '@media (max-width: 500px)': {
            lineHeight: '2.2rem',
            textAlign: 'center',
            marginBottom: '15px'
        }
    },
    subtitle: {
        ...theme.typography.subtitle1,
        textAlign: 'center'
        //margin: '25px 0',
    },
    sponsor_box: {
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
    },
    sponsor_box_upper: {
        display: 'flex'
    },
    upper_right: {
        ...theme.typography.column,
        justifyContent: 'space-evenly',
        marginLeft: '15px'
    },
    sponsor_image: {
        width: '80px',
        height: '80px',
        borderRadius: '5px',
        '@media (max-width: 750px)': {
            width: '40px',
            height: '40px',
            borderRadius: '5px'
        }
    },
    sponsor_logo: {
        width: '80px',
        '@media (max-width: 750px)': {
            width: '50px'
        }
    },
    sponsor_details: {
        lineHeight: '17px',
        fontSize: '.9rem',
        '@media (max-width: 750px)': {
            fontSize: '.7rem'
        },
        '@media (max-width: 500px)': {
            marginTop: '4px'
        }
    },
    event_title: {
        fontWeight: 'bold',
        fontSize: '1.3rem',
        '@media (max-width: 750px)': {
            fontSize: '1rem'
        }
    },
    sponsor_events: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        justifyContent: 'center',
        '@media (max-width: 750px)': {
            gap: '10px'
        }
    }
}));

const Single = () => {
    const { sponsor_box, sponsor_box_upper, sponsor_image, sponsor_details, sponsor_logo, event_title, upper_right } = useStyles();
    return (
        <Box className={sponsor_box}>
            {/* upper */}
            <Box className={sponsor_box_upper}>
                <img className={sponsor_image} src="./new.jpg" />
                {/* upper right */}
                <Box className={upper_right}>
                    <img src="./access.png" className={sponsor_logo} />
                    <Typography className={event_title}>Career Fair</Typography>
                </Box>
            </Box>
            {/* lower */}
            <Box>
                <Typography className={sponsor_details}>
                    The annual career fair and exhibition by organized by Access Bank Plc., will hold on the 24th of December, 2021. Venue:
                    Radisson Blu, Issac John Street, Ikeja. The fair is aimed to expose recent graduates to the opportunities...Read more.
                </Typography>
            </Box>
        </Box>
    );
};

export default function Sponsoredevents() {
    const { root, first_div, sponsored_div_heading, subtitle, sponsor_events } = useStyles();
    return (
        <Box className={root}>
            <Box className={first_div}>
                <Typography className={sponsored_div_heading} component="h1">
                    Sponsored Events
                </Typography>
                <Typography className={subtitle}>Register for career-focused sponsored events here.</Typography>
            </Box>
            <Box className={sponsor_events}>
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
