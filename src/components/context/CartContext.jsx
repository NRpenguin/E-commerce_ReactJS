import { useState, createContext } from 'react'

export const CartContext = createContext()

function UseCartContext({children}) {
    const [cart, setCart] = useState([])
    function agregarEnCart(item, quantity){
        const compartativa = cart.indexOf(item.id === item.id) 
        if(compartativa === -1){
            setCart([...cart, {item, quantity}])
        }else{
            setCart([...cart, {item, quantity: quantity + quantity}])
        }
    }
    return (
        <div>
            <CartContext.Provider value={{cart, agregarEnCart}}>
                {children}
            </CartContext.Provider>
        </div>
    )
}


export default UseCartContext