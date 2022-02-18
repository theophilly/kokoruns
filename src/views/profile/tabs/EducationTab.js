import React, { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    Divider,
    Button,
    useTheme,
    useMediaQuery,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    CircularProgress
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { BiEditAlt } from 'react-icons/bi';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import education from '../../../utils/education';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Textfield from '../../../components/reusables/FormUI/Textfield';
import Textarea from '../../../components/reusables/FormUI/Textarea';
import Datepicker from '../../../components/reusables/FormUI/Datepicker';
import {
    addEducation,
    addCertification,
    deleteEducation,
    updateEducation,
    updateCertification,
    deleteCertification
} from '../../../store/actions/userDataActions';
import { fetchUserDetails } from '../../../store/actions/authActions';
import Success from '../../../ui-component/modals/Success';
import Warning from '../../../ui-component/modals/Warning';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'inherit',
        width: '100%'
    },

    lower_button: {
        width: '100%',
        textTransform: 'capitalize',
        border: 'none',
        margin: '10px 0',
        '&:hover': {
            border: 'none'
        }
    }
}));

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const months = {
    January: '01',
    February: '02',
    March: '03',
    April: '04',
    May: '05',
    June: '06',
    July: '07',
    August: '08',
    September: '09',
    October: '10',
    November: '11',
    December: '12'
};

const Item = ({ year, title, sub, clicked, startYear, setEdit, value = {} }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                borderRadius: '10px',
                background: 'white',
                padding: '0 15px 13px',

                '& > :nth-child(2)': {
                    fontSize: '0.8rem',
                    color: theme.palette.primary.main,
                    fontWeight: '500',
                    margin: '5px 0'
                },
                '& > :nth-child(3)': {
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    marginBottom: '5px'
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '& :nth-child(1)': {
                        fontSize: '0.8rem'
                    },
                    '& :nth-child(2)': {
                        fontSize: '0.9rem',
                        color: theme.palette.primary.main,
                        cursor: 'pointer'
                    }
                }}
            >
                <Typography>
                    {startYear && startYear + ' - '} {year}{' '}
                </Typography>
                <BiEditAlt
                    onClick={async () => {
                        await setEdit(() => {
                            return { ...value, show: true };
                        });
                        clicked(true);
                    }}
                />
            </Box>
            <Typography>{title}</Typography>
            <Typography> {sub} </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Divider
                    sx={{
                        opacity: 1,
                        borderColor: '#CCCCCC',
                        width: '100%'
                    }}
                />
            </Box>
        </Box>
    );
};

const EducationTab = () => {
    const { education: educations, certifications } = useSelector((state) => state.authReducer.user);
    const dispatch = useDispatch();
    const [edit, setEdit] = React.useState({ show: false });
    const [load, setLoad] = React.useState(false);
    const [modalMessage, setModalMessage] = React.useState('');
    const [educationStep, setEducationStep] = React.useState(0);
    const [certificateStep, setCertificateStep] = React.useState(0);

    const { root, lower_button } = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery('(min-width:900px)');

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        setEdit((prev) => {
            return { ...prev, show: false };
        });
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        setEducationStep(0);
    };

    // certificate
    const [certificateOpen, setCertificateOpen] = React.useState(false);
    const handleCertificate = async () => {
        await setCertificateOpen(() => false);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        setEdit((prev) => {
            return { ...prev, show: false };
        });
        setCertificateStep(0);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const delEducation = async () => {
        console.log(edit.education_id);
        await setLoad(true);
        await dispatch(
            deleteEducation({
                id: edit.education_id
            })
        );

        await setLoad(false);
    };

    const delCertification = async () => {
        console.log(edit.certification_id);
        await setLoad(true);
        await dispatch(
            deleteCertification({
                id: edit.certification_id
            })
        );

        await setLoad(false);
    };

    return (
        <Box className={root}>
            <Grid spacing={10} container>
                <Grid xs={12} md={6} item>
                    <Box bgcolor="white" padding="20px 0" borderRadius="5px">
                        {/* {education.education.map((item) => (
                            <Item clicked={setOpen} year={item.duration} title={item.award} sub={item.school} />
                        ))} */}

                        {educations.length > 0 &&
                            educations.map((item) => (
                                <Item
                                    value={item}
                                    setEdit={setEdit}
                                    clicked={setOpen}
                                    year={new Date(item.end).getUTCFullYear()}
                                    title={item.course}
                                    sub={item.school}
                                />
                            ))}

                        <Button
                            onClick={() => {
                                setOpen(true);
                                setEducationStep(0);
                            }}
                            className={lower_button}
                            variant="outlined"
                            startIcon={<AddCircleIcon />}
                        >
                            Add Education
                        </Button>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} item>
                    <Box bgcolor="white" padding="20px 0" borderRadius="5px">
                        {certifications.map((item) => (
                            <Item
                                value={item}
                                setEdit={setEdit}
                                clicked={setCertificateOpen}
                                year={new Date(item.end).getUTCFullYear()}
                                title={item.course}
                                sub={item.school}
                            />
                        ))}

                        <Button
                            onClick={() => {
                                setCertificateOpen(true);
                                setCertificateStep(0);
                            }}
                            className={lower_button}
                            variant="outlined"
                            startIcon={<AddCircleIcon />}
                        >
                            Add Certification
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <Dialog open={open} onClose={handleClose} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
                <DialogContent>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: '1.2rem' }}>Educational Information</Typography>
                                <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleClose} />
                            </Box>
                        </Grid>
                    </Grid>
                    {edit.show ? (
                        // update

                        <EducationStepper resumeStep={educationStep} setResumeStep={setEducationStep}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Formik
                                        initialValues={{
                                            degree: edit?.course,
                                            name_of_institution: edit?.school,
                                            date_started: edit?.start,
                                            date_completed: edit?.end
                                        }}
                                        onSubmit={async (values) => {
                                            console.log(values);

                                            await dispatch(
                                                updateEducation(edit.education_id, {
                                                    // start_month: months[monthNames[values.date_started.getMonth()]],
                                                    // start_year: values.date_started.getUTCFullYear(),
                                                    // end_month: months[monthNames[values.date_completed.getMonth()]],
                                                    // end_year: values.date_completed.getUTCFullYear(),
                                                    school: values.name_of_institution,
                                                    course: values.degree,
                                                    class_of_degree: 'j',
                                                    is_current: false,
                                                    start: `${new Date(values.date_started).getFullYear()}-${
                                                        months[monthNames[new Date(values.date_started).getMonth()]]
                                                    }-${('0' + new Date(values.date_started).getDate()).slice(-2)}`,
                                                    end: `${new Date(values.date_completed).getFullYear()}-${
                                                        months[monthNames[new Date(values.date_completed).getMonth()]]
                                                    }-${('0' + new Date(values.date_completed).getDate()).slice(-2)}`
                                                })
                                            );
                                            await setModalMessage(
                                                'You have successfully updated this educational information. You can go to your dashboard now.'
                                            );
                                            setEducationStep((step) => step + 2);
                                        }}
                                        validationSchema={Yup.object().shape({
                                            degree: Yup.string().required('Degree is Required'),
                                            name_of_institution: Yup.string().required('Name of Institution is Required'),
                                            date_started: Yup.date().required('Starting Date is Required is Required'),
                                            date_completed: Yup.date().required('Date Completed is Required is Required')
                                        })}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form autoComplete="off">
                                                <Grid container>
                                                    <Grid
                                                        sx={{
                                                            paddingRight: '20px',
                                                            mt: '10px',
                                                            '@media (max-width: 900px)': {
                                                                padding: '0px'
                                                            }
                                                        }}
                                                        item
                                                        xs={12}
                                                        md={6}
                                                    >
                                                        <Textfield name="degree" helpertext="Certificate" />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px', mt: '10px' }} item xs={12} md={6}>
                                                        <Textfield name="name_of_institution" helpertext="Name of Insitution" />
                                                    </Grid>
                                                    {/* below */}
                                                    <Grid
                                                        sx={{
                                                            paddingRight: '20px',
                                                            mt: '10px',
                                                            '@media (max-width: 900px)': {
                                                                padding: '0px'
                                                            }
                                                        }}
                                                        item
                                                        xs={12}
                                                        md={6}
                                                    >
                                                        <Datepicker name="date_started" helpertext="Date Started" />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px', mt: '10px' }} item xs={12} md={6}>
                                                        <Datepicker name="date_completed" helpertext="Date Completed" />
                                                    </Grid>

                                                    <Grid xs={12} item>
                                                        <Box sx={{ ...theme.typography.flex }}>
                                                            <DialogActions
                                                                sx={{
                                                                    display: 'flex',
                                                                    gap: '20px',
                                                                    '@media (max-width: 513px)': {
                                                                        gap: '10px'
                                                                    }
                                                                }}
                                                            >
                                                                <Button
                                                                    startIcon={
                                                                        load ? <CircularProgress color="secondary" size="1rem" /> : null
                                                                    }
                                                                    sx={{
                                                                        width: '200px',
                                                                        marginTop: '20px',
                                                                        letterSpacing: '1px',
                                                                        borderRadius: '0px',
                                                                        color: 'rgb(217, 38, 39)',
                                                                        border: '1px solid rgb(217, 38, 39)',
                                                                        textTransform: 'capitalize',
                                                                        '&:hover': {
                                                                            border: '1px solid rgb(217, 38, 39)'
                                                                        },
                                                                        [theme.breakpoints.down('sm')]: {
                                                                            marginTop: '30px'
                                                                        },
                                                                        '@media (max-width: 513px)': {
                                                                            width: '120px'
                                                                        }
                                                                    }}
                                                                    disableElevation
                                                                    variant="outlined"
                                                                    onClick={() => setEducationStep((step) => step + 1)}
                                                                >
                                                                    Delete
                                                                </Button>
                                                                <Button
                                                                    startIcon={
                                                                        isSubmitting ? (
                                                                            <CircularProgress color="secondary" size="1rem" />
                                                                        ) : null
                                                                    }
                                                                    sx={{
                                                                        width: '200px',
                                                                        marginTop: '20px',
                                                                        letterSpacing: '1px',
                                                                        borderRadius: '0px',
                                                                        color: 'white',
                                                                        textTransform: 'capitalize',
                                                                        '& :hover': {
                                                                            color: 'black'
                                                                        },
                                                                        [theme.breakpoints.down('sm')]: {
                                                                            marginTop: '30px'
                                                                        },
                                                                        '@media (max-width: 513px)': {
                                                                            width: '120px'
                                                                        }
                                                                    }}
                                                                    disableElevation
                                                                    variant="contained"
                                                                    type="submit"
                                                                >
                                                                    Update
                                                                </Button>
                                                            </DialogActions>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Form>
                                        )}
                                    </Formik>
                                </Grid>
                            </Grid>
                            <Warning
                                load={load}
                                onNoClick={() => setEducationStep((step) => step - 1)}
                                onYesClick={async () => {
                                    await delEducation();
                                    await setModalMessage(
                                        'You have successfully delete this educational information. You can go to your dashboard now.'
                                    );
                                    setEducationStep((step) => step + 1);
                                }}
                                text="Are you sure you want to delete this educational information from your education list."
                            />
                            <Success
                                onclick={handleClose}
                                text="See All Education"
                                // to="/recommendations"
                                content={modalMessage}
                            />
                        </EducationStepper>
                    ) : (
                        <EducationStepper resumeStep={educationStep} setResumeStep={setEducationStep}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Formik
                                        initialValues={{
                                            degree: '',
                                            name_of_institution: '',
                                            date_started: null,
                                            date_completed: null
                                        }}
                                        onSubmit={async (values) => {
                                            await dispatch(
                                                addEducation({
                                                    school: values.name_of_institution,
                                                    course: values.degree,
                                                    class_of_degree: 'j',
                                                    is_current: false,
                                                    start: `${new Date(values.date_started).getFullYear()}-${
                                                        months[monthNames[new Date(values.date_started).getMonth()]]
                                                    }-${('0' + new Date(values.date_started).getDate()).slice(-2)}`,
                                                    end: `${new Date(values.date_completed).getFullYear()}-${
                                                        months[monthNames[new Date(values.date_completed).getMonth()]]
                                                    }-${('0' + new Date(values.date_completed).getDate()).slice(-2)}`
                                                })
                                            );

                                            setEducationStep((step) => step + 1);
                                        }}
                                        validationSchema={Yup.object().shape({
                                            degree: Yup.string().required('Type of certificate is Required'),
                                            name_of_institution: Yup.string().required('Name of Institution is Required'),
                                            date_started: Yup.date().required('Starting Date is Required is Required'),
                                            date_completed: Yup.date().required('Date Completed is Required is Required')
                                        })}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form autoComplete="off">
                                                <Grid container>
                                                    <Grid
                                                        sx={{
                                                            paddingRight: '20px',
                                                            mt: '10px',
                                                            '@media (max-width: 900px)': {
                                                                padding: '0px'
                                                            }
                                                        }}
                                                        item
                                                        xs={12}
                                                        md={6}
                                                    >
                                                        <Textfield
                                                            placeholder="eg: Bsc or Junior School leaving Certificate"
                                                            name="degree"
                                                            helpertext="Degree"
                                                        />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px', mt: '10px' }} item xs={12} md={6}>
                                                        <Textfield name="name_of_institution" helpertext="Name of Insitution" />
                                                    </Grid>
                                                    {/* below */}
                                                    <Grid
                                                        sx={{
                                                            paddingRight: '20px',
                                                            mt: '10px',
                                                            '@media (max-width: 900px)': {
                                                                padding: '0px'
                                                            }
                                                        }}
                                                        item
                                                        xs={12}
                                                        md={6}
                                                    >
                                                        <Datepicker name="date_started" helpertext="Date Started" />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px', mt: '10px' }} item xs={12} md={6}>
                                                        <Datepicker name="date_completed" helpertext="Date Completed" />
                                                    </Grid>

                                                    <Grid xs={12} item>
                                                        <Box sx={{ ...theme.typography.flex }}>
                                                            <DialogActions>
                                                                <Button
                                                                    startIcon={
                                                                        isSubmitting ? (
                                                                            <CircularProgress color="secondary" size="1rem" />
                                                                        ) : null
                                                                    }
                                                                    sx={{
                                                                        width: '200px',
                                                                        marginTop: '20px',
                                                                        letterSpacing: '1px',
                                                                        borderRadius: '0px',
                                                                        color: 'white',
                                                                        textTransform: 'capitalize',
                                                                        '& :hover': {
                                                                            color: 'black'
                                                                        },
                                                                        [theme.breakpoints.down('sm')]: {
                                                                            marginTop: '30px'
                                                                        }
                                                                    }}
                                                                    disableElevation
                                                                    variant="contained"
                                                                    type="submit"
                                                                >
                                                                    Save
                                                                </Button>
                                                            </DialogActions>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Form>
                                        )}
                                    </Formik>
                                </Grid>
                            </Grid>
                            <Success
                                onclick={handleClose}
                                text="See All Education"
                                // to="/recommendations"
                                content="You have successfully added an educational 
                            information. You can go to your dashboard now."
                            />
                        </EducationStepper>
                    )}
                </DialogContent>
            </Dialog>

            {/* certificate dialog */}
            <Dialog
                open={certificateOpen}
                onClose={handleCertificate}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogContent>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: '1.2rem' }}>Certification Information</Typography>
                                <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleCertificate} />
                            </Box>
                        </Grid>
                    </Grid>
                    {edit.show ? (
                        // update

                        <EducationStepper resumeStep={certificateStep} setResumeStep={setCertificateStep}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Formik
                                        initialValues={{
                                            certificate: edit?.course,
                                            certificate_body: edit?.school,
                                            date_started: edit?.start,
                                            date_completed: edit?.end
                                        }}
                                        onSubmit={async (values) => {
                                            console.log(values);

                                            await dispatch(
                                                updateCertification(edit.certification_id, {
                                                    // start_month: months[monthNames[values.date_started.getMonth()]],
                                                    // start_year: values.date_started.getUTCFullYear(),
                                                    // end_month: months[monthNames[values.date_completed.getMonth()]],
                                                    // end_year: values.date_completed.getUTCFullYear(),
                                                    school: values.certificate_body,
                                                    course: values.certificate,
                                                    class_of_degree: 'j',
                                                    is_current: false,
                                                    start: `${new Date(values.date_started).getFullYear()}-${
                                                        months[monthNames[new Date(values.date_started).getMonth()]]
                                                    }-${('0' + new Date(values.date_started).getDate()).slice(-2)}`,
                                                    end: `${new Date(values.date_completed).getFullYear()}-${
                                                        months[monthNames[new Date(values.date_completed).getMonth()]]
                                                    }-${('0' + new Date(values.date_completed).getDate()).slice(-2)}`
                                                })
                                            );
                                            await setModalMessage(
                                                'You have successfully updated this certification. You can go to your dashboard now.'
                                            );
                                            setCertificateStep((step) => step + 2);
                                        }}
                                        validationSchema={Yup.object().shape({
                                            certificate: Yup.string().required('certificate is Required'),
                                            certificate_body: Yup.string().required('certification body is Required'),
                                            date_started: Yup.date().required('Starting Date is Required is Required'),
                                            date_completed: Yup.date().required('Date Completed is Required is Required')
                                        })}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form autoComplete="off">
                                                <Grid container>
                                                    <Grid
                                                        sx={{
                                                            paddingRight: '20px',
                                                            mt: '10px',
                                                            '@media (max-width: 900px)': {
                                                                padding: '0px'
                                                            }
                                                        }}
                                                        item
                                                        xs={12}
                                                        md={6}
                                                    >
                                                        <Textfield name="certificate" helpertext="Certificate" />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px', mt: '10px' }} item xs={12} md={6}>
                                                        <Textfield name="certificate_body" helpertext="Certificate Body" />
                                                    </Grid>
                                                    {/* below */}
                                                    <Grid
                                                        sx={{
                                                            paddingRight: '20px',
                                                            mt: '10px',
                                                            '@media (max-width: 900px)': {
                                                                padding: '0px'
                                                            }
                                                        }}
                                                        item
                                                        xs={12}
                                                        md={6}
                                                    >
                                                        <Datepicker name="date_started" helpertext="Date Started" />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px', mt: '10px' }} item xs={12} md={6}>
                                                        <Datepicker name="date_completed" helpertext="Date Completed" />
                                                    </Grid>

                                                    <Grid xs={12} item>
                                                        <Box sx={{ ...theme.typography.flex }}>
                                                            <DialogActions
                                                                sx={{
                                                                    display: 'flex',
                                                                    gap: '20px',
                                                                    '@media (max-width: 513px)': {
                                                                        gap: '10px'
                                                                    }
                                                                }}
                                                            >
                                                                <Button
                                                                    startIcon={
                                                                        load ? <CircularProgress color="secondary" size="1rem" /> : null
                                                                    }
                                                                    sx={{
                                                                        width: '200px',
                                                                        marginTop: '20px',
                                                                        letterSpacing: '1px',
                                                                        borderRadius: '0px',
                                                                        color: 'rgb(217, 38, 39)',
                                                                        border: '1px solid rgb(217, 38, 39)',
                                                                        textTransform: 'capitalize',
                                                                        '&:hover': {
                                                                            border: '1px solid rgb(217, 38, 39)'
                                                                        },
                                                                        [theme.breakpoints.down('sm')]: {
                                                                            marginTop: '30px'
                                                                        },
                                                                        '@media (max-width: 513px)': {
                                                                            width: '120px'
                                                                        }
                                                                    }}
                                                                    disableElevation
                                                                    variant="outlined"
                                                                    onClick={() => setCertificateStep((step) => step + 1)}
                                                                >
                                                                    Delete
                                                                </Button>
                                                                <Button
                                                                    startIcon={
                                                                        isSubmitting ? (
                                                                            <CircularProgress color="secondary" size="1rem" />
                                                                        ) : null
                                                                    }
                                                                    sx={{
                                                                        width: '200px',
                                                                        marginTop: '20px',
                                                                        letterSpacing: '1px',
                                                                        borderRadius: '0px',
                                                                        color: 'white',
                                                                        textTransform: 'capitalize',
                                                                        '& :hover': {
                                                                            color: 'black'
                                                                        },
                                                                        [theme.breakpoints.down('sm')]: {
                                                                            marginTop: '30px'
                                                                        },
                                                                        '@media (max-width: 513px)': {
                                                                            width: '120px'
                                                                        }
                                                                    }}
                                                                    disableElevation
                                                                    variant="contained"
                                                                    type="submit"
                                                                >
                                                                    Update
                                                                </Button>
                                                            </DialogActions>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Form>
                                        )}
                                    </Formik>
                                </Grid>
                            </Grid>
                            <Warning
                                load={load}
                                onNoClick={() => setCertificateStep((step) => step - 1)}
                                onYesClick={async () => {
                                    await delCertification();
                                    await setModalMessage(
                                        'You have successfully delete this certification. You can go to your dashboard now.'
                                    );
                                    setCertificateStep((step) => step + 1);
                                }}
                                text="Are you sure you want to delete this certificate information from your education list."
                            />
                            <Success
                                onclick={handleCertificate}
                                text="See All Certifications"
                                // to="/recommendations"
                                content={modalMessage}
                                //   content="You have successfully delete this certification. You can go to your dashboard now."
                            />
                        </EducationStepper>
                    ) : (
                        <EducationStepper resumeStep={certificateStep} setResumeStep={setCertificateStep}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Formik
                                        initialValues={{
                                            certificate: '',
                                            certificate_body: '',
                                            date_started: null,
                                            date_completed: null
                                        }}
                                        onSubmit={async (values) => {
                                            console.log(values);
                                            await dispatch(
                                                addCertification({
                                                    // start_month: months[monthNames[values.date_started.getMonth()]],
                                                    //  start_year: values.date_started.getUTCFullYear(),
                                                    //   end_month: months[monthNames[values.date_completed.getMonth()]],
                                                    // end_year: values.date_completed.getUTCFullYear(),
                                                    school: values.certificate_body,
                                                    course: values.certificate,
                                                    class_of_degree: 'j',
                                                    is_current: false,
                                                    start: `${new Date(values.date_started).getFullYear()}-${
                                                        months[monthNames[new Date(values.date_started).getMonth()]]
                                                    }-${('0' + (new Date(values.date_started).getDate() + 1)).slice(-2)}`,
                                                    end: `${new Date(values.date_completed).getFullYear()}-${
                                                        months[monthNames[new Date(values.date_completed).getMonth()]]
                                                    }-${('0' + (new Date(values.date_completed).getDate() + 1)).slice(-2)}`
                                                })
                                            );
                                            setCertificateStep((step) => step + 1);
                                        }}
                                        validationSchema={Yup.object().shape({
                                            certificate: Yup.string().required('certificate is Required'),
                                            certificate_body: Yup.string().required('Certification body is Required'),
                                            date_started: Yup.date().required('Starting Date is Required is Required'),
                                            date_completed: Yup.date().required('Date Completed is Required is Required')
                                        })}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form autoComplete="off">
                                                <Grid container>
                                                    <Grid
                                                        sx={{
                                                            paddingRight: '20px',
                                                            '@media (max-width: 900px)': {
                                                                padding: '0px'
                                                            }
                                                        }}
                                                        item
                                                        xs={12}
                                                        md={6}
                                                    >
                                                        <Textfield name="certificate" helpertext="Certificate" />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px' }} item xs={12} md={6}>
                                                        <Textfield name="certificate_body" helpertext="Certification Body" />
                                                    </Grid>
                                                    {/* below */}
                                                    <Grid
                                                        sx={{
                                                            paddingRight: '20px',
                                                            mt: '10px',

                                                            '@media (max-width: 900px)': {
                                                                padding: '0px'
                                                            }
                                                        }}
                                                        item
                                                        xs={12}
                                                        md={6}
                                                    >
                                                        <Datepicker name="date_started" helpertext="Date Started" />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px', mt: '10px' }} item xs={12} md={6}>
                                                        <Datepicker name="date_completed" helpertext="Date Completed" />
                                                    </Grid>

                                                    <Grid xs={12} item>
                                                        <Box sx={{ ...theme.typography.flex }}>
                                                            <DialogActions>
                                                                <Button
                                                                    startIcon={
                                                                        isSubmitting ? (
                                                                            <CircularProgress color="secondary" size="1rem" />
                                                                        ) : null
                                                                    }
                                                                    sx={{
                                                                        width: '200px',
                                                                        marginTop: '20px',
                                                                        letterSpacing: '1px',
                                                                        borderRadius: '0px',
                                                                        color: 'white',
                                                                        textTransform: 'capitalize',
                                                                        '& :hover': {
                                                                            color: 'black'
                                                                        },
                                                                        [theme.breakpoints.down('sm')]: {
                                                                            marginTop: '30px'
                                                                        }
                                                                    }}
                                                                    disableElevation
                                                                    variant="contained"
                                                                    type="submit"
                                                                >
                                                                    Save
                                                                </Button>
                                                            </DialogActions>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Form>
                                        )}
                                    </Formik>
                                </Grid>
                            </Grid>
                            <Success
                                onclick={handleCertificate}
                                text="See All Certifications"
                                // to="/recommendations"
                                content="You have successfully added a certification
                            information. You can go to your dashboard now."
                            />
                        </EducationStepper>
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default EducationTab;

export function EducationStepper({ children, resumeStep, setResumeStep, ...props }) {
    const childrenArray = React.Children.toArray(children);
    const currentChild = childrenArray[resumeStep];

    return <Box>{currentChild}</Box>;
}
