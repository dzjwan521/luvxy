import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import { Provider } from "react-redux";
import { Route, HashRouter as Router, Switch} from 'react-router-dom'
import { BackTop } from 'antd';
import List from "./pages/List/index";
import Home from "./pages/Home/index";
import Article from "./pages/Article/index";
import Login from "./pages/Login/index";
import Signin from "./pages/Signin/index";
import Send from "./pages/Send/index";
import store from "./redux/store";
import Demo from './components/Demo'


const Notfound = ()=> {
  
    return (<div>404</div>)
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
            <BackTop visibilityHeight={0}/>
            <Switch>
              <Route exact path="/" component={List} />
              <Route path="/list/:kind" component={List} />
              <Route path="/home" component={Home} />
              <Route path="/demo" component={Demo} />
              <Route path="/login" component={Login} />
              <Route path="/signin" component={Signin} />
              <Route path="/send" component={Send} />
              <Route path="/article/:id" component={Article} />
              < Route component={Notfound} />
            </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}
export default hot(module)(App)
// export default App;

