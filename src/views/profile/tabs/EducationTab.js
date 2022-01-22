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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import education from '../../../utils/education';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Textfield from '../../../components/reusables/FormUI/Textfield';
import Textarea from '../../../components/reusables/FormUI/Textarea';
import Datepicker from '../../../components/reusables/FormUI/Datepicker';
import { fecthEducations, addEducation } from '../../../store/actions/userDataActions';

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

const Item = ({ year, title, sub, clicked, startYear }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                borderRadius: '10px',
                //  border: '1px solid red',
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
                <BiEditAlt onClick={() => clicked(true)} />
            </Box>
            <Typography>{title}</Typography>
            <Typography> {sub} </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                    //  padding: '0 10px'
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
    const { educations } = useSelector((state) => state.userDataReducer);
    React.useEffect(() => {
        (async function () {
            await dispatch(fecthEducations());
        })();
    }, []);

    const { root, lower_button } = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const matches = useMediaQuery('(min-width:900px)');

    console.log(educations);

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    // certificate
    const [certificateOpen, setCertificateOpen] = React.useState(false);
    const handleCertificate = () => {
        setCertificateOpen(false);
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
                                <Item clicked={setOpen} year={new Date(item.end).getUTCFullYear()} title={item.course} sub={item.school} />
                            ))}

                        <Button onClick={() => setOpen(true)} className={lower_button} variant="outlined" startIcon={<AddCircleIcon />}>
                            Add Education
                        </Button>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} item>
                    <Box bgcolor="white" padding="20px 0" borderRadius="5px">
                        {education.certification.map((item) => (
                            <Item clicked={setCertificateOpen} year={item.duration} title={item.certificate} sub={item.platform} />
                        ))}

                        <Button
                            onClick={() => setCertificateOpen(true)}
                            className={lower_button}
                            variant="outlined"
                            startIcon={<AddCircleIcon />}
                        >
                            Add Certification
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <Dialog
                open={open}
                onClose={handleClose}
                //   scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Educational Information</DialogTitle>
                <DialogContent
                //  dividers={scroll === 'paper'}
                >
                    <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
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
                                        console.log(values);
                                        await dispatch(
                                            addEducation({
                                                //  start_month: values.date_started.getUTCMonth() + 1,
                                                start_month: months[monthNames[values.date_started.getMonth()]],
                                                start_year: values.date_started.getUTCFullYear(),
                                                end_month: months[monthNames[values.date_completed.getMonth()]],
                                                // end_month: values.date_completed.getUTCMonth() + 1,
                                                end_year: values.date_completed.getUTCFullYear(),
                                                school: values.name_of_institution,
                                                course: values.degree
                                                //  skills: '[ {"skill_name": "Psychology"}, {"skill_name": "Human Relations"}]',
                                                // class_of_degree: 'Imo'
                                            })
                                        );
                                        //  if (!window.store.getState().authReducer.authenticated) {
                                        //    await setClickData({
                                        //      type: 'error',
                                        //      content: window.store.getState().authReducer.error,
                                        //    });
                                        //    showToast();
                                        //  }
                                        //   await sleep(3000);
                                        // navigate('/profile-setup');
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
                                                    <Textfield
                                                        //  disabled={!!user.firstName}
                                                        name="degree"
                                                        helpertext="Degree"
                                                    />
                                                </Grid>
                                                <Grid sx={{ paddingLeft: matches ? '20px' : '0px', mt: '10px' }} item xs={12} md={6}>
                                                    <Textfield
                                                        //  disabled={!!user.lastName}
                                                        name="name_of_institution"
                                                        helpertext="Name of Insitution"
                                                    />
                                                </Grid>
                                                {/* below */}
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
                                                    <Datepicker name="date_started" helpertext="Date Started" />
                                                </Grid>
                                                <Grid sx={{ paddingLeft: matches ? '20px' : '0px' }} item xs={12} md={6}>
                                                    <Datepicker name="date_completed" helpertext="Date Completed" />
                                                </Grid>

                                                <Grid xs={12} item>
                                                    <Box sx={{ ...theme.typography.flex }}>
                                                        <DialogActions>
                                                            <Button
                                                                startIcon={
                                                                    isSubmitting ? <CircularProgress color="secondary" size="1rem" /> : null
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
                    </DialogContentText>
                </DialogContent>
            </Dialog>

            {/* certificate dialog */}
            <Dialog
                open={certificateOpen}
                onClose={handleCertificate}
                //   scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Certification Information</DialogTitle>
                <DialogContent
                //  dividers={scroll === 'paper'}
                >
                    <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
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
                                        console.log(values);
                                        // await dispatch(login(values));
                                        // if (!window.store.getState().authReducer.authenticated) {
                                        //   await setClickData({
                                        //     type: 'error',
                                        //     content: window.store.getState().authReducer.error,
                                        //   });
                                        //   showToast();
                                        // }
                                        //  await sleep(3000);
                                        //navigate('/profile-setup');
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
                                                        '@media (max-width: 900px)': {
                                                            padding: '0px'
                                                        }
                                                    }}
                                                    item
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <Textfield
                                                        //  disabled={!!user.firstName}
                                                        name="degree"
                                                        helpertext="Degree"
                                                    />
                                                </Grid>
                                                <Grid sx={{ paddingLeft: matches ? '20px' : '0px' }} item xs={12} md={6}>
                                                    <Textfield
                                                        //  disabled={!!user.lastName}
                                                        name="name_of_institution"
                                                        helpertext="Name of Insitution"
                                                    />
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
                                                                    isSubmitting ? <CircularProgress color="secondary" size="1rem" /> : null
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
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default EducationTab;
