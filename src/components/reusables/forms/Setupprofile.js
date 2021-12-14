import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { Box, Grid, Typography, OutlinedInput, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Textfield from '../FormUI/Textfield';
import SelectWrapper from '../FormUI/SelectWrapper';
import SelectLGA from '../FormUI/SelectLGA';
import { Formik, Form } from 'formik';
import stateData from '../../../config/stateData.json';
import academicLevel from '../../../config/academicLevel.json';
import genderData from '../../../config/genderData.json';
import employmentType from '../../../config/employmentType.json';
import maritalStatusData from '../../../config/maritalStatusData.json';
import Datepicker from '../FormUI/Datepicker';
import Textarea from '../FormUI/Textarea';
import Checkbox from '../FormUI/Checkbox';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { useField, useFormikContext } from 'formik';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '50px',
    padding: '20px',
    background: 'white',
  },
  customer_info: {
    ...theme.typography.heading,
  },
  language_input: {
    height: '39px',
    width: '100%',
    marginRight: '5px',
    background: 'white',
    borderRadius: '0px',
    '& ::placeholder': {
      fontSize: '.9rem',
    },
  },
  add_button: {
    height: '39px',
    textTransform: 'capitalize',
  },
  tag: {
    background: theme.palette.primary.main,
    cursor: 'pointer',
    color: 'white',
    padding: '10px 20px',
    width: 'max-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  tag_icon: {
    position: 'absolute',
    fontSize: 17,
    color: '#D92627',
    top: 2,
    right: 2,
    zIndex: 2,
  },
}));

const Tag = ({ editTag, text, deleteTag, index }) => {
  const { tag, tag_icon } = useStyles();

  return (
    <div onClick={() => editTag(index)} className={tag}>
      <Typography>{text}</Typography>
      <div onClick={() => deleteTag(index)}>
        <DeleteOutlineRoundedIcon className={tag_icon} />
      </div>
    </div>
  );
};

const Setupprofile = () => {
  const { root, customer_info, language_input, add_button } = useStyles();
  const [input, setInput] = useState('');
  const { setFieldValue, getFieldMeta } = useFormikContext();

  const tagField = getFieldMeta('languages');

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const deleteTag = async (index) => {
    const tagsCopy = [...tagField.value];
    tagsCopy.splice(index, 1);
    await setFieldValue('languages', tagsCopy);
  };

  const editTag = async (id) => {
    const tagsCopy = [...tagField.value];
    const poppedTag = tagsCopy[id];
    tagsCopy.splice(id, 1);

    // await setTags(tagsCopy);
    setInput(poppedTag);
    await setFieldValue('languages', tagsCopy);
  };

  const onAdd = async (e) => {
    // e.preventDefault();

    const trimmedInput = input.trim();

    if (trimmedInput.length && !tagField.value.includes(trimmedInput)) {
      // await setTags((prevState) => [...prevState, trimmedInput]);
      setInput('');
      await setFieldValue('languages', [...tagField.value, trimmedInput]);
    }
  };

  return (
    <div className={root}>
      <Grid container spacing={2}>
        <Grid xs={12} item>
          <Typography className={customer_info}>
            Personal Information
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Textfield
            //  disabled={!!user.firstName}
            name="firstName"
            helpertext="First Name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Textfield
            //  disabled={!!user.lastName}
            name="lastName"
            helpertext="Last Name"
          />
        </Grid>
        {/* gender and marital status */}

        <Grid item xs={12} md={6}>
          <SelectWrapper
            name="gender"
            helpertext="Gender"
            options={genderData}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectWrapper
            name="maritalStatus"
            helpertext="Marital Status"
            options={maritalStatusData}
          />
        </Grid>

        {/* email address and phone */}
        <Grid item xs={12} md={6}>
          <Textfield name="email" helpertext="Email Address" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Textfield name="phone" helpertext="Phone Number" />
        </Grid>

        {/* date of birth and  profession*/}

        <Grid item xs={12} md={6}>
          <Datepicker name="dob" helpertext="Date of Birth" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Textfield name="profession" helpertext="Profession" />
        </Grid>

        {/* academic level and location */}
        <Grid item xs={12} md={6}>
          <SelectWrapper
            name="academicLevel"
            helpertext="Academic Level"
            options={academicLevel}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectWrapper
            name="state"
            helpertext="Current Location"
            options={stateData}
          />
        </Grid>
        {/* Lga and space */}
        <Grid item xs={12} md={6}>
          <SelectLGA dependentField="state" name="lga" helpertext="LGA" />
        </Grid>
        <Grid item xs={12} md={6}></Grid>

        {/* about */}
        <Grid item xs={12}>
          <Textarea name="about" helpertext="About" />
        </Grid>

        <Grid marginTop="40px" xs={12} item>
          <Typography className={customer_info}>
            Professional Information
          </Typography>
        </Grid>
        {/* current employer and address */}
        <Grid item xs={12} md={6}>
          <Textfield name="current_employer" helpertext="Current Employer" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Textfield name="employer_address" helpertext="Address of Employer" />
        </Grid>

        {/* employment type and empolyment status */}
        <Grid item xs={12} md={6}>
          <SelectWrapper
            name="employment_type*"
            helpertext="Employment Type*"
            options={employmentType}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Textfield name="preferred_lga" helpertext="Preferred LGA" />
        </Grid>

        {/* preferred job state and LGA */}
        <Grid item xs={12} md={6}>
          <SelectWrapper
            name="preffered_jl"
            helpertext="Preffered Job Location"
            options={stateData}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectLGA
            dependentField="preffered_jl"
            name="preffered_jlga"
            helpertext="Preferred LGA"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Textfield name="postalCode" helpertext="Postal code" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Textfield name="phone" helpertext="Phone" />
        </Grid>
        <Grid marginTop="40px" xs={12} item>
          <Typography className={customer_info}>Disability*</Typography>
        </Grid>
        <Grid item xs={12}>
          <Checkbox
            name="disablility"
            helpertext="Do you have any disability?*"
          />
        </Grid>
        <Grid
          //  border="1px solid red"
          marginTop="40px"
          xs={12}
          item
        >
          <Typography className={customer_info}>Languages Spoken</Typography>
        </Grid>
        <Grid xs={12} item>
          <Box display="flex" gap="10px" flexWrap="wrap">
            {tagField.value.map((item, index) => (
              <Tag
                index={index}
                editTag={editTag}
                deleteTag={deleteTag}
                text={item}
              />
            ))}
          </Box>
        </Grid>
        <Grid xs={12} md={6} item>
          <Box alignItems="center" display="flex">
            <OutlinedInput
              className={language_input}
              value={input}
              placeholder="Enter a Language"
              onChange={onChange}
              fullWidth
            />
            <Button
              startIcon={<AddIcon />}
              disableElevation
              variant="contained"
              className={add_button}
              onClick={onAdd}
            >
              Add
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Setupprofile;
