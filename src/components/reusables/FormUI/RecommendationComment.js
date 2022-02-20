import React from 'react';
import { Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useField, useFormikContext } from 'formik';

const RecommendationComment = ({ name, options, ...otherProps }) => {
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
            <RadioGroup row {...configSelect}>
                <FormControlLabel
                    value="recommend"
                    control={<Radio size="small" />}
                    label={<Typography sx={{ fontSize: '0.9rem' }}>I would recommend Adetola for employment.</Typography>}
                />

                <FormControlLabel
                    value="not_impressed"
                    control={<Radio size="small" />}
                    label={<Typography sx={{ fontSize: '0.9rem' }}>I was not impressed by Adetola during our interactions</Typography>}
                />
                <FormControlLabel
                    value="dont_know"
                    control={<Radio size="small" />}
                    label={<Typography sx={{ fontSize: '0.9rem' }}>I don't know Adetola well enough.</Typography>}
                />
            </RadioGroup>
            <Typography style={{ color: '#f44336' }} variant="caption">
                {configSelect.helperText}
            </Typography>
        </div>
    );
};

export default RecommendationComment;
