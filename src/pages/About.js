import React from 'react';

// material-ui
import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
import Findoutmore from '../components/homepage/Findoutmore';

export default function About() {
    const matches = useMediaQuery('(min-width:500px)');
    const theme = useTheme();

    return (
        <Box
            sx={{
                background: '#faf9f9'
            }}
        >
            <Box
                sx={{
                    width: '90vw',
                    margin: '0px auto 0px',
                    paddingTop: '20px',
                    '@media (max-width: 500px)': {
                        paddingTop: '0px'
                    }
                }}
            >
                <Findoutmore
                    firstLine="A golden standard team of dedicated talents"
                    sub="We are a team of diverse talents that utilized our individual strengths inorder to build a product that serves the character of its purpose"
                    bg="about.png"
                    heigth="60vh"
                />
            </Box>
            {/* middle */}
            <Box width="90vw" margin="20px auto 0px" height="auto">
                <Box
                    sx={{
                        marginTop: '40px',

                        ...theme.typography.flex,
                        '@media (max-width: 500px)': {
                            marginTop: '40px'
                        }
                    }}
                >
                    <Typography
                        sx={{
                            ...theme.typography.title2,
                            color: theme.palette.primary.main,
                            '@media (max-width: 500px)': {
                                lineHeight: '2.2rem',
                                textAlign: 'center',
                                marginBottom: '30px'
                            }
                        }}
                    >
                        About Kokoruns?
                    </Typography>
                </Box>
                {/* content */}
                <Box>
                    <Typography sx={{ ...theme.typography.sub_heading1, color: theme.palette.primary.main }}>Who we are.......</Typography>
                    <Typography sx={{ ...theme.typography.sub_heading1, color: theme.palette.primary.main }}>What we do.......</Typography>
                    <Typography sx={{ ...theme.typography.sub_heading1, color: theme.palette.primary.main }}>How we help......</Typography>
                    <Typography sx={{ ...theme.typography.sub_heading1, color: theme.palette.primary.main }}>Do your part......</Typography>
                    <Typography sx={{ ...theme.typography.sub_heading1, color: theme.palette.primary.main }}>
                        What the future holds......
                    </Typography>
                    <Typography
                        style={{
                            padding: matches ? '90px 0px 30px' : '30px 0px 30px'
                        }}
                        sx={{ ...theme.typography.sub_heading1, color: theme.palette.primary.main }}
                    >
                        Who we are.......
                    </Typography>
                    <Typography>
                        Kokoruns is registered in Nigeria under the trade name Kokoruns International Limited and headquartered in Lekki 1
                        Lagos. We are the first indigenous company aiming to create a unique platform for Nigerians to converge and find
                        each other based on locality, profession/career, interests, ideas, schools attended, associations and industry and
                        even trainings attended. Our mission is to brand you and help to create an identity for every single Nigerian
                        irrespective of tribe, educational level, gender and career to distinguish his or herself and aim to stand out and
                        be respected not because of what they say they are but all because of what they do and how they add value to
                        community.
                    </Typography>
                    <Typography
                        style={{ padding: '30px 0px' }}
                        sx={{ ...theme.typography.sub_heading1, color: theme.palette.primary.main }}
                    >
                        What we do.......
                    </Typography>
                    <Typography>
                        Kokoruns create software engineering technologies that provide access to the resources that help build you as a
                        brand. On Kokoruns, you will find the means to make a statement about yourself and own your future. Using our
                        platforms, you can credibly define, improve, publicise, and celebrate yourself.
                    </Typography>
                    <br />
                    <Typography>
                        Kokoruns is all about you and authenticating yourself. Everything you post on your Kokoruns page is verifiable and
                        we help you to authenticate all your posts, because if you are believable (credible).... <br /> You are trustworthy!
                        <br /> You are valuable!
                        <br /> You are saleable!
                        <br /> You are respected!
                        <br /> You are quality! <br /> You are a BRAND!
                        <br />
                    </Typography>
                    <br />
                    <Typography>
                        Our dispatched technologies ensure that people that find you can and will be able to add value to you because they
                        are: Either your professional colleagues; your past, present or potential employers or clients; or value adding
                        entities like your professional associations, school’s alumni and people/ organizations that would like to
                        collaborate or partner with you on projects.
                    </Typography>
                    <br />
                    <Typography>“All work and no play......”</Typography>
                    <br />
                    <Typography>
                        While we focus mainly on your primary career, we appreciate the importance of all your “runs”. We want to help you
                        become all you can be. Your legitimate hustles are our ultimate concern and a multitalented, multitasking,
                        multiskilled, multidiscipline, multipotential, multilingual you, deserves to be a brand. We will not allow your runs
                        to be limited as all work and no play is sure to make you dull. Be proud of who you are and what you do. Your User
                        dashboard defines you in terms of your chosen career(s), gender, age bracket, marital status, languages spoken or
                        learned, academic level, work experiences, projects worked on, certifications earned, technical and soft skills,
                        location and if you are living with a disability. There is available feature to link all your social media as well
                        as online pages on your Kokoruns dashboard so that you can find all your pages in one place and so can others if you
                        so wish.
                    </Typography>
                    <Typography
                        style={{ padding: '30px 0px' }}
                        sx={{ ...theme.typography.sub_heading1, color: theme.palette.primary.main }}
                    >
                        How we help......
                    </Typography>

                    <Typography>
                        As a community of professional and non professionals as well as, companies, schools and associations, the
                        possibilities for upward career and economic trajectory become endless if you are a registered Kokoruns user. You
                        can find professional and non professional colleagues or association and be authenticated; brand and verify
                        yourself; get yourself noticed and begin to make an impact in your community; create company, school or association
                        pages and further expose your other brands to the world without the need for a website; be able to add content to
                        all of your pages by yourself unlike a website and also get friend, colleagues, employers and clients to recommend
                        you.
                    </Typography>
                    <br />
                    <Typography>
                        Users register on the platform and put up their profile choosing one or more applicable career options listed. A
                        quick search enables employers to view prospective applicants within a certain location or within all locations.
                        Users’ name, availability, work experience, academic level, age bracket, verification status, LGA, state, portfolio,
                        skills, education, social media, languages and dialects, scholarly documents as well as collaboration links are some
                        of the information displayed.
                    </Typography>
                    <br />
                    <Typography>
                        A Kokoruns profile acts as an online resume and thus helps to reduce file sharing risks on peer to peer networks.
                        Other features of the Kokoruns platform are: <br /> <br />- Users are also able to cross recommend each other,
                        team-up for projects, and join groups with based on similar interests. Every registered user that views a profile is
                        allowed to “recommend” that profile. Every recommendation can be traced to the recommender. <br />
                        - Users are also able to create events and invite group members to such events. <br />
                        - Users are able to verify their accounts on by providing particular identification detail to Kokoruns. <br />
                        - Users can access various resources such as trainings and digital solutions. <br />
                        - Users can also choose suitable news feed by category. <br />- Users are also able to customize their individual
                        dashboards. <br />- Users are able to identify with schools, companies, organizations and associations they have/had
                        affiliations with.
                    </Typography>
                    <br />
                    <Typography>
                        The above list is not exhaustive and more advanced features will sure be added over time. Do your part......
                    </Typography>
                    <Typography>
                        Users could well do their part by telling others about the benefits of using Kokoruns and being members of the
                        largest Nigerian online community. Respecting the rights of other users by keeping to our Terms and Agreement and
                        Privacy Policy is a huge part of being a Kokoruns community member. Also, a well completed user profile and a
                        ‘verified user’ tag, connotes reliability and openness to work opportunities.
                    </Typography>
                    <Typography
                        style={{ padding: '30px 0px' }}
                        sx={{ ...theme.typography.sub_heading1, color: theme.palette.primary.main }}
                    >
                        What the future holds......
                    </Typography>
                    <Typography>As a Kokoruns’ citizen, you have a bright future ahead of you.</Typography>
                    <Typography>
                        Kokoruns offers unlimited access to job postings and job availabilities nationwide. Our community members enjoy
                        unmitigated access to news and notifications of user relevant sporting events, symposiums, conferences, workshops,
                        seminars, competitions, health screenings, auditions etc. Being a verified Kokoruns member (Kokoruns’ Citizen) has
                        several benefits such as:
                    </Typography>
                    <Typography>
                        - Becoming a vendor <br />
                        - Becoming our ambassador <br />
                        - Becoming our in-house professional <br />
                        - Becoming top 100 Kokoruns Companies/School/Association <br />
                    </Typography>
                    <br />
                    <Typography style={{ paddingBottom: '30px' }}>Register now and start defining you!</Typography>
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
