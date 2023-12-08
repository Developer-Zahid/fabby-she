import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../image/Image'
import './productCard.scss'

export default function ProductCard({productLink, productImage, productImageAlt, productTitle, productPrice, productColors}) {
  return (
    <article className="product-card">
        <div className="product-card__head">
            <figure className="product-card__head__figure">
                <Image className="product-card__head__figure__bg" src={productImage} alt={productImageAlt} />
            </figure>
            <div className="product-card__head__action">
                <Link to={productLink} className="product-card__head__action__btn">
                    <i className="fi fi-rr-arrow-up-right"></i>
                </Link>
            </div>
        </div>
        <div className="product-card__body">
            <h2 className="product-card__body__price">{productPrice}</h2>
            <h3 className="product-card__body__title">
                <Link to={productLink} className="product-card__body__title__link">{productTitle}</Link>
            </h3>
            {
                productColors &&
                <div className="product-card__body__list">
                    {
                        productColors.map((items, index)=>(
                            <div key={index} className="product-card__body__list__item" style={{ "--_variant": items }}></div>
                        ))
                    }
                </div>
            }
        </div>
    </article>
  )
}
