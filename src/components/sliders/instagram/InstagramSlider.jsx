import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../image/Image'
import InstagramIcon from '../../../assets/icons/InstagramIcon'
import './instagramSlider.scss'

export default function InstagramSlider({slides}) {
  return (
    <div className="instagram__slider">
        <div className="instagram__slider__row">
            {
                slides.map(item=>(
                    <Link key={item.id} to={item.link} target="_blank" className="instagram__slide">
                        <figure className="instagram__figure">
                            <Image className="instagram__figure__bg" src={item.imageSrc} alt={item.imageAlt} />
                        </figure>
                        <span className="instagram__slide__icon">
                            <InstagramIcon />
                        </span>
                    </Link>
                ))
            }
        </div>
        <div className="instagram__slider__row" aria-hidden="true">
            {
                slides.map(item=>(
                    <Link key={item.id} to={item.link} target="_blank" className="instagram__slide" tabIndex="-1">
                        <figure className="instagram__figure">
                            <Image className="instagram__figure__bg" src={item.imageSrc} alt={item.imageAlt} />
                        </figure>
                        <span className="instagram__slide__icon">
                            <InstagramIcon />
                        </span>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}
