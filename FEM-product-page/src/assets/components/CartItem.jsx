import React from 'react'
import trashIcon from '../icon-delete.svg'

export default function CartItem(props) {
    
    return(
        <div className="cart-item" key={props.sku}>
            <img className="cart-thumbnail" src={`/src/assets${props.image}-thumbnail.jpg`} />
            <div>
                <p className="product-title">{props.title}</p>
                <p>{`$${props.price} x ${props.qty} `}<b>${`${props.total}`}</b></p>
            </div>
            <img className="pointer cart-trash" src={trashIcon} />
        </div>
    )
}