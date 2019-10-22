import { useState, useEffect } from 'react';
import * as firebase from '../init-firebase.js'

/*
import { connect } from 'react-redux';

// importar Propiedades usuario  
import { setUsuario, setInicioSesion, } from '../actions/actions.js';

// Asignar propiedades de inicio de sesion

const mapDispatchToProps = {
    setUsuario,
    setInicioSesion,
}

export default connect(null, mapDispatchToProps)();
*/

const useFirebaseUsuario = () => {            
    
    // Asignar propiedades de inicio de sesion id: usuario registrados por Firebase

    const [firebaseInitialized, setFirebaseInitialized] = useState(false);

    useEffect(() => {
        firebase.isInitialized().then(val => {
            setFirebaseInitialized(val)           
        })
    }, []);

    useEffect(() => {
        firebase().onAuthStateChanged((usuario) => {
            if (usuario) {
                this.props.setUsuario(usuario);
                this.props.setInicioSesion(true);                
            }            
        });
    }, []);


    return firebaseInitialized
} 

export default useFirebaseUsuario;