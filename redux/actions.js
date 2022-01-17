export const actionTypes = {
    ALBUMS_REQUEST: 'ALBUMS_REQUEST',
    ALBUMS_SUCCESS: 'ALBUMS_SUCCESS',

    FAILURE: 'FAILURE',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',


    LOAD_DATA: 'LOAD_DATA',
    LOAD_DATA_ID: 'LOAD_DATA_ID',
    LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
    LOAD_DATA_SUCCESS_ID: 'LOAD_DATA_SUCCESS_ID',

    START_CLOCK: 'START_CLOCK',
    TICK_CLOCK: 'TICK_CLOCK',
    HYDRATE: 'HYDRATE',

    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGOUT: 'LOGOUT',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_ERROR: 'LOGIN_ERROR',

    POST_FETCH_REQUEST_BY_ID: 'POST_FETCH_REQUEST_BY_ID',
    POST_FETCH_SUCCESS_BY_ID: 'POST_FETCH_SUCCESS_BY_ID',
    POST_FETCH_FAILED: 'USER_POST_FETCH_FAILED'

}

export const postsFetchDataById = (postId) => ({type: actionTypes.POST_FETCH_REQUEST_BY_ID, payload: postId})

export const getAlbumsData = (id) => ({type:actionTypes.ALBUMS_REQUEST, payload: {id: id} })

export const login = (data) => ({type: actionTypes.LOGIN_REQUEST, payload: data})
export const logout = () => ({type: actionTypes.LOGOUT})


export const loadData = () => ({ type: actionTypes.LOAD_DATA})
export const loadDataSuccess = (data) => ({type: actionTypes.LOAD_DATA_SUCCESS,data })

export const loadDataId = (id) => ({ type: actionTypes.LOAD_DATA_ID, payload: {id: id}})
export const loadDataSuccessId = (data) => ( { type: actionTypes.LOAD_DATA_SUCCESS_ID, data})
export const failure = (error) => ({type: actionTypes.FAILURE, error, })





