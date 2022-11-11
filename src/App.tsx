import { ThemeProvider, CssBaseline, Box, createTheme } from '@mui/material';

import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

const theme = createTheme({
  typography: {
    fontFamily: 'Stint Ultra Expanded, Pontano Sans, sans-serif, cursive',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Stint Ultra Expanded', 'Pontano Sans', sans-serif, cursive;
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url('https://fonts.googleapis.com/css2?family=Pontano+Sans&family=Stint+Ultra+Expanded&display=swap');
        }
      `,
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Box component="main">
          <About />
          <Work />
          <Contact />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
