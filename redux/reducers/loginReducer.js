import {actionTypes} from "../actions";
import {HYDRATE} from "next-redux-wrapper";

const initialState = {
    error: null,
    token: null,
    isLoadingPadding: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE: {
            return {...state,...action.payload.loginReducer}
        }
        case actionTypes.LOGIN_ERROR:
            const error = action.payload.error
            return {...state, error}
        case actionTypes.LOGIN_REQUEST:
            return {...state, error: null}
        case actionTypes.LOGIN_SUCCESS:
            return {...state, token: action.payload.token}
        case actionTypes.LOGOUT:
            return {...state, error: null, token: null}
        default:
            return state
    }
}