import React, { useState, useCallback, useEffect, useRef } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import Image from '../../components/image/Image';
import QuantitySpinner from '../../components/quantity-spinner/QuantitySpinner'
import TestimonialSlider from '../../components/sliders/testimonial/TestimonialSlider'
import testimonialSlidesData from '../../data/testimonial-slider.json'
import LeftIcon from '../../assets/icons/LeftIcon';
import RightIcon from '../../assets/icons/RightIcon';
import useCartStore from '../../app/store/cartStore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './singleProduct.scss'

export default function SingleProduct() {
    const minQuantity = 1
    const {id, SKU, title, description, price, discount, stock, variants} = useLoaderData()
    const [currentProductTestimonialData, setCurrentProductTestimonialData] = useState([])
    const [initialQuantity, setInitialQuantity] = useState(minQuantity)
    const [maxQuantity, setMaxQuantity] = useState(stock)
    const [quantity, setQuantity] = useState(minQuantity)
    const [currentVariantIndex, setCurrentVariantIndex] = useState(0)
    const quantitySpinnerRef = useRef()
    const hasMoreThanOneProduct = variants.length > 1
    const variantIndexRef = useRef(currentVariantIndex)
    const {cart, addCart} = useCartStore((state)=>({
        cart: state.cart,
        addCart: state.addCart
    }))

   
    useEffect(() => {
        setCurrentProductTestimonialData(testimonialSlidesData.filter(item=> item.productId === id))

        const totalQuantityInCart = cart.reduce((total, eachItem) => {
            if (eachItem.productId === id && eachItem.variantsId === variants[variantIndexRef.current]._id) {
                return total + eachItem.quantity;
            }
            return total;
        }, 0)

        setMaxQuantity(stock - totalQuantityInCart)

    }, [id, stock, cart, variants])

    const getCurrentQuantity = (newQuantity) => {
        setQuantity(newQuantity)
    }

    const handleAddToCartOnClick = ()=>{
        addCart({
            id: uuidv4(),
            productId: id,
            variantsId: variants[currentVariantIndex]._id,
            quantity: quantity
        })
        
        setMaxQuantity((prevState)=> prevState - quantity)
        setInitialQuantity(minQuantity)
        quantitySpinnerRef.current.resetQuantity()
        console.log(maxQuantity)
    }

    const handleSlideChange = (swiper) => {
        setCurrentVariantIndex(swiper.realIndex)
    }

    const customSingleProductPagination = {
        el: ".product-card__body__list",
        clickable: true,
        renderBullet: function (index, className) {
            return `<button type="button" class="product-card__body__list__item ${className}" style="--_variant: ${variants[index].color}"></button>`
        },
    }

    return (
        <>
        {/* Product Details Section */}
        <section className="product-details section-gap">
            <div className="container">
                <div className="row flex-xl-row-reverse justify-content-between">
                    <div className="col-xl-5 col-lg-6">
                        <div className="product-details__slider-wrapper">
                            {
                                hasMoreThanOneProduct &&
                                <>
                                <button type="button" className="product-details__slider__arrow product-details__slider__arrow--prev">
                                    <LeftIcon />
                                </button>
                                <button type="button" className="product-details__slider__arrow product-details__slider__arrow--next">
                                    <RightIcon />
                                </button>
                                </>
                            }
                            <Swiper
                                navigation={{
                                    enabled: true,
                                    prevEl: '.product-details__slider__arrow.product-details__slider__arrow--prev',
                                    nextEl: '.product-details__slider__arrow.product-details__slider__arrow--next',
                                }}
                                pagination={customSingleProductPagination}
                                modules={[ Navigation, Autoplay, Keyboard, Pagination]}
                                slidesPerView={1}
                                grabCursor={true}
                                loop={ true}
                                keyboard={{enabled: true}}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: true,
                                }}
                                onRealIndexChange={(swiper) => handleSlideChange(swiper)}
                                className="product-details__slider"
                            >
                                {
                                    variants.map((item, index)=>(
                                        <SwiperSlide key={index} className="product-details__slide">
                                            <figure className="product-details__card">
                                                <Image className="product-details__card__bg" src={item.imageSrc} alt={item.imageAlt} />
                                            </figure>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="product-details__title">{title}</h1>
                        {
                            discount > 0 ?
                            <h2 className="product-details__price">${price - discount} <small className="product-card__body__price__discount">${price}</small></h2> :
                            <h2 className="product-details__price">${price}</h2>
                        }
                        <p className="product-details__description">{description}</p>
                        <h3 className="product-details__sub-title">SKU: <span className="text-primary">{SKU}</span></h3>
                        <h3 className="product-details__sub-title">Colors:</h3>
                        <div className="product-card__body__list mb-3"></div>
                        <h3 className="product-details__sub-title">Quantity:</h3>
                        <div className="product-details__actions">
                            <QuantitySpinner ref={quantitySpinnerRef} sendCurrentQuantity={getCurrentQuantity} initialValue={initialQuantity} max={maxQuantity} min={minQuantity} />
                            {
                                maxQuantity >= 1 &&
                                <button className="btn btn-dark" onClick={()=> handleAddToCartOnClick()}>Add to Cart</button>
                            }
                            <Link to="/cart" className="btn btn-primary">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonial Section */}
        <section className="section-gap pt-md-0">
            <div className="container">
                <h1 className="section-header__title mb-0">Customer <span className="text-primary">reviews</span></h1>
                <TestimonialSlider slides={currentProductTestimonialData} />
            </div>
        </section>
        </>
    )
}
