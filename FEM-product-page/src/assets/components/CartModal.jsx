import React from 'react'
import CartItem from './CartItem'

export default function CartModal(props) {

    const [cart, setCart] = React.useState([])
    console.log(props.toAdd)

    if (props.toAdd) {
        setCart(prevCart => {
            return [
                ...prevCart, props.toAdd
            ]
        })
    }
    
    let cartItems = cart.length > 0 && cart.map(item => {
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
                {cart.length < 1 && <p key="0" className="empty-cart">Your cart is empty.</p>}
                {cartItems}
                <button className="add-to-cart pointer">Checkout</button>
            </div>
        </div>
    )
}

/*
    [ 
        { 
            sku: 1111,
            brand: 'sneaker company',
            title: 'fall limited edition sneakers',
            description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.',
            images: ['/image-product-1', '/image-product-2', '/image-product-3', '/image-product-4'],
            retail: 250,
            special: 125,
            qty: 0
        }
    ]
*/