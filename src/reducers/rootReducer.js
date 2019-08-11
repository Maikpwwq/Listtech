import authReducer from './authReducer';
import comprasReducer from './comprasReducer';
import requerimientosReducer from './requerimientosReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    compras: comprasReducer,
    requerimientos: requerimientosReducer
});

export default rootReducer;