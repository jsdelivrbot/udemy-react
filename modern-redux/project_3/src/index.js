import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReduxPromise from 'redux-promise'
// Components
import PostsHome from './components/posts_home'
import NewPost from './components/new_post'
// Reducers
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(ReduxPromise)
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route path="/posts/new" component={NewPost} />
          <Route path="/" component={PostsHome} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
