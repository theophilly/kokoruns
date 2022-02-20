import React from 'react';
import { useField } from 'formik';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

// material-ui
import { Box, Grid, Typography, Button, useTheme } from '@mui/material';

const Teamimage = React.forwardRef(({ name }, ref) => {
    const [field, mata] = useField(name);
    const theme = useTheme();

    const configTextfield = {
        ...field
    };

    if (mata && mata.touched && mata.error) {
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
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
                            {...configTextfield}
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Button
                                variant="raised"
                                component="span"
                                sx={{ height: '130px', width: '130px', borderRadius: '50%', background: '#C4C4C4' }}
                            ></Button>
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
