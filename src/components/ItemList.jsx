import React from 'react'
import Item from './Item'

function ItemList({itemProd}) {
    return (
        <div>
            {itemProd.map(item=> <Item/>)}
        </div>
    )
}

export default ItemList
