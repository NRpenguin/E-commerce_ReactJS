import './App.css';
import NavBar from './components/NavBar';
import Carrousel from './components/carrousel'
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer'
import Cart from './components/Carrito/cart'
import {CartContextProvider} from "./components/context/cartContext";
import { Routes, Route } from 'react-router-dom';
import ProdList from './components/ProdList/prodList';
import FooterContent from './components/Footer/footerContent';

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <NavBar />
        <Carrousel />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Ofertas" />} />
          <Route path="/category/:catId" element={<ItemListContainer greeting="Ofertas" />} />
          <Route path="/item/ofertasd/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/prodlist" element={<ProdList />} />
        </Routes>
        <FooterContent />
      </div>
    </CartContextProvider>
  );
}

export default pp;
