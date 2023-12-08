import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

import Image from '../../image/Image'
import './bannerSlider.scss'

export default function BannerSlider({slides}) {
    const [copySlides, setCopySlides] = useState([...slides].reverse())
	
    return (
        <Swiper
			modules={[EffectCards, Mousewheel, Autoplay]}
            effect={'cards'}
            grabCursor={true}
			mousewheel={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
            loop={true}
        >
        {
            copySlides.map(slide=>(
                <SwiperSlide>
                    <figure className="banner__figure">
                        <Image className="banner__figure__image" src={slide.imageSrc} alt={slide.imageAlt} />
                    </figure>
                </SwiperSlide>
            ))
        }
        </Swiper>
    )
}
