import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { styled } from '@mui/system';

// material-ui
import { Box, Grid, Typography, Button, useTheme, Avatar } from '@mui/material';

export const MyComponent = styled(Avatar)({
    '& .MuiAvatar-fallback': {
        display: 'none'
    }
});

const Teamimage = React.forwardRef(({ name }, ref) => {
    const [field, mata] = useField(name);
    const theme = useTheme();
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if (mata.value) {
            setImageUrl(mata.value);
        }
    }, []);

    const configTextfield = {
        ...field
    };

    if (mata && mata.touched && mata.error) {
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
    }

    async function selectFile(event) {
        await setImageUrl(URL.createObjectURL(event.target.files[0]));
        console.log(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <Box
            sx={{
                marginTop: '30px',
                padding: '20px',
                background: 'white',

                '@media (max-width: 500px)': {
                    marginTop: '20px',
                    padding: '20px'
                }
            }}
        >
            <Grid container spacing={2}>
                <Grid sx={{ flexDirection: 'column', gap: '10px', height: 'max-content' }} xs={12} item>
                    <Box position="relative" width="max-content" borderRadius="50%">
                        <input
                            ref={ref}
                            accept="image/*"
                            onChange={selectFile}
                            //  {...configTextfield}
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Box sx={{ position: 'relative' }}>
                                <MyComponent
                                    src={imageUrl}
                                    sx={{
                                        cursor: 'pointer',
                                        width: 80,
                                        height: 80,
                                        [theme.breakpoints.down('sm')]: {
                                            left: '16%'
                                        }
                                    }}
                                ></MyComponent>

                                <Button
                                    variant="raised"
                                    component="span"
                                    sx={{
                                        background: 'rgba(0,0,0,0.2)',
                                        width: 80,
                                        height: 80,
                                        position: 'absolute',
                                        borderRadius: '100%',
                                        top: 0,
                                        left: 0
                                    }}
                                ></Button>
                            </Box>
                        </label>
                        <CameraAltOutlinedIcon
                            sx={{ color: theme.palette.primary.main, position: 'absolute', bottom: 5, right: 10, zIndex: 1 }}
                            fontSize="small"
                        />
                    </Box>
                    <Typography style={{ color: '#f44336' }} variant="caption">
                        {mata.error}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
});

export default Teamimage;
