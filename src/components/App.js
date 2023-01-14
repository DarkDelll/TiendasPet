import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { createTheme, ThemeProvider} from '@mui/material'
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
    palette: {
      primary: {
        main: '#A8577E',
        darker: '#77dd77'},
      secondary: {
        main: '#D01616',
        darker:'#ff8097'
      },
      buttoncolor:{
      main: '#3B429F',
      contrastText:'#fff',
      },
      drawer:{
      main:'#FFF'}},
    
    
})

function App() {
  return (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Header/>
      <Main/>
      <Footer/>
    </ThemeProvider>
  </BrowserRouter>
  )
}

export default App;
