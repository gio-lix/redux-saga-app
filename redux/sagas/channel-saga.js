import { all,actionChannel, call, delay, put,takeEvery, take, takeLatest } from 'redux-saga/effects'
import {actionTypes, failure, loadDataSuccess, loadDataSuccessId} from "../actions";
import {getUserPost} from "../../pages/api";
import {buffers} from "redux-saga";


export function* sagaChannelDataId (action) {
    try {
        const data = yield call(getUserPost.getPostId, action.payload.id)
        yield put(loadDataSuccessId(data))
    } catch (err) {
        yield put(failure(err))
    }
}


export function* loaderChannelWatcher() {
    const requestChannel = yield actionChannel(actionTypes.LOAD_DATA_ID)
    while (true) {
        const action = yield take(requestChannel)
        yield call(sagaChannelDataId, action)
    }
}
// export function* sagaChannel() {
//     yield takeLatest(actionTypes.LOAD_DATA_ID, sagaChannelDataId)
// }