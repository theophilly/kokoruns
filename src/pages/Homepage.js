import React from 'react';
import { Box } from '@mui/material';
import Leaderboard from '../components/homepage/Leaderboard';
import { makeStyles } from '@mui/styles';
import Usekokoruns from '../components/homepage/Usekokoruns';
import Skills from '../components/homepage/Skills';
import Sponsoredevents from '../components/homepage/Sponsoredevents';
import Findoutmore from '../components/homepage/Findoutmore';

export default function Homepage() {
  return (
    <Box style={{ overflow: 'hidden', maxWidth: '100vw' }}>
      <Leaderboard />
      <Usekokoruns />
      <Skills />
      <Sponsoredevents />
      <Findoutmore />
    </Box>
  );
}
