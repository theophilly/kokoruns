import React from 'react';
<<<<<<< HEAD
import {
    Box,
    Grid,
    Typography,
    Divider,
    Button,
    useTheme,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    CircularProgress,
    useMediaQuery
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { BiEditAlt } from 'react-icons/bi';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Textfield from '../../../components/reusables/FormUI/Textfield';
import Textarea from '../../../components/reusables/FormUI/Textarea';
import Datepicker from '../../../components/reusables/FormUI/Datepicker';
import { makeStyles } from '@mui/styles';
import SubCard from '../../../ui-component/cards/SubCard';
import resumes from '../../../utils/resume';
import { addResume, updateResume, deleteResume } from '../../../store/actions/userDataActions';
import Success from '../../../ui-component/modals/Success';
import Warning from '../../../ui-component/modals/Warning';
=======
import { Box, Grid, Typography, Divider, Button, useTheme } from '@mui/material';
import { BiEditAlt } from 'react-icons/bi';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { makeStyles } from '@mui/styles';
import SubCard from '../../../ui-component/cards/SubCard';
import resume from '../../../utils/resume';
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3

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
    },
    tag: {}
}));

<<<<<<< HEAD
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

const monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

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

=======
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
const Tag = ({ text, index }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                background: theme.palette.primary.main,
                cursor: 'pointer',
                color: 'white',
                padding: '10px 20px',
                width: 'max-content',
                borderRadius: '5px'
            }}
        >
            <Typography>{text}</Typography>
        </Box>
    );
};

<<<<<<< HEAD
const Item = ({ start_year, end_year, title, sub, experience, clicked, setEdit, value = {} }) => {
=======
const Item = ({ year, title, sub, experience }) => {
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
    const theme = useTheme();
    return (
        <Box
            sx={{
                borderRadius: '10px',
                //  border: '1px solid red',
                background: 'white',
                padding: '0 0px 13px',

                '& > :nth-child(2)': {
                    fontSize: '0.8rem',
                    color: theme.palette.primary.main,

                    margin: '5px 0'
                },
                '& > :nth-child(3)': {
                    fontSize: '0.7rem',
                    //  fontWeight: '500',
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
                        fontSize: '0.9rem',
                        color: theme.palette.primary.main
                    },
                    '& :nth-child(2)': {
                        fontSize: '0.9rem',
                        color: theme.palette.primary.main
                    }
                }}
            >
<<<<<<< HEAD
                <Typography>
                    {`${monthShortNames[new Date(start_year).getMonth()]} ${new Date(start_year).getUTCFullYear()} - ${
                        monthShortNames[new Date(end_year).getMonth()]
                    } ${new Date(end_year).getUTCFullYear()}`}{' '}
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
            <Box sx={{ whiteSpace: 'pre-wrap' }}>
                {/* <ul>
                    {experience.map((item) => (
                        <li style={{ fontSize: '0.8rem' }}>{item}</li>
                    ))}
                </ul> */}
                {experience}
=======
                <Typography>{year} </Typography>
                <BiEditAlt />
            </Box>
            <Typography>{title}</Typography>
            <Typography> {sub} </Typography>
            <Box>
                <ul>
                    {experience.map((item) => (
                        <li style={{ fontSize: '0.8rem' }}>{item}</li>
                    ))}
                </ul>
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                    //  padding: '0 10px'
                }}
            >
                <Divider
                    sx={{
<<<<<<< HEAD
                        mt: '15px',
=======
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
                        opacity: 1,
                        borderColor: '#CCCCCC',
                        width: '100%'
                    }}
                />
            </Box>
        </Box>
    );
};

const ResumeTab = () => {
    const { root, lower_button } = useStyles();
<<<<<<< HEAD
    const matches = useMediaQuery('(min-width:900px)');
    const theme = useTheme();
    const { resume } = useSelector((state) => state.authReducer.user);
    const dispatch = useDispatch();
    const [resumeStep, setResumeStep] = React.useState(0);
    const [edit, setEdit] = React.useState({ show: false });
    const [load, setLoad] = React.useState(false);

    // certificate
    const [resumeOpen, setResumeOpen] = React.useState(false);
    const handleResume = () => {
        setResumeOpen(false);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        setEdit((prev) => {
            return { ...prev, show: false };
        });
        setResumeStep(0);
    };

    const delResume = async () => {
        console.log(edit.experience_id);
        await setLoad(true);
        await dispatch(
            deleteResume({
                id: edit.experience_id
            })
        );

        await setLoad(false);
    };
=======
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3

    return (
        <Box className={root}>
            <Grid container>
                <Grid xs={12} item>
                    <SubCard divider={false} sx={{ bgcolor: 'white', boxShadow: 'none', padding: '0 5px' }} title="Job History">
<<<<<<< HEAD
                        {resume.map((item) => (
                            <Item
                                value={item}
                                start_year={item.start}
                                setEdit={setEdit}
                                end_year={item.end}
                                year={item.position}
                                title={item.company_name}
                                sub={item.duration}
                                experience={item.roles}
                                clicked={setResumeOpen}
                            />
                        ))}

                        <Button
                            onClick={() => {
                                setResumeStep(0);
                                setResumeOpen(true);
                            }}
                            className={lower_button}
                            variant="outlined"
                            startIcon={<AddCircleIcon />}
                        >
=======
                        {resume.experience.map((item) => (
                            <Item year={item.title} title={item.company} sub={item.duration} experience={item.experience} />
                        ))}

                        <Button className={lower_button} variant="outlined" startIcon={<AddCircleIcon />}>
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
                            Add Job to Resume
                        </Button>
                    </SubCard>
                </Grid>
            </Grid>
            {/* skills */}
            <Grid container>
                <Grid xs={12} item>
                    <SubCard divider={false} sx={{ bgcolor: 'white', boxShadow: 'none', padding: '0 5px', mt: '25px' }} title="Skills">
                        <Box sx={{ display: 'flex', height: 'auto', flexWrap: 'wrap', gap: '10px' }}>
<<<<<<< HEAD
                            {resumes.skills.map((item) => (
=======
                            {resume.skills.map((item) => (
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
                                <Tag text={item} />
                            ))}
                        </Box>

                        <Button className={lower_button} variant="outlined" startIcon={<AddCircleIcon />}>
                            Add Skils
                        </Button>
                    </SubCard>
                </Grid>
            </Grid>
<<<<<<< HEAD

            {/* certificate dialog */}
            <Dialog
                open={resumeOpen}
                onClose={handleResume}
                //   scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Professional Information</DialogTitle>
                <DialogContent
                //  dividers={scroll === 'paper'}
                >
                    {edit.show ? (
                        // update

                        <ResumeStepper resumeStep={resumeStep} setResumeStep={setResumeStep}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Formik
                                        initialValues={{
                                            role: edit?.position,
                                            name_of_company: edit?.company_name,
                                            date_started: edit?.start,
                                            date_completed: edit?.end,
                                            responsibilities: edit?.roles
                                        }}
                                        onSubmit={async (values) => {
                                            console.log(values);
                                            await dispatch(
                                                updateResume(edit.experience_id, {
                                                    start: `${new Date(values.date_started).getFullYear()}-${
                                                        months[monthNames[new Date(values.date_started).getMonth()]]
                                                    }-${('0' + (new Date(values.date_started).getDate() + 1)).slice(-2)}`,
                                                    end: `${new Date(values.date_completed).getFullYear()}-${
                                                        months[monthNames[new Date(values.date_completed).getMonth()]]
                                                    }-${('0' + (new Date(values.date_completed).getDate() + 1)).slice(-2)}`,
                                                    company_name: values.name_of_company,
                                                    role: values.role,
                                                    decription: values.responsibilities,
                                                    responsibities: values.responsibilities,
                                                    is_current: false
                                                })
                                            );

                                            setResumeStep((step) => step + 2);
                                        }}
                                        validationSchema={Yup.object().shape({
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
                                                        <Textfield name="role" helpertext="Role" />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px' }} item xs={12} md={6}>
                                                        <Textfield name="name_of_company" helpertext="Name of Company" />
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
                                                    <Grid mt="10px" xs={12}>
                                                        <Textarea num_of_rows={5} name="responsibilities" helpertext="Responsibilities" />
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
                                                                    onClick={() => setResumeStep((step) => step + 1)}
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
                                onNoClick={() => setResumeStep((step) => step - 1)}
                                onYesClick={async () => {
                                    delResume();
                                    setResumeStep((step) => step + 1);
                                }}
                                text="Are you sure you want to delete this job experience from your experience list."
                            />
                            <Success
                                onclick={handleResume}
                                text="Go to Job History"
                                // to="/recommendations"
                                content="You have successfully updated this resume information. You can go to your dashboard now"
                            />
                        </ResumeStepper>
                    ) : (
                        <ResumeStepper resumeStep={resumeStep} setResumeStep={setResumeStep}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Formik
                                        initialValues={{
                                            role: '',
                                            name_of_company: '',
                                            date_started: null,
                                            date_completed: null,
                                            responsibilities: ''
                                        }}
                                        onSubmit={async (values) => {
                                            console.log(values);
                                            await dispatch(
                                                addResume({
                                                    start: `${new Date(values.date_started).getFullYear()}-${
                                                        months[monthNames[new Date(values.date_started).getMonth()]]
                                                    }-${('0' + (new Date(values.date_started).getDate() + 1)).slice(-2)}`,
                                                    end: `${new Date(values.date_completed).getFullYear()}-${
                                                        months[monthNames[new Date(values.date_completed).getMonth()]]
                                                    }-${('0' + (new Date(values.date_completed).getDate() + 1)).slice(-2)}`,
                                                    company_name: values.name_of_company,
                                                    role: values.role,
                                                    decription: values.responsibilities,
                                                    responsibities: values.responsibilities,
                                                    is_current: false
                                                })
                                            );

                                            setResumeStep((step) => step + 1);
                                        }}
                                        validationSchema={Yup.object().shape({
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
                                                            name="role"
                                                            helpertext="Role"
                                                        />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px' }} item xs={12} md={6}>
                                                        <Textfield
                                                            //  disabled={!!user.lastName}
                                                            name="name_of_company"
                                                            helpertext="Name of Company"
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
                                                    <Grid mt="10px" xs={12}>
                                                        <Textarea num_of_rows={5} name="responsibilities" helpertext="Responsibilities" />
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
                                onclick={handleResume}
                                text="Go to Job History"
                                // to="/recommendations"
                                content="You have successfully added a professional
                            information. You can go to your dashboard now"
                            />
                        </ResumeStepper>
                    )}
                </DialogContent>
            </Dialog>
=======
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
        </Box>
    );
};

export default ResumeTab;
<<<<<<< HEAD

export function ResumeStepper({ children, resumeStep, setResumeStep, ...props }) {
    const childrenArray = React.Children.toArray(children);
    const currentChild = childrenArray[resumeStep];

    return <Box>{currentChild}</Box>;
}
=======
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
