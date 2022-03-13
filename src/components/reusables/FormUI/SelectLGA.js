import React, { useEffect, useState } from 'react';
import { MenuItem, Typography, Select } from '@mui/material';
import { useField, useFormikContext } from 'formik';

// local import
import Allstates from '../../../config/allstate copy.js';

const SelectLGA = ({ name, dependentField, options, helpertext, ...otherProps }) => {
    const [field, meta] = useField(name);
    const { setFieldValue, getFieldMeta } = useFormikContext();
    const state = getFieldMeta(dependentField);

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
                {stateValues.map((item, pos) => {
                    return (
                        <MenuItem
                            sx={{ height: '39px', width: '100%', marginTop: '5px', background: 'white', borderRadius: '0px' }}
                            key={pos}
                            value={item.name}
                        >
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
