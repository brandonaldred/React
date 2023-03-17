import React from 'react';

export default function Photos (props) {
    const [imgNumber, setImgNumber] = React.useState(0)
    
    function changeImg(i) {
        setImgNumber(prevImg => {
            if (i === 'prev') {
                return imgNumber < (props.images.length - 1) ? (prevImg + 1) : 0
            } else{
                return imgNumber > 0 ? (prevImg - 1) : (props.images.length - 1)
            }
        })
    }

    const imgThumbnails = props.images.map((img, index) => {
        return <img key={index} onClick={()=>{setImgNumber(index)}} className="product-image-thumbnail" src={`images${img}-thumbnail.jpg`} />
        
    })
    return (
        <div className="product-images">
            <div className="img-scroll img-scroll-left pointer" onClick={() => {changeImg('prev')}}>
                <img src="/images/icon-previous.svg" />
            </div>
            <div className="img-scroll img-scroll-right pointer" onClick={() => {changeImg('next')}}>
                <img src="/images/icon-next.svg" />
            </div>
            <img onClick={props.toggleModal} className={`product-image-main ${props.width > 999 && 'pointer'}`} src={`images${props.images[imgNumber]}.jpg`} alt={props.alt} />
            {imgThumbnails}
        </div>
    )
}