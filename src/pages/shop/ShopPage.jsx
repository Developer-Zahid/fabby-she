import React from 'react'
import ProductCard from '../../components/product-card/ProductCard'
import CategoryCard from '../../components/category-card/CategoryCard'
import SubBanner from '../../sections/sub-banner/SubBanner'
import bestsellerProductData from '../../data/bestseller-product.json'
import categoryData from '../../data/categories.json'

export default function ShopePage() {
  return (
    <>
        {/* Sub Banner Section */}
        <SubBanner title="Our All Products" />
        
        {/* Product Section */}
        <section className="section-gap section-gap--fix">
            <div className="container">
            <div className="row match-height">
                {
                    bestsellerProductData.map(item=>(
                        <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                            <ProductCard
                                productLink="#!"
                                productImage={item.imageSrc}
                                productImageAlt={item.imageAlt}
                                productTitle={item.title}
                                productPrice={item.price}
                                productColors={item.colors}
                            />
                        </div>
                    ))
                }
                {
                    bestsellerProductData.map(item=>(
                        <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                            <ProductCard
                                productLink="#!"
                                productImage={item.imageSrc}
                                productImageAlt={item.imageAlt}
                                productTitle={item.title}
                                productPrice={item.price}
                                productColors={item.colors}
                            />
                        </div>
                    ))
                }
            </div>
            </div>
        </section>

        {/* Category Section */}
        <section className="section-gap">
            <div className="container">
                <h1 className="section-header__title">Our Collection</h1>
                <div className="row category-nogrid">
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
    </>
  )
}
