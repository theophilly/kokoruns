import React from 'react';
import { Box, AppBar, Tabs, Tab, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`
    };
}

export default function AppTab({ Tab1, Tab1Label, Tab2, Tab2Label, Tab3, Tab3Label }) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box
            sx={{
                //  bgcolor: 'background.paper',
                width: 'calc(100% - 20px)',
                overflow: 'visible',
                ml: '20px',
                [theme.breakpoints.down('sm')]: {
                    ml: '0px',
                    width: '100%'
                }
            }}
        >
            <AppBar
                elevation={false}
                sx={{
                    bgcolor: '#F5F5F5 !important',
                    color: 'black',
                    mt: '10px',
                    '@media (min-width: 700px)': {
                        width: '700px !important'
                    }
                }}
                position="static"
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab
                        style={{
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            fontFamily: 'Mulish',
                            borderBottom: '2px solid #333333'
                        }}
                        label={Tab1Label}
                        {...a11yProps(0)}
                    />
                    <Tab
                        style={{
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            fontFamily: 'Mulish',
                            borderBottom: '2px solid #333333'
                        }}
                        label={Tab2Label}
                        {...a11yProps(1)}
                    />
                    <Tab
                        style={{
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            fontFamily: 'Mulish',
                            borderBottom: '2px solid #333333'
                        }}
                        label={Tab3Label}
                        {...a11yProps(2)}
                    />
                </Tabs>
            </AppBar>
            <SwipeableViews
                style={{ background: '#F5F5F5', mt: '20px', padding: '0px !important' }}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    {Tab1}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    {Tab2}
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    {Tab3}
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}
