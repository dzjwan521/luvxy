import * as types from './count_actions'
import { LOGININ, LOGINOUT } from './user_actionType'
export function increment(num) {
    return {
        type: types.INCREMENT,
        num
    }
}

export function decrement(num) {
    return {
        type: types.DECREMENT,
        num
    }
}

export function loginout() {
    return {
        type: LOGINOUT,
    }
}


export function login(info) {
    return {
        type: LOGININ,
        info
    }
}

