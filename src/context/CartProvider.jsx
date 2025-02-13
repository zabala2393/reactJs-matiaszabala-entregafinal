import { CartContext } from "./CartContext"
import { useState } from "react"

export default function CartProvider({ children }) {
    let [cart, setCart] = useState([])

    const addToCart = item => {
        const isInCart = cart.find((prod) => prod.id === item.id)
        if (!isInCart) return (setCart([...cart, item]))        
    }
      
    const takeOffCart = async (item) => {
        
        const otherItems = cart.filter(prod=>prod.id == item.id)
        console.log(otherItems)   
        return   
    }

    const getQty = () => {
        const quantities = cart.map(item => item.quantity)
        const quantitiesTotal = quantities.reduce((acc, current) => acc + current, 0)
        return quantitiesTotal
    }

    const getTotal = () => {
        const totales = cart.map(item => item.quantity * item.price)
        const total = totales.reduce((acc, current) => acc + current, 0)
        return total
    }

    const clearCart = () => {
        let resetCart = setCart([])
        return resetCart               
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, getQty, getTotal,takeOffCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}