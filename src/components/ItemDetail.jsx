import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import {useState, useEffect} from 'react';
import CartContext from './context/CartContext';

function ItemDetail({state}) {
  const [total, setTotal] = useState(0)
  const {agregarEnCart} = useContext(CartContext)
  const OnAdd = (cantidad, prod)=>{
    setTotal(cantidad)
    agregarEnCart(state[0], cantidad)
  }

  return <>
    <div>
        <img src={state[0].imagen} alt="" />
        <p>{state[0].nombre}</p>
        <p>{state[0].precio}</p>
        <ItemCount OnAdd={OnAdd} min= {1} max={5} array={state}/>
    </div>
  </>
}

export default ItemDetail
