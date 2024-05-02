import axios from 'axios'
import * as actionTyeps from './actionTypes'
import { baseUrl } from './baseUrl'

// Image Section

export const loadImages = images => ({
    type: actionTyeps.LOAD_IMAGES,
    payload: images
})

export const imagesLoading = () => ({
    type: actionTyeps.IMAGES_LOADING
})

export const fetchImages = () => {
    return dispatch => {
        dispatch(imagesLoading());
        axios.get(baseUrl+"images.json")
        .then(response => response.data)
        .then(images => dispatch(loadImages (images)));
        
    }
        
}