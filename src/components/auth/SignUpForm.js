import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// material-ui
import { Typography, Button, Grid, Box, CircularProgress, useTheme } from '@mui/material';

//local import
import Textfield from '../reusables/FormUI/Textfield';
import Passwordfield from '../reusables/FormUI/Passwordfield';
// import { login } from '../../store/actions/authActions';

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

export default function SignUpForm({ onclick, setClickData, showToast, path }) {
    const navigate = useNavigate();
    const theme = useTheme();
    // const dispatch = useDispatch();

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
                Register
            </Typography>
            {/* third */}
            <Box marginTop="20px">
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    onSubmit={async (values) => {
                        // await dispatch(login(values));
                        // if (!window.store.getState().authReducer.authenticated) {
                        //   await setClickData({
                        //     type: 'error',
                        //     content: window.store.getState().authReducer.error,
                        //   });
                        //   showToast();
                        // }
                        await sleep(3000);
                        navigate('/profile-setup');
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email('Invalid email format').required('Required'),
                        password: Yup.string().min(6, 'password must be atleast 6 characters').required('Password is required'),
                        confirmPassword: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'password must match')
                            .required('Please confirm password 😱')
                    })}
                >
                    {({ isSubmitting }) => (
                        <Form autoComplete="off">
                            <Grid container>
                                <Grid xs={12} item>
                                    <Box marginTop="10px">
                                        <Textfield name="email" helpertext="Email Address" />
                                    </Box>

                                    <Box marginTop="10px">
                                        <Passwordfield name="password" helpertext="Password" />
                                    </Box>
                                    <Box marginTop="10px">
                                        <Passwordfield name="confirmPassword" helpertext="Confirm Password" />
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
                                                    //  background: 'lightgreen',
                                                }
                                            }}
                                            disableElevation
                                            variant="contained"
                                            type="submit"
                                        >
                                            Signup
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Box>

            <Box alignItems="center" justifyContent="center" display="flex" margin="40px 0">
                {/* use Styled component for the Typography */}
                <Typography sx={{ fontFamily: 'Mulish', fontSize: '.9rem' }}>or continue with</Typography>
            </Box>
            <Box sx={{ ...theme.typography.flex, height: '50px', borderRadius: '7px', background: '#F0F0F0', cursor: 'pointer' }}>
                <Box component="img" sx={{ width: '20px', marginRight: '20px' }} alt="google logo" src="./google.png" />
                <Typography>Sign up with Google</Typography>
            </Box>
            <Box alignItems="center" justifyContent="center" display="flex" margin="20px 0">
                <Typography sx={{ fontFamily: 'Mulish', fontSize: '.9rem' }}>Already have an account?</Typography>
                <Typography
                    onClick={() => navigate('/login')}
                    color="primary"
                    sx={{ fontFamily: 'Mulish', fontWeight: '600', fontSize: '.9rem', cursor: 'pointer', marginLeft: '5px' }}
                >
                    Sign In
                </Typography>
            </Box>
        </Box>
    );
}
