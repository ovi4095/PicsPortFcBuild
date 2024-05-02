import React from 'react'
import './../css/Gallery.css'

export const GalleryItem = (props) => {
    console.log('item', props.images.map(item => item.image))
  return (
    <div>
        {props.images.map((item) => {
            return(
                <img
                    className='CategoryImgs' 
                    src={item.image} 
                    alt="img" 
                    onClick={()=>props.onSelectImage(item)}
                    />
            )
        })}
    </div>
  )
}
