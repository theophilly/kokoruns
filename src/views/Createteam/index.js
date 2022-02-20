import React, { useRef } from 'react';
import {
    Box,
    Grid,
    Typography,
    useTheme,
    Paper,
    CircularProgress,
    Button,
    useMediaQuery,
    Avatar,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    InputBase
} from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Textfield from '../../components/reusables/FormUI/Textfield';
import SelectWrapper from '../../components/reusables/FormUI/SelectWrapper';
import maritalStatusData from '../../config/maritalStatusData.json';
import Teamimage from '../../components/reusables/forms/Teamsimage';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Teammember from '../teams/Teammember';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

const Createteambox = ({ onClick }) => {
    const theme = useTheme();
    return (
        <Paper
            onClick={onClick}
            sx={{
                ...theme.typography.flex,
                height: '200px',
                width: '200px',
                flexDirection: 'column',
                gap: '8px',
                mt: '20px',
                padding: '13px 0',
                margintop: '30px !important',
                cursor: 'pointer'
            }}
        >
            <Avatar sx={{ bgcolor: theme.palette.primary.main, height: '50px', width: '50px', cursor: 'pointer' }}>
                <AddIcon fontSize="large" />
            </Avatar>
            <Typography sx={{ fontWeight: '600', marginTop: '10px' }}>Add Member</Typography>
        </Paper>
    );
};

export default function Createteam() {
    const matches = useMediaQuery('(min-width:900px)');
    const navigate = useNavigate();
    const theme = useTheme();
    const filesharhe_ref = useRef();
    const [open, setOpen] = React.useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Paper sx={{ padding: '10px 20px 60px' }}>
                <Grid container>
                    <Grid xs={12} item>
                        <Typography sx={{ ...theme.typography.heading }}>Create New Team</Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography sx={{ fontWeight: '600', marginTop: '10px' }}>Team Information</Typography>
                    </Grid>
                    <Formik
                        initialValues={{
                            team_name: '',
                            team_purpose: '',
                            team_bio: '',
                            team_policy: '',
                            teams_image: ''
                        }}
                        onSubmit={async (values) => {
                            console.log(values);
                        }}
                        validationSchema={Yup.object().shape({
                            team_name: Yup.string().required('Team Name is Required'),
                            team_purpose: Yup.string().required('Team Purpose is Required'),
                            team_bio: Yup.string().required('Team Bio is Required'),
                            team_policy: Yup.string().required('Team Policy is Required')
                        })}
                    >
                        {({ isSubmitting }) => (
                            <Form autoComplete="off">
                                <Grid container>
                                    <Grid xs={12}>
                                        <Teamimage name="teams_image" ref={filesharhe_ref} />
                                    </Grid>

                                    <Grid
                                        sx={{
                                            paddingRight: '40px',
                                            '@media (max-width: 900px)': {
                                                padding: '0px'
                                            }
                                        }}
                                        item
                                        xs={12}
                                        md={6}
                                    >
                                        <Textfield name="team_name" helpertext="Team Name" />
                                    </Grid>
                                    <Grid sx={{ paddingLeft: matches ? '40px' : '0px' }} item xs={12} md={6}>
                                        <Textfield name="team_purpose" helpertext="Team Purpose" />
                                    </Grid>

                                    <Grid
                                        sx={{
                                            paddingRight: '40px',
                                            marginTop: '10px',
                                            '@media (max-width: 900px)': {
                                                padding: '0px'
                                            }
                                        }}
                                        item
                                        xs={12}
                                        md={6}
                                    >
                                        <Textfield name="team_bio" helpertext="Team Bio" />
                                    </Grid>
                                    <Grid sx={{ paddingLeft: matches ? '40px' : '0px', marginTop: '10px' }} item xs={12} md={6}>
                                        <SelectWrapper name="team_policy" helpertext="Team Policy" options={maritalStatusData} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Typography sx={{ fontWeight: '600', marginTop: '20px' }}>Team Members</Typography>
                                    </Grid>
                                    <Grid xs={12} item>
                                        <Createteambox onClick={handleClickOpen} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Box sx={{ ...theme.typography.flex }}>
                                            <Button
                                                startIcon={isSubmitting ? <CircularProgress color="secondary" size="1rem" /> : null}
                                                sx={{
                                                    width: '200px',
                                                    marginTop: '20px',
                                                    letterSpacing: '1px',
                                                    borderRadius: '0px',
                                                    color: 'white',
                                                    textTransform: 'capitalize',
                                                    '& :hover': {
                                                        color: 'black'
                                                    },
                                                    [theme.breakpoints.down('sm')]: {
                                                        marginTop: '50px'
                                                    }
                                                }}
                                                disableElevation
                                                variant="contained"
                                                type="submit"
                                            >
                                                Save Team
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Paper>

            <Dialog fullScreen open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogContent sx={{ marginTop: fullScreen ? '10px' : '80px' }}>
                    <Box sx={{ ...theme.typography.flex, flexDirection: 'column' }}>
                        <Box>
                            <Typography sx={{ fontWeight: '600' }}>Add Team Member</Typography>

                            <Box
                                sx={{
                                    padding: '0 5px',
                                    background: 'white',
                                    height: '39px',
                                    display: 'flex',
                                    width: '300px',
                                    alignItems: 'center',
                                    marginTop: '10px',
                                    border: '1px solid #C4C4C4',
                                    '&:hover': {
                                        border: '1px solid  rgba(0, 0, 0, 0.87)'
                                    }
                                }}
                            >
                                <InputBase
                                    placeholder="Try “Aura Inc.”"
                                    sx={{
                                        height: '30px',
                                        width: '100%',
                                        background: 'white'
                                    }}
                                />
                                <Avatar sx={{ bgcolor: theme.palette.primary.main, height: '30px', width: '30px' }} variant="square">
                                    <SearchIcon fontSize="small" />
                                </Avatar>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '40px', justifyContent: 'center' }}>
                            <Teammember />
                            <Teammember />
                            <Teammember />
                        </Box>
                    </Box>
                    <div onClick={handleClose} style={{ position: 'absolute', top: 20, right: 30 }}>
                        <CancelOutlinedIcon
                            sx={{
                                color: 'red',
                                height: '40px',
                                width: '40px',
                                cursor: 'pointer',
                                [theme.breakpoints.down('sm')]: {
                                    height: '20px',
                                    width: '20px'
                                }
                            }}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </Box>
    );
}
