import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Tabs,
    Tab,
    Typography,
    Box,
    useTheme,
    Select,
    FormControl,
    OutlinedInput,
    MenuItem,
    InputBase,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    Paper,
    Grid,
    Button,
    CircularProgress,
    useMediaQuery,
    Avatar
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import RecommendationItem from './RecommendationItem';
import SubCard from '../../ui-component/cards/SubCard';
import Rating from '../../components/reusables/FormUI/Rating';
import SearchIcon from '@mui/icons-material/Search';
import Warning from '../../ui-component/modals/Warning';
import Success from '../../ui-component/modals/Success';
import RecommendationComment from '../../components/reusables/FormUI/RecommendationComment';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

export default function Recommendation() {
    const matches = useMediaQuery('(min-width:900px)');
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const [recommendOpen, setRecommendOpen] = useState(false);
    const [viewOpen, setViewOpen] = useState(false);
    const [recommendStep, setRecommendStep] = useState(0);

    const handleRecommendOpen = () => {
        setRecommendStep(0);
        setRecommendOpen(true);
    };
    const handleRecommendClose = () => {
        setRecommendOpen(false);
    };
    const handleViewOpen = () => {
        setViewOpen(true);
    };
    const handleViewClose = () => {
        setViewOpen(false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                width: '100%',
                //  padding: '10px',
                [theme.breakpoints.down('sm')]: {
                    padding: '10px 0'
                }
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0px' }}>
                <Typography sx={{ fontWeight: '600', fontSize: '1.3rem', ml: '15px', mb: '5px' }}>My Recommendations</Typography>
                <Button
                    LinkComponent={Link}
                    to="/request-recommendation"
                    disableElevation
                    sx={{ textTransform: 'capitalize' }}
                    variant="contained"
                >
                    Send Request
                </Button>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: 'max-content' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Recieved Requests" {...a11yProps(0)} />
                    <Tab label="Sent Requests" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <SubCard sx={{ ml: '-10px' }}>
                    <Box sx={{ display: 'flex', padding: '10px 0' }}>
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
                                placeholder="Search “Recommended”"
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
                    <RecommendationItem handleRecommendOpen={handleRecommendOpen} />
                    <RecommendationItem handleRecommendOpen={handleRecommendOpen} />
                    <RecommendationItem handleRecommendOpen={handleRecommendOpen} />
                </SubCard>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SubCard sx={{ ml: '-10px' }}>
                    <Box sx={{ display: 'flex', padding: '10px 0' }}>
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
                                placeholder="Search “Recommended”"
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
                    <RecommendationItem text="View Request" handleRecommendOpen={handleViewOpen} />
                    <RecommendationItem text="View Request" handleRecommendOpen={handleViewOpen} />
                    <RecommendationItem text="View Request" handleRecommendOpen={handleViewOpen} />
                </SubCard>
            </TabPanel>
            {/* reject dialog */}
            <Dialog open={recommendOpen} onClose={handleRecommendClose} aria-labelledby="responsive-dialog-title">
                <Typography sx={{ fontWeight: '600', pl: '20px', pt: '10px' }}>Make Recommendations</Typography>
                <DialogContent>
                    {recommendStep !== 2 && (
                        <Box sx={{ display: 'flex', cursor: 'pointer' }}>
                            <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src="./student.png" />

                            <Box sx={{ ...theme.typography.column, flex: 1, ml: '20px', justifyContent: 'center' }}>
                                <Typography
                                    sx={{
                                        fontWeight: '600',
                                        color: theme.palette.text
                                        // ...theme.typography.heading
                                    }}
                                >
                                    Cynthia Eluzonam
                                </Typography>

                                <Typography sx={{ color: theme.palette.textColor1 }} variant="caption">
                                    User Experience Designer, Kokoruns
                                </Typography>
                            </Box>
                        </Box>
                    )}
                    <Formik
                        initialValues={{
                            first_impression: '',
                            professionality: '',
                            integrity: '',
                            communication_skills: '',
                            punctuality: '',
                            comment: ''
                        }}
                        onSubmit={async (values) => {
                            console.log(values);
                            setRecommendStep((step) => step + 1);
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
                        // validationSchema={Yup.object().shape({
                        //     title: Yup.string().required('Title is Required'),
                        //     recievers_address: Yup.string().required('Recievers Address is Required'),
                        //     message: Yup.string().required('Message is Required'),
                        //     use_kokoruns_resume: Yup.string().required('Message is Required'),
                        //     resume: ''
                        // })}
                    >
                        {(formik) => (
                            <Form autoComplete="off">
                                <RecommendStepper rejectStep={recommendStep} setRejectStep={setRecommendStep}>
                                    {/* second box */}
                                    <Box>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography sx={{ ...theme.typography.heading, mt: '20px', mb: '10px' }}>
                                                    Ratings
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
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
                                                        <Rating name="first_impression" helperText="First Impression" />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px' }} item xs={12} md={6}>
                                                        <Rating name="professionality" helperText="Professionality" />
                                                    </Grid>
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
                                                        <Rating name="integrity" helperText="Integrity" />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px', mt: '10px' }} item xs={12} md={6}>
                                                        <Rating name="communication_skills" helperText="Communication Skills" />
                                                    </Grid>
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
                                                        <Rating name="punctuality" helperText="Punctuality" />
                                                    </Grid>

                                                    <Grid xs={12} item>
                                                        <Box sx={{ ...theme.typography.flex }}>
                                                            <DialogActions>
                                                                <Button
                                                                    onClick={() => setRecommendStep((step) => step + 1)}
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
                                                                    Continue
                                                                </Button>
                                                            </DialogActions>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>

                                    {/* second box */}
                                    <Box>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography sx={{ ...theme.typography.heading, mt: '20px', mb: '10px' }}>
                                                    Leave a Comment
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <RecommendationComment name="comment" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <DialogActions sx={{ ...theme.typography.flex }}>
                                                    <Button
                                                        startIcon={
                                                            formik.isSubmitting ? <CircularProgress color="secondary" size="1rem" /> : null
                                                        }
                                                        sx={{
                                                            width: '400px',
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
                                                        Submit Recommendations
                                                    </Button>
                                                </DialogActions>
                                            </Grid>
                                        </Grid>
                                    </Box>

                                    <Success
                                        text="Go to recommendations"
                                        to="/recommendations"
                                        content="You have successfully completed Adetola's 
                                        recommendation request. Thank you!"
                                    />
                                    {/* <Warning
                            onNoClick={() => handleRecommendClose()}
                            onYesClick={() => setRecommendStep((step) => step + 1)}
                            text="Are you sure you want to reject your invitation to this event? Rejected events will not show on your event list."
                        />
                        <Success
                            text="Go to EVENTS"
                            to="/my-events"
                            content="You have successfully rejected your invitation.
You can go to your events now."
                        /> */}
                                    {/* <div onClick={() => setRecommendStep((step) => step + 1)}>1</div>
                    <div>2</div> */}
                                </RecommendStepper>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>
            {/* view recommendation */}
            <Dialog open={viewOpen} onClose={handleViewClose} aria-labelledby="responsive-dialog-title">
                <Typography sx={{ fontWeight: '600', pl: '20px', pt: '10px' }}>Request for Recommendation</Typography>
                <DialogContent>
                    <Box sx={{ display: 'flex', cursor: 'pointer' }}>
                        <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src="./student.png" />

                        <Box sx={{ ...theme.typography.column, flex: 1, ml: '20px', justifyContent: 'center' }}>
                            <Typography
                                sx={{
                                    fontWeight: '600',
                                    color: theme.palette.text
                                    // ...theme.typography.heading
                                }}
                            >
                                Cynthia Eluzonam
                            </Typography>

                            <Typography sx={{ color: theme.palette.textColor1 }} variant="caption">
                                User Experience Designer, Kokoruns
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ margin: '10px 0', fontSize: '0.9rem' }}>Message</Typography>
                        <Typography sx={{ padding: '10px', border: '1px solid #CCCCCC', borderRadius: '5px', fontSize: '0.9rem' }}>
                            I appreciate the privilege to work with you. I’ll really like if you can make a recommendation for me. Thank
                            you.
                        </Typography>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export function RecommendStepper({ children, rejectStep, setRejectStep, ...props }) {
    const childrenArray = React.Children.toArray(children);
    const currentChild = childrenArray[rejectStep];

    return <Box>{currentChild}</Box>;
}
