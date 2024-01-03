import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SubBanner from '../../sections/sub-banner/SubBanner'
import Image from '../../components/image/Image'
import QuantitySpinner from '../../components/quantity-spinner/QuantitySpinner'
import productData from '../../data/bestseller-product.json'
import cartData from '../../data/cart.json'
import './cartPage.scss'

export default function CartPage() {

    const getProductDetails = (productId, variantsId) => {
        const product = productData.find(product => product.id === productId)
        if (product) {
            const variant = product.variants.find(variant => variant._id === variantsId)
            return { ...product, variant }
        }
        return null
    }

    const [cartProductData, setCartProductData] = useState([])

    useEffect(() => {
        const transformedCartData = cartData.map(item => {
            return getProductDetails(item.productId, item.variantsId)
        })

        setCartProductData(transformedCartData)
    }, [cartData])
    
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
                                <h2 className="cart__header__sub-title">{cartProductData.length} items</h2>
                            </div>
                            <div className="cart__list">
                                {
                                    cartProductData.map(item=>(
                                        <div key={item.id} className="cart__item">
                                            <figure className="cart__item__figure">
                                                <Image className="cart__item__figure__bg" src={item.variant.imageSrc} alt={item.variant.imageAlt} />
                                            </figure>
                                            <div className="cart__item__body">
                                                <Link to={`/product/${item.id}`} className="cart__item__title">{item.title}</Link>
                                                <div className="d-flex align-items-center my-2"><span className="cart__item__text pe-2">Color:</span> <span className="product-card__body__list__item" style={{ "--_variant": item.variant.color }}></span></div>
                                                <div className="cart__item__body__footer">
                                                    <QuantitySpinner sendCurrentQuantity={getCurrentQuantity} max={100} />
                                                    <p className="cart__item__text">${item.price - item.discount}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
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
                                        {
                                            cartProductData.reduce((total, eachItem)=> (total + (eachItem.price - eachItem.discount)) , 0)
                                        }
                                    </h2>
                                </div>
                                <Link to="/" className="btn btn-dark w-100">Proceed To Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}