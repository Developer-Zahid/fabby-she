import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../components/image/Image'
import './categoryCard.scss'

export default function CategoryCard({categoryImageSrc, categoryImageAlt, categoryName}) {
  return (
    <article className="category-card">
        <div className="category-card__body">
            <figure className="category-card__figure">
                <Image className="category-card__figure__bg" src={categoryImageSrc} alt={categoryImageAlt} />
            </figure>
            <Link to="#!" className="category-card__heading">
                <h3 className="category-card__heading__title">{categoryName}</h3>
            </Link>
            <div className="category-card__action">
                <Link to="#!" className="category-card__action__btn">
                    <i className="fi fi-rr-arrow-up-right"></i>
                </Link>
            </div>
        </div>
    </article>
  )
}
