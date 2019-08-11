/* import React from 'react'; */

const initState = {}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload                
            }
        case 'SET_LOGIN':
            return {
                ...state,
                login: action.payload
            }
        default:
            return state;
    }
}

export default authReducer; 