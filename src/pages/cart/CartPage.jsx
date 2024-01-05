import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SubBanner from '../../sections/sub-banner/SubBanner'
import Image from '../../components/image/Image'
import QuantitySpinner from '../../components/quantity-spinner/QuantitySpinner'
import useCartStore from '../../app/store/cartStore'
import CloseMenuIcon from '../../assets/icons/CloseMenuIcon'
import EmptyCartIcon from '../../assets/icons/EmptyCartIcon'
import productData from '../../data/bestseller-product.json'
import './cartPage.scss'

export default function CartPage() {
    const {cart, addCart, removeCart} = useCartStore((state)=>({
        cart: state.cart,
        addCart: state.addCart,
        removeCart: state.removeCart
    }))

    const handleRemoveCartOnClick = (cartId)=>{
        removeCart(cartId)
    }
    
    const getProductDetails = (cartId, productId, variantsId, quantity) => {
        const product = productData.find(product => product.id === productId)
        if (product) {
            const variant = product.variants.find(variant => variant._id === variantsId)
            return { cartId, variant, quantity, ...product }
        }
        return null
    }

    const [cartProductData, setCartProductData] = useState([])

    useEffect(() => {
        setCartProductData(cart.map(item => getProductDetails(item.id, item.productId, item.variantsId, item.quantity)))
    }, [cart])
    
    const getCurrentQuantity = (quantity) => {
        console.log('Current Quantity:', quantity)
    }

    return (
        <>
            {/* Sub Banner Section */}
            <SubBanner title="Cart Items" />

            {/* Cart Section */}
            <section className="cart section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cart__header pb-4">
                                <h1 className="cart__header__title">Your Cart</h1>
                                <h2 className="cart__header__sub-title">{cartProductData.length} item{cartProductData.length !== 1 && 's'}</h2>
                            </div>
                            <div className="cart__list">
                                {
                                    cartProductData.length > 0 ?
                                    cartProductData.map((item, index)=>(
                                        <div key={index} className="cart__item">
                                            <figure className="cart__item__figure">
                                                <Image className="cart__item__figure__bg" src={item.variant.imageSrc} alt={item.variant.imageAlt} />
                                            </figure>
                                            <div className="cart__item__body">
                                                <Link to={`/product/${item.id}`} className="cart__item__title">{item.title}</Link>
                                                <p className="cart__item__text mt-1">৳ {item.price - item.discount}</p>
                                                <div className="d-flex align-items-center my-2"><span className="cart__item__text pe-2">Color:</span><span className="product-card__body__list__item" style={{ "--_variant": item.variant.color }}></span></div>
                                                <div className="cart__item__body__footer">
                                                    <QuantitySpinner sendCurrentQuantity={getCurrentQuantity} initialValue={item.quantity} max={100} />
                                                    <p className="cart__item__text"><strong>৳ {(item.price - item.discount) * item.quantity}</strong></p>
                                                </div>
                                                <button type="button" className="cart__item__btn" onClick={()=> handleRemoveCartOnClick(item.cartId)}>
                                                    <CloseMenuIcon />
                                                </button>
                                            </div>
                                        </div>
                                    )):
                                    <div className="cart__empty text-center">
                                        <span className="cart__empty__icon">
                                            <EmptyCartIcon />
                                        </span>
                                        <h3 className="cart__empty__title">Your Cart is Empty</h3>
                                        <p className="cart__empty__text">Nothing in Your Basket. Time to Browse and Shop</p>
                                        <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="cart__header pb-4">
                                <h1 className="cart__header__title">Order Summary</h1>
                            </div>
                            <div className="cart__body">
                                <div className="cart__header pb-4">
                                    <h2 className="cart__header__title">Subtotal</h2>
                                    <h2 className="cart__header__title">
                                    ৳ {cartProductData.reduce((total, eachItem)=> (total + ((eachItem.price - eachItem.discount) * eachItem.quantity)) , 0)}
                                    </h2>
                                </div>
                                <Link to="/" className="btn btn-dark text-center w-100">Proceed To Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}