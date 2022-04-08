import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

// material-ui
import { Box, Grid, CircularProgress, Button, useTheme, DialogContent, Dialog } from '@mui/material';

// project imports
import EmptyPages from '../../../components/common/EmptyPages';
import Setupprofileimage from '../../../components/reusables/forms/Setupprofileimage';
import sleep from '../../../helpers/sleep';
import api from '../../../helpers/api';
import dateFormatter from '../../../helpers/dateFormatter';
import Success from '../../../ui-component/modals/Success';
import SetupAssociation from '../../../components/reusables/forms/SetupAssociation';

export const rebuildAssociationData = (formvalues, file) => {
    let formData = new FormData();

    formData.append('association_name', formvalues.association_name);
    formData.append('association_cac', formvalues.association_cac);
    formData.append('association_address', formvalues.association_address);
    formData.append('association_contact_email', formvalues.association_contact_email);
    formData.append('association_phone', formvalues.association_phone);
    formData.append('association_website', formvalues.association_website);
    formData.append('association_state', formvalues.main_office_location_state);
    formData.append('association_lga', formvalues.main_office_location_lga);
    formData.append('about', formvalues.about);
    formData.append('association_industry', formvalues.association_industry);
    formData.append('association_industry2', formvalues.association_industry2);
    formData.append('association_industry3', formvalues.association_industry3);
    formData.append('association_type', formvalues.association_type);
    formData.append('association_size', formvalues.association_size);
    formData.append('linkedin', formvalues.linkedin);
    formData.append('facebook', formvalues.facebook);
    formData.append('twitter', formvalues.twitter);
    formData.append('association_director', formvalues.association_director);
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

const AssociationSetup = () => {
    let location = useLocation();
    let from = location.state?.from || '';

    const filesharhe_ref = useRef();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        window.location.reload();
    };

    return (
        <Box>
            {/* profile setup form */}
            <FormikStepper
                from={from}
                initialValues={{
                    association_name: '',
                    association_cac: '',
                    association_address: '',
                    association_contact_email: '',
                    association_phone: '',
                    association_website: '',
                    main_office_location_state: '',
                    main_office_location_lga: '',
                    about: '',
                    association_industry: 'ffff',
                    association_industry2: '3d3d',
                    association_industry3: 'd3d',
                    association_type: '',
                    association_size: '',
                    linkedin: '',
                    facebook: '',
                    twitter: '',
                    association_director: '',
                    instagram: '',
                    founded: '',
                    field: 'ded',
                    logo: ''
                }}
                onSubmit={async (formvalues) => {
                    await sleep(3000);

                    const formData = await rebuildAssociationData(formvalues, filesharhe_ref.current.files[0]);
                    await api.addAssociation(formData);

                    handleClickOpen();
                }}
            >
                <EmptyPages label="association Page" />
                <SetupAssociation
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

export default AssociationSetup;

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
                    history('/enterprise');
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
