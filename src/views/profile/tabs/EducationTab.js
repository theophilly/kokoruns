import React from 'react';
import { Box, Grid, Typography, Divider, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BiEditAlt } from 'react-icons/bi';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import education from '../../../utils/education';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'inherit',
        width: '100%'
    },
    item: {
        borderRadius: '10px',
        //  border: '1px solid red',
        background: 'white',
        padding: '0 15px 13px',

        '& > :nth-child(2)': {
            fontSize: '0.8rem',
            color: theme.palette.primary.main,
            fontWeight: '500',
            margin: '5px 0'
        },
        '& > :nth-child(3)': {
            fontSize: '0.8rem',
            fontWeight: '500',
            marginBottom: '5px'
        }
    },
    first_box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& :nth-child(1)': {
            fontSize: '0.8rem'
        },
        '& :nth-child(2)': {
            fontSize: '0.9rem',
            color: theme.palette.primary.main
        }
    },
    lower_button: {
        width: '100%',
        textTransform: 'capitalize',
        border: 'none',
        margin: '10px 0',
        '&:hover': {
            border: 'none'
        }
    }
}));

const Item = ({ year, title, sub }) => {
    const { item, first_box } = useStyles();
    return (
        <Box className={item}>
            <Box className={first_box}>
                <Typography>{year} </Typography>
                <BiEditAlt />
            </Box>
            <Typography>{title}</Typography>
            <Typography> {sub} </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                    //  padding: '0 10px'
                }}
            >
                <Divider
                    sx={{
                        opacity: 1,
                        borderColor: '#CCCCCC',
                        width: '100%'
                    }}
                />
            </Box>
        </Box>
    );
};

const EducationTab = () => {
    const { root, lower_button } = useStyles();

    return (
        <Box className={root}>
            <Grid spacing={10} container>
                <Grid xs={12} md={6} item>
                    <Box bgcolor="white" padding="20px 0" borderRadius="5px">
                        {education.education.map((item) => (
                            <Item year={item.duration} title={item.award} sub={item.school} />
                        ))}

                        <Button className={lower_button} variant="outlined" startIcon={<AddCircleIcon />}>
                            Add Education
                        </Button>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} item>
                    <Box bgcolor="white" padding="20px 0" borderRadius="5px">
                        {education.certification.map((item) => (
                            <Item year={item.duration} title={item.certificate} sub={item.platform} />
                        ))}

                        <Button className={lower_button} variant="outlined" startIcon={<AddCircleIcon />}>
                            Add Certification
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default EducationTab;
