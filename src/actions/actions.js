export const setUsuario = payload => ({
    type: 'SET_USUARIO',
    payload,
});
// autorizarUsuario

export const setInicioSesion = payload => ({
    type: 'SET_INICIO_SESION',
    payload,
});

export const setEnviarForm = payload => ({
    type: 'SET_ENVIAR_FORM',
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