import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import StarIcon from '../../../assets/icons/StarIcon'
import Image from '../../image/Image'
import './testimonialSlider.scss'

export default function TestimonialSlider({slides}) {
    return (
        <div className="testimonial">
            <Swiper
                // navigation={true}
                modules={[ Navigation, Autoplay, Keyboard]}
                slidesPerView={1}
                breakpoints={{
                    768: {
                    slidesPerView: 2,
                    },
                    1200: {
                    slidesPerView: 3,
                    },
                }}
                spaceBetween={24}
                grabCursor={true}
                keyboard={{enabled: true}}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="testimonial__slider"
            >
                {
                    slides.map(item=>(
                        <SwiperSlide key={item.id} className="testimonial__slide">
                            <article className="testimonial-card">
                                <div className="testimonial-card__rating">
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                </div>
                                <p className="testimonial-card__text">{item.description}</p>
                                <div className="testimonial-card__footer">
                                    <figure className="testimonial-card__footer__figure">
                                        <Image className="testimonial-card__footer__figure__bg" src={item.image} alt={item.name} />
                                    </figure>
                                    <span className="testimonial-card__footer__text">{item.name}</span>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
