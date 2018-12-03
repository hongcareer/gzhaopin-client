import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {HashRouter,Link,Switch,Route} from 'react-router-dom';
import Login from './components/login';
import Main from './components/main';
import Register from './components/register';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/main' component={Main}/>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)