<<<<<<< HEAD
import React, { useRef } from 'react';
import {
    Box,
    Grid,
    Typography,
    Button,
    useTheme,
    useMediaQuery,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    CircularProgress
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Textfield from '../../../components/reusables/FormUI/Textfield';
=======
import React from 'react';
import { Box, Grid, Typography, Divider, Button, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
import AddCircleIcon from '@mui/icons-material/AddCircle';
import resume from '../../../utils/resume';
import SubCard from '../../../ui-component/cards/SubCard';
import pictures from '../../../utils/pictures';
<<<<<<< HEAD
import { BiEditAlt } from 'react-icons/bi';
import ResumeUpload from '../../../components/reusables/forms/ResumeUpload';
import { addSocial, addPortfolio, deletePortfolio } from '../../../store/actions/userDataActions';
import Success from '../../../ui-component/modals/Success';
import Warning from '../../../ui-component/modals/Warning';
=======
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'inherit',
        width: '100%'
    },
    lower_button: {
        width: '100%',
        textTransform: 'capitalize',
        border: 'none',
        margin: '10px 0',
        '&:hover': {
            border: 'none'
        }
    },

    profile_cover_img: {
        height: '160px',
        minWidth: '100%',
        borderRadius: '6px',
        width: '100%',
        overflowY: 'hidden !important',
        overflowX: 'hidden !important',
        '& img': {
            objectFit: 'cover !important',
            height: '160px',
            width: '100%',
            objectPosition: '10% 40%',
            borderBottomRightRadius: '6px',
            borderBottomLeftRadius: '6px'
        }
    }
}));

<<<<<<< HEAD
const Tag = ({ link_address, link_title, setEdit, value = {}, clicked }) => {
=======
const Tag = ({ text, index }) => {
    const { tag } = useStyles();
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
    const theme = useTheme();

    return (
        <Box
<<<<<<< HEAD
            component="a"
            href={link_address}
            target="_blank"
=======
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
            sx={{
                background: theme.palette.primary.main,
                cursor: 'pointer',
                color: 'white',
                padding: '10px 20px',
                width: 'max-content',
<<<<<<< HEAD
                borderRadius: '5px',
                textDecoration: 'none',
                position: 'relative'
            }}
        >
            <Typography>{link_title}</Typography>
            <Box sx={{ position: 'absolute', top: 1, right: 5 }}>
                <BiEditAlt
                    onClick={async () => {
                        await setEdit(() => {
                            return { ...value, show: true };
                        });
                        clicked(true);
                    }}
                />
            </Box>
        </Box>
    );
};
const Picturebox = ({ title, path, year, setEdit, value = {}, clicked }) => {
    const { profile_cover_img } = useStyles();
=======
                borderRadius: '5px'
            }}
        >
            <Typography>{text}</Typography>
        </Box>
    );
};
const Picturebox = ({ title, path, year }) => {
    const { tag, profile_cover_img, picture_box_box } = useStyles();
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
    const theme = useTheme();

    return (
        <div
            style={{
                background: '#F5F5F5',
<<<<<<< HEAD
                position: 'relative',
=======
                //  border: '1px solid red',
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
                height: '230px',
                borderBottomRightRadius: '6px',
                borderBottomLeftRadius: '6px'
            }}
        >
            <Box className={profile_cover_img}>
                <img alt="bio" src={path} />
            </Box>
            <Box
                sx={{
                    ...theme.typography.column,
                    justifyContent: 'center',
                    //  border: '1px solid red',
                    height: '70px',
                    paddingLeft: '10px',
                    '& > :nth-child(1)': {
                        fontSize: '1rem',
                        fontWeight: '600'
                    },
                    '& > :nth-child(2)': {
                        fontSize: '0.9rem'
                    }
                }}
            >
                <Typography> {title} </Typography>
                <Typography> {year} </Typography>
            </Box>
<<<<<<< HEAD
            <Box sx={{ position: 'absolute', top: 1, right: 5 }}>
                <BiEditAlt
                    onClick={async () => {
                        await setEdit(() => {
                            return { ...value, show: true };
                        });
                        clicked(true);
                    }}
                />
            </Box>
=======
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
        </div>
    );
};

<<<<<<< HEAD
const rebuildData = (data, file) => {
    let formData = new FormData();
    formData.append('portfolio_title', data.portfolio_title);
    formData.append('year', data.portfolio_year);
    formData.append('portfolio', file);
    return formData;
};

const PortfolioTab = () => {
    const { root, lower_button } = useStyles();
    const theme = useTheme();
    const filesharhe_ref = useRef();
    const dispatch = useDispatch();
    const { bio, portfolio, social_links } = useSelector((state) => state.authReducer.user);
    const matches = useMediaQuery('(min-width:900px)');
    const [pictureStep, setPictureStep] = React.useState(0);
    const [socialStep, setSocialStep] = React.useState(0);
    const [edit, setEdit] = React.useState({ show: false });
    const [load, setLoad] = React.useState(false);

    // pictures
    const [picturesOpen, setPicturesOpen] = React.useState(false);
    const handlePictures = () => {
        setPicturesOpen(false);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        setPictureStep(0);
    };

    // social
    const [socialOpen, setSocialOpen] = React.useState(false);
    const handleSocial = () => {
        setSocialOpen(false);
        setSocialStep(0);
    };

    const delPortfolio = async () => {
        await setLoad(true);
        await dispatch(
            deletePortfolio({
                id: edit.portfolio_id
            })
        );
        handlePictures();
        await setLoad(false);
    };

    return (
        <Box className={root}>
            <Grid container>
                {bio.website && (
                    <Grid xs={12} item>
                        <SubCard divider={false} sx={{ bgcolor: 'white', boxShadow: 'none', padding: '0 5px' }} title="Website link:">
                            <Typography
                                href={bio.website}
                                target="_blank"
                                sx={{ color: theme.palette.primary.main, cursor: 'pointer' }}
                                component="a"
                            >
                                {bio.website}
                            </Typography>
                        </SubCard>
                    </Grid>
                )}
=======
const PortfolioTab = () => {
    const { root, lower_button, website_link } = useStyles();
    const theme = useTheme();
    return (
        <Box className={root}>
            <Grid container>
                <Grid xs={12} item>
                    <SubCard divider={false} sx={{ bgcolor: 'white', boxShadow: 'none', padding: '0 5px' }} title="Website link:">
                        <Typography
                            href="rtttwww.notion.so/AdejolaPortfolio-be3ac78992b145ccb7e1d8d6dd6b06e2"
                            target="_blank"
                            sx={{ color: theme.palette.primary.main, cursor: 'pointer' }}
                            component="a"
                        >
                            rtttwww.notion.so/AdejolaPortfolio-be3ac78992b145ccb7e1d8d6dd6b06e2
                        </Typography>
                    </SubCard>
                </Grid>
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
            </Grid>

            {/* socials */}
            <Grid container>
                <Grid xs={12} item>
                    <SubCard
                        divider={false}
                        sx={{ bgcolor: 'white', boxShadow: 'none', padding: '0 5px', mt: '25px' }}
                        title="Social Media Links:"
                    >
<<<<<<< HEAD
                        {social_links.length > 0 && (
                            <Box sx={{ display: 'flex', height: 'auto', flexWrap: 'wrap', gap: '10px' }}>
                                {social_links.map((item) => (
                                    <Tag setEdit={setEdit} clicked={setSocialOpen} {...item} />
                                ))}
                            </Box>
                        )}

                        <Button
                            onClick={() => setSocialOpen(true)}
                            className={lower_button}
                            variant="outlined"
                            startIcon={<AddCircleIcon />}
                        >
=======
                        <Box sx={{ display: 'flex', height: 'auto', flexWrap: 'wrap', gap: '10px' }}>
                            {resume.skills.map((item) => (
                                <Tag text={item} />
                            ))}
                        </Box>

                        <Button className={lower_button} variant="outlined" startIcon={<AddCircleIcon />}>
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
                            Add Social Media Link
                        </Button>
                    </SubCard>
                </Grid>
            </Grid>
            {/* pictures */}
            <Grid container>
                <Grid xs={12} item>
                    <SubCard divider={false} sx={{ bgcolor: 'white', boxShadow: 'none', padding: '0 5px', mt: '25px' }} title="Pictures:">
                        <Grid spacing={2} container>
<<<<<<< HEAD
                            {portfolio.map((item) => (
                                <Grid item md={4} sm={6} xs={12}>
                                    <Picturebox
                                        value={item}
                                        setEdit={setEdit}
                                        clicked={setPicturesOpen}
                                        path={item.image}
                                        year={item.date}
                                        title={item.portfolio_title}
                                    />
=======
                            {pictures.map((item) => (
                                <Grid item md={4} sm={6} xs={12}>
                                    <Picturebox {...item} />
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
                                </Grid>
                            ))}
                        </Grid>

<<<<<<< HEAD
                        <Button
                            onClick={() => setPicturesOpen(true)}
                            className={lower_button}
                            variant="outlined"
                            startIcon={<AddCircleIcon />}
                        >
=======
                        <Button className={lower_button} variant="outlined" startIcon={<AddCircleIcon />}>
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
                            Add Pictures
                        </Button>
                    </SubCard>
                </Grid>
            </Grid>
<<<<<<< HEAD

            {/* pictures dialog */}
            <Dialog
                open={picturesOpen}
                onClose={handlePictures}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Add Pictures</DialogTitle>
                <DialogContent>
                    <PortfolioStepper portfolioStep={pictureStep} setPortfolioStep={setPictureStep}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Formik
                                    initialValues={{
                                        portfolio_title: '',
                                        portfolio_year: '',
                                        portfolio_image: ''
                                    }}
                                    onSubmit={async (values) => {
                                        console.log(values);

                                        var formData = rebuildData(values, filesharhe_ref.current.files[0]);

                                        await dispatch(addPortfolio(formData));
                                        console.log(filesharhe_ref.current.files[0]);
                                        setPictureStep((step) => step + 1);
                                    }}
                                    validationSchema={Yup.object().shape({
                                        portfolio_title: Yup.string().required('Title is Required'),
                                        portfolio_year: Yup.string().required('portfolio year is Required'),
                                        portfolio_image: Yup.string().required('portfolio image Institution is Required')
                                    })}
                                >
                                    {({ isSubmitting }) => (
                                        <Form autoComplete="off">
                                            <Grid container>
                                                <Grid
                                                    sx={{
                                                        paddingRight: '20px',
                                                        '@media (max-width: 900px)': {
                                                            padding: '0px'
                                                        }
                                                    }}
                                                    item
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <Textfield name="portfolio_title" helpertext="Title" />
                                                </Grid>
                                                <Grid sx={{ paddingLeft: matches ? '20px' : '0px' }} item xs={12} md={6}>
                                                    <Textfield name="portfolio_year" helpertext="Year" />
                                                </Grid>
                                                <Grid mt="5px" xs={12}>
                                                    <Typography variant="caption">Upload Image</Typography>
                                                    <Box sx={{ mt: '5px' }}>
                                                        <ResumeUpload name="portfolio_image" ref={filesharhe_ref} />
                                                    </Box>
                                                </Grid>

                                                <Grid xs={12} item>
                                                    <Box sx={{ ...theme.typography.flex }}>
                                                        <DialogActions>
                                                            <Button
                                                                startIcon={
                                                                    isSubmitting ? <CircularProgress color="secondary" size="1rem" /> : null
                                                                }
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
                                                                Save
                                                            </Button>
                                                        </DialogActions>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Form>
                                    )}
                                </Formik>
                            </Grid>
                        </Grid>
                        <Success
                            onclick={handlePictures}
                            text="See All portfolios"
                            content="You have successfully added a portfolio item
                            You can go to your dashboard now."
                        />
                    </PortfolioStepper>

                    {edit.show ? (
                        // update

                        <PortfolioStepper portfolioStep={pictureStep} setPortfolioStep={setPictureStep}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Formik
                                        initialValues={{
                                            portfolio_title: edit.portfolio_title,
                                            portfolio_year: edit.date
                                        }}
                                        onSubmit={async (values) => {
                                            console.log(values);

                                            await dispatch(addPortfolio(values));

                                            setPictureStep((step) => step + 1);
                                        }}
                                        validationSchema={Yup.object().shape({
                                            portfolio_title: Yup.string().required('Title is Required'),
                                            portfolio_year: Yup.string().required('portfolio year is Required')
                                        })}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form autoComplete="off">
                                                <Grid container>
                                                    <Grid
                                                        sx={{
                                                            paddingRight: '20px',
                                                            '@media (max-width: 900px)': {
                                                                padding: '0px'
                                                            }
                                                        }}
                                                        item
                                                        xs={12}
                                                        md={6}
                                                    >
                                                        <Textfield name="portfolio_title" helpertext="Title" />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px' }} item xs={12} md={6}>
                                                        <Textfield name="portfolio_year" helpertext="Year" />
                                                    </Grid>

                                                    <Grid xs={12} item>
                                                        <Box sx={{ ...theme.typography.flex }}>
                                                            <DialogActions>
                                                                <Button
                                                                    startIcon={
                                                                        isSubmitting ? (
                                                                            <CircularProgress color="secondary" size="1rem" />
                                                                        ) : null
                                                                    }
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
                                                                    Save
                                                                </Button>
                                                            </DialogActions>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Form>
                                        )}
                                    </Formik>
                                </Grid>
                            </Grid>
                            <Warning
                                load={load}
                                onNoClick={() => setPictureStep((step) => step - 1)}
                                onYesClick={async () => {
                                    delPortfolio();
                                    setPictureStep((step) => step + 1);
                                }}
                                text="Are you sure you want to delete this Portfolio information from your portfolio list."
                            />
                            <Success
                                onclick={handlePictures}
                                text="See All portfolios"
                                content="You have successfully delete a portfolio item
                            You can go to your dashboard now"
                            />
                        </PortfolioStepper>
                    ) : (
                        <PortfolioStepper portfolioStep={pictureStep} setPortfolioStep={setPictureStep}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Formik
                                        initialValues={{
                                            portfolio_title: '',
                                            portfolio_year: '',
                                            portfolio_image: ''
                                        }}
                                        onSubmit={async (values) => {
                                            console.log(values);
                                            var formData = rebuildData(values, filesharhe_ref.current.files[0]);
                                            await dispatch(addPortfolio(formData));
                                            console.log(filesharhe_ref.current.files[0]);
                                            setPictureStep((step) => step + 1);
                                        }}
                                        validationSchema={Yup.object().shape({
                                            portfolio_title: Yup.string().required('Title is Required'),
                                            portfolio_year: Yup.string().required('portfolio year is Required'),
                                            portfolio_image: Yup.string().required('portfolio image Institution is Required')
                                        })}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form autoComplete="off">
                                                <Grid container>
                                                    <Grid
                                                        sx={{
                                                            paddingRight: '20px',
                                                            '@media (max-width: 900px)': {
                                                                padding: '0px'
                                                            }
                                                        }}
                                                        item
                                                        xs={12}
                                                        md={6}
                                                    >
                                                        <Textfield name="portfolio_title" helpertext="Title" />
                                                    </Grid>
                                                    <Grid sx={{ paddingLeft: matches ? '20px' : '0px' }} item xs={12} md={6}>
                                                        <Textfield name="portfolio_year" helpertext="Year" />
                                                    </Grid>
                                                    <Grid mt="5px" xs={12}>
                                                        <Typography variant="caption">Upload Image</Typography>
                                                        <Box sx={{ mt: '5px' }}>
                                                            <ResumeUpload name="portfolio_image" ref={filesharhe_ref} />
                                                        </Box>
                                                    </Grid>

                                                    <Grid xs={12} item>
                                                        <Box sx={{ ...theme.typography.flex }}>
                                                            <DialogActions>
                                                                <Button
                                                                    startIcon={
                                                                        isSubmitting ? (
                                                                            <CircularProgress color="secondary" size="1rem" />
                                                                        ) : null
                                                                    }
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
                                                                    Save
                                                                </Button>
                                                            </DialogActions>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Form>
                                        )}
                                    </Formik>
                                </Grid>
                            </Grid>
                            <Success
                                onclick={handlePictures}
                                text="See All portfolios"
                                content="You have successfully added a portfolio item
                            You can go to your dashboard now."
                            />
                        </PortfolioStepper>
                    )}
                </DialogContent>
            </Dialog>

            {/* social dialog */}
            <Dialog
                open={socialOpen}
                onClose={handleSocial}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Add Social Link</DialogTitle>
                <DialogContent>
                    <PortfolioStepper portfolioStep={socialStep} setPortfolioStep={setSocialStep}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Formik
                                    initialValues={{
                                        social: '',
                                        social_link: ''
                                    }}
                                    onSubmit={async (values) => {
                                        console.log(values);

                                        await dispatch(
                                            addSocial({
                                                link_title: values.social,
                                                link_address: values.social_link
                                            })
                                        );
                                        setSocialStep((step) => step + 1);
                                    }}
                                    validationSchema={Yup.object().shape({
                                        social: Yup.string().required('Name od social is Required'),
                                        social_link: Yup.string().required('social link is Required')
                                    })}
                                >
                                    {({ isSubmitting }) => (
                                        <Form autoComplete="off">
                                            <Grid container>
                                                <Grid
                                                    sx={{
                                                        paddingRight: '20px',
                                                        '@media (max-width: 900px)': {
                                                            padding: '0px'
                                                        }
                                                    }}
                                                    item
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <Textfield name="social" helpertext="Social Media" placeholder="Facebook" />
                                                </Grid>
                                                <Grid sx={{ paddingLeft: matches ? '20px' : '0px' }} item xs={12} md={6}>
                                                    <Textfield name="social_link" helpertext="Link" />
                                                </Grid>

                                                <Grid xs={12} item>
                                                    <Box sx={{ ...theme.typography.flex }}>
                                                        <DialogActions>
                                                            <Button
                                                                startIcon={
                                                                    isSubmitting ? <CircularProgress color="secondary" size="1rem" /> : null
                                                                }
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
                                                                Save
                                                            </Button>
                                                        </DialogActions>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Form>
                                    )}
                                </Formik>
                            </Grid>
                        </Grid>
                        <Success
                            onclick={handleSocial}
                            text="See All social Links"
                            // to="/recommendations"
                            content="You have successfully added a social link
                            You can go to your dashboard now."
                        />
                    </PortfolioStepper>
                </DialogContent>
            </Dialog>
=======
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
        </Box>
    );
};

export default PortfolioTab;
<<<<<<< HEAD

export function PortfolioStepper({ children, portfolioStep, setPortfolioStep, ...props }) {
    const childrenArray = React.Children.toArray(children);
    const currentChild = childrenArray[portfolioStep];

    return <Box>{currentChild}</Box>;
}
=======
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
