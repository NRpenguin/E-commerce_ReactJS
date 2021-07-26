import React from 'react'

function Item({imagen,nombre,precio}) {
    return (
        <div>
            <img src={imagen} alt="" />
            <br />
            {nombre}
            <br />
            {precio}
        </div>
    )
}

export default Item
