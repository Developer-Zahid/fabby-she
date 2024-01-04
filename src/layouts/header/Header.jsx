import React, { useRef, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import useCartStore from '../../app/store/cartStore'
import CartIcon from '../../assets/icons/CartIcon'
import SearchIcon from '../../assets/icons/SearchIcon'
import OpenMenuIcon from '../../assets/icons/OpenMenuIcon'
import CloseMenuIcon from '../../assets/icons/CloseMenuIcon'
import logo from '../../assets/images/logo/logo.svg'
import Image from '../../components/image/Image'
import './header.scss'

export default function Header() {
  const headerRef = useRef(null)
  const headerFixRef = useRef(null)
  const lastScrollTop = useRef(0)
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const cartData = useCartStore((state)=> state.cart)

  function handleHeaderFixHeight() {
    headerFixRef.current.style.height = (headerRef.current.offsetHeight + headerRef.current.offsetTop) + 'px';
  }

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
    console.log('Header Render');
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
            {
              mobileMenuActive ?
              <CloseMenuIcon /> :
              <OpenMenuIcon />
            }
          </button>
          <div className={`navbar__nav${mobileMenuActive ? ' show' : ''}`}>
            <NavLink to="/" className="navbar__nav__link" onClick={hideMobileMenu}>Home</NavLink>
            <NavLink to="shop" className="navbar__nav__link" onClick={hideMobileMenu}>Shop</NavLink>
            <NavLink to="category" className="navbar__nav__link" onClick={hideMobileMenu}>Category</NavLink>
          </div>
          <Image className="navbar__logo__image navbar__hidden" src={logo} alt="Fabby She" height="82" area-hidden="true" />
          <NavLink to="/" className="navbar__logo">
            <Image className="navbar__logo__image" src={logo} alt="Fabby She" height="82" />
          </NavLink>
          <div className="navbar__actions">
            <button type="button" className="navbar__actions__link">
              <SearchIcon />
            </button>
            <NavLink to="cart" className="navbar__actions__link">
              <span className="navbar__actions__link__count">{cartData.length}</span>
              <CartIcon />
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
    <div className="header--fix" aria-hidden="true" ref={headerFixRef}></div>
    </>
  )
}