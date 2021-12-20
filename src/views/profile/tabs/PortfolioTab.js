import React from 'react';
import { Box, Grid, Typography, Divider, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import resume from '../../../utils/resume';
import SubCard from '../../../ui-component/cards/SubCard';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'inherit',
        width: '100%'
    },
    tag: {
        background: theme.palette.primary.main,
        cursor: 'pointer',
        color: 'white',
        padding: '10px 20px',
        width: 'max-content',
        borderRadius: '5px'
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
    website_link: {
        color: theme.palette.primary.main,
        cursor: 'pointer'
    }
}));

const Tag = ({ text, index }) => {
    const { tag } = useStyles();

    return (
        <div className={tag}>
            <Typography>{text}</Typography>
        </div>
    );
};

const PortfolioTab = () => {
    const { root, lower_button, website_link } = useStyles();
    return (
        <Box className={root}>
            <Grid container>
                <Grid xs={12} item>
                    <SubCard divider={false} sx={{ bgcolor: 'white', boxShadow: 'none', padding: '0 5px' }} title="Website link:">
                        <Typography
                            href="rtttwww.notion.so/AdejolaPortfolio-be3ac78992b145ccb7e1d8d6dd6b06e2"
                            target="_blank"
                            className={website_link}
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
        </Box>
    );
};

export default PortfolioTab;
