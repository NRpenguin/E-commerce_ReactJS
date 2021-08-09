import React from 'react'
import Item from './Item'

function ItemList({itemProd}) {
    return (
        <div>
            {itemProd.map(prods=> <Item key={prods.id} imagen={prods.imagen} nombre={prods.nombre} precio={prods.precio}/>)}
        </div>
    )
}

export default ItemList
