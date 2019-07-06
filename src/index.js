import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

/*import { Provider } from 'react-redux'
import createStore from './createReduxStore'
const store = createStore()
*/

import App from './containers/App';

import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';



//import Rebase from 're-base';

// Your web app's Firebase configuration
/*var firebaseConfig = {
    apiKey: "AIzaSyCPvcNLJ_cQ_JVK8aA-oYoOCrzoWdlPdFs",
    authDomain: "listtech-28538.firebaseapp.com",
    databaseURL: "https://listtech-28538.firebaseio.com",
    projectId: "listtech-28538",
    storageBucket: "",
    messagingSenderId: "485504383937",
    appId: "1:485504383937:web:4c66540a646e7776"
};*/

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
// var app = firebase.initializeApp({ ... });
// const app =
firebase.initializeApp(firebaseConfig)
//const base = Rebase.createClass(app.database())
var root = document.getElementById('root');
var dbRef = firebase.database().ref().child('text');
dbRef.on('value', snap => root.innerText = snap.val());

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
