import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import './../css/Gallery.css'
// import { fa} from '@fortawesome/free-regular-svg-icons'
import crossBlack from '../../assets/comment/crossBlack.png'
import crossRed from '../../assets/comment/crossRed.png'
import { connect } from 'react-redux'
import { fetchImages } from '../../redux/actionCreators'
import { GalleryItem } from './GalleryItem'

const mapStateToProps = (state) => {
    return {
        images: state.images
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchImages: () => dispatch(fetchImages())
    }
}

export const Gallery = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [toggleModal, setToggleModal] = useState(false)
    const [toggleHover, setToggleHover] = useState(false)

    const onSelectImage = (image) => {
        console.log('Selected Image:', image)
        // selectedImage(image);
        setToggleModal(!toggleModal)
     }

    const toggleModalHandler = () =>{
        setToggleModal(!toggleModal);
    }

    const toggleHoverHandler = () => {
        setToggleHover(!toggleHover)
    }

    const close =  toggleHover === true? crossRed: crossBlack;

    useEffect(()=>{
        props.fetchImages()
    },[])
    const image = props.images.images.map(image=>image);
    // const key = props.images.images.map(image=>image.id);
    console.log("image:", image)
  return (
    <div>
        <h2 className='CategoryTitle'>Galley</h2>
            <div className=' Category--grid grid--x3'>
                <GalleryItem images={image} onSelectImage={onSelectImage} key={props.images.images.map(image=>image.id)} />
            </div>
            <Modal isOpen={toggleModal} fullscreen>
                <ModalHeader style={{display:'flex', justifyContent:'end', height:'50px'}}>
                    <img 
                        style={{width:"15px", transition:'all 0.2s'}}  
                        src={close} alt="X"
                        onMouseEnter={toggleHoverHandler}
                        onMouseLeave={toggleHoverHandler}  
                        onClick={toggleModalHandler} />    
                </ModalHeader>
                <ModalBody>
                {/* {imageDetail} */}
                </ModalBody>
                <ModalFooter style={{height:'50px'}}>
                </ModalFooter>
            </Modal>
    </div>
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(Gallery)