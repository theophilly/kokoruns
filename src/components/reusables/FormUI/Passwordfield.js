import React from 'react';
import { OutlinedInput, Box, Typography, InputAdornment, IconButton } from '@mui/material';

import { useField } from 'formik';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Passwordfield = ({ name, helpertext, ...otherProps }) => {
    const [field, mata] = useField(name);
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };

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
                type={values.showPassword ? 'text' : 'password'}
                sx={{ height: '39px', width: '100%', marginTop: '5px', background: 'white', borderRadius: '0px' }}
                {...configTextfield}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                            sx={{ color: '#CCCCCC' }}
                        >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <Typography style={{ color: '#f44336' }} variant="caption">
                {configTextfield.helperText}
            </Typography>
        </Box>
    );
};

export default Passwordfield;
