import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import '../../css/Gallery.css'
import crossBlack from '../../assets/comment/crossBlack.png'
import crossRed from '../../assets/comment/crossRed.png'
import { connect } from 'react-redux'
import { fetchComments, fetchImages } from '../../redux/actionCreators'
import { GalleryItem } from './GalleryItem'
import ImageDetail from '../imageDetail/ImageDetail';
import Loading from '../loading/Loading';

const mapStateToProps = (state) => {
    return {
        images: state.images,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchImages: () => dispatch(fetchImages()),
        fetchComments: () => dispatch(fetchComments())
    }
}

export const Gallery = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [toggleModal, setToggleModal] = useState(false)
    const [toggleHover, setToggleHover] = useState(false)

    useEffect(()=>{
        props.fetchImages();
        props.fetchComments();
    },[])

    const onSelectImage = (image) => {
        // console.log('Selected Image:', image)
        setSelectedImage(image);
        setToggleModal(!toggleModal)
     }

    const toggleModalHandler = () =>{
        setToggleModal(!toggleModal);
    }

    const toggleHoverHandler = () => {
        setToggleHover(!toggleHover)
    }
    // const key = props.images.images.map(image=>image.id);
    // console.log("image:", image)
    // console.log("Image Loading",props.images.isLoading);

    const image = props.images.images.map(image=>image);
    const close =  toggleHover === true? crossRed: crossBlack;
    const imageDetail = selectedImage&& <ImageDetail image={selectedImage}/>
    const gallery = props.images.isLoading === true? 
                    (<Loading/>):
                    (<div>
                        <h2 className='CategoryTitle'>Gallery</h2>
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
                                {imageDetail}
                                </ModalBody>
                                <ModalFooter style={{height:'50px'}}>
                                </ModalFooter>
                            </Modal>
                    </div>);
    
    return <div>{gallery}</div>;    
}



export default connect(mapStateToProps, mapDispatchToProps)(Gallery)