import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import {useState} from 'react';
import {CartContext} from './context/CartContext';

function ItemDetail({itemDet}) {
  const [total, setTotal] = useState(0)
  const {agregarEnCart} = useContext(CartContext) 
  const OnAdd = (cantidad)=>{
    setTotal(cantidad)
    agregarEnCart(itemDet, cantidad)
  }
  return <>

    {/* todo puesto en su lugar, solo falta usar la array de firebase que se obtiene por url */}
    <div className="div-order">
      <div>
        <img src={itemDet.Imagen} alt="" height="400px" width="324px"/>
      </div>
      <div className="align-text">
        <h1>{itemDet.Nombre}</h1>
        <span className="font-size">${itemDet.Precio}</span> 
        <p>datos del libro:</p>
        <ul className="align-text">
          <li>Autor:</li>
          <li>Paginas:</li>
          <li>Sinopsis:</li>
        </ul>
      </div>
      <div>
        <ItemCount OnAdd={OnAdd} min= {1} max={5}/>
      </div>
    </div>
  </>
}

export default ItemDetail
