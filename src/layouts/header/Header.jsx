import React, { useRef, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo/logo.svg'
import Image from '../../components/image/Image'
import './header.scss'

export default function Header() {
  const headerRef = useRef(null)
  const headerFixRef = useRef(null)
  const lastScrollTop = useRef(0)
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  function handleHeaderFixHeight() {
    headerFixRef.current.style.height = (headerRef.current.offsetHeight + headerRef.current.offsetTop) + 'px';
  }

  // let lastScrollTop = 0;
  function handleHeaderScrollToHidden(){
    let currentScrollTop = window.pageYOffset
    setTimeout(function(){
      headerRef.current.classList.toggle('header--hide', currentScrollTop > lastScrollTop.current)
      lastScrollTop.current = currentScrollTop
    }, 200)
  }

  const toggleMobileMenuActive = () => {
    setMobileMenuActive(!mobileMenuActive)
    if(!mobileMenuActive){
      document.documentElement.classList.add('active--menu')
    }else{
      document.documentElement.classList.remove('active--menu')
    }
  }

  const hideMobileMenu = ()=>{
    setMobileMenuActive(false)
    document.documentElement.classList.remove('active--menu')
  }

  useEffect(() => {
    handleHeaderFixHeight()
    window.addEventListener('resize', handleHeaderFixHeight)
    window.addEventListener('scroll', handleHeaderScrollToHidden)

    return () => {
      window.removeEventListener('resize', handleHeaderFixHeight)
      window.removeEventListener('scroll', handleHeaderScrollToHidden)
    }
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
            <NavLink to="shop" className="navbar__nav__link" onClick={hideMobileMenu}>Shop</NavLink>
            <NavLink to="category" className="navbar__nav__link" onClick={hideMobileMenu}>Category</NavLink>
          </div>
          <Image className="navbar__logo__image navbar__hidden" src={logo} alt="Fabby She" height="82" area-hidden="true" />
          <NavLink to="/" className="navbar__logo">
            <Image className="navbar__logo__image" src={logo} alt="Fabby She" height="82" />
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