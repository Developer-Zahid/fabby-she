import React from 'react'
import './subBanner.scss'

export default function SubBanner({title}) {
  return (
    <section className="sub-banner">
        <div className="container">
            <h1 className="sub-banner__title text-center">{title}</h1>
        </div>
    </section>
  )
}
