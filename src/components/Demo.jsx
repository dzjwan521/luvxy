import React, { Component } from 'react';
import { increment, decrement } from "../redux/action/index";
import { INCREMENT_ASYNC} from '../redux/action/count_actions'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
class Home extends Component {
    
    handleClick(i) {
        this.props.actions.decrement(i);
    }
    clickFunc(i){
        this.props.onIncrementAsync(i);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                 </p>
                 <div>
                    {this.props.num}
                 </div>
                <button onClick={() => { this.handleClick(1) }}>decrement</button>
                <button onClick={() => { this.clickFunc(1) }}>async</button>
                 
            </div>
        );
    }
}


//由于我们这个应用太小，只有一个属性，所以只有num这个字段。
function mapStateToProps(state) {
    return { num: state.countReducer.num }
}

//mapDispatchToProps的作用是把store中的dispatch方法注入给组件
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ increment, decrement }, dispatch),
        onIncrementAsync(i) {
            dispatch({
                type: INCREMENT_ASYNC,
                num:i
            })
        },
    }
}

//这里实际上给了App两个props：num和actions，即第4步中的那段注释
export default Home = connect(mapStateToProps, mapDispatchToProps)(Home)

