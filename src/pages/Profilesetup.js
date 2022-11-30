import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
import sleep from '../helpers/sleep';

// styles
const useStyles = makeStyles((theme) => ({
    root: {
        padding: '15px calc((100vw - 1150px) / 2)',
        background: '#faf9f9'
    }
}));

const rebuildData = (formvalues, file) => {
    let formData = new FormData();
    formData.append('first_name', formvalues.firstName);
    formData.append('last_name', formvalues.lastName);
    formData.append('user_phonenum', formvalues.phone);
    formData.append('user_email', formvalues.email);
    formData.append('marital_status', formvalues.maritalStatus);
    formData.append('profession', formvalues.profession);
    formData.append('employment_type', formvalues.employment_type);
    formData.append('employment_status', formvalues.employment_status);
    formData.append('educational_qualification', formvalues.academicLevel);
    formData.append('gender', formvalues.gender);
    formData.append('disabled', formvalues.disablility);
    formData.append('current_employer', formvalues.current_employer);
    // formData.append('languages[]', formvalues.languages);
    //  formData.append('other_professions[]', formvalues.other_professions);

    for (var i = 0; i < formvalues.other_professions.length; i++) {
        formData.append('other_professions[]', formvalues.other_professions[i].name);
    }
    for (var b = 0; b < formvalues.languages.length; b++) {
        formData.append('languages[]', formvalues.languages[b].name);
    }
    formData.append('selectedState', formvalues.state);
    formData.append('selectedLGA', formvalues.lga);
    formData.append('selectedState2', formvalues.preffered_jl);
    formData.append('selectedLGA2', formvalues.preffered_jlga);
    formData.append('about', formvalues.about);
    formData.append('website', formvalues.website);
    formData.append('age_range', formvalues.age_range);
    formData.append('employers_address', formvalues.employer_address);
    formData.append('disability_details', formvalues.disability_details);
    if (file) {
        formData.append('profilepic', file);
    }
    return formData;
};

const initiaValforLanandPro = (val) => {
    let valArray = Object.values(JSON.parse(val));
    let returnedArray = [];

    for (var i = 0; i < valArray.length; i++) {
        returnedArray.push({ name: valArray[i] });
    }

    return returnedArray;
};

const FILE_SIZE = 200000;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

const Profilesetup = () => {
    const { root } = useStyles();
    let location = useLocation();
    let from = location.state?.from || '';

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
            {!from && (
                <Box marginTop="14px">
                    <Typography sx={{ color: theme.palette.secondary.main1, textAlign: 'center' }}>
                        You are required to set up your profile. This is a one-time initial set up and you can always change
                        <br />
                        them later in future from your dashboard. All fields marked * are mandatory
                    </Typography>
                </Box>
            )}
            {/* profile setup form */}
            <FormikStepper
                from={from}
                initialValues={{
                    firstName: user?.bio.first_name || '',
                    lastName: user?.bio.last_name || '',

                    email: user?.bio.email || '',
                    phone: user?.bio.phone || '',
                    gender: user?.bio.gender || '',
                    state: user?.bio.state || '',
                    maritalStatus: user?.bio.marital_status || '',
                    employment_status: user?.bio.employment_status || '',
                    lga: user?.bio.lga || '',
                    profession: user?.bio.profession || '',
                    academicLevel: user?.bio.educational_qualification || '',
                    about: user?.bio.about || '',
                    website: user?.bio.website || '',
                    preffered_jl: user?.bio.preferred_job_location_state || '',
                    preffered_jlga: user?.bio.preferred_job_location_lga || '',
                    employment_type: user?.bio.employment_type || '',
                    current_employer: user?.bio.current_employer || '',
                    employer_address: user?.bio.employers_address || '',
                    age_range: user?.bio.age_range || '',
                    disablility: user?.bio ? JSON.parse(user?.bio.disabled) : false,
                    other_professions: user?.bio.other_professions1 ? initiaValforLanandPro(user.bio.other_professions1) : [],
                    languages: user?.bio.languages1 ? initiaValforLanandPro(user.bio.languages1) : [],
                    disability_details: user?.bio.disability_details || '',
                    file: null
                }}
                onSubmit={async (formvalues) => {
                    await sleep(3000);

                    var formData;
                    if (from) {
                        formData = await rebuildData(formvalues);
                    } else {
                        formData = await rebuildData(formvalues, filesharhe_ref.current.files[0]);
                    }

                    await dispatch(updateUserProfile(formData));
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
                        age_range: Yup.string().required('select an age range'),
                        profession: Yup.string().required('profession is Required'),
                        languages: Yup.array(Yup.object())
                            .test({
                                message: 'select atleast one language',
                                test: (arr) => arr.length >= 1
                            })
                            .required('select atleast one language'),
                        //    other_professions: Yup.array(Yup.object())
                        //         .test({
                        //             message: 'select atleast one language',
                        //             test: (arr) => arr.length >= 1
                        //         })
                        //         .required('select atleast one language'),
                        academicLevel: Yup.string().required('academic level is Required'),
                        state: Yup.string().required('state is required'),
                        lga: Yup.string().required('city is Required'),
                        about: Yup.string().required('about is required'),
                        current_employer: employment === 'employed' ? Yup.string().required('current employer is required') : '',
                        employment_type: employment === 'unemployed' ? Yup.string().required('employment type is required') : '',
                        employment_status: Yup.string().required('present employment Status is required'),
                        preffered_jlga: employment === 'unemployed' ? Yup.string().required('preffered Job LGA is required') : '',
                        preffered_jl: employment === 'unemployed' ? Yup.string().required('preffered job Location is required') : ''
                    })}
                    setDis_ability={setDis_ability}
                    setEmployment={setEmployment}
                />
                <Setupprofileimage
                    validationSchema={Yup.object().shape({
                        file: from
                            ? Yup.mixed()
                                  .required('A file is required')
                                  .test('fileSize', 'File too large', (value) =>
                                      value && filesharhe_ref.current
                                          ? filesharhe_ref.current.files[0].size <= FILE_SIZE
                                              ? true
                                              : false
                                          : true
                                  )
                                  .test('fileFormat', 'Unsupported Format', (value) => {
                                      //  console.log(filesharhe_ref.current.files[0].size);
                                      return value && filesharhe_ref.current
                                          ? SUPPORTED_FORMATS.includes(filesharhe_ref.current.files[0].type)
                                              ? true
                                              : false
                                          : true;
                                  })
                            : ''
                    })}
                    ref={filesharhe_ref}
                    name="file"
                />
            </FormikStepper>
        </Box>
    );
};

export default Profilesetup;

export function FormikStepper({ children, from, ...props }) {
    let history = useNavigate();
    const [step, setStep] = useState(0);
    const childrenArray = React.Children.toArray(children);
    const currentChild = childrenArray[step];

    const theme = useTheme();

    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    return (
        <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => {
                //new addition
                if (from) {
                    await props.onSubmit(values);
                    history('/profile');
                    return;
                }
                if (isLastStep()) {
                    await props.onSubmit(values);
                    history('/profilesuccess');
                } else {
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
                                    startIcon={isSubmitting ? <CircularProgress color="secondary" size="1rem" /> : null}
                                    //      disabled={isSubmitting}
                                    variant="contained"
                                    disableElevation
                                    type="submit"
                                >
                                    {from ? 'Update' : 'Continue'}
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
                                    startIcon={isSubmitting ? <CircularProgress color="secondary" size="1rem" /> : null}
                                    disabled={isSubmitting}
                                    variant="contained"
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
