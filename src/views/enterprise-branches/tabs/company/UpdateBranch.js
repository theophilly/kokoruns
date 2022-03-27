import React, { useRef, useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import { Box, Grid, Typography, useTheme, Paper, CircularProgress, Button, Dialog, DialogContent } from '@mui/material';
import { useSelector } from 'react-redux';

// local import
import Success from '../../../../ui-component/modals/Success';
import api from '../../../../helpers/api';
import CreateCompanyBranchForm from '../CreateCompanyBranchForm';
import { timeFormatter } from '../../../../helpers/timeFormater';
import { PortfolioStepper } from '../../../enterprise-gallery/tabs/SchoolGalleryTab';
import Warning from '../../../../ui-component/modals/Warning';

export default function UpdateBranch() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [branch, setBranch] = useState(null);
    const [pictureStep, setPictureStep] = React.useState(0);
    const { enterprise_ids } = useSelector((state) => state.userDataReducer);
    const [modalMessage, setModalMessage] = React.useState('');
    let { pathname } = useLocation();
    const theme = useTheme();
    const filesharhe_ref = useRef();
    const [open, setOpen] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [spinner, setSpinner] = React.useState(false);

    useEffect(() => {
        (async function () {
            await fectchData();
        })();
        console.log(branch);
    }, []);

    const fectchData = async () => {
        if (pathname.includes('company')) {
            await api
                .fetchCompanyBranch(enterprise_ids.companies[0].company_id, id)
                .then(async (data) => await setBranch(data['data'].companybranchdetails));
        } else if (pathname.includes('association')) {
            await api
                .fetchAssociationBranch(enterprise_ids.associations[0].association_id, id)
                .then(async (data) => await setBranch(data['data'].associationbranchdetails));
        } else if (pathname.includes('school')) {
            await api
                .fetchSchoolBranch(enterprise_ids.schools[0].school_id, id)
                .then(async (data) => await setBranch(data['data'].schoolbranchdetails));
        }
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleOpenModalClose = () => {
        setOpenModal(false);
        navigate('/branches');

        //  await navigate.replace('/branches');
        //  window.location.reload();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        navigate('/branches');

        //  await navigate.replace('/branches');
        //  window.location.reload();
    };

    const delBranch = async () => {
        setSpinner(true);

        if (pathname.includes('company')) {
            api.deleteCompanyBranch({ company_id: enterprise_ids.companies[0].company_id, branch_id: id })
                .catch(async (error) => {})
                .then(async () => {
                    //  setReload((prev) => prev + 1);
                }); //    await setRefresh(true);
        } else if (pathname.includes('association')) {
        } else if (pathname.includes('school')) {
            api.deleteSchoolBranch({ school_id: enterprise_ids.schools[0].school_id, branch_id: id })
                .catch(async (error) => {})
                .then(async () => {
                    //  setReload((prev) => prev + 1);
                }); //    await setRefresh(true);
        }

        setSpinner(false);
    };

    const rebuildData = (formvalues, file) => {
        let formData = new FormData();

        formData.append('branch_name', formvalues.branch_name);
        formData.append('branch_address', formvalues.branch_address);
        formData.append('branch_state', formvalues.branch_state);
        formData.append('branch_lga', formvalues.branch_lga);
        formData.append('branch_phone', formvalues.branch_phone);
        if (formvalues.opening_time) {
            console.log(formvalues.opening_time.length, 'jkkk');
            formData.append('opening_time', timeFormatter(formvalues.opening_time));
        }
        if (formvalues.closing_time) {
            formData.append('closing_time', timeFormatter(formvalues.closing_time));
        }

        formData.append('opening_week_day', formvalues.opening_week_day);
        formData.append('closing_week_day', formvalues.closing_week_day);
        formData.append('branch_manager', 'jjj');

        if (file) {
            formData.append('branch_image', file);
        }
        return formData;
    };

    return branch ? (
        <Box>
            <Paper sx={{ padding: '10px 20px 60px' }}>
                <Grid container>
                    <Grid xs={12} item>
                        <Typography sx={{ ...theme.typography.heading }}>Edit Branch</Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography sx={{ fontWeight: '600', marginTop: '10px' }}>Branch Information</Typography>
                    </Grid>
                    <Formik
                        initialValues={{
                            branch_name: branch.branch_name,
                            branch_address: branch.branch_address,
                            branch_state: branch.branch_state,
                            branch_lga: branch.branch_lga,
                            branch_phone: branch.branch_phone,
                            opening_time: new Date(
                                `October 13, 2014 ${branch.opening_time.slice(-8, -6)}:${branch.opening_time.slice(-5, -3)}:00`
                            ),
                            closing_time: new Date(
                                `October 13, 2014 ${branch.closing_time.slice(-8, -6)}:${branch.closing_time.slice(-5, -3)}:00`
                            ),
                            opening_week_day: branch.opening_week_day,
                            closing_week_day: branch.closing_week_day,
                            branch_image: ''
                        }}
                        onSubmit={async (values) => {
                            let formData = await rebuildData(values, filesharhe_ref.current.files[0] ?? null);
                            if (pathname.includes('company')) {
                                await api.updateCompanyBranch(
                                    { company_id: enterprise_ids.companies[0].company_id, branch_id: id },
                                    formData
                                );
                            } else if (pathname.includes('association')) {
                                await api.updateAssociationBranch(enterprise_ids.associations[0].association_id, formData);
                            } else if (pathname.includes('school')) {
                                await api.updateSchoolBranch({ school_id: enterprise_ids.schools[0].school_id, branch_id: id }, formData);
                            }
                            handleClickOpen();
                        }}
                        // validationSchema={Yup.object().shape({
                        //     team_name: Yup.string().required('Team Name is Required'),
                        //     team_purpose: Yup.string().required('Team Purpose is Required'),
                        //     team_bio: Yup.string().required('Team Bio is Required'),
                        //     team_policy: Yup.string().required('Team Policy is Required')
                        // })}
                    >
                        {({ isSubmitting }) => (
                            <Form autoComplete="off">
                                <CreateCompanyBranchForm ref={filesharhe_ref} />
                                <Box
                                    sx={{
                                        ...theme.typography.flex,
                                        marginTop: '50px',
                                        gap: '20px',
                                        [theme.breakpoints.down('sm')]: {
                                            flexDirection: 'column',
                                            gap: '20px'
                                        }
                                    }}
                                >
                                    <Button
                                        onClick={handleOpenModal}
                                        sx={{
                                            width: '150px',
                                            //  marginTop: '50px',
                                            letterSpacing: '1px',
                                            borderRadius: '0px',
                                            color: 'white',
                                            textTransform: 'capitalize',
                                            '& :hover': {
                                                color: 'black'
                                            },
                                            [theme.breakpoints.down('sm')]: {
                                                width: '230px'
                                            }
                                        }}
                                        disableElevation
                                        color="error"
                                        variant="contained"
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        startIcon={isSubmitting ? <CircularProgress color="secondary" size="1rem" /> : null}
                                        sx={{
                                            width: '150px',
                                            //  marginTop: '50px',
                                            letterSpacing: '1px',
                                            borderRadius: '0px',
                                            color: 'white',
                                            textTransform: 'capitalize',
                                            '& :hover': {
                                                color: 'black'
                                            },
                                            [theme.breakpoints.down('sm')]: {
                                                width: '230px'
                                            }
                                        }}
                                        disableElevation
                                        variant="contained"
                                        type="submit"
                                    >
                                        update branch
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
            <Dialog open={openModal} onClose={handleOpenModalClose} aria-labelledby="responsive-dialog-title">
                <DialogContent>
                    <PortfolioStepper portfolioStep={pictureStep} setPortfolioStep={setPictureStep}>
                        <Warning
                            load={spinner}
                            onNoClick={() => setOpenModal(false)}
                            onYesClick={async () => {
                                await delBranch();
                                await setModalMessage('You have successfully delete a Branch item You can go to your dashboard now');

                                setPictureStep((step) => step + 1);
                            }}
                            text="Are you sure you want to delete this Enterprise branch"
                        />
                        <Success onclick={handleOpenModalClose} text="Refresh Branches" content={modalMessage} />
                    </PortfolioStepper>
                </DialogContent>
            </Dialog>
        </Box>
    ) : (
        <Box>loading</Box>
    );
}
