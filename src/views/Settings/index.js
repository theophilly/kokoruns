import React, { useState, useRef } from 'react';
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

import SubCard from '../../ui-component/cards/SubCard';
import Rating from '../../components/reusables/FormUI/Rating';
import SearchIcon from '@mui/icons-material/Search';
import Warning from '../../ui-component/modals/Warning';
import Success from '../../ui-component/modals/Success';
import ResumeUpload from '../../components/reusables/forms/ResumeUpload';
import Textfield from '../../components/reusables/FormUI/Textfield';
import Textarea from '../../components/reusables/FormUI/Textarea';
import CheckboxWrapper from '../../components/reusables/FormUI/CheckBoxWrapper';

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

export default function Settings() {
    const matches = useMediaQuery('(min-width:900px)');
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const filesharhe_ref = useRef();

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
            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: 'max-content' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Verify Account" {...a11yProps(0)} />
                    <Tab label="Subscription " {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <SubCard sx={{ ml: '-10px', minHeight: '75vh' }}>
                    <Typography sx={{ fontSize: '1.3rem', fontWeight: '600' }}>Verify Your Account</Typography>
                    <Typography sx={{ fontSize: '0.9rem', margin: '20px 0' }}>
                        Kindly provide the following details to verify your account.
                    </Typography>
                    <Grid container>
                        <Grid item xs={12}>
                            <Formik
                                initialValues={{
                                    user_phone: '',
                                    nin: '',
                                    bvn: '',
                                    user_id: ''
                                }}
                                onSubmit={async (values) => {}}
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
                                                <Textfield name="user_phone" helpertext="Phone Number*" />
                                            </Grid>
                                            <Grid sx={{ paddingLeft: matches ? '20px' : '0px' }} item xs={12} md={6}>
                                                <Textfield name="nin" helpertext="National Identification Number(NIN)" />
                                            </Grid>
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
                                                <Textfield name="bvn" helpertext="Bank Verification Number" />
                                            </Grid>
                                            <Grid sx={{ paddingLeft: matches ? '20px' : '0px', mt: '7px' }} item xs={12} md={6}>
                                                <Typography variant="caption" sx={{ color: theme.palette.textColor, mt: '10px' }}>
                                                    Upload Any Government Issued ID
                                                </Typography>
                                                <ResumeUpload name="user_id" ref={filesharhe_ref} />
                                            </Grid>

                                            <Grid xs={12} item>
                                                <Box sx={{ ...theme.typography.flex }}>
                                                    <Button
                                                        startIcon={
                                                            formik.isSubmitting ? <CircularProgress color="secondary" size="1rem" /> : null
                                                        }
                                                        sx={{
                                                            width: '200px',
                                                            marginTop: '40px',
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
                                                        vERIFY ACCOUNT
                                                    </Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Form>
                                )}
                            </Formik>
                        </Grid>
                    </Grid>
                </SubCard>
            </TabPanel>
            <TabPanel value={value} index={1}></TabPanel>
        </Box>
    );
}
