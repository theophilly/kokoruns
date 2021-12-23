import React from 'react';
import { OutlinedInput, Box, Typography } from '@mui/material';
import { useField } from 'formik';

const Textfield = ({ name, helpertext, ...otherProps }) => {
    const [field, mata] = useField(name);

    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        color: 'secondary'
    };

    if (mata && mata.touched && mata.error) {
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
    }

    return (
        <Box>
            <Typography variant="caption">{helpertext}</Typography>
            <OutlinedInput
                sx={{ height: '39px', width: '100%', marginTop: '5px', background: 'white', borderRadius: '0px' }}
                {...configTextfield}
            />
            <Typography style={{ color: '#f44336' }} variant="caption">
                {configTextfield.helperText}
            </Typography>
        </Box>
    );
};

export default Textfield;
