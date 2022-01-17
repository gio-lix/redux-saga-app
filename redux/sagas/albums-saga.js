import {takeLatest, call, put, actionChannel, take} from "redux-saga/effects";
import {actionTypes} from "../actions";
import {getUserPost} from "../../pages/api";
import {channel} from "redux-saga";



export function* takeAlbums(action) {
    try {
        const data = yield call(getUserPost.getAlbums, action.payload.id)
        yield put({type: actionTypes.ALBUMS_SUCCESS, payload: data})
    } catch (err) {
        console.log(err)
    }
}


export function* albumsSaga() {
    // const requestChannel = yield actionChannel(actionTypes.ALBUMS_REQUEST)
    // while (true) {
    //     const action = yield take(requestChannel)
    //     yield call(takeAlbums, action)
    // }
    yield takeLatest(actionTypes.ALBUMS_REQUEST,takeAlbums )
}