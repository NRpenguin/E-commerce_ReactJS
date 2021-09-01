import React from 'react'
import { useContext } from 'react'
import {CartContext} from "../context/CartContext"
import Form from '../form/Form'

function Cart() {
    const {cart} = useContext(CartContext)

    console.log(cart);
    return (
        <div>
            <div  className="container container-shape">
                <h1>Cart</h1>
                <button class="alinear" id="eliminarTodo">Eliminar Productos</button> 
                <hr />
                <div className="orden"> 
                    {cart.map((prodCart)=>{
                        return(
                            <div className="espacio" key={prodCart.id}>
                                <img src={prodCart.item.Imagen} alt="" height="300px" width="224px"/>
                                <button className="btn btn-primary remover-carrito colocar">x</button>
                                <p>{prodCart.item.Nombre}</p>
                                <p>{prodCart.item.Precio}</p>
                                <p>{prodCart.item.quantity}</p>
                            </div>
                        );
                    })}
                </div>
                
            </div>
            <div className="container border">
                <Form/>
            </div>
        </div>
    )
}
export default Cart
