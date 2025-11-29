import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Form from '../form/Form';

function Cart() {
  const { cart, eliminarItemCart, eliminarCart } = useContext(CartContext)
  const itemsRender = cart ? cart.map((prodCart) => (
    <div className="espacio" key={prodCart.item.id}>
      <img
        src={prodCart.item.Imagen}
        alt={prodCart.item.Nombre}
        height="300px"
        width="224px"
      />
      <button onClick={()=>{eliminarItemCart(prodCart.item.id)}} className="btn btn-primary remover-carrito colocar">x</button>
      <p>{prodCart.item.Nombre}</p>
      <p>{prodCart.item.Precio}</p>
      <p>{prodCart.quantity}</p>
    </div>
  )) : []

  return (
    <div className='carousel-slider'>
      <div className="container container-shape">
        <h1>Carrito</h1>
        <button onClick={eliminarCart} className="alinear" id="eliminarTodo">Eliminar Productos</button>
        <hr />
        <div className="orden">
          {itemsRender}
        </div>
      </div>
      <div className="container border">
        <Form />
      </div> 
    </div>
  );
} 

export default Cart;
