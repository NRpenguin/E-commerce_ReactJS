import {useState} from 'react';
import { Link } from 'react-router-dom';

function ItemCount ({ min, max, OnAdd }){
    const [total, setTotal] = useState(1)
    const [pulsar, setPulsar] = useState(false)
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

    function cambioBoton (evt){ 
      OnAdd(total)
      setPulsar (true)
    }


    return<>
      <button onClick={restar}>-</button>
      {total}
      <button onClick={sumar}> + </button>
      <br />
      {
        pulsar ? 
          <Link to={'/cart'}><button> ir a cart </button></Link>
          
        :
        <button className="añadirCarrito" onClick={cambioBoton}>add to cart</button>
      }
    </>
}

export default ItemCount
