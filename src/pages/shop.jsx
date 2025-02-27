import React from 'react'
import Product from '../companet/product'

const Shop = () => {

    const Products = [
        {
            id: 1,
            imageUrl: "https://abbos-frontend.vercel.app/static/media/1.87f6c2f48f7e15ed845b.png",
            title: "Iphone",
            price: 999
        },
        {
            id: 2,
            imageUrl: "https://abbos-frontend.vercel.app/static/media/2.5f080d9e47bf46ca3fce.png",
            title: "Macbook Pro 2022 (M1)",
            price: 1999
        },
        {
            id: 3,
            imageUrl: "https://abbos-frontend.vercel.app/static/media/3.c7785c796d0b2bf5aa2b.png",
            title: "Cannon M50 Camera",
            price: 699
        },
    ]



    return (
        <div className='shop-container'>
            <h1 className='shop-title'>MustafoTech Shop</h1>
            <div className="product-container">
                {
                    Products.map(product => {
                        return (
                            <Product
                                key={""}
                                imageUrl={product.imageUrl}
                                id={product.id}
                                title={product.title}
                                price={product.price} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Shop