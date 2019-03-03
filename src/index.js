import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk'
import styles from './styles/main.scss';

import App from './components/app';
import reducers from './reducers';

const reducerObj = {
    reducers,
    form
};
const combineAndReduce = combineReducers(reducerObj);

const store = createStore(
    combineAndReduce,
    applyMiddleware(thunk)
);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);
