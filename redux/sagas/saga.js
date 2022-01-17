import { all, call, delay, put,takeEvery, take, takeLatest } from 'redux-saga/effects'
import { actionTypes, failure, loadDataSuccess, tickClock } from './actions'
import {getUserPost} from "../pages/api";



function* loadDataSaga() {
    try {
        const data = yield call(getUserPost.getPost)
        yield put(loadDataSuccess(data))
    } catch (err) {
        yield put(failure(err))
    }
}

// export function* loaderDataWatcher() {
//     yield takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
// }
// export function* someSageWatcher() {
//     console.log('soon will be here new saga ')
// }

function* rootSaga() {
    yield takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
    // yield all([
    //     loaderDataWatcher()
    // ])
}

export default rootSaga

