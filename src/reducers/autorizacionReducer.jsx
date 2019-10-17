/* import React from 'react'; */

const estadoReposo = {}

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