import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo/logo.svg'
import './homePage.scss'

export default function HomePage() {
  return (
    <>
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
                <img className="banner__figure__image" src="https://i.ibb.co/sVstvs6/banner-product.jpg" alt="bag product" loading="lazy" />
              </figure>
            </div>
          </div>
        </div>
        <div className="vh-100"></div>
      </section>
    </>
  )
}
