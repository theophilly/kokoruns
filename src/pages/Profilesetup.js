import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

// material-ui
import { Box, Grid, Typography, CircularProgress, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

// project imports
import Setupprofile from '../components/reusables/forms/Setupprofile';
import Setupprofileimage from '../components/reusables/forms/Setupprofileimage';
const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

// styles
const useStyles = makeStyles((theme) => ({
    root: {
        padding: '15px calc((100vw - 1150px) / 2)',
        //   background: theme.palette.background1,
        background: '#faf9f9'
    },
    upper_bluebox: {
        ...theme.typography.flex,
        background: '#0076D6',
        height: '60px',
        color: 'white',
        '& > h1': {
            ...theme.typography.title3
        }
    },
    red_text_info: {
        color: theme.palette.secondary.main1,
        textAlign: 'center'
    },
    lower_buttons: {
        ...theme.typography.flex,
        height: '150px',
        background: 'white',
        padding: '20px',
        '& > :nth-child(1)': {
            padding: '7px 120px',
            borderRadius: '0px'
        }
    }
}));

const FILE_SIZE = 200000;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

const Profilesetup = () => {
    const { root, upper_bluebox, red_text_info } = useStyles();
    const [dis_ability, setDis_ability] = useState(false);
    const filesharhe_ref = useRef();

    return (
        <Box className={root}>
            {/* upper blue box */}
            <Box className={upper_bluebox}>
                <Typography component="h1">Profile Set Up</Typography>
            </Box>
            {/* red box information */}
            <Box marginTop="14px">
                <Typography className={red_text_info}>
                    You are required to set up your profile. This is a one-time initial set up and you can always change
                    <br />
                    them later in future from your dashboard. All fields marked * are mandatory
                </Typography>
            </Box>
            {/* profile setup form */}
            <FormikStepper
                initialValues={{
                    firstName: '',
                    lastName: '',
                    dob: new Date('2014-08-18T21:11:54'),
                    email: '',
                    phone: '',
                    gender: '',
                    state: '',
                    maritalStatus: '',
                    employment_status: '',
                    lga: '',
                    profession: '',
                    academicLevel: '',
                    about: '',
                    preffered_jl: '',
                    preffered_jlga: '',
                    employment_type: '',
                    current_employer: '',
                    employer_address: '',
                    disablility: false,
                    languages: ['english'],
                    disability_details: '',
                    file: null
                }}
                onSubmit={async (formvalues) => {
                    await sleep(3000);
                    //    const cookie = getCookie(token);
                    //    if (!cookie) {
                    //      await setAlertContent({
                    //        type: 'error',
                    //        content: 'session expired',
                    //      });
                    //      handleClick();
                    //      dispatch({ type: 'SIGN_OUT' });
                    //      return;
                    //    }
                    //    values = formvalues;
                    //    initializePayment(onSuccessWrapper, onClose);
                    //  console.log(formvalues);
                }}
            >
                <Setupprofile
                    validationSchema={Yup.object().shape({
                        firstName: Yup.string().required('First Name is Required'),
                        lastName: Yup.string().required('Last Name is Required'),
                        gender: Yup.string().required('Gender is Required'),
                        maritalStatus: Yup.string().required('marital status is Required'),
                        email: Yup.string().email('Invalid email format').required('Required'),
                        phone: Yup.number().integer().typeError('Please enter a valid phone number').required('Phone is Required'),
                        dob: Yup.date().required('city is Required'),
                        profession: Yup.string().required('profession is Required'),
                        academicLevel: Yup.string().required('academic level is Required'),
                        state: Yup.string().required('state is required'),
                        lga: Yup.string().required('city is Required'),
                        about: Yup.string().required('about is required'),
                        current_employer: Yup.string().required('current employer is required'),
                        employer_address: Yup.string().required('employer address is required'),
                        employment_type: Yup.string().required('employment type is required'),
                        employment_status: Yup.string().required('present employment Status is required'),
                        preffered_jlga: Yup.string().required('preffered Job LGA is required'),
                        preffered_jl: Yup.string().required('preffered job Location is required'),

                        languages: Yup.array(Yup.string())
                            .test({
                                message: 'select atleast one language',
                                test: (arr) => arr.length >= 1
                            })
                            .required('select atleast one language'),
                        //   disablility: Yup.boolean().required('please tell us your status'),
                        disability_details: dis_ability ? Yup.string().required('About is required') : ''
                    })}
                    setDis_ability={setDis_ability}
                />
                <Setupprofileimage
                    validationSchema={Yup.object().shape({
                        file: Yup.mixed()
                            .required('A file is required')
                            .test('fileSize', 'File too large', (value) =>
                                value && filesharhe_ref.current ? (filesharhe_ref.current.files[0].size <= FILE_SIZE ? true : false) : true
                            )
                            .test('fileFormat', 'Unsupported Format', (value) => {
                                //  console.log(filesharhe_ref.current.files[0].size);
                                return value && filesharhe_ref.current
                                    ? SUPPORTED_FORMATS.includes(filesharhe_ref.current.files[0].type)
                                        ? true
                                        : false
                                    : true;
                            })
                    })}
                    ref={filesharhe_ref}
                />
            </FormikStepper>
        </Box>
    );
};

export default Profilesetup;

export function FormikStepper({ children, ...props }) {
    const { lower_buttons } = useStyles();
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
                // console.log(values);
                if (isLastStep()) {
                    await props.onSubmit(values);
                    history('/profilesuccess');
                    //  await props.onSubmit(values, helpers);
                    //  setCompleted(true);
                } else {
                    //   if (step === 0) {
                    //     customer_details({ ...values });
                    //   }
                    setStep((s) => s + 1);

                    helpers.setTouched({});
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                }
            }}
        >
            {({ isSubmitting }) => (
                <Form autoComplete="off">
                    {currentChild}

                    <Grid container>
                        {step === 0 ? (
                            <Grid className={lower_buttons} xs={12} item>
                                <Button
                                    disabled={isSubmitting}
                                    variant="contained"
                                    // color="secondary"
                                    disableElevation
                                    type="submit"
                                >
                                    Continue
                                </Button>
                            </Grid>
                        ) : null}

                        {step === 1 ? (
                            <Grid className={lower_buttons} xs={12} item>
                                <Button
                                    startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                                    disabled={isSubmitting}
                                    variant="contained"
                                    color="secondary"
                                    disableElevation
                                    type="submit"
                                >
                                    {isSubmitting ? 'Submitting' : isLastStep() ? 'Save Profile' : 'Next'}
                                </Button>
                            </Grid>
                        ) : null}
                    </Grid>
                </Form>
            )}
        </Formik>
    );
}
