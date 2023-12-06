import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo/logo.svg'
import Image from '../../components/image/Image'
import ProductCard from '../../components/product-card/ProductCard'
import './homePage.scss'

export default function HomePage() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img className="banner__logo" src={logo} alt="fabby she" />
              <h1 className="banner__title">Empowering Fashion for the trendsetters</h1>
              <Link to="#!" className="btn btn-primary">Shop Now <i className="fi fi-br-angle-right"></i></Link>
            </div>
            <div className="col-lg-6 col-md-8 mx-auto">
              <figure className="banner__figure">
                <Image className="banner__figure__image" src="https://i.ibb.co/sVstvs6/banner-product.jpg" alt="bag product" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section */}
      <section className="section-gap">
        <div className="container">
          <h1 className="section-title mb-5">Our Bestseller Product</h1>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <ProductCard
                productLink="#!"
                productImage="https://i.ibb.co/sVstvs6/banner-product.jpg"
                productImageAlt="product"
                productTitle="First Product"
                productPrice="$20"
                productColors={['#282929', '#f37b36', '#7563a3']}
              />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <ProductCard
                productLink="#!"
                productImage="https://i.ibb.co/sVstvs6/banner-product.jpg"
                productImageAlt="product"
                productTitle="First Product"
                productPrice="$20"
                productColors={['#282929', '#f37b36', '#7563a3']}
              />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <ProductCard
                productLink="#!"
                productImage="https://i.ibb.co/sVstvs6/banner-product.jpg"
                productImageAlt="product"
                productTitle="First Product"
                productPrice="$20"
                productColors={['#282929', '#f37b36', '#7563a3']}
              />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <ProductCard
                productLink="#!"
                productImage="https://i.ibb.co/sVstvs6/banner-product.jpg"
                productImageAlt="product"
                productTitle="First Product"
                productPrice="$20"
                productColors={['#282929', '#f37b36', '#7563a3']}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
