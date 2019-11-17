/* CommonJS Modules: ES Modules: Typescript:
import * as firebase from 'firebase/app';
import 'firebase/<PACKAGE>'; */

// Initialize Firebase
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Importamos functions desde firebasebase-funcions
const functions = require('firebase-functions');
// Importamos firebase-admin para conectarnos con la base de datos
const firebase = require('firebase-admin');
// Importamos el archivo de configuración que descargamos
//const config = require('./firebase-config.json');

const config = {
    "type": process.env.FIREBASE_TYPE,
    "project_id": process.env.FIREBASE_PROJECT_ID,
    "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY,
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    "client_id": process.env.FIREBASE_CLIENT_ID,
    "auth_uri": process.env.FIREBASE_AUTH_URI,
    "token_uri": process.env.FIREBASE_TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_CERT_URL,
    "client_x509_cert_url": process.env.FIREBASE_CLIENT_CERT_URL
};

firebase.initializeApp({
    credential: firebase.credential.cert(config),
    databaseURL: 'https://listtech-28538.firebaseio.com/' // URL de nuestro proyecto
});

// creamos la función que obtiene los recursos de nuestra firebase database 
exports.api = functions.https.onRequest((req, res) => {

    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    const data = firebase.database().ref('/data') // Hacemos referencia a la base de datos

    if (req.method === 'GET') {
        data.on('value', (snapshot) => {
            const parceData = Object.keys(snapshot.val() || {}).map(key => snapshot.val()[key]);
            res.json(parceData); // El elemento resultante lo exponemos en un archivo JSON
        });
    }
});      