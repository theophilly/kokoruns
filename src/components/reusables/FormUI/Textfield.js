import React from 'react';
import { OutlinedInput, Box, Typography, InputAdornment } from '@mui/material';
import { useField } from 'formik';

const NairaIcon = () => {
    return (
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.4058 8.84141H13.2217V6.74233H15.4058C15.734 6.74233 16 6.47656 16 6.14832C16 5.82004 15.734 5.55412 15.4058 5.55412H13.2217V2.64152C13.2217 2.21636 13.1377 1.9043 12.9721 1.71421C12.8147 1.53337 12.6077 1.44922 12.3211 1.44922C12.0476 1.44922 11.8485 1.53279 11.6941 1.7125C11.5304 1.90279 11.4473 2.21543 11.4473 2.64172V5.55447H7.33893L5.59208 2.91109C5.44258 2.67518 5.30201 2.4542 5.1655 2.24209C5.04259 2.05106 4.92272 1.89553 4.80949 1.7794C4.70925 1.67658 4.59502 1.59701 4.46142 1.53585C4.33536 1.4783 4.17509 1.44941 3.98548 1.44941C3.74364 1.44941 3.52411 1.51567 3.31389 1.65179C3.10588 1.78643 2.96208 1.95289 2.87426 2.16071C2.79717 2.35822 2.75638 2.66087 2.75638 3.05153V5.55428H0.593977C0.26586 5.55431 0 5.82023 0 6.14848C0 6.47672 0.26586 6.74249 0.594009 6.74249H2.75642V8.8418H0.594009C0.26586 8.8418 0 9.10766 0 9.436C0 9.76415 0.26586 10.0298 0.594009 10.0298H2.75642V13.3553C2.75642 13.7678 2.84311 14.0767 3.01483 14.273C3.17813 14.4602 3.38518 14.5471 3.66635 14.5471C3.93763 14.5471 4.14307 14.4598 4.31343 14.2723C4.48789 14.0802 4.57613 13.7715 4.57613 13.3553V10.0298H8.29378L10.3056 13.1147C10.4455 13.3187 10.5899 13.5245 10.734 13.7263C10.8639 13.9075 11.0057 14.0672 11.1553 14.2006C11.2901 14.3213 11.4345 14.4097 11.5847 14.4636C11.7392 14.5193 11.9199 14.5475 12.1203 14.5475C12.6644 14.5475 13.2216 14.3809 13.2216 13.1457V10.0298H15.4057C15.7339 10.0298 15.9999 9.76376 15.9999 9.43561C16 9.10746 15.734 8.84141 15.4058 8.84141ZM11.4473 6.74229V8.84138H9.51152L8.12448 6.74229H11.4473ZM4.57616 4.33037L5.37445 5.55412H4.57616V4.33037ZM4.57616 8.84141V6.74233H6.14959L7.51874 8.84141H4.57616ZM11.4473 11.7713L10.2969 10.0298H11.4473V11.7713Z"
                fill="#999999"
            />
        </svg>
    );
};

const Textfield = ({ name, helpertext, subscribe, startIcon, ...otherProps }) => {
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
                startAdornment={
                    startIcon && (
                        <InputAdornment position="start">
                            <NairaIcon />
                        </InputAdornment>
                    )
                }
                sx={{ height: '39px', width: '100%', marginTop: '5px', background: 'white', borderRadius: '0px' }}
                {...configTextfield}
            />
            {!subscribe && (
                <Typography style={{ color: '#f44336' }} variant="caption">
                    {configTextfield.helperText}
                </Typography>
            )}
        </Box>
    );
};

export default Textfield;
