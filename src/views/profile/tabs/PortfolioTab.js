import React from 'react';
import { Box, Grid, Typography, Divider, Button, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import resume from '../../../utils/resume';
import SubCard from '../../../ui-component/cards/SubCard';
import pictures from '../../../utils/pictures';

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

const Tag = ({ text, index }) => {
    const { tag } = useStyles();
    const theme = useTheme();

    return (
        <Box
            sx={{
                background: theme.palette.primary.main,
                cursor: 'pointer',
                color: 'white',
                padding: '10px 20px',
                width: 'max-content',
                borderRadius: '5px'
            }}
        >
            <Typography>{text}</Typography>
        </Box>
    );
};
const Picturebox = ({ title, path, year }) => {
    const { tag, profile_cover_img, picture_box_box } = useStyles();
    const theme = useTheme();

    return (
        <div
            style={{
                background: '#F5F5F5',
                //  border: '1px solid red',
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
        </div>
    );
};

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
            </Grid>

            {/* socials */}
            <Grid container>
                <Grid xs={12} item>
                    <SubCard
                        divider={false}
                        sx={{ bgcolor: 'white', boxShadow: 'none', padding: '0 5px', mt: '25px' }}
                        title="Social Media Links:"
                    >
                        <Box sx={{ display: 'flex', height: 'auto', flexWrap: 'wrap', gap: '10px' }}>
                            {resume.skills.map((item) => (
                                <Tag text={item} />
                            ))}
                        </Box>

                        <Button className={lower_button} variant="outlined" startIcon={<AddCircleIcon />}>
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
                            {pictures.map((item) => (
                                <Grid item md={4} sm={6} xs={12}>
                                    <Picturebox {...item} />
                                </Grid>
                            ))}
                        </Grid>

                        <Button className={lower_button} variant="outlined" startIcon={<AddCircleIcon />}>
                            Add Pictures
                        </Button>
                    </SubCard>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PortfolioTab;
