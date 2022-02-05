import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { Box, Grid, Typography, CircularProgress, Button, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

// project imports
import Setupprofile from '../components/reusables/forms/Setupprofile';
import Setupprofileimage from '../components/reusables/forms/Setupprofileimage';
import { updateUserProfile } from '../store/actions/authActions';
const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

// styles
const useStyles = makeStyles((theme) => ({
    root: {
        padding: '15px calc((100vw - 1150px) / 2)',
        //   background: theme.palette.background1,
        background: '#faf9f9'
    }
}));

const FILE_SIZE = 200000;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

const Profilesetup = () => {
    const { root, upper_bluebox, red_text_info } = useStyles();
    const [dis_ability, setDis_ability] = useState(false);
    const [employment, setEmployment] = useState({});
    const filesharhe_ref = useRef();
    const theme = useTheme();
    const user = useSelector((state) => state.authReducer.user);
    const dispatch = useDispatch();

    return (
        <Box className={root}>
            {/* upper blue box */}
            <Box
                sx={{
                    ...theme.typography.flex,
                    background: '#0076D6',
                    height: '60px',
                    color: 'white',
                    '& > h1': {
                        ...theme.typography.title3
                    }
                }}
            >
                <Typography component="h1">{user?.bio ? 'Update Your Profile' : 'Profile Set Up'} </Typography>
            </Box>
            {/* red box information */}
            <Box marginTop="14px">
                <Typography sx={{ color: theme.palette.secondary.main1, textAlign: 'center' }}>
                    You are required to set up your profile. This is a one-time initial set up and you can always change
                    <br />
                    them later in future from your dashboard. All fields marked * are mandatory
                </Typography>
            </Box>
            {/* profile setup form */}
            <FormikStepper
                initialValues={{
                    firstName: user?.bio.first_name || '',
                    lastName: user?.bio.last_name || '',
                    //  dob: new Date('2014-08-18T21:11:54'),
                    dob: '',
                    email: user?.bio.email || '',
                    phone: user?.bio.phone || '',
                    gender: user?.bio.gender || '',
                    state: user?.bio.state || '',
                    maritalStatus: user?.bio.marital_status || '',
                    employment_status: '',
                    lga: user?.bio.lga || '',
                    profession: '',
                    academicLevel: '',
                    about: user?.bio.about || '',
                    website: user?.bio.website || '',
                    preffered_jl: '',
                    preffered_jlga: '',
                    employment_type: '',
                    current_employer: '',
                    employer_address: '',
                    disablility: false,
                    other_professions: user?.bio.other_professions1 ? Object.values(JSON.parse(user?.bio.other_professions1)) : [],
                    languages: ['English'],
                    disability_details: '',
                    file: null
                }}
                onSubmit={async (formvalues) => {
                    await sleep(3000);
                    // const cookie = getCookie(token);
                    //  if (!cookie) {
                    //   await setAlertContent({
                    //     type: 'error',
                    //     content: 'session expired',
                    //   });
                    //  handleClick();
                    //  dispatch({ type: 'SIGN_OUT' });
                    //   return;
                    //   }
                    //  values = formvalues;
                    //  initializePayment(onSuccessWrapper, onClose);

                    console.log(formvalues);
                    const newFormValues = {
                        first_name: formvalues.firstName,
                        last_name: formvalues.lastName,
                        user_phonenum: formvalues.phone,
                        user_email: formvalues.email,
                        marital_status: formvalues.maritalStatus,
                        profession: formvalues.profession,
                        employment_type: formvalues.employment_type,
                        employment_status: formvalues.employment_status,
                        educational_qualification: formvalues.academicLevel,
                        gender: formvalues.gender,
                        disabled: formvalues.disablility,
                        current_employer: formvalues.current_employer,
                        //  languages: JSON.stringify(formvalues.languages),
                        languages: formvalues.languages,
                        other_professions: formvalues.other_professions,
                        selectedState: formvalues.state,
                        selectedLGA: formvalues.lga,
                        selectedState2: formvalues.preffered_jl,
                        selectedLGA2: formvalues.preffered_jlga,
                        about: formvalues.about,
                        website: formvalues.website
                    };
                    await dispatch(updateUserProfile(newFormValues));

                    // if user navigate to profile success
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
                        current_employer: employment === 'employed' ? Yup.string().required('current employer is required') : '',
                        employer_address: employment === 'employed' ? Yup.string().required('employer address is required') : '',
                        employment_type: employment === 'unemployed' ? Yup.string().required('employment type is required') : '',
                        employment_status: Yup.string().required('present employment Status is required'),
                        preffered_jlga: employment === 'unemployed' ? Yup.string().required('preffered Job LGA is required') : '',
                        preffered_jl: employment === 'unemployed' ? Yup.string().required('preffered job Location is required') : '',

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
                    setEmployment={setEmployment}
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
    const theme = useTheme();
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
                console.log(values);
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
                            <Grid
                                sx={{
                                    ...theme.typography.flex,
                                    height: '150px',
                                    background: 'white',
                                    padding: '20px',
                                    '& > :nth-child(1)': {
                                        padding: '7px 120px',
                                        borderRadius: '0px'
                                    }
                                }}
                                xs={12}
                                item
                            >
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
                            <Grid
                                sx={{
                                    ...theme.typography.flex,
                                    height: '150px',
                                    background: 'white',
                                    padding: '20px',
                                    '& > :nth-child(1)': {
                                        padding: '7px 120px',
                                        borderRadius: '0px'
                                    }
                                }}
                                xs={12}
                                item
                            >
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