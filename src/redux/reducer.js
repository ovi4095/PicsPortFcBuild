import { combineReducers } from "redux";
import * as actionTyeps from './actionTypes';

const categoryReducer = (categoryState = { isLoading: true, categories: []}, action) => {
        switch (action.type) {
            case actionTyeps.CATEGORIES_LOADING:
                return {
                    ...categoryState,
                    isLoading: true,
                    categories: []
                }
            case actionTyeps.LOAD_CATEGORIES:
                return {
                    ...categoryState,
                    isLoading: false,
                    categories: action.payload
                }
            default:
                return categoryState;
        }
}

const imageReducer = (imageState = { isLoading: true, images: []}, action) => {
    switch (action.type) {
        case actionTyeps.IMAGES_LOADING:
            return {
                ...imageState,
                isLoading: true,
                images: []
            }
        case actionTyeps.LOAD_IMAGES:
            return {
                ...imageState,
                isLoading: false,
                images: action.payload
            }
        default:
            return imageState;
    }
}

const commentReducer = (commentState = {isLoading: true, comments:[]}, action) => {
    switch(action.type) {
        case actionTyeps.LOAD_COMMENTS:
            let comments = [];
            for (let key in action.payload) {
                comments.push({
                    ...action.payload[key]
                })
            }
            return {
                ...commentState,
                comments: comments,
                isLoading: false
            }
        case actionTyeps.COMMENTS_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            }
        case actionTyeps.ADD_COMMENT:
            let comment= action.payload;
            return {
                ...commentState,
                comments: commentState.comments.concat(comment)
            };
        default:
            return commentState;
    }
}

const authReducer = (authState = {token: null, userId: null, authLoading: false, authFailedMsg: null}, action) => {
    switch(action.type) {
        case actionTyeps.AUTH_SUCCESS:
            return {
                ...authState,
                token: action.payload.token,
                userId: action.payload.userId,
            }
        case actionTyeps.AUTH_LOGOUT:
            return {
                ...authState,
                authFailedMsg: null,
                token: null,
                userId: null,
            }
        case actionTyeps.AUTH_LOADING:
            return {
                ...authState,
                authLoading: action.payload,
            }
        case actionTyeps.AUTH_FAILED:
            return {
                ...authState,
                authFailedMsg: action.payload,
            }
        default:
            return authState;
    }
}




export const Reducer = combineReducers({
    categories: categoryReducer,
    images: imageReducer,
    comments: commentReducer,
    auth: authReducer,
})