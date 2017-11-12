import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import PostList from './posts/containers/PostListContainer';
import PostNew from './post/components/PostNew';
import postsReducer from './posts/reducers';
import registerServiceWorker from './registerServiceWorker';

const appReducer = combineReducers({
    posts: postsReducer
});

let store = createStore(appReducer, applyMiddleware(promise));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <Route path="/posts/new" component={PostNew}/>
                    <Route path="/" component={PostList}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
