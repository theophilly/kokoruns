import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Grid, Box, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';

//local import
import Textfield from '../reusables/FormUI/Textfield';
import Passwordfield from '../reusables/FormUI/Passwordfield';
// import { login } from '../../store/actions/authActions';

const useStyles = makeStyles((theme) => ({
  root_left_lower: {
    //border: '1px solid red',

    '& > :nth-child(1)': {
      fontFamily: 'Mulish',
      fontSize: '1.6rem',
      fontWeight: '700',
    },
  },

  login_button: {
    width: '100%',
    marginTop: '20px',
    letterSpacing: '1px',
    borderRadius: '0px',
    color: 'white',
    '& :hover': {
      color: 'black',
      //  background: 'lightgreen',
    },
  },

  recommendation: {
    fontFamily: 'Mulish',
    fontSize: '.9rem',
  },
  recommendation_link: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: '.9rem',
    cursor: 'pointer',
    marginLeft: '5px',
  },
  sign_up_google: {
    ...theme.typography.flex,
    height: '50px',
    borderRadius: '7px',
    background: '#F0F0F0',
    cursor: 'pointer',
  },
  google_img: {
    width: '20px',
    marginRight: '20px',
  },
}));

export default function SignInForm({ onclick, setClickData, showToast, path }) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const {
    root_left_lower,
    login_button,
    recommendation,
    recommendation_link,
    google_img,
    sign_up_google,
  } = useStyles();
  return (
    <div className={root_left_lower}>
      <Typography variant="h1" component="h1">
        Secure Member Log-in
      </Typography>
      {/* third */}
      <Box marginTop="20px">
        <Formik
          initialValues={{
            loginEmail: '',
            loginPassword: '',
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
          }}
          validationSchema={Yup.object().shape({
            loginEmail: Yup.string()
              .email('Invalid email format')
              .required('Required'),
            loginPassword: Yup.string()
              .min(6, 'password must be atleast 6 characters')
              .required('Password is required'),
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
                      startIcon={
                        isSubmitting ? (
                          <CircularProgress color="secondary" size="1rem" />
                        ) : null
                      }
                      className={login_button}
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

      <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        margin="40px 0"
        //  border="1px solid red"
      >
        <Typography className={recommendation}>or continue with</Typography>
      </Box>
      <Box className={sign_up_google}>
        <img className={google_img} alt="google logo" src="./google.png" />
        <Typography>Sign in with Google</Typography>
      </Box>
      <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        margin="20px 0"
        // border="1px solid red"
      >
        <Typography className={recommendation}>
          Dont have an account?
        </Typography>
        <Typography
          onClick={() => navigate('/register')}
          color="primary"
          className={recommendation_link}
        >
          Sign Up
        </Typography>
      </Box>
    </div>
  );
}
