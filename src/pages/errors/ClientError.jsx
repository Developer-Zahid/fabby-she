import React from 'react'
import { Link } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'
import lottieError from '../../assets/lotties/404.json'
import RightIcon from '../../assets/icons/RightIcon'
import './clientError.scss'

export default function ClientError() {
  return (
    <section className="error">
      <figure className="error__figure">
        <Player
            src={lottieError}
            className="error__figure__bg"
            loop
            autoplay
        />
      </figure>
      <div className="error__content">
        <h1 className="error__title">Oops! Page Not Found</h1>
        <p className="error__text">It seems like the page you're looking for doesn't exist or has been moved</p>
        <Link to="/" className="btn btn-primary">Take me home <RightIcon /></Link>
      </div>
    </section>
  )
}
