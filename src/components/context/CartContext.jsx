import { useState, createContext, use, useEffect } from 'react';

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  //Variable de estado para el carrito
  const [cart, setCart] = useState(() => {
    
    // Obtener el carrito guardado en localStorage al inicializar el estado
    const carritoGuardado = localStorage.getItem('cart');
    
    //Si hay data guardada, mostrarla, sino iniciar con un array vacio
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
   
  });

  useEffect(() =>{
    // Guardar el carrito en localStorage cada vez que cambie
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);



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

  function eliminarItemCart (id){
    const carritoString = localStorage.getItem('cart');
    const carritoArray = carritoString ? JSON.parse(carritoString) : []
    const eliminarItem = carritoArray.filter(elemento => elemento.item.id !== id)
    setCart(eliminarItem)
  }

  function eliminarCart (){
    const eliminar = localStorage.removeItem('cart');
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, agregarEnCart, eliminarItemCart, eliminarCart }}>
      {children}
    </CartContext.Provider>
  );
}