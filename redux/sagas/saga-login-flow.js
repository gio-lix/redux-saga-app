import {call, put, take} from "redux-saga/effects";
import {actionTypes, logout} from "../actions";
import {clearToken, saveToken, userApi} from "../../server/user";

export function* authorize(username, password) {
    try {
        const token = yield call(userApi, username, password)
        yield put({type: actionTypes.LOGIN_SUCCESS, payload: {token}})
        return token
    } catch (err) {
        yield put({type: actionTypes.LOGIN_ERROR, payload: {err}})

    }
}


export function* SagaLoginFlow() {

    while (true) {
        const {payload} = yield take(actionTypes.LOGIN_REQUEST)
        console.log('payload ->> ->>> ->> ->>', payload)
        const token = yield call(authorize, payload.username, payload.password)

        if (token) {
            yield call(saveToken, token)
            yield take(logout)
            yield call(clearToken)
        }
    }
}