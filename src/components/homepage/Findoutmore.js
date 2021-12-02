import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    height: (props) => (props.heigth ? `${props.heigth}` : '90vh'),
    // border: '1px solid red',
    background: (props) => `url(${props.bg})`,
    backgroundRepeat: 'no-repeat',
    objectFit: 'contain',
    backgroundSize: '100%',
    backgroundPosition: 'center center',
    color: 'white',
    position: 'relative',

    '@media (max-width: 900px)': {
      objectFit: 'contain !important',
      height: '80vh',
      backgroundSize: '1200px',
    },
    '@media (max-width: 400px)': {
      backgroundSize: '1200px !important',
      backgroundRepeat: 'no-repeat !important',
      height: '70vh !important',
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
    width: '50%',
    '@media (max-width: 704px)': {
      width: '90%',
    },
  },
  inner_button: {
    color: 'white',
    borderRadius: '0px',
    borderColor: 'white',
    height: '35px',
    fontSize: '.8rem',
  },
}));

export default function Findoutmore(props) {
  const { root, inner, inner_title, inner_subtitle, inner_button } = useStyles(
    props
  );
  const matches = useMediaQuery('(min-width:704px)');
  return (
    <Box className={root}>
      <Box className={inner}>
        <Typography className={inner_title}>
          {props.firstLine}
          {matches && <br />}
          {props.secondLine}
        </Typography>
        <Typography className={inner_subtitle}>{props.sub}</Typography>
        {props.buttonText && (
          <Button
            LinkComponent={Link}
            to={props.path}
            className={inner_button}
            variant="outlined"
          >
            {props.buttonText}
          </Button>
        )}
      </Box>
    </Box>
  );
}
