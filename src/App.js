import React from 'react';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import './App.css';

import theme from './theme';
import ScrollToTop from './components/reusables/ScrollToTop';

import Routes from './routes';

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
