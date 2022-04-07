import React, { useEffect, useState } from 'react';
import { MenuItem, Typography, Select } from '@mui/material';
import { useField, useFormikContext } from 'formik';

// local import
import Allstates from '../../../config/allstate copy.js';

const IndustryField = ({ name, dependentField, options, dependentOptions, helpertext, ...otherProps }) => {
    const [field, meta] = useField(name);
    const [firstRender, setFirstRender] = useState(true);
    const { setFieldValue, getFieldMeta } = useFormikContext();
    const state = getFieldMeta(dependentField);
    const state2 = getFieldMeta('company_industry');

    const [stateValues, setStateValues] = useState([]);

    useEffect(() => {
        setStateValues(state.value === '' ? [] : dependentOptions[state.value]);
    }, [state.value]);

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
        } else {
            setFieldValue('company_industry3', '');
        }
    }, [state2.value]);

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

export default IndustryField;
