import React from 'react';
import { MenuItem, Typography, Select } from '@mui/material';
import { useField, useFormikContext } from 'formik';

const SelectWrapper = ({ name, options, helpertext, ...otherProps }) => {
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
        configSelect.helpertext = meta.error;
    }

    return (
        <div>
            <Typography variant="caption">{helpertext}</Typography>
            <Select sx={{ height: '39px', width: '100%', marginTop: '5px', background: 'white', borderRadius: '0px' }} {...configSelect}>
                {Object.keys(options).map((item, pos) => {
                    return (
                        <MenuItem
                            sx={{ height: '39px', width: '100%', marginTop: '5px', background: 'white', borderRadius: '0px' }}
                            key={pos}
                            value={item}
                        >
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
