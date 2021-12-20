import React from 'react';
import { Box, Grid, Typography, Divider, Button } from '@mui/material';
import { BiEditAlt } from 'react-icons/bi';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { makeStyles } from '@mui/styles';
import SubCard from '../../../ui-component/cards/SubCard';
import resume from '../../../utils/resume';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'inherit',
        width: '100%'
    },
    item: {
        borderRadius: '10px',
        //  border: '1px solid red',
        background: 'white',
        padding: '0 0px 13px',

        '& > :nth-child(2)': {
            fontSize: '0.8rem',
            color: theme.palette.primary.main,

            margin: '5px 0'
        },
        '& > :nth-child(3)': {
            fontSize: '0.7rem',
            //  fontWeight: '500',
            marginBottom: '5px'
        }
    },
    first_box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& :nth-child(1)': {
            fontSize: '0.9rem',
            color: theme.palette.primary.main
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

const Item = ({ year, title, sub, experience }) => {
    const { item, first_box } = useStyles();
    return (
        <Box className={item}>
            <Box className={first_box}>
                <Typography>{year} </Typography>
                <BiEditAlt />
            </Box>
            <Typography>{title}</Typography>
            <Typography> {sub} </Typography>
            <Box>
                <ul>
                    {experience.map((item) => (
                        <li style={{ fontSize: '0.8rem' }}>{item}</li>
                    ))}
                </ul>
            </Box>
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

const ResumeTab = () => {
    const { root, lower_button } = useStyles();

    return (
        <Box className={root}>
            <Grid container>
                <Grid xs={12} item>
                    <SubCard divider={false} sx={{ bgcolor: 'white', boxShadow: 'none', padding: '0 5px' }} title="Job History">
                        {resume.experience.map((item) => (
                            <Item year={item.title} title={item.company} sub={item.duration} experience={item.experience} />
                        ))}

                        <Button className={lower_button} variant="outlined" startIcon={<AddCircleIcon />}>
                            Add Job to Resume
                        </Button>
                    </SubCard>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ResumeTab;
