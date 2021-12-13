import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { Box, Grid, Typography, CircularProgress, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as Yup from 'yup';
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

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '50px',
    padding: '20px',
    background: 'white',
  },
  customer_info: {
    ...theme.typography.heading,
  },
}));

const Setupprofile = () => {
  const { root, customer_info } = useStyles();

  return (
    <Box
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('First Name is Required'),
        lastName: Yup.string().required('Last Name is Required'),
        address: Yup.string().required('Address is Required'),
        //  postalCode: Yup.string().required('postalCode is Required'),
        city: Yup.string().required('city is Required'),
        lga: Yup.string().required('city is Required'),
        dob: Yup.date().required('city is Required'),
        postalCode: Yup.number()
          .integer()
          .typeError('Please enter a valid postal number')
          .required('Postal code is Required'),
        phone: Yup.number()
          .integer()
          .typeError('Please enter a valid phone number')
          .required('Phone is Required'),
        state: Yup.string().required('state is required'),
        disablility: Yup.boolean().required('please tell us your status'),
      })}
      className={root}
    >
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
      </Grid>
    </Box>
  );
};

export default Setupprofile;
