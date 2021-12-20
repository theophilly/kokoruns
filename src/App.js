import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/styles';
import { CssBaseline, StyledEngineProvider, Box } from '@mui/material';
import './App.css';

import theme from './theme';
import ScrollToTop from './components/reusables/ScrollToTop';
import Navbar from './components/kk/Navbar';
// import Footer from './components/reusables/Footer';

import Routes from './routes';
import Footer from './components/kk/Footer';

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ScrollToTop />
                <Routes />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
