import React, { Component } from 'react';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as app from "firebase/app";

// Add the Firebase products that you want to use
import * as auth from "firebase/auth";
import * as database from "firebase/database";
import * as storage from "firebase/storage";    
import * as firestore from "firebase/firebase-firestore";

// Initialize Firebase
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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

class Firebase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            error: null
        }

        // Initialize Firebase
        app.initializeApp({
            credential: app.credential.cert((firebaseConfig)),
            databaseURL: 'https://listtech-28538.firebaseio.com/' // URL de nuestro proyecto
        });       

        // * this.serverValue = app.database.ServerValue;
        this.emailAuthProvider = new app.auth.EmailAuthProvider;

        this.auth = this.auth.bind(this);
        this.firestore = this.firestore.bind(this);       
        this.storage = this.storage.bind(this);
        this.db = this.database.bind(this);

        // Facebook Provider URL de redireccionamiento de OAuth:

        //provider.addScope('https://listtech-28538.firebaseapp.com/__/auth/handler');
        //provider.addScope('user_birthday');    

        // Google Provider


        this.facebookProvider = new app.auth.FacebookAuthProvider();
        this.googleProvider = new app.auth.GoogleAuthProvider();
    }

    auth = () => {
        app.auth()
    };

    firestore = () => {
        app.firestore()
        app.firestore.settings({ timestampsInSnapshots: true })
    };

    storage = () => {
        app.storage()
    };

    db = () => {
        app.database()
    };

    // Lenguaje del OAuth
    lenguaje = () => {
        app.auth().languageCode = 'es'
    };
        
    
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // Nombre público del proyecto: listtech@2019,
    // Correo electrónico de asistencia para proyectos: m.michael1024@gmail.com,

    root = document.getElementById('root');

    dbRef = app.database().ref().child('text');
    //dbRef.on('value', snap => root.innerText = snap.val());

    //     

    // *** Auth API ***

    doInicioSesion (email, clave) {
        return this.auth.signInWithEmailAndPassword(email, clave)
    }

    async register(name, email, clave) {
        await this.auth.createUserWithEmailAndPassword(email, clave)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }

    doCrearUsuarioConEmailClave = (email, clave) =>
        this.auth.createUserWithEmailAndPassword(email, clave);

    doIniciarSesionConEmailClave = (email, clave) =>
        this.auth.createUserWithEmailAndPassword(email, clave);

    doRegistraConEmailClave = (email, clave) =>
        this.auth.signInWithEmailAndPassword(email, clave);

    doInicioSesionConFacebook = () =>
        this.auth.logInWithPopup(this.facebookProvider);

    doInicioSesionConGmail = () =>
        this.auth.logInWithPopup(this.googleProvider);

    doRegistrarConGoogle = () =>
        this.auth.signInWithPopup(this.googleProvider);

    doRegistrarConFacebook = () =>
        this.auth.signInWithPopup(this.facebookProvider);

    doCerrarSesion = () => { return this.auth.signOut() };

    doCambioClave = email => this.auth.sendPasswordResetEmail(email);

    doOlvidoClave = email => this.auth.sendPasswordResetEmail(email);

    doActualizarClave = clave =>
        this.auth.currentUser.actualizarClave(clave);

    doEnviarEmailVerificacion = () =>
        this.auth.currentUser.sendEmailVerification({
            url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
        });
        
    addNota(nota) {
        if (!this.auth.currentUser) {
            return alert('No está autorizado')
        }

        return this.firestore.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
            nota
        })
    }

    async getActualNotaUsuario() {
        const nota = await this.firestore.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
        return nota.get('nota')
    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName
    }

    // *** Merge Auth and DB User API *** //
    onAutorizarUsuarioListener = (next, fallback) =>
        this.auth.onAuthStateChanged(autorizarUsuario => {
            if (autorizarUsuario) {
                this.user(autorizarUsuario.uid)
                    .once('value')
                    .then(snapshot => {
                        const dbUser = snapshot.val();
                        // default empty roles
                        if (!dbUser.roles) {
                            dbUser.roles = {};
                        }
                        // merge auth and db user
                        autorizarUsuario = {
                            uid: autorizarUsuario.uid,
                            email: autorizarUsuario.email,
                            emailVerified: autorizarUsuario.emailVerified,
                            providerData: autorizarUsuario.providerData,
                            ...dbUser,
                        };
                        next(autorizarUsuario);
                    });
            } else {
                fallback();
            }
        });

    // *** User API ***
    usuario = uid => this.db.ref(`usuarios/${uid}`);
    usuarios = () => this.db.ref('usuarios');

    // *** Message API ***
    mensaje = uid => this.db.ref(`mensajes/${uid}`);
    mensajes = () => this.db.ref('mensajes');
    
    // *** Productos API ***
    producto = uid => this.db.ref(`producto/${uid}`);
    productos = () => this.db.ref('producto');

    // *** Requerimientos API ***
    requerimiento = uid => this.db.ref(`requerimientos/${uid}`);
    requerimientos = () => this.db.ref('requerimientos');

    // listaUsuariosMensajes/:id  /objetoUsuarioMensaje/:id/  /perfil /: id /  /fichaProducto/: id /  /detalleProducto/: id /
}

export default new Firebase();

export { storage, database, auth } //, facebookProvider, googleProvider