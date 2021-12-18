import React, { useRef } from 'react';
import { useField, useFormikContext } from 'formik';

// material-ui
import { Box, Grid, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

// styles
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '50px',
        padding: '20px',
        background: 'white',
        '@media (max-width: 500px)': {
            padding: '20px 20px 0px'
        }
    },
    customer_info: {
        ...theme.typography.heading
    },
    upload_button: {
        height: '200px',
        width: '200px',
        borderRadius: '50%',
        background: '#C4C4C4'
    },
    label_cover: {
        ...theme.typography.flex,
        border: '1px solid #333333',
        height: '220px !important',
        width: '220px',
        borderRadius: '50%'
    },
    lower_buttons: {
        ...theme.typography.flex,
        flexDirection: 'column',
        gap: '10px',
        height: '300px'
    }
}));

const Setupprofileimage = React.forwardRef((props, ref) => {
    const { root, customer_info, upload_button, label_cover, lower_buttons } = useStyles();
    const [field, mata] = useField('file');
    const { setFieldValue } = useFormikContext();

    const handleChange = (evt) => {
        //console.log(evt.currentTarget.value);
        console.log(evt.currentTarget.files[0]);
        setFieldValue('file', evt.currentTarget.files[0]);
    };

    const configTextfield = {
        ...field
        // onChange: handleChange,
        // ...otherProps,
        //  fullWidth: true,
        //  color: 'secondary',
    };

    if (mata && mata.touched && mata.error) {
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
    }

    return (
        <Box className={root}>
            <Grid container spacing={2}>
                <Grid xs={12} item>
                    <Typography className={customer_info}>Profile Picture</Typography>
                    <Typography variant="caption">show us your best side</Typography>
                    <Typography style={{ color: '#f44336', display: 'block' }} variant="caption">
                        Please note that profile picture should not be more than 200kb
                    </Typography>
                </Grid>
                <Grid className={lower_buttons} xs={12} item>
                    <Box width="max-content">
                        <input
                            ref={ref}
                            accept="image/*"
                            {...configTextfield}
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <div className={label_cover}>
                                <Button variant="raised" component="span" className={upload_button}></Button>
                            </div>
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
