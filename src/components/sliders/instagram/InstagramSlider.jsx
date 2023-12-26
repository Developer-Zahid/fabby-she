import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../image/Image'
import InstagramIcon from '../../../assets/icons/InstagramIcon'
import './_instagramSlider.scss'

export default function InstagramSlider({slides}) {
  return (
    <div className="instagram__slider">
        <div className="instagram__slider__row">
            {
                slides.map(item=>(
                    <Link key={item.id} to={item.link} className="instagram__slide">
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
