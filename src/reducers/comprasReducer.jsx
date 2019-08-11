/* import React from 'react'; */

const initState = {}

const comprasReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_PAGAR':
            return {
                ...state,
                pagar: action.payload
            }
        case 'SET_RECHAZAR':
            return {
                ...state,
                rechazar: action.payload
            }
        default:
            return state;
    }
}

export default comprasReducer; 