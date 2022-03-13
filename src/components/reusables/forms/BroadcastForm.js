import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// material-ui
import { Typography, Button, Grid, Box, CircularProgress, Dialog, DialogContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// local import
import Textfield from '../FormUI/Textfield';
import Textarea from '../FormUI/Textarea';
import Success from '../../../ui-component/modals/Success';

export default function BroadcastForm() {
    const navigate = useNavigate();
    const theme = useTheme();
    const dispatch = useDispatch();

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
                '& > :nth-child(1)': {
                    fontFamily: 'Mulish',
                    fontSize: '1.6rem',
                    fontWeight: '700'
                }
            }}
        >
            {/* third */}
            <Box marginTop="10px">
                <Formik
                    initialValues={{
                        loginEmail: '',
                        loginPassword: ''
                    }}
                    onSubmit={async (values) => {
                        //   await dispatch(login(values));
                        //   navigate('/profile');
                        handleClickOpen();
                    }}
                    // validationSchema={Yup.object().shape({
                    //     loginEmail: Yup.string().email('Invalid email format').required('Required'),
                    //     loginPassword: Yup.string().min(6, 'password must be atleast 6 characters').required('Password is required')
                    // })}
                >
                    {({ isSubmitting }) => (
                        <Form autoComplete="off">
                            <Grid container>
                                <Grid xs={12} item>
                                    <Box
                                        sx={{
                                            ...theme.typography.flex,

                                            background: 'white',
                                            padding: '10px 5px',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        <Typography sx={{ fontWeight: '600', textAlign: 'center', fontSize: '1.1rem' }}>
                                            Send Out Importannt Message To a Large Audience
                                        </Typography>
                                    </Box>
                                    <Box marginTop="10px">
                                        <Textfield name="message_subject" helpertext="Message Subject" />
                                    </Box>

                                    <Box marginTop="10px">
                                        <Textarea num_of_rows={3} name="broadcast_message" helpertext="Message" />
                                    </Box>

                                    <Box sx={{ ...theme.typography.flex }}>
                                        <Button
                                            startIcon={isSubmitting ? <CircularProgress color="secondary" size="1rem" /> : null}
                                            sx={{
                                                //  width: '40%',
                                                padding: '7px 60px',
                                                marginTop: '40px',
                                                letterSpacing: '1px',
                                                borderRadius: '0px',
                                                color: 'white',
                                                '& :hover': {
                                                    color: 'black'
                                                }
                                            }}
                                            disableElevation
                                            variant="contained"
                                            type="submit"
                                        >
                                            Send e-broadcast
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Box>
            <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogContent>
                    <Success
                        text="Go to EVENTS"
                        content="You have successfully sent an e-broadcast.
                        You can go to your profile now.."
                        to="/my-events"
                    ></Success>
                </DialogContent>
            </Dialog>
        </Box>
    );
}
