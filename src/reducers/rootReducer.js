import autorizacionReducer from './autorizacionReducer';
import comprasReducer from './comprasReducer';
import mensajesReducer from './mensajesReducer';
import requerimientosReducer from './requerimientosReducer';
import sesionReducer from './sesionReducer';
import usuariosReducer from './usuariosReducer';


import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    autorizacion: autorizacionReducer,
    compras: comprasReducer,
    estadoMensaje: mensajesReducer,
    requerimientos: requerimientosReducer,
    estadoSesion: sesionReducer,
    estadoUsuario: usuariosReducer,
    
});

export default rootReducer;