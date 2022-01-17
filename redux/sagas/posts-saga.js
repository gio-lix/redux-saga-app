import {call, put, take, takeEvery, takeLatest} from "redux-saga/effects";
import {actionTypes} from "../actions";
import {getUserPost} from "../../pages/api";


export function* takePostById (action) {
    try {
        const data = yield call(getUserPost.getPostById,action.payload.postId )
         yield put({type: actionTypes.POST_FETCH_SUCCESS_BY_ID, payload: data})
    } catch (err) {
        console.log(err)
    }
}


export function* fetchPostsDataFromId() {
    // while (true) {
    //     const action = yield take(actionTypes.POST_FETCH_REQUEST_BY_ID)
    //     yield call(takePostById, action)
    // }
    yield takeLatest(actionTypes.POST_FETCH_REQUEST_BY_ID,takePostById )
}

export function* postsSaga() {
    yield fetchPostsDataFromId()
}