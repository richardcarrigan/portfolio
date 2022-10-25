import { CssBaseline, Box } from '@mui/material';

import Header from './components/Header';
import Landing from './components/Landing';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Header />
      <Box component='main'>
        <Landing />
        <Work />
        <Contact />
      </Box>
    </div>
  );
}

export default App;
