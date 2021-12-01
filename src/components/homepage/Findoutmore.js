import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
    // border: '1px solid red',
    background: "url('dd.png')",
    backgroundRepeat: 'no-repeat',
    objectFit: 'contain',
    backgroundSize: '100%',
    backgroundPosition: 'center center',
    color: 'white',
    position: 'relative',

    '@media (max-width: 704px)': {
      objectFit: 'cover',
      height: '80vh',
      backgroundSize: '800px',
    },
    '&::before': {
      content: '""', // ::before and ::after both require content
      position: 'absolute',
      display: 'block',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: theme.palette.primary.main,
      //  background-image: linear-gradient(120deg, #eaee44, #33d0ff),
      opacity: 0.7,
      zIndex: 1,
      mixBlendMode: 'multiply',
    },
  },
  inner: {
    ...theme.typography.column,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
    zIndex: 2,
    padding: '10px',
  },
  inner_title: {
    ...theme.typography.title2,
    textAlign: 'center',
    '@media (max-width: 704px)': {
      lineHeight: '30px',
    },
  },
  inner_subtitle: {
    ...theme.typography.subtitle,
    textAlign: 'center',
    margin: '30px 0',
  },
  inner_button: {
    color: 'white',
    borderRadius: '0px',
    borderColor: 'white',
    height: '35px',
    fontSize: '.8rem',
  },
}));

export default function Findoutmore() {
  const {
    root,
    inner,
    inner_title,
    inner_subtitle,
    inner_button,
  } = useStyles();
  const matches = useMediaQuery('(min-width:704px)');
  return (
    <Box className={root}>
      <Box className={inner}>
        <Typography className={inner_title}>
          Find, Join or Create a Team. Work With
          {matches && <br />}
          Professionals & Colleagues on Projects
        </Typography>
        <Typography className={inner_subtitle}>
          Register for career-focused sponsored events here.
        </Typography>
        <Button className={inner_button} variant="outlined">
          FIND OUT MORE
        </Button>
      </Box>
    </Box>
  );
}
