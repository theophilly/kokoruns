import React from 'react';

// material-ui
import { Box } from '@mui/material';

// project imports
import Leaderboard from '../components/homepage/Leaderboard';
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
