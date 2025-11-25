import './App.css';
import NavBar from './components/NavBar';
import Carrousel from './components/Carrousel'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Carrito/Cart'
import {CartContextProvider} from "./components/context/CartContext";
import { Routes, Route } from 'react-router-dom';
import ProdList from './components/ProdList/ProdList';
import FooterContent from './components/Footer/FooterContent';

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <NavBar />

        <main>
          <Routes>
            <Route path="/" element={
               <>
               <Carrousel />
                <ItemListContainer greeting="ofertas" />
                </>
              }
            />
            <Route path="/category/:catId" element={<ItemListContainer greeting="categoria" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/prodlist" element={<ProdList />} />
          </Routes>
        </main>   

        <FooterContent />
      </div>
    </CartContextProvider>
  );
}

export default App;
