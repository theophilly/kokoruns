import React from 'react';
import { Box, Avatar, Typography, useTheme, Button } from '@mui/material';

export default function RecommendationItem({ handleRecommendOpen, text }) {
    const theme = useTheme();
    return (
        <Box
            sx={{
                border: '1px solid #33333380',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: '4px',
                padding: '10px',
                mt: '10px'
            }}
        >
            {/* avatar */}
            <Box sx={{ display: 'flex', cursor: 'pointer' }}>
                <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src="./student.png" />

                <Box sx={{ ...theme.typography.column, flex: 1, ml: '20px', justifyContent: 'center' }}>
                    <Typography
                        sx={{
                            fontWeight: '600',
                            color: theme.palette.text
                        }}
                    >
                        Cynthia Eluzonam
                    </Typography>

                    <Typography sx={{ color: theme.palette.textColor1 }} variant="caption">
                        User Experience Designer, Kokoruns
                    </Typography>
                </Box>
            </Box>
            {/* status */}
            <Box
                sx={
                    {
                        // border: '1px solid red'
                    }
                }
            >
                <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: '600', mb: '-7px' }}>
                    <Box
                        sx={{
                            width: '14px',
                            //  display: 'inline-block',
                            height: '14px',
                            borderRadius: '50%',
                            background: '#F2994A',
                            marginRight: '7px'
                        }}
                    />
                    Pending
                </Typography>
                <Typography sx={{ color: theme.palette.textColor1 }} variant="caption">
                    05/12/2021
                </Typography>
            </Box>
            {/* buttons */}
            <Box>
                <Button onClick={() => handleRecommendOpen()} disableElevation sx={{ textTransform: 'capitalize' }} variant="contained">
                    {text ? text : 'Make Recommendations'}
                </Button>
                <Button sx={{ textTransform: 'capitalize', ml: '10px' }}>View Profile</Button>
            </Box>
        </Box>
    );
}
