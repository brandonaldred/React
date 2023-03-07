import React from 'react'
import CartItem from './CartItem'

export default function CartModal(props) {

    
    let cartItems = props.cartItems.length > 0 && props.cartItems.map(item => {
        const price = item.special ? item.special : item.retail
            return (
                <CartItem
                    key={item.sku}
                    image={item.images[0]}
                    title={item.title}
                    price={price.toFixed(2)}
                    qty={item.qty}
                    total={(price * item.qty).toFixed(2)}
                />
            )
        }
    )

    return(
        <div className="cart-modal">
            <h3>Cart</h3>
            <div className="cart-contents">
                {props.cartItems.length < 1 && <p key="0" className="empty-cart">Your cart is empty.</p>}
                {cartItems}
                <button className="add-to-cart pointer">Checkout</button>
            </div>
        </div>
    )
}