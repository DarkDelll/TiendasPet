
import './App.css';
import Footer from './Footer';
import Header from './Header';
import ItemListContainer from './ItemListContainer';
import Main from './Main';

function App() {
  return (
    <>
    <Header/>
    <ItemListContainer greetings="Bienvenidos a la tienda"/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App;
