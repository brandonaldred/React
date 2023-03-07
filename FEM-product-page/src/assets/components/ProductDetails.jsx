import React from 'react'
import ImageModal from './ImageModal'
import Photos from './Photos'

export default function ProductDetails(props) {
    const [qty, setQty] = React.useState(1)
    function addSubtract(i) {
        setQty(prev =>  i ? (prev > 1 ? prev - 1 : 1) : (prev +1))
      }

    const modal = false

    return (
        <>
        {modal && <ImageModal images={props.product.images} title={props.product.title} />}
        <div className="product-details-container">
            <Photos images={props.product.images} alt={props.product.title} />
            <div className="product-description-container">
                <h2>{props.product.brand}</h2>
                <h1>{props.product.title}</h1>
                <p className="product-description">{props.product.description}</p>
                <div className="product-pricing">
                    <p className="final-price" data-savings={`${props.product.special / props.product.retail * 100}%`}>${props.product.special.toFixed(2)}</p>
                    <p className="previous-price">${props.product.retail.toFixed(2)}</p>
                </div>
                <div className="add-to-cart-container">
                    <div className="qty-container">
                        <img onClick={()=> addSubtract(true)} className="pointer" src="/images/icon-minus.svg" />
                        <p>{qty}</p>
                        <img onClick={()=> addSubtract(false)} className="pointer" src="/images/icon-plus.svg" />
                    </div>
                    <button className="add-to-cart pointer" onClick={()=>props.setToAdd(props.product, qty) }><span>Add to cart</span></button>
                </div>
            </div>
        </div>
        </>
    )
}