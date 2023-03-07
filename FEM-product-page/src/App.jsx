import React, { useEffect } from 'react'
import Header from './assets/components/Header'
import CartModal from './assets/components/CartModal'
import ProductDetails from './assets/components/ProductDetails'



export default function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [showCart, setshowCart] = React.useState(false)
  function toggleCart() { 
    setshowCart(!showCart)
  }
  window.addEventListener('resize', () => {setWidth(window.innerWidth)})

  //Defining the product to build out the product page
  const product = { 
    sku: 1234,
    brand: 'sneaker company',
    title: 'fall limited edition sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.',
    images: ['/image-product-1', '/image-product-2', '/image-product-3', '/image-product-4',],
    retail: 250,
    special: 125
  }

  const [cart, setCart] = React.useState([])

  function updateCart(product, qty) {
    setCart(prevCart => {
      const index = prevCart.findIndex(item => item.sku === product.sku)
      if (index === -1) {
        product.qty = qty
        return [...prevCart, product]
      }
      if (index >= 0) {
        prevCart[index].qty = qty + prevCart[index].qty
        return [...prevCart]
      }
    })
  }
  
  return (
    <div className="App">
      <Header width={width} toggleCart={toggleCart} cartItems={cart}/>
      <main>
        {showCart && <><CartModal showCart={showCart} cartItems={cart} /><div className="disabled disabled-bump" onClick={toggleCart}></div></>}
        <ProductDetails product={product} width={width} setToAdd={updateCart} />
      </main>
    </div>
  )
}
