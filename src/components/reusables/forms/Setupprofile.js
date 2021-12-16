import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { Box, Grid, Typography, OutlinedInput, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Textfield from '../FormUI/Textfield';
import SelectWrapper from '../FormUI/SelectWrapper';
import SelectLGA from '../FormUI/SelectLGA';
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
  field_cell_left: {
    paddingRight: '40px',
    '@media (max-width: 900px)': {
      padding: '0px',
    },
  },
  field_cell_right: {
    paddingLeft: '40px !important',
    //   border: '1px solid red',
    '@media (max-width: 900px)': {
      padding: '0px',
    },
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

const Setupprofile = ({ setDis_ability }) => {
  const {
    root,
    customer_info,
    language_input,
    add_button,
    field_cell_left,
    field_cell_right,
  } = useStyles();
  const [input, setInput] = useState('');

  const { setFieldValue, getFieldMeta } = useFormikContext();

  const tagField = getFieldMeta('languages');
  const disablilityField = getFieldMeta('disablility');
  setDis_ability(disablilityField.value);

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

    setInput(poppedTag);
    await setFieldValue('languages', tagsCopy);
  };

  const onAdd = async (e) => {
    const trimmedInput = input.trim();

    if (
      trimmedInput.length &&
      !tagField.value.includes(trimmedInput.toLowerCase())
    ) {
      setInput('');
      await setFieldValue('languages', [
        ...tagField.value,
        trimmedInput.toLowerCase(),
      ]);
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
        <Grid className={field_cell_left} item xs={12} md={6}>
          <Textfield
            //  disabled={!!user.firstName}
            name="firstName"
            helpertext="First Name"
          />
        </Grid>
        <Grid className={field_cell_right} item xs={12} md={6}>
          <Textfield
            //  disabled={!!user.lastName}
            name="lastName"
            helpertext="Last Name"
          />
        </Grid>
        {/* gender and marital status */}

        <Grid className={field_cell_left} item xs={12} md={6}>
          <SelectWrapper
            name="gender"
            helpertext="Gender"
            options={genderData}
          />
        </Grid>
        <Grid className={field_cell_right} item xs={12} md={6}>
          <SelectWrapper
            name="maritalStatus"
            helpertext="Marital Status"
            options={maritalStatusData}
          />
        </Grid>

        {/* email address and phone */}
        <Grid className={field_cell_left} item xs={12} md={6}>
          <Textfield name="email" helpertext="Email Address" />
        </Grid>
        <Grid className={field_cell_right} item xs={12} md={6}>
          <Textfield name="phone" helpertext="Phone Number" />
        </Grid>

        {/* date of birth and  profession*/}

        <Grid className={field_cell_left} item xs={12} md={6}>
          <Datepicker name="dob" helpertext="Date of Birth" />
        </Grid>
        <Grid className={field_cell_right} item xs={12} md={6}>
          <Textfield name="profession" helpertext="Profession" />
        </Grid>

        {/* academic level and location */}
        <Grid className={field_cell_left} item xs={12} md={6}>
          <SelectWrapper
            name="academicLevel"
            helpertext="Academic Level"
            options={academicLevel}
          />
        </Grid>
        <Grid className={field_cell_right} item xs={12} md={6}>
          <SelectWrapper
            name="state"
            helpertext="Current Location"
            options={stateData}
          />
        </Grid>
        {/* Lga and space */}
        <Grid className={field_cell_left} item xs={12} md={6}>
          <SelectLGA dependentField="state" name="lga" helpertext="LGA" />
        </Grid>
        <Grid item xs={12} md={6}></Grid>

        {/* about */}
        <Grid item xs={12}>
          <Textarea num_of_rows={8} name="about" helpertext="About" />
        </Grid>

        <Grid marginTop="40px" xs={12} item>
          <Typography className={customer_info}>
            Professional Information
          </Typography>
        </Grid>
        {/* current employer and address */}
        <Grid className={field_cell_left} item xs={12} md={6}>
          <Textfield name="current_employer" helpertext="Current Employer" />
        </Grid>
        <Grid className={field_cell_right} item xs={12} md={6}>
          <Textfield name="employer_address" helpertext="Address of Employer" />
        </Grid>

        {/* employment type and empolyment status */}
        <Grid className={field_cell_left} item xs={12} md={6}>
          <SelectWrapper
            name="employment_type"
            helpertext="Employment Type*"
            options={employmentType}
          />
        </Grid>
        <Grid className={field_cell_right} item xs={12} md={6}>
          <Textfield
            name="employment_status"
            helpertext="Present Employment Status*"
          />
        </Grid>

        {/* preferred job state and LGA */}
        <Grid className={field_cell_left} item xs={12} md={6}>
          <SelectWrapper
            name="preffered_jl"
            helpertext="Preffered Job Location"
            options={stateData}
          />
        </Grid>
        <Grid className={field_cell_right} item xs={12} md={6}>
          <SelectLGA
            dependentField="preffered_jl"
            name="preffered_jlga"
            helpertext="Preferred LGA"
          />
        </Grid>

        {/* languages spoken */}
        <Grid marginTop="40px" xs={12} item>
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

        {/* disabilities */}
        <Grid marginTop="40px" xs={12} item>
          <Typography className={customer_info}>Disability*</Typography>
        </Grid>
        <Grid item xs={12}>
          <Checkbox
            name="disablility"
            helpertext="Do you have any disability?*"
          />
        </Grid>

        {/* give Details */}
        {disablilityField.value && (
          <Grid item xs={12}>
            <Textarea
              num_of_rows={3}
              name="disability_details"
              helpertext="Give Details"
            />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Setupprofile;
