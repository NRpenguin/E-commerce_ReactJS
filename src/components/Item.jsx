import React from 'react'
import ItemListContainer from './ItemListContainer'
import {añadirEvento} from './ItemListContainer'


function Item({imagen,nombre,precio}) {
    return (
        <div>
            <img src={imagen} alt="" />
            <br />
            <p className="padding-null">{nombre}</p>
            <br />
            <button onClick="">Pulsar</button>
            <br />
            <p className="padding-null">${precio}</p>
        </div>
    )
}

export default Item
