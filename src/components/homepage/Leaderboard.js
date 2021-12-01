import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '85.3vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.background1,
    //  border: '1px solid red',
    '@media (max-width: 1075px)': {
      height: '70.3vh',
      marginBottom: '20px',
    },
  }, // a style rule
  leaderboard_img: {
    width: '1150px',
    height: '500px',
    objectFit: 'cover',
    objectPosition: '10% 40%',
    position: 'relative',
    '@media (max-width: 1075px)': {
      height: '90vh',
      width: '100vw',
    },
  },
  leaderboard_text: {
    fontWeight: '600',
    fontSize: 'clamp(30px, 3.8vw, 60px)',
    lineHeight: '3rem',
    marginBottom: '20px',
    '@media (max-width: 500px)': {
      lineHeight: '2rem',
    },
  },
  leaderboard_register: {
    borderRadius: '0px',
    marginRight: '30px',
    textTransform: 'capitalize',
  },
  leaderboard_contactus: {
    color: 'white',
    borderColor: 'white',
    borderRadius: '0px',
    textTransform: 'capitalize',
  },
  overlay: {
    top: 150,
    left: 30,
    color: 'white',
    position: 'absolute',
    // border: '1px solid red',
    '@media (max-width: 400px)': {
      top: '40vh !important',
      left: 20,
    },
  },
}));

export default function Leaderboard() {
  const {
    root,
    leaderboard_img,
    leaderboard_text,
    leaderboard_register,
    leaderboard_contactus,
    overlay,
  } = useStyles();
  return (
    <Box className={root}>
      <Box position="relative">
        <img alt="leaderboard" className={leaderboard_img} src="hero.png"></img>
        <Box className={overlay}>
          <Typography className={leaderboard_text} variant="h1" component="h1">
            Whoever you are,
            <br /> Whatever you do...
          </Typography>
          <Typography>
            We’ve got you. Let’s brand you. <br />
            Kokoma has got you the best of services. sign in or register to{' '}
            <br /> access them.
          </Typography>
          <Box marginTop="30px">
            <Button className={leaderboard_register} variant="contained">
              register
            </Button>
            <Button className={leaderboard_contactus} variant="outlined">
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
