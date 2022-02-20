import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// material-ui
import { Typography, Button, Grid, Box, CircularProgress, useTheme, Dialog, DialogContent } from '@mui/material';

//local import
import Textfield from '../reusables/FormUI/Textfield';
import Passwordfield from '../reusables/FormUI/Passwordfield';
import Success from '../../ui-component/modals/Success';
import Snackbar from '../reusables/Snackbar';
import { signup } from '../../store/actions/authActions';

export default function SignUpForm({ onclick, setClickData, showToast, path }) {
    const navigate = useNavigate();
    const theme = useTheme();
    const [recommendOpen, setRecommendOpen] = useState(false);
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

    const handleRecommendOpen = () => {
        setRecommendOpen(true);
    };
    const handleRecommendClose = () => {
        setRecommendOpen(false);
        navigate('/login');
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
                Register
            </Typography>
            <Snackbar alertContent={alertContent} open={snack} handleClose={handleSnackClose} />
            {/* third */}
            <Box marginTop="20px">
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    onSubmit={async (values) => {
                        await dispatch(signup(values));
                        if (window.store.getState().authReducer.user_id) {
                            handleRecommendOpen();

                            return;
                        }

                        await setAlertContent({
                            type: 'warning',
                            content: window.store.getState().authReducer.error
                        });
                        handleSnackClick();
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
            <Dialog open={recommendOpen} onClose={handleRecommendClose} aria-labelledby="responsive-dialog-title">
                <Typography sx={{ fontWeight: '600', pl: '20px', pt: '10px' }}>Sign Up With Us</Typography>
                <DialogContent>
                    <Success text="Login" to="/login" content="Your account has been successfully created, please login" />
                </DialogContent>
            </Dialog>
        </Box>
    );
}
