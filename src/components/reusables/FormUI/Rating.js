import React, { useState } from 'react';
import { useField, useFormikContext } from 'formik';
import { Box, Typography } from '@mui/material';

export default function Rating({ name, helperText, ...otherProps }) {
    const { setFieldValue } = useFormikContext();
    // const [field, meta] = useField(name);
    const [rating, setRating] = useState(0);

    const handleChange = (value) => {
        setFieldValue(name, value);
    };

    const RatingIcon = ({ index }) => {
        return (
            <svg
                onClick={() => {
                    setRating(index);
                    handleChange(index);
                }}
                style={{ cursor: 'pointer' }}
                width="18"
                height="18"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="16" cy="16" r="15.5" fill="white" stroke="#3DA8FF" />
            </svg>
        );
    };
    const RatingIconActive = ({ index }) => {
        return (
            <svg
                onClick={() => {
                    setRating(index);
                    handleChange(index);
                }}
                style={{ cursor: 'pointer' }}
                width="18"
                height="18"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="16" cy="16" r="15.5" fill="white" stroke="#3DA8FF" />
                <circle cx="16" cy="16" r="11.5" fill="#3DA8FF" stroke="#3DA8FF" />
            </svg>
        );
    };

    const getIcon = (num) => {
        if (rating >= num) {
            return (
                <Box
                    sx={{
                        marginRight: '3px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        zIndex: 2
                    }}
                >
                    <RatingIconActive index={num} />
                    <Typography variant="caption">{num}</Typography>
                </Box>
            );
        } else {
            return (
                <Box
                    sx={{
                        marginRight: '3px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        zIndex: 2
                    }}
                >
                    <RatingIcon index={num} />
                    <Typography variant="caption">{num}</Typography>
                </Box>
            );
        }
    };

    // const configSelect = {
    //     ...field,
    //     ...otherProps,
    //     variant: 'outlined',
    //     color: 'secondary',
    //     onChange: handleChange
    // };

    // if (meta && meta.touched && meta.error) {
    //     configSelect.error = true;
    //     configSelect.helperText = meta.error;
    // }
    return (
        <>
            <Typography sx={{ fontSize: '0.9rem', mb: '5px' }}> {helperText} </Typography>
            <Box sx={{ display: 'flex', position: 'relative' }}>
                {Array(10)
                    .fill('')
                    .map((item, index) => getIcon(index + 1))}
                <divider
                    style={{
                        marginLeft: '2px',
                        backgroundColor: '#333333',
                        height: '1px',
                        width: '200px',
                        position: 'absolute',
                        top: '9px',
                        zIndex: 1
                    }}
                />
            </Box>
        </>
    );
}
