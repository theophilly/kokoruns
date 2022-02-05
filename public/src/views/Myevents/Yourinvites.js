import React from 'react';
import {
    Box,
    Grid,
    Avatar,
    Typography,
    useTheme,
    Button,
    Select,
    FormControl,
    OutlinedInput,
    MenuItem,
    InputBase,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    Paper
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BiEditAlt } from 'react-icons/bi';
import LogoutIcon from '@mui/icons-material/Logout';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import SubCard from '../../ui-component/cards/SubCard';
import MainCard from '../../ui-component/cards/MainCard';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

import { Link } from 'react-router-dom';
import Teammember from '../teams/Teammember';
import Teamsbox from '../teams/Teambox';

const Createteambox = ({ onClick }) => {
    const theme = useTheme();

    return (
        <Paper
            onClick={onClick}
            sx={{
                ...theme.typography.flex,
                height: '218px',
                width: '200px',
                flexDirection: 'column',
                gap: '8px',
                //  mt: '20px',
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

const Yourinvites = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery('(min-width:600px)');

    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box
            sx={{
                width: '100%',
                padding: '10px',
                [theme.breakpoints.down('sm')]: {
                    padding: '10px 0'
                }
            }}
        >
            <Grid container>
                <Grid item xs={12}>
                    <SubCard>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
                            <Box sx={{ display: 'flex', mt: '15px', cursor: 'pointer' }}>
                                <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src="./student.png" />

                                <Box sx={{ ...theme.typography.column, flex: 1, ml: '15px', justifyContent: 'center' }}>
                                    <Typography sx={{ fontWeight: '700', color: theme.palette.text }}> Friends of Figma </Typography>

                                    <Typography variant="caption">A committee of avid users of Figma</Typography>
                                </Box>
                            </Box>
                            {/* buttons */}
                            <Box sx={{ ...theme.typography.column, mt: '15px' }}>
                                <Button
                                    sx={{
                                        width: 'max-content'
                                    }}
                                    disableElevation
                                    variant="contained"
                                    startIcon={<BiEditAlt />}
                                >
                                    <Typography sx={{ fontSize: '0.9rem' }}> Edit Group</Typography>
                                </Button>
                                <Button
                                    sx={{
                                        width: 'max-content',
                                        border: 'none',
                                        mt: '3px',
                                        '&:hover': {
                                            border: 'none'
                                        }
                                    }}
                                    variant="outlined"
                                    startIcon={<LogoutIcon sx={{ color: theme.palette.secondary.main1 }} />}
                                >
                                    <Typography sx={{ color: theme.palette.secondary.main1, fontSize: '0.9rem' }}> Exit Group</Typography>
                                </Button>
                            </Box>
                        </Box>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontWeight: '600', m: '10px' }}>Team Members</Typography>
                    <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <Teammember />
                        <Teammember />
                        <Teammember />
                        <Teammember />
                        <Teammember />
                        <Teammember />
                        <Createteambox onClick={handleClickOpen} />
                    </Box>
                </Grid>
            </Grid>
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
};

export default Yourinvites;
