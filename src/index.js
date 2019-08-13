import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';

import rootReducer from './reducers/rootReducer.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './rutas/App.js';

import * as serviceWorker from './serviceWorker';

//import Rebase from 're-base';
//const base = Rebase.createClass(app.database())
//export {base}

const initialState = {};
const store = createStore(rootReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
//serviceWorker.unregister();
