import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';

// material-ui
import { Box, Grid, Typography, useTheme } from '@mui/material';
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
import school_type from '../../../config/school_type.json';

const UpdateSchool = () => {
    const matches = useMediaQuery('(min-width:900px)');
    const theme = useTheme();
    const [school, setSchool] = useState(null);
    let history = useNavigate();
    const { schools } = useSelector((state) => state.userDataReducer.enterprise_ids);

    useEffect(() => {
        if (schools.length < 1) {
            history('/enterprise');
        } else {
            (async function () {
                await setSchool(schools[0]);
            })();
        }
    }, []);

    return (
        <div>
            {school ? (
                <Box marginTop="20px">
                    <Formik
                        initialValues={{
                            school_name: school.school_name,
                            cac: school.cac,
                            school_address: school.school_address,
                            school_email: school.school_email,
                            school_number: school.school_number,
                            website: school.website,
                            school_state: '',
                            school_lga: '',
                            about: school.about,
                            school_industry: 'ffff',
                            school_industry2: '3d3d',
                            school_industry3: 'd3d',
                            school_type: school.school_type,
                            school_size: school.school_size,
                            linkedin: school.linkedin,
                            facebook: school.facebook,
                            twitter: school.twitter,
                            school_director: school.school_director,
                            instagram: school.instagram,
                            founded: school.founded,
                            field: 'ded',
                            logo: ''
                        }}
                        onSubmit={async (values) => {
                            // await dispatch(signup(values));
                            // if (window.store.getState().authReducer.user_id) {
                            //     handleRecommendOpen();
                            //     return;
                            // }
                            // await setAlertContent({
                            //     type: 'warning',
                            //     content: window.store.getState().authReducer.error
                            // });
                            // handleSnackClick();
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
                                            <Typography sx={{ ...theme.typography.heading }}>Update School Page</Typography>
                                            <Typography variant="caption">
                                                Kindly edit the following fields to update your school page.
                                            </Typography>
                                        </Grid>
                                        <Grid xs={12} item>
                                            <Typography sx={{ ...theme.typography.heading }}>School Details</Typography>
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
                                            <Textfield name="school_name" helpertext="Name" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <SelectWrapper name="school_type" helpertext="Type of School" options={school_type} />
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
                                            <Textfield name="school_director" helpertext="School Director" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <Textfield name="school_number" helpertext="Phone Number" />
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
                                            <Textfield name="school_email" helpertext="Email Address" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <Textfield name="website" helpertext="Website" />
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
                                            <Textfield name="school_address" helpertext="Main Office Address" />
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
                                            <SelectWrapper name="school_state" helpertext="State" options={stateData} />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <SelectLGA dependentField="school_state" name="school_lga" helpertext="Local Government Area" />
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
                                            <Textfield name="cac" helpertext="CAC Registration Number" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <SelectWrapper name="school_size" helpertext="School Size" options={company_size} />
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
                                            <Textfield name="linkedIn" helpertext="Linkedin Handle" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <Textfield name="instagram" helpertext="Instagram Handle" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}></Grid>
                                        {/* gender and marital status */}
                                        <Grid item xs={12}>
                                            <Textarea num_of_rows={5} name="about" helpertext="About" />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default UpdateSchool;
