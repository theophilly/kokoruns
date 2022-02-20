import React from 'react';
import { Box, Typography, OutlinedInput, useTheme } from '@mui/material';
import { useField } from 'formik';

const Textarea = ({ num_of_rows, name, helpertext, ...otherProps }) => {
    const [field, mata] = useField(name);
    const theme = useTheme();

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
                multiline
                rows={num_of_rows}
                sx={{
                    height: 'auto',
                    width: '100%',
                    marginTop: '5px',
                    background: 'white',
                    borderRadius: '0px',
                    borderColor: '#C4C4C4',
                    padding: '10px',
                    '&:focus': {
                        outlineColor: theme.palette.primary.main
                    }
                }}
                {...configTextfield}
            />
            <Typography style={{ color: '#f44336' }} variant="caption">
                {configTextfield.helperText}
            </Typography>
        </Box>
    );
};

export default Textarea;
