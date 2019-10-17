const INITIAL_estado = {
    mensajes: null,
    limite: 5,
};

const aplicarSetMensajes = (estado, accion) => ({
    ...estado,
    messages: accion.messages,
});

const aplicarSetLimiteMensajes = (estado, accion) => ({
    ...estado,
    limite: accion.limite,
});

function mensajeReducer(estado = INITIAL_estado, accion) {
    switch (accion.type) {
        case 'SET_MENSAJES': {
            return aplicarSetMensajes(estado, accion);
        }
        case 'SET_LIMITE_MENSAJES': {
            return aplicarSetLimiteMensajes(estado, accion);
        }
        default:
            return estado;
    }
}

export default mensajeReducer;