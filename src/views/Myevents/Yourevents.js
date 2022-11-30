import React, { useState } from 'react';
import { Box, Grid, Avatar, Typography, useTheme, Button, InputBase, Dialog, DialogContent } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BiEditAlt } from 'react-icons/bi';
import LogoutIcon from '@mui/icons-material/Logout';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import SearchIcon from '@mui/icons-material/Search';

import SubCard from '../../ui-component/cards/SubCard';
import Warning from '../../ui-component/modals/Warning';
import Success from '../../ui-component/modals/Success';
import Teammember from '../teams/Teammember';

const Yourevents = () => {
    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [rejectOpen, setRejectOpen] = useState(false);
    const [rejectStep, setRejectStep] = useState(0);

    const [shareOpen, setShareOpen] = useState(false);
    const [shareStep, setShareStep] = useState(0);

    const handleRejectOpen = () => {
        setRejectOpen(true);
    };
    const handleShareOpen = () => {
        setShareOpen(true);
    };

    const handleRejectClose = () => {
        setRejectOpen(false);
    };
    const handleShareClose = () => {
        setShareOpen(false);
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
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0 20px',
                                '@media (max-width: 408px)': {
                                    padding: '0 0px'
                                }
                            }}
                        >
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
                                    onClick={() => {
                                        setShareStep(() => 0);
                                        handleShareOpen();
                                    }}
                                    sx={{
                                        width: 'max-content'
                                    }}
                                    disableElevation
                                    variant="contained"
                                    startIcon={<BiEditAlt />}
                                >
                                    <Typography sx={{ fontSize: '0.9rem', textTransform: 'capitalize' }}> Share Event</Typography>
                                </Button>
                                <Button
                                    onClick={() => {
                                        setRejectStep(() => 0);
                                        handleRejectOpen();
                                    }}
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
                                    <Typography
                                        sx={{ color: theme.palette.secondary.main1, fontSize: '0.9rem', textTransform: 'capitalize' }}
                                    >
                                        Reject Event
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontWeight: '600', m: '10px' }}>Event Details</Typography>
                </Grid>
                <Grid item xs={12}>
                    <SubCard>
                        <Typography
                            sx={{
                                width: '70%',
                                '@media (max-width: 766px)': {
                                    width: '100%'
                                }
                            }}
                        >
                            Hello! <br /> <br /> We have just received your application to Reloadly & Flutterwave first Hackathon! We will
                            review your application, and if you are one of the 100 selected participants, you will receive an email by
                            September 3rd. We will be informing you of any updates and next steps. If you need any help, do not hesitate to
                            reach out to us at devchallenge@flutterwavego.com Have a great day! <br /> <br /> Reloadly & Flutterwave Teams.
                        </Typography>
                    </SubCard>
                </Grid>
            </Grid>

            <Dialog fullScreen open={shareOpen} onClose={handleShareClose} aria-labelledby="responsive-dialog-title">
                <ShareStepper shareStep={shareStep} setShareStep={setShareStep}>
                    <DialogContent sx={{ marginTop: fullScreen ? '10px' : '80px' }}>
                        <Box sx={{ ...theme.typography.flex, flexDirection: 'column' }}>
                            <Box>
                                <Typography sx={{ fontWeight: '600' }}>Share Event Invitation</Typography>

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
                                        placeholder="Search by name"
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
                            </Box>
                        </Box>
                        <div onClick={handleShareClose} style={{ position: 'absolute', top: 20, right: 30 }}>
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
                    {/* second */}
                    <Box></Box>
                </ShareStepper>
            </Dialog>

            {/* reject dialog */}
            <Dialog open={rejectOpen} onClose={handleRejectClose} aria-labelledby="responsive-dialog-title">
                <DialogContent
                //   sx={{ marginTop: fullScreen ? '10px' : '80px' }}
                >
                    <RejectStepper rejectStep={rejectStep} setRejectStep={setRejectStep}>
                        <Warning
                            onNoClick={() => handleRejectClose()}
                            onYesClick={() => setRejectStep((step) => step + 1)}
                            text="Are you sure you want to reject your invitation to this event? Rejected events will not show on your event list."
                        />
                        <Success
                            text="Go to EVENTS"
                            to="/my-events"
                            content="You have successfully rejected your invitation.
You can go to your events now."
                        />
                        <div onClick={() => setRejectStep((step) => step + 1)}>1</div>
                        <div>2</div>
                    </RejectStepper>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default Yourevents;

export function ShareStepper({ children, shareStep, setShareStep, ...props }) {
    const childrenArray = React.Children.toArray(children);
    const currentChild = childrenArray[shareStep];

    return <Box>{currentChild}</Box>;
}
export function RejectStepper({ children, rejectStep, setRejectStep, ...props }) {
    const childrenArray = React.Children.toArray(children);
    const currentChild = childrenArray[rejectStep];

    return <Box>{currentChild}</Box>;
}
