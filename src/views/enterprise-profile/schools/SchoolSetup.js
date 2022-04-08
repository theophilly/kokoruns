import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

// material-ui
import { Box, Grid, CircularProgress, Button, useTheme, DialogContent, Dialog } from '@mui/material';

// project imports
import EmptyPages from '../../../components/common/EmptyPages';
import SetupSchool from '../../../components/reusables/forms/SetupSchool';
import Setupprofileimage from '../../../components/reusables/forms/Setupprofileimage';
import sleep from '../../../helpers/sleep';
import api from '../../../helpers/api';
import dateFormatter from '../../../helpers/dateFormatter';
import Success from '../../../ui-component/modals/Success';

export const rebuildSchoolData = (formvalues, file) => {
    let formData = new FormData();

    formData.append('school_name', formvalues.school_name);
    formData.append('cac', formvalues.cac);
    formData.append('school_address', formvalues.school_address);
    formData.append('school_email', formvalues.school_email);
    formData.append('school_number', formvalues.school_number);
    formData.append('website', formvalues.website);
    formData.append('school_state', formvalues.school_state);
    formData.append('school_lga', formvalues.school_lga);
    formData.append('about', formvalues.about);
    formData.append('school_industry', formvalues.school_industry);
    formData.append('school_industry2', formvalues.school_industry2);
    formData.append('school_industry3', formvalues.school_industry3);
    formData.append('school_type', formvalues.school_type);
    formData.append('school_size', formvalues.school_size);
    formData.append('linkedin', formvalues.linkedin);
    formData.append('facebook', formvalues.facebook);
    formData.append('twitter', formvalues.twitter);
    formData.append('school_director', formvalues.school_director);
    formData.append('instagram', formvalues.instagram);
    formData.append('founded', dateFormatter(formvalues.founded));
    formData.append('field', formvalues.field);

    if (file) {
        formData.append('logo', file);
    }
    return formData;
};

const FILE_SIZE = 1000000;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

const SchoolSetup = () => {
    let location = useLocation();
    let from = location.state?.from || '';
    let history = useNavigate();
    const filesharhe_ref = useRef();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        history('/enterprise');
    };

    return (
        <Box>
            {/* profile setup form */}
            <FormikStepper
                from={from}
                initialValues={{
                    school_name: '',
                    cac: '',
                    school_address: '',
                    school_email: '',
                    school_number: '',
                    website: '',
                    school_state: '',
                    school_lga: '',
                    about: '',
                    school_industry: 'ffff',
                    school_industry2: '3d3d',
                    school_industry3: 'd3d',
                    school_type: '',
                    school_size: '',
                    linkedin: '',
                    facebook: '',
                    twitter: '',
                    school_director: '',
                    instagram: '',
                    founded: '',
                    field: 'ded',
                    logo: ''
                }}
                onSubmit={async (formvalues) => {
                    await sleep(3000);

                    const formData = await rebuildSchoolData(formvalues, filesharhe_ref.current.files[0]);
                    await api.addSchool(formData);

                    handleClickOpen();
                }}
            >
                <EmptyPages label="School Page" />
                <SetupSchool
                // validationSchema={Yup.object().shape({
                //     firstName: Yup.string().required('First Name is Required'),
                //     lastName: Yup.string().required('Last Name is Required'),
                //     gender: Yup.string().required('Gender is Required'),
                //     maritalStatus: Yup.string().required('marital status is Required'),
                //     email: Yup.string().email('Invalid email format').required('Required'),
                //     current_employer: employment === 'employed' ? Yup.string().required('current employer is required') : '',
                //     employment_type: employment === 'unemployed' ? Yup.string().required('employment type is required') : '',
                //     employment_status: Yup.string().required('present employment Status is required'),
                //     preffered_jlga: employment === 'unemployed' ? Yup.string().required('preffered Job LGA is required') : '',
                //     preffered_jl: employment === 'unemployed' ? Yup.string().required('preffered job Location is required') : ''
                // })}
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
                                      return value && filesharhe_ref.current
                                          ? SUPPORTED_FORMATS.includes(filesharhe_ref.current.files[0].type)
                                              ? true
                                              : false
                                          : true;
                                  })
                            : ''
                    })}
                    ref={filesharhe_ref}
                    name="logo"
                />
            </FormikStepper>
            <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogContent>
                    <Success text="See Page" content="You have successfully created your page. View page now" to="/enterprise"></Success>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default SchoolSetup;

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
                console.log(values);

                //new addition
                if (from) {
                    await props.onSubmit(values);
                    history('/profile');
                    return;
                }
                if (isLastStep()) {
                    //  await props.onSubmit(values);
                    //  history('/profilesuccess');
                    await props.onSubmit({ ...values, logo: 'hfhf', founded: '2020' });
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
                                    {from ? 'Update' : 'create page'}
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
                                    //      disabled={isSubmitting}
                                    variant="contained"
                                    disableElevation
                                    type="submit"
                                >
                                    Continue
                                </Button>
                            </Grid>
                        ) : null}

                        {step === 2 ? (
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
                                    {isSubmitting ? 'Submitting' : isLastStep() ? 'Finish Setup' : 'Next'}
                                </Button>
                            </Grid>
                        ) : null}
                    </Grid>
                </Form>
            )}
        </Formik>
    );
}
