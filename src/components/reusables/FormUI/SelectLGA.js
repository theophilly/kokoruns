import React, { useEffect, useState } from 'react';
import { MenuItem, Typography, Select } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useField, useFormikContext } from 'formik';
import Allstates from '../../../config/allstate copy.js';

const useStyles = makeStyles(() => ({
  select_input: {
    height: '39px',
    width: '100%',
    marginTop: '5px',
    background: 'white',
    borderRadius: '0px',
  },
}));

const SelectLGA = ({
  name,
  dependentField,
  options,
  helpertext,
  ...otherProps
}) => {
  const { select_input } = useStyles();
  const [field, meta] = useField(name);
  const { setFieldValue, getFieldMeta } = useFormikContext();
  const state = getFieldMeta(dependentField);
  const test = getFieldMeta('disablility');
  const [stateValues, setStateValues] = useState([]);

  useEffect(() => {
    setStateValues(state.value === '' ? [] : Allstates[state.value]);
  }, [state.value]);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    variant: 'outlined',
    color: 'secondary',
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helpertext = meta.error;
  }

  return (
    <div>
      <Typography variant="caption">{helpertext}</Typography>
      <Select className={select_input} {...configSelect}>
        {stateValues.map((item, pos) => {
          return (
            <MenuItem className={select_input} key={pos} value={item.name}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
      <Typography style={{ color: '#f44336' }} variant="caption">
        {configSelect.helpertext}
      </Typography>
    </div>
  );
};

export default SelectLGA;
