import {HYDRATE} from "next-redux-wrapper";
import {actionTypes} from "../actions";

const initialState = {
    posts: []
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE: {
            return {...state,...action.payload.postReducer}
        }
        case actionTypes.POST_FETCH_SUCCESS_BY_ID:
            return {...state, posts:  action.payload}
        default:
            return state
    }
}