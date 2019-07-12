import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './containers/App';
/*import Carrousel from './components/Carrousel';*/

import * as serviceWorker from './serviceWorker';


/*import { Provider } from 'react-redux'
import createStore from './createReduxStore'
const store = createStore()
*/
//import Rebase from 're-base';
//const base = Rebase.createClass(app.database())
//export {base}

/*const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)*/

ReactDOM.render(< App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
