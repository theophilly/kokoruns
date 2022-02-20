import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// material-ui
import { Typography, Button, Grid, Box, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// local import
import Textfield from '../reusables/FormUI/Textfield';
import Passwordfield from '../reusables/FormUI/Passwordfield';
import { login } from '../../store/actions/authActions';
import Snackbar from '../reusables/Snackbar';

export default function SignInForm() {
    const navigate = useNavigate();
    const theme = useTheme();
    const dispatch = useDispatch();

    const [alertContent, setAlertContent] = React.useState({
        type: 'error',
        content: ''
    });

    const [snack, setSnack] = React.useState(false);

    const handleSnackClick = () => {
        setSnack(true);
    };
    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnack(false);
    };

    return (
        <Box
            sx={{
                '& > :nth-child(1)': {
                    fontFamily: 'Mulish',
                    fontSize: '1.6rem',
                    fontWeight: '700'
                }
            }}
        >
            <Typography variant="h1" component="h1">
                Secure Member Log-in
            </Typography>
            <Snackbar alertContent={alertContent} open={snack} handleClose={handleSnackClose} />
            {/* third */}
            <Box marginTop="20px">
                <Formik
                    initialValues={{
                        loginEmail: '',
                        loginPassword: ''
                    }}
                    onSubmit={async (values) => {
                        await dispatch(login(values));
                        if (window.store.getState().authReducer.error) {
                            await setAlertContent({
                                type: 'error',
                                content: window.store.getState().authReducer.error
                            });
                            handleSnackClick();
                            return;
                        }

                        if (window.store.getState().authReducer.active === 1) {
                            navigate('/profile');
                        } else {
                            await navigate('/profile-setup');
                        }
                    }}
                    validationSchema={Yup.object().shape({
                        loginEmail: Yup.string().email('Invalid email format').required('Required'),
                        loginPassword: Yup.string().min(6, 'password must be atleast 6 characters').required('Password is required')
                    })}
                >
                    {({ isSubmitting }) => (
                        <Form autoComplete="off">
                            <Grid container>
                                <Grid xs={12} item>
                                    <Box marginTop="10px">
                                        <Textfield name="loginEmail" helpertext="Email Address" />
                                    </Box>

                                    <Box marginTop="10px">
                                        <Passwordfield name="loginPassword" helpertext="Password" />
                                    </Box>

                                    <Box>
                                        <Button
                                            startIcon={isSubmitting ? <CircularProgress color="secondary" size="1rem" /> : null}
                                            sx={{
                                                width: '100%',
                                                marginTop: '20px',
                                                letterSpacing: '1px',
                                                borderRadius: '0px',
                                                color: 'white',
                                                '& :hover': {
                                                    color: 'black'
                                                }
                                            }}
                                            disableElevation
                                            variant="contained"
                                            type="submit"
                                        >
                                            Login
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Box>

            <Box alignItems="center" justifyContent="center" display="flex" margin="40px 0">
                <Typography sx={{ fontFamily: 'Mulish', fontSize: '.9rem' }}>or continue with</Typography>
            </Box>
            <Box sx={{ ...theme.typography.flex, height: '50px', borderRadius: '7px', background: '#F0F0F0', cursor: 'pointer' }}>
                <Box component="img" sx={{ width: '20px', marginRight: '20px' }} alt="google logo" src="./google.png" />
                <Typography>Sign in with Google</Typography>
            </Box>
            <Box alignItems="center" justifyContent="center" display="flex" margin="20px 0">
                <Typography sx={{ fontFamily: 'Mulish', fontSize: '.9rem' }}>Don't have an account?</Typography>
                <Typography
                    onClick={() => navigate('/register')}
                    color="primary"
                    sx={{ fontFamily: 'Mulish', fontWeight: '600', fontSize: '.9rem', cursor: 'pointer', marginLeft: '5px' }}
                >
                    Sign Up
                </Typography>
            </Box>
        </Box>
    );
}
