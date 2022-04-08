import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';

// material-ui
import { Box, Grid, Typography, useTheme, Button, CircularProgress, Dialog, DialogContent } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';

// project imports
import Textfield from '../FormUI/Textfield';
import SelectWrapper from '../FormUI/SelectWrapper';
import Datepicker from '../FormUI/Datepicker';
import Textarea from '../FormUI/Textarea';
import SelectLGA from '../FormUI/SelectLGA';
import stateData from '../../../config/stateData.json';
import company_size from '../../../config/company_size.json';
import association_type from '../../../config/association_type.json';
import { rebuildAssociationData } from '../../../views/enterprise-profile/association/AssociationSetup';
import api from '../../../helpers/api';
import Success from '../../../ui-component/modals/Success';
import dateFormatter from '../../../helpers/dateFormatter';

const UpdateAssociation = () => {
    const matches = useMediaQuery('(min-width:900px)');
    const theme = useTheme();
    const [association, setAssociation] = useState(null);
    let history = useNavigate();
    const { associations } = useSelector((state) => state.userDataReducer.enterprise_ids);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (associations.length < 1) {
            history('/enterprise');
        } else {
            (async function () {
                await setAssociation(associations[0]);
            })();
        }

        console.log(associations);
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        history('/enterprise');
    };

    return (
        <div>
            {association ? (
                <Box marginTop="20px">
                    <Formik
                        initialValues={{
                            association_name: association.association_name,
                            association_cac: association.cac,
                            association_address: association.association_address,
                            association_contact_email: association.association_contact_email,
                            association_phone: association.phone,
                            association_website: association.website,
                            main_office_location_state: association.main_office_location_state,
                            main_office_location_lga: association.main_office_location_lga,
                            about: association.about,
                            association_industry: 'ffff',
                            association_industry2: '3d3d',
                            association_industry3: 'd3d',
                            association_type: association.association_type,
                            association_size: association.association_size,
                            linkedin: association.linkedin,
                            facebook: association.facebook,
                            twitter: association.twitter,
                            association_director: association.association_director,
                            instagram: association.instagram,
                            founded: association.founded_year,
                            field: 'ded'
                        }}
                        onSubmit={async (values) => {
                            // await sleep(3000);

                            //const formData = await rebuildAssociationData(values);
                            await api.updateAssociation(association.association_id, {
                                ...values,
                                founded: values.founded ? dateFormatter(values.founded) : association.founded_year
                            });

                            handleClickOpen();
                        }}
                        // validationSchema={Yup.object().shape({
                        //     email: Yup.string().email('Invalid email format').required('Required'),
                        //     password: Yup.string().min(6, 'password must be atleast 6 characters').required('Password is required'),
                        //     confirmPassword: Yup.string()
                        //         .oneOf([Yup.ref('password'), null], 'password must match')
                        //         .required('Please confirm password 😱')
                        // })}
                    >
                        {({ isSubmitting }) => (
                            <Form autoComplete="off">
                                <Box sx={{ marginTop: '0px', padding: '20px', background: 'white' }}>
                                    <Grid container spacing={2}>
                                        <Grid xs={12} item>
                                            <Typography sx={{ ...theme.typography.heading }}>Update Association Page</Typography>
                                            <Typography variant="caption">
                                                Kindly edit the following fields to update your association page.
                                            </Typography>
                                        </Grid>
                                        <Grid xs={12} item>
                                            <Typography sx={{ ...theme.typography.heading }}>association Details</Typography>
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
                                            <Textfield name="association_name" helpertext="Name" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <SelectWrapper
                                                name="association_type"
                                                helpertext="Type of association"
                                                options={association_type}
                                            />
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
                                            <Textfield name="association_director" helpertext="Association Director" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <Textfield name="association_phone" helpertext="Phone Number" />
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
                                            <Textfield name="association_contact_email" helpertext="Email Address" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <Textfield name="association_website" helpertext="Website" />
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
                                            <Datepicker name="founded" helpertext="Date Founded" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <Textfield name="association_address" helpertext="Main Office Address" />
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
                                            <SelectWrapper name="main_office_location_state" helpertext="State" options={stateData} />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <SelectLGA
                                                dependentField="main_office_location_state"
                                                name="main_office_location_lga"
                                                helpertext="Local Government Area"
                                            />
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
                                            <Textfield name="association_cac" helpertext="CAC Registration Number" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <SelectWrapper name="association_size" helpertext="Association Size" options={company_size} />
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
                                            <Textfield name="facebook" helpertext="Facebook Handle" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <Textfield name="twitter" helpertext="Twitter Handle" />
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
                                            <Textfield name="linkedin" helpertext="Linkedin Handle" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <Textfield name="instagram" helpertext="Instagram Handle" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}></Grid>
                                        {/* gender and marital status */}
                                        <Grid item xs={12}>
                                            <Textarea num_of_rows={5} name="about" helpertext="About" />
                                        </Grid>
                                        <Grid mt="30px" mb="20px" item xs={12}>
                                            <Box sx={{ ...theme.typography.flex }}>
                                                <Button
                                                    sx={{ padding: '8px 90px' }}
                                                    startIcon={isSubmitting ? <CircularProgress color="secondary" size="1rem" /> : null}
                                                    disabled={isSubmitting}
                                                    variant="contained"
                                                    disableElevation
                                                    type="submit"
                                                >
                                                    Update
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                        <DialogContent>
                            <Success
                                text="See Page"
                                content="You have successfully updated association page. View page now"
                                to="/enterprise"
                            ></Success>
                        </DialogContent>
                    </Dialog>
                </Box>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default UpdateAssociation;
