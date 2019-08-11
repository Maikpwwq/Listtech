// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import 'firebase/firebase-firestore';
import { auth } from "./node_modules/firebase/index";

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

class AuthFirebase {
    constructor() {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        this.auth = firebase.auth()
        this.db = firebase.firestore()
       
        this.storage = firebase.storage();
        this.database = firebase.database();
        this.provider = new firebase.auth.FacebookAuthProvider();
        this.googleprovider = new firebase.auth.GoogleAuthProvider();
    }

    root = document.getElementById('root');

    dbRef = firebase.database().ref().child('text');
    //dbRef.on('value', snap => root.innerText = snap.val());
    //db.settings({ timestampsInSnapshots:true })

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

        return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
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
        const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
        return quote.get('quote')
    }
}

export default new AuthFirebase();
export default new provider();
export default new googleprovider();

export default storage();
export default database();
export default auth();