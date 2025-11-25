import { useContext } from 'react'
import ItemCount from './ItemCount'
import {useState} from 'react';
import {CartContext} from './context/CartContext';

function ItemDetail({itemDet}) {
  if (!itemDet || !itemDet.Nombre) {
    return <p>Cargando...</p>;
  }
  const {agregarEnCart} = useContext(CartContext) 
  //unidades del item agregado al carrito
  const [total, setTotal] = useState(0)

  //al hacer click en el boton "agregar al carrito" esta funcion se ejecuta.
  //actualiza el estado total(que tenia como valor 0)
  //y agrega el item al carrito
  const OnAdd = (cantidad)=>{
    setTotal(cantidad)
    agregarEnCart(itemDet, cantidad)
  }
  
  return <>
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
