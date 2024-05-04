import React from 'react'
import '../../css/Gallery.css'

const CategoryImageItem = (props) => {
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

export default CategoryImageItem