import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const cartStore = (set)=> ({
    cart: [],
    addCart: (cartData)=> {
        set((prevState)=>({
            cart: [cartData, ...prevState.cart]
        }))
    },
    removeCart: (cartId)=> {
        set((prevState)=>({
            cart: prevState.cart.filter((eachItem)=> eachItem.id !== cartId)
        }))
    }
})

const useCartStore = create(
    devtools(
        persist(cartStore, {
            name: 'cart',
        })
    )
)

export default useCartStore;