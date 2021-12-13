import React from 'react';
import { OutlinedInput, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useField } from 'formik';

const useStyles = makeStyles((theme) => ({
  log_input: {
    minHeight: '150px',
    height: 'auto',
    width: '100%',
    marginTop: '5px',
    background: 'white',
    borderRadius: '0px',
    borderColor: '#C4C4C4',
    padding: '10px',
    '&:focus': {
      outlineColor: theme.palette.primary.main,
    },
  },
}));

const Textarea = ({ name, helpertext, ...otherProps }) => {
  const { log_input } = useStyles();
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    color: 'secondary',
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <Box>
      <Typography variant="caption">{helpertext}</Typography>
      <textarea className={log_input} {...configTextfield} />
      <Typography style={{ color: '#f44336' }} variant="caption">
        {configTextfield.helperText}
      </Typography>
    </Box>
  );
};

export default Textarea;
