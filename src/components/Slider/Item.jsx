import {NavLink} from 'react-router-dom'
import {useState} from 'react';
import {CartContext} from '../context/CartContext';
import { useContext } from 'react'



function Item({itemProd = {}}) {
    const [total, setTotal] = useState(0)

    const {agregarEnCart} = useContext(CartContext)
    const OnAdd = (cantidad)=>{
        setTotal(cantidad)
        agregarEnCart({itemProd:itemProd, cantidad})
    }

    return ( 
        /* Swiper Item */
        <div>
            {itemProd.map((prod)=>{
                return(
                    <div className= "swiperOfertas__elemento  item-distance" key={prod.id}>
                        <NavLink to={`/item/${prod.id}`} className="navbar-brand" href="#">
                            <img src={prod.Imagen} alt="" height="300px" width="224px"/>
                            <br />
                            <p className="padding-null">{prod.Nombre}</p>
                            <br />
                            <p className="padding-null">${prod.Precio}</p> 
                        </NavLink>        
                    </div>
                )
            })}
        </div>
    )
}

export default Item
