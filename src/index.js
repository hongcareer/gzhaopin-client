import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {HashRouter,Link,Switch,Route} from 'react-router-dom';
import Login from './containers/login';
import Main from './containers/main';
import Register from './containers/register';
import store from './redux/store';
import './test/socketio_test';
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/' component={Main}/>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)