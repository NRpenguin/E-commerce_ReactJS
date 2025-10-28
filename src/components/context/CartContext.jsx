import { useState, createContext } from 'react';

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function agregarEnCart(item, quantity) {
    const itemExist = cart.findIndex(elem => elem.id === item.id);
    if (itemExist === -1) {
      setCart([...cart, { item, quantity }]);
    } else {
      const nuevoCarrito = [...cart];
      nuevoCarrito[itemExist].quantity += quantity;
      setCart(nuevoCarrito);
    }
  }

  return (
    <CartContext.Provider value={{ cart, agregarEnCart }}>
      {children}
    </CartContext.Provider>
  );
}