import { combineReducers } from 'redux'
import countReducer from './count_reducer'
import userReducer from './user_reducer'

export default combineReducers({
    countReducer, userReducer
})
