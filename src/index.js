import React from 'react';
import ReactDOM from 'react-dom';

<<<<<<< HEAD
import './css/index.css';

import rootReducer from './reducers/rootReducer.jsx';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './rutas/App.js';
=======
import './index.css';

import App from './containers/App';
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
/*import Carrousel from './components/Carrousel';*/

import * as serviceWorker from './serviceWorker';

<<<<<<< HEAD
=======

/*import { Provider } from 'react-redux'
import createStore from './createReduxStore'
const store = createStore()
*/
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
//import Rebase from 're-base';
//const base = Rebase.createClass(app.database())
//export {base}

<<<<<<< HEAD
const initialState = {};
const store = createStore(rootReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);
=======
/*const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)*/

ReactDOM.render(< App />, document.getElementById('root'));
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
<<<<<<< HEAD
serviceWorker.register();
=======
serviceWorker.unregister();
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
