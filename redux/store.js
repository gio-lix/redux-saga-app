import {applyMiddleware, combineReducers, createStore} from "redux";
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

import {fetchDataReducer} from "./reducers/reducer";
import {loginReducer} from "./reducers/loginReducer";
import {albumsReducers} from "./reducers/albums-reducers";
import {albumsSaga} from "./sagas/albums-saga";
import {SagaLoginFlow} from "./sagas/saga-login-flow";
import {postReducer} from "./reducers/post-reducer";
import {postsSaga} from "./sagas/posts-saga";

const RootReducer = combineReducers({
    fetchDataReducer,
    loginReducer,
    postReducer,
    albumsReducers,
})
// const RootReducer = (state, action) => {
//     if (action.type === HYDRATE) {
//         const nextState = {
//             ...state, // use previous state
//             ...action.payload, // apply delta from hydration
//         };
//         return nextState;
//     } else {
//         return combinedReducer(state, action);
//     }
// };

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const {composeWithDevTools} = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

export const makeStore = (context) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(RootReducer, bindMiddleware([sagaMiddleware]))
    // store.sagaTask = sagaMiddleware.run(rootSaga)
    // store.sagaTask = sagaMiddleware.run(loaderChannelWatcher)
    store.sagaTask = sagaMiddleware.run(SagaLoginFlow)
    // store.sagaTask = sagaMiddleware.run(albumsSaga)
    store.sagaTask = sagaMiddleware.run(postsSaga)
    return store
}

export const wrapper = createWrapper(makeStore, {debug: true})



