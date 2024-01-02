import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Image from '../image/Image'
import './productCard.scss'

export default function ProductCard({productLink, productTitle, productPrice, productDiscount, productVariants}) {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleToggleProductOnClick = (index) => {
        setActiveIndex(index === activeIndex ? 0 : index)
    }

    return (
        <article className="product-card">
            <div className="product-card__head">
                <figure className="product-card__head__figure">
                    {
                        productVariants.map((item, index)=>(
                            <Image key={index} className={`product-card__head__figure__bg ${activeIndex === index ? 'active' : ''}`} src={item.imageSrc} alt={item.imageAlt} />
                        ))
                    }
                </figure>
                <div className="product-card__head__action">
                    <button type="button" className="product-card__head__action__btn">
                        <i className="fi fi-rr-shopping-cart-add"></i>
                    </button>
                </div>
            </div>
            <div className="product-card__body">
                <h2 className="product-card__body__price">${productPrice} { productDiscount > 0 && <small className="product-card__body__price__discount">${productPrice - productDiscount}</small> }</h2>
                <h3 className="product-card__body__title">
                    <Link to={productLink} className="product-card__body__title__link">{productTitle}</Link>
                </h3>
                <div className="product-card__body__list mb-3">
                    {
                        productVariants.map((item, index)=>(
                            <button key={index} type="button" onClick={() => handleToggleProductOnClick(index)} className={`product-card__body__list__item ${activeIndex === index ? 'active' : ''}`} style={{ "--_variant": item.color }}></button>
                        ))
                    }
                </div>
                <Link to={productLink} className="btn btn-sm btn-primary w-100 rounded-pill">Buy Now <i className="fi fi-br-angle-right"></i></Link>
            </div>
        </article>
    )
}
