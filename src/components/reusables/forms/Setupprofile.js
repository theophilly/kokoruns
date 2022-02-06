import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useFormikContext } from 'formik';

// material-ui
import { Box, Grid, Typography, OutlinedInput, Button, useTheme } from '@mui/material';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import AddIcon from '@mui/icons-material/Add';
import Transi from '../../../ui-component/extended/Transitions';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
import Textfield from '../FormUI/Textfield';
import SelectWrapper from '../FormUI/SelectWrapper';
import Datepicker from '../FormUI/Datepicker';
import Textarea from '../FormUI/Textarea';
import Checkbox from '../FormUI/Checkbox';
import SelectLGA from '../FormUI/SelectLGA';
import stateData from '../../../config/stateData.json';
import academicLevel from '../../../config/academicLevel.json';
import genderData from '../../../config/genderData.json';
import employmentType from '../../../config/employmentType.json';
import maritalStatusData from '../../../config/maritalStatusData.json';
import EmploymentStatus from '../FormUI/EmploymentStatus';

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

    const [input, setInput] = useState('');
    const [profInput, setProfInput] = useState('');

    const { setFieldValue, getFieldMeta } = useFormikContext();

    const tagField = getFieldMeta('languages');
    const profField = getFieldMeta('other_professions');
    const disablilityField = getFieldMeta('disablility');
    const employmentStatus = getFieldMeta('employment_status');
    setDis_ability(disablilityField.value);
    setEmployment(employmentStatus.value);

    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
    };
    const onProfChange = (e) => {
        const { value } = e.target;
        setProfInput(value);
    };

    const deleteTag = async (index) => {
        const tagsCopy = [...tagField.value];
        tagsCopy.splice(index, 1);
        await setFieldValue('languages', tagsCopy);
    };

    const deleteProfTag = async (index) => {
        const tagsCopy = [...profField.value];
        tagsCopy.splice(index, 1);
        await setFieldValue('other_professions', tagsCopy);
    };

    const editTag = async (id) => {
        const tagsCopy = [...tagField.value];
        const poppedTag = tagsCopy[id];
        tagsCopy.splice(id, 1);

        setInput(poppedTag);
        await setFieldValue('languages', tagsCopy);
    };
    const editProfTag = async (id) => {
        const tagsCopy = [...profField.value];
        const poppedTag = tagsCopy[id];
        tagsCopy.splice(id, 1);

        setProfInput(poppedTag);
        await setFieldValue('other_professions', tagsCopy);
    };

    const onAdd = async (e) => {
        const trimmedInput = input.trim();

        if (
            trimmedInput.length &&
            !tagField.value.includes(trimmedInput.charAt(0).toUpperCase() + trimmedInput.slice(1)) &&
            tagField.value.length < 4
        ) {
            setInput('');
            await setFieldValue('languages', [...tagField.value, trimmedInput.charAt(0).toUpperCase() + trimmedInput.slice(1)]);
        }
    };

    const onProfAdd = async (e) => {
        const trimmedInput = profInput.trim();

        if (
            trimmedInput.length &&
            !profField.value.includes(trimmedInput.charAt(0).toUpperCase() + trimmedInput.slice(1)) &&
            profField.value.length < 4
        ) {
            setProfInput('');
            await setFieldValue('other_professions', [...profField.value, trimmedInput.charAt(0).toUpperCase() + trimmedInput.slice(1)]);
        }
    };

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
                    <Textfield
                        //  disabled={!!user.firstName}
                        name="firstName"
                        helpertext="First Name"
                    />
                </Grid>
                <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                    <Textfield
                        //  disabled={!!user.lastName}
                        name="lastName"
                        helpertext="Last Name"
                    />
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
                    <Datepicker name="dob" helpertext="Date of Birth" />
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
                    <SelectWrapper name="state" helpertext="Current Location" options={stateData} />
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
                    <SelectLGA dependentField="state" name="lga" helpertext="LGA" />
                </Grid>
                <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                    <Textfield name="website" helpertext="Website" />
                </Grid>

                {/* about */}
                <Grid item xs={12}>
                    <Textarea num_of_rows={8} name="about" helpertext="About" />
                </Grid>

                <Grid marginTop="40px" xs={12} item>
                    <Typography sx={{ ...theme.typography.heading }}>Occupational Information</Typography>
                </Grid>
                {/* languages spoken */}
                <Grid marginTop="10px" xs={12} item>
                    <Typography sx={{ fontWeight: '500' }}>add other occupations</Typography>
                </Grid>
                {profField.value.length > 0 && (
                    <Grid xs={12} item>
                        <Box display="flex" gap="10px" flexWrap="wrap">
                            {profField.value.map((item, index) => (
                                <Tag index={index} editTag={editProfTag} deleteTag={deleteProfTag} text={item} />
                            ))}
                        </Box>
                    </Grid>
                )}
                <Grid xs={12} md={6} item>
                    <Box alignItems="center" display="flex">
                        <OutlinedInput
                            sx={{
                                height: '39px',
                                width: '100%',
                                marginRight: '5px',
                                background: 'white',
                                borderRadius: '0px',
                                '& ::placeholder': {
                                    fontSize: '.9rem'
                                }
                            }}
                            value={profInput}
                            placeholder="Enter an ocupation"
                            onChange={onProfChange}
                            fullWidth
                        />
                        <Button
                            startIcon={<AddIcon />}
                            disableElevation
                            variant="contained"
                            sx={{ height: '39px', textTransform: 'capitalize' }}
                            onClick={onProfAdd}
                        >
                            Add
                        </Button>
                    </Box>
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
                    <Typography sx={{ ...theme.typography.heading }}>Languages Spoken</Typography>
                </Grid>
                {tagField.value.length > 0 && (
                    <Grid xs={12} item>
                        <Box display="flex" gap="10px" flexWrap="wrap">
                            {tagField.value.map((item, index) => (
                                <Tag index={index} editTag={editTag} deleteTag={deleteTag} text={item} />
                            ))}
                        </Box>
                    </Grid>
                )}
                <Grid xs={12} md={6} item>
                    <Box alignItems="center" display="flex">
                        <OutlinedInput
                            sx={{
                                height: '39px',
                                width: '100%',
                                marginRight: '5px',
                                background: 'white',
                                borderRadius: '0px',
                                '& ::placeholder': {
                                    fontSize: '.9rem'
                                }
                            }}
                            value={input}
                            placeholder="Enter a Language"
                            onChange={onChange}
                            fullWidth
                        />
                        <Button
                            startIcon={<AddIcon />}
                            disableElevation
                            variant="contained"
                            sx={{ height: '39px', textTransform: 'capitalize' }}
                            onClick={onAdd}
                        >
                            Add
                        </Button>
                    </Box>
                    <Typography style={{ color: '#f44336' }} variant="caption">
                        {tagField.error}
                    </Typography>
                </Grid>

                {/* disabilities */}
                <Grid marginTop="40px" xs={12} item>
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
