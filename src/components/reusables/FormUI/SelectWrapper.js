import React from 'react';
import { MenuItem, Typography, Select } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useField, useFormikContext } from 'formik';

const useStyles = makeStyles(() => ({
  select_input: {
    height: '39px',
    width: '100%',
    marginTop: '5px',
    background: 'white',
    borderRadius: '0px',
  },
}));

const SelectWrapper = ({ name, options, helpertext, ...otherProps }) => {
  const { select_input } = useStyles();
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

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
        {Object.keys(options).map((item, pos) => {
          return (
            <MenuItem className={select_input} key={pos} value={item}>
              {options[item]}
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

export default SelectWrapper;
