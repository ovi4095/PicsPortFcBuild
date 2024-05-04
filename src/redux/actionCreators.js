import axios from 'axios'
import * as actionTypes from './actionTypes'
import { baseUrl } from './baseUrl'

// Category Section

export const loadCategories = categories => ({
    type: actionTypes.LOAD_CATEGORIES,
    payload: categories
})

export const categoriesLoading = () => ({
    type: actionTypes.CATEGORIES_LOADING
})

export const fetchCategories = () => {
    return dispatch => {
        dispatch(categoriesLoading());
        axios.get(baseUrl+"categories.json")
        .then(response => response.data)
        .then(categories => dispatch(loadCategories(categories)));
        }
        
}



// Image Section

export const loadImages = images => ({
    type: actionTypes.LOAD_IMAGES,
    payload: images
})

export const imagesLoading = () => ({
    type: actionTypes.IMAGES_LOADING
})

export const fetchImages = () => {
    return dispatch => {
        dispatch(imagesLoading());
        axios.get(baseUrl+"images.json")
        .then(response => response.data)
        .then(images => dispatch(loadImages (images)));
        
    }
        
}

// Comment Section

export const commentLoading = () => ({
    type: actionTypes.COMMENTS_LOADING
}) 

export const loadComments = comments => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})

export const addComment = (comment) => dispatch => {
    axios.post(baseUrl+'comments.json', comment)
        .then(response => response.data)
        // .then(comment => dispatch(commentConcat(comment)))
        .catch(error => console.log(error))
    
}

export const fetchComments = () => dispatch => {
    dispatch(commentLoading());
    axios.get(baseUrl+"comments.json")
    .then(response => response.data)
    .then(comments => {
            // console.log('comment loading in actioncreator', comments)
            dispatch(loadComments(comments))
        });
    }