import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import './App.css';

import theme from './theme';
import ScrollToTop from './components/reusables/ScrollToTop';
import Navbar from './components/layout/Navbar';
// import Footer from './components/reusables/Footer';

import Routes from './routes';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        <Navbar />
        <Routes />
        {/* <Footer /> */}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
