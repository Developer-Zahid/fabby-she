import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import useCartStore from '../../app/store/cartStore'
import Image from '../image/Image'
import CartPlusIcon from '../../assets/icons/CartPlusIcon';
import RightIcon from '../../assets/icons/RightIcon';
import './productCard.scss'

export default function ProductCard({productId, productLink, productTitle, productPrice, productDiscount, productVariants}) {
    const addCart = useCartStore((state)=> state.addCart)
    const [activeIndex, setActiveIndex] = useState(0)

    const handleToggleProductOnClick = (index) => {
        setActiveIndex(index === activeIndex ? 0 : index)
    }

    const handleAddToCartOnClick = ()=>{
        addCart({
            id: uuidv4(),
            productId: productId,
            variantsId: activeIndex,
            quantity: 1
        })
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
                    <button type="button" className="product-card__head__action__btn" onClick={handleAddToCartOnClick}>
                        <CartPlusIcon />
                    </button>
                </div>
            </div>
            <div className="product-card__body">
                {
                    productDiscount > 0 ?
                    <h2 className="product-card__body__price">৳ {productPrice - productDiscount}  <small className="product-card__body__price__discount">৳ {productPrice}</small></h2> :
                    <h2 className="product-card__body__price">৳ {productPrice}</h2>
                }
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
                <Link to={productLink} className="btn btn-sm btn-primary w-100 rounded-pill">Buy Now <RightIcon /></Link>
            </div>
        </article>
    )
}
