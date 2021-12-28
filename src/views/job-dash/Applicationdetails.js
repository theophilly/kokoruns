import React from 'react';
import {
    Box,
    Grid,
    Typography,
    useTheme,
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    Divider,
    CircularProgress
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import AddIcon from '@mui/icons-material/Add';

import { Link } from 'react-router-dom';
import SubCard from '../../ui-component/cards/SubCard';
import Jobitem from './Jobitem';
import Quickmessage from './Quickmessage';
import Textfield from '../../components/reusables/FormUI/Textfield';
import Textarea from '../../components/reusables/FormUI/Textarea';

const status = {
    Unsuccessful: {
        bgcolor: '#D92627'
    },
    Successful: {
        bgcolor: 'green'
    },
    'In Progress': {
        bgcolor: '#F2C94C'
    }
};

const Applicationdetails = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery('(min-width:600px)');
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const matches = useMediaQuery('(min-width:900px)');

    const handleClickOpen = () => {
        setMessage(true);
        //setScroll(scrollType);
    };
    const handleMessageClose = () => {
        setMessage(false);
    };

    const handleClose = () => {
        setOpen(false);
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
        <Box
            sx={{
                width: '100%',
                padding: '10px',
                [theme.breakpoints.down('sm')]: {
                    padding: '0px'
                }
            }}
        >
            <Grid spacing={2} container>
                <Grid xs={12} item>
                    <Box>
                        <Typography sx={{ ...theme.typography.heading }}>Application Details</Typography>
                    </Box>

                    <SubCard sx={{ boxShadow: 'none', marginTop: '20px' }}>
                        {/*  details */}

                        <Box sx={{ marginTop: '10px', padding: '0 10px' }} title="About">
                            <Box sx={{ display: 'flex', mt: '5px' }}>
                                <Typography sx={{ fontSize: '0.9rem', color: '#C4C4C4' }}> Job Title: </Typography>
                                <Typography sx={{ fontSize: '0.9rem', fontWeight: 'bold', color: theme.palette.text, ml: '5px' }}>
                                    UI/UX Designer
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mt: '5px' }}>
                                <Typography sx={{ fontSize: '0.9rem', color: '#C4C4C4' }}>Company: </Typography>
                                <Typography sx={{ fontSize: '0.9rem', fontWeight: 'bold', color: theme.palette.text, ml: '5px' }}>
                                    Kokoruns Ltd
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mt: '5px' }}>
                                <Typography sx={{ fontSize: '0.9rem', color: '#C4C4C4' }}> Location: </Typography>
                                <Typography sx={{ fontSize: '0.9rem', fontWeight: 'bold', color: theme.palette.text, ml: '5px' }}>
                                    Lagos, Nigeria
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mt: '5px' }}>
                                <Typography sx={{ fontSize: '0.9rem', color: '#C4C4C4' }}>Date of Application: </Typography>
                                <Typography sx={{ fontSize: '0.9rem', fontWeight: 'bold', color: theme.palette.text, ml: '5px' }}>
                                    Nov 24, 2021
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mt: '5px' }}>
                                <Typography sx={{ fontSize: '0.9rem', color: '#C4C4C4' }}>Status: </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box
                                        sx={{
                                            ml: '5px',
                                            display: 'inline-block',
                                            height: '10px',
                                            width: '10px',
                                            borderRadius: '50%',
                                            ...status['In Progress']
                                        }}
                                    ></Box>
                                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 'bold', color: theme.palette.text }}>
                                        Unsuccessful
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ ...theme.typography.heading }}>Messages</Typography>
                        <Button
                            // openModal={handleClickOpen()}
                            onClick={() => setOpen(true)}
                            sx={{ padding: '8px 40px', textTransform: 'capitalize' }}
                            disableElevation
                            variant="contained"
                        >
                            New Message
                        </Button>
                    </Box>
                    {/* quick Messages */}
                    <Box
                        sx={{
                            background: 'white !important',
                            padding: '20px 10px',
                            mt: '20px'
                        }}
                    >
                        <Quickmessage openModal={handleClickOpen} />
                        <Quickmessage openModal={handleClickOpen} />
                        <Quickmessage openModal={handleClickOpen} />
                        <Quickmessage openModal={handleClickOpen} />
                        <Quickmessage openModal={handleClickOpen} />
                        <Quickmessage openModal={handleClickOpen} />
                        <Quickmessage openModal={handleClickOpen} />
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
                <DialogTitle id="scroll-dialog-title">Message</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
                        <Box>
                            <Typography sx={{ fontWeight: '600' }}>Subject: UI/UX Designer</Typography>
                            <Typography sx={{ color: theme.palette.textColor1 }}>From: Recruiting Team</Typography>
                            <Typography sx={{ color: theme.palette.textColor1 }}>To: Adejola Ademola</Typography>
                            <Divider
                                sx={{
                                    opacity: 1,
                                    borderColor: '#CCCCCC',
                                    width: '100%',
                                    margin: '8px 0 20px'
                                }}
                            />
                        </Box>
                        `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et.` `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                        scelerisque nisl consectetur et.` `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
                        cursus magna, vel scelerisque nisl consectetur et.` `Cras mattis consectetur purus sit amet fermentum. Cras justo
                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.` `Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.` `Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.` `Cras
                        mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                        risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                        et.` `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et.` `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                        scelerisque nisl consectetur et.` `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
                        cursus magna, vel scelerisque nisl consectetur et.` `Cras mattis consectetur purus sit amet fermentum. Cras justo
                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.` `Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.` `Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.` `Cras
                        mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                        risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                        et.` `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        ibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.` `Cras mattis consectetur purus
                        sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.` `Cras
                        mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                        risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                        et.` `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et.` `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                        scelerisque nisl consectetur et.` `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
                        cursus magna, vel scelerisque nisl consectetur et.` `Cras mattis consectetur purus sit amet fermentum. Cras justo
                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.` `Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.` `Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.` `Cras
                        mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                        risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                        et.` `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et.` `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                        scelerisque nisl consectetur et.` `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
                        cursus magna, vel scelerisque nisl consectetur et.` `Cras mattis consectetur purus sit amet fermentum. Cras justo
                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.` `Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Box
                        disableElevation
                        sx={{
                            ...theme.typography.flex,
                            width: '100%'
                        }}
                    >
                        <Button sx={{ padding: '5px 70px', textTransform: 'capitalize' }} variant="contained" onClick={handleMessageClose}>
                            Back
                        </Button>
                    </Box>
                </DialogActions>
            </Dialog>

            <Dialog
                open={open}
                onClose={handleClose}
                //   scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Message</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Formik
                                    initialValues={{
                                        title: '',
                                        recievers_address: '',
                                        message: ''
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
                                        message: Yup.string().required('Message is Required')
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
                                                                Send Message
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

export default Applicationdetails;
