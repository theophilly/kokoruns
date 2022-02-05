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
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    success_subtitle: {
        textAlign: 'center',
        margin: '20px 0 30px 0 '
    }
}));

const Profilesetupsuccess = () => {
    const { root, success_subtitle } = useStyles();
    const theme = useTheme();

    return (
        <Box className={root}>
            <Box
                style={{
                    background: '#E7FBF3',
                    height: '200px',
                    width: '200px',
                    borderRadius: '50%',

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Box
                    style={{
                        background: '#D0F7E7',
                        height: '130px',
                        width: '130px',

                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Avatar sx={{ bgcolor: '#00D67D', height: '60px', width: '60px' }}>
                        <CheckIcon />
                    </Avatar>
                </Box>
            </Box>
            <Typography sx={{ ...theme.typography.title1, color: '#333333' }}> Successful</Typography>
            <Typography className={success_subtitle}>
                You have successfully set up your profile. <br /> You can go to your dashboard now.
            </Typography>
            <Button LinkComponent={Link} to="/profile" variant="contained" disableElevation>
                Go to Dashboard
            </Button>
        </Box>
    );
};

export default Profilesetupsuccess;
