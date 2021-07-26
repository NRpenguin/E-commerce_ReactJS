import React, {useState} from 'react';

function ItemCount ({min, max}){
    const [total, setTotal] = useState(0)
    function sumar() {
      if(total < max){
        setTotal(total + 1)  
      }
    }
    function restar() {
      if(total > min){
        setTotal(total - 1)
      }
    }
  
    return<>
      <button onClick={restar}>-</button>
      {total}
      <button onClick={sumar}> + </button>
    </>
}

export default ItemCount