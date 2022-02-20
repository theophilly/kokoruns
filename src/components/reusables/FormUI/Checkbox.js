import React from 'react';
import { Typography, Box, Switch, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useField, useFormikContext } from 'formik';

const useStyles = makeStyles((theme) => ({
    deliverybox: {
        flex: '1',
        border: '1px solid #C4C4C4',
        borderRadius: '10px',
        padding: '15px 20px'
    },
    switch_container: {
        display: 'flex',
        alignItems: 'center'
    },
    helper_text: (props) => props.theme.typography.heading,

    switch_class: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        marginLeft: '10px',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)'
            }
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(12px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: (props) => (props.theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff')
                }
            }
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: (props) =>
                props.theme.transitions.create(['width'], {
                    duration: 200
                })
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor: (props) => (props.theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)'),
            boxSizing: 'border-box'
        }
    }
}));

const Checkbox = ({ name, helpertext, options, ...otherProps }) => {
    const theme = useTheme();
    const { switch_class, switch_container } = useStyles({ theme });
    const { getFieldMeta } = useFormikContext();
    const [field, meta] = useField(name);
    const field_meta = getFieldMeta(name);

    const configSelect = {
        ...field,
        ...otherProps,
        variant: 'outlined',
        color: 'secondary',
        checked: field_meta.value
    };

    if (meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }

    return (
        <Box>
            <Box className={switch_container}>
                <Typography variant="caption">{helpertext}</Typography>
                <Switch {...configSelect} className={switch_class} inputProps={{ 'aria-label': 'controlled' }} />
            </Box>
            <Typography style={{ color: '#f44336' }} variant="caption">
                {configSelect.helperText}
            </Typography>
        </Box>
    );
};

export default Checkbox;
