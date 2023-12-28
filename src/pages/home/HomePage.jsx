import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo/logo.svg'
import BannerSlider from '../../components/sliders/banner/BannerSlider'
import ProductCard from '../../components/product-card/ProductCard'
import CategoryCard from '../../components/category-card/CategoryCard'
import InstagramSlider from '../../components/sliders/instagram/InstagramSlider'
import TestimonialSlider from '../../components/sliders/testimonial/TestimonialSlider'
import bannerSlidesData from '../../data/banner-slider.json'
import bestsellerProductData from '../../data/bestseller-product.json'
import testimonialSlidesData from '../../data/testimonial-slider.json'
import instagramSlidesData from '../../data/instagram.json'
import categoryData from '../../data/categories.json'
import './homePage.scss'

export default function HomePage() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner__content">
                <img className="banner__logo" src={logo} alt="fabby she" />
                <h1 className="banner__title">Empowering Fashion for the trendsetters</h1>
                <Link to="#!" className="btn btn-primary">Shop Now <i className="fi fi-br-angle-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 mx-auto">
              <BannerSlider slides={bannerSlidesData} />
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="section-gap section-gap--fix">
        <div className="container">
          <h1 className="section-header__title">Our Bestseller Product</h1>
          <div className="row match-height">
            {
              bestsellerProductData.map(item=>(
                <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <ProductCard
                    productLink="#!"
                    productImage={item.imageSrc}
                    productImageAlt={item.imageAlt}
                    productTitle={item.title}
                    productPrice={item.price}
                    productColors={item.colors}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="section-gap">
        <div className="container">
          <h1 className="section-header__title">Our Collection</h1>
          <div className="category-grid">
            {
              categoryData.map(item=>(
                <div key={item.id} className="category-grid__item">
                  <CategoryCard
                    categoryImageSrc={item.imageSrc}
                    categoryImageAlt={item.imageAlt}
                    categoryName={item.name}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-gap">
        <div className="container">
          <h1 className="section-header__title mb-0">Our Customers <span className="text-primary">love us</span></h1>
          <TestimonialSlider slides={testimonialSlidesData} />
        </div>
      </section>

      {/* Instagram Section */}
      <section className="section-gap">
        <div className="container">
          <h1 className="section-header__title text-center">Follow us on Instagram <Link to="https://www.instagram.com/fabbyshe.1/" target="_blank" className="text-primary">@fabbyshe</Link></h1>
        </div>
        <InstagramSlider slides={instagramSlidesData} />
      </section>
    </>
  )
}
