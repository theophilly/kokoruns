import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { School, People, Business } from '@mui/icons-material';

const data = [
  {
    icon: <Business sx={{ fontSize: 20 }} />,
    title: 'Company',
  },
  {
    icon: <People sx={{ fontSize: 20 }} />,
    title: 'Association',
  },
  {
    icon: <School sx={{ fontSize: 20 }} />,
    title: 'Schools',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    ...theme.typography.flex,
    flexDirection: 'column',
    background: theme.palette.background1,
    //  border: '1px solid red',
    paddingTop: '30px',
    paddingBottom: '60px',
    '@media (max-width: 500px)': {
      lineHeight: '2rem',
    },
  },
  first_div: {
    // height: '160px',
    // border: '1px solid red',
    '@media (max-width: 500px)': {
      marginTop: '40px',
    },
  },
  first_div_heading: {
    ...theme.typography.title1,
    color: theme.palette.primary.main,
    '@media (max-width: 500px)': {
      lineHeight: '2.2rem',
      textAlign: 'center',
      marginBottom: '30px',
    },
  },
  list_title: {
    fontWeight: '600',
    fontSize: '1.3rem',
    margin: '15px 0px',
  },
  usekokoruns_register: {
    borderRadius: '0px',
  },
  information_box: {
    '@media (max-width: 500px)': {
      ...theme.typography.flex,
      flexDirection: 'column',
      alignItems: 'center',
      // border: '1px solid red',
      //  marginTop: '-40px',
    },
  },
  information_box_list: {
    '@media (max-width: 500px)': {
      textAlign: 'center',
    },
  },
}));

const Usesingle = ({ icon }) => {
  return (
    <Box>
      <Avatar
        sx={{ bgcolor: '#D92627', height: '35px', width: '35px' }}
        variant="rounded"
      >
        {icon}
      </Avatar>
    </Box>
  );
};

export default function Usekokoruns() {
  const {
    root,
    first_div,
    first_div_heading,
    list_title,
    usekokoruns_register,
    information_box,
    information_box_list,
  } = useStyles();
  return (
    <Box className={root}>
      <Box className={first_div}>
        <Typography className={first_div_heading}>
          Who can use Kokoruns?
        </Typography>
      </Box>
      <Box
        gap="70px"
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        margin="50px 0"
      >
        {data.map((item) => (
          <Box className={information_box}>
            <Usesingle icon={item.icon} />
            <Typography className={list_title}>{item.title}</Typography>
            {item.title === 'Company' && (
              <Typography className={information_box_list}>
                - Showcase your business and products <br /> - Find qualified,
                honest talents <br /> - Find Staff close to your location <br />{' '}
                - Post Jobs <br /> - Send job invitations <br /> - Post events{' '}
                <br /> - Find resources for your job openings
              </Typography>
            )}
            {item.title === 'Schools' && (
              <Typography className={information_box_list}>
                - DIY website for your school
                <br />
                - Find qualified, honest staff <br />
                - Find Staff close to your location <br />
                - Post Jobs <br />
                - Send job invitations <br />
                - Post events <br />
                - Find resources for your job openings <br />
                - Broadcast to students and parents <br />
              </Typography>
            )}
            {item.title === 'Association' && (
              <Typography className={information_box_list}>
                - DIY website for your associations <br />
                - Find and send Membership invitations <br />
                - Broadcast to Members <br />
                - Post Jobs <br />
                - Send job invitations <br />
                - Post events <br />
                - Send events invitations <br />
              </Typography>
            )}
          </Box>
        ))}
      </Box>
      <Button
        disableElevation
        className={usekokoruns_register}
        variant={'contained'}
      >
        Register
      </Button>
    </Box>
  );
}
