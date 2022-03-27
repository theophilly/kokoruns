import React, { useRef } from 'react';
import { Formik, Form, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';

import { Box, Grid, Typography, useTheme, Paper, CircularProgress, Button, useMediaQuery, Dialog, DialogContent } from '@mui/material';
import { useSelector } from 'react-redux';

// local import
import Textfield from '../../components/reusables/FormUI/Textfield';
import SelectWrapper from '../../components/reusables/FormUI/SelectWrapper';
import Teamimage from '../../components/reusables/forms/Teamsimage';
import Datepicker from '../../components/reusables/FormUI/Datepicker';
import SelectLGA from '../../components/reusables/FormUI/SelectLGA';
import stateData from '../../config/stateData.json';
import Textarea from '../../components/reusables/FormUI/Textarea';
import EventPrice from '../../components/reusables/FormUI/EventPrice';
import Success from '../../ui-component/modals/Success';
import api from '../../helpers/api';
import dateFormatter from '../../helpers/dateFormatter';

export default function Createevent() {
    const navigate = useNavigate();
    const { enterprise_ids } = useSelector((state) => state.userDataReducer);
    const matches = useMediaQuery('(min-width:900px)');
    let { pathname } = useLocation();
    const theme = useTheme();
    const filesharhe_ref = useRef();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        navigate('/enterprise');
    };

    const rebuildData = (formvalues, file) => {
        let formData = new FormData();
        console.log('file event', file);
        //     {
        //         "from": "23323",
        //         "to" : "swswsw",
        //         "event_title": "swdw",
        //         "event_link": "swd",
        //         "event_description": "swsw",
        //         "event_type": "swsw",
        //         "event_industry": "swsw",
        //         "event_price1": 4343,
        //         "event_price2": 3242,
        //         "event_address": "3d3d",
        //         "event_state": "iduedi",
        //         "event_lga": "Shswj",
        //         "event_image1": "ewdueiu",
        //         "event_logo": "deyvdedgeu"
        //    }

        formData.append('event_start', dateFormatter(formvalues.start_date));
        formData.append('event_end', dateFormatter(formvalues.end_date));
        formData.append('event_title', formvalues.event_title);
        formData.append('event_link', 'kjhjj');
        formData.append('event_description', formvalues.event_description);
        formData.append('event_type', formvalues.event_type);
        formData.append('event_industry', formvalues.industry);
        formData.append('event_price1', 122);
        formData.append('event_price2', 34554);
        // formData.append('event_price1', formvalues.event_ticket_price);
        // formData.append('event_price2', formvalues.event_min_ticket);
        formData.append('event_address', formvalues.address);
        formData.append('event_state', formvalues.event_state);
        formData.append('event_lga', formvalues.event_lga);

        if (file) {
            formData.append('event_image', file);
            formData.append('event_logo', file);
        }
        return formData;
    };

    return (
        <Box>
            <Paper sx={{ padding: '10px 20px 60px' }}>
                <Grid container>
                    <Grid xs={12} item>
                        <Typography sx={{ ...theme.typography.heading }}>Create New Event</Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography sx={{ fontWeight: '600', marginTop: '10px' }}>Event Information</Typography>
                    </Grid>
                    <Formik
                        initialValues={{
                            event_image: '',
                            event_title: '',
                            event_type: '',
                            industry: '',
                            start_date: '',
                            end_date: '',
                            address: '',
                            event_state: '',
                            event_lga: '',
                            event_description: '',
                            event_price: '',
                            event_ticket_price: '',
                            event_min_ticket: ''
                        }}
                        onSubmit={async (values) => {
                            let formData = await rebuildData(values, filesharhe_ref.current.files[0]);
                            if (pathname === '/create-school-event') {
                                await api.createSchoolEvents(enterprise_ids.schools[0].school_id, formData);
                            } else if (pathname === '/create-association-event') {
                                await api.createAssociationEvents(enterprise_ids.associations[0].association_id, formData);
                            } else if (pathname === '/create-company-event') {
                                await api.createCompanyEvents(enterprise_ids.companies[0].company_id, formData);
                            }
                            handleClickOpen();
                        }}
                        // validationSchema={Yup.object().shape({
                        //     team_name: Yup.string().required('Team Name is Required'),
                        //     team_purpose: Yup.string().required('Team Purpose is Required'),
                        //     team_bio: Yup.string().required('Team Bio is Required'),
                        //     team_policy: Yup.string().required('Team Policy is Required')
                        // })}
                    >
                        {({ isSubmitting }) => (
                            <Form autoComplete="off">
                                <Grid container>
                                    <Grid xs={12}>
                                        <Teamimage name="event_image" ref={filesharhe_ref} />
                                    </Grid>

                                    <Grid
                                        sx={{
                                            paddingRight: '40px',
                                            '@media (max-width: 900px)': {
                                                padding: '0px'
                                            }
                                        }}
                                        item
                                        xs={12}
                                        md={6}
                                    >
                                        <Textfield name="event_title" helpertext="Event Title" />
                                    </Grid>
                                    <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                        <Textfield name="event_type" helpertext="Event Type" />
                                    </Grid>

                                    <Grid
                                        sx={{
                                            paddingRight: '40px',
                                            marginTop: '10px',
                                            '@media (max-width: 900px)': {
                                                padding: '0px'
                                            }
                                        }}
                                        item
                                        xs={12}
                                        md={6}
                                    >
                                        <Textfield name="industry" helpertext="Industry" />
                                    </Grid>
                                    <Grid sx={{ paddingLeft: matches ? '40px' : '0px', marginTop: '10px' }} item xs={12} md={6}>
                                        <Datepicker name="start_date" helpertext="Start Date" />
                                    </Grid>

                                    <Grid
                                        sx={{
                                            paddingRight: '40px',
                                            marginTop: '10px',
                                            '@media (max-width: 900px)': {
                                                padding: '0px'
                                            }
                                        }}
                                        item
                                        xs={12}
                                        md={6}
                                    >
                                        <Datepicker name="end_date" helpertext="End Date" />
                                    </Grid>
                                    <Grid sx={{ paddingLeft: matches ? '40px' : '0px', marginTop: '10px' }} item xs={12} md={6}>
                                        <Textfield name="address" helpertext="Address" />
                                    </Grid>
                                    {/* 
                                    <Grid
                                        sx={{
                                            paddingRight: '40px',

                                            marginTop: '10px',
                                            '@media (max-width: 900px)': {
                                                padding: '0px'
                                            }
                                        }}
                                        item
                                        xs={12}
                                        md={6}
                                    >
                                        <Textfield name="team_bio" helpertext="Team Bio" />
                                    </Grid>

                                    <Grid sx={{ paddingLeft: matches ? '40px' : '0px', marginTop: '10px' }} item xs={12} md={6}>
                                        <SelectWrapper name="team_policy" helpertext="Team Policy" options={maritalStatusData} />
                                    </Grid> */}

                                    {/* preferred job state and LGA */}
                                    <Grid
                                        sx={{
                                            paddingRight: '40px',
                                            marginTop: '10px',
                                            '@media (max-width: 900px)': {
                                                padding: '0px'
                                            }
                                        }}
                                        item
                                        xs={12}
                                        md={6}
                                    >
                                        <SelectWrapper name="event_state" helpertext="Event State" options={stateData} />
                                    </Grid>
                                    <Grid sx={{ paddingLeft: matches ? '40px' : '0px', marginTop: '10px' }} item xs={12} md={6}>
                                        <SelectLGA dependentField="event_state" name="event_lga" helpertext="LGA" />
                                    </Grid>

                                    {/* event description */}

                                    <Grid sx={{ mt: '10px' }} item xs={12}>
                                        <Textarea num_of_rows={6} name="event_description" helpertext="Event Description" />
                                    </Grid>

                                    {/* event price */}
                                    <Grid sx={{ marginTop: '20px' }} item xs={12}>
                                        <Typography sx={{ fontSize: '0.9rem', mb: '10px' }}>Event Price</Typography>
                                        <EventPrice name="event_price" />
                                    </Grid>

                                    {/* price */}
                                    <PriceWrapper />

                                    <Grid xs={12} item>
                                        <Box sx={{ ...theme.typography.flex }}>
                                            <Button
                                                startIcon={isSubmitting ? <CircularProgress color="secondary" size="1rem" /> : null}
                                                sx={{
                                                    width: '400px',
                                                    marginTop: '50px',
                                                    letterSpacing: '1px',
                                                    borderRadius: '0px',
                                                    color: 'white',
                                                    textTransform: 'capitalize',
                                                    '& :hover': {
                                                        color: 'black'
                                                    },
                                                    [theme.breakpoints.down('sm')]: {
                                                        marginTop: '50px',
                                                        width: '200px'
                                                    }
                                                }}
                                                disableElevation
                                                variant="contained"
                                                type="submit"
                                            >
                                                create event
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Paper>

            <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogContent>
                    <Success
                        text="Go to EVENTS"
                        content="You have successfully created an event. You can go to your events now."
                        to="/enterprise"
                    ></Success>
                </DialogContent>
            </Dialog>
        </Box>
    );
}

const PriceWrapper = () => {
    const { getFieldMeta } = useFormikContext();
    const price_field = getFieldMeta('event_price');
    const matches = useMediaQuery('(min-width:900px)');
    if (price_field.value === 'paid') {
        return (
            <>
                <Grid
                    sx={{
                        paddingRight: '40px',
                        mt: '10px',
                        '@media (max-width: 900px)': {
                            padding: '0px'
                        }
                    }}
                    item
                    xs={12}
                    md={6}
                >
                    <Textfield startIcon name="event_ticket_price" helpertext="Ticket Price" />
                </Grid>
                <Grid sx={{ paddingLeft: matches ? '40px' : '0px', mt: '10px' }} item xs={12} md={6}>
                    <Textfield startIcon name="event_min_ticket" helpertext="Min Ticket" />
                </Grid>
            </>
        );
    }
    return <></>;
};
