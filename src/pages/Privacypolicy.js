import React from 'react';

// material-ui
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// project imports
import Findoutmore from '../components/homepage/Findoutmore';

// styles
const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background1
    },
    inner_div: {
        width: '90vw',
        margin: '0px auto 0px',
        paddingTop: '20px',
        '@media (max-width: 500px)': {
            paddingTop: '0px'
        }
    },
    first_div: {
        marginTop: '40px',

        ...theme.typography.flex,
        '@media (max-width: 500px)': {
            marginTop: '40px'
        }
    },
    first_div_heading: {
        ...theme.typography.title2,
        color: theme.palette.primary.main,
        '@media (max-width: 500px)': {
            lineHeight: '2.2rem',
            textAlign: 'center',
            marginBottom: '10px'
        }
    },
    about_heading: {
        ...theme.typography.sub_heading1,
        color: theme.palette.primary.main
    }
}));

export default function Privacypolicy() {
    const { root, first_div, first_div_heading, about_heading, inner_div } = useStyles();
    return (
        <Box className={root}>
            <Box className={inner_div}>
                <Findoutmore
                    firstLine="A golden standard team of dedicated talents"
                    sub="We are a team of diverse talents that utilized our individual strengths inorder to build a product that serves the character of its purpose"
                    bg="about.png"
                    heigth="60vh"
                    // path="/"
                    // buttonText="FIND OUT MORE"
                />
            </Box>
            {/* middle */}
            <Box width="90vw" margin="20px auto 0px" height="auto">
                <Box className={first_div}>
                    <Typography className={first_div_heading}>Kokoruns Privacy Policy</Typography>
                </Box>
                {/* content */}
                <Box>
                    <Typography style={{ paddingTop: '30px' }}>
                        As a career branding platform, we have a mission to project people to the world in a way that enhances their
                        productivity and promote their life successes. As we do this, we commit ourselves to protecting your privacy by
                        keeping the data we collect about you private. This Privacy Policy applies to all of our registered users and those
                        who use our services.
                    </Typography>
                    <Typography style={{ padding: '30px 0px' }} className={about_heading}>
                        Introduction
                    </Typography>
                    <Typography>
                        Kokoruns is a technologies company that provides the resources that help individuals to brand themselves in line
                        with their careers and skills. The services that we provide enhance visibility for individuals and their
                        enterprises. People use our services to promote themselves in line with their careers, hobbies, skills,
                        entrepreneurship and associations. Our Company, School and Association pages act like DIY websites, while our Sports
                        Community page gives visibility to sports men and women, their skills, triumphs and events so that they can find
                        needed professional assistance. Some of the services we provide allow our registered users to connect with other
                        members of the Kokoruns community to form teams and interact with team members, give and receive recommendations,
                        send messages and promote events, all with the view to find business and career opportunities.
                    </Typography>

                    <Typography style={{ padding: '30px 0px' }} className={about_heading}>
                        Services
                    </Typography>

                    <Typography>
                        Our Privacy Policy applies to Kokoruns.com, Kokoruns related apps, KokoLearn, and all Kokoruns services offered
                        through our channels or associated channels. This Privacy Policy is applicable to all registered users irrespective
                        of the location region. Kokoruns International Limited will be the controller of your personal data provided to, or
                        collected by or for, or processed in connection with our Services.
                    </Typography>

                    <Typography>
                        Kokoruns International reserve the right to make changes to this Privacy Policy at any time, however, you will be
                        notified of any and all changes through any of our services before the changes takes full effect. However, if you do
                        object to any of the proposed changes at that time, you can choose to Close Your Kokoruns Account.
                    </Typography>
                    <br />
                    <Typography>
                        The data we have about you will include: <br />
                        - Data you submitted to us at registration <br />
                        - Data you filled into your profile ( and these might include your other social media links). <br />- Data that you
                        submitted during your Account Verification process. <br />
                        - Data that you submitted during the opening of your additional enterprises pages. <br />- Data that you submitted
                        to would be employers through our JobDash. <br />
                        - Data that you shared with team mates on KokoTeam. <br />
                        - Data that you shared with other Kokoruns community members in messages. <br />- Data that others shared about you
                        within the Kokoruns platform. <br />
                        - Data that you or others shared within our KokoLearn or Esolution service. <br />- Data that we collect through the
                        use of cookies and similar technologies. See our Cookie Policy.
                    </Typography>
                    <br />
                    <Typography>We use all data collected through the above means responsibly and protect your privacy.</Typography>
                    <br />
                    <Typography>We use your data to:</Typography>
                    <br />

                    <Typography>
                        - Provide personalized service and support for you. <br />
                        - Develop our services for your benefits. <br />
                        - Authorize access to our services and honour your settings. <br />
                        - Help you stay informed about events, news, and relatable information. <br />
                        - Enable better communication with you and other members. <br />
                        - Contact you and push notifications to you. <br />
                        - Provide extremely tailored ads that are disguised as notifications so as not to be offensive. <br />
                        - Offer different premium services that can enable you to opt out of seeing ads altogether. <br />- Provide better
                        platform security, fraud prevention and enable investigations.
                    </Typography>
                    <br />
                    <Typography>We focus on using your data to provide great service for you.</Typography>
                    <br />
                    <Typography>We protect your Privacy by:</Typography>
                    <br />
                    <Typography>
                        - Not sharing your personal data with third party advertisers.
                        <br />
                        - Implementing security safeguards that protect your data and monitor for breaches. <br />
                        As much as we try our utmost best to forestall security breaches and protect your personal data, we cannot warrant
                        the security or guarantee the breach or compromise of any of your information sent to us. Kindly note that in spite
                        of our best practices, data can be accessed, altered and destroyed.
                        <br />
                    </Typography>

                    <br />
                </Box>
            </Box>
            <Findoutmore
                firstLine="Find, Join or Create a Team. Work With"
                secondLine="Professionals & Colleagues on Projects"
                sub="Register for career-focused sponsored events here."
                bg="dd.png"
                path="/"
                buttonText="FIND OUT MORE"
            />
        </Box>
    );
}
