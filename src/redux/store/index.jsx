import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
sagaMiddleware.run(rootSaga)


console.log(store.getState())
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)
// 停止监听 state 更新          
unsubscribe();
 export default store
