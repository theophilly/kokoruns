import React, { useState, useEffect } from 'react';
import { useField } from 'formik';

// material-ui
import { Box, Grid, Typography, Button, useTheme } from '@mui/material';
import { MyComponent } from './Teamsimage';

const Setupprofileimage = React.forwardRef(({ name }, ref) => {
    const [field, mata] = useField(name);
    const [imageUrl, setImageUrl] = useState('');
    const theme = useTheme();

    const configTextfield = {
        ...field
    };

    if (mata && mata.touched && mata.error) {
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
    }

    useEffect(() => {
        if (mata.value) {
            setImageUrl(mata.value);
        }
    }, []);

    async function selectFile(event) {
        await setImageUrl(URL.createObjectURL(event.target.files[0]));
        console.log(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <Box
            sx={{
                marginTop: '50px',
                padding: '20px',
                background: 'white',
                '@media (max-width: 500px)': {
                    padding: '20px 20px 0px'
                }
            }}
        >
            <Grid container spacing={2}>
                <Grid xs={12} item>
                    <Typography sx={{ ...theme.typography.heading }}>Profile Picture</Typography>
                    <Typography variant="caption">show us your best side</Typography>
                    <Typography style={{ color: '#f44336', display: 'block' }} variant="caption">
                        Please note that profile picture should not be more than 200kb
                    </Typography>
                </Grid>
                <Grid sx={{ ...theme.typography.flex, flexDirection: 'column', gap: '10px', height: '300px' }} xs={12} item>
                    <Box width="max-content">
                        <input
                            ref={ref}
                            accept="image/*"
                            onChange={selectFile}
                            // {...configTextfield}
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Box
                                sx={{
                                    ...theme.typography.flex,
                                    border: '1px solid #333333',
                                    height: '220px !important',
                                    width: '220px',
                                    borderRadius: '50%'
                                }}
                            >
                                <MyComponent
                                    sx={{
                                        cursor: 'pointer',
                                        width: '200px',
                                        height: '200px'
                                    }}
                                    src={imageUrl}
                                />
                            </Box>
                        </label>
                    </Box>
                    <Typography style={{ color: '#f44336' }} variant="caption">
                        {mata.error}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
});

export default Setupprofileimage;
