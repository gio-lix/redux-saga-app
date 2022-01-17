import {actionTypes} from "../actions";
import {HYDRATE} from "next-redux-wrapper";

const initialState = {
    albumsId: []
}


export const albumsReducers = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload.albumsReducers }
        }
        case actionTypes.ALBUMS_SUCCESS:
            console.log('<<<<<<action.payload>>>>>>', action.payload)
            return {...state, albumsId: action.payload }
        default:
            return state
    }

}