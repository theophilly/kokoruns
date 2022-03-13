import React from 'react';
import { Box, Grid, useMediaQuery } from '@mui/material';
import Teamimage from '../../../components/reusables/forms/Teamsimage';
import Textfield from '../../../components/reusables/FormUI/Textfield';
import SelectWrapper from '../../../components/reusables/FormUI/SelectWrapper';
import stateData from '../../../config/stateData';
import days from '../../../config/days';
import TimePicker from '../../../components/reusables/FormUI/TimePicker';

const CreateCompanyBranchForm = React.forwardRef(({ name }, ref) => {
    const matches = useMediaQuery('(min-width:900px)');
    return (
        <Box>
            <Grid container>
                <Grid xs={12}>
                    <Teamimage name="branch_image" ref={ref} />
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
                    <Textfield name="branch_name" helpertext="Branch Name" />
                </Grid>
                <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                    <SelectWrapper name="branch_state" helpertext="Branch State" options={stateData} />
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
                    <Textfield name="branch_lga" helpertext="City" />
                </Grid>
                <Grid sx={{ paddingLeft: matches ? '40px' : '0px', marginTop: '10px' }} item xs={12} md={6}>
                    {/* <TimePicker name="start_date" helpertext="Start Date" /> */}
                    <Textfield name="branch_address" helpertext="Branch Address" />
                </Grid>

                {/* opening days */}
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
                    <SelectWrapper name="opening_week_day" helpertext="Week start day" options={days} />
                </Grid>
                <Grid sx={{ paddingLeft: matches ? '40px' : '0px', marginTop: '10px' }} item xs={12} md={6}>
                    <SelectWrapper name="closing_week_day" helpertext="Week Ends day" options={days} />
                </Grid>

                {/* opening time */}
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
                    <TimePicker name="opening_time" helpertext="Opening Time" />
                </Grid>
                <Grid sx={{ paddingLeft: matches ? '40px' : '0px', marginTop: '10px' }} item xs={12} md={6}>
                    <TimePicker name="closing_time" helpertext="Closing Time" />
                </Grid>
                {/*  */}
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
                    <Textfield name="branch_phone" helpertext="Contact Number" />
                </Grid>
            </Grid>
        </Box>
    );
});

export default CreateCompanyBranchForm;
