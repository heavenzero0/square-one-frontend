import React from 'react';
import ReactDOM from'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App';
import reducers from './store/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter><App/></BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
