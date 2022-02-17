import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Divider,
    Button,
    useTheme,
    Dialog,
    DialogActions,
    DialogContent,
    CircularProgress,
    useMediaQuery
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { BiEditAlt } from 'react-icons/bi';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import Textfield from '../../../components/reusables/FormUI/Textfield';
import Textarea from '../../../components/reusables/FormUI/Textarea';
import Datepicker from '../../../components/reusables/FormUI/Datepicker';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import SubCard from '../../../ui-component/cards/SubCard';
import { addResume, updateResume, deleteResume, addOther, addPro } from '../../../store/actions/userDataActions';
import Success from '../../../ui-component/modals/Success';
import Warning from '../../../ui-component/modals/Warning';
import CheckboxWrapper from '../../../components/reusables/FormUI/CheckBoxWrapper';

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

const NTag = ({ link_address, link_title, setEdit, value = {}, clicked }) => {
    const theme = useTheme();

    return (
        <Box
            component="a"
            href={link_address}
            target="_blank"
            sx={{
                background: theme.palette.primary.main,
                cursor: 'pointer',
                color: 'white',
                padding: '10px 20px',
                width: 'max-content',
                borderRadius: '5px',
                textDecoration: 'none',
                position: 'relative'
            }}
        >
            <Typography>{link_title}</Typography>
            <Box sx={{ position: 'absolute', top: 1, right: 5 }}>
                <BiEditAlt
                    onClick={async () => {
                        await setEdit(() => {
                            return { ...value, show: true };
                        });
                        clicked(true);
                    }}
                />
            </Box>
        </Box>
    );
};

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

const Item = ({ is_current, start_year, end_year, title, sub, experience, clicked, setEdit, value = {} }) => {
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
                <Typography>
                    {`${monthShortNames[new Date(start_year).getMonth()]} ${new Date(start_year).getUTCFullYear()} - `}{' '}
                    {is_current ? 'Present' : `${monthShortNames[new Date(end_year).getMonth()]} ${new Date(end_year).getUTCFullYear()}`}
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
                        mt: '15px',
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
    const matches = useMediaQuery('(min-width:900px)');
    const theme = useTheme();
    const { resume, otherskills, proskills } = useSelector((state) => state.authReducer.user);
    const dispatch = useDispatch();
    const [resumeStep, setResumeStep] = React.useState(0);
    const [edit, setEdit] = React.useState({ show: false });
    const [load, setLoad] = React.useState(false);
    const [checkIsCurrent, setCheckIsCurrent] = React.useState(false);

    // social
    const [proOpen, setProOpen] = React.useState(false);
    const [otherOpen, setOtherOpen] = React.useState(false);
    const handlePro = () => {
        setProOpen(false);
        setResumeStep(0);
        setEdit((prev) => {
            return { ...prev, show: false };
        });
    };

    const delPro = async () => {
        await setLoad(true);
        await dispatch();
        // deleteSocial({
        //     id: edit.online_link_id
        // })
        await setLoad(false);
    };
    const handleOther = () => {
        setOtherOpen(false);
        setResumeStep(0);
        setEdit((prev) => {
            return { ...prev, show: false };
        });
    };

    const delOther = async () => {
        await setLoad(true);
        await dispatch();
        // deleteSocial({
        //     id: edit.online_link_id
        // })
        await setLoad(false);
    };

    const EndDate = () => {
        const [field, meta] = useField('is_current');
        setCheckIsCurrent(meta.value);

        return (
            <Grid sx={{ paddingLeft: matches ? '20px' : '0px', mt: '10px' }} item xs={12} md={6}>
                <Datepicker disabled={meta.value} name="date_completed" helpertext="Date Completed" />
            </Grid>
        );
    };
    const ValidateEndDate = () => {
        if (checkIsCurrent === true) {
            return '';
        } else {
            return Yup.date().required('Date Completed is Required');
        }
    };

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

    return (
        <Box className={root}>
            <Grid container>
                <Grid xs={12} item>
                    <SubCard divider={false} sx={{ bgcolor: 'white', boxShadow: 'none', padding: '0 5px' }} title="Job History">
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
                                is_current={item.is_current}
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
                            Add Job to Resume
                        </Button>
                    </SubCard>
                </Grid>
            </Grid>
            {/* Profesional skills */}
            <Grid container>
                <Grid xs={12} item>
                    <SubCard
                        divider={false}
                        sx={{ bgcolor: 'white', boxShadow: 'none', padding: '0 5px', mt: '25px' }}
                        title="Professional Skills"
                    >
                        <Box sx={{ display: 'flex', height: 'auto', flexWrap: 'wrap', gap: '10px' }}>
                            {proskills.map((item) => (
                                <Tag text={item.pro_skill} />
                            ))}
                        </Box>

                        <Button
                            onClick={() => {
                                setResumeStep(0);
                                setProOpen(true);
                            }}
                            className={lower_button}
                            variant="outlined"
                            startIcon={<AddCircleIcon />}
                        >
                            Add Pro Skills
                        </Button>
                    </SubCard>
                </Grid>
            </Grid>

            {/*Other skills */}
            <Grid container>
                <Grid xs={12} item>
                    <SubCard
                        divider={false}
                        sx={{ bgcolor: 'white', boxShadow: 'none', padding: '0 5px', mt: '25px' }}
                        title="Other Skills"
                    >
                        <Box sx={{ display: 'flex', height: 'auto', flexWrap: 'wrap', gap: '10px' }}>
                            {otherskills.map((item) => (
                                <Tag text={item.other_skill} />
                            ))}
                        </Box>

                        <Button
                            onClick={() => {
                                setResumeStep(0);
                                setOtherOpen(true);
                            }}
                            className={lower_button}
                            variant="outlined"
                            startIcon={<AddCircleIcon />}
                        >
                            Add Other Skills
                        </Button>
                    </SubCard>
                </Grid>
            </Grid>

            {/* certificate dialog */}
            <Dialog
                open={resumeOpen}
                onClose={handleResume}
                //   scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogContent
                //  dividers={scroll === 'paper'}
                >
                    <Grid container>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: '1.2rem' }}>Professional Information</Typography>
                                <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleResume} />
                            </Box>
                        </Grid>
                    </Grid>
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
                                            responsibilities: edit?.roles,
                                            is_current: !!edit?.is_current
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
                                                    is_current: values.is_current
                                                })
                                            );

                                            setResumeStep((step) => step + 2);
                                        }}
                                        validationSchema={Yup.object().shape({
                                            date_started: Yup.date().required('Starting Date is Required'),
                                            date_completed: Yup.date().required('Date Completed is Required'),
                                            role: Yup.string().required('role is Required'),
                                            name_of_company: Yup.string().required('name of company is Required'),
                                            responsibilities: Yup.string().required('responsibilities is Required')
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
                                                    <Grid mt="10px" mb="0px" item xs={12}>
                                                        <CheckboxWrapper name="is_current" label="still work here" />
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

                                                    <EndDate />

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
                                            responsibilities: '',
                                            is_current: null
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
                                                    is_current: values.is_current
                                                })
                                            );

                                            setResumeStep((step) => step + 1);
                                        }}
                                        validationSchema={Yup.object().shape({
                                            date_started: Yup.date().required('Starting Date is Required'),
                                            date_completed: ValidateEndDate(),
                                            role: Yup.string().required('role is Required'),
                                            name_of_company: Yup.string().required('name of company is Required'),
                                            responsibilities: Yup.string().required('responsibilities is Required')
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
                                                    <Grid mt="10px" mb="0px" item xs={12}>
                                                        <CheckboxWrapper name="is_current" label="still work here" />
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
                                                    <EndDate />
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

            {/* pro skill dialog */}
            <Dialog open={proOpen} onClose={handlePro} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
                <DialogContent>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: '1.2rem' }}>Add Pro Skill</Typography>
                                <CloseIcon sx={{ cursor: 'pointer' }} onClick={handlePro} />
                            </Box>
                        </Grid>
                    </Grid>

                    {edit.show ? (
                        // update

                        <ResumeStepper resumeStep={resumeStep} setResumeStep={setResumeStep}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Formik
                                        initialValues={{
                                            social: edit.link_title,
                                            social_link: edit.link_address
                                        }}
                                        onSubmit={async (values) => {
                                            console.log(values);

                                            await dispatch();
                                            // updateSocial(edit.online_link_id, {
                                            //     link_title: values.social,
                                            //     link_address: values.social_link
                                            // })

                                            setResumeStep((step) => step + 2);
                                        }}
                                        validationSchema={Yup.object().shape({
                                            social: Yup.string().required('Name of social is Required'),
                                            social_link: Yup.string()
                                                .matches(
                                                    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                                                    'Enter correct url!'
                                                )
                                                .required('Please valid social media link(url)')
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
                                                        <Textfield name="social" helpertext="Social Media" placeholder="Facebook" />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px' }} item xs={12} md={6}>
                                                        <Textfield name="social_link" helpertext="Link" />
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
                                    delPro();
                                    setResumeStep((step) => step + 1);
                                }}
                                text="Are you sure you want to delete this social link?"
                            />
                            <Success
                                onclick={handlePro}
                                text="See All social Links"
                                // to="/recommendations"
                                content="You have successfully added a social link
                            You can go to your dashboard now."
                            />
                        </ResumeStepper>
                    ) : (
                        <ResumeStepper resumeStep={resumeStep} setResumeStep={setResumeStep}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Formik
                                        initialValues={{
                                            pro_skill: ''
                                        }}
                                        onSubmit={async (values) => {
                                            console.log(values);

                                            await dispatch(addPro(values));

                                            setResumeStep((step) => step + 1);
                                        }}
                                        validationSchema={Yup.object().shape({
                                            pro_skill: Yup.string().required('Name of Skill is Required')
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
                                                        //    md={6}
                                                    >
                                                        <Textfield name="pro_skill" helpertext="Name of Skill" placeholder="" />
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
                                onclick={handlePro}
                                text="See All social Links"
                                // to="/recommendations"
                                content="You have successfully added a social link
                            You can go to your dashboard now."
                            />
                        </ResumeStepper>
                    )}
                </DialogContent>
            </Dialog>

            {/* social other skill */}
            <Dialog
                open={otherOpen}
                onClose={handleOther}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogContent>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: '1.2rem' }}>Add Other Skills</Typography>
                                <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleOther} />
                            </Box>
                        </Grid>
                    </Grid>

                    {edit.show ? (
                        // update

                        <ResumeStepper resumeStep={resumeStep} setResumeStep={setResumeStep}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Formik
                                        initialValues={{
                                            social: edit.link_title,
                                            social_link: edit.link_address
                                        }}
                                        onSubmit={async (values) => {
                                            console.log(values);

                                            await dispatch();
                                            // updateSocial(edit.online_link_id, {
                                            //     link_title: values.social,
                                            //     link_address: values.social_link
                                            // })

                                            setResumeStep((step) => step + 2);
                                        }}
                                        validationSchema={Yup.object().shape({
                                            social: Yup.string().required('Name of social is Required'),
                                            social_link: Yup.string()
                                                .matches(
                                                    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                                                    'Enter correct url!'
                                                )
                                                .required('Please valid social media link(url)')
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
                                                        <Textfield name="social" helpertext="Social Media" placeholder="Facebook" />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px' }} item xs={12} md={6}>
                                                        <Textfield name="social_link" helpertext="Link" />
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
                                    delOther();
                                    setResumeStep((step) => step + 1);
                                }}
                                text="Are you sure you want to delete this social link?"
                            />
                            <Success
                                onclick={handleOther}
                                text="See All social Links"
                                // to="/recommendations"
                                content="You have successfully added a social link
                            You can go to your dashboard now."
                            />
                        </ResumeStepper>
                    ) : (
                        <ResumeStepper resumeStep={resumeStep} setResumeStep={setResumeStep}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Formik
                                        initialValues={{
                                            other_skill: ''
                                        }}
                                        onSubmit={async (values) => {
                                            console.log(values);

                                            await dispatch(addOther(values));

                                            setResumeStep((step) => step + 1);
                                        }}
                                        validationSchema={Yup.object().shape({
                                            other_skill: Yup.string().required('Name of Other skill is Required')
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
                                                    >
                                                        <Textfield name="other_skill" helpertext="Name of Other Skill is required" />
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
                                onclick={handleOther}
                                text="See All social Links"
                                // to="/recommendations"
                                content="You have successfully added a social link
                            You can go to your dashboard now."
                            />
                        </ResumeStepper>
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default ResumeTab;

export function ResumeStepper({ children, resumeStep, setResumeStep, ...props }) {
    const childrenArray = React.Children.toArray(children);
    const currentChild = childrenArray[resumeStep];

    return <Box>{currentChild}</Box>;
}
