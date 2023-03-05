import React from 'react'


export default function ImageModal(props) {
    return(
        <div>
            <div className="product-images">
                <div className="img-scroll img-scroll-left pointer" onClick={() => {changeImg('prev')}}>
                    <img src="/images/icon-previous.svg" />
                </div>
                <div className="img-scroll img-scroll-right pointer" onClick={() => {changeImg('next')}}>
                    <img src="/images/icon-next.svg" />
                </div>
                <img className="product-image-main" src={`images${props.images[0]}.jpg`} alt={props.title} />
                <img className="product-image-thumbnail selected" src={`images${props.images[0]}-thumbnail.jpg`} alt={props.title} />
                <img className="product-image-thumbnail selected" src={`images${props.images[1]}-thumbnail.jpg`} alt={props.title} />
                <img className="product-image-thumbnail selected" src={`images${props.images[2]}-thumbnail.jpg`} alt={props.title} />
                <img className="product-image-thumbnail selected" src={`images${props.images[3]}-thumbnail.jpg`} alt={props.title} />
            </div>
            <div className="disabled">

            </div>
        </div>
    )
}