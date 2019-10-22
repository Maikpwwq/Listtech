import React from 'react';
import ReactDOM from 'react-dom';

import './styles/css/index.css';

import rootReducer from './reducers/rootReducer.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './rutas/App.js';

import * as serviceWorker from './serviceWorker';

// Crear la "tienda" de productos y servicios
const initialState = {};
const tienda = createStore(rootReducer, initialState, applyMiddleware(thunk));

//import Rebase from 're-base';
//const base = Rebase.createClass(app.database())
//export {base}

export default tienda;

// Llamado a pantalla de la pagina de sesiones y rutas "App.js "
ReactDOM.render(
    <Provider store={tienda}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
//serviceWorker.unregister();
