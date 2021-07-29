import React from 'react'

function ItemDetail({state, pasarArray, pasarParams}) {

  function OnClick(){
    if(pasarArray.id === pasarParams){
      state.filter(it => it.id = pasarParams)
    }
  }
  return (
    <div>
        <img src={state[0].imagen} alt="" />
        <p>{state[0].nombre}</p>
        <p>{state[0].precio}</p>
    </div>
  )
}

export default ItemDetail
