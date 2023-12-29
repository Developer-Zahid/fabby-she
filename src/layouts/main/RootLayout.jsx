import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function RootLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.requestAnimationFrame(() => {
      document.documentElement.classList.remove('active--menu')
      window.scrollTo(0, 0)
    })
  }, [pathname])

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}
