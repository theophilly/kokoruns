import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
  'human resources',
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
    ...theme.typography.flex,
    background: theme.palette.background2,
    //  border: '1px solid red',
    '@media (max-width: 800px)': {
      lineHeight: '2rem',
      padding: '10px',
      height: 'auto',
    },
  },
  left_div: {
    // border: '1px solid red',
    // flex: '0.6',
    height: '100%',
    width: '50%',
    padding: '40px 100px',
    boxSizing: 'border-box !important',
    '@media (max-width: 1075px)': {
      padding: '40px 10px',
    },
    '@media (max-width: 955px)': {
      padding: '20px 0px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    '@media (max-width: 700px)': {
      padding: '20px 0px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  left_div_h1: {
    ...theme.typography.title1,
  },
  skills_subtitle: {
    ...theme.typography.subtitle1,
    margin: '25px 0',
  },
  skillsList: {
    '@media (max-width: 700px)': {
      ...theme.typography.flex,
      flexWrap: 'wrap',
    },
  },
  right_div: {
    // border: '1px solid red',
    //  flex: '0.4 !important',
    width: '50% !important',
    height: '100%',
    '@media (max-width: 955px)': {
      display: 'none',
    },
  },
  skill_img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    clipPath: 'ellipse(90% 100% at right)',
  },
}));

export default function Skills() {
  const {
    root,
    left_div,
    right_div,
    skill_img,
    left_div_h1,
    skillsList,
    skills_subtitle,
  } = useStyles();
  return (
    <Box className={root}>
      <Box className={left_div}>
        <Typography className={left_div_h1} component="h1">
          Multi-Talented? <br /> Multi-Skilled?
        </Typography>
        <Typography className={skills_subtitle}>Find Your Kokoruns</Typography>

        <Box className={skillsList}>
          {data.map((item) => (
            <Chip
              color="primary"
              style={{
                borderRadius: '2px',
                margin: '8px',
                width: '136px',
                textTransform: 'uppercase',
              }}
              label={item}
            />
          ))}
        </Box>
      </Box>
      <Box className={right_div}>
        <img alt="student" className={skill_img} src="student.png" />
      </Box>
    </Box>
  );
}
