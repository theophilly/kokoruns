import React from 'react';
import {
    Box,
    Grid,
    Avatar,
    Typography,
    useTheme,
    Button,
    Select,
    FormControl,
    OutlinedInput,
    MenuItem,
    InputBase,
    Paper
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import SubCard from '../../ui-component/cards/SubCard';
import MainCard from '../../ui-component/cards/MainCard';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Teamsbox from './Teambox';
import Teammember from './Teammember';
import { Link } from 'react-router-dom';

const Createteam = () => {
    const theme = useTheme();
    return (
        <Paper
            component={Link}
            to="/create-team"
            sx={{
                ...theme.typography.flex,
                height: '210px',
                width: '200px',
                flexDirection: 'column',
                gap: '8px',
                padding: '13px 0',
                margintop: '30px !important',
                textDecoration: 'none',
                cursor: 'pointer'
            }}
        >
            <Avatar sx={{ bgcolor: theme.palette.primary.main, height: '60px', width: '60px' }}>
                <AddIcon fontSize="large" />
            </Avatar>
            <Typography sx={{ fontWeight: '600', marginTop: '10px' }}>Create Team</Typography>
        </Paper>
    );
};

const Jobdash = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery('(min-width:600px)');

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box
            sx={{
                width: '100%',
                padding: '10px',
                [theme.breakpoints.down('sm')]: {
                    padding: '0px'
                }
            }}
        >
            <Grid container></Grid>
        </Box>
    );
};

export default Jobdash;
