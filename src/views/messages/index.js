import React from 'react';
import { Grid, Paper, Avatar, Typography, useTheme, InputBase, Select, MenuItem, Box, useMediaQuery, styled, Badge } from '@mui/material';
import SubCard from '../../ui-component/cards/SubCard';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import ChatItem from './ChatItem';
import chats from '../../config/chats';
import Message from './Message';

const StyledBadge = styled(Badge)(({ theme, active }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""'
        }
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0
        }
    }
}));

export default function MessagesScreen() {
    const [age, setAge] = React.useState('');
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Grid spacing={2} container>
                <Grid xs={12} md={3.2} item>
                    <Box sx={{ minHeight: '100%', maxHeight: '100%' }}>
                        <Box
                            component="div"
                            className="customscroll"
                            style={{
                                height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                                scrollbarWidth: '5px'
                            }}
                        >
                            <SubCard sx={{ boxShadow: 'none' }}>
                                {/* about user */}
                                <Box
                                    sx={{
                                        ...theme.typography.column,
                                        height: '200px',
                                        alignItems: 'center',
                                        paddingTop: '20px'
                                    }}
                                >
                                    <Avatar alt="Remy Sharp" src="./register.png" sx={{ width: 100, height: 100 }} />
                                    <Box mt="3px">
                                        <Typography
                                            sx={{ ...theme.typography.heading, fontWeight: 'bold', textAlign: 'center', mt: '5px' }}
                                        >
                                            Adejola Ademola
                                        </Typography>
                                        <Typography sx={{ textAlign: 'center', fontSize: '0.8rem', mt: '2px' }}>UI/UX Designer</Typography>
                                    </Box>
                                </Box>
                                {/* search */}
                                <Box
                                    sx={{
                                        padding: '0 5px',
                                        background: 'white',
                                        height: '39px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        bgcolor: '#CEE9FF',
                                        borderRadius: '6px',
                                        border: 'none',
                                        '&:hover': {}
                                    }}
                                >
                                    <Avatar sx={{ bgcolor: 'inherit', height: '30px', width: '30px' }} variant="round">
                                        <SearchIcon fontSize="small" />
                                    </Avatar>
                                    <InputBase
                                        placeholder="Search"
                                        sx={{
                                            height: '30px',
                                            width: '100%',
                                            background: 'inherit',
                                            '& ::placeholder': {
                                                color: 'white'
                                            }
                                        }}
                                    />
                                </Box>

                                {/* sort */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        mt: '5px',
                                        height: '50px'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: '600'
                                        }}
                                    >
                                        My Chats
                                    </Typography>
                                    <Box sx={{ ...theme.typography.flex }}>
                                        <Typography
                                            sx={{
                                                fontSize: '0.9rem',
                                                mr: '3px'
                                            }}
                                        >
                                            sort by
                                        </Typography>
                                        <Select
                                            sx={{
                                                height: '23px',
                                                width: '80px',
                                                marginLeft: '1px',
                                                background: 'white',
                                                borderRadius: '0px',
                                                fontSize: '0.9rem'
                                            }}
                                            onChange={handleChange}
                                            placeholder="filter by name"
                                            value={age}
                                        >
                                            <MenuItem value={10}>date</MenuItem>
                                            <MenuItem value={20}>time</MenuItem>
                                            <MenuItem value={30}>chats</MenuItem>
                                        </Select>
                                    </Box>
                                </Box>

                                {/* chats */}
                                <Box>
                                    {chats.map((item) => (
                                        <ChatItem {...item} />
                                    ))}
                                </Box>
                            </SubCard>
                        </Box>
                    </Box>
                </Grid>

                {matchUpMd && (
                    <Grid xs={12} md={8.8} item>
                        <Paper sx={{ minHeight: '100%', maxHeight: '100%' }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '20px',
                                    height: 'max-content',
                                    borderBottom: '1px solid #C4C4C4'
                                }}
                            >
                                <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                                    <Avatar sx={{ width: 65, height: 65 }} alt="Remy Sharp" src="./register.png" />
                                </StyledBadge>
                                <Typography sx={{ ...theme.typography.heading, fontWeight: '700', ml: '15px' }}> Julius Iyela </Typography>
                            </Paper>

                            <Box
                                component="div"
                                className="customscroll"
                                style={{
                                    height: !matchUpMd ? 'calc(100vh - 300px)' : 'calc(100vh - 268px)',
                                    paddingLeft: '16px',
                                    paddingRight: '16px',
                                    scrollbarWidth: '5px',
                                    flex: 1
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end !important', flexDirection: 'column' }}>
                                    <Message />
                                    <Message />
                                    <Message />
                                    <Message owner />
                                    <Message owner />
                                    <Message />
                                    <Message owner />
                                </Box>
                            </Box>
                            <Paper
                                elevation={0}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '0 30px',
                                    borderTop: '1px solid #C4C4C4',
                                    height: '70px'
                                }}
                            >
                                <InputBase
                                    sx={{
                                        flex: 1,
                                        background: '#EAEAEA',
                                        borderRadius: '10px',
                                        border: 'none',
                                        pl: '15px',
                                        height: '50px'
                                    }}
                                    placeholder="Type your message"
                                />
                                <Box sx={{ margin: '0 20px' }} component="img" src="./Vector.png"></Box>
                                <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                                    <SendIcon fontSize="small" />
                                </Avatar>
                            </Paper>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}
