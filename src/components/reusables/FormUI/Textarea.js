import React from 'react';
import {
  TextareaAutosize,
  Box,
  Typography,
  OutlinedInput,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useField } from 'formik';

const useStyles = makeStyles((theme) => ({
  log_input: {
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

const Textarea = ({ num_of_rows, name, helpertext, ...otherProps }) => {
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
      <OutlinedInput
        multiline
        rows={num_of_rows}
        className={log_input}
        {...configTextfield}
      />
      <Typography style={{ color: '#f44336' }} variant="caption">
        {configTextfield.helperText}
      </Typography>
    </Box>
  );
};

export default Textarea;
