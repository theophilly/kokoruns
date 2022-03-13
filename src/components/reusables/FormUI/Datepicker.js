import React, { useCallback } from 'react';
import { OutlinedInput, Box, Typography, InputAdornment, IconButton } from '@mui/material';

import { useField, useFormikContext } from 'formik';

import MobileDatePicker from '@mui/lab/MobileDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangeIcon from '@mui/icons-material/DateRange';

const isEvent = (event) => event && (event instanceof Event || event.nativeEvent instanceof Event);

const CustomTextfield = (props) => {
    const newProps = { ...props, error: false };
    return (
        <OutlinedInput
            placeholder="dd/mm/yy"
            error={false}
            {...newProps}
            fullWidth="true"
            sx={{ height: '39px', width: '100%', marginTop: '5px', background: 'white', borderRadius: '0px' }}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        onClick={props.inputProps.onClick}
                        style={{ position: 'relative', zIndex: 0 }}
                        aria-label="toggle password visibility"
                        edge="end"
                    >
                        <DateRangeIcon />
                    </IconButton>
                </InputAdornment>
            }
        />
    );
};

const Datepicker = ({ name, helpertext, ...otherProps }) => {
    const [field, mata] = useField(name);
    const { setFieldValue, setFieldTouched } = useFormikContext();

    const onChange = useCallback(
        (eventOrValue) => {
            if (isEvent(eventOrValue)) {
                field.onChange(eventOrValue);
            } else {
                setFieldValue(field.name, eventOrValue);
            }
        },
        [field.name, field.onChange, setFieldValue]
    );

    const onBlur = useCallback(
        (eventOrValue) => {
            if (isEvent(eventOrValue)) {
                field.onBlur(eventOrValue);
            } else {
                setFieldTouched(field.name, true);
            }
        },
        [field.name, field.onBlur, setFieldTouched]
    );

    const configTextfield = {
        ...field,
        ...otherProps,
        type: 'date'
    };

    if (mata && mata.touched && mata.error) {
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
    }

    return (
        <Box>
            <Typography variant="caption">{helpertext}</Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                    {...configTextfield}
                    inputFormat="MM/dd/yyyy"
                    onChange={onChange}
                    onBlur={onBlur}
                    renderInput={(params) => <CustomTextfield {...params} />}
                />

                <Typography style={{ color: '#f44336' }} variant="caption">
                    {configTextfield.helperText}
                </Typography>
            </LocalizationProvider>
        </Box>
    );
};

export default Datepicker;
