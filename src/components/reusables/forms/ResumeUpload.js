import React from 'react';
import { useField } from 'formik';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// material-ui
import { Box, Grid, Typography, useTheme } from '@mui/material';

const ResumeUpload = React.forwardRef(({ name }, ref) => {
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
        <Grid container spacing={2}>
            <Grid sx={{ height: 'max-content' }} xs={12} item>
                <Box position="relative" width="100%" borderRadius="50%">
                    <input
                        ref={ref}
                        // accept="image/*"
                        {...configTextfield}
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        type="file"
                    />
                    <label htmlFor="raised-button-file">
                        <Box
                            sx={{
                                padding: '6px',
                                height: 'max-content',
                                border: `1px solid #CCCCCC`,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography sx={{ fontSize: '0.8rem', background: '#F1F5FC80', padding: '3px 10px', color: '#999999' }}>
                                Choose Files
                            </Typography>
                            <CloudUploadIcon fontSize="small" sx={{ color: theme.palette.textColor1 }} />
                        </Box>
                    </label>
                </Box>
                <Typography style={{ color: '#f44336' }} variant="caption">
                    {mata.error}
                </Typography>
            </Grid>
        </Grid>
    );
});

export default ResumeUpload;
