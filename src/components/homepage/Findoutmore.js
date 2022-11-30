import React from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

// material-ui
import { Box, Typography, Button, useTheme } from '@mui/material';

export default function Findoutmore(props) {
    const theme = useTheme();
    const matches = useMediaQuery('(min-width:704px)');
    return (
        <Box
            sx={{
                height: props.heigth ? `${props.heigth}` : '90vh',
                background: `url(${props.bg})`,
                backgroundRepeat: 'no-repeat',
                objectFit: 'contain',
                backgroundSize: '100%',
                backgroundPosition: 'center center',
                color: 'white',
                position: 'relative',

                '@media (max-width: 900px)': {
                    objectFit: 'contain !important',
                    height: '80vh',
                    backgroundSize: '1200px'
                },
                '@media (max-width: 400px)': {
                    backgroundSize: '1200px !important',
                    backgroundRepeat: 'no-repeat !important',
                    height: props.heigth ? '60vh !important' : '70vh !important'
                },
                '&::before': {
                    content: '""', // ::before and ::after both require content
                    position: 'absolute',
                    display: 'block',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: theme.palette.primary.main,
                    opacity: 0.7,
                    zIndex: 1,
                    mixBlendMode: 'multiply'
                }
            }}
        >
            <Box
                sx={{
                    ...theme.typography.column,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    position: 'relative',
                    zIndex: 2,
                    padding: '10px'
                }}
            >
                <Typography
                    sx={{
                        ...theme.typography.title2,
                        textAlign: 'center',
                        '@media (max-width: 704px)': {
                            lineHeight: '30px'
                        }
                    }}
                >
                    {props.firstLine}
                    {matches && <br />}
                    {props.secondLine}
                </Typography>
                <Typography
                    sx={{
                        ...theme.typography.subtitle,
                        textAlign: 'center',
                        margin: '30px 0',
                        width: '50%',
                        '@media (max-width: 704px)': {
                            width: '90%'
                        }
                    }}
                >
                    {props.sub}
                </Typography>
                {props.buttonText && (
                    <Button
                        LinkComponent={Link}
                        to={props.path}
                        sx={{ color: 'white', borderRadius: '0px', borderColor: 'white', height: '35px', fontSize: '.8rem' }}
                        variant="outlined"
                    >
                        {props.buttonText}
                    </Button>
                )}
            </Box>
        </Box>
    );
}
