import authReducer from './authReducer';
import comprasReducer from './comprasReducer';
import requerimientosReducer from './requerimientosReducer';
import sesionReducer from './session';
import usuariosReducer from './user';
import mensajesReducer from './message';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    compras: comprasReducer,
    requerimientos: requerimientosReducer
    sesionState: sesionReducer,
    useuarioState: usuariosReducer,
    mensajeState: mensajesReducer,
});

export default rootReducer;