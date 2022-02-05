import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Box, Avatar, Typography, Button, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckIcon from '@mui/icons-material/Check';

// styles
const useStyles = makeStyles((theme) => ({
    root: {
        background: 'white',
        //  height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
    },

    success_subtitle: {
        textAlign: 'center',
        margin: '20px 0 30px 0 '
    }
}));

<<<<<<< HEAD
const Success = ({ text, to = '/', content, onclick }) => {
=======
const Success = ({ text, to = '/', content }) => {
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
    const { root, success_subtitle } = useStyles();
    const theme = useTheme();

    return (
        <Box className={root}>
            <Box
                style={{
                    background: '#E7FBF3',
                    height: '100px',
                    width: '100px',
                    borderRadius: '50%',

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Box
                    style={{
                        background: '#D0F7E7',
                        height: '70px',
                        width: '70px',

                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Avatar sx={{ bgcolor: '#00D67D', height: '40px', width: '40px' }}>
                        <CheckIcon />
                    </Avatar>
                </Box>
            </Box>
            <Typography sx={{ ...theme.typography.heading, color: '#333333', margin: '15px 0' }}> Successful</Typography>
            <Typography sx={{ fontSize: '0.9rem', lineHeight: '15px', textAlign: 'center', width: '300px' }}>{content}</Typography>
            <Button
                sx={{ borderRadius: '0px', width: '80%', fontSize: '0.8rem', mt: '15px' }}
                LinkComponent={Link}
                //  onClick={() => window.location.reload()}
<<<<<<< HEAD
                to={!onclick ? to : ''}
                variant="contained"
                disableElevation
                onClick={() => onclick()}
=======
                to={to}
                variant="contained"
                disableElevation
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
            >
                {text}
            </Button>
        </Box>
    );
};

export default Success;
