import React from 'react'
import ImageModal from './ImageModal'

export default function ProductDetails(props) {
    const [imgNumber, setImgNumber] = React.useState(0)
    const [qty, setQty] = React.useState(1)
    function addSubtract(i) {
        setQty(prev =>  i ? (prev > 1 ? prev - 1 : 1) : (prev +1))
      }

    function changeImg(i) {
        setImgNumber(prevImg => {
            if (i === 'prev') {
                return imgNumber < (props.product.images.length - 1) ? (prevImg + 1) : 0
            } else{
                return imgNumber > 0 ? (prevImg - 1) : (props.product.images.length - 1)
            }
        })
    }

    const modal = false

    return (
        <>
        {modal && <ImageModal images={props.product.images} title={props.product.title} />}
        <div className="product-details-container">
            <div className="product-images">
                <div className="img-scroll img-scroll-left pointer" onClick={() => {changeImg('prev')}}>
                    <img src="/images/icon-previous.svg" />
                </div>
                <div className="img-scroll img-scroll-right pointer" onClick={() => {changeImg('next')}}>
                    <img src="/images/icon-next.svg" />
                </div>
                <img className="product-image-main" src={`images${props.product.images[imgNumber]}.jpg`} alt={props.product.title} />
                <img className="product-image-thumbnail selected" src={`images${props.product.images[0]}-thumbnail.jpg`} alt={props.product.title} />
                <img className="product-image-thumbnail selected" src={`images${props.product.images[1]}-thumbnail.jpg`} alt={props.product.title} />
                <img className="product-image-thumbnail selected" src={`images${props.product.images[2]}-thumbnail.jpg`} alt={props.product.title} />
                <img className="product-image-thumbnail selected" src={`images${props.product.images[3]}-thumbnail.jpg`} alt={props.product.title} />
            </div>
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
                    <button className="add-to-cart pointer" onClick={()=>props.setToAdd(props.product) }><span>Add to cart</span></button>
                </div>
            </div>
        </div>
        </>
    )
}