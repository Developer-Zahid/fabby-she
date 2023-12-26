import React from 'react'
import Image from '../../components/image/Image'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo/logo.svg'
import paymentMethodsData  from '../../data/payment-methods.json'
import './footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="text-center">
            <Link to="#!" className="footer__logo">
              <Image className="footer__logo__image" src={logo} alt="Fabby She" />
            </Link>
          </div>
          <nav className="footer__nav">
            <Link to="#!" className="footer__nav__link">Home</Link>
            <Link to="#!" className="footer__nav__link">Shop</Link>
            <Link to="#!" className="footer__nav__link">Category</Link>
          </nav>
          <div className="footer__social">
            <Link to="#!" target="_blank" className="footer__social__icon">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link to="#!" target="_blank" className="footer__social__icon">
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
          <div className="br"></div>
          <p className="footer__copyright text-center">© 2023 Fabby She. All rights reserved</p>
          <div className="footer__payments">
            {
              paymentMethodsData.map(item=>(
                <Image key={item.id} className="footer__payments__image" src={item.imageSrc} alt={item.imageAlt} width="45" />
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  )
}
