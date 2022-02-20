import React from 'react';
import { Box, Typography, OutlinedInput, useTheme } from '@mui/material';
import { useField, useFormikContext } from 'formik';

const AboutTextarea = ({ num_of_rows, name, helpertext, ...otherProps }) => {
    const [field, mata] = useField(name);
    const [textContent, setTextContent] = React.useState('');
    const { setFieldValue } = useFormikContext();
    const theme = useTheme();

    React.useEffect(() => {
        setTextContent(mata.value);
    }, []);

    const handleChange = (evt) => {
        const { value } = evt.target;
        if (value.length <= 250) {
            setTextContent(value);
            setFieldValue(name, value);
        }
    };

    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        color: 'secondary',
        onChange: handleChange
    };

    if (mata && mata.touched && mata.error) {
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
    }

    return (
        <Box>
            <Typography variant="caption">{helpertext}</Typography>
            <Box sx={{ position: 'relative' }}>
                <OutlinedInput
                    multiline
                    rows={num_of_rows}
                    sx={{
                        height: 'auto',
                        width: '100%',
                        marginTop: '5px',
                        background: 'white',
                        borderRadius: '0px',
                        borderColor: '#C4C4C4',
                        padding: '10px',
                        '&:focus': {
                            outlineColor: theme.palette.primary.main
                        }
                    }}
                    {...configTextfield}
                />
                <Typography sx={{ position: 'absolute', bottom: 5, right: 10, color: theme.palette.textColor1 }}>
                    {250 - textContent.length} characters remaining
                </Typography>
            </Box>
            <Typography style={{ color: '#f44336' }} variant="caption">
                {configTextfield.helperText}
            </Typography>
        </Box>
    );
};

export default AboutTextarea;
