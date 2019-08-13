import React, { Component } from 'react';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import * as auth from "firebase/auth";
import * as database from "firebase/database";
import * as storage from "firebase/storage";  
import * as firestore from 'firebase/firebase-firestore';
// import { auth } from "./node_modules/firebase/index";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

class AuthFirebase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            error: null
        }

        // Initialize Firebase
        firebase.initializeApp({
            credential: firebase.credential.cert((firebaseConfig)),
            databaseURL: 'https://listtech-28538.firebaseio.com/' // URL de nuestro proyecto
        });       

        this.auth = this.auth.bind(this);
        this.firestore = this.firestore.bind(this);       
        this.storage = this.storage.bind(this);
        this.database = this.database.bind(this);
        this.facebookprovider = new firebase.auth.FacebookAuthProvider();
        this.googleprovider = new firebase.auth.GoogleAuthProvider();
    }

    auth = () => {
        firebase.auth()
    };

    firestore = () => {
        firebase.firestore()
    };

    storage = () => {
        firebase.storage()
    };

    database = () => {
        firebase.database()
    };

    // Lenguaje del OAuth
    lenguaje = () => {
        firebase.auth().languageCode = 'es'
    };
        
    // Facebook Provider URL de redireccionamiento de OAuth:
    facebookprovider = () => {
        new firebase.auth.FacebookAuthProvider()
    };

    //provider.addScope('https://listtech-28538.firebaseapp.com/__/auth/handler');
    //provider.addScope('user_birthday');    

    // Google Provider
    googleprovider = () => {
        new firebase.auth.GoogleAuthProvider()
    };

    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // Nombre público del proyecto: listtech@2019,
    // Correo electrónico de asistencia para proyectos: m.michael1024@gmail.com,


    root = document.getElementById('root');

    dbRef = firebase.database().ref().child('text');
    //dbRef.on('value', snap => root.innerText = snap.val());
    //firestore.settings({ timestampsInSnapshots:true })

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    logout() {
        return this.auth.signOut()
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }

    addQuote(quote) {
        if (!this.auth.currentUser) {
            return alert('Not authorized')
        }

        return this.firestore.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
            quote
        })
    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName
    }

    async getCurrentUserQuote() {
        const quote = await this.firestore.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
        return quote.get('quote')
    }
}

export default new AuthFirebase();

// export { auth, storage, database}
export { storage, database, auth, facebookprovider, googleprovider }