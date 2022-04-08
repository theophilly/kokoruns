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
import companyTypeA from '../../../config/companyTypeA.json';
import company_size from '../../../config/company_size.json';
import IndustryField from '../FormUI/IndustryField';
import companyTypeB from '../../../config/companyTypeB';
import companyTypeC from '../../../config/companyTypeC';
import company_type from '../../../config/company.json';
import { rebuildCompanyData } from '../../../views/enterprise-profile/company/CompanySetup';
import api from '../../../helpers/api';
import Success from '../../../ui-component/modals/Success';
import dateFormatter from '../../../helpers/dateFormatter';

const UpdateCompany = () => {
    const matches = useMediaQuery('(min-width:900px)');
    const theme = useTheme();
    const [company, setCompany] = useState(null);
    let history = useNavigate();
    const { companies } = useSelector((state) => state.userDataReducer.enterprise_ids);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (companies.length < 1) {
            history('/enterprise');
        } else {
            (async function () {
                await setCompany(companies[0]);
            })();
        }

        console.log(companies);
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        history('/enterprise');
        // window.location.reload();
    };

    return (
        <div>
            {company ? (
                <Box marginTop="20px">
                    <Formik
                        initialValues={{
                            company_name: company.company_name,
                            cac: company.cac,
                            company_address: company.company_address,
                            company_email: company.company_email,
                            company_number: company.phone,
                            website: company.website,
                            company_state: company.main_office_location_state,
                            company_lga: company.main_office_location_lga,
                            about: company.about,
                            company_industry: company.company_industry,
                            company_industry2: company.company_industry2,
                            company_industry3: company.company_industry3,
                            company_type: company.company_type,
                            company_size: company.company_size,
                            linkedin: company.linkedin,
                            facebook: company.facebook,
                            twitter: company.twitter,
                            company_director: company.company_director,
                            instagram: company.instagram,
                            founded: company.founded_year
                        }}
                        onSubmit={async (values) => {
                            //   await sleep(3000);

                            //    const formData = await rebuildCompanyData(values);
                            await api.updateCompany(company.company_id, {
                                ...values,
                                founded: values.founded ? dateFormatter(values.founded) : company.founded_year
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
                                            <Typography sx={{ ...theme.typography.heading }}>Update Company Page</Typography>
                                            <Typography variant="caption">
                                                Kindly edit the following fields to update your company page.
                                            </Typography>
                                        </Grid>
                                        <Grid xs={12} item>
                                            <Typography sx={{ ...theme.typography.heading }}>company Details</Typography>
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
                                            <Textfield name="company_name" helpertext="Name" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <SelectWrapper name="company_type" helpertext="Company Type" options={company_type} />
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
                                            <Textfield name="company_director" helpertext="Company Director" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <Textfield name="company_number" helpertext="Phone Number" />
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
                                            <Textfield name="company_email" helpertext="Email Address" />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <Textfield name="website" helpertext="Website" />
                                        </Grid>

                                        {/* insert */}
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
                                            <SelectWrapper name="company_industry" helpertext="Company Industry" options={companyTypeA} />
                                        </Grid>
                                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                            <IndustryField
                                                dependentOptions={companyTypeB}
                                                dependentField="company_industry"
                                                name="company_industry2"
                                                helpertext="Company Industry 2"
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
                                            <IndustryField
                                                dependentOptions={companyTypeC}
                                                dependentField="company_industry2"
                                                name="company_industry3"
                                                helpertext="Company Industry 3"
                                            />
                                        </Grid>

                                        <Grid
                                            sx={{
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
                                            <Textfield name="company_address" helpertext="Main Office Address" />
                                        </Grid>
                                        <Grid
                                            sx={{
                                                '@media (max-width: 900px)': {
                                                    padding: '0px'
                                                }
                                            }}
                                            item
                                            xs={12}
                                            md={6}
                                        >
                                            <SelectWrapper name="company_state" helpertext="State" options={stateData} />
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
                                            <SelectLGA
                                                dependentField="company_state"
                                                name="company_lga"
                                                helpertext="Local Government Area"
                                            />
                                        </Grid>
                                        <Grid
                                            sx={{
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
                                            <SelectWrapper name="company_size" helpertext="Company Size" options={company_size} />
                                        </Grid>
                                        <Grid
                                            sx={{
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
                                            <Textfield name="twitter" helpertext="Twitter Handle" />
                                        </Grid>
                                        <Grid
                                            sx={{
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
                                                    //  disabled={true}
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
                                content="You have successfully updated your company page. View page now"
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

export default UpdateCompany;
