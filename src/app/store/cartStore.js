import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const cartStore = (set)=> ({
    cart: [],

    addCart: (cartData)=> {
        set((prevState)=>{
            let isProductIdExist = prevState.cart.some((eachItem) => eachItem.productId === cartData.productId && eachItem.variantsId === cartData.variantsId)

            if(!isProductIdExist){
                return {
                    cart: [cartData, ...prevState.cart]
                }
            }else{
                const updatedCart = prevState.cart.map(eachItem=>{
                    if(eachItem.productId === cartData.productId && eachItem.variantsId === cartData.variantsId){
                        return {
                            ...eachItem,
                            quantity: eachItem.quantity + cartData.quantity
                        }
                    }
                    return eachItem
                })

                return {
                    cart: updatedCart
                }
            }
        })
    },

    removeCart: (cartId)=> {
        set((prevState)=>({
            cart: prevState.cart.filter((eachItem)=> eachItem.id !== cartId)
        }))
    },

    // updateCart: (cartData)=> {
    //     set((prevState)=>{

    //     })
    // }
})

const useCartStore = create(
    devtools(
        persist(cartStore, {
            name: 'cart',
        })
    )
)

export default useCartStore;