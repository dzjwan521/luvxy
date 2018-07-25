import { delay } from 'redux-saga'
import { call, put, takeEvery, all } from 'redux-saga/effects'
import { INCREMENT, INCREMENT_ASYNC} from "../action/count_actions";
import { LOGININ, LOGININ_ASYNC } from '../action/user_actionType'



//计数器案例
export function* incrementAsync(action) {
    let num = action.num
    yield call(delay, 1000)
    yield put({ type: INCREMENT, num})
}

export function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}




//登陆
const getLocalInfo = () => {
    const user = JSON.parse(window.localStorage.getItem('user'))
    if (user) {
        return user
    } else {
        return null
    }
}

export function* loginAsync(action) {
    const loginInfo = action.info
    let info
    if (loginInfo){
        info= null
    }else{
        info= getLocalInfo()
    }
    yield call(delay, 1000)
    yield put({ type: LOGININ, info })
}

export function* watchLoginAsync() {
    yield takeEvery(LOGININ_ASYNC, loginAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
        watchLoginAsync()
    ])
}