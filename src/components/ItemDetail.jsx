import React from 'react'

function ItemDetail({state}) {

  return (
    <div>
        {state[0].nombre}
        {state[0].imagen}
        {state[0].precio}
    </div>
  )
}

export default ItemDetail
