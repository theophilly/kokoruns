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
import company_size from '../../../config/company_size.json';
import association_type from '../../../config/association_type.json';

const SetupAssociation = () => {
    const matches = useMediaQuery('(min-width:900px)');
    const theme = useTheme();

    return (
        <Box sx={{ marginTop: '0px', padding: '20px', background: 'white' }}>
            <Grid container spacing={2}>
                <Grid xs={12} item>
                    <Typography sx={{ ...theme.typography.heading }}>association Page Set Up</Typography>
                    <Typography variant="caption">Kindly provide the following information to set up your association page.</Typography>
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
                    <SelectWrapper name="association_type" helpertext="Type of association" options={association_type} />
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
            </Grid>
        </Box>
    );
};

export default SetupAssociation;
