import React from 'react'

function Item({imagen,nombre,precio}) {
    return (
        <div>
           {imagen}
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
