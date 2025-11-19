import { useState, createContext } from 'react';

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  //Variable de estado para el carrito
  const [cart, setCart] = useState([]);

  //Función para agregar un ítem al carrito
  function agregarEnCart(item, quantity) {
    const itemExist = cart.findIndex(elem => elem.id === item.id);
    // Si el ítem no existe en el carrito, agregarlo
    if (itemExist === -1) {
      setCart([...cart, { item, quantity }]);
    } else {
      // Si ya existe, actualizar la cantidad del ítem 
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