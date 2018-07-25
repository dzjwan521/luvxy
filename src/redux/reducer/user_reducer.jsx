import { LOGININ, LOGINOUT } from "../action/user_actionType";

const initialState = {
    info:null
}



export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGININ:
            return Object.assign({}, state, {
                info: action.info
            }) 

        case LOGINOUT:
            return Object.assign({}, state, {
                info: null
            })

        default:
            return state
    }
}
