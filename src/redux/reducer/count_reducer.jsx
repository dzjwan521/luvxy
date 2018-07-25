import { INCREMENT, DECREMENT} from "../action/count_actions";

const initialState = {
    num:0
}

export default function countReducer(state = initialState, action){
    switch (action.type) {
        case INCREMENT:
            cout(state, action)
            break
        case DECREMENT:
            jianfa(state, action)
            break

        default:
            return state
            break
    }
}
function cout(state, action){
    console.log(action)
    return Object.assign({}, state, {
        num: state.num + action.num
    })
}

function jianfa(state, action) {
    console.log(action)
    return Object.assign({}, state, {
        num: state.num - action.num
    })
}