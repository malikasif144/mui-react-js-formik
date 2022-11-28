import './App.css';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from './components/Main';
import { Container } from '@mui/material';
import CakeSction from './components/CakeSction';
import ContactUs from './components/ContactUs';



const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
  },
});

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
     <Navbar/>
     <Container>
        <Main/>
        <CakeSction/>
        <ContactUs/>
     </Container>
    
     </ThemeProvider>
    </div>
  );
}

export default App;
