import React from 'react'

function Item({imagen,nombre,precio}) {
    return (
        <div>
           <img src={imagen} alt="" />
           <br/>
           {nombre}
           <br/>
           {precio}
           <br/>
           <hr/>
        </div>
    )
}

export default Item
