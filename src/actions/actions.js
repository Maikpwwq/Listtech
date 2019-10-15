export const setUsuario = payload => ({
    type: 'SET_USER',
    payload,
});

export const setInicioSesion = payload => ({
    type: 'SET_LOGIN',
    payload,
});

export const setEnviarForm = payload => ({
    type: 'SET_ENVIARFORM',
    payload,
});

export const setRequerimiento = payload => ({
    type: 'SET_REQUERIMIENTO',
    payload,
});

export const setAceptar = payload => ({
    type: 'SET_PAGAR',
    payload,
});

export const setRechazar = payload => ({
    type: 'SET_RECHAZAR',
    payload,
});

export const addCompra = (compra) => {
    return (dispatchEvent, getState) => {
        // async call to database
        dispatchEvent({
            type: 'ADD_COMPRA',
            compra: 'compra',
        });
    }
};