import React from 'react';
import { useFormikContext } from 'formik';

// material-ui
import { Box, Grid, Typography, OutlinedInput, Button, useTheme } from '@mui/material';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import AddIcon from '@mui/icons-material/Add';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
import Textfield from '../FormUI/Textfield';
import SelectWrapper from '../FormUI/SelectWrapper';
import Datepicker from '../FormUI/Datepicker';
import Textarea from '../FormUI/Textarea';
import AboutTextarea from '../FormUI/AboutTextarea';
import Checkbox from '../FormUI/Checkbox';
import SelectLGA from '../FormUI/SelectLGA';
import stateData from '../../../config/stateData.json';
import academicLevel from '../../../config/academicLevel.json';
import genderData from '../../../config/genderData.json';
import age_range from '../../../config/age_range.json';
import employmentType from '../../../config/employmentType.json';
import maritalStatusData from '../../../config/maritalStatusData.json';
import EmploymentStatus from '../FormUI/EmploymentStatus';
import MultipleSelect from '../FormUI/MultipleSelect';
import languages from '../../../config/languages';
import professions from '../../../config/professions';

const Tag = ({ editTag, text, deleteTag, index }) => {
    const theme = useTheme();

    return (
        <Box
            onClick={() => editTag(index)}
            sx={{
                background: theme.palette.primary.main,
                cursor: 'pointer',
                color: 'white',
                padding: '10px 20px',
                width: 'max-content',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative'
            }}
        >
            <Typography>{text}</Typography>
            <Box onClick={() => deleteTag(index)}>
                <DeleteOutlineRoundedIcon sx={{ position: 'absolute', fontSize: 17, color: '#D92627', top: 2, right: 2, zIndex: 2 }} />
            </Box>
        </Box>
    );
};

const Setupprofile = ({ setDis_ability, setEmployment }) => {
    const matches = useMediaQuery('(min-width:900px)');
    const theme = useTheme();

    const { getFieldMeta } = useFormikContext();

    const disablilityField = getFieldMeta('disablility');
    const employmentStatus = getFieldMeta('employment_status');
    setDis_ability(disablilityField.value);
    setEmployment(employmentStatus.value);

    return (
        <Box sx={{ marginTop: '50px', padding: '20px', background: 'white' }}>
            <Grid container spacing={2}>
                <Grid xs={12} item>
                    <Typography sx={{ ...theme.typography.heading }}>Personal Information</Typography>
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
                    <Textfield name="firstName" helpertext="First Name" />
                </Grid>
                <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                    <Textfield name="lastName" helpertext="Last Name" />
                </Grid>
                {/* gender and marital status */}

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
                    <SelectWrapper name="gender" helpertext="Gender" options={genderData} />
                </Grid>
                <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                    <SelectWrapper name="maritalStatus" helpertext="Marital Status" options={maritalStatusData} />
                </Grid>

                {/* email address and phone */}
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
                    <Textfield name="email" helpertext="Email Address" />
                </Grid>
                <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                    <Textfield name="phone" helpertext="Phone Number" />
                </Grid>

                {/* date of birth and  profession*/}

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
                    {/* <Datepicker name="dob" helpertext="Date of Birth" /> */}
                    <SelectWrapper name="age_range" helpertext="Age Range" options={age_range} />
                </Grid>
                <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                    <Textfield name="profession" helpertext="Profession" />
                </Grid>

                {/* academic level and location */}
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
                    <SelectWrapper name="academicLevel" helpertext="Academic Level" options={academicLevel} />
                </Grid>
                <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                    <SelectWrapper name="state" helpertext="Current State of Residence" options={stateData} />
                </Grid>
                {/* Lga and space */}
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
                    <SelectLGA dependentField="state" name="lga" helpertext="Current Local Government of Residence" />
                </Grid>
                <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                    <Textfield name="website" helpertext="Website" />
                </Grid>

                {/* about */}
                <Grid item xs={12}>
                    <AboutTextarea num_of_rows={7} name="about" helpertext="About" />
                </Grid>

                <Grid marginTop="40px" xs={12} item>
                    <Typography sx={{ ...theme.typography.heading }}>Occupational Information</Typography>
                </Grid>

                {/* languages spoken */}

                <Grid xs={12} item>
                    <MultipleSelect num={2} data={professions} label="Select Other Professions" name="other_professions" />
                </Grid>

                <Grid mt="10px" xs={12} item>
                    <Typography variant="caption">Present Employment Status*</Typography>
                    <EmploymentStatus helpertext="Present Employment Status*" name="employment_status" />
                </Grid>
                {/* current employer and address */}
                {employmentStatus.value === 'employed' && (
                    <>
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
                            <Textfield name="current_employer" helpertext="Current Employer" />
                        </Grid>
                        <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                            <Textfield name="employer_address" helpertext="Address of Employer" />
                        </Grid>
                    </>
                )}
                {employmentStatus.value === 'unemployed' && (
                    <>
                        {/* employment type and empolyment status */}
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
                            <SelectWrapper name="employment_type" helpertext="Preffered Employment Type*" options={employmentType} />
                        </Grid>

                        {/* preferred job state and LGA */}
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
                            <SelectWrapper name="preffered_jl" helpertext="Preffered Job Location" options={stateData} />
                        </Grid>
                        <Grid sx={{ paddingRight: matches ? '40px' : '0px' }} item xs={12} md={6}>
                            <SelectLGA dependentField="preffered_jl" name="preffered_jlga" helpertext="Preferred LGA" />
                        </Grid>
                    </>
                )}

                {/* languages spoken */}
                <Grid marginTop="10px" xs={12} item>
                    <Typography mb="10px" sx={{ ...theme.typography.heading }}>
                        Languages Spoken
                    </Typography>

                    <MultipleSelect num={0} data={languages} label="Select Languages" name="languages" />
                </Grid>

                {/* disabilities */}
                <Grid marginTop="0px" xs={12} item>
                    <Typography sx={{ ...theme.typography.heading }}>Disability*</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Checkbox name="disablility" helpertext="Do you have any disability?*" />
                </Grid>

                {/* give Details */}
                {disablilityField.value && (
                    <Grid item xs={12}>
                        <Textarea num_of_rows={3} name="disability_details" helpertext="Give Details" />
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default Setupprofile;
