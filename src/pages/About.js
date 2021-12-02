import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Findoutmore from '../components/homepage/Findoutmore';

const useStyles = makeStyles((theme) => ({
  root: {
    //border: '1px solid red',

    '& > :nth-child(1)': {
      fontFamily: 'Mulish',
      fontSize: '1.6rem',
      fontWeight: '700',
    },
  },
}));

export default function About() {
  const { root } = useStyles();
  return (
    <Box>
      <Box width="90vw" margin="20px auto 0px">
        <Findoutmore
          firstLine="A golden standard team of dedicated talents"
          sub="We are a team of diverse talents that utilized our individual strengths inorder to build a product that serves the character of its purpose"
          bg="about.png"
          heigth="60vh"
          // path="/"
          // buttonText="FIND OUT MORE"
        />
      </Box>
      <Box height="100vh"></Box>
      <Findoutmore
        firstLine="Find, Join or Create a Team. Work With"
        secondLine="Professionals & Colleagues on Projects"
        sub="Register for career-focused sponsored events here."
        bg="dd.png"
        path="/"
        buttonText="FIND OUT MORE"
      />
    </Box>
  );
}
