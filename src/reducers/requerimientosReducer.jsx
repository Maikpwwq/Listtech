/* import React from 'react'; */

const initState = {}

const requerimientosReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_REQUERIMIENTO':
            return {
                ...state,
                requerimiento: action.payload
            }

        default:
            return state;
    }
}

export default requerimientosReducer; 