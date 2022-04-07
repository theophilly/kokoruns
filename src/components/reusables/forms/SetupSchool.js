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
import school_type from '../../../config/school_type.json';

const SetupSchool = ({ setDis_ability, setEmployment }) => {
    const matches = useMediaQuery('(min-width:900px)');
    const theme = useTheme();

    //  const { getFieldMeta } = useFormikContext();

    return (
        <Box sx={{ marginTop: '0px', padding: '20px', background: 'white' }}>
            <Grid container spacing={2}>
                <Grid xs={12} item>
                    <Typography sx={{ ...theme.typography.heading }}>School Page Set Up</Typography>
                    <Typography variant="caption">Kindly provide the following information to set up your school page.</Typography>
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

export default SetupSchool;
