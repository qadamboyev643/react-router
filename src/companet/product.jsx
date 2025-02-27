import React from 'react'
import { useContext } from 'react'
import { CardContext } from '../context/card Context'

const Product = ({imageUrl,title,price,id}) => {
    const {addTocard} =useContext(CardContext)
    return (
        <>
            <div className="product">
                <img className='product-image' src={imageUrl} alt="Product photo" />
                <p className='product-title'>{title}</p>
                <p className='product-price'>${price}</p>
                <div className="btn-cotainer">
                <button onClick={() => addTocard(id)} className='product-btn'>Add to card</button>

                </div>
            </div>
        </>

    )
}

export default Product