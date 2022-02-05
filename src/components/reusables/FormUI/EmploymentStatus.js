import React from 'react';
import { Typography, RadioGroup, FormControlLabel, Radio, Box, useMediaQuery } from '@mui/material';
import { useField, useFormikContext } from 'formik';

const EmploymentStatus = ({ name, options, ...otherProps }) => {
    const matches = useMediaQuery('(min-width:794px)');
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
        onChange: handleChange
    };

    if (meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }

    return (
        <div>
            <RadioGroup {...configSelect}>
                <Box sx={{ display: 'flex', gap: matches ? '200px' : '0px', flexWrap: 'wrap' }}>
                    <FormControlLabel
                        value="self_employed"
                        control={<Radio size="small" />}
                        label={<Typography sx={{ fontSize: '0.9rem' }}>Self Employed</Typography>}
                    />

                    <FormControlLabel
                        value="employed"
                        control={<Radio size="small" />}
                        label={<Typography sx={{ fontSize: '0.9rem' }}>Employed</Typography>}
                    />
                    <FormControlLabel
                        value="unemployed"
                        control={<Radio size="small" />}
                        label={<Typography sx={{ fontSize: '0.9rem' }}>Unemployed</Typography>}
                    />
                </Box>
            </RadioGroup>
            <Typography style={{ color: '#f44336' }} variant="caption">
                {configSelect.helperText}
            </Typography>
        </div>
    );
};

export default EmploymentStatus;
