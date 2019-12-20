import React, { Component } from 'react'
import Product from '../Product/Product'


export default class Dashboard extends Component {

    render() {
        let mappedItem = this.props.inventory.map((element, index) => {
            return (
                <div key={index}>
                <Product
                image={element.image}
                name={element.name}
                price={element.price}
                />
                </div>
                )
        })
        return (
            <div>
                {mappedItem}
                
            </div>
        )
    }
}
