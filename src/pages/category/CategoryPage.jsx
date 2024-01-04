import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/product-card/ProductCard'
import CategoryCard from '../../components/category-card/CategoryCard'
import SubBanner from '../../sections/sub-banner/SubBanner'
import RightIcon from '../../assets/icons/RightIcon'
import bestsellerProductData from '../../data/bestseller-product.json'
import categoryData from '../../data/categories.json'

export default function CategoryPage() {
    return (
        <>
            {/* Sub Banner Section */}
            <SubBanner title="Our All Collection" />

            {/* Category Section */}
            <section className="section-gap section-gap--fix">
                <div className="container">
                    <div className="row categories">
                        {
                            categoryData.map(item=>(
                                <div key={item.id} className="col-lg-4 col-md-6">
                                    <CategoryCard
                                        categoryImageSrc={item.imageSrc}
                                        categoryImageAlt={item.imageAlt}
                                        categoryName={item.name}
                                    />
                                </div>
                            ))
                        }
                        {
                            categoryData.map(item=>(
                                <div key={item.id} className="col-lg-4 col-md-6">
                                    <CategoryCard
                                        categoryImageSrc={item.imageSrc}
                                        categoryImageAlt={item.imageAlt}
                                        categoryName={item.name}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            
            {/* Product Section */}
            <section className="section-gap section-gap--fix">
                <div className="container">
                    <h1 className="section-header__title">Our Bestseller Product</h1>
                    <div className="row match-height">
                        {
                            bestsellerProductData.map(item=>(
                                <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                                    <ProductCard
                                        productId={item.id}
                                        productLink={`/product/${item.id}`}
                                        productTitle={item.title}
                                        productPrice={item.price}
                                        productDiscount={item.discount}
                                        productVariants={item.variants}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center pt-4">
                        <Link to="/shop" className="btn btn-primary">View All <RightIcon /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}