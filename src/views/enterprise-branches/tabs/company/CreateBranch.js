import React, { useRef } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';

import { Box, Grid, Typography, useTheme, Paper, CircularProgress, Button, Dialog, DialogContent } from '@mui/material';
import { useSelector } from 'react-redux';

// local import
import Success from '../../../../ui-component/modals/Success';
import api from '../../../../helpers/api';
import CreateCompanyBranchForm from '../CreateCompanyBranchForm';
import { timeFormatter } from '../../../../helpers/timeFormater';

export default function CreateBranch({ onSubmit }) {
    const navigate = useNavigate();
    const { enterprise_ids } = useSelector((state) => state.userDataReducer);
    let { pathname } = useLocation();
    const theme = useTheme();
    const filesharhe_ref = useRef();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        navigate('/branches');
    };

    const rebuildData = (formvalues, file) => {
        let formData = new FormData();

        formData.append('branch_name', formvalues.branch_name);
        formData.append('branch_address', formvalues.branch_address);
        formData.append('branch_state', formvalues.branch_state);
        formData.append('branch_lga', formvalues.branch_lga);
        formData.append('branch_phone', formvalues.branch_phone);
        formData.append('opening_time', timeFormatter(formvalues.opening_time));
        formData.append('closing_time', timeFormatter(formvalues.closing_time));
        formData.append('opening_week_day', formvalues.opening_week_day);
        formData.append('closing_week_day', formvalues.closing_week_day);
        formData.append('branch_manager', 'jjj');

        if (file) {
            formData.append('branch_image', file);
        }
        return formData;
    };

    return (
        <Box>
            <Paper sx={{ padding: '10px 20px 60px' }}>
                <Grid container>
                    <Grid xs={12} item>
                        <Typography sx={{ ...theme.typography.heading }}>Add New Branch</Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography sx={{ fontWeight: '600', marginTop: '10px' }}>Branch Information</Typography>
                    </Grid>
                    <Formik
                        initialValues={{
                            branch_name: '',
                            branch_address: '',
                            branch_state: '',
                            branch_lga: '',
                            branch_phone: '',
                            opening_time: '',
                            closing_time: '',
                            opening_week_day: '',
                            closing_week_day: '',
                            branch_image: ''
                        }}
                        onSubmit={async (values) => {
                            let formData = await rebuildData(values, filesharhe_ref.current.files[0]);
                            if (pathname === '/create-company-branch') {
                                await api.createCompanyBranch(enterprise_ids.companies[0].company_id, formData);
                            } else if (pathname === '/create-association-branch') {
                                await api.createAssociationBranch(enterprise_ids.associations[0].association_id, formData);
                            } else if (pathname === '/create-school-branch') {
                                await api.createSchoolBranch(enterprise_ids.schools[0].school_id, formData);
                            }
                            handleClickOpen();
                        }}
                        validationSchema={Yup.object().shape({
                            opening_time: Yup.string().required('opening time is required'),
                            closing_time: Yup.mixed()
                                .required('closing time is required')
                                .test('fileSize', 'closing time cannot be lower than opening time', function (value) {
                                    return new Date(value) >= new Date(this.parent.opening_time);
                                })
                        })}
                    >
                        {({ isSubmitting }) => (
                            <Form autoComplete="off">
                                <CreateCompanyBranchForm ref={filesharhe_ref} />
                                <Box sx={{ ...theme.typography.flex }}>
                                    <Button
                                        startIcon={isSubmitting ? <CircularProgress color="secondary" size="1rem" /> : null}
                                        sx={{
                                            width: '400px',
                                            marginTop: '50px',
                                            letterSpacing: '1px',
                                            borderRadius: '0px',
                                            color: 'white',
                                            textTransform: 'capitalize',
                                            '& :hover': {
                                                color: 'black'
                                            },
                                            [theme.breakpoints.down('sm')]: {
                                                marginTop: '50px',
                                                width: '200px'
                                            }
                                        }}
                                        disableElevation
                                        variant="contained"
                                        type="submit"
                                    >
                                        create branch
                                    </Button>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Paper>

            <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogContent>
                    <Success
                        text="see branches"
                        content="You have successfully created a new branch. You can go to your branches now."
                        to="/branches"
                    ></Success>
                </DialogContent>
            </Dialog>
        </Box>
    );
}
