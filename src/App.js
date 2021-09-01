import './App.css';
import NavBar from './components/NavBar';
import Carrousel from './components/Carrousel'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Carrito/Cart'
import UseCartContext from "./components/context/CartContext";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProdList from './components/ProdList/ProdList';
import FooterContent from './components/Footer/FooterContent';

function App() {
  return (
    <UseCartContext>
      <Router>
        <Switch>
          <div className="App">
            <NavBar/>
            <Carrousel />
            <Route exact path="/">
              <ItemListContainer greeting="Ofertas" />
            </Route>
            <Route exact path="/category/:catId">
              <ItemListContainer greeting="Ofertas" />
            </Route>
            <Route exact path="/item/:ofertasId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/Cart">
              <Cart />
            </Route>
            <ProdList/>
            <FooterContent/>
          </div>
        </Switch>
      </Router>
    </UseCartContext>
  );
}

export default App;
