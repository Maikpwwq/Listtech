/* import React from 'react'; */
import Actions from '../actions/actions';

const estadoReposo = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}];

const autorizacionReducer = (estado = estadoReposo, accion) => {
    switch (accion.type) {
        case 'SET_USUARIO':
            return {
                ...estado,
                usuario: accion.payload                
            }
        case 'SET_INICIO_SESION':
            return {
                ...estado,
                inicioSesion: accion.payload
            }
        default:
            return estado;
    }
}

export default autorizacionReducer; 