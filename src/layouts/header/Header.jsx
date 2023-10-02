import React, { useRef, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo/logo.svg'
import './header.scss'

export default function Header() {
  const headerRef = useRef(null)
  const headerFixRef = useRef(null)
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  function handleHeaderFixHeight() {
    headerFixRef.current.style.height = (headerRef.current.offsetHeight + headerRef.current.offsetTop) + 'px';
  }

  const toggleMobileMenuActive = () => {
    setMobileMenuActive(!mobileMenuActive)
    if(!mobileMenuActive){
      document.documentElement.classList.add('active--menu')
    }else{
      document.documentElement.classList.remove('active--menu')
    }
  };

  useEffect(() => {
    handleHeaderFixHeight()
    window.addEventListener('resize', handleHeaderFixHeight)
    return () => {
      window.removeEventListener('resize', handleHeaderFixHeight);
    };
  }, [])
  

  return (
    <>
    <header className="header" ref={headerRef}>
      <div className="container">
        <nav className="navbar">
          <button type="button" className="navbar__toggle" onClick={toggleMobileMenuActive}>
            <i className={`fi ${mobileMenuActive ? 'fi-br-cross' : 'fi-br-bars-sort' }`}></i>
          </button>
          <div className={`navbar__nav${mobileMenuActive ? ' show' : ''}`}>
            <NavLink to="#!" className="navbar__nav__link">Shop</NavLink>
            <NavLink to="#!" className="navbar__nav__link">Category</NavLink>
          </div>
          <img src={logo} alt="Fabby She" height="82" loading="lazy" className="navbar__logo__image navbar__hidden" area-hidden="true" />
          <NavLink to="/" className="navbar__logo">
            <img src={logo} alt="Fabby She" height="82" loading="lazy" className="navbar__logo__image" />
          </NavLink>
          <div className="navbar__actions">
            <button type="button" className="navbar__actions__link">
              <i className="fi fi-rr-search"></i>
            </button>
            <button type="button" className="navbar__actions__link">
              <span className="navbar__actions__link__count">0</span>
              <i className="fi fi-rr-shopping-cart"></i>
            </button>
          </div>
        </nav>
      </div>
    </header>
    <div className="header--fix" aria-hidden="true" ref={headerFixRef}></div>
    </>
  )
}