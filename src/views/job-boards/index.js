import React, { useState, useRef } from 'react';
import {
    Box,
    Grid,
    Avatar,
    Typography,
    useTheme,
    Button,
    Select,
    FormControl,
    OutlinedInput,
    MenuItem,
    InputBase,
    Paper,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    Divider,
    CircularProgress,
    FormControlLabel,
    FormGroup,
    Checkbox
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import SubCard from '../../ui-component/cards/SubCard';
import MainCard from '../../ui-component/cards/MainCard';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Jobboarditems from './Jobboarditems';
import PlaceIcon from '@mui/icons-material/Place';
import WorkIcon from '@mui/icons-material/Work';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import { Link } from 'react-router-dom';
import Textfield from '../../components/reusables/FormUI/Textfield';
import Textarea from '../../components/reusables/FormUI/Textarea';
import CheckboxWrapper from '../../components/reusables/FormUI/CheckBoxWrapper';
import ResumeUpload from '../../components/reusables/forms/ResumeUpload';

export function Tes() {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21.0692 12.5649C20.869 12.1449 20.5375 11.4495 20.5315 11.2195C21.1025 9.81208 20.8942 8.25462 19.9431 6.82996C18.4806 4.63891 15.483 3.04858 12.8157 3.04858C11.4058 3.04858 10.029 3.38481 8.7903 4.02665C8.43493 2.07954 6.72732 0.598541 4.67918 0.598541C2.37421 0.598541 0.499023 2.47373 0.499023 4.77865C0.499023 6.2451 1.24638 7.57845 2.49804 8.34529C2.85888 8.56638 2.94052 8.75749 2.96952 9.07063V10.7378V11.9278C2.96952 12.4731 3.41298 12.9166 3.95804 12.9166H4.12406C4.39227 15.0541 5.42674 16.9948 7.06882 18.4228C7.0843 18.4711 7.12947 18.6972 6.93542 19.3719C6.7843 19.8974 6.55237 20.4813 6.34783 20.9964C6.21091 21.3411 6.09265 21.6388 6.02117 21.8639C5.97405 22.0123 6.00052 22.1743 6.09246 22.3C6.18445 22.4257 6.33084 22.5 6.48655 22.5H13.4565C13.6855 22.5 14 22.3975 14.198 21.909C14.2842 21.6964 14.3405 21.4406 14.4001 21.1697C14.4581 20.9059 14.5941 20.2879 14.7294 20.2132C14.7295 20.2132 14.7374 20.2119 14.7565 20.2148C14.7815 20.2188 14.8069 20.2207 14.8323 20.2207C15.5622 20.2207 16.1586 20.2538 16.6848 20.283C18.2282 20.3686 19.1599 20.4203 19.9771 19.2432C20.3927 18.6445 20.3456 17.7713 20.2958 16.8468C20.2701 16.3704 20.2436 15.8786 20.2906 15.4697C20.3758 15.3858 20.5892 15.2393 20.723 15.1475C21.1833 14.8313 21.618 14.5328 21.618 14.079C21.6182 13.734 21.4095 13.2789 21.0692 12.5649ZM3.00829 7.51248C2.04858 6.92459 1.47563 5.90262 1.47563 4.7786C1.47563 3.01211 2.91278 1.57505 4.67923 1.57505C6.44573 1.57505 7.88283 3.01215 7.88283 4.7786C7.88283 5.90262 7.30993 6.92464 6.35017 7.51258C5.89407 7.79212 5.62298 8.11814 5.49432 8.55867L4.67909 8.55837L3.86424 8.55867C3.73549 8.11819 3.46444 7.79212 3.00829 7.51248ZM5.41238 9.53532V10.2494H3.94618V9.53532H5.41238V9.53532ZM3.95814 11.94C3.95272 11.94 3.94618 11.9333 3.94618 11.9278V11.226H5.41238V11.9278C5.41238 11.9333 5.40579 11.94 5.40027 11.94H3.95814ZM20.1703 14.3423C19.7501 14.631 19.3871 14.8802 19.3336 15.2574C19.26 15.7748 19.2909 16.3465 19.3207 16.8993C19.3577 17.5852 19.3996 18.3626 19.175 18.6862C18.6891 19.3861 18.2689 19.3929 16.739 19.3079C16.2342 19.2799 15.6079 19.2451 14.8652 19.2441C14.58 19.2105 14.0975 19.264 13.7754 19.89C13.6119 20.2079 13.524 20.6073 13.4464 20.9597C13.4075 21.1368 13.3527 21.3857 13.3015 21.5234H7.18948C7.21086 21.4694 7.23293 21.4138 7.25559 21.3568C7.959 19.5856 8.40451 18.2866 7.72639 17.7004C6.28909 16.4573 5.37249 14.774 5.10965 12.9166H5.40032C5.94549 12.9166 6.38899 12.473 6.38899 11.9278V10.7377V9.07155C6.41795 8.75783 6.49934 8.56658 6.86047 8.34524C8.01628 7.63714 8.74147 6.44588 8.84587 5.11293C10.0443 4.40077 11.4113 4.02509 12.8158 4.02509C15.1423 4.02509 17.8573 5.464 19.131 7.3721C19.6769 8.18987 20.2042 9.46208 19.6159 10.8786C19.4243 11.3399 19.7084 11.9796 20.1877 12.9851C20.3428 13.3106 20.5675 13.7817 20.6269 14.0019C20.526 14.0981 20.3091 14.247 20.1703 14.3423Z"
                fill="#262626"
            />
        </svg>
    );
}
export function BookmarkIcon() {
    return (
        <svg width="19" height="18" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.6665 0H3.33317C1.8665 0 0.666504 1.2 0.666504 2.66667V24L9.99984 20L19.3332 24V2.66667C19.3332 1.2 18.1332 0 16.6665 0Z"
                fill="white"
            />
        </svg>
    );
}
export function LikeIcon() {
    return (
        <svg width="23" height="20" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18.9997 0H6.99967C5.89301 0 4.94634 0.666666 4.54634 1.62667L0.519674 11.0267C0.399674 11.3333 0.333008 11.6533 0.333008 12V14.6667C0.333008 16.1333 1.53301 17.3333 2.99967 17.3333H11.413L10.1463 23.4267L10.1063 23.8533C10.1063 24.4 10.333 24.9067 10.693 25.2667L12.1063 26.6667L20.893 17.88C21.373 17.4 21.6663 16.7333 21.6663 16V2.66667C21.6663 1.2 20.4663 0 18.9997 0ZM24.333 0H29.6663V16H24.333V0Z"
                fill="#D92627"
            />
        </svg>
    );
}
export function LikeIconActive() {
    return (
        <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18.9997 0H6.99967C5.89301 0 4.94634 0.666666 4.54634 1.62667L0.519674 11.0267C0.399674 11.3333 0.333008 11.6533 0.333008 12V14.6667C0.333008 16.1333 1.53301 17.3333 2.99967 17.3333H11.413L10.1463 23.4267L10.1063 23.8533C10.1063 24.4 10.333 24.9067 10.693 25.2667L12.1063 26.6667L20.893 17.88C21.373 17.4 21.6663 16.7333 21.6663 16V2.66667C21.6663 1.2 20.4663 0 18.9997 0ZM24.333 0H29.6663V16H24.333V0Z"
                fill="white"
            />
        </svg>
    );
}

const IconBox = ({ icon, text }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                '@media (max-width: 552px)': {
                    mr: '12px'
                }
            }}
        >
            {icon}
            <Typography
                sx={{
                    color: '#C4C4C4',
                    ml: '10px',
                    fontSize: '0.9rem',
                    '@media (max-width: 552px)': {
                        ml: '3px'
                    }
                }}
            >
                {text}
            </Typography>
        </Box>
    );
};

const Jobboard = () => {
    const theme = useTheme();
    const filesharhe_ref = useRef();
    const [step, setStep] = useState(0);
    const matchDownMd = useMediaQuery('(min-width:600px)');
    const [message, setMessage] = React.useState(false);
    const matches = useMediaQuery('(min-width:900px)');

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleMessageClose = () => {
        setMessage(false);
    };
    const handleClickOpen = () => {
        setMessage(true);
        //setScroll(scrollType);
    };

    return (
        <Box
            sx={{
                width: '100%',
                padding: '10px',
                [theme.breakpoints.down('sm')]: {
                    padding: '10px 0'
                }
            }}
        >
            <Grid container>
                <Grid xs={12} item>
                    <Box sx={{ display: 'flex' }}>
                        <Button
                            disableElevation
                            sx={{ textTransform: 'capitalize', borderRadius: '0px', height: '39px' }}
                            variant="contained"
                        >
                            All
                        </Button>

                        <Box
                            sx={{
                                padding: '0 5px',
                                background: 'white',
                                height: '39px',
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: '15px',
                                border: '1px solid #C4C4C4',
                                '&:hover': {
                                    border: '1px solid  rgba(0, 0, 0, 0.87)'
                                }
                            }}
                        >
                            <InputBase
                                placeholder="Search “UI/UX Jobs”"
                                sx={{
                                    height: '30px',
                                    width: '100%',
                                    background: 'white'
                                }}
                            />
                            <Avatar sx={{ bgcolor: theme.palette.primary.main, height: '30px', width: '30px' }} variant="square">
                                <SearchIcon fontSize="small" />
                            </Avatar>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} item>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '20px',
                            marginTop: '15px',
                            [theme.breakpoints.down('sm')]: {
                                justifyContent: 'center',
                                mt: '20px'
                            }
                        }}
                    >
                        <Jobboarditems
                            onclick={() => {
                                setStep(() => 0);
                                handleClickOpen();
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>

            <Dialog
                open={message}
                onClose={handleMessageClose}
                scroll={'body'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                {/* <DialogTitle id="scroll-dialog-title">Message</DialogTitle> */}
                <Stepper step={step} setStep={setStep}>
                    <>
                        <DialogContent
                        // dividers={scroll === 'paper'}
                        >
                            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Box sx={{ ...theme.typography.column, alignItems: 'center' }}>
                                            <Box
                                                src="dash.jpg"
                                                component="img"
                                                sx={{ height: '150px', width: '180px', borderRadius: '5px' }}
                                            />
                                            <Typography
                                                sx={{
                                                    ...theme.typography.title3,
                                                    color: theme.palette.textColor,
                                                    lineHeight: '28px',
                                                    margin: '13px 0'
                                                }}
                                            >
                                                UI/UX Designer,
                                                <br /> Kokoruns Ltd
                                            </Typography>
                                            <Box
                                                sx={{
                                                    //  marginTop: '7px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <IconBox
                                                    text="Lagos, Nigeria"
                                                    icon={<PlaceIcon fontSize="small" sx={{ color: theme.palette.text }} />}
                                                />
                                                <Box sx={{ margin: '5px 0' }}>
                                                    <IconBox
                                                        text="2yrs Experience"
                                                        icon={<WorkIcon fontSize="small" sx={{ color: theme.palette.text }} />}
                                                    />
                                                </Box>
                                                <IconBox
                                                    text="N250,000"
                                                    icon={<CreditCardIcon fontSize="small" sx={{ color: theme.palette.text }} />}
                                                />
                                            </Box>
                                            <Divider
                                                sx={{
                                                    opacity: 1,
                                                    borderColor: theme.palette.textColor,
                                                    width: '80%',
                                                    margin: '10px 0px'
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box>
                                            <Typography sx={{ fontWeight: '600', color: theme.palette.textColor }}>Job Brief</Typography>
                                            <Typography>
                                                We are currently hiring a passionate, user centered UI/UX Designer to join a collaborative
                                                and innovative team to create visually delightful and easy-to-use digital products in a
                                                fast-paced environment.
                                            </Typography>
                                            <Box sx={{ ...theme.typography.flex }}>
                                                <Divider
                                                    sx={{
                                                        opacity: 1,
                                                        borderColor: theme.palette.textColor,
                                                        width: '80%',
                                                        margin: '10px 0px'
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box>
                                            <Typography sx={{ fontWeight: '600', color: theme.palette.textColor }}>
                                                Main Responsibilities
                                            </Typography>
                                            <Typography>
                                                Your responsibilities will include: Creating user-centered designs by understanding business
                                                requirements, and user feedback Creating user flows, wireframes, prototypes and mockups
                                                Translating requirements into style guides, design systems, design patterns and attractive
                                                user interfaces Designing UI elements such as input controls, navigational components and
                                                informational components Incorporating customer feedback, usage metrics, and usability
                                                findings into design in order to enhance user experience
                                            </Typography>
                                            <Box sx={{ ...theme.typography.flex }}>
                                                <Divider
                                                    sx={{
                                                        opacity: 1,
                                                        borderColor: theme.palette.textColor,
                                                        width: '80%',
                                                        margin: '10px 0px'
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box>
                                            <Typography sx={{ fontWeight: '600', color: theme.palette.textColor }}>
                                                Key Requirements
                                            </Typography>
                                            <Typography>
                                                Your responsibilities will include: Creating user-centered designs by understanding business
                                                requirements, and user feedback Creating user flows, wireframes, prototypes and mockups
                                                Translating requirements into style guides, design systems, design patterns and attractive
                                                user interfaces Designing UI elements such as input controls, navigational components and
                                                informational components Incorporating customer feedback, usage metrics, and usability
                                                findings into design in order to enhance user experience
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Box
                                disableElevation
                                sx={{
                                    ...theme.typography.flex,
                                    width: '100%',
                                    justifyContent: 'flex-end',
                                    gap: '10px'
                                }}
                            >
                                <Button
                                    sx={{ padding: '8px 50px', textTransform: 'capitalize' }}
                                    variant="contained"
                                    // onClick={handleMessageClose}
                                    onClick={() => setStep(step + 1)}
                                >
                                    Apply for Job
                                </Button>
                                <Avatar sx={{ bgcolor: '#3DA8FF', cursor: 'pointer' }} variant="rounded">
                                    <BookmarkIcon />
                                </Avatar>
                                <Avatar sx={{ bgcolor: 'white', border: '1px solid red', cursor: 'pointer' }} variant="rounded">
                                    <LikeIcon />
                                </Avatar>
                            </Box>
                        </DialogActions>
                    </>

                    {/* second box */}
                    <Box>
                        <DialogContent
                        // dividers={scroll === 'paper'}
                        >
                            <Grid container>
                                <Grid item xs={12}>
                                    <Formik
                                        initialValues={{
                                            title: '',
                                            recievers_address: '',
                                            message: '',
                                            use_kokoruns_resume: ''
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
                                            title: Yup.string().required('Title is Required'),
                                            recievers_address: Yup.string().required('Recievers Address is Required'),
                                            message: Yup.string().required('Message is Required'),
                                            use_kokoruns_resume: Yup.string().required('Message is Required'),
                                            resume: ''
                                        })}
                                    >
                                        {(formik) => (
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
                                                            name="title"
                                                            helpertext="Title"
                                                        />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px' }} item xs={12} md={6}>
                                                        <Textfield
                                                            //  disabled={!!user.lastName}
                                                            name="recievers_address"
                                                            helpertext="Recievers Address"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Textarea num_of_rows={8} name="message" helpertext="Message" />
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <CheckboxWrapper name="use_kokoruns_resume" label="Use my Kokoruns resume" />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography sx={{ color: theme.palette.textColor, mb: '10px' }}>
                                                            I want to upload a different resume
                                                        </Typography>
                                                        <ResumeUpload name="resume" ref={filesharhe_ref} />
                                                    </Grid>

                                                    <Grid xs={12} item>
                                                        <Box sx={{ ...theme.typography.flex }}>
                                                            <DialogActions>
                                                                <Button
                                                                    startIcon={
                                                                        formik.isSubmitting ? (
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
                                                                    SEND APPLICATION
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
                        </DialogContent>
                    </Box>
                </Stepper>
            </Dialog>
        </Box>
    );
};

export default Jobboard;

export function Stepper({ children, step, setStep, ...props }) {
    const childrenArray = React.Children.toArray(children);
    const currentChild = childrenArray[step];

    return <Box>{currentChild}</Box>;
}
