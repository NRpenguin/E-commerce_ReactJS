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
    //devuelve una nueva array con todos los ids que hay dentro del carrito
    const ids= cart.map(obj => obj.item.id)

    // Si item ya existe dentro del carrito, actualizar la cantidad del ítem 
    if (ids.includes(item.id)) {
      //encontrar el elemento que tenga el id repetido. Luego acceder a su cantidad y sumarle el nuevo pedido. luego crear un nuevo objeto con la data del item original, solo que actualizando
      //la cantidad, finalmente pedirle a map que recorra las ids de cart y si hay una que coincida con la del item, actualizarlo con la nueva data y si no encuentra nada, devuelve el item original sin cambio
      const findItem = cart.find(elem => elem.item.id === item.id) 
      const sum = findItem.quantity + quantity
      const newItem = {...findItem, quantity:sum}
      const actualizarCart = cart.map(elem =>
        elem.item.id === item.id ? newItem : elem
      );
      console.log(cart)
      setCart(actualizarCart);
    } else {
    // Si el ítem no existe en el carrito, agregarlo
      setCart([...cart, { item, quantity }]);
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