import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { InputBase, Avatar, Typography, Button, Box, useTheme, CircularProgress, Grid, Dialog, DialogContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SubCard from '../../ui-component/cards/SubCard';
import Teammember from '../teams/Teammember';
import Textfield from '../../components/reusables/FormUI/Textfield';
import Textarea from '../../components/reusables/FormUI/Textarea';
import Success from '../../ui-component/modals/Success';

export default function SendRecommendation() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <SubCard>
            <Box>
                <Typography sx={{ fontWeight: '600', fontSize: '1.3rem', ml: '15px', mb: '5px', color: theme.palette.textColor }}>
                    Send Request for Recommendation
                </Typography>
            </Box>
            <Box mt="10px">
                <Teammember dontShow />
            </Box>
            {/* message form */}

            <Formik
                initialValues={{
                    message: ''
                }}
                onSubmit={async (values) => {
                    console.log(values);
                    handleClickOpen();
                    // await dispatch(login(values));
                    // if (!window.store.getState().authReducer.authenticated) {
                    //   await setClickData({
                    //     type: 'error',
                    //     content: window.store.getState().authReducer.error,
                    //   });
                    //   showToast();
                    // }
                    //  await sleep(3000);
                    //navigate('/profile-setup');
                }}
                validationSchema={Yup.object().shape({
                    message: Yup.string().required('Message is Required')
                })}
            >
                {({ isSubmitting }) => (
                    <Form autoComplete="off">
                        <Grid sx={{ mt: '20px' }} container>
                            <Grid item xs={12} sm={9}>
                                <Textarea num_of_rows={8} name="message" helpertext="Message" />
                            </Grid>

                            <Grid xs={12} item>
                                <Box sx={{ ...theme.typography.flex }}>
                                    <Box>
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
                                                    marginTop: '30px'
                                                }
                                            }}
                                            disableElevation
                                            variant="contained"
                                            type="submit"
                                        >
                                            send request
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogContent>
                    <Success
                        text="Go to recommendations"
                        to="/recommendations"
                        content="You have successfully sent a rerquest for 
                        recommendation. You can go to your settings now."
                    />
                </DialogContent>
            </Dialog>
        </SubCard>
    );
}
