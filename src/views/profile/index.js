import React from 'react';
import {
    Box,
    Grid,
    Avatar,
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
import { makeStyles } from '@mui/styles';
import SubCard from '../../ui-component/cards/SubCard';
import MainCard from '../../ui-component/cards/MainCard';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { BiEditAlt } from 'react-icons/bi';
import FullWidthTabs from './tabs';
import Textfield from '../../components/reusables/FormUI/Textfield';
import Textarea from '../../components/reusables/FormUI/Textarea';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    profile_cover_img: {
        height: '25vh',
        position: 'relative',
        zIndex: '1',
        minWidth: '100%',
        borderRadius: '10px',
        width: '100%',
        overflowY: 'hidden !important',
        overflowX: 'hidden !important',
        '& img': {
            objectFit: 'cover !important',
            width: '100%',
            objectPosition: '10% 40%'
        }
    }
}));

const Profile = () => {
    const { root, profile_cover_img } = useStyles();
    const theme = useTheme();
    const matchDownMd = useMediaQuery('(min-width:600px)');
    const [open, setOpen] = React.useState(false);
    const matches = useMediaQuery('(min-width:900px)');
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
        <Box className={root}>
            <Grid container>
                <Grid item>
                    <Box className={profile_cover_img}>
                        <img alt="bio" src="./dashf.jpg" />
                    </Box>
                </Grid>
                {/* profile */}
                <Grid item xs={12} sm={5} md={4} lg={3}>
                    <Grid container>
                        <Grid xs={7} sm={12} item>
                            <Box
                                sx={{
                                    ...theme.typography.flex,
                                    height: '240px',
                                    background: '#0991FF',
                                    border: 'none',
                                    marginTop: '-8px',
                                    color: 'white',
                                    position: 'relative',
                                    overFlow: 'visible !important',
                                    borderBottomLeftRadius: '10px',
                                    borderBottomRightRadius: '10px'
                                }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="./register.png"
                                    sx={{ width: 150, height: 150, position: 'absolute', zIndex: 4, top: -60 }}
                                />
                                <Box mt="78px">
                                    <Typography sx={{ ...theme.typography.heading, fontWeight: 'bold', textAlign: 'center' }}>
                                        Adejola Ademola
                                    </Typography>
                                    <Typography sx={{ textAlign: 'center', fontSize: '0.8rem' }}>UI/UX Designer at Kokoruns Ltd</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        {!matchDownMd && (
                            <Grid xs={5} item>
                                <Box sx={{ display: 'flex', justifyContent: 'center', textTransform: 'capitalize', mt: '20px' }}>
                                    <Button
                                        startIcon={<BiEditAlt />}
                                        disableElevation
                                        variant="contained"
                                        sx={{ textTransform: 'capitalize', background: '#0991FF' }}
                                    >
                                        Edit
                                    </Button>
                                </Box>
                            </Grid>
                        )}
                    </Grid>

                    <SubCard sx={{ marginTop: '30px' }} title="About">
                        <Box sx={{ display: 'flex' }}>
                            <Typography sx={{ fontSize: '0.8rem' }}>Function: </Typography>
                            <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0991FF', ml: '5px' }}>
                                User Experience Designer
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mt: '5px' }}>
                            <Typography sx={{ fontSize: '0.8rem' }}> Company: </Typography>
                            <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0991FF', ml: '5px' }}>
                                Kokoruns Ltd
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mt: '5px' }}>
                            <Typography sx={{ fontSize: '0.8rem' }}> Education: </Typography>
                            <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0991FF', ml: '5px' }}>
                                B.Sc,Medcine
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mt: '5px' }}>
                            <Typography sx={{ fontSize: '0.8rem' }}> Languages: </Typography>
                            <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0991FF', ml: '5px' }}>
                                English, Yoruba, German
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mt: '5px' }}>
                            <Typography sx={{ fontSize: '0.8rem' }}> Phone Number: </Typography>
                            <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0991FF', ml: '5px' }}>
                                0907 654 3210
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mt: '5px' }}>
                            <Typography sx={{ fontSize: '0.8rem' }}> Email: </Typography>
                            <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0991FF', ml: '5px' }}>
                                adejolaofademola@mail.com
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mt: '5px' }}>
                            <Typography sx={{ fontSize: '0.8rem' }}> Location: </Typography>
                            <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0991FF', ml: '5px' }}>
                                Lagos, Nigeria
                            </Typography>
                        </Box>
                    </SubCard>

                    {/* edit profile button */}
                    {matchDownMd && (
                        <Grid xs={12} item>
                            <Box sx={{ display: 'flex', justifyContent: 'center', textTransform: 'capitalize', mt: '20px' }}>
                                <Button
                                    startIcon={<BiEditAlt />}
                                    disableElevation
                                    variant="contained"
                                    sx={{ textTransform: 'capitalize', background: '#0991FF', width: '100%', padding: '15px 0' }}
                                >
                                    Edit Profile
                                </Button>
                            </Box>
                        </Grid>
                    )}
                </Grid>

                {/* left section */}
                <Grid item xs={12} sm={7} md={8} lg={9}>
                    <SubCard
                        divider={true}
                        sx={{
                            ml: '20px',
                            mt: '20px',
                            minHeight: '213px',
                            height: 'auto',
                            [theme.breakpoints.down('sm')]: {
                                ml: '0px'
                            }
                        }}
                        title="Bio"
                    >
                        <Typography sx={{ fontSize: '0.9rem', color: '#333333', ml: '5px' }}>
                            I am an energetic user experience designer that believes users should have the ultimate experience with visually
                            appealing interfaces. I have 3 years of experience in marketing communications and a year of user experience
                            design. These years has helped me garnered real life experiences in dealing with users and achieving preferred
                            goals. My skills set includes user research, wireframing, prototyping and brainstorming. I believe these will
                            enable me add value to your firm and expand your customer base.
                        </Typography>
                    </SubCard>
                    {/* tabs */}
                    <Box sx={{ width: '100%' }}>
                        <FullWidthTabs />
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
                <DialogTitle id="scroll-dialog-title">Message</DialogTitle>
                <DialogContent
                //  dividers={scroll === 'paper'}
                >
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

export default Profile;
