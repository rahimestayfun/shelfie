import React from 'react'
import '../../styles/Product.css'

export default function Product(props) {
    return (
        <div className='product-container'>
            <img className='product-image' src={props.image} alt="product" />
            <div className='product-info'>
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
        </div>

    )
}
