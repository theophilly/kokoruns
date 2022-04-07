import React from 'react';
import { useFormikContext } from 'formik';

// material-ui
import { Box, Grid, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

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
import company from '../../../config/company.json';

const SetupCompany = () => {
    const matches = useMediaQuery('(min-width:900px)');
    const theme = useTheme();

    //  const { getFieldMeta } = useFormikContext();

    return (
        <Box sx={{ marginTop: '0px', padding: '20px', background: 'white' }}>
            <Grid container spacing={2}>
                <Grid xs={12} item>
                    <Typography sx={{ ...theme.typography.heading }}>company Page Set Up</Typography>
                    <Typography variant="caption">Kindly provide the following information to set up your company page.</Typography>
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
                    <SelectWrapper name="company_type" helpertext="Company Type" options={company} />
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
                    <SelectLGA dependentField="company_state" name="company_lga" helpertext="Local Government Area" />
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
            </Grid>
        </Box>
    );
};

export default SetupCompany;
