import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './components/users/sign_up';
import Login from './components/users/login';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, hashHistory } from 'react-router';
import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(
  hashHistory,
  store
);

const token = localStorage.getItem('token')

if (token && token.length === 30) {
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
} else {
  ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/sign_up" component={SignUp}/>
      <Route path="/login" component={Login}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
}

store.subscribe(() => {
  console.log(store.getState(), "store");
})
