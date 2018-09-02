import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'
import ReduxPromise from 'redux-promise'
// Components
import PostsHome from './components/posts_home';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(ReduxPromise)
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Route path="/" component={PostsHome} />
      </Fragment>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
