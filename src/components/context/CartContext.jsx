import { useState, createContext, useContext } from 'react'


export const CartContext = createContext()

function UseCartContext({Children}) {
    const [cart, setCart] = useState([])
    function agregarEnCart(item, quantity){
        if( item===undefined ){
            setCart(...cart, item, quantity)
        }else{
            setCart(...cart, (quantity+quantity))
        }
    }
    return (
        <div>
            <CartContext.Provider value={cart, agregarEnCart}>
                {Children}
            </CartContext.Provider>
        </div>
    )
}


export default UseCartContext