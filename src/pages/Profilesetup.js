import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { Box, Grid, Typography, CircularProgress, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Formik, Form } from 'formik';
import Setupprofile from '../components/reusables/forms/Setupprofile';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '15px calc((100vw - 1150px) / 2)',
    background: theme.palette.background1,
  },
  upper_bluebox: {
    ...theme.typography.flex,
    background: '#0076D6',
    height: '60px',
    color: 'white',
    '& > h1': {
      ...theme.typography.title3,
    },
  },
  red_text_info: {
    color: theme.palette.secondary.main1,
    textAlign: 'center',
  },
}));

const Profilesetup = () => {
  const { root, upper_bluebox, red_text_info } = useStyles();

  return (
    <Box className={root}>
      {/* upper blue box */}
      <Box className={upper_bluebox}>
        <Typography component="h1">Profile Set Up</Typography>
      </Box>
      {/* red box information */}
      <Box marginTop="14px">
        <Typography className={red_text_info}>
          You are required to set up your profile. This is a one-time initial
          set up and you can always change
          <br />
          them later in future from your dashboard. All fields marked * are
          mandatory
        </Typography>
      </Box>
      {/* profile setup form */}
      <FormikStepper
        initialValues={{
          firstName: '',
          lastName: '',
          address: '',
          postalCode: '',
          dob: new Date('2014-08-18T21:11:54'),
          city: '',
          phone: '',
          state: '',
          lga: '',
          preffered_jl: '',
          preffered_jlga: '',
          employment_type: '',
          preferred_lga: '',
          deliveryMethod: '',
          paymentMethod: '',
          disablility: false,
        }}
        // onSubmit={async (formvalues) => {
        //   await sleep(3000);

        //   const cookie = getCookie(token);
        //   if (!cookie) {
        //     await setAlertContent({
        //       type: 'error',
        //       content: 'session expired',
        //     });
        //     handleClick();
        //     dispatch({ type: 'SIGN_OUT' });
        //     return;
        //   }

        //   values = formvalues;
        //   initializePayment(onSuccessWrapper, onClose);
        // }}
      >
        <Setupprofile />
      </FormikStepper>
    </Box>
  );
};

export default Profilesetup;

export function FormikStepper({ children, ...props }) {
  const { backsection, controls } = useStyles();
  let history = useNavigate();
  const [step, setStep] = useState(0);
  const childrenArray = React.Children.toArray(children);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);
  //   useEffect(() => {
  //     goBack = setStep;
  //   }, []);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          //   if (step === 0) {
          //     customer_details({ ...values });
          //   }
          setStep((s) => s + 1);

          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          {/* <ThemeProvider theme={muiTheme}>
                <Stepper color="secondary" activeStep={step}>
                  {childrenArray.map((child, index) => (
                    <Step
                      color="secondary"
                      key={child.props.label}
                      completed={step > index || completed}
                    >
                      <StepLabel>{child.props.label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </ThemeProvider> */}

          {currentChild}
          {/* 

          <Grid className={controls} container spacing={2}>
            {step === 0 ? (
              <Grid
                className={backsection}
                onClick={() => history('/allmeals')}
                item
              >
                <BsArrowLeft />
                <Typography>Order page</Typography>
              </Grid>
            ) : null}
            {step === 1 ? (
              <Grid
                className={backsection}
                onClick={() => setStep((s) => s - 1)}
                item
              >
                <BsArrowLeft />
                <Typography>Customer Info</Typography>
              </Grid>
            ) : null}
            {step === 2 ? (
              <Grid
                className={backsection}
                onClick={isSubmitting ? null : () => setStep((s) => s - 1)}
                item
              >
                <BsArrowLeft />
                <Typography>Shipping Info</Typography>
              </Grid>
            ) : null}
         section 
            {step === 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="secondary"
                  disableElevation
                  type="submit"
                >
                  Continue to shipping
                </Button>
              </Grid>
            ) : null}
            {step === 1 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="secondary"
                  disableElevation
                  type="submit"
                >
                  Continue to Billing
                </Button>
              </Grid>
            ) : null}
            {step === 2 ? (
              <Grid item>
                <Button
                  startIcon={
                    isSubmitting ? <CircularProgress size="1rem" /> : null
                  }
                  disabled={isSubmitting}
                  variant="contained"
                  color="secondary"
                  disableElevation
                  type="submit"
                >
                  {isSubmitting
                    ? 'Submitting'
                    : isLastStep()
                    ? 'Complete Order'
                    : 'Next'}
                </Button>
              </Grid>
            ) : null}
          </Grid>
       
        */}
        </Form>
      )}
    </Formik>
  );
}
