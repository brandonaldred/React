import React from 'react'

export default function PhotoModal(props) {
    const [imgNumber, setImgNumber] = React.useState(0)
    
    function changeImg(i) {
        setImgNumber(prevImg => {
            if (i === 'prev') {
                return imgNumber < (props.product.images.length - 1) ? (prevImg + 1) : 0
            } else{
                return imgNumber > 0 ? (prevImg - 1) : (props.product.images.length - 1)
            }
        })
    }



    const imgThumbnails = props.product.images.map((img, index) => {
        return <img key={index} onClick={()=>{setImgNumber(index)}} className="product-image-thumbnail" src={`images${img}-thumbnail.jpg`} />
        
    })
    return (
        <div className="image-modal-container">
            <div className="modal-images">
                <img onClick={props.toggleModal} className="image-modal-close" src="/images/icon-close.svg" />
                <div className="modal-scroll modal-scroll-left pointer" onClick={() => {changeImg('prev')}}>
                    <img src="/images/icon-previous.svg" />
                </div>
                <div className="modal-scroll modal-scroll-right pointer" onClick={() => {changeImg('next')}}>
                    <img src="/images/icon-next.svg" />
                </div>
                <img className={`product-image-main`} src={`images${props.product.images[imgNumber]}.jpg`} alt={props.product.title} />
                {imgThumbnails}
            </div>
        </div>
    )
}