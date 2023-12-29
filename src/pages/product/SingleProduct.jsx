import React from 'react'
import { useLoaderData } from 'react-router-dom'
import './singleProduct.scss'

export default function SingleProduct() {
    const currentProduct = useLoaderData();

    return (
        <>
        <section className="section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>{currentProduct.title}</h1>
                        <h2>{currentProduct.price}</h2>
                        <p>{currentProduct.description}</p>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </div>
        </section>
        </>
    )
}
